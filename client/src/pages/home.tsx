import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Mail, Smartphone, Globe, Gamepad2 } from "lucide-react";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { APPS_DATA, CONTACT_EMAIL, SITE_CONFIG, type App, type AppCategory } from "@shared/schema";

function useContactEmail() {
  return CONTACT_EMAIL;
}
import logoPath from "../assets/logo-nuqat.jpg";

const CATEGORIES: { value: AppCategory | "all"; label: string }[] = [
  { value: "all", label: "الكل" },
  { value: "learn", label: "تعليم" },
  { value: "games", label: "ألعاب" },
  { value: "family", label: "عائلة" },
  { value: "utilities", label: "أدوات" },
  { value: "business", label: "أعمال" },
];

function getPlatformIcon(platform: string) {
  if (platform.toLowerCase().includes("mobile")) {
    return <Smartphone className="w-4 h-4" />;
  }
  if (platform.toLowerCase().includes("game")) {
    return <Gamepad2 className="w-4 h-4" />;
  }
  return <Globe className="w-4 h-4" />;
}

function StatusBadge({ status }: { status: App["status"] }) {
  const variants: Record<App["status"], { label: string; className: string }> = {
    live: { label: "متاح", className: "bg-green-500 text-white" },
    beta: { label: "تجريبي", className: "bg-amber-500 text-white" },
    "coming-soon": { label: "قريباً", className: "bg-slate-400 text-white" },
  };
  
  const { label, className } = variants[status];
  
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${className}`}>
      {label}
    </span>
  );
}

interface AppCardProps {
  app: App;
  index: number;
}

function AppCard({ app, index }: AppCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/${app.slug}`}>
        <Card
          data-testid={`card-${app.id}`}
          className="relative overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-card border-border group"
        >
        <div 
          className="absolute top-0 left-0 right-0 h-1 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"
          style={{ backgroundColor: app.color }}
        />
        
        <div className="p-6" dir="rtl">
          {app.iconUrl ? (
            <div className="w-12 h-12 rounded-full mb-4 overflow-hidden transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <img src={app.iconUrl} alt="" className="w-full h-full object-cover" />
            </div>
          ) : (
            <div 
              className="w-12 h-12 rounded-full mb-4 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              style={{ backgroundColor: app.color }}
            >
              {getPlatformIcon(app.platform)}
            </div>
          )}
          
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground font-arabic">
              {app.nameArabic}
            </h3>
            
            <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed font-arabic">
              {app.descriptionArabic}
            </p>
            
            <div className="flex items-center gap-2 flex-wrap pt-4 border-t border-border mt-4">
              <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 bg-muted rounded-md text-muted-foreground font-arabic">
                {getPlatformIcon(app.platform)}
                {app.platformArabic}
              </span>
              <StatusBadge status={app.status} />
            </div>
          </div>
        </div>
        </Card>
      </Link>
    </motion.div>
  );
}

function GridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4].map((i) => (
        <Card key={i} className="p-6 animate-pulse">
          <div className="w-12 h-12 rounded-full bg-muted mb-4" />
          <div className="h-6 bg-muted rounded w-3/4 mb-2" />
          <div className="h-4 bg-muted rounded w-full mb-1" />
          <div className="h-4 bg-muted rounded w-2/3 mb-4" />
          <div className="flex gap-2 pt-4 border-t border-border">
            <div className="h-6 bg-muted rounded w-20" />
            <div className="h-6 bg-muted rounded w-16" />
          </div>
        </Card>
      ))}
    </div>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<AppCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const contactEmail = useContactEmail();

  const apps: App[] = APPS_DATA;
  const isLoading = false;

  const filteredApps = useMemo(() => {
    return apps.filter((app) => {
      const matchesCategory = activeFilter === "all" || app.category === activeFilter;
      const matchesSearch = searchQuery === "" || 
        app.nameArabic.includes(searchQuery) ||
        app.descriptionArabic.includes(searchQuery) ||
        app.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [apps, activeFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="text-center pt-12 pb-6 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src={logoPath} 
            alt="شعار نقاط" 
            className="h-20 mx-auto mb-4 object-contain"
            data-testid="img-logo"
          />
          <h1 
            className="text-5xl sm:text-6xl font-bold text-primary font-arabic mb-2"
            data-testid="text-title"
          >
            نقاط
          </h1>
          <p 
            className="text-lg sm:text-xl text-muted-foreground font-arabic"
            data-testid="text-tagline"
          >
            {SITE_CONFIG.tagline.ar}
          </p>
        </motion.div>
      </header>

      {/* Filter Bar */}
      <nav className="max-w-4xl mx-auto px-4 py-6 w-full">
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <Button
                key={cat.value}
                data-testid={`filter-${cat.value}`}
                variant={activeFilter === cat.value ? "default" : "outline"}
                size="sm"
                className="rounded-full font-arabic"
                onClick={() => setActiveFilter(cat.value)}
              >
                {cat.label}
              </Button>
            ))}
          </div>
          
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              data-testid="input-search"
              type="search"
              placeholder="ابحث عن تطبيق..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-9 w-48 sm:w-56 rounded-full bg-card border-border focus:border-accent text-right font-arabic"
              dir="rtl"
            />
          </div>
        </motion.div>
      </nav>

      {/* App Grid */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-8 w-full">
        {isLoading ? (
          <GridSkeleton />
        ) : filteredApps.length === 0 ? (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-xl text-muted-foreground font-arabic mb-2">لا توجد تطبيقات</p>
            <p className="text-muted-foreground/70 font-arabic">جرّب فلتر أو بحث مختلف</p>
          </motion.div>
        ) : (
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-testid="app-grid"
          >
            <AnimatePresence mode="popLayout">
              {filteredApps.map((app, index) => (
                <AppCard
                  key={app.id}
                  app={app}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-10 px-4 text-muted-foreground text-sm border-t border-border bg-card">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="mb-2 font-arabic">صُنع بحُب في نقاط</p>
          {contactEmail && (
            <a 
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              data-testid="link-email"
            >
              <Mail className="w-4 h-4" />
              {contactEmail}
            </a>
          )}
        </motion.div>
      </footer>
    </div>
  );
}
