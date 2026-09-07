import type { LocalizedCopy } from "./types";

export type CountrySlug = "uae" | "saudi-arabia" | "india";
export type CitySlug = "dubai" | "sharjah" | "ajman" | "riyadh" | "jeddah" | "dammam" | "hyderabad";

export const countries: Record<
  CountrySlug,
  LocalizedCopy & { cities: CitySlug[] }
> = {
  uae: {
    cities: ["dubai", "sharjah", "ajman"],
    en: {
      name: "United Arab Emirates",
      title: "Clinic Management Software in the UAE",
      description:
        "Clinic software and hospital management solutions for Dubai, Sharjah, and Ajman. One Clinic supports bilingual practices, WhatsApp follow-up, and multi-branch groups across the UAE.",
      h1: "Clinic and hospital software for the UAE",
      intro:
        "UAE clinics move fast, speak more than one language, and live on WhatsApp. One Clinic is clinic management software built for that reality in Dubai, Sharjah, and Ajman — from single suites to multi-location groups.",
      sections: [
        {
          heading: "Bilingual front desks, one patient file",
          body: "Reception in the Emirates often switches between English and Arabic in the same hour. The operational system should not force a second register. One identity, one invoice trail, reminders the patient will actually open.",
        },
        {
          heading: "WhatsApp is part of care ops",
          body: "Confirmations, recalls, and “are you coming?” messages already happen on WhatsApp. Clinic software that ignores that channel creates shadow work. One Clinic treats outreach as part of the visit, not a side chat.",
        },
        {
          heading: "From one clinic to a small group",
          body: "Dubai flagship plus a Sharjah or Ajman branch is a common growth path. Multi-location scheduling and shared records stop each site inventing its own spreadsheet.",
        },
      ],
      benefits: [
        { title: "City coverage", text: "Dedicated pages and onboarding for Dubai, Sharjah, and Ajman." },
        { title: "Group-ready", text: "Add rooms, doctors, and branches without changing product." },
        { title: "Arabic or English demos", text: "Walk through the product in the language your team prefers." },
      ],
      faqs: [
        {
          question: "Do you have an office in every emirate?",
          answer:
            "We are a software vendor serving UAE clinics, not a clinic chain. Implementation and support are remote and on-site by arrangement — we do not claim a hospital in each city.",
        },
        {
          question: "Which UAE specialties do you support?",
          answer: "Maternity, neurology, cardiology, pediatrics, dentistry, dermatology, orthopedics, and general / multi-specialty centres.",
        },
        {
          question: "Is the Arabic website the product UI?",
          answer: "This site has a full Arabic marketing experience. The operations product is demonstrated in onboarding for your staff mix.",
        },
      ],
      cta: "Request a UAE clinic demo",
    },
    ar: {
      name: "الإمارات العربية المتحدة",
      title: "برنامج إدارة العيادات في الإمارات",
      description:
        "برامج عيادات وأنظمة مستشفيات لدبي والشارقة وعجمان. يدعم وان كلينك العيادات ثنائية اللغة ومتابعة واتساب والمجموعات متعددة الفروع.",
      h1: "برامج العيادات والمستشفيات في الإمارات",
      intro:
        "عيادات الإمارات سريعة ومتعددة اللغة وتعيش على واتساب. وان كلينك برنامج إدارة عيادات لهذا الواقع في دبي والشارقة وعجمان من العيادة الواحدة إلى المجموعات.",
      sections: [
        {
          heading: "استقبال ثنائي اللغة وملف واحد",
          body: "الاستقبال في الإمارات ينتقل بين الإنجليزية والعربية في الساعة نفسها. يجب ألا يفرض النظام سجلاً ثانياً. هوية واحدة ومسار فاتورة واحد وتذكيرات يفتحها المريض.",
        },
        {
          heading: "واتساب جزء من التشغيل",
          body: "التأكيدات والاستدعاء و«هل ستأتي؟» تحدث على واتساب. برنامج يتجاهل ذلك يصنع عملاً موازياً. يعامل وان كلينك التواصل كجزء من الزيارة.",
        },
        {
          heading: "من عيادة إلى مجموعة صغيرة",
          body: "فرع دبي مع الشارقة أو عجمان مسار نمو شائع. الجدولة متعددة المواقع والسجلات المشتركة تمنع كل فرع من اختراع جدوله.",
        },
      ],
      benefits: [
        { title: "تغطية المدن", text: "صفحات وتشغيل لدبي والشارقة وعجمان." },
        { title: "جاهز للمجموعات", text: "أضف غرفاً وأطباء وفروعاً دون تغيير المنتج." },
        { title: "عروض عربية أو إنجليزية", text: "شاهد المنتج بلغة فريقك." },
      ],
      faqs: [
        {
          question: "هل لديكم مكتب في كل إمارة؟",
          answer: "نحن مورد برمجيات نخدم عيادات الإمارات ولسنا سلسلة عيادات. التنفيذ والدعم عن بُعد أو في الموقع حسب الاتفاق.",
        },
        {
          question: "ما التخصصات المدعومة؟",
          answer: "النساء والولادة والأعصاب والقلب والأطفال والأسنان والجلدية والعظام والمراكز العامة ومتعددة التخصصات.",
        },
        {
          question: "هل الموقع العربي هو واجهة البرنامج؟",
          answer: "لهذا الموقع تجربة تسويق عربية كاملة. تُعرض عمليات المنتج أثناء التشغيل حسب مزيج فريقكم.",
        },
      ],
      cta: "اطلب عرض عيادة في الإمارات",
    },
  },
  "saudi-arabia": {
    cities: ["riyadh", "jeddah", "dammam"],
    en: {
      name: "Saudi Arabia",
      title: "Clinic & Hospital Management Software in Saudi Arabia",
      description:
        "Hospital management and clinic software for Riyadh, Jeddah, and Dammam. One Clinic helps private hospitals and clinics in Saudi Arabia run scheduling, records, and billing in one system.",
      h1: "Clinic and hospital software for Saudi Arabia",
      intro:
        "Saudi private healthcare is expanding in Riyadh, along the Jeddah corridor, and in the Eastern Province. One Clinic is a hospital and clinic management system for groups that need departments, roles, and WhatsApp-speed follow-up without a multi-year ERP.",
      sections: [
        {
          heading: "Hospital groups and specialist clinics",
          body: "Riyadh medical groups need department calendars and finance visibility. Jeddah and Dammam private clinics need the same patient file with less ceremony. One product covers both ends.",
        },
        {
          heading: "Arabic-first operations",
          body: "Staff and patients expect Arabic communication. This site and our demos can run in Arabic. Outreach stays on the channels your reception already uses.",
        },
        {
          heading: "From one site to a network",
          body: "Add a second location without splitting records. That matters when a Riyadh flagship opens a Jeddah consulting suite or a Dammam satellite.",
        },
      ],
      benefits: [
        { title: "Riyadh, Jeddah, Dammam", text: "Local landing pages and onboarding for each city." },
        { title: "Hospital-ready roles", text: "Reception, finance, and medical directors see what they need." },
        { title: "Arabic experience", text: "Marketing, FAQs, and demos available in Arabic." },
      ],
      faqs: [
        {
          question: "Are you a hospital operator in Saudi Arabia?",
          answer: "No. OnePath Solutions provides clinic and hospital management software to providers. We do not operate hospitals.",
        },
        {
          question: "Can a large Riyadh group start with one department?",
          answer: "Yes. Many groups start with OPD or a specialty such as maternity, then expand.",
        },
        {
          question: "Do you support Eastern Province clinics?",
          answer: "Yes. Dammam and the Eastern Province are part of the Saudi rollout, alongside Riyadh and Jeddah.",
        },
      ],
      cta: "Request a Saudi clinic demo",
    },
    ar: {
      name: "المملكة العربية السعودية",
      title: "برنامج إدارة العيادات والمستشفيات في السعودية",
      description:
        "أنظمة مستشفيات وبرامج عيادات للرياض وجدة والدمام. يساعد وان كلينك المستشفيات والعيادات الخاصة على تشغيل المواعيد والسجلات والفوترة في نظام واحد.",
      h1: "برامج العيادات والمستشفيات في السعودية",
      intro:
        "الرعاية الخاصة في السعودية تتوسع في الرياض وجدة والمنطقة الشرقية. وان كلينك نظام إدارة للمستشفيات والعيادات التي تحتاج أقساماً وصلاحيات ومتابعة سريعة دون مشروع سنوات.",
      sections: [
        {
          heading: "مجموعات مستشفيات وعيادات تخصصية",
          body: "تحتاج مجموعات الرياض تقويمات أقسام ورؤية مالية. تحتاج عيادات جدة والدمام نفس ملف المريض ببيروقراطية أقل. منتج واحد يغطي الطرفين.",
        },
        {
          heading: "تشغيل عربي أولاً",
          body: "يتوقع الفريق والمرضى تواصلاً عربياً. يمكن تشغيل هذا الموقع والعروض بالعربية. يبقى التواصل على القنوات التي يستخدمها الاستقبال.",
        },
        {
          heading: "من موقع إلى شبكة",
          body: "أضف فرعاً ثانياً دون تقسيم السجلات. هذا مهم عندما يفتح موقع الرياض جناحاً في جدة أو فرعاً في الدمام.",
        },
      ],
      benefits: [
        { title: "الرياض وجدة والدمام", text: "صفحات وتشغيل لكل مدينة." },
        { title: "صلاحيات تناسب المستشفى", text: "الاستقبال والمالية والمدير الطبي يرون ما يحتاجون." },
        { title: "تجربة عربية", text: "التسويق والأسئلة والعروض بالعربية." },
      ],
      faqs: [
        {
          question: "هل تشغّلون مستشفيات في السعودية؟",
          answer: "لا. وان باث سوليوشنز تقدم برمجيات إدارة للعيادات والمستشفيات ولا تشغّل مستشفيات.",
        },
        {
          question: "هل تبدأ المجموعة بقسم واحد؟",
          answer: "نعم. كثير من المجموعات تبدأ بالعيادات الخارجية أو بتخصص مثل النساء ثم تتوسع.",
        },
        {
          question: "هل تدعمون المنطقة الشرقية؟",
          answer: "نعم. الدمام والمنطقة الشرقية جزء من الطرح مع الرياض وجدة.",
        },
      ],
      cta: "اطلب عرض عيادة في السعودية",
    },
  },
  india: {
    cities: ["hyderabad"],
    en: {
      name: "India",
      title: "Clinic Management Software in Hyderabad, India",
      description:
        "Clinic software, patient management, and hospital OPD systems for Hyderabad. One Clinic helps maternity clinics, polyclinics, and growing medical groups in India run one operational stack.",
      h1: "Clinic software for Hyderabad and India operations",
      intro:
        "Hyderabad’s private clinics and maternity centres need English-language operations, high daily volume, and software that does not require an IT department. One Clinic is a clinic and patient management system for that market.",
      sections: [
        {
          heading: "High-volume private practice",
          body: "Evening OPDs in Hyderabad stack walk-ins on top of booked slots. A live calendar, fast registration, and a complete patient file keep the queue and the chart honest.",
        },
        {
          heading: "Maternity and multi-specialty strength",
          body: "We already shipped a full maternity clinic platform (Maternita). The same core serves general, pediatric, dental, and hospital OPD workflows across the city.",
        },
        {
          heading: "A system you can extend",
          body: "Start with one clinic, then add doctors or a second site. Hyderabad groups should not outgrow the product in a year.",
        },
      ],
      benefits: [
        { title: "Hyderabad focus", text: "A dedicated city page and onboarding path." },
        { title: "Maternity-ready", text: "ANC and delivery-style workflows already proven." },
        { title: "English operations", text: "Admin and clinical staff can run the system in English from day one." },
      ],
      faqs: [
        {
          question: "Do you only serve Hyderabad in India?",
          answer: "Hyderabad is the India city we document first. Other Indian cities can be discussed in a demo.",
        },
        {
          question: "Is this an EHR for large government hospitals?",
          answer: "No. It is clinic and private hospital / OPD management software, not a national EHR replacement.",
        },
        {
          question: "Can we migrate our current register?",
          answer: "Yes. Patient lists can be imported during onboarding.",
        },
      ],
      cta: "Request a Hyderabad clinic demo",
    },
    ar: {
      name: "الهند",
      title: "برنامج إدارة العيادات في حيدر آباد، الهند",
      description:
        "برامج عيادات وأنظمة إدارة مرضى وعيادات مستشفى في حيدر آباد. يساعد وان كلينك عيادات الولادة والمجمعات والمجموعات الطبية في الهند.",
      h1: "برنامج عيادات لتشغيل حيدر آباد والهند",
      intro:
        "تحتاج عيادات حيدر آباد الخاصة ومراكز الولادة تشغيلاً بالإنجليزية وحجماً يومياً عالياً وبرمجيات بلا قسم تقنية. وان كلينك نظام إدارة عيادات ومرضى لهذا السوق.",
      sections: [
        {
          heading: "ممارسة خاصة عالية الحجم",
          body: "عيادات المساء في حيدر آباد تضيف الزيارات الفورية فوق الحجوزات. تقويم حي وتسجيل سريع وملف مكتمل يبقيان الطابور والسجل صادقين.",
        },
        {
          heading: "قوة في الولادة والتخصصات المتعددة",
          body: "نفّذنا منصة عيادة ولادة كاملة (ماتيرنيتا). نفس النواة تخدم العيادة العامة والأطفال والأسنان وعيادات المستشفى.",
        },
        {
          heading: "نظام يمكن توسيعه",
          body: "ابدأ بعيادة ثم أضف أطباء أو موقعاً ثانياً. يجب ألا تتجاوز المجموعة المنتج في عام.",
        },
      ],
      benefits: [
        { title: "تركيز حيدر آباد", text: "صفحة مدينة ومسار تشغيل مخصص." },
        { title: "جاهز للولادة", text: "سير عمل المتابعة والولادة مجرّب." },
        { title: "تشغيل إنجليزي", text: "يمكن للإدارة والأطباء تشغيل النظام بالإنجليزية من اليوم الأول." },
      ],
      faqs: [
        {
          question: "هل تخدمون حيدر آباد فقط في الهند؟",
          answer: "حيدر آباد هي المدينة التي نوثّقها أولاً. يمكن مناقشة مدن هندية أخرى في العرض.",
        },
        {
          question: "هل هذا سجل صحي وطني؟",
          answer: "لا. هو برنامج إدارة عيادات ومستشفيات خاصة / عيادات خارجية.",
        },
        {
          question: "هل يمكن ترحيل السجل الحالي؟",
          answer: "نعم. يمكن استيراد قوائم المرضى أثناء التشغيل.",
        },
      ],
      cta: "اطلب عرض عيادة في حيدر آباد",
    },
  },
};

export const cities: Record<CitySlug, LocalizedCopy & { country: CountrySlug }> = {
  dubai: {
    country: "uae",
    en: {
      name: "Dubai",
      title: "Clinic Management Software in Dubai",
      description:
        "Clinic software in Dubai for multi-national teams, WhatsApp follow-up, and multi-branch groups. One Clinic is a clinic and patient management solution for Dubai practices.",
      h1: "Clinic management software in Dubai",
      intro:
        "Dubai clinics serve residents and visitors, often with mixed English–Arabic teams and more than one site. One Clinic gives Dubai practices a single system for booking, records, billing, and reminders.",
      sections: [
        {
          heading: "A city of multi-branch groups",
          body: "It is common to run a Jumeirah or Downtown suite and a second room in another community. Shared patient identity across Dubai sites stops duplicate files when a patient switches branch.",
        },
        {
          heading: "WhatsApp-first follow-up",
          body: "Dubai patients expect a confirmation on their phone. Build recalls and day-before reminders into the clinic solution instead of a receptionist’s personal chat.",
        },
        {
          heading: "Specialties the city actually runs",
          body: "Maternity, dermatology, dentistry, and multi-specialty centres are dense in Dubai. Pair this page with our maternity Dubai flagship or other specialty hubs.",
        },
      ],
      benefits: [
        { title: "Multi-site Dubai", text: "One record if the patient visits another branch." },
        { title: "Bilingual ops", text: "Front desk can work in the language of the hour." },
        { title: "Specialty ready", text: "Maternity, skin, dental, and GP workflows on one stack." },
      ],
      faqs: [
        {
          question: "Do you operate a clinic in Dubai?",
          answer: "No. We supply clinic management software to Dubai providers.",
        },
        {
          question: "Can a Sharjah branch share Dubai records?",
          answer: "Yes. UAE multi-emirate groups can share the patient file across locations.",
        },
        {
          question: "Is there a maternity-specific Dubai page?",
          answer: "Yes. See maternity clinic software in Dubai for obstetrics-focused copy.",
        },
      ],
      cta: "Book a Dubai clinic demo",
    },
    ar: {
      name: "دبي",
      title: "برنامج إدارة العيادات في دبي",
      description:
        "برنامج عيادات في دبي للفرق متعددة الجنسيات ومتابعة واتساب والمجموعات متعددة الفروع. وان كلينك حل إدارة عيادات ومرضى لممارسات دبي.",
      h1: "برنامج إدارة العيادات في دبي",
      intro:
        "تخدم عيادات دبي المقيمين والزوار بفرق إنجليزية–عربية وغالباً بأكثر من موقع. يمنح وان كلينك نظاماً واحداً للحجز والسجلات والفوترة والتذكيرات.",
      sections: [
        {
          heading: "مدينة المجموعات متعددة الفروع",
          body: "من الشائع تشغيل جناح في جميرا أو وسط المدينة وغرفة ثانية في مجتمع آخر. هوية المريض المشتركة تمنع الملفات المكررة.",
        },
        {
          heading: "متابعة واتساب أولاً",
          body: "يتوقع مرضى دبي تأكيداً على الهاتف. ابنِ الاستدعاء والتذكير في حل العيادة لا في دردشة الاستقبال الشخصية.",
        },
        {
          heading: "تخصصات المدينة",
          body: "النساء والجلدية والأسنان والمراكز متعددة التخصصات كثيفة في دبي. اربط هذه الصفحة بصفحة الولادة في دبي أو مراكز التخصص.",
        },
      ],
      benefits: [
        { title: "دبي متعددة المواقع", text: "سجل واحد إذا زار المريض فرعاً آخر." },
        { title: "تشغيل ثنائي اللغة", text: "يعمل الاستقبال بلغة الساعة." },
        { title: "جاهز للتخصص", text: "سير عمل الولادة والجلد والأسنان والطبيب العام على نواة واحدة." },
      ],
      faqs: [
        {
          question: "هل تشغّلون عيادة في دبي؟",
          answer: "لا. نقدّم برنامج إدارة عيادات لمقدمي الخدمة في دبي.",
        },
        {
          question: "هل يشارك فرع الشارقة سجلات دبي؟",
          answer: "نعم. يمكن لمجموعات الإمارات مشاركة ملف المريض عبر المواقع.",
        },
        {
          question: "هل هناك صفحة ولادة خاصة بدبي؟",
          answer: "نعم. راجع برنامج عيادات الولادة في دبي.",
        },
      ],
      cta: "احجز عرض عيادة في دبي",
    },
  },
  sharjah: {
    country: "uae",
    en: {
      name: "Sharjah",
      title: "Clinic Management Software in Sharjah",
      description:
        "Clinic software in Sharjah for family practices, specialty suites, and groups that also run Dubai rooms. Patient management and WhatsApp follow-up for Sharjah clinics.",
      h1: "Clinic management software in Sharjah",
      intro:
        "Sharjah clinics are often family-heavy, bilingual, and tightly scheduled. One Clinic is clinic software for Sharjah reception teams who need a complete file and reminders without extra admin staff.",
      sections: [
        {
          heading: "Family medicine volume",
          body: "Pediatrics and GP lists fill Sharjah evenings. Fast registration and child-versus-guardian contacts keep the waiting room moving.",
        },
        {
          heading: "Tied to the Dubai–Sharjah corridor",
          body: "Doctors and patients cross emirates. A shared patient management system means a Sharjah follow-up can see the Dubai consult.",
        },
        {
          heading: "Right-sized implementation",
          body: "You do not need a hospital ERP for a two-doctor Sharjah suite. Start with scheduling, records, and billing; add locations later.",
        },
      ],
      benefits: [
        { title: "Family workflows", text: "GP and pediatric visit types on one calendar." },
        { title: "Cross-emirate records", text: "Share files with a Dubai or Ajman site." },
        { title: "Lean admin", text: "WhatsApp reminders reduce no-shows without extra hires." },
      ],
      faqs: [
        {
          question: "Is this only for large Sharjah hospitals?",
          answer: "No. It is built first for clinics and polyclinics; hospitals can add departments.",
        },
        {
          question: "Can we run Arabic-first in Sharjah?",
          answer: "Yes. Use the Arabic site and run outreach the way your families already communicate.",
        },
        {
          question: "Which specialties are common in Sharjah?",
          answer: "General practice, pediatrics, dentistry, maternity, and multi-specialty centres.",
        },
      ],
      cta: "Request a Sharjah clinic demo",
    },
    ar: {
      name: "الشارقة",
      title: "برنامج إدارة العيادات في الشارقة",
      description:
        "برنامج عيادات في الشارقة لممارسات الأسرة والعيادات التخصصية والمجموعات التي تدير أيضاً غرفاً في دبي.",
      h1: "برنامج إدارة العيادات في الشارقة",
      intro:
        "عيادات الشارقة غالباً عائلية وثنائية اللغة ومزدحمة. وان كلينك برنامج لاستقبال الشارقة الذي يحتاج ملفاً مكتملاً وتذكيرات دون طاقم إداري إضافي.",
      sections: [
        {
          heading: "حجم طب الأسرة",
          body: "تمتلئ قوائم الأطفال والطبيب العام مساءً. التسجيل السريع وفصل الطفل عن ولي الأمر يحرّكان الانتظار.",
        },
        {
          heading: "مربوط بممر دبي–الشارقة",
          body: "يعبر الأطباء والمرضى الإمارات. نظام إدارة مرضى مشترك يعني أن متابعة الشارقة ترى استشارة دبي.",
        },
        {
          heading: "تنفيذ بحجم مناسب",
          body: "لا تحتاج نظام مستشفى لعيادة طبيبين. ابدأ بالجدولة والسجلات والفوترة ثم أضف المواقع.",
        },
      ],
      benefits: [
        { title: "سير عمل عائلي", text: "أنواع زيارات الطبيب العام والأطفال على تقويم واحد." },
        { title: "سجلات عبر الإمارات", text: "شارك الملفات مع موقع في دبي أو عجمان." },
        { title: "إدارة خفيفة", text: "تذكيرات واتساب تقلل الغياب دون تعيينات إضافية." },
      ],
      faqs: [
        {
          question: "هل هذا لمستشفيات الشارقة الكبيرة فقط؟",
          answer: "لا. هو مبني أولاً للعيادات والمجمعات؛ ويمكن للمستشفيات إضافة أقسام.",
        },
        {
          question: "هل يمكن التشغيل بالعربية أولاً؟",
          answer: "نعم. استخدم الموقع العربي وتواصل كما تتواصل أسر مرضاكم.",
        },
        {
          question: "ما التخصصات الشائعة في الشارقة؟",
          answer: "العيادة العامة والأطفال والأسنان والنساء والمراكز متعددة التخصصات.",
        },
      ],
      cta: "اطلب عرض عيادة في الشارقة",
    },
  },
  ajman: {
    country: "uae",
    en: {
      name: "Ajman",
      title: "Clinic Management Software in Ajman",
      description:
        "Clinic software in Ajman for growing neighbourhood practices and satellite branches of UAE groups. Scheduling, records, and WhatsApp follow-up for Ajman clinics.",
      h1: "Clinic management software in Ajman",
      intro:
        "Ajman clinics are often compact, price-sensitive, and busy after work. One Clinic gives a full clinic solution — calendar, patient file, billing — without enterprise complexity.",
      sections: [
        {
          heading: "Neighbourhood volume",
          body: "Walk-in evenings are normal. Quick search-before-create registration keeps Ajman files clean when the same family returns every week.",
        },
        {
          heading: "Satellite of a larger UAE group",
          body: "Many Ajman rooms are the third site of a Dubai or Sharjah brand. Shared records and roles keep the satellite aligned with HQ.",
        },
        {
          heading: "Start small, stay complete",
          body: "You still need invoices and reminders on day one. The Starter-friendly clinic software path is built for that size.",
        },
      ],
      benefits: [
        { title: "Fast registration", text: "Keep the queue moving on weeknights." },
        { title: "Group satellite", text: "Inherit the patient file from Dubai or Sharjah." },
        { title: "Complete basics", text: "Booking, records, and billing from the first week." },
      ],
      faqs: [
        {
          question: "Is Ajman too small for clinic software?",
          answer: "No. Compact clinics benefit most from replacing notebooks and personal WhatsApp.",
        },
        {
          question: "Can we add a second Ajman doctor later?",
          answer: "Yes. Add providers and visit types without migrating systems.",
        },
        {
          question: "Do you support Arabic in Ajman?",
          answer: "Yes. Arabic marketing pages and Arabic-friendly onboarding are available.",
        },
      ],
      cta: "Request an Ajman clinic demo",
    },
    ar: {
      name: "عجمان",
      title: "برنامج إدارة العيادات في عجمان",
      description:
        "برنامج عيادات في عجمان للممارسات المحلية وفروع مجموعات الإمارات. جدولة وسجلات ومتابعة واتساب.",
      h1: "برنامج إدارة العيادات في عجمان",
      intro:
        "عيادات عجمان غالباً صغيرة وحساسة للسعر ومزدحمة بعد العمل. يمنح وان كلينك حل عيادة كاملاً — تقويم وملف وفوترة — دون تعقيد المؤسسات الكبرى.",
      sections: [
        {
          heading: "حجم الحي",
          body: "الزيارات المسائية بلا موعد طبيعية. البحث قبل الإنشاء يبقي ملفات عجمان نظيفة عندما تعود الأسرة كل أسبوع.",
        },
        {
          heading: "فرع لمجموعة إماراتية أكبر",
          body: "كثير من غرف عجمان هي الموقع الثالث لعلامة في دبي أو الشارقة. السجلات والصلاحيات المشتركة تبقي الفرع متوافقاً مع المركز.",
        },
        {
          heading: "ابدأ صغيراً وكن مكتملاً",
          body: "ما زلت تحتاج فواتير وتذكيرات من اليوم الأول. مسار البرنامج يناسب هذا الحجم.",
        },
      ],
      benefits: [
        { title: "تسجيل سريع", text: "حرّك الطابور في ليالي الأسبوع." },
        { title: "فرع المجموعة", text: "ورث ملف المريض من دبي أو الشارقة." },
        { title: "أساسيات مكتملة", text: "حجز وسجلات وفوترة من الأسبوع الأول." },
      ],
      faqs: [
        {
          question: "هل عجمان أصغر من أن تحتاج برنامجاً؟",
          answer: "لا. العيادات الصغيرة أكثر من يستفيد من استبدال الدفاتر وواتساب الشخصي.",
        },
        {
          question: "هل نضيف طبيباً ثانياً لاحقاً؟",
          answer: "نعم. أضف أطباء وأنواع زيارات دون ترحيل أنظمة.",
        },
        {
          question: "هل تدعمون العربية في عجمان؟",
          answer: "نعم. صفحات عربية وتشغيل يناسب العربية متاحان.",
        },
      ],
      cta: "اطلب عرض عيادة في عجمان",
    },
  },
  riyadh: {
    country: "saudi-arabia",
    en: {
      name: "Riyadh",
      title: "Hospital & Clinic Management Software in Riyadh",
      description:
        "Hospital management system and clinic software in Riyadh for medical groups, specialty OPDs, and multi-location providers. One Clinic for Riyadh operations.",
      h1: "Hospital and clinic software in Riyadh",
      intro:
        "Riyadh private healthcare runs at group scale: multiple consultants, department lists, and finance that wants one number. One Clinic is a hospital management system that still feels like clinic software on the floor.",
      sections: [
        {
          heading: "Departments, not just doctors",
          body: "A Riyadh medical group books cardiology, maternity, and GP as separate lists. Role-based access lets the medical director see all three without reception seeing payroll.",
        },
        {
          heading: "A flagship that will add cities",
          body: "Many Riyadh groups open Jeddah or Eastern Province rooms next. Start with one identity model so expansion is a location, not a new vendor.",
        },
        {
          heading: "Hospital-grade reporting",
          body: "Booked versus completed, collections, and specialty mix are the conversations Riyadh leadership already has. Dashboards should answer them.",
        },
      ],
      benefits: [
        { title: "Group operations", text: "Departments and locations on one platform." },
        { title: "Arabic demos", text: "Walk leadership and staff through the product in Arabic." },
        { title: "Hospital path", text: "See the dedicated Riyadh hospital + management flagship page." },
      ],
      faqs: [
        {
          question: "Is there a Riyadh hospital-specific page?",
          answer: "Yes. Hospital management system in Riyadh goes deeper on departments and groups.",
        },
        {
          question: "Do you run hospitals in Riyadh?",
          answer: "No. We provide the software those hospitals and clinics operate.",
        },
        {
          question: "Can we start with one specialty OPD?",
          answer: "Yes. Maternity, neurology, and others can go live first.",
        },
      ],
      cta: "Book a Riyadh demo",
    },
    ar: {
      name: "الرياض",
      title: "نظام إدارة المستشفيات والعيادات في الرياض",
      description:
        "نظام إدارة مستشفيات وبرنامج عيادات في الرياض للمجموعات الطبية وعيادات التخصصات ومقدمي الخدمة متعددي الفروع.",
      h1: "برامج المستشفيات والعيادات في الرياض",
      intro:
        "الرعاية الخاصة في الرياض تعمل بحجم المجموعة: استشاريون متعددون وقوائم أقسام ومالية تريد رقماً واحداً. وان كلينك نظام مستشفى ما زال يبدو برنامج عيادة على الأرض.",
      sections: [
        {
          heading: "أقسام لا أطباء فقط",
          body: "تحجز المجموعة في الرياض القلب والنساء والطبيب العام كقوائم منفصلة. الصلاحيات تتيح للمدير الطبي رؤية الثلاثة دون أن يرى الاستقبال الرواتب.",
        },
        {
          heading: "موقع رئيسي سيضيف مدناً",
          body: "كثير من مجموعات الرياض تفتح غرفاً في جدة أو الشرقية. ابدأ بنموذج هوية واحد حتى يكون التوسع موقعاً لا مورداً جديداً.",
        },
        {
          heading: "تقارير بمستوى مستشفى",
          body: "المحجوز مقابل المكتمل والتحصيل ومزيج التخصصات محادثات القيادة في الرياض. يجب أن تجيب اللوحات عنها.",
        },
      ],
      benefits: [
        { title: "تشغيل المجموعة", text: "أقسام ومواقع على منصة واحدة." },
        { title: "عروض عربية", text: "اعرض المنتج على القيادة والفريق بالعربية." },
        { title: "مسار المستشفى", text: "راجع صفحة نظام المستشفيات في الرياض." },
      ],
      faqs: [
        {
          question: "هل هناك صفحة مستشفى خاصة بالرياض؟",
          answer: "نعم. نظام إدارة المستشفيات في الرياض يتعمق في الأقسام والمجموعات.",
        },
        {
          question: "هل تشغّلون مستشفيات في الرياض؟",
          answer: "لا. نقدّم البرنامج الذي تشغّله تلك المستشفيات والعيادات.",
        },
        {
          question: "هل نبدأ بعيادة تخصص واحدة؟",
          answer: "نعم. يمكن أن تنطلق النساء أو الأعصاب أولاً.",
        },
      ],
      cta: "احجز عرضاً في الرياض",
    },
  },
  jeddah: {
    country: "saudi-arabia",
    en: {
      name: "Jeddah",
      title: "Clinic & Patient Management Software in Jeddah",
      description:
        "Patient management system and clinic software in Jeddah for private clinics and hospital OPDs. One Clinic for Jeddah scheduling, records, and follow-up.",
      h1: "Patient management and clinic software in Jeddah",
      intro:
        "Jeddah private clinics are relationship-driven and busy. The file has to be complete when the patient comes back from travel or from another consultant. One Clinic is a patient management system for that coastal practice pattern.",
      sections: [
        {
          heading: "Complete files, fewer repeat histories",
          body: "Patients bounce between consultants. Search-before-create and a single timeline stop Jeddah reception opening a second file for the same person.",
        },
        {
          heading: "Private clinic speed",
          body: "You may not need every hospital module on week one. Jeddah clinics usually start with appointments, records, billing, and WhatsApp recalls.",
        },
        {
          heading: "Tied to Riyadh groups",
          body: "Some Jeddah suites are the western wing of a Riyadh brand. Shared identity keeps the group honest. See also patient management in Jeddah for a deeper flagship page.",
        },
      ],
      benefits: [
        { title: "Patient-first", text: "Registration and history designed to prevent duplicates." },
        { title: "Clinic speed", text: "Go live without a year-long hospital programme." },
        { title: "Arabic ops", text: "Site and demos available in Arabic for Jeddah teams." },
      ],
      faqs: [
        {
          question: "Is there a Jeddah patient-system flagship page?",
          answer: "Yes. Patient management system in Jeddah is the deeper combo page.",
        },
        {
          question: "Do you operate clinics in Jeddah?",
          answer: "No. We provide software to Jeddah clinics and OPDs.",
        },
        {
          question: "Can hospital OPD in Jeddah use this?",
          answer: "Yes. OPD lists and shared records are a core hospital path.",
        },
      ],
      cta: "Request a Jeddah demo",
    },
    ar: {
      name: "جدة",
      title: "برنامج إدارة المرضى والعيادات في جدة",
      description:
        "نظام إدارة مرضى وبرنامج عيادات في جدة للعيادات الخاصة وعيادات المستشفى. وان كلينك للجدولة والسجلات والمتابعة.",
      h1: "إدارة المرضى وبرامج العيادات في جدة",
      intro:
        "عيادات جدة الخاصة قائمة على العلاقة ومزدحمة. يجب أن يكون الملف مكتملاً عندما يعود المريض من السفر أو من استشاري آخر. وان كلينك نظام إدارة مرضى لهذا النمط.",
      sections: [
        {
          heading: "ملفات مكتملة وتاريخ أقل تكراراً",
          body: "ينتقل المرضى بين الاستشاريين. البحث قبل الإنشاء وخط زمني واحد يمنعان فتح ملف ثانٍ لنفس الشخص.",
        },
        {
          heading: "سرعة العيادة الخاصة",
          body: "قد لا تحتاج كل وحدات المستشفى في الأسبوع الأول. تبدأ عيادات جدة عادة بالمواعيد والسجلات والفوترة واستدعاء واتساب.",
        },
        {
          heading: "مرتبط بمجموعات الرياض",
          body: "بعض أجنحة جدة هي الامتداد الغربي لعلامة في الرياض. الهوية المشتركة تبقي المجموعة صادقة.",
        },
      ],
      benefits: [
        { title: "المريض أولاً", text: "تسجيل وتاريخ مصممان لمنع التكرار." },
        { title: "سرعة العيادة", text: "انطلق دون برنامج مستشفى لعام كامل." },
        { title: "تشغيل عربي", text: "الموقع والعروض بالعربية لفرق جدة." },
      ],
      faqs: [
        {
          question: "هل هناك صفحة أعمق لنظام المرضى في جدة؟",
          answer: "نعم. نظام إدارة المرضى في جدة هي صفحة التوليفة.",
        },
        {
          question: "هل تشغّلون عيادات في جدة؟",
          answer: "لا. نقدّم البرنامج لعيادات وعيادات مستشفى في جدة.",
        },
        {
          question: "هل تناسب العيادات الخارجية للمستشفى؟",
          answer: "نعم. قوائم العيادات الخارجية والسجلات المشتركة مسار أساسي.",
        },
      ],
      cta: "اطلب عرضاً في جدة",
    },
  },
  dammam: {
    country: "saudi-arabia",
    en: {
      name: "Dammam",
      title: "Clinic Management Software in Dammam",
      description:
        "Clinic software in Dammam and the Eastern Province for private clinics and satellite hospital OPDs. Scheduling, patient records, and billing for Dammam providers.",
      h1: "Clinic management software in Dammam",
      intro:
        "Eastern Province clinics serve families and industrial-city catchments with practical, high-volume OPDs. One Clinic is clinic software for Dammam teams who need reliable files and reminders, not a showcase demo.",
      sections: [
        {
          heading: "Eastern Province networks",
          body: "A Dammam site is often linked to Khobar or a Riyadh HQ. Shared patient management keeps the network from splitting the same patient.",
        },
        {
          heading: "Practical OPD days",
          body: "General, pediatrics, and orthopedics lists are common. Visit types and a live queue matter more than unused modules.",
        },
        {
          heading: "Arabic-speaking operations",
          body: "Staff expect Arabic. Use the Arabic pages and run the demo in the language the reception team will live in.",
        },
      ],
      benefits: [
        { title: "Network-ready", text: "Connect Dammam to other Saudi locations later." },
        { title: "OPD focus", text: "Booking, records, and billing first." },
        { title: "Local language", text: "Arabic marketing and onboarding available." },
      ],
      faqs: [
        {
          question: "Do you cover only Dammam city?",
          answer: "Dammam is the named city. Nearby Eastern Province clinics are welcome on the same onboarding path.",
        },
        {
          question: "Can a Riyadh group add Dammam?",
          answer: "Yes. Add a location on the same patient identity.",
        },
        {
          question: "Which specialties fit Dammam first?",
          answer: "General practice, pediatrics, orthopedics, and hospital OPD are typical starting points.",
        },
      ],
      cta: "Request a Dammam demo",
    },
    ar: {
      name: "الدمام",
      title: "برنامج إدارة العيادات في الدمام",
      description:
        "برنامج عيادات في الدمام والمنطقة الشرقية للعيادات الخاصة وعيادات المستشفى التابعة. جدولة وسجلات وفوترة.",
      h1: "برنامج إدارة العيادات في الدمام",
      intro:
        "تخدم عيادات الشرقية الأسر وأحواض المدن الصناعية بعيادات عملية عالية الحجم. وان كلينك برنامج لفرق الدمام التي تحتاج ملفات وتذكيرات موثوقة لا عرضاً شكلياً.",
      sections: [
        {
          heading: "شبكات المنطقة الشرقية",
          body: "موقع الدمام غالباً مرتبط بالخبر أو بمركز في الرياض. إدارة المرضى المشتركة تمنع انقسام نفس المريض.",
        },
        {
          heading: "أيام عيادات عملية",
          body: "قوائم العامة والأطفال والعظام شائعة. أنواع الزيارات والطابور الحي أهم من وحدات غير مستخدمة.",
        },
        {
          heading: "تشغيل ناطق بالعربية",
          body: "يتوقع الفريق العربية. استخدم الصفحات العربية وشغّل العرض بلغة الاستقبال.",
        },
      ],
      benefits: [
        { title: "جاهز للشبكة", text: "اربط الدمام بمواقع سعودية أخرى لاحقاً." },
        { title: "تركيز العيادة الخارجية", text: "حجز وسجلات وفوترة أولاً." },
        { title: "لغة محلية", text: "تسويق وتشغيل بالعربية." },
      ],
      faqs: [
        {
          question: "هل تغطون مدينة الدمام فقط؟",
          answer: "الدمام هي المدينة المسماة. عيادات الشرقية القريبة مرحب بها على نفس مسار التشغيل.",
        },
        {
          question: "هل تضيف مجموعة الرياض الدمام؟",
          answer: "نعم. أضف موقعاً على نفس هوية المريض.",
        },
        {
          question: "ما التخصصات الأنسب للبدء؟",
          answer: "العيادة العامة والأطفال والعظام وعيادة المستشفى الخارجية نقاط بدء شائعة.",
        },
      ],
      cta: "اطلب عرضاً في الدمام",
    },
  },
  hyderabad: {
    country: "india",
    en: {
      name: "Hyderabad",
      title: "Clinic Management Software in Hyderabad",
      description:
        "Clinic software in Hyderabad for maternity centres, polyclinics, and hospital OPDs. Patient management and clinic solutions for Hyderabad practices.",
      h1: "Clinic management software in Hyderabad",
      intro:
        "Hyderabad’s private market is dense with maternity homes, specialist chambers, and evening OPDs. One Clinic is clinic software already proven in a full maternity build, and it extends to multi-specialty and hospital OPD work across the city.",
      sections: [
        {
          heading: "Maternity is a Hyderabad specialty",
          body: "ANC volume and delivery booking are everyday operations. Our Maternita work shows the stack can carry a real maternity clinic — see also clinic management software in Hyderabad as a flagship combo.",
        },
        {
          heading: "English operations, local pace",
          body: "Admin teams work in English; the day is still high-volume. Fast registration and a trustworthy patient file matter more than unused enterprise modules.",
        },
        {
          heading: "Polyclinic and OPD growth",
          body: "Add dentists, pediatricians, or a second location without changing the patient identity model.",
        },
      ],
      benefits: [
        { title: "Maternity-proven", text: "A shipped maternity clinic platform in this market." },
        { title: "Polyclinic ready", text: "Multiple specialties, one reception." },
        { title: "Import your register", text: "Bring existing patients across during onboarding." },
      ],
      faqs: [
        {
          question: "Do you only work with maternity clinics in Hyderabad?",
          answer: "No. Maternity is a strength. GP, dental, pediatric, and hospital OPD are in scope.",
        },
        {
          question: "Is there a deeper Hyderabad clinic-software page?",
          answer: "Yes. Clinic management software in Hyderabad is the flagship combo.",
        },
        {
          question: "Do you operate a hospital in Hyderabad?",
          answer: "No. We provide software to Hyderabad clinics and medical groups.",
        },
      ],
      cta: "Book a Hyderabad clinic demo",
    },
    ar: {
      name: "حيدر آباد",
      title: "برنامج إدارة العيادات في حيدر آباد",
      description:
        "برنامج عيادات في حيدر آباد لمراكز الولادة والمجمعات وعيادات المستشفى. إدارة مرضى وحلول عيادات لممارسات حيدر آباد.",
      h1: "برنامج إدارة العيادات في حيدر آباد",
      intro:
        "سوق حيدر آباد الخاص كثيف بمنازل الولادة وعيادات التخصص وعيادات المساء. وان كلينك برنامج عيادات مجرّب في بناء ولادة كامل ويمتد للتخصصات المتعددة وعيادات المستشفى.",
      sections: [
        {
          heading: "الولادة تخصص حيدر آباد",
          body: "حجم متابعة الحمل وحجز الولادة تشغيل يومي. عمل ماتيرنيتا يُظهر أن المنصة تحمل عيادة ولادة حقيقية.",
        },
        {
          heading: "تشغيل إنجليزي وإيقاع محلي",
          body: "تعمل الإدارة بالإنجليزية واليوم ما زال عالي الحجم. التسجيل السريع وملف موثوق أهم من وحدات غير مستخدمة.",
        },
        {
          heading: "نمو المجمع والعيادة الخارجية",
          body: "أضف أطباء أسنان أو أطفال أو موقعاً ثانياً دون تغيير نموذج هوية المريض.",
        },
      ],
      benefits: [
        { title: "مجرّب في الولادة", text: "منصة عيادة ولادة منفَّذة في هذا السوق." },
        { title: "جاهز للمجمع", text: "تخصصات متعددة واستقبال واحد." },
        { title: "استورد السجل", text: "انقل المرضى الحاليين أثناء التشغيل." },
      ],
      faqs: [
        {
          question: "هل تعملون مع عيادات الولادة فقط؟",
          answer: "لا. الولادة نقطة قوة. الطبيب العام والأسنان والأطفال وعيادة المستشفى ضمن النطاق.",
        },
        {
          question: "هل هناك صفحة أعمق لبرنامج العيادة في حيدر آباد؟",
          answer: "نعم. برنامج إدارة العيادات في حيدر آباد هي صفحة التوليفة.",
        },
        {
          question: "هل تشغّلون مستشفى في حيدر آباد؟",
          answer: "لا. نقدّم البرنامج لعيادات ومجموعات طبية في حيدر آباد.",
        },
      ],
      cta: "احجز عرض عيادة في حيدر آباد",
    },
  },
};

export const countrySlugs = Object.keys(countries) as CountrySlug[];
export const citySlugs = Object.keys(cities) as CitySlug[];
