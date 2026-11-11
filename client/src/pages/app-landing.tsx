import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Globe, Gamepad2, Download, ExternalLink } from "lucide-react";
import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { APPS_DATA, type App } from "@shared/schema";

function getAppIcon(platform: string, color: string, iconUrl?: string) {
  if (iconUrl) {
    return (
      <div className="w-20 h-20 rounded-md overflow-hidden shadow-lg">
        <img src={iconUrl} alt="" className="w-full h-full object-cover" />
      </div>
    );
  }

  let Icon = Globe;
  if (platform.toLowerCase().includes("mobile")) Icon = Smartphone;
  if (platform.toLowerCase().includes("game")) Icon = Gamepad2;

  return (
    <div
      className="w-20 h-20 rounded-md flex items-center justify-center text-white shadow-lg"
      style={{ backgroundColor: color }}
    >
      <Icon className="w-10 h-10" />
    </div>
  );
}

function PhoneMockup({ color, iconUrl }: { color: string; iconUrl?: string }) {
  return (
    <div className="flex justify-center py-8">
      <div className="relative w-56 h-[420px]">
        <div
          className="absolute inset-0 rounded-[2.5rem] border-[6px] border-foreground/20 bg-muted/30 shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-foreground/20 rounded-b-2xl" />
          <div className="flex flex-col items-center justify-center h-full gap-4 p-6">
            {iconUrl ? (
              <div className="w-16 h-16 rounded-md overflow-hidden">
                <img src={iconUrl} alt="" className="w-full h-full object-cover" />
              </div>
            ) : (
              <div
                className="w-16 h-16 rounded-md flex items-center justify-center"
                style={{ backgroundColor: color }}
              >
                <Smartphone className="w-8 h-8 text-white" />
              </div>
            )}
            <div className="space-y-2 w-full">
              <div className="h-3 rounded-full w-full" style={{ backgroundColor: `${color}30` }} />
              <div className="h-3 rounded-full w-3/4 mx-auto" style={{ backgroundColor: `${color}20` }} />
              <div className="h-3 rounded-full w-5/6 mx-auto" style={{ backgroundColor: `${color}15` }} />
            </div>
            <div className="mt-4 space-y-3 w-full">
              <div className="h-8 rounded-md w-full" style={{ backgroundColor: `${color}15` }} />
              <div className="h-8 rounded-md w-full" style={{ backgroundColor: `${color}10` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppLandingSkeleton() {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      <div className="max-w-3xl mx-auto px-4 py-16 space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-md bg-muted" />
          <div className="flex-1 space-y-2">
            <div className="h-10 bg-muted rounded w-1/3" />
            <div className="h-6 bg-muted rounded w-1/4" />
          </div>
        </div>
        <div className="h-[420px] bg-muted rounded-3xl w-56 mx-auto" />
        <div className="space-y-4">
          <div className="h-8 bg-muted rounded w-1/4" />
          <div className="h-4 bg-muted rounded w-full" />
          <div className="h-4 bg-muted rounded w-3/4" />
        </div>
      </div>
    </div>
  );
}

export default function AppLanding() {
  const params = useParams<{ slug: string }>();

  const apps: App[] = APPS_DATA;

  const app = apps.find((a) => a.slug === params.slug);

  if (!app) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center" dir="rtl">
          <h1 className="text-2xl font-bold text-primary mb-4 font-arabic">التطبيق غير موجود</h1>
          <p className="text-muted-foreground mb-6 font-arabic">لم نتمكن من العثور على هذا التطبيق</p>
          <Link href="/">
            <Button className="font-arabic gap-2">
              <ArrowRight className="w-4 h-4" />
              العودة للرئيسية
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const hasAppStore = !!app.appStoreUrl;
  const hasPlayStore = !!app.playStoreUrl;
  const hasWebLink = app.link && app.link !== '#';

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between" dir="rtl">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2 font-arabic" data-testid="button-back-home">
              <ArrowRight className="w-4 h-4" />
              نقاط
            </Button>
          </Link>
          {hasPlayStore ? (
            <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="gap-2 font-arabic" data-testid="button-download-header">
                <Download className="w-4 h-4" />
                حمّله من Google Play
              </Button>
            </a>
          ) : hasAppStore ? (
            <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="gap-2 font-arabic" data-testid="button-download-header">
                <Download className="w-4 h-4" />
                حمّل الآن
              </Button>
            </a>
          ) : hasWebLink ? (
            <a href={app.link} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="gap-2 font-arabic" data-testid="button-download-header">
                <ExternalLink className="w-4 h-4" />
                جرّب الآن
              </Button>
            </a>
          ) : (
            <Button size="sm" className="gap-2 font-arabic" disabled data-testid="button-download-header">
              <Download className="w-4 h-4" />
              قريباً
            </Button>
          )}
        </div>
      </header>

      <main className="flex-1">
        <section className="py-12 px-4" dir="rtl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-5 mb-2">
              {getAppIcon(app.platform, app.color, app.iconUrl)}
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-primary font-arabic" data-testid="text-app-title">
                  {app.nameArabic}
                </h1>
                <p className="text-muted-foreground font-arabic mt-1">{app.platformArabic}</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="max-w-3xl mx-auto"
          >
            <PhoneMockup color={app.color} iconUrl={app.iconUrl} />
          </motion.div>
        </section>

        <section className="py-16 px-4" dir="rtl">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary font-arabic mb-6" data-testid="text-why-title">
              لماذا {app.nameArabic}؟
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed font-arabic" data-testid="text-why-content">
              {app.whyArabic}
            </p>
          </motion.div>
        </section>

        <section className="py-16 px-4 bg-muted/30" dir="rtl">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary font-arabic mb-6" data-testid="text-how-title">
              كيف يعمل؟
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed font-arabic mb-8" data-testid="text-how-content">
              {app.howArabic}
            </p>
            <div className="flex flex-wrap gap-3">
              {app.tech.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="px-4 py-2 text-base"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        </section>

        {app.disclaimer && (
          <section className="py-10 px-4" style={{ backgroundColor: app.color }} dir="rtl">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-white/90 font-arabic text-lg">
                {app.disclaimer}
              </p>
            </div>
          </section>
        )}

        <section className="py-16 px-4 text-center" dir="rtl">
          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {hasPlayStore ? (
              <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer" data-testid="link-google-play">
                <Button size="lg" className="gap-3 font-arabic text-lg rounded-full px-8">
                  <Download className="w-5 h-5" />
                  حمّله من Google Play
                </Button>
              </a>
            ) : hasAppStore ? (
              <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer" data-testid="link-app-store-badge">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-14 mx-auto"
                />
              </a>
            ) : hasWebLink ? (
              <a href={app.link} target="_blank" rel="noopener noreferrer" data-testid="link-web-app">
                <Button size="lg" className="gap-3 font-arabic text-lg">
                  <ExternalLink className="w-5 h-5" />
                  جرّب الآن
                </Button>
              </a>
            ) : (
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-md bg-muted text-muted-foreground font-arabic" data-testid="badge-coming-soon">
                <Download className="w-5 h-5" />
                {app.status === "coming-soon" ? "قريباً على المتاجر" : "رابط التحميل قريباً"}
              </div>
            )}
          </motion.div>
        </section>
      </main>

      <footer className="py-8 px-4 border-t border-border bg-card" dir="rtl">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-arabic">
            © 2026 نقاط. جميع الحقوق محفوظة.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link href={`/${app.slug}/privacy-ar`}>
              <Button variant="ghost" size="sm" className="font-arabic" data-testid="link-privacy-ar">
                سياسة الخصوصية
              </Button>
            </Link>
            <Link href={`/${app.slug}/privacy-en`}>
              <Button variant="ghost" size="sm" data-testid="link-privacy-en">
                Privacy Policy
              </Button>
            </Link>
            {hasPlayStore && (
              <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer" data-testid="link-google-play-footer">
                <Button variant="outline" size="sm" className="gap-2 font-arabic">
                  <Download className="w-4 h-4" />
                  Google Play
                </Button>
              </a>
            )}
            {hasAppStore && (
              <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-10"
                  data-testid="img-app-store-footer"
                />
              </a>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
