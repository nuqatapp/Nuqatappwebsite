import { z } from "zod";

export const appCategorySchema = z.enum(["learn", "family", "utilities", "business", "games"]);
export type AppCategory = z.infer<typeof appCategorySchema>;

export const appStatusSchema = z.enum(["live", "beta", "coming-soon"]);
export type AppStatus = z.infer<typeof appStatusSchema>;

export const appSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  nameArabic: z.string(),
  category: appCategorySchema,
  platform: z.string(),
  platformArabic: z.string(),
  description: z.string(),
  descriptionArabic: z.string(),
  whyArabic: z.string(),
  howArabic: z.string(),
  tech: z.array(z.string()),
  iconUrl: z.string().optional(),
  appStoreUrl: z.string().optional(),
  playStoreUrl: z.string().optional(),
  link: z.string(),
  status: appStatusSchema,
  color: z.string(),
  disclaimer: z.string().optional(),
});

export type App = z.infer<typeof appSchema>;

export const appsArraySchema = z.array(appSchema);

export const APPS_DATA: App[] = [
  {
    id: 'hikmah-game',
    slug: 'hikmah',
    name: 'Hikmah Game',
    nameArabic: 'لعبة حكمة',
    category: 'learn',
    platform: 'Web Game',
    platformArabic: 'لعبة ويب',
    description: 'Educational multiplayer game platform featuring Arabic and English content with real-time quiz battles.',
    descriptionArabic: 'منصة ألعاب تعليمية متعددة اللاعبين تضم محتوى عربي وإنجليزي مع مسابقات فورية. تحدَّ معرفتك وتنافس مع لاعبين من حول العالم.',
    whyArabic: 'لأن التعلم يجب أن يكون ممتعاً. لعبة حكمة تحوّل المعرفة إلى تحدٍّ تفاعلي بين اللاعبين، حيث تتنافس في مسابقات فورية تختبر ثقافتك في مواضيع متنوعة باللغتين العربية والإنجليزية. سواء كنت تلعب مع أصدقائك أو تتحدى لاعبين من حول العالم، كل جولة تضيف لك معلومة جديدة.',
    howArabic: 'بُنيت لعبة حكمة باستخدام تقنيات حديثة تضمن تجربة سلسة وآمنة. تعتمد المنصة على Supabase لإدارة البيانات والمصادقة، مع اتصال فوري عبر WebSockets يتيح المنافسة في الوقت الحقيقي. جميع البيانات مشفرة ومحمية لضمان خصوصيتك.',
    tech: ['React', 'Supabase', 'WebSockets', 'Real-time'],
    appStoreUrl: undefined,
    link: 'https://hikmahgame.com/',
    status: 'coming-soon',
    color: '#5E2B38'
  },
  {
    id: 'gurb-app',
    slug: 'gurb',
    name: 'Gurb',
    nameArabic: 'قرب',
    category: 'family',
    platform: 'Mobile App',
    platformArabic: 'تطبيق جوال',
    description: 'Personal check-in application designed to keep loved ones close through simple daily confirmations.',
    descriptionArabic: 'تطبيق تسجيل حضور شخصي يساعدك على البقاء على تواصل مع من تثق بهم من خلال تأكيدات يومية بسيطة.',
    whyArabic: 'لأن راحة البال لا تقدّر بثمن. قرب يتيح لك تأكيد سلامتك يومياً بضغطة زر واحدة، ويُشعر أحبائك أنك بخير. إذا فاتك التسجيل، يتم إشعار الأشخاص الذين اخترتهم كداعمين. فكرة بسيطة تمنح الجميع اطمئناناً يومياً دون تعقيد.',
    howArabic: 'يعتمد قرب على Supabase لتخزين البيانات بشكل آمن ومشفّر، مع نظام إشعارات ذكي يعمل في الخلفية. جميع الاتصالات مشفرة ولا نشارك بياناتك مع أي طرف ثالث.',
    tech: ['React Native', 'Supabase', 'Push Notifications'],
    iconUrl: '/gurb-logo.png',
    appStoreUrl: 'https://apps.apple.com/us/app/gurb/id6759164131',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=sa.nuqat.gurb',
    link: '#',
    status: 'live',
    color: '#C27332',
    disclaimer: 'قرب ليس خدمة طوارئ أو نظام تنبيه طبي. في حالات الطوارئ، اتصل بخدمات الطوارئ المحلية.'
  },
  {
    id: 'house-closet',
    slug: 'house-closet',
    name: 'House Closet',
    nameArabic: 'خزانة المنزل',
    category: 'utilities',
    platform: 'Mobile App',
    platformArabic: 'تطبيق جوال',
    description: 'Home organization and inventory management app. Keep track of what you own and where it is stored.',
    descriptionArabic: 'تطبيق لتنظيم المنزل وإدارة المقتنيات. تتبّع ما تملكه وأين يُخزَّن، ولن تفقد أغراضك مجدداً.',
    whyArabic: 'لأن كل بيت يحتاج نظام. خزانة المنزل يساعدك على تنظيم مقتنياتك ومعرفة مكان كل شيء بسهولة. سواء كانت ملابس موسمية، أدوات مطبخ، أو أغراض مخزّنة، التطبيق يتيح لك تصوير وتصنيف وتتبّع كل قطعة في منزلك. لن تبحث عن شيء لا تعرف مكانه مرة أخرى.',
    howArabic: 'يستخدم خزانة المنزل تقنية التعرف على الصور لتسهيل إضافة المقتنيات، مع قاعدة بيانات محلية SQLite تعمل بدون إنترنت. بياناتك تُزامن تلقائياً مع السحابة لضمان عدم فقدانها، مع تشفير كامل لحماية خصوصيتك.',
    tech: ['React Native', 'Image Recognition', 'SQLite', 'Cloud Sync'],
    appStoreUrl: undefined,
    link: '#',
    status: 'coming-soon',
    color: '#7B5E4A'
  },
  {
    id: 'startup-account',
    slug: 'startup-account',
    name: 'Startup Account',
    nameArabic: 'حساب الشركة الناشئة',
    category: 'business',
    platform: 'Web App',
    platformArabic: 'تطبيق ويب',
    description: 'Web-based accounting and financial management platform built specifically for startups.',
    descriptionArabic: 'منصة محاسبة وإدارة مالية عبر الويب مصممة خصيصاً للشركات الناشئة. تتبّع المصروفات، أدِر الفواتير، وابقَ على اطلاع بأمورك المالية.',
    whyArabic: 'لأن الشركات الناشئة تحتاج أدوات مالية بسيطة وفعّالة. حساب الشركة الناشئة يمنحك رؤية واضحة لأموالك من اليوم الأول. تتبّع مصروفاتك، أنشئ فواتير احترافية، وراقب التدفق النقدي بلوحة تحكم سهلة الاستخدام مصممة خصيصاً لاحتياجات الشركات الناشئة.',
    howArabic: 'بُني حساب الشركة الناشئة باستخدام Next.js لتجربة سريعة وسلسة، مع PostgreSQL لتخزين البيانات المالية بشكل آمن وموثوق. يتكامل التطبيق مع Stripe لمعالجة المدفوعات، ويستخدم واجهات برمجة مالية متقدمة لتوفير تقارير دقيقة وتحليلات فورية.',
    tech: ['Next.js', 'PostgreSQL', 'Stripe', 'Financial APIs'],
    appStoreUrl: undefined,
    link: '#',
    status: 'beta',
    color: '#393F46'
  },
  {
    id: 'hexa-out-game',
    slug: 'hexa-out',
    name: 'Hexa Out',
    nameArabic: 'هيكسا آوت',
    category: 'games',
    platform: 'Mobile Game',
    platformArabic: 'لعبة جوال',
    description: 'A meditative hex rotation puzzle game. Tap hexagonal tiles to slide them off the board in their arrow direction. Clear 300 handcrafted levels across five difficulty tiers.',
    descriptionArabic: 'لعبة ألغاز سداسية تأملية. انقر على البلاطات السداسية لتحريكها خارج اللوحة باتجاه أسهمها. أزل جميع البلاطات لتجتاز كل مرحلة عبر 300 مرحلة مصممة يدوياً.',
    whyArabic: 'لأن عقلك يستحق تحدياً هادئاً. هيكسا آوت تجمع بين التفكير المكاني والاسترخاء في تجربة لعب فريدة. مع 300 مرحلة مصممة يدوياً عبر خمس مستويات صعوبة، كل مرحلة تختبر قدرتك على التخطيط والتفكير. ستواجه بلاطات مقفلة تحتاج فتحها أولاً، وبلاطات جليدية تتطلب نقرتين، وبوابات متصلة تخرج معاً، وبلاطات موقوتة بعدّاد تنازلي. خطط تحركاتك بعناية — لديك 3 محاولات فقط لكل مرحلة. اجمع العملات واكسب معززات لمساعدتك في المراحل الصعبة.',
    howArabic: 'بُنيت هيكسا آوت باستخدام محرك Unity لتقديم تجربة لعب سلسة ومرئيات مبهرة. تعتمد اللعبة على خوارزميات ذكية لتوليد الألغاز وضمان قابلية الحل، مع نظام حفظ تقدم محلي وتزامن سحابي. جميع البيانات مشفرة لحماية خصوصيتك.',
    tech: ['Unity', 'C#', 'Cloud Save', 'Analytics'],
    iconUrl: '/hexa-out-logo.jpg',
    appStoreUrl: undefined,
    link: '#',
    status: 'live',
    color: '#1A3A5C'
  },
  {
    id: 'arbad-app',
    slug: 'arbad',
    name: 'Arbad',
    nameArabic: 'أربد',
    category: 'utilities',
    platform: 'Mobile App',
    platformArabic: 'تطبيق جوال',
    description: 'One-tap activity logging. Stop scrolling through menus to track your life — high-speed, low-friction habit recording with deep detail and visual trends.',
    descriptionArabic: 'تسجيل نشاطك بنقرة واحدة. توقف عن التمرير في القوائم لتتبع حياتك — تسجيل سريع وخفيف للعادات مع تفاصيل عميقة وإحصاءات بصرية.',
    whyArabic: 'لأن تتبع حياتك يجب أن يكون بسيطاً كالتنفس. أربد مصمم للسرعة القصوى وأقل احتكاك ممكن. نقرة واحدة على الأيقونة تسجّل نشاطك فوراً مع التوقيت. وإن أردت التفصيل، اضغط مطولاً لتحديد أكثر — مثلاً من "الأكل" إلى "وجبة ثقيلة" أو "سكّر". لوحة مرئية تُظهر أنماطك الأسبوعية والشهرية بنظرة واحدة. وبياناتك تبقى على جهازك فقط، بلا حسابات ولا تتبع، فقط تاريخك الشخصي.',
    howArabic: 'بُني أربد باستخدام Swift وSwiftUI لتجربة أصيلة وسريعة على iOS. تُخزَّن جميع البيانات محلياً باستخدام Core Data دون الحاجة لإنترنت أو خوادم خارجية. الخصوصية ليست خيارًا في أربد — هي التصميم الأساسي.',
    tech: ['Swift', 'SwiftUI', 'Core Data', 'WidgetKit'],
    appStoreUrl: undefined,
    link: '#',
    status: 'live',
    color: '#2C4A3E'
  }
];

export const SITE_CONFIG = {
  domain: 'nuqat.app',
  tagline: {
    en: 'Every dot tells a story',
    ar: 'كل نقطة تحكي قصة'
  },
  studioLine: {
    ar: 'تطبيقات سعودية بسيطة ليومك',
    en: 'Simple Saudi apps for daily life'
  },
  featuredSlug: 'gurb'
};

// Social links shown in the footer. Leave a url empty to hide that platform.
export const SOCIAL_LINKS: { label: string; url: string }[] = [
  { label: 'TikTok', url: 'https://www.tiktok.com/@nuqat.app' },
  { label: 'Instagram', url: 'https://www.instagram.com/nuqat.app/' },
  { label: 'Snapchat', url: 'https://www.snapchat.com/add/nuqatapp' },
  { label: 'X', url: 'https://x.com/nuqatapp' },
];

export const CONTACT_EMAIL = 'nuqat.app@gmail.com';
