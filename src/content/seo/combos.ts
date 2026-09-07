import type { LocalizedCopy } from "./types";
import type { CitySlug, CountrySlug } from "./locations";
import type { SpecialtySlug } from "./specialties";

export type ComboKey = `${CountrySlug}/${CitySlug}/${string}`;

export type Combo = {
  country: CountrySlug;
  city: CitySlug;
  specialty: SpecialtySlug | "hospital-management-system" | "clinic-management-software" | "patient-management-system";
  pathSegment: string;
  copy: LocalizedCopy;
};

export const combos: Combo[] = [
  {
    country: "uae",
    city: "dubai",
    specialty: "maternity",
    pathSegment: "maternity",
    copy: {
      en: {
        name: "Maternity in Dubai",
        title: "Maternity Clinic Software in Dubai",
        description:
          "Maternity clinic management software in Dubai for ANC visits, delivery booking, and trimester records. One Clinic for obstetrics practices and hospital maternity OPDs in Dubai.",
        h1: "Maternity clinic software in Dubai",
        intro:
          "Dubai obstetrics practices run bilingual teams, premium private rooms, and WhatsApp-heavy follow-up. This page is for maternity system management in Dubai — not a generic clinic template with the city name swapped.",
        sections: [
          {
            heading: "ANC calendars that survive a busy Dubai week",
            body: "Between scans, glucose tests, and weekly term checks, the plan is a series. Visit types and reminders keep Dubai maternity reception and the obstetrician on the same schedule, including patients who split time between emirates.",
          },
          {
            heading: "Delivery booking, not a last-minute call",
            body: "Private maternity in Dubai expects a held slot and a clear bill. Link the pregnancy record to the delivery booking and the first postnatal visit so the file does not reset at admission.",
          },
          {
            heading: "Already built for a live maternity clinic",
            body: "We shipped Maternita’s full maternity platform — records, appointments, billing, WhatsApp, Zoom. Dubai clinics get those obstetrics patterns on One Clinic, with multi-branch options if you also sit in Sharjah or Ajman.",
          },
        ],
        benefits: [
          { title: "Trimester timeline", text: "Notes, labs, and scans on one pregnancy file." },
          { title: "WhatsApp recalls", text: "Confirm the next ANC slot the way Dubai patients already chat." },
          { title: "Group-ready", text: "Share the maternity record with another UAE site." },
        ],
        faqs: [
          {
            question: "Do you run a maternity hospital in Dubai?",
            answer: "No. We provide maternity clinic software to Dubai providers.",
          },
          {
            question: "Can a hospital maternity OPD in Dubai use this?",
            answer: "Yes. Use maternity visit types on the hospital management setup.",
          },
          {
            question: "Is the product only in English?",
            answer: "Demos and this site are available in Arabic and English for Dubai teams.",
          },
        ],
        cta: "Request a Dubai maternity demo",
      },
      ar: {
        name: "الولادة في دبي",
        title: "برنامج عيادات الولادة في دبي",
        description:
          "برنامج إدارة عيادات الحمل في دبي لزيارات ما قبل الولادة وحجز الولادة وسجلات الثلث. وان كلينك لممارسات التوليد وعيادات المستشفى في دبي.",
        h1: "برنامج عيادات الولادة في دبي",
        intro:
          "تمارس عيادات التوليد في دبي فرقاً ثنائية اللغة وغرفاً خاصة ومتابعة كثيفة عبر واتساب. هذه الصفحة لإدارة نظام الولادة في دبي لا لقالب عيادة عام باسم المدينة.",
        sections: [
          {
            heading: "تقويمات الحمل في أسبوع دبي المزدحم",
            body: "بين الأشعة وفحص السكر والمراجعات الأسبوعية الخطة سلسلة. أنواع الزيارات والتذكيرات تبقي استقبال الولادة والطبيبة على نفس الجدول.",
          },
          {
            heading: "حجز ولادة لا اتصال في اللحظة الأخيرة",
            body: "تتوقع الولادة الخاصة في دبي موعداً محجوزاً وفاتورة واضحة. اربط سجل الحمل بحجز الولادة وأول زيارة بعد الولادة.",
          },
          {
            heading: "مبني لعيادة ولادة حقيقية",
            body: "نفّذنا منصة ماتيرنيتا الكاملة. تحصل عيادات دبي على أنماط التوليد نفسها مع خيار تعدد الفروع في الشارقة أو عجمان.",
          },
        ],
        benefits: [
          { title: "خط زمني للثلث", text: "ملاحظات وتحاليل وأشعة على ملف حمل واحد." },
          { title: "استدعاء واتساب", text: "أكّد زيارة المتابعة كما يتحدث مرضى دبي." },
          { title: "جاهز للمجموعة", text: "شارك سجل الولادة مع موقع إماراتي آخر." },
        ],
        faqs: [
          {
            question: "هل تشغّلون مستشفى ولادة في دبي؟",
            answer: "لا. نقدّم برنامج عيادات ولادة لمقدمي الخدمة في دبي.",
          },
          {
            question: "هل تناسب عيادة الولادة في مستشفى دبي؟",
            answer: "نعم. استخدم أنواع زيارات الولادة على إعداد إدارة المستشفى.",
          },
          {
            question: "هل المنتج بالإنجليزية فقط؟",
            answer: "العروض وهذا الموقع بالعربية والإنجليزية لفرق دبي.",
          },
        ],
        cta: "اطلب عرض ولادة في دبي",
      },
    },
  },
  {
    country: "saudi-arabia",
    city: "riyadh",
    specialty: "hospital-management-system",
    pathSegment: "hospital-management-system",
    copy: {
      en: {
        name: "Hospital system in Riyadh",
        title: "Hospital Management System in Riyadh",
        description:
          "Hospital management software in Riyadh for departments, multi-location groups, and shared billing. One Clinic for private hospitals and large clinics in Riyadh.",
        h1: "Hospital management system in Riyadh",
        intro:
          "Riyadh hospital groups need one operational picture: OPD lists by department, a single patient identity, and finance that can see collections without five exports. This is hospital management in Riyadh, not a clinic brochure.",
        sections: [
          {
            heading: "Departments that do not fragment the patient",
            body: "Cardiology in the morning and maternity in the afternoon should still be one person in the database. Riyadh groups lose hours to duplicate MRNs. One Clinic keeps registration, notes, and invoices on one identity.",
          },
          {
            heading: "Leadership reporting",
            body: "Medical directors in Riyadh ask for booked versus completed, specialty mix, and outstanding invoices. Dashboards are built for those questions.",
          },
          {
            heading: "Expand to Jeddah or Dammam later",
            body: "Treat the next city as a location on the same hospital management system. Do not buy a second stack when the group grows west or east.",
          },
        ],
        benefits: [
          { title: "Department calendars", text: "Separate OPD lists, one patient file." },
          { title: "Role-based access", text: "Reception, finance, and directors see different surfaces." },
          { title: "Network path", text: "Add Jeddah or Dammam without a new vendor." },
        ],
        faqs: [
          {
            question: "Do you operate a hospital in Riyadh?",
            answer: "No. OnePath Solutions sells hospital management software to Riyadh providers.",
          },
          {
            question: "Can we start with one OPD?",
            answer: "Yes. Many Riyadh groups start with a flagship department and expand.",
          },
          {
            question: "Is Arabic implementation available?",
            answer: "Yes. Demos and this site are available in Arabic.",
          },
        ],
        cta: "Book a Riyadh hospital demo",
      },
      ar: {
        name: "نظام المستشفى في الرياض",
        title: "نظام إدارة المستشفيات في الرياض",
        description:
          "برنامج إدارة مستشفيات في الرياض للأقسام والمجموعات متعددة الفروع والفوترة المشتركة. وان كلينك للمستشفيات الخاصة والعيادات الكبيرة.",
        h1: "نظام إدارة المستشفيات في الرياض",
        intro:
          "تحتاج مجموعات مستشفيات الرياض صورة تشغيلية واحدة: قوائم عيادات حسب القسم وهوية مريض واحدة ومالية ترى التحصيل دون خمسة تصديرات. هذه إدارة مستشفى في الرياض لا كتيب عيادة.",
        sections: [
          {
            heading: "أقسام لا تفتت المريض",
            body: "القلب صباحاً والنساء مساءً يجب أن يبقيا شخصاً واحداً في القاعدة. تخسر مجموعات الرياض ساعات بسبب أرقام مكررة. يحافظ وان كلينك على التسجيل والملاحظات والفواتير بهوية واحدة.",
          },
          {
            heading: "تقارير القيادة",
            body: "يسأل المديرون الطبيون عن المحجوز مقابل المكتمل ومزيج التخصصات والفواتير المعلقة. اللوحات مبنية لهذه الأسئلة.",
          },
          {
            heading: "توسّع إلى جدة أو الدمام لاحقاً",
            body: "عامل المدينة التالية كموقع على نفس نظام المستشفى. لا تشترِ نواة ثانية عندما تنمو المجموعة غرباً أو شرقاً.",
          },
        ],
        benefits: [
          { title: "تقويمات الأقسام", text: "قوائم عيادات منفصلة وملف مريض واحد." },
          { title: "صلاحيات حسب الدور", text: "الاستقبال والمالية والمديرون يرون أسطحاً مختلفة." },
          { title: "مسار الشبكة", text: "أضف جدة أو الدمام دون مورد جديد." },
        ],
        faqs: [
          {
            question: "هل تشغّلون مستشفى في الرياض؟",
            answer: "لا. وان باث سوليوشنز تبيع برنامج إدارة مستشفيات لمقدمي الخدمة في الرياض.",
          },
          {
            question: "هل نبدأ بعيادة خارجية واحدة؟",
            answer: "نعم. كثير من مجموعات الرياض تبدأ بقسم رئيسي ثم تتوسع.",
          },
          {
            question: "هل التنفيذ بالعربية متاح؟",
            answer: "نعم. العروض وهذا الموقع بالعربية.",
          },
        ],
        cta: "احجز عرض مستشفى في الرياض",
      },
    },
  },
  {
    country: "india",
    city: "hyderabad",
    specialty: "clinic-management-software",
    pathSegment: "clinic-management-software",
    copy: {
      en: {
        name: "Clinic software in Hyderabad",
        title: "Clinic Management Software in Hyderabad",
        description:
          "Clinic software and clinic solutions in Hyderabad for maternity centres, polyclinics, and growing medical groups. One Clinic for Hyderabad scheduling, records, and billing.",
        h1: "Clinic management software in Hyderabad",
        intro:
          "Hyderabad clinic owners want software that survives a 80-patient evening without an IT desk. This flagship page is the clinic solution story for the city: booking, patient files, billing, and maternity-grade workflows.",
        sections: [
          {
            heading: "Built next to a real Hyderabad-style maternity stack",
            body: "Maternita’s clinic management platform — admin, appointments, billing, WhatsApp, Zoom — is the reference implementation. Hyderabad maternity homes and polyclinics can run the same operational spine.",
          },
          {
            heading: "Polyclinic reception, one search",
            body: "When GP, dental, and pediatric lists share a door, the clinic solution must share a patient identity. That is how Hyderabad centres avoid three registers.",
          },
          {
            heading: "Price and pace that match private practice",
            body: "Starter and Professional plans are meant for clinics that are growing, not for a two-year hospital programme. See pricing on the main site after the demo.",
          },
        ],
        benefits: [
          { title: "City-fit clinic software", text: "High-volume OPD, English ops, WhatsApp recalls." },
          { title: "Maternity included", text: "ANC and delivery-style visit types available." },
          { title: "Grow the centre", text: "Add doctors and rooms on the same product." },
        ],
        faqs: [
          {
            question: "Is this different from the Hyderabad city page?",
            answer: "The city page covers the market. This page targets the clinic software / clinic solutions query with deeper product copy.",
          },
          {
            question: "Can hospital OPD in Hyderabad use it?",
            answer: "Yes. Treat OPD as departments on the same clinic-hospital stack.",
          },
          {
            question: "Do you operate clinics in Hyderabad?",
            answer: "No. We provide clinic management software to Hyderabad providers.",
          },
        ],
        cta: "Request a Hyderabad software demo",
      },
      ar: {
        name: "برنامج العيادة في حيدر آباد",
        title: "برنامج إدارة العيادات في حيدر آباد",
        description:
          "برنامج عيادات وحلول عيادات في حيدر آباد لمراكز الولادة والمجمعات والمجموعات الطبية. وان كلينك للجدولة والسجلات والفوترة.",
        h1: "برنامج إدارة العيادات في حيدر آباد",
        intro:
          "يريد أصحاب العيادات في حيدر آباد برنامجاً يصمد أمام مساءٍ يضم عشرات المرضى بلا مكتب تقنية. هذه الصفحة قصة حل العيادة للمدينة: حجز وملفات وفوترة وسير عمل بمستوى الولادة.",
        sections: [
          {
            heading: "مبني بجانب منصة ولادة حقيقية",
            body: "منصة ماتيرنيتا — إدارة ومواعيد وفوترة وواتساب وزوم — هي المرجع. يمكن لمنازل الولادة والمجمعات تشغيل نفس العمود الفقري.",
          },
          {
            heading: "استقبال المجمع وبحث واحد",
            body: "عندما تتشارك قوائم العام والأسنان والأطفال باباً واحداً يجب أن يتشارك حل العيادة هوية المريض.",
          },
          {
            heading: "سعر وإيقاع يناسبان الممارسة الخاصة",
            body: "خطط ستارتر وبروفيشنال للعيادات النامية لا لبرنامج مستشفى لعامين. راجع الأسعار في الموقع بعد العرض.",
          },
        ],
        benefits: [
          { title: "برنامج يناسب المدينة", text: "عيادة عالية الحجم وتشغيل إنجليزي واستدعاء واتساب." },
          { title: "الولادة مشمولة", text: "أنواع زيارات المتابعة والولادة متاحة." },
          { title: "نمِّ المركز", text: "أضف أطباء وغرفاً على نفس المنتج." },
        ],
        faqs: [
          {
            question: "هل تختلف عن صفحة مدينة حيدر آباد؟",
            answer: "صفحة المدينة تغطي السوق. هذه الصفحة تستهدف استعلام برنامج العيادة بنسخة منتج أعمق.",
          },
          {
            question: "هل تناسب عيادة المستشفى في حيدر آباد؟",
            answer: "نعم. عامل العيادة الخارجية كأقسام على نفس النواة.",
          },
          {
            question: "هل تشغّلون عيادات في حيدر آباد؟",
            answer: "لا. نقدّم برنامج إدارة عيادات لمقدمي الخدمة هناك.",
          },
        ],
        cta: "اطلب عرض برنامج في حيدر آباد",
      },
    },
  },
  {
    country: "saudi-arabia",
    city: "jeddah",
    specialty: "patient-management-system",
    pathSegment: "patient-management-system",
    copy: {
      en: {
        name: "Patient system in Jeddah",
        title: "Patient Management System in Jeddah",
        description:
          "Patient management software in Jeddah for registration, digital records, visit history, and follow-up. One Clinic for private clinics and hospital OPDs in Jeddah.",
        h1: "Patient management system in Jeddah",
        intro:
          "Jeddah patients return after travel, umrah seasons, and consultant hops. If reception opens a second file, billing and clinical history both break. This page is the patient management solution for Jeddah — not a generic records blurb.",
        sections: [
          {
            heading: "Stop duplicate files at the door",
            body: "Search-before-create, phone match, and a visible timeline are the difference between a register and a patient management system. Jeddah front desks need that on a busy night, not only in a training video.",
          },
          {
            heading: "History the next consultant can trust",
            body: "Notes, prescriptions, and attachments stay on one person. When a patient sees another specialist in the same group — or comes back from Riyadh HQ — the story is still there.",
          },
          {
            heading: "Follow-up on the file",
            body: "Lab returns and review dates should not live only in WhatsApp. Recalls hang on the patient so Jeddah teams can pull a due list in the morning.",
          },
        ],
        benefits: [
          { title: "One identity", text: "Fewer duplicate MRNs in a busy private clinic." },
          { title: "Complete timeline", text: "Visits, files, and invoices together." },
          { title: "Due lists", text: "See who should have been recalled this week." },
        ],
        faqs: [
          {
            question: "Is this only for large Jeddah hospitals?",
            answer: "No. Solo clinics and hospital OPDs use the same patient layer.",
          },
          {
            question: "Can we import our current patients?",
            answer: "Yes, during onboarding.",
          },
          {
            question: "Do you operate a clinic in Jeddah?",
            answer: "No. We provide the patient management system those clinics run.",
          },
        ],
        cta: "See Jeddah patient management",
      },
      ar: {
        name: "نظام المرضى في جدة",
        title: "نظام إدارة المرضى في جدة",
        description:
          "برنامج إدارة مرضى في جدة للتسجيل والسجلات وتاريخ الزيارات والمتابعة. وان كلينك للعيادات الخاصة وعيادات المستشفى في جدة.",
        h1: "نظام إدارة المرضى في جدة",
        intro:
          "يعود مرضى جدة بعد السفر ومواسم العمرة والانتقال بين الاستشاريين. إذا فتح الاستقبال ملفاً ثانياً تنكسر الفوترة والتاريخ السريري. هذه الصفحة حل إدارة المرضى في جدة.",
        sections: [
          {
            heading: "أوقف الملفات المكررة عند الباب",
            body: "البحث قبل الإنشاء ومطابقة الهاتف وخط زمني ظاهر هو الفرق بين دفتر ونظام إدارة مرضى. يحتاج استقبال جدة ذلك في ليلة مزدحمة.",
          },
          {
            heading: "تاريخ يثق به الاستشاري التالي",
            body: "تبقى الملاحظات والوصفات والمرفقات على شخص واحد. عندما يرى المريض متخصصاً آخر في المجموعة — أو يعود من الرياض — تبقى القصة.",
          },
          {
            heading: "المتابعة على الملف",
            body: "نتائج التحاليل ومواعيد المراجعة يجب ألا تعيش في واتساب فقط. الاستدعاء معلّق على المريض حتى تسحب فرق جدة قائمة الاستحقاق صباحاً.",
          },
        ],
        benefits: [
          { title: "هوية واحدة", text: "أرقام مكررة أقل في عيادة خاصة مزدحمة." },
          { title: "خط زمني مكتمل", text: "زيارات وملفات وفواتير معاً." },
          { title: "قوائم استحقاق", text: "اعرف من كان يجب استدعاؤه هذا الأسبوع." },
        ],
        faqs: [
          {
            question: "هل هذا لمستشفيات جدة الكبيرة فقط؟",
            answer: "لا. تستخدم العيادة الفردية وعيادات المستشفى نفس طبقة المرضى.",
          },
          {
            question: "هل يمكن استيراد المرضى الحاليين؟",
            answer: "نعم، أثناء التشغيل.",
          },
          {
            question: "هل تشغّلون عيادة في جدة؟",
            answer: "لا. نقدّم نظام إدارة المرضى الذي تشغّله تلك العيادات.",
          },
        ],
        cta: "شاهد إدارة المرضى في جدة",
      },
    },
  },
];

export function findCombo(country: string, city: string, segment: string) {
  return combos.find(
    (combo) => combo.country === country && combo.city === city && combo.pathSegment === segment
  );
}
