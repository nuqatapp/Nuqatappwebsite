import { Link, useParams } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@shared/schema";
import GurbPrivacyPolicy from "./gurb-privacy-policy";

function useContactEmail() {
  return CONTACT_EMAIL;
}

interface PrivacySection {
  title: string;
  content: string | string[];
  subsections?: { title: string; items: string[] }[];
  bold?: string;
}

interface PrivacyData {
  appNameArabic: string;
  appNameEnglish: string;
  slug: string;
  lastUpdated: string;
  lastUpdatedAr: string;
  sectionsAr: PrivacySection[];
  sectionsEn: PrivacySection[];
}

const PRIVACY_DATA: Record<string, PrivacyData> = {
  hikmah: {
    appNameArabic: "لعبة حكمة",
    appNameEnglish: "Hikmah Game",
    slug: "hikmah",
    lastUpdated: "",
    lastUpdatedAr: "",
    sectionsAr: [],
    sectionsEn: []
  },
  "house-closet": {
    appNameArabic: "خزانة المنزل",
    appNameEnglish: "House Closet",
    slug: "house-closet",
    lastUpdated: "",
    lastUpdatedAr: "",
    sectionsAr: [],
    sectionsEn: []
  },
  "startup-account": {
    appNameArabic: "حساب الشركة الناشئة",
    appNameEnglish: "Startup Account",
    slug: "startup-account",
    lastUpdated: "",
    lastUpdatedAr: "",
    sectionsAr: [],
    sectionsEn: []
  },
  "arbad": {
    appNameArabic: "أربد",
    appNameEnglish: "Arbad",
    slug: "arbad",
    lastUpdated: "",
    lastUpdatedAr: "",
    sectionsAr: [],
    sectionsEn: []
  },
  "hexa-out": {
    appNameArabic: "هيكسا آوت",
    appNameEnglish: "Hexa Out",
    slug: "hexa-out",
    lastUpdated: "March 1, 2026",
    lastUpdatedAr: "1 مارس 2026",
    sectionsAr: [
      {
        title: "1) النطاق",
        content: "توضح هذه السياسة كيفية تعامل لعبة Hexa Out مع المعلومات عند استخدامها على جهازك داخل المملكة العربية السعودية."
      },
      {
        title: "2) بدون حساب, بدون تسجيل دخول",
        content: "لا تتطلب Hexa Out إنشاء حساب أو تسجيل دخول. يمكنك اللعب بدون تسجيل."
      },
      {
        title: "3) المعلومات التي نجمعها",
        content: "تم تصميم اللعبة لتقليل جمع البيانات قدر الإمكان. قد تتعامل اللعبة مع التالي:",
        subsections: [
          { title: "أ) معلومات تقدمها أنت", items: ["رسائل الدعم التي ترسلها لنا, بما في ذلك أي محتوى تختار مشاركته."] },
          { title: "ب) بيانات اللعب والتطبيق, تخزن محليا قدر الإمكان", items: ["التقدم, العملات, المعززات, عدد المحاولات, الإعدادات.", "غالبا تخزن على جهازك. عند حذف التطبيق أو مسح بياناته قد يتم حذف البيانات المحلية."] },
          { title: "ج) بيانات الإعلانات ومعرفات الجهاز, عبر خدمات إعلانات Google", items: ["تستخدم Hexa Out خدمات إعلانات Google, مثل Google AdMob, لعرض الإعلانات. قد تقوم هذه الخدمات تلقائيا بجمع:", "معرفات الجهاز مثل معرّف الإعلانات.", "عنوان IP, وقد يستخدم لتقدير الموقع بشكل تقريبي.", "إشارات التفاعل داخل التطبيق, مثل عرض الإعلان والنقر وقياس الأداء وإشارات منع الاحتيال.", "معلومات الجهاز, مثل نوع الجهاز وإصدار النظام واللغة.", "بيانات التشخيص والقياس المتعلقة بالإعلانات."] }
        ],
        bold: "قد تستخدم Google هذه المعلومات لتخصيص الإعلانات حيثما يسمح النظام, وقياس الأداء, ومنع الاحتيال."
      },
      {
        title: "4) كيفية استخدام المعلومات",
        content: ["نستخدم المعلومات من أجل:", "تشغيل اللعبة وحفظ التقدم محليا على جهازك.", "تقديم الدعم والرد على الطلبات.", "عرض الإعلانات وقياس أدائها وتحسين الإيرادات.", "تعزيز الأمن, منع الاحتيال, ومعالجة الأعطال."]
      },
      {
        title: "5) الأساس النظامي والتوافق مع نظام حماية البيانات الشخصية",
        content: ["حيثما ينطبق نظام حماية البيانات الشخصية في السعودية واللوائح ذات الصلة, تتم المعالجة لأغراض مثل:", "تقديم الخدمة المطلوبة, تشغيل اللعبة.", "مصالح مشروعة, الأمن, منع الاحتيال, واستقرار التطبيق.", "الموافقة عند الحاجة, خصوصا فيما يتعلق بالإعلانات المخصصة."]
      },
      {
        title: "6) الإعلانات, التخصيص, خياراتك",
        content: ["يمكنك التحكم في تجربة الإعلانات:", "يمكنك تقليل تخصيص الإعلانات من إعدادات الجهاز, مثل إعدادات الإعلانات في Android.", "يمكنك إعادة تعيين معرّف الإعلانات من إعدادات الجهاز.", "إذا لا ترغب في الإعلانات الموجهة, استخدم أدوات الجهاز لتقييد التخصيص حيثما توفر."]
      },
      {
        title: "7) مشاركة المعلومات",
        content: ["نحن لا نبيع بياناتك الشخصية. قد نشارك معلومات محدودة فقط في الحالات التالية:", "مع خدمات إعلانات Google لعرض الإعلانات وقياسها.", "مع مزودي خدمات يساعدوننا على تشغيل التطبيق, مثل تتبع الأعطال إذا تم استخدامه.", "عند الالتزام بمتطلبات نظامية أو أوامر رسمية داخل السعودية.", "لحماية الحقوق والسلامة ومنع الاحتيال أو إساءة الاستخدام."]
      },
      {
        title: "8) مدة الاحتفاظ بالبيانات",
        content: ["بيانات اللعب المحلية تبقى على جهازك إلى أن تحذف التطبيق أو تمسح بياناته.", "مراسلات الدعم تحتفظ بها المدة اللازمة لمعالجة الطلب والالتزام بالمتطلبات النظامية.", "البيانات التي تجمعها Google تحتفظ بها وفقا لسياسات Google."]
      },
      {
        title: "9) نقل البيانات خارج المملكة",
        content: "قد تتم معالجة بعض البيانات لدى مزودي خدمات, بما في ذلك Google, على خوادم خارج السعودية. عند حدوث ذلك, تتم المعالجة وفقا للمتطلبات النظامية ذات الصلة وضوابط المزود."
      },
      {
        title: "10) خصوصية الأطفال",
        content: "اللعبة غير موجهة للأطفال دون 13 سنة. لا نجمع عن علم بيانات شخصية من الأطفال دون 13 سنة. إذا اعتقدت أن طفلا قدم بيانات شخصية, تواصل معنا لطلب الحذف.",
        bold: "إذا كان التطبيق موجها للأطفال, يجب تعطيل الإعلانات المخصصة وضبط إعدادات الإعلانات بما يتوافق مع المتطلبات ذات الصلة."
      },
      {
        title: "11) حقوقك",
        content: ["بحسب ما ينطبق من الأنظمة السعودية, قد تشمل حقوقك:", "الوصول إلى بياناتك الشخصية.", "طلب التصحيح.", "طلب الحذف.", "سحب الموافقة, إذا كانت المعالجة مبنية على الموافقة.", "طلب معلومات عن المعالجة والجهات المستلمة."]
      },
      {
        title: "12) الأمن",
        content: "نطبق تدابير معقولة لحماية المعلومات. لا يوجد أسلوب نقل أو تخزين آمن بنسبة 100 بالمئة."
      },
      {
        title: "13) تحديثات السياسة",
        content: "قد نقوم بتحديث هذه السياسة. سيتم نشر النسخة الأحدث في صفحة المتجر أو داخل التطبيق, وسيتم تحديث تاريخ السريان."
      },
      {
        title: "14) إخلاء المسؤولية",
        content: ["إلى أقصى حد يسمح به النظام المعمول به في المملكة العربية السعودية:", "الاستخدام على مسؤوليتك — يتم توفير Hexa Out كما هي وحسب التوفر. استخدامك للعبة يكون على مسؤوليتك الخاصة.", "عدم تقديم ضمانات — نخلي مسؤوليتنا عن أي ضمانات صريحة أو ضمنية, بما في ذلك ضمانات الرواج التجاري, والملاءمة لغرض معين, وعدم التعدي, إلا إذا كان استبعاد هذه الضمانات غير مسموح به نظاما.", "عدم المسؤولية عن الأضرار غير المباشرة — لا نتحمل أي مسؤولية عن الأضرار غير المباشرة أو العرضية أو الخاصة أو التبعية أو العقابية, أو عن أي خسارة في الأرباح أو الإيرادات أو السمعة أو توقف الأعمال أو فقدان البيانات أو تلف الجهاز.", "حد المسؤولية — إذا ثبتت مسؤوليتنا, فإن إجمالي مسؤوليتنا لا يتجاوز المبلغ الذي دفعته خلال الاثني عشر شهرا السابقة. إذا لم تدفع أي مبلغ, فإن إجمالي مسؤوليتنا لا يتجاوز 100 ريال سعودي.", "خدمات الأطراف الثالثة — لسنا مسؤولين عن خدمات أو محتوى أو مواقع الأطراف الثالثة, بما في ذلك شبكات الإعلانات مثل Google.", "الاستثناءات — لا يحد هذا الإخلاء من المسؤولية عن الاحتيال أو سوء السلوك العمدي, أو أي مسؤولية لا يجوز استبعادها بموجب الأنظمة المعمول بها."]
      },
      {
        title: "15) التواصل",
        content: "المطور: Nuqat.app | الموقع: https://nuqat.app/"
      }
    ],
    sectionsEn: [
      {
        title: "1) Scope",
        content: "This Privacy Policy explains how Hexa Out handles information when you use the game on your device in the Kingdom of Saudi Arabia."
      },
      {
        title: "2) No Account, No Sign In",
        content: "Hexa Out does not require registration, sign up, or sign in. You can play without creating an account."
      },
      {
        title: "3) Information We Collect",
        content: "Hexa Out is designed to minimize data collection. The game may handle the following:",
        subsections: [
          { title: "A) Information you provide", items: ["Support messages you send to us, including content you choose to share."] },
          { title: "B) Gameplay and app data, stored locally where possible", items: ["Progress, coins, boosters, lives, settings.", "Typically stored on your device. If you delete the app or clear app data, local data may be removed."] },
          { title: "C) Advertising and device identifiers, via Google advertising services", items: ["Hexa Out uses Google advertising services, for example Google AdMob, to show ads. These services may automatically collect:", "Device identifiers such as the Advertising ID.", "IP address, which may be used for approximate location.", "App interaction signals, such as ad views, clicks, performance, and fraud prevention signals.", "Device information, such as device type, OS version, and language.", "Ad diagnostics and measurement data."] }
        ],
        bold: "Google may use this information to personalize ads where permitted, measure ad performance, and prevent fraud."
      },
      {
        title: "4) How We Use Information",
        content: ["We use information to:", "Operate the game and store gameplay progress on your device.", "Provide support and respond to requests.", "Display ads, measure performance, and improve monetization.", "Maintain security, prevent fraud, and fix crashes."]
      },
      {
        title: "5) Legal Basis and KSA PDPL Alignment",
        content: ["Where applicable under Saudi Arabia's Personal Data Protection Law and related regulations, we process personal data for purposes such as:", "Providing the service you requested, running the game.", "Legitimate interests, security, fraud prevention, and stability.", "Consent where required, especially for personalized advertising."]
      },
      {
        title: "6) Ads, Personalization, and Your Choices",
        content: ["You can control your advertising experience:", "You can limit ad personalization at the device level, for example Android Ads settings.", "You can reset the Advertising ID in device settings.", "If you do not want targeted ads, use device controls to restrict personalization where available."]
      },
      {
        title: "7) Sharing of Information",
        content: ["We do not sell your personal data. We may share limited information only in these cases:", "With Google advertising services to serve and measure ads.", "With service providers that help us operate the app, such as crash reporting if used.", "If required by law, regulation, or valid legal process in Saudi Arabia.", "To protect rights, safety, and prevent fraud or abuse."]
      },
      {
        title: "8) Data Retention",
        content: ["Local gameplay data stays on your device until you delete the app or clear app data.", "Support communications are retained as needed to resolve your request and meet legal obligations.", "Advertising data collected by Google is retained according to Google's policies."]
      },
      {
        title: "9) International Transfers",
        content: "Some service providers, including Google, may process data on servers outside Saudi Arabia. When transfers occur, processing follows applicable legal requirements and provider safeguards."
      },
      {
        title: "10) Children's Privacy",
        content: "Hexa Out is not intended for children under 13. We do not knowingly collect personal data from children under 13. If you believe a child provided personal data, contact us to request deletion.",
        bold: "If the app is directed to children, personalized ads must be disabled and ad settings must be configured for child directed treatment where required."
      },
      {
        title: "11) Your Rights",
        content: ["Depending on applicable Saudi laws and regulations, you may have rights such as:", "Access to your personal data.", "Request correction.", "Request deletion.", "Withdraw consent where processing relies on consent.", "Request information about processing and recipients."]
      },
      {
        title: "12) Security",
        content: "We use reasonable technical and organizational measures to protect information. No method of transmission or storage is fully secure."
      },
      {
        title: "13) Changes to This Policy",
        content: "We may update this policy. The latest version will be posted in the app store listing or within the app, with an updated effective date."
      },
      {
        title: "14) Liability Disclaimer",
        content: ["To the maximum extent permitted by applicable law in the Kingdom of Saudi Arabia:", "Use at your own risk — Hexa Out is provided on an as is and as available basis. Your use of the game is at your own risk.", "No warranties — We disclaim all warranties, express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non infringement, except where such disclaimers are not permitted under applicable law.", "No liability for indirect losses — We will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or any loss of profits, revenue, goodwill, business interruption, data loss, or device damage.", "Liability cap — If we are found liable, our total aggregate liability will not exceed the amount you paid in the twelve months before the event. If you did not pay any amount, our total liability will not exceed 100 SAR.", "Third party services — We are not responsible for third party services, content, or websites, including advertising networks such as Google.", "Exceptions — Nothing in this disclaimer limits liability for fraud, intentional misconduct, or any liability that cannot be excluded under applicable law."]
      },
      {
        title: "15) Contact",
        content: "Developer: Nuqat.app | Website: https://nuqat.app/"
      }
    ]
  }
};

function renderSection(section: PrivacySection, isArabic: boolean) {
  const listDir = isArabic ? "pr-6" : "pl-6";

  return (
    <div key={section.title}>
      <h2 className={`text-xl font-semibold text-primary mt-8 mb-4 ${isArabic ? "font-arabic" : ""}`}>
        {section.title}
      </h2>
      {typeof section.content === "string" ? (
        <p className={isArabic ? "font-arabic" : ""}>{section.content}</p>
      ) : (
        <>
          <p className={isArabic ? "font-arabic" : ""}>{section.content[0]}</p>
          <ul className={`list-disc ${listDir} space-y-1 mt-2 ${isArabic ? "font-arabic" : ""}`}>
            {section.content.slice(1).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </>
      )}
      {section.subsections?.map((sub) => (
        <div key={sub.title} className="mt-4">
          <h3 className={`text-lg font-medium mb-2 ${isArabic ? "font-arabic" : ""}`}>{sub.title}</h3>
          <ul className={`list-disc ${listDir} space-y-1 ${isArabic ? "font-arabic" : ""}`}>
            {sub.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
      {section.bold && (
        <p className={`mt-2 font-semibold ${isArabic ? "font-arabic" : ""}`}>{section.bold}</p>
      )}
    </div>
  );
}

export function PrivacyPolicyAR() {
  const params = useParams<{ slug: string }>();
  const data = PRIVACY_DATA[params.slug];
  const contactEmail = useContactEmail();

  if (params.slug === "gurb") {
    return <GurbPrivacyPolicy language="ar" />;
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4 font-arabic">الصفحة غير موجودة</h1>
          <a href="/"><Button className="font-arabic gap-2"><ArrowRight className="w-4 h-4" />العودة للرئيسية</Button></a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href={`/${data.slug}`}>
            <Button variant="ghost" size="sm" className="gap-2 font-arabic" data-testid="button-back">
              <ArrowRight className="w-4 h-4" />
              العودة لصفحة التطبيق
            </Button>
          </Link>
        </div>

        <article className="prose prose-slate max-w-none">
          <h1 className="text-3xl font-bold text-primary mb-2 font-arabic">
            سياسة الخصوصية وشروط الاستخدام لتطبيق {data.appNameArabic}
          </h1>

          {data.sectionsAr.length > 0 ? (
            <>
              <p className="text-muted-foreground mb-8 font-arabic">آخر تحديث: {data.lastUpdatedAr}</p>
              <p className="font-arabic">
                تنظم هذه الوثيقة استخدام تطبيق {data.appNameArabic}، وتوضح كيفية جمع البيانات واستخدامها وحمايتها.
              </p>
              {data.sectionsAr.map((section) => renderSection(section, true))}
              <h2 className="text-xl font-semibold text-primary mt-8 mb-4 font-arabic">معلومات التواصل</h2>
              {contactEmail && <p className="font-arabic">للاستفسارات: <a href={`mailto:${contactEmail}`} className="text-accent hover:underline">{contactEmail}</a></p>}
            </>
          ) : (
            <div className="mt-8 py-12 text-center">
              <p className="text-xl text-muted-foreground font-arabic">سياسة الخصوصية لتطبيق {data.appNameArabic} ستكون متاحة قريباً.</p>
              {contactEmail && <p className="text-muted-foreground mt-4 font-arabic">للاستفسارات: <a href={`mailto:${contactEmail}`} className="text-accent hover:underline">{contactEmail}</a></p>}
            </div>
          )}
        </article>

        {data.sectionsAr.length > 0 && (
          <div className="mt-8 pt-8 border-t border-border text-center">
            <Link href={`/${data.slug}/privacy-en`}>
              <Button variant="outline">View in English</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export function PrivacyPolicyEN() {
  const params = useParams<{ slug: string }>();
  const data = PRIVACY_DATA[params.slug];
  const contactEmail = useContactEmail();

  if (params.slug === "gurb") {
    return <GurbPrivacyPolicy language="en" />;
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center" dir="ltr">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Page Not Found</h1>
          <a href="/"><Button className="gap-2"><ArrowLeft className="w-4 h-4" />Back to Home</Button></a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" dir="ltr">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href={`/${data.slug}`}>
            <Button variant="ghost" size="sm" className="gap-2" data-testid="button-back">
              <ArrowLeft className="w-4 h-4" />
              Back to App
            </Button>
          </Link>
        </div>

        <article className="prose prose-slate max-w-none">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Privacy Policy and Terms of Use for {data.appNameEnglish}
          </h1>

          {data.sectionsEn.length > 0 ? (
            <>
              <p className="text-muted-foreground mb-8">Last updated: {data.lastUpdated}</p>
              <p>
                This document governs the use of {data.appNameEnglish} and explains how personal data is handled.
              </p>
              {data.sectionsEn.map((section) => renderSection(section, false))}
              <h2 className="text-xl font-semibold text-primary mt-8 mb-4">Contact Information</h2>
              {contactEmail && <p>For questions: <a href={`mailto:${contactEmail}`} className="text-accent hover:underline">{contactEmail}</a></p>}
            </>
          ) : (
            <div className="mt-8 py-12 text-center">
              <p className="text-xl text-muted-foreground">The privacy policy for {data.appNameEnglish} will be available soon.</p>
              {contactEmail && <p className="text-muted-foreground mt-4">For inquiries: <a href={`mailto:${contactEmail}`} className="text-accent hover:underline">{contactEmail}</a></p>}
            </div>
          )}
        </article>

        {data.sectionsEn.length > 0 && (
          <div className="mt-8 pt-8 border-t border-border text-center">
            <Link href={`/${data.slug}/privacy-ar`}>
              <Button variant="outline" className="font-arabic">عرض بالعربية</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
