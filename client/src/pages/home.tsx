import type { CSSProperties, MouseEvent } from "react";
import { Mail, ArrowLeft, Play, Apple } from "lucide-react";
import { Link } from "wouter";
import { APPS_DATA, CONTACT_EMAIL, SITE_CONFIG, SOCIAL_LINKS } from "@shared/schema";
// Original brand assets, used as supplied: never redrawn, recoloured or reshaped.
import logoMaster from "../assets/nuqat-logo.png";
import reliefNarrowFade from "../assets/relief-narrow-fade.webp";
import reliefMediumFade from "../assets/relief-medium-fade.webp";
import bandCharcoal from "../assets/band-charcoal.webp";
import screenCheckIn from "../assets/gurb-screen-checkin.png";
import screenBackers from "../assets/gurb-screen-backers.png";
import screenMyCare from "../assets/gurb-screen-care.png";

/** Scroll to an in-page section without touching the URL (works with path and hash routing). */
function scrollToId(id: string) {
  return (e: MouseEvent) => {
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };
}

/** The Nuqat mark: the original artwork with only its paper background lifted (brand kit master). */
function NuqatLogo({ height }: { height: number }) {
  return <img src={logoMaster} alt="شعار نقاط" style={{ height, width: "auto" }} className="block shrink-0" />;
}

/** Approved heritage relief, shown as supplied: solid at the right, dissolving to the left.
 *  The mask only feathers the paper's own edges so no rectangle shows against the page. */
const reliefMask =
  "linear-gradient(to bottom, transparent 0%, #000 26%, #000 74%, transparent 100%), " +
  "linear-gradient(to left, #000 0%, #000 30%, transparent 92%)";
const reliefStyle = {
  WebkitMaskImage: reliefMask,
  maskImage: reliefMask,
  WebkitMaskComposite: "source-in",
  maskComposite: "intersect",
} as CSSProperties;

/** The charcoal band carries no painted fade, so it is dissolved leftwards here. */
const charcoalFade = "linear-gradient(to left, #000 0%, #000 38%, transparent 100%)";
const charcoalStyle = {
  mixBlendMode: "lighten",
  WebkitMaskImage: charcoalFade,
  maskImage: charcoalFade,
} as CSSProperties;

/** A published Gurb screenshot from the App Store listing, shown whole. */
function Screen({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      width={1290}
      height={2796}
      loading="lazy"
      className={`block h-auto rounded-[1.6rem] ring-1 ring-white/10 shadow-[0_22px_48px_-20px_rgba(0,0,0,0.75)] ${className}`}
    />
  );
}

function StoreLink({ url, store }: { url: string; store: "play" | "apple" }) {
  const isPlay = store === "play";
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={isPlay ? "link-google-play" : "link-app-store"}
      className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[#FBFAEB] text-[#2b302d] font-sans font-semibold text-base hover:bg-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBFAEB]"
    >
      {isPlay ? <Play className="w-4 h-4 fill-current" /> : <Apple className="w-4 h-4 fill-current" />}
      {isPlay ? "Google Play" : "App Store"}
    </a>
  );
}

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-sm";

export default function Home() {
  const gurb = APPS_DATA.find((a) => a.slug === SITE_CONFIG.featuredSlug);
  const socials = SOCIAL_LINKS.filter((s) => s.url);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col" dir="rtl" lang="ar">
      {/* 1. Header */}
      <header className="w-full">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between gap-4">
          <Link href="/" className={`flex items-center gap-3 ${focusRing}`} data-testid="link-home">
            <NuqatLogo height={40} />
            <span className="font-arabic text-2xl font-bold text-primary leading-none" data-testid="text-title">
              نقاط
            </span>
          </Link>
          <nav aria-label="أقسام الصفحة">
            <ul className="flex items-center gap-4 sm:gap-7 font-arabic text-base font-medium">
              <li>
                <a href="#apps" onClick={scrollToId("apps")} className={`hover:text-primary transition-colors ${focusRing}`}>
                  التطبيقات
                </a>
              </li>
              <li>
                <a href="#about" onClick={scrollToId("about")} className={`hover:text-primary transition-colors ${focusRing}`}>
                  عن نقاط
                </a>
              </li>
              <li>
                <a href="#contact" onClick={scrollToId("contact")} className={`hover:text-primary transition-colors ${focusRing}`}>
                  تواصل
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1 w-full">
        {/* 2. Opening */}
        <section className="pt-8 pb-10 md:pt-12 md:pb-16">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="md:w-7/12">
            <h1
              className="font-arabic font-bold text-primary leading-[1.2] text-[2.5rem] sm:text-[3.25rem] lg:text-[4rem]"
              data-testid="text-hero"
            >
              تطبيقات بسيطة ليومك
            </h1>
            <p className="font-arabic font-medium text-xl sm:text-2xl leading-relaxed mt-4 max-w-[30ch]" data-testid="text-hero-sub">
              نقاط تصنع تطبيقات سعودية واضحة وسهلة. أولها قرب.
            </p>
          </div>
          </div>
            <img
              src={reliefNarrowFade}
              alt=""
              aria-hidden="true"
              width={1194}
              height={180}
              className="block ml-auto w-[min(680px,94%)] h-auto mt-8 md:mt-10"
              style={reliefStyle}
            />
        </section>

        {/* 3. Featured: Gurb */}
        {gurb && (
          <section id="apps" className="bg-[#424844] text-[#FBFAEB] scroll-mt-4" aria-labelledby="gurb-title">
            <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-12 md:pt-16">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
                {/* Text */}
                <div className="md:col-span-7">
                  <div className="flex items-center gap-4">
                    <img
                      src="/gurb-icon-512.png"
                      alt="أيقونة تطبيق قرب"
                      className="w-16 h-16 rounded-2xl bg-white p-1.5 object-contain"
                    />
                    <p id="gurb-title" className="font-arabic text-3xl font-bold" data-testid="text-featured-name">
                      {gurb.nameArabic}
                    </p>
                  </div>

                  <h2
                    className="font-arabic font-bold leading-[1.3] text-[2rem] sm:text-[2.5rem] lg:text-[2.9rem] mt-6 max-w-[16ch]"
                    data-testid="text-gurb-slogan"
                  >
                    مهما تبعد، خلك قرب اللي يحبونك
                  </h2>

                  <p className="font-arabic font-medium text-lg sm:text-xl leading-relaxed mt-5 max-w-[38ch]">
                    ضغطة واحدة كل يوم تطمّن اللي يحبونك إنك بخير. وإذا فاتتك، يوصل تنبيه للأشخاص اللي اخترتهم.
                  </p>
                  <p className="font-arabic font-medium text-lg leading-relaxed mt-3 max-w-[38ch] border-r-2 border-[#BA7431] pr-4">
                    قرب يضيف طمأنينة ليومك وتواصلك مع أهلك.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 mt-8">
                    {gurb.appStoreUrl && <StoreLink url={gurb.appStoreUrl} store="apple" />}
                    {gurb.playStoreUrl && <StoreLink url={gurb.playStoreUrl} store="play" />}
                    <Link
                      href={`/${gurb.slug}`}
                      className="font-arabic font-semibold inline-flex items-center gap-1 h-12 px-3 underline underline-offset-4 decoration-[#FBFAEB]/50 hover:decoration-[#FBFAEB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBFAEB] rounded-sm"
                      data-testid="link-featured-more"
                    >
                      اعرف أكثر عن قرب
                      <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>

                {/* Screenshots: rise out of the charcoal surface into the opening on desktop */}
                <div className="md:col-span-5 md:-mt-64 lg:-mt-72" role="group" aria-label="لقطات من تطبيق قرب">
                  <div className="flex items-end justify-center" dir="ltr">
                    <Screen src={screenBackers} alt="شاشة السند في قرب: قائمة الأشخاص الموثوقين" className="w-[30%] max-w-[150px] -mr-4 mb-6" />
                    <Screen src={screenCheckIn} alt="شاشة قرب: زر تسجيل الحضور والوقت المتبقي" className="w-[46%] max-w-[230px] relative z-10" />
                    <Screen src={screenMyCare} alt="شاشة رعايتي في قرب: من تسندهم وحالتهم" className="w-[30%] max-w-[150px] -ml-4 mb-6" />
                  </div>
                </div>
              </div>

            </div>

            {/* Charcoal band, as supplied */}
            <img
                src={bandCharcoal}
                alt=""
                aria-hidden="true"
                width={1123}
                height={117}
              className="block ml-auto w-[min(720px,94%)] h-auto mt-12 md:mt-14"
              style={charcoalStyle}
            />

            <div className="max-w-6xl mx-auto px-5 sm:px-8">
              {gurb.disclaimer && (
                <p className="font-arabic text-sm leading-relaxed text-[#FBFAEB]/85 mt-6 pb-10 max-w-[70ch]" data-testid="text-disclaimer">
                  {gurb.disclaimer}
                </p>
              )}
            </div>
          </section>
        )}

        {/* 4. About */}
        <section id="about" className="py-14 md:py-20 scroll-mt-4" aria-labelledby="about-title">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="md:w-7/12">
              <h2 id="about-title" className="font-arabic font-bold text-primary text-[1.9rem] sm:text-[2.25rem] leading-snug">
                عن نقاط
              </h2>
              <p className="font-arabic font-medium text-lg sm:text-xl leading-relaxed mt-4 max-w-[38ch]">
                نصنع تطبيقات تضيف ليومك. كل تطبيق له فكرة مستقلة.
              </p>
              <p className="font-arabic font-semibold text-primary text-lg mt-6" data-testid="text-brand-line">
                كل مشروع يبدأ بنقطة.
              </p>
            </div>
          </div>
          <img
            src={reliefMediumFade}
            alt=""
            aria-hidden="true"
            width={1194}
            height={273}
            className="block ml-auto w-[min(620px,92%)] h-auto mt-10 md:mt-12"
            style={reliefStyle}
          />
        </section>
      </main>

      {/* 5. Footer */}
      <footer id="contact" className="border-t border-border scroll-mt-4">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col gap-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-base font-medium">
              {CONTACT_EMAIL && (
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className={`inline-flex items-center gap-2 font-sans hover:text-primary transition-colors ${focusRing}`}
                  data-testid="link-email"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span dir="ltr">{CONTACT_EMAIL}</span>
                </a>
              )}
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-sans hover:text-primary transition-colors ${focusRing}`}
                  data-testid={`link-social-${s.label.toLowerCase()}`}
                >
                  {s.label}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-base font-medium">
              <Link href="/gurb/support" className={`font-arabic hover:text-primary transition-colors ${focusRing}`} data-testid="link-gurb-support">
                دعم قرب
              </Link>
              <Link href="/gurb/privacy-ar" className={`font-arabic hover:text-primary transition-colors ${focusRing}`} data-testid="link-gurb-privacy">
                سياسة خصوصية قرب
              </Link>
            </div>
          </div>
          <p className="font-arabic text-sm text-muted-foreground">© 2026 نقاط</p>
        </div>
      </footer>
    </div>
  );
}
