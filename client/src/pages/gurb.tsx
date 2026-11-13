import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { APPS_DATA } from "@shared/schema";
import {
  SiteHeader,
  SiteFooter,
  StoreLink,
  Screen,
  focusRing,
  reliefStyle,
  charcoalStyle,
} from "@/components/site-chrome";
import reliefNarrowFade from "../assets/relief-narrow-fade.webp";
import bandCharcoal from "../assets/band-charcoal.webp";
import screenCheckIn from "../assets/gurb-screen-checkin.png";
import screenBackers from "../assets/gurb-screen-backers.png";
import screenMyCare from "../assets/gurb-screen-care.png";

/**
 * The Gurb product page.
 *
 * Deliberately its own page rather than the shared /:slug template, so the other
 * five app pages are left exactly as they are. Content here is limited to what the
 * app actually does: no privacy or encryption claims, no emergency framing, and
 * nothing that suggests Gurb stands in for calling or visiting family.
 */

const CHARCOAL = "#424844";

/** The three screens, named as the app names them. */
const SCREENS = [
  {
    src: screenCheckIn,
    name: "قرب",
    caption: "زر تسجيل الحضور، والوقت المتبقي قبل نهاية اليوم.",
    alt: "شاشة قرب: زر تسجيل الحضور والوقت المتبقي",
  },
  {
    src: screenBackers,
    name: "السند",
    caption: "الأشخاص اللي اخترتهم، واللي يوصلهم التنبيه إذا فاتك التسجيل.",
    alt: "شاشة السند: قائمة الأشخاص الموثوقين",
  },
  {
    src: screenMyCare,
    name: "رعايتي",
    caption: "اللي أنت سند لهم، وآخر تسجيل حضور لكل واحد منهم.",
    alt: "شاشة رعايتي: من تسندهم وآخر تسجيل لهم",
  },
];

const STEPS = [
  { n: "١", title: "سجّل حضورك", body: "ضغطة وحدة كل يوم تقول إنك بخير." },
  { n: "٢", title: "اختر سندك", body: "الأشخاص اللي تبيهم يطمنّون عليك." },
  { n: "٣", title: "وإذا فاتتك", body: "يوصلهم تنبيه إنك ما سجّلت اليوم." },
];

export default function GurbPage() {
  const gurb = APPS_DATA.find((a) => a.slug === "gurb");
  if (!gurb) return null;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col" dir="rtl" lang="ar">
      <SiteHeader
        nav={
          <a
            href="/"
            className={`font-arabic text-base font-medium inline-flex items-center gap-1 hover:text-primary transition-colors ${focusRing}`}
            data-testid="link-back-home"
          >
            نقاط
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          </a>
        }
      />

      <main className="flex-1 w-full">
        {/* Hero, on the app's own charcoal */}
        <section className="bg-[#424844] text-[#FBFAEB]" aria-labelledby="gurb-heading">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-12 pb-14 md:pt-16 md:pb-20">
            <div className="flex items-center gap-4">
              <img
                src="/gurb-icon-512.png"
                alt="أيقونة تطبيق قرب"
                width={512}
                height={512}
                className="w-16 h-16 rounded-2xl bg-white p-1.5 object-contain"
              />
              <p className="font-arabic text-3xl font-bold" data-testid="text-app-title">
                {gurb.nameArabic}
              </p>
            </div>

            <h1
              className="font-arabic font-bold leading-[1.3] text-[2.1rem] sm:text-[2.75rem] lg:text-[3.25rem] mt-7 max-w-[16ch]"
              id="gurb-heading"
              data-testid="text-gurb-slogan"
            >
              مهما تبعد، خلك قرب اللي يحبونك
            </h1>

            <p className="font-arabic font-medium text-lg sm:text-xl leading-relaxed mt-5 max-w-[42ch]">
              ضغطة واحدة كل يوم تطمّن اللي يحبونك إنك بخير. وإذا فاتتك، يوصل تنبيه للأشخاص اللي اخترتهم.
            </p>
            <p className="font-arabic font-medium text-lg leading-relaxed mt-3 max-w-[42ch] border-r-2 border-[#BA7431] pr-4">
              قرب يضيف طمأنينة ليومك وتواصلك مع أهلك.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-8">
              {gurb.appStoreUrl && <StoreLink url={gurb.appStoreUrl} store="apple" />}
              {gurb.playStoreUrl && <StoreLink url={gurb.playStoreUrl} store="play" />}
            </div>
          </div>
        </section>

        {/* The three screens */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 py-14 md:py-20" aria-label="شاشات التطبيق">
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-10">
            {SCREENS.map((s) => (
              <li key={s.name} className="flex flex-col items-center text-center">
                <Screen src={s.src} alt={s.alt} className="w-[62%] sm:w-full max-w-[260px]" />
                <h2 className="font-arabic text-xl font-bold text-primary mt-6">{s.name}</h2>
                <p className="font-arabic text-base leading-relaxed mt-2 max-w-[26ch]">{s.caption}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* How it works: a genuine three-step sequence, so it is numbered */}
        <section className="bg-[#424844] text-[#FBFAEB] pb-14 md:pb-20" aria-labelledby="how-title">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-12 md:pt-16">
            <h2 id="how-title" className="font-arabic text-[1.9rem] sm:text-[2.25rem] font-bold">
              كيف يشتغل؟
            </h2>
            <ol className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-10 mt-8">
              {STEPS.map((s) => (
                <li key={s.n}>
                  <span
                    className="font-arabic text-2xl font-bold text-[#BA7431] block"
                    aria-hidden="true"
                  >
                    {s.n}
                  </span>
                  <h3 className="font-arabic text-xl font-bold mt-2">{s.title}</h3>
                  <p className="font-arabic text-base leading-relaxed mt-2 max-w-[28ch]">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
          <img
            src={bandCharcoal}
            alt=""
            aria-hidden="true"
            width={1123}
            height={117}
            className="block ml-auto w-[min(720px,94%)] h-auto mt-12 md:mt-14"
            style={charcoalStyle}
          />
          {gurb.disclaimer && (
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
              <p className="font-arabic text-sm leading-relaxed text-[#FBFAEB]/85 mt-6 max-w-[70ch]" data-testid="text-disclaimer">
                {gurb.disclaimer}
              </p>
            </div>
          )}
        </section>

        {/* Why */}
        <section className="py-14 md:py-20" aria-labelledby="why-title">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="md:w-7/12">
              <h2 id="why-title" className="font-arabic font-bold text-primary text-[1.9rem] sm:text-[2.25rem] leading-snug">
                ليش قرب؟
              </h2>
              <p className="font-arabic font-medium text-lg sm:text-xl leading-relaxed mt-4 max-w-[40ch]">
                فيه ناس يهمّهم يعرفون إنك بخير، كل يوم. وفيه أيام تمر مزحومة وتنسى تطمّنهم.
              </p>
              <p className="font-arabic font-medium text-lg sm:text-xl leading-relaxed mt-3 max-w-[40ch]">
                قرب يسدّ هذي المسافة الصغيرة بضغطة وحدة.
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-8 text-base font-medium">
                <Link href="/gurb/privacy-ar" className={`font-arabic hover:text-primary transition-colors ${focusRing}`} data-testid="link-privacy-ar">
                  سياسة الخصوصية
                </Link>
                <Link href="/gurb/privacy-en" className={`font-sans hover:text-primary transition-colors ${focusRing}`} data-testid="link-privacy-en">
                  Privacy Policy
                </Link>
                <Link href="/gurb/support" className={`font-arabic hover:text-primary transition-colors ${focusRing}`} data-testid="link-support">
                  دعم قرب
                </Link>
              </div>
            </div>
          </div>
          <img
            src={reliefNarrowFade}
            alt=""
            aria-hidden="true"
            width={1194}
            height={180}
            className="block ml-auto w-[min(680px,94%)] h-auto mt-10 md:mt-12"
            style={reliefStyle}
          />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
