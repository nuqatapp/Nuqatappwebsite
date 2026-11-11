import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { Mail, Play, Apple } from "lucide-react";
import { Link } from "wouter";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@shared/schema";
// Original brand assets, used as supplied: never redrawn, recoloured or reshaped.
import logoMaster from "../assets/nuqat-logo.png";

/** Shared chrome for the Nuqat pages: masthead, footer, brand marks and relief treatment. */

export const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-sm";

/** Scroll to an in-page section without touching the URL (works with path and hash routing). */
export function scrollToId(id: string) {
  return (e: MouseEvent) => {
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };
}

/** The Nuqat mark: the original artwork with only its paper background lifted (brand kit master). */
export function NuqatLogo({ height }: { height: number }) {
  return <img src={logoMaster} alt="شعار نقاط" style={{ height, width: "auto" }} className="block shrink-0" />;
}

/** Approved heritage relief, shown as supplied: solid at the right, dissolving to the left.
 *  The mask only feathers the paper's own edges so no rectangle shows against the page. */
const reliefMask =
  "linear-gradient(to bottom, transparent 0%, #000 26%, #000 74%, transparent 100%), " +
  "linear-gradient(to left, #000 0%, #000 30%, transparent 92%)";
export const reliefStyle = {
  WebkitMaskImage: reliefMask,
  maskImage: reliefMask,
  WebkitMaskComposite: "source-in",
  maskComposite: "intersect",
} as CSSProperties;

/** The charcoal band carries no painted fade, so it is dissolved leftwards here. */
const charcoalFade = "linear-gradient(to left, #000 0%, #000 38%, transparent 100%)";
export const charcoalStyle = {
  mixBlendMode: "lighten",
  WebkitMaskImage: charcoalFade,
  maskImage: charcoalFade,
} as CSSProperties;

/** A published Gurb screenshot, shown whole. */
export function Screen({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
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

/** Store link, styled for a charcoal surface. */
export function StoreLink({ url, store }: { url: string; store: "play" | "apple" }) {
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

/** Masthead. `nav` carries the page's own links, so each page decides what belongs there. */
export function SiteHeader({ nav }: { nav?: ReactNode }) {
  return (
    <header className="w-full">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between gap-4">
        <Link href="/" className={`flex items-center gap-3 ${focusRing}`} data-testid="link-home">
          <NuqatLogo height={40} />
          <span className="font-arabic text-2xl font-bold text-primary leading-none" data-testid="text-title">
            نقاط
          </span>
        </Link>
        {nav && <nav aria-label="أقسام الصفحة">{nav}</nav>}
      </div>
    </header>
  );
}

export function SiteFooter() {
  const socials = SOCIAL_LINKS.filter((s) => s.url);
  return (
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
  );
}
