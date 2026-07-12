import type { Express } from "express";
import type { Server } from "http";
import { rateLimit } from "express-rate-limit";
import { storage } from "./storage";
import { appCategorySchema } from "@shared/schema";

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.use("/api/", apiLimiter);
  
  app.get("/api/apps", async (req, res) => {
    try {
      const { category, search } = req.query;
      
      let apps;
      
      if (search && typeof search === "string") {
        apps = await storage.searchApps(search);
      } else if (category && typeof category === "string") {
        const parsed = appCategorySchema.safeParse(category);
        if (parsed.success) {
          apps = await storage.getAppsByCategory(parsed.data);
        } else {
          apps = await storage.getApps();
        }
      } else {
        apps = await storage.getApps();
      }
      
      res.json(apps);
    } catch (error) {
      console.error("Error fetching apps:", error);
      res.status(500).json({ error: "Failed to fetch apps" });
    }
  });

  app.get("/api/contact", (_req, res) => {
    const user = "nuqat.app";
    const domain = "gmail.com";
    res.json({ email: `${user}@${domain}` });
  });

  app.get("/api/apps/:id", async (req, res) => {
    try {
      const app = await storage.getAppById(req.params.id);
      
      if (!app) {
        return res.status(404).json({ error: "App not found" });
      }
      
      res.json(app);
    } catch (error) {
      console.error("Error fetching app:", error);
      res.status(500).json({ error: "Failed to fetch app" });
    }
  });

  return httpServer;
}
