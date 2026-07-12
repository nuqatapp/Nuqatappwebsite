import { APPS_DATA, type App, type AppCategory } from "@shared/schema";

export interface IStorage {
  getApps(): Promise<App[]>;
  getAppById(id: string): Promise<App | undefined>;
  getAppsByCategory(category: AppCategory): Promise<App[]>;
  searchApps(query: string): Promise<App[]>;
}

export class MemStorage implements IStorage {
  private apps: Map<string, App>;

  constructor() {
    this.apps = new Map();
    APPS_DATA.forEach(app => {
      this.apps.set(app.id, app);
    });
  }

  async getApps(): Promise<App[]> {
    return Array.from(this.apps.values());
  }

  async getAppById(id: string): Promise<App | undefined> {
    return this.apps.get(id);
  }

  async getAppsByCategory(category: AppCategory): Promise<App[]> {
    return Array.from(this.apps.values()).filter(app => app.category === category);
  }

  async searchApps(query: string): Promise<App[]> {
    const trimmed = query.slice(0, 100).trim();
    if (!trimmed) return [];
    const lowerQuery = trimmed.toLowerCase();
    return Array.from(this.apps.values()).filter(app => 
      app.name.toLowerCase().includes(lowerQuery) ||
      app.nameArabic.includes(trimmed) ||
      app.description.toLowerCase().includes(lowerQuery) ||
      app.tech.some(t => t.toLowerCase().includes(lowerQuery))
    );
  }
}

export const storage = new MemStorage();
