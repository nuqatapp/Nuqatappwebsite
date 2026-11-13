import { Fragment } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@shared/schema";

const POLICY = {
  en: {
    title: "Gurb — Privacy Policy",
    back: "Back to App",
    switchLanguage: "عرض بالعربية",
    body: `1. Introduction

Welcome to Gurb (قرب), a personal well-being and daily check-in application designed to help individuals maintain meaningful connections with people they trust. At Gurb, we recognize the importance of privacy, trust, and responsible handling of personal information. We are committed to protecting the personal data entrusted to us and maintaining transparency about how information is collected, used, stored, and shared. This Privacy Policy explains how Gurb ("Gurb," "we," "our," or "us") processes personal information when you access or use our mobile application, associated services, and support channels. By using Gurb, you acknowledge the data practices described in this Privacy Policy. Where applicable law requires consent for specific processing activities, we will obtain that consent separately.

2. About Gurb

Gurb is a personal check-in and trusted-contact notification application available on supported iOS and Android devices.

The application enables users to confirm their well-being through periodic check-ins and establish connections with trusted individuals known as "Backers."

Its primary capabilities include:

• Secure account registration and email-based authentication.
• Daily check-in reminders and confirmation.
• A recurring 24-hour check-in monitoring cycle.
• Adding and managing trusted Backers.
• Notifications to designated Backers when a check-in is missed.
• Viewing relevant check-in information through the My Care section.
• Managing personal account information and application preferences.
• Support for English and Arabic.
• Optional device-supported biometric authentication for additional access protection.

Gurb provides a supplementary communication and awareness tool.

3. Personal Information We Collect

We apply the principle of data minimization and aim to collect only information reasonably necessary to provide, secure, maintain, and improve Gurb.

3.1 Account and Profile Information

When you create or manage an account, we may process:

• Name or display name.
• Email address.
• Account identifier.
• Selected application language.
• Account creation and update timestamps.
• Profile settings and preferences.

Your email address is used for authentication, account-related communications, and essential service functionality.

3.2 Authentication and Account Security

Gurb uses email-based one-time password (OTP) authentication.

When you request access to your account, a verification code is delivered to your registered email address.

Authentication-related information may include:

• Email address associated with the login request.
• Verification request and authentication timestamps.
• Authentication session identifiers.
• Security-related events and unsuccessful login attempts.
• Technical information needed to prevent unauthorized access.

OTP verification codes are intended for temporary authentication purposes.

You should never share your verification codes with unauthorized individuals.

3.3 Check-In Information

To provide its primary functionality, Gurb processes information associated with your check-in activity, which may include:

• Check-in completion status.
• Time and date of the most recent check-in.
• Active check-in cycle information.
• Check-in deadline and expiration status.
• Missed check-in events.
• Information necessary to determine whether a Backer notification should be initiated.

This information is used to operate the check-in system and communicate relevant status changes to authorized Backers.

3.4 Backer and Trusted-Contact Information

When you establish a Backer relationship, Gurb may process:

• Account identifiers associated with the relationship.
• Names or display names required to identify connected users.
• Backer invitation and relationship status.
• Information necessary to manage or terminate the relationship.
• Check-in information made available through the authorized relationship.

Backers receive access only to the information necessary for their permitted role.

Users should establish Backer relationships only with individuals they trust.

3.5 Device and Technical Information

To support functionality, security, and application performance, Gurb and its service providers may process limited technical information, including:

• Device operating system and application version.
• Device or installation identifiers.
• Push notification registration tokens.
• Application performance information.
• Error and diagnostic records.
• Network-related information necessary for service delivery and security.
• Timestamps associated with application operations.

Such information is processed for legitimate operational purposes and is not intended for unrelated behavioral advertising.

3.6 Biometric Authentication

Where supported, Gurb may offer additional device-level access protection using Face ID, fingerprint recognition, or equivalent biometric capabilities.

Biometric verification is performed through the security mechanisms provided by your device's operating system.

Gurb does not require users to upload facial images or fingerprint templates to operate biometric authentication.

We do not intentionally collect or store raw biometric templates on Gurb servers.

3.7 Location Information

Gurb's core check-in functionality does not require continuous GPS tracking or real-time location monitoring.

Gurb does not provide Backers with live location tracking through its core check-in features.

Limited network-related information, such as IP addresses, may still be processed by infrastructure providers for authentication, security, and service operation. Such information may permit approximate location inference.

3.8 Support Communications

When you contact Gurb support, we may process:

• Your email address.
• The content of your inquiry.
• Information you voluntarily provide.
• Relevant technical details required to investigate the reported issue.

We use this information to respond to support requests, troubleshoot problems, and maintain service quality.

4. How We Use Personal Information

We process personal information for the following purposes:

Account Management: Creating accounts, authenticating users, managing sessions, and maintaining account preferences.

Check-In Functionality: Recording check-in confirmations, calculating deadlines, and managing check-in cycles.

Backer Notifications: Identifying missed check-ins and initiating notifications to authorized trusted contacts.

Relationship Management: Establishing, displaying, updating, and removing Backer connections.

Security and Fraud Prevention: Detecting suspicious activities, preventing unauthorized access, and protecting account integrity.

Technical Operations: Delivering push notifications, diagnosing application errors, and maintaining system reliability.

Customer Support: Responding to inquiries, resolving reported problems, and assisting users.

Legal Compliance: Meeting applicable legal obligations and responding to lawful requests.

We do not sell personal information or use check-in activity for third-party targeted advertising.

5. Legal Basis for Processing

Where applicable data protection laws require a legal basis, Gurb processes personal information based on one or more of the following grounds:

• Processing necessary to provide the services requested by users.
• Compliance with applicable legal obligations.
• Legitimate operational interests, where permitted by law and appropriately balanced against individual rights.
• Consent, where specifically required for a processing activity.

We seek to ensure that processing is limited to clearly identified, lawful purposes.

Users may withdraw consent where consent is the applicable legal basis, subject to legal restrictions and the practical requirements of the service.

6. Check-In and Backer Privacy

The Backer system is a central component of Gurb.

When a user establishes an authorized Backer relationship, relevant information may become visible to the connected individual.

Depending on the relationship and available application features, this may include:

• The connected user's name or display name.
• Relevant check-in status.
• Missed check-in notifications.
• Information required to identify the associated check-in relationship.

Gurb does not intend to provide Backers with unrestricted access to another user's personal account, authentication credentials, or unrelated private information.

Users are responsible for selecting appropriate Backers and reviewing their trusted-contact relationships.

Removing a Backer relationship restricts future access through that relationship, subject to the technical implementation of the service. Information already received by another person, including delivered notifications, may remain outside Gurb's control.

7. Push Notifications

Gurb uses push notifications to support essential application features, including check-in reminders and missed check-in alerts.

Notifications may be delivered through third-party mobile notification infrastructure, including services provided by Apple and Google.

Notification delivery depends on several factors, including:

• Device connectivity.
• Operating system restrictions.
• Battery optimization settings.
• Notification permissions.
• Third-party notification infrastructure.
• Application and backend service availability.

Notifications may be delayed, blocked, or undelivered.

Users may manage notification permissions through their device settings. Disabling notifications may materially affect Gurb's ability to provide timely reminders and alerts.

8. Data Storage and Infrastructure

Gurb uses Supabase-based backend infrastructure for applicable database, authentication, and service operations.

Personal information may be stored or processed through:

• Secure application databases.
• Authentication services.
• Backend application functions.
• Notification delivery systems.
• Authorized technical service providers.

We aim to apply appropriate technical and organizational safeguards, including encrypted communications, access controls, and restrictions on data access.

Data may be processed in jurisdictions where our infrastructure providers operate. Any international transfer of personal data must comply with applicable data protection requirements, including relevant requirements of the Kingdom of Saudi Arabia.

Although we take reasonable steps to protect information, no internet-connected service can guarantee absolute security.

9. Third-Party Service Providers

Gurb may rely on trusted third-party providers to deliver essential functionality.

These may include:

Supabase: Authentication, database storage, and backend infrastructure.

Apple Services: iOS application distribution, operating system security features, and applicable push notification delivery.

Google Services: Android application distribution, operating system services, and applicable push notification delivery.

Expo and related infrastructure: Application development, deployment, and notification functionality where integrated into the production application.

These providers may process limited information necessary to deliver their respective services, subject to their applicable privacy policies and contractual obligations.

We do not authorize service providers to use Gurb personal information for unrelated advertising purposes.

10. Personal Data Sharing and Disclosure

Gurb does not sell or rent personal information.

We may disclose limited information in the following circumstances:

Authorized Backers: To provide the check-in and trusted-contact features selected by users.

Service Providers: To operate, maintain, secure, and support the application.

Legal Requirements: When disclosure is required by applicable law, valid legal process, or a lawful request from an authorized authority.

Protection of Rights and Security: Where permitted by law and reasonably necessary to investigate abuse, protect users, or defend legal rights.

Any disclosure is intended to be limited to the information reasonably necessary for the relevant purpose.

11. Data Retention

We retain personal information only for as long as reasonably necessary to provide the application, meet legitimate operational needs, and comply with applicable legal obligations.

Retention periods may vary according to the type of information, its purpose, and legal requirements.

For example:

• Account information is generally maintained while an account remains active.
• Check-in and Backer records are maintained as necessary to provide related features.
• Authentication and security logs may be retained for limited operational or security purposes.
• Support communications may be retained as necessary to resolve inquiries or comply with applicable obligations.

When information is no longer required, we take reasonable steps to delete, anonymize, or otherwise securely dispose of it.

12. Account Deletion and Data Removal

Gurb provides users with the ability to request deletion of their accounts.

Where supported in the application, users can initiate deletion through the account or profile settings.

Upon a valid deletion request:

• Access to the account will be terminated.
• Associated Backer relationships will be removed or deactivated.
• Personal account and check-in information will be deleted or anonymized according to applicable retention requirements.
• Information required to be retained by law or for legitimate security purposes may be retained for the permitted period.

Deletion may not immediately remove information already delivered to other users, third-party systems, or temporary backups.

Account deletion is intended to be permanent, and deleted account information may not be recoverable.

Users who require assistance may contact:

nuqat.app@gmail.com

13. Your Privacy Rights

Depending on applicable law, including the Saudi Personal Data Protection Law, you may have rights relating to your personal information.

These may include:

• The right to be informed about personal data processing.
• The right to request access to your personal data.
• The right to obtain a copy of your personal data, where applicable.
• The right to request correction or updating of inaccurate information.
• The right to request deletion or destruction of personal data, subject to lawful exceptions.
• The right to withdraw consent where processing is based on consent.
• Other rights available under applicable data protection laws.

To exercise an applicable right, contact us at nuqat.app@gmail.com.

We may request reasonable verification of your identity before responding to a privacy-related request.

We will respond within the timeframes required by applicable law.

14. Children's Privacy

Gurb is not designed or intended for use by children under the age of 13.

We do not knowingly solicit personal information directly from children under 13.

Where additional age-related restrictions, parental consent requirements, or protections apply under local law, those requirements take precedence.

If we become aware that personal information has been collected from a child in violation of applicable requirements, we will take appropriate steps to address the situation.

Parents or legal guardians may contact us regarding potential concerns at nuqat.app@gmail.com.

15. User Choices and Controls

Gurb provides or relies on controls that allow users to manage relevant aspects of their privacy.

Depending on the application version, these may include:

• Updating profile information.
• Managing trusted Backer relationships.
• Selecting English or Arabic.
• Managing notification permissions.
• Enabling or disabling supported biometric protection.
• Requesting account deletion.

Some essential data processing is necessary for Gurb to function. Restricting essential permissions or information may affect feature availability.

16. Service Reliability and Safety

Gurb is designed to encourage consistent communication between individuals and their trusted contacts.

However, the application cannot guarantee:

• Continuous service availability.
• Uninterrupted internet connectivity.
• Successful delivery of every notification.
• Immediate response from a Backer.
• Detection of medical or personal emergencies.
• Verification of a user's actual physical condition.

A missed check-in does not necessarily indicate an emergency, and a completed check-in does not guarantee safety.

Users should maintain independent communication arrangements and contact local emergency services whenever immediate assistance is required.

17. International Data Processing

Some service providers may store or process information outside the Kingdom of Saudi Arabia.

Where international transfers occur, we aim to implement appropriate measures required by applicable laws, including restrictions and safeguards under Saudi data protection regulations.

The locations and safeguards applicable to processing may depend on the configured infrastructure and service providers.

18. Updates to This Privacy Policy

We may revise this Privacy Policy to reflect:

• Changes in application functionality.
• Updates to service providers.
• Improvements in privacy or security practices.
• Changes in applicable legal requirements.

The revised policy will be published with an updated effective or revision date.

Where legally required, we will provide additional notice or obtain consent before implementing material changes.

19. Applicable Law

This Privacy Policy is intended to operate in accordance with applicable laws and regulations of the Kingdom of Saudi Arabia, including the Personal Data Protection Law and its applicable implementing regulations.

Nothing in this policy is intended to restrict rights that cannot lawfully be waived.

20. Contact and Privacy Inquiries

If you have questions, concerns, complaints, or requests regarding your personal information or this Privacy Policy, please contact:

Application: Gurb (قرب)

Support and Privacy Email: nuqat.app@gmail.com

Applicable Jurisdiction: Kingdom of Saudi Arabia

We are committed to reviewing privacy inquiries and responding in accordance with applicable legal requirements.

Gurb — Stay Connected. Stay Close.

© 2026 Gurb. All rights reserved.`,
  },
  ar: {
    title: "قرب — سياسة الخصوصية",
    back: "العودة لصفحة التطبيق",
    switchLanguage: "View in English",
    body: `1. المقدمة

مرحبًا بك في قرب (Gurb)، وهو تطبيق للاطمئنان الشخصي وتسجيل الاطمئنان اليومي، صُمّم لمساعدة الأفراد على الحفاظ على روابط ذات معنى مع الأشخاص الذين يثقون بهم. ندرك في قرب أهمية الخصوصية والثقة والتعامل المسؤول مع المعلومات الشخصية. ونلتزم بحماية البيانات الشخصية التي تُعهد إلينا، وبالشفافية بشأن كيفية جمع المعلومات واستخدامها وتخزينها ومشاركتها. توضح سياسة الخصوصية هذه كيف يعالج قرب («قرب» أو «نحن» أو «لنا») المعلومات الشخصية عند وصولك إلى تطبيقنا للهواتف المحمولة أو استخدامه، أو استخدام الخدمات المرتبطة به وقنوات الدعم. باستخدامك قرب، فإنك تقرّ بممارسات التعامل مع البيانات الموضحة في سياسة الخصوصية هذه. وحيثما يتطلب النظام المعمول به الحصول على موافقة على أنشطة معالجة محددة، سنحصل على تلك الموافقة بصورة منفصلة.

2. نبذة عن قرب

قرب هو تطبيق لتسجيل الاطمئنان الشخصي وإشعار جهات الاتصال الموثوقة، وهو متاح على أجهزة iOS وAndroid المدعومة.

يتيح التطبيق للمستخدمين تأكيد أنهم بخير من خلال تسجيلات اطمئنان دورية، وإنشاء روابط مع أشخاص موثوقين يُعرفون باسم «المساندين» (Backers).

تشمل ميزاته الأساسية ما يلي:

• تسجيل الحسابات بأمان والمصادقة عبر البريد الإلكتروني.
• التذكير بتسجيل الاطمئنان اليومي وتأكيده.
• دورة متكررة لمتابعة تسجيل الاطمئنان مدتها 24 ساعة.
• إضافة المساندين الموثوقين وإدارتهم.
• إشعار المساندين المحددين عند عدم تسجيل الاطمئنان في موعده.
• عرض معلومات تسجيل الاطمئنان ذات الصلة من خلال قسم «رعايتي» (My Care).
• إدارة معلومات الحساب الشخصية وتفضيلات التطبيق.
• دعم اللغتين الإنجليزية والعربية.
• مصادقة اختيارية بالسمات الحيوية، حيث يدعمها الجهاز، لتوفير حماية إضافية للوصول.

يوفر قرب أداة مساندة للتواصل والاطلاع على حالة الأشخاص.

3. المعلومات الشخصية التي نجمعها

نطبّق مبدأ تقليل البيانات، ونسعى إلى جمع المعلومات الضرورية بصورة معقولة فقط لتقديم قرب وتأمينه وصيانته وتحسينه.

3.1 معلومات الحساب والملف الشخصي

عند إنشاء حساب أو إدارته، قد نعالج ما يلي:

• الاسم أو اسم العرض.
• عنوان البريد الإلكتروني.
• معرّف الحساب.
• اللغة المختارة للتطبيق.
• الطوابع الزمنية لإنشاء الحساب وتحديثه.
• إعدادات الملف الشخصي وتفضيلاته.

يُستخدم عنوان بريدك الإلكتروني للمصادقة والمراسلات المتعلقة بالحساب والوظائف الأساسية للخدمة.

3.2 المصادقة وأمن الحساب

يستخدم قرب المصادقة عبر البريد الإلكتروني بواسطة رمز يُستخدم لمرة واحدة (OTP).

عندما تطلب الوصول إلى حسابك، يُرسل رمز تحقق إلى عنوان بريدك الإلكتروني المسجل.

قد تشمل المعلومات المتعلقة بالمصادقة ما يلي:

• عنوان البريد الإلكتروني المرتبط بطلب تسجيل الدخول.
• الطوابع الزمنية لطلبات التحقق والمصادقة.
• معرّفات جلسات المصادقة.
• الأحداث المتعلقة بالأمن ومحاولات تسجيل الدخول غير الناجحة.
• المعلومات التقنية اللازمة لمنع الوصول غير المصرح به.

رموز التحقق التي تُستخدم لمرة واحدة مخصصة لأغراض المصادقة المؤقتة.

ينبغي ألا تشارك رموز التحقق الخاصة بك مطلقًا مع أشخاص غير مخولين.

3.3 معلومات تسجيل الاطمئنان

لتوفير وظائفه الأساسية، يعالج قرب معلومات مرتبطة بنشاط تسجيل الاطمئنان الخاص بك، وقد تشمل:

• حالة إتمام تسجيل الاطمئنان.
• وقت آخر تسجيل اطمئنان وتاريخه.
• معلومات دورة تسجيل الاطمئنان النشطة.
• الموعد النهائي لتسجيل الاطمئنان وحالة انتهاء المدة.
• حالات عدم تسجيل الاطمئنان في موعده.
• المعلومات اللازمة لتحديد ما إذا كان ينبغي بدء إرسال إشعار إلى أحد المساندين.

تُستخدم هذه المعلومات لتشغيل نظام تسجيل الاطمئنان وإبلاغ المساندين المخولين بالتغييرات ذات الصلة في الحالة.

3.4 معلومات المساندين وجهات الاتصال الموثوقة

عند إنشاء علاقة مساندة، قد يعالج قرب ما يلي:

• معرّفات الحسابات المرتبطة بالعلاقة.
• الأسماء أو أسماء العرض اللازمة للتعرف على المستخدمين المرتبطين.
• حالة دعوة المساند وعلاقة المساندة.
• المعلومات اللازمة لإدارة العلاقة أو إنهائها.
• معلومات تسجيل الاطمئنان المتاحة من خلال العلاقة المصرح بها.

لا يُتاح للمساندين الوصول إلا إلى المعلومات الضرورية لأداء الدور المسموح لهم به.

ينبغي للمستخدمين إنشاء علاقات مساندة مع أشخاص يثقون بهم فقط.

3.5 معلومات الجهاز والمعلومات التقنية

لدعم وظائف التطبيق وأمنه وأدائه، قد يعالج قرب ومزودو خدماته معلومات تقنية محدودة، تشمل:

• نظام تشغيل الجهاز وإصدار التطبيق.
• معرّفات الجهاز أو تثبيت التطبيق.
• رموز التسجيل في خدمة الإشعارات الفورية.
• معلومات أداء التطبيق.
• سجلات الأخطاء والتشخيص.
• المعلومات المتعلقة بالشبكة والضرورية لتقديم الخدمة وتأمينها.
• الطوابع الزمنية المرتبطة بعمليات التطبيق.

تُعالج هذه المعلومات لأغراض تشغيلية مشروعة، ولا يُقصد استخدامها للإعلانات السلوكية غير المرتبطة بتلك الأغراض.

3.6 المصادقة بالسمات الحيوية

حيثما تتوفر هذه الإمكانات، قد يقدم قرب حماية إضافية للوصول على مستوى الجهاز باستخدام Face ID أو التعرف على بصمة الإصبع أو إمكانات مماثلة للمصادقة بالسمات الحيوية.

يُجرى التحقق بالسمات الحيوية من خلال آليات الأمان التي يوفرها نظام تشغيل جهازك.

لا يشترط قرب على المستخدمين رفع صور وجوههم أو قوالب بصمات أصابعهم لتشغيل المصادقة بالسمات الحيوية.

لا نجمع أو نخزن عمدًا قوالب السمات الحيوية الخام على خوادم قرب.

3.7 معلومات الموقع الجغرافي

لا تتطلب الوظيفة الأساسية لتسجيل الاطمئنان في قرب التتبع المستمر عبر GPS أو مراقبة الموقع الجغرافي في الوقت الفعلي.

لا يتيح قرب للمساندين تتبع الموقع الجغرافي المباشر من خلال ميزاته الأساسية لتسجيل الاطمئنان.

قد يظل مزودو البنية التحتية يعالجون معلومات محدودة متعلقة بالشبكة، مثل عناوين IP، لأغراض المصادقة والأمن وتشغيل الخدمة. وقد تتيح هذه المعلومات استنتاج الموقع الجغرافي التقريبي.

3.8 مراسلات الدعم

عندما تتواصل مع دعم قرب، قد نعالج ما يلي:

• عنوان بريدك الإلكتروني.
• محتوى استفسارك.
• المعلومات التي تقدمها طوعًا.
• التفاصيل التقنية ذات الصلة واللازمة للتحقيق في المشكلة المبلغ عنها.

نستخدم هذه المعلومات للرد على طلبات الدعم واستكشاف المشكلات وحلها والحفاظ على جودة الخدمة.

4. كيفية استخدام المعلومات الشخصية

نعالج المعلومات الشخصية للأغراض التالية:

إدارة الحسابات: إنشاء الحسابات، والمصادقة على هوية المستخدمين، وإدارة الجلسات، والحفاظ على تفضيلات الحساب.

وظائف تسجيل الاطمئنان: تسجيل تأكيدات الاطمئنان، وحساب المواعيد النهائية، وإدارة دورات تسجيل الاطمئنان.

إشعارات المساندين: تحديد حالات عدم تسجيل الاطمئنان وبدء إرسال الإشعارات إلى جهات الاتصال الموثوقة والمخولة.

إدارة العلاقات: إنشاء روابط المساندين وعرضها وتحديثها وإزالتها.

الأمن ومنع الاحتيال: اكتشاف الأنشطة المشبوهة، ومنع الوصول غير المصرح به، وحماية سلامة الحسابات.

العمليات التقنية: إيصال الإشعارات الفورية، وتشخيص أخطاء التطبيق، والحفاظ على موثوقية النظام.

دعم العملاء: الرد على الاستفسارات، وحل المشكلات المبلغ عنها، ومساعدة المستخدمين.

الامتثال للأنظمة: الوفاء بالالتزامات النظامية المعمول بها والاستجابة للطلبات المشروعة.

لا نبيع المعلومات الشخصية، ولا نستخدم نشاط تسجيل الاطمئنان لأغراض الإعلانات المستهدفة التابعة لأطراف ثالثة.

5. الأساس النظامي للمعالجة

حيثما تتطلب أنظمة حماية البيانات المعمول بها أساسًا نظاميًا، يعالج قرب المعلومات الشخصية بناءً على واحد أو أكثر من الأسس التالية:

• المعالجة الضرورية لتقديم الخدمات التي يطلبها المستخدمون.
• الامتثال للالتزامات النظامية المعمول بها.
• المصالح التشغيلية المشروعة، حيثما يسمح النظام بذلك وبعد موازنتها بصورة مناسبة مع حقوق الأفراد.
• الموافقة، عندما تكون مطلوبة تحديدًا لنشاط معالجة معين.

نسعى إلى ضمان اقتصار المعالجة على أغراض مشروعة ومحددة بوضوح.

يجوز للمستخدمين سحب موافقتهم عندما تكون الموافقة هي الأساس النظامي المعمول به، مع مراعاة القيود النظامية والمتطلبات العملية للخدمة.

6. خصوصية تسجيل الاطمئنان والمساندين

يُعد نظام المساندين عنصرًا أساسيًا في قرب.

عندما ينشئ مستخدم علاقة مساندة مصرحًا بها، قد تصبح المعلومات ذات الصلة مرئية للشخص المرتبط به.

بحسب العلاقة وميزات التطبيق المتاحة، قد يشمل ذلك:

• اسم المستخدم المرتبط أو اسم العرض الخاص به.
• حالة تسجيل الاطمئنان ذات الصلة.
• إشعارات عدم تسجيل الاطمئنان.
• المعلومات اللازمة لتحديد علاقة تسجيل الاطمئنان المعنية.

لا يقصد قرب منح المساندين وصولًا غير مقيد إلى الحساب الشخصي لمستخدم آخر أو بيانات اعتماده للمصادقة أو معلوماته الخاصة غير المرتبطة بهذه العلاقة.

يتحمل المستخدمون مسؤولية اختيار المساندين المناسبين ومراجعة علاقاتهم مع جهات الاتصال الموثوقة.

تؤدي إزالة علاقة المساندة إلى تقييد الوصول المستقبلي من خلال تلك العلاقة، وفقًا للتنفيذ التقني للخدمة. وقد تظل المعلومات التي تلقاها شخص آخر بالفعل، بما فيها الإشعارات التي تم إيصالها، خارج نطاق سيطرة قرب.

7. الإشعارات الفورية

يستخدم قرب الإشعارات الفورية لدعم الميزات الأساسية للتطبيق، بما فيها التذكير بتسجيل الاطمئنان والتنبيه عند عدم تسجيله في موعده.

قد تُرسل الإشعارات عبر بنية تحتية لإشعارات الأجهزة المحمولة تابعة لأطراف ثالثة، بما فيها الخدمات التي تقدمها Apple وGoogle.

يعتمد إيصال الإشعارات على عدة عوامل، منها:

• اتصال الجهاز بالشبكة.
• قيود نظام التشغيل.
• إعدادات تحسين استهلاك البطارية.
• أذونات الإشعارات.
• البنية التحتية لإشعارات الأطراف الثالثة.
• توفر التطبيق وخدماته الخلفية.

قد تتأخر الإشعارات أو تُحظر أو لا تصل.

يمكن للمستخدمين إدارة أذونات الإشعارات من خلال إعدادات أجهزتهم. وقد يؤثر تعطيل الإشعارات تأثيرًا جوهريًا في قدرة قرب على تقديم التذكيرات والتنبيهات في الوقت المناسب.

8. تخزين البيانات والبنية التحتية

يستخدم قرب بنية تحتية خلفية قائمة على Supabase لعمليات قواعد البيانات والمصادقة والخدمات ذات الصلة.

قد تُخزن المعلومات الشخصية أو تُعالج من خلال:

• قواعد بيانات آمنة للتطبيق.
• خدمات المصادقة.
• وظائف التطبيق الخلفية.
• أنظمة إيصال الإشعارات.
• مزودي الخدمات التقنية المخولين.

نسعى إلى تطبيق ضمانات تقنية وتنظيمية مناسبة، تشمل الاتصالات المشفرة وضوابط الوصول والقيود المفروضة على الوصول إلى البيانات.

قد تُعالج البيانات في نطاقات قضائية يعمل فيها مزودو بنيتنا التحتية. ويجب أن يتوافق أي نقل دولي للبيانات الشخصية مع متطلبات حماية البيانات المعمول بها، بما فيها المتطلبات ذات الصلة في المملكة العربية السعودية.

رغم اتخاذنا خطوات معقولة لحماية المعلومات، لا تستطيع أي خدمة متصلة بالإنترنت ضمان الأمن المطلق.

9. مزودو خدمات الأطراف الثالثة

قد يعتمد قرب على مزودي خدمات موثوقين من أطراف ثالثة لتوفير الوظائف الأساسية.

وقد يشمل هؤلاء:

Supabase: المصادقة وتخزين قواعد البيانات والبنية التحتية الخلفية.

خدمات Apple: توزيع التطبيق على iOS، وميزات أمان نظام التشغيل، وإيصال الإشعارات الفورية ذات الصلة.

خدمات Google: توزيع التطبيق على Android، وخدمات نظام التشغيل، وإيصال الإشعارات الفورية ذات الصلة.

Expo والبنية التحتية المرتبطة به: تطوير التطبيق ونشره ووظائف الإشعارات، حيثما تكون مدمجة في نسخة التطبيق المستخدمة فعليًا.

قد يعالج هؤلاء المزودون معلومات محدودة وضرورية لتقديم خدماتهم، وفقًا لسياسات الخصوصية والالتزامات التعاقدية السارية عليهم.

لا نسمح لمزودي الخدمات باستخدام المعلومات الشخصية الخاصة بقرب لأغراض إعلانية غير مرتبطة بالخدمة.

10. مشاركة البيانات الشخصية والإفصاح عنها

لا يبيع قرب المعلومات الشخصية ولا يؤجرها.

قد نفصح عن معلومات محدودة في الحالات التالية:

المساندون المخولون: لتوفير ميزات تسجيل الاطمئنان وجهات الاتصال الموثوقة التي يختارها المستخدمون.

مزودو الخدمات: لتشغيل التطبيق وصيانته وتأمينه ودعمه.

المتطلبات النظامية: عندما يكون الإفصاح مطلوبًا بموجب النظام المعمول به أو إجراء قانوني صحيح أو طلب مشروع من جهة مخولة.

حماية الحقوق والأمن: حيثما يسمح النظام بذلك ويكون ضروريًا بصورة معقولة للتحقيق في إساءة الاستخدام أو حماية المستخدمين أو الدفاع عن الحقوق القانونية.

يُقصد أن يقتصر أي إفصاح على المعلومات الضرورية بصورة معقولة للغرض المعني.

11. الاحتفاظ بالبيانات

نحتفظ بالمعلومات الشخصية فقط للمدة الضرورية بصورة معقولة لتقديم التطبيق وتلبية الاحتياجات التشغيلية المشروعة والامتثال للالتزامات النظامية المعمول بها.

قد تختلف مدد الاحتفاظ بحسب نوع المعلومات والغرض منها والمتطلبات النظامية.

على سبيل المثال:

• يُحتفظ بمعلومات الحساب عمومًا ما دام الحساب نشطًا.
• يُحتفظ بسجلات تسجيل الاطمئنان والمساندين بالقدر اللازم لتوفير الميزات المرتبطة بها.
• قد يُحتفظ بسجلات المصادقة والأمن لأغراض تشغيلية أو أمنية محدودة.
• قد يُحتفظ بمراسلات الدعم بالقدر اللازم لحل الاستفسارات أو الامتثال للالتزامات المعمول بها.

عندما لا تعود المعلومات مطلوبة، نتخذ خطوات معقولة لحذفها أو إخفاء هويتها أو التخلص منها بصورة آمنة بوسيلة أخرى.

12. حذف الحساب وإزالة البيانات

يتيح قرب للمستخدمين طلب حذف حساباتهم.

حيثما يدعم التطبيق ذلك، يمكن للمستخدمين بدء الحذف من خلال إعدادات الحساب أو الملف الشخصي.

عند تلقي طلب حذف صحيح:

• سيُنهى الوصول إلى الحساب.
• ستُزال علاقات المساندة المرتبطة بالحساب أو تُعطّل.
• ستُحذف معلومات الحساب الشخصية ومعلومات تسجيل الاطمئنان أو تُخفى هويتها وفقًا لمتطلبات الاحتفاظ المعمول بها.
• قد يُحتفظ بالمعلومات التي يتطلب النظام الاحتفاظ بها أو اللازمة لأغراض أمنية مشروعة، وذلك للمدة المسموح بها.

قد لا يؤدي الحذف إلى إزالة المعلومات التي سبق إيصالها إلى مستخدمين آخرين أو أنظمة أطراف ثالثة أو نسخ احتياطية مؤقتة على الفور.

يُقصد أن يكون حذف الحساب دائمًا، وقد لا يمكن استعادة معلومات الحساب المحذوفة.

يمكن للمستخدمين الذين يحتاجون إلى مساعدة التواصل عبر:

nuqat.app@gmail.com

13. حقوقك المتعلقة بالخصوصية

بحسب النظام المعمول به، بما في ذلك نظام حماية البيانات الشخصية السعودي، قد تكون لك حقوق تتعلق بمعلوماتك الشخصية.

وقد تشمل هذه الحقوق:

• الحق في العلم بكيفية معالجة البيانات الشخصية.
• الحق في طلب الوصول إلى بياناتك الشخصية.
• الحق في الحصول على نسخة من بياناتك الشخصية، حيثما ينطبق ذلك.
• الحق في طلب تصحيح المعلومات غير الدقيقة أو تحديثها.
• الحق في طلب حذف البيانات الشخصية أو إتلافها، مع مراعاة الاستثناءات النظامية.
• الحق في سحب الموافقة عندما تكون المعالجة قائمة عليها.
• الحقوق الأخرى المتاحة بموجب أنظمة حماية البيانات المعمول بها.

لممارسة أحد الحقوق المنطبقة، تواصل معنا عبر nuqat.app@gmail.com.

قد نطلب التحقق من هويتك بوسائل معقولة قبل الرد على طلب متعلق بالخصوصية.

سنرد خلال المدد الزمنية التي يحددها النظام المعمول به.

14. خصوصية الأطفال

لم يُصمم قرب ولا يُقصد استخدامه من قبل الأطفال دون سن 13 عامًا.

لا نطلب عن علم معلومات شخصية مباشرة من أطفال دون سن 13 عامًا.

حيثما يفرض النظام المحلي قيودًا إضافية متعلقة بالعمر أو متطلبات لموافقة الوالدين أو تدابير حماية، تكون لتلك المتطلبات الأولوية.

إذا علمنا بجمع معلومات شخصية من طفل بالمخالفة للمتطلبات المعمول بها، فسنتخذ الخطوات المناسبة لمعالجة الوضع.

يجوز للوالدين أو الأوصياء القانونيين التواصل معنا بشأن أي مخاوف محتملة عبر nuqat.app@gmail.com.

15. خيارات المستخدم وأدوات التحكم

يوفر قرب أدوات تحكم، أو يعتمد عليها، تتيح للمستخدمين إدارة الجوانب ذات الصلة بخصوصيتهم.

بحسب إصدار التطبيق، قد تشمل هذه الأدوات:

• تحديث معلومات الملف الشخصي.
• إدارة علاقات المساندة الموثوقة.
• اختيار اللغة الإنجليزية أو العربية.
• إدارة أذونات الإشعارات.
• تفعيل الحماية بالسمات الحيوية المدعومة أو تعطيلها.
• طلب حذف الحساب.

تُعد بعض عمليات معالجة البيانات الأساسية ضرورية لعمل قرب. وقد يؤثر تقييد الأذونات أو المعلومات الأساسية في توفر الميزات.

16. موثوقية الخدمة والسلامة

صُمّم قرب لتشجيع التواصل المنتظم بين الأفراد وجهات اتصالهم الموثوقة.

ومع ذلك، لا يستطيع التطبيق ضمان:

• توفر الخدمة باستمرار.
• اتصال الإنترنت دون انقطاع.
• إيصال كل إشعار بنجاح.
• استجابة المساند فورًا.
• اكتشاف حالات الطوارئ الطبية أو الشخصية.
• التحقق من الحالة الجسدية الفعلية للمستخدم.

لا يعني عدم تسجيل الاطمئنان بالضرورة وجود حالة طارئة، كما أن إتمام تسجيل الاطمئنان لا يضمن السلامة.

ينبغي للمستخدمين الحفاظ على ترتيبات تواصل مستقلة والاتصال بخدمات الطوارئ المحلية عند الحاجة إلى مساعدة فورية.

17. المعالجة الدولية للبيانات

قد يخزن بعض مزودي الخدمات المعلومات أو يعالجونها خارج المملكة العربية السعودية.

عند حدوث عمليات نقل دولي، نسعى إلى تطبيق التدابير المناسبة التي تتطلبها الأنظمة المعمول بها، بما فيها القيود والضمانات المنصوص عليها في أنظمة حماية البيانات السعودية.

قد تعتمد مواقع المعالجة والضمانات المطبقة عليها على البنية التحتية التي جرى إعدادها ومزودي الخدمات.

18. تحديثات سياسة الخصوصية هذه

قد نراجع سياسة الخصوصية هذه لتعكس:

• التغييرات في وظائف التطبيق.
• التحديثات المتعلقة بمزودي الخدمات.
• التحسينات في ممارسات الخصوصية أو الأمن.
• التغييرات في المتطلبات النظامية المعمول بها.

ستُنشر السياسة المنقحة مع تحديث تاريخ السريان أو المراجعة.

حيثما يتطلب النظام ذلك، سنقدم إشعارًا إضافيًا أو نحصل على الموافقة قبل تطبيق تغييرات جوهرية.

19. النظام المعمول به

يُقصد أن تُطبّق سياسة الخصوصية هذه وفقًا للأنظمة واللوائح المعمول بها في المملكة العربية السعودية، بما فيها نظام حماية البيانات الشخصية ولوائحه التنفيذية السارية.

لا يُقصد بأي نص في هذه السياسة تقييد الحقوق التي لا يجوز التنازل عنها نظامًا.

20. التواصل والاستفسارات المتعلقة بالخصوصية

إذا كانت لديك أسئلة أو مخاوف أو شكاوى أو طلبات بشأن معلوماتك الشخصية أو سياسة الخصوصية هذه، فيُرجى التواصل معنا:

التطبيق: قرب (Gurb)

البريد الإلكتروني للدعم والخصوصية: nuqat.app@gmail.com

النطاق القضائي المعمول به: المملكة العربية السعودية

نلتزم بمراجعة الاستفسارات المتعلقة بالخصوصية والرد عليها وفقًا للمتطلبات النظامية المعمول بها.

قرب — ابقَ على تواصل. ابقَ قريبًا.

© 2026 قرب. جميع الحقوق محفوظة.`,
  },
};

function PolicyText({ text }: { text: string }) {
  return (
    <>
      {text.split(CONTACT_EMAIL).map((part, index) => (
        <Fragment key={index}>
          {index > 0 && (
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">
              <bdi dir="ltr">{CONTACT_EMAIL}</bdi>
            </a>
          )}
          {part}
        </Fragment>
      ))}
    </>
  );
}

export default function GurbPrivacyPolicy({ language }: { language: "ar" | "en" }) {
  const policy = POLICY[language];
  const isArabic = language === "ar";
  const BackArrow = isArabic ? ArrowRight : ArrowLeft;
  const otherLanguage = isArabic ? "en" : "ar";

  return (
    <div className="min-h-screen bg-background" lang={language} dir={isArabic ? "rtl" : "ltr"}>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Button asChild variant="ghost" size="sm" className={`gap-2 ${isArabic ? "font-arabic" : ""}`} data-testid="button-back">
            <a href="/gurb">
              <BackArrow className="w-4 h-4" aria-hidden="true" />
              {policy.back}
            </a>
          </Button>
        </div>

        <article className={`prose prose-slate max-w-none ${isArabic ? "font-arabic" : ""}`}>
          <h1 className="text-3xl font-bold text-primary mb-2">{policy.title}</h1>
          {policy.body.split(/\n\s*\n/).map((block, index) => {
            if (/^\d+\.\s/.test(block)) {
              return <h2 key={index} className="text-xl font-semibold text-primary mt-8 mb-4">{block}</h2>;
            }
            if (/^\d+\.\d+\s/.test(block)) {
              return <h3 key={index} className="text-lg font-medium mt-6 mb-2">{block}</h3>;
            }
            if (block.startsWith("• ")) {
              return (
                <ul key={index} className={`list-disc space-y-1 mt-2 ${isArabic ? "pr-6" : "pl-6"}`}>
                  {block.split("\n").map((item, itemIndex) => (
                    <li key={itemIndex}><PolicyText text={item.replace(/^•\s*/, "")} /></li>
                  ))}
                </ul>
              );
            }
            return <p key={index}><PolicyText text={block} /></p>;
          })}
        </article>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <Button asChild variant="outline" className={!isArabic ? "font-arabic" : ""}>
            <Link href={`/gurb/privacy-${otherLanguage}`} lang={otherLanguage}>
              {policy.switchLanguage}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
