import { useEffect, useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Mail, Minus, Plus } from "lucide-react";
import { Link } from "wouter";
import { CONTACT_EMAIL } from "@shared/schema";

type Language = "ar" | "en";
type Category = "getting-started" | "check-ins" | "backers" | "account" | "privacy";

const CATEGORIES: { id: Category; ar: string; en: string }[] = [
  { id: "getting-started", ar: "البدء والاستخدام", en: "Getting Started" },
  { id: "check-ins", ar: "التحقق اليومي", en: "Check-Ins & Alerts" },
  { id: "backers", ar: "المساندين ورعايتي", en: "Backers & My Care" },
  { id: "account", ar: "الحساب وتسجيل الدخول", en: "Account & Login" },
  { id: "privacy", ar: "الخصوصية والدعم الفني", en: "Privacy & Support" },
];

const COPY = {
  ar: {
    title: "الدعم والمساعدة",
    description: "تحتاج إلى مساعدة في قرب؟ ستجد هنا إجابات على الأسئلة الشائعة حول تسجيل الدخول، التحقق اليومي، المساندين، الإشعارات، وإعدادات الحساب.",
    back: "العودة إلى قرب",
    categories: "مواضيع المساعدة",
    questions: "الأسئلة الشائعة",
    supportTitle: "ما زالت لديك أسئلة؟",
    supportDescription: "للحصول على الدعم في قرب، يرجى مراسلتنا عبر البريد الإلكتروني وسيساعدك فريقنا في أقرب وقت ممكن.",
    email: "البريد الإلكتروني:",
    privacy: "سياسة الخصوصية وشروط الاستخدام",
  },
  en: {
    title: "Help & Support",
    description: "Need help with Gurb? Find answers to common questions about login, daily check-ins, trusted Backers, notifications, and account support.",
    back: "Back to Gurb",
    categories: "Help topics",
    questions: "Frequently asked questions",
    supportTitle: "Still need help?",
    supportDescription: "For support with Gurb, please email us and our team will assist you as soon as possible.",
    email: "Email:",
    privacy: "Privacy Policy and Terms of Use",
  },
};

const FAQS: {
  id: string;
  categories: Category[];
  ar: { question: string; answer: string };
  en: { question: string; answer: string };
}[] = [
  {
    id: "login",
    categories: ["account"],
    ar: {
      question: "كيف أسجّل الدخول إلى قرب؟",
      answer: "أدخل عنوان بريدك الإلكتروني واطلب رمز التحقق المكون من 6 أرقام. سيتم إرسال الرمز إلى بريدك الإلكتروني لتسجيل الدخول بأمان في قرب.",
    },
    en: {
      question: "How do I log in to Gurb?",
      answer: "Enter your email address and request a verification code. Use the 6-digit code sent to your email to sign in securely to Gurb.",
    },
  },
  {
    id: "daily-check-ins",
    categories: ["check-ins"],
    ar: {
      question: "كيف يعمل التحقق اليومي؟",
      answer: "يساعدك تطبيق قرب على البقاء على تواصل مع الأشخاص الذين تثق بهم من خلال تسجيل الاطمئنان اليومي. ما عليك سوى الضغط على زر «تأكيد السلامة» لتأكيد أنك بخير، وسيبدأ عدّ تنازلي لمدة 24 ساعة. احرص على تأكيد سلامتك مرة أخرى قبل انتهاء الوقت لتحديث حالتك وتجنب إرسال تنبيهات عدم تسجيل الاطمئنان.",
    },
    en: {
      question: "How do daily check-ins work?",
      answer: 'Gurb helps you stay connected with your trusted contacts through daily safety check-ins. Simply tap the "Check In" button to confirm you\'re safe. A 24-hour countdown will begin. Check in again before the timer expires to keep your status updated and avoid missed check-in alerts.',
    },
  },
  {
    id: "backer-alerts",
    categories: ["check-ins", "backers"],
    ar: {
      question: "لماذا لم يتلقَّ مساندي إشعارًا؟",
      answer: `إذا لم يتلقَّ مساندك إشعارًا بعد فوات موعد تأكيد السلامة، فتأكد من تفعيل إشعارات تطبيق قرب على جهازه ومن توفر اتصال بالإنترنت. تحقق أيضًا من إضافته بشكل صحيح ضمن قائمة المساندين لديك. إذا استمرت المشكلة، يُرجى التواصل مع فريق الدعم عبر البريد الإلكتروني ${CONTACT_EMAIL}.`,
    },
    en: {
      question: "Why didn’t my Backer receive an alert?",
      answer: `If your Backer didn't receive an alert after a missed check-in, make sure they have enabled Gurb notifications on their device and have an active internet connection. Also, confirm that they are correctly added as your Backer. If the issue continues, please contact our support team at ${CONTACT_EMAIL}.`,
    },
  },
  {
    id: "backers-and-care",
    categories: ["backers"],
    ar: {
      question: "كيف أدير المساندين ورعايتي؟",
      answer: "افتح قسم «المساندون» لإضافة وإدارة الأشخاص الموثوقين الذين يمكنهم تلقي التنبيهات في حال عدم تأكيد سلامتك اليومية. ومن خلال قسم «رعايتي»، يمكنك متابعة حالة تسجيل الاطمئنان للأشخاص الذين تساندهم. تساعدك هذه الميزات على البقاء مطّلعًا ومتواصلًا مع الأشخاص الذين تهتم لأمرهم.",
    },
    en: {
      question: "How do I manage my Backers and My Care?",
      answer: 'Open the "Backers" tab to add and manage the trusted contacts who can receive alerts if you miss a daily check-in. Use the "My Care" tab to view the check-in status of people you support as a Backer. These features help you stay informed and connected with the people who matter most.',
    },
  },
];

function Answer({ text }: { text: string }) {
  const parts = text.split(CONTACT_EMAIL);

  return (
    <>
      {parts.map((part, index) => (
        <span key={index}>
          {index > 0 && (
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline underline-offset-4 hover:text-accent">
              <bdi dir="ltr">{CONTACT_EMAIL}</bdi>
            </a>
          )}
          {part}
        </span>
      ))}
    </>
  );
}

export default function GurbSupport() {
  const [language, setLanguage] = useState<Language>("ar");
  const [category, setCategory] = useState<Category>("getting-started");
  const [openFaq, setOpenFaq] = useState("login");
  const isArabic = language === "ar";
  const direction = isArabic ? "rtl" : "ltr";
  const copy = COPY[language];
  const visibleFaqs = FAQS.filter((faq) => category === "getting-started" || faq.categories.includes(category));
  const BackArrow = isArabic ? ArrowRight : ArrowLeft;

  useEffect(() => {
    const previousLanguage = document.documentElement.lang;
    const previousDirection = document.documentElement.dir;
    const previousTitle = document.title;

    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    document.title = isArabic ? "الدعم والمساعدة — قرب | نقاط" : "Gurb Help & Support | Nuqat";

    return () => {
      document.documentElement.lang = previousLanguage;
      document.documentElement.dir = previousDirection;
      document.title = previousTitle;
    };
  }, [language, direction, isArabic]);

  function selectCategory(nextCategory: Category) {
    setCategory(nextCategory);
    setOpenFaq(FAQS.find((faq) => nextCategory === "getting-started" || faq.categories.includes(nextCategory))?.id ?? "");
  }

  return (
    <div lang={language} dir={direction} className={`min-h-screen bg-background text-foreground ${isArabic ? "font-arabic" : "font-sans"}`}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between gap-4 pt-6 sm:pt-8" dir="ltr">
          <Link href="/gurb" className="inline-flex min-h-11 items-center gap-2 rounded-md text-sm text-primary/75 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4" dir={direction}>
            <BackArrow className="h-4 w-4" aria-hidden="true" />
            {copy.back}
          </Link>

          <nav aria-label="Language / اللغة" className="inline-flex shrink-0 rounded-full border border-primary/25 bg-card/50 p-1">
            {(["ar", "en"] as const).map((option) => (
              <button
                key={option}
                type="button"
                lang={option}
                dir={option === "ar" ? "rtl" : "ltr"}
                aria-pressed={language === option}
                onClick={() => setLanguage(option)}
                className={`min-h-10 rounded-full px-4 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${option === "ar" ? "font-arabic" : "font-sans"} ${language === option ? "bg-primary text-primary-foreground" : "text-primary hover:bg-primary/5"}`}
              >
                {option === "ar" ? "العربية" : "English"}
              </button>
            ))}
          </nav>
        </header>

        <main className="grid items-start gap-12 pb-16 pt-12 sm:pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:pb-24 lg:pt-16" dir="ltr">
          <section aria-labelledby="support-title" dir={direction} className="min-w-0">
            <h1 id="support-title" className="text-[clamp(2.5rem,4.7vw,3.75rem)] font-bold leading-[1.2] text-primary">
              {copy.title}
            </h1>
            <p className="mt-5 text-xl leading-relaxed text-muted-foreground sm:text-[23px] sm:leading-[1.6]">
              {copy.description}
            </p>

            <nav aria-label={copy.categories} className="mt-8 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 lg:mt-9" dir="ltr">
              {CATEGORIES.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  dir={direction}
                  aria-pressed={category === item.id}
                  aria-controls="support-content"
                  onClick={() => selectCategory(item.id)}
                  className={`min-h-12 rounded-full border px-4 py-2.5 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 sm:text-lg ${category === item.id ? "border-primary bg-primary text-primary-foreground shadow-sm" : "border-primary/40 bg-card/30 text-primary hover:border-primary hover:bg-primary/5"}`}
                >
                  {item[language]}
                </button>
              ))}
            </nav>
          </section>

          <section id="support-content" aria-label={copy.questions} dir={direction} className="min-w-0">
            {visibleFaqs.length > 0 && (
              <Accordion.Root type="single" collapsible value={openFaq} onValueChange={setOpenFaq}>
                {visibleFaqs.map((faq) => (
                  <Accordion.Item key={faq.id} value={faq.id} className="border-b border-primary/10 last:border-b-0">
                    <Accordion.Header asChild>
                      <h2>
                        <Accordion.Trigger dir="ltr" className="group flex w-full items-start justify-between gap-5 rounded-sm py-6 text-primary outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4">
                          <span dir={direction} className="min-w-0 flex-1 text-start text-xl font-semibold leading-snug sm:text-[24px]">
                            {faq[language].question}
                          </span>
                          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center" aria-hidden="true">
                            <Plus className="h-6 w-6 group-data-[state=open]:hidden" strokeWidth={1.5} />
                            <Minus className="hidden h-6 w-6 group-data-[state=open]:block" strokeWidth={1.5} />
                          </span>
                        </Accordion.Trigger>
                      </h2>
                    </Accordion.Header>
                    <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down motion-reduce:animate-none">
                      <p className="pb-6 text-lg leading-[1.8] text-muted-foreground">
                        <Answer text={faq[language].answer} />
                      </p>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            )}

            {category === "privacy" && (
              <Link href={`/gurb/privacy-${language}`} className="flex min-h-16 items-center justify-between gap-4 rounded-xl border border-primary/15 bg-card/40 px-6 py-5 text-xl font-semibold text-primary transition-colors hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                {copy.privacy}
                <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden="true" />
              </Link>
            )}

            <aside aria-labelledby="contact-title" className="mt-7 rounded-2xl border border-primary/10 bg-card/40 p-6 sm:p-7">
              <h2 id="contact-title" className="text-[27px] font-semibold leading-snug text-primary">
                {copy.supportTitle}
              </h2>
              <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
                {copy.supportDescription}
              </p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="mt-5 inline-flex min-h-14 max-w-full flex-wrap items-center gap-x-3 gap-y-1 rounded-xl bg-primary/10 px-5 py-3 text-base font-semibold text-primary transition-colors hover:bg-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 sm:text-lg">
                <Mail className="h-6 w-6 shrink-0" strokeWidth={1.6} aria-hidden="true" />
                <span>{copy.email}</span>
                <bdi dir="ltr" className="min-w-0 break-all font-sans">{CONTACT_EMAIL}</bdi>
              </a>
            </aside>
          </section>
        </main>
      </div>
    </div>
  );
}
