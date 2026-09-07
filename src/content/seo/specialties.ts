import type { LocalizedCopy } from "./types";

export type SpecialtySlug =
  | "maternity"
  | "neurology"
  | "cardiology"
  | "pediatrics"
  | "dentistry"
  | "dermatology"
  | "orthopedics"
  | "general-practice";

export const specialties: Record<SpecialtySlug, LocalizedCopy> = {
  maternity: {
    en: {
      name: "Maternity",
      title: "Maternity Clinic Management Software",
      description:
        "Maternity clinic software for ANC visits, delivery booking, trimester records, and WhatsApp reminders. Built for obstetrics practices in Dubai, Riyadh, and Hyderabad — including workflows like Maternita.",
      h1: "Maternity system management for obstetrics clinics",
      intro:
        "Maternity care is a series, not a single visit. One Clinic supports antenatal schedules, trimester notes, delivery booking, and postpartum follow-up so the file stays complete from booking to after birth.",
      sections: [
        {
          heading: "Antenatal visits that stay on the calendar",
          body: "ANC is a repeating plan: booking visit, anomaly scan windows, glucose tests, and weekly checks near term. Visit types and reminders keep that plan visible to reception and the obstetrician instead of living in a paper card the patient forgets.",
        },
        {
          heading: "Delivery and postpartum, not only OPD",
          body: "When a due date is set, the clinic needs a booked slot, not a hope. The maternity workflow links the pregnancy record to the delivery booking and the first postnatal visit so handoffs do not drop.",
        },
        {
          heading: "Proven in a live maternity clinic",
          body: "We built a full maternity clinic management platform for Maternita Clinic — admin panel, real-time appointments, billing, WhatsApp, and Zoom. One Clinic carries those same patterns for obstetrics groups in the UAE, Saudi Arabia, and Hyderabad.",
        },
      ],
      benefits: [
        { title: "Trimester records", text: "Notes, scans, and labs stay on one pregnancy timeline." },
        { title: "ANC reminders", text: "WhatsApp or email recalls for the next antenatal slot." },
        { title: "Delivery booking", text: "Hold the date and team instead of last-minute calls." },
      ],
      faqs: [
        {
          question: "Is this only for standalone maternity clinics?",
          answer: "No. Dedicated maternity centres and hospitals with an obstetrics department can use the same maternity workflows.",
        },
        {
          question: "Can fathers or attendants be on the file?",
          answer: "Contact and emergency details sit on the patient profile so reception can reach the right person for reminders and admissions.",
        },
        {
          question: "Do you work with maternity clinics in Dubai and Hyderabad?",
          answer: "Yes. Maternity is one of our strongest clinic types, including a shipped Maternita implementation.",
        },
      ],
      cta: "See maternity clinic software",
    },
    ar: {
      name: "النساء والولادة",
      title: "برنامج إدارة عيادات النساء والولادة",
      description:
        "برنامج لعيادات الحمل وزيارات ما قبل الولادة وحجز الولادة وسجلات الثلث ومتابعة واتساب. لعيادات التوليد في دبي والرياض وحيدر آباد.",
      h1: "نظام إدارة عيادات الحمل والتوليد",
      intro:
        "رعاية الحمل سلسلة لا زيارة واحدة. يدعم وان كلينك جداول ما قبل الولادة وملاحظات الثلث وحجز الولادة ومتابعة ما بعد الولادة حتى يبقى الملف مكتملاً.",
      sections: [
        {
          heading: "زيارات الحمل تبقى على التقويم",
          body: "متابعة الحمل خطة متكررة: حجز، فحوصات، سكر، ومراجعات أسبوعية قرب الموعد. أنواع الزيارات والتذكيرات تبقي الخطة ظاهرة للاستقبال والطبيبة.",
        },
        {
          heading: "الولادة وما بعدها لا العيادة فقط",
          body: "عند تحديد موعد الولادة تحتاج العيادة حجزاً فعلياً. يربط سير العمل سجل الحمل بحجز الولادة وأول زيارة بعد الولادة.",
        },
        {
          heading: "مجرّب في عيادة ولادة حقيقية",
          body: "بنينا منصة كاملة لعيادة ماتيرنيتا: لوحة إدارة ومواعيد وفوترة وواتساب وزوم. يحمل وان كلينك الأنماط نفسها لمجموعات التوليد.",
        },
      ],
      benefits: [
        { title: "سجلات الثلث", text: "الملاحظات والأشعة والتحاليل على خط زمني واحد للحمل." },
        { title: "تذكير المتابعة", text: "استدعاء واتساب أو بريد للزيارة التالية." },
        { title: "حجز الولادة", text: "تثبيت التاريخ والفريق بدل الاتصالات في اللحظة الأخيرة." },
      ],
      faqs: [
        {
          question: "هل هذا لعيادات الولادة المستقلة فقط؟",
          answer: "لا. يمكن لمراكز الولادة وأقسام النساء في المستشفيات استخدام نفس سير العمل.",
        },
        {
          question: "هل يمكن إضافة بيانات المرافق؟",
          answer: "بيانات التواصل والطوارئ على ملف المريضة حتى يصل الاستقبال للشخص الصحيح.",
        },
        {
          question: "هل تعملون مع عيادات في دبي وحيدر آباد؟",
          answer: "نعم. النساء والولادة من أقوى تخصصاتنا بما في ذلك تنفيذ ماتيرنيتا.",
        },
      ],
      cta: "شاهد برنامج عيادة الولادة",
    },
  },
  neurology: {
    en: {
      name: "Neurology",
      title: "Neurology Clinic Management Software",
      description:
        "Neurology practice software for long follow-ups, imaging notes, repeat prescriptions, and structured reviews. Patient management for neurologists in the UAE, Saudi Arabia, and Hyderabad.",
      h1: "Neurology management for long-course care",
      intro:
        "Neurology is follow-up medicine. Seizure reviews, headache pathways, stroke aftercare, and Parkinson’s clinics need the last imaging note and the last dose — not a blank chart.",
      sections: [
        {
          heading: "Reviews that assume a history",
          body: "A 20-minute neuro slot is wasted if the doctor re-collects the story. The patient timeline keeps prior diagnoses, exam notes, and attachments so the consult starts at “what changed.”",
        },
        {
          heading: "Imaging and reports attached to the visit",
          body: "MRI and EEG reports get lost in email. One Clinic stores files on the patient record next to the visit that ordered them, so the next neurologist is not hunting a USB.",
        },
        {
          heading: "Repeat medication without losing the thread",
          body: "Many neuro patients return for titrations. Prescription history and reminder dates keep refills and review intervals visible to the clinic, not only the pharmacy chat.",
        },
      ],
      benefits: [
        { title: "Longitudinal notes", text: "Each visit sits on the same neurological history." },
        { title: "Imaging on file", text: "Attach reports to the patient, not a shared drive." },
        { title: "Recall lists", text: "Pull patients due for review or medication check." },
      ],
      faqs: [
        {
          question: "Can a multi-specialty hospital use this for neurology OPD?",
          answer: "Yes. Neurology can run as a department with its own visit types on the shared hospital or clinic system.",
        },
        {
          question: "Do you support clinics in Riyadh and Dubai?",
          answer: "Yes. Neurology groups and hospital OPDs in the UAE and Saudi Arabia use the same core platform.",
        },
        {
          question: "Is tele-follow-up possible?",
          answer: "Zoom-style video consults can be booked like any other slot, with notes written back to the same file.",
        },
      ],
      cta: "Book a neurology workflow demo",
    },
    ar: {
      name: "الأعصاب",
      title: "برنامج إدارة عيادات الأعصاب",
      description:
        "برنامج لعيادات الأعصاب للمتابعات الطويلة وملاحظات الأشعة والوصفات المتكررة. إدارة مرضى لأطباء الأعصاب في الإمارات والسعودية وحيدر آباد.",
      h1: "إدارة عيادات الأعصاب للرعاية طويلة الأمد",
      intro:
        "طب الأعصاب طب متابعة. مراجعات الصرع والصداع ورعاية ما بعد الجلطة وعيادات باركنسون تحتاج آخر ملاحظة أشعة وآخر جرعة لا ملفاً فارغاً.",
      sections: [
        {
          heading: "مراجعات تفترض تاريخاً",
          body: "تضيع زيارة عشرين دقيقة إذا أعاد الطبيب جمع القصة. يحفظ الخط الزمني التشخيصات والملاحظات والمرفقات.",
        },
        {
          heading: "الأشعة والتقارير على الزيارة",
          body: "تضيع تقارير الرنين وتخطيط الدماغ في البريد. يخزن وان كلينك الملفات على سجل المريض بجانب الزيارة التي طلبتها.",
        },
        {
          heading: "أدوية متكررة دون فقدان السياق",
          body: "كثير من مرضى الأعصاب يعودون لتعديل الجرعة. تاريخ الوصفات ومواعيد المراجعة تبقى ظاهرة للعيادة.",
        },
      ],
      benefits: [
        { title: "ملاحظات ممتدة", text: "كل زيارة على نفس التاريخ العصبي." },
        { title: "أشعة في الملف", text: "أرفق التقارير بالمريض لا بمجلد مشترك." },
        { title: "قوائم استدعاء", text: "استخرج المرضى المستحقين للمراجعة أو الدواء." },
      ],
      faqs: [
        {
          question: "هل يستخدمه مستشفى متعدد التخصصات لعيادة الأعصاب؟",
          answer: "نعم. يمكن تشغيل الأعصاب كقسم بأنواع زياراته على النظام المشترك.",
        },
        {
          question: "هل تدعمون الرياض ودبي؟",
          answer: "نعم. تستخدم مجموعات الأعصاب وعيادات المستشفى في الإمارات والسعودية المنصة نفسها.",
        },
        {
          question: "هل المتابعة عن بُعد ممكنة؟",
          answer: "يمكن حجز استشارة فيديو كأي موعد مع كتابة الملاحظات في نفس الملف.",
        },
      ],
      cta: "احجز عرض سير عمل الأعصاب",
    },
  },
  cardiology: {
    en: {
      name: "Cardiology",
      title: "Cardiology Clinic Management Software",
      description:
        "Cardiology clinic software for consults, follow-up intervals, procedure lists, and billing. Patient management for heart clinics in Dubai, Riyadh, Jeddah, and Hyderabad.",
      h1: "Cardiology clinic software for consults and follow-up",
      intro:
        "Heart clinics mix new consults, ECG lists, and tight review intervals after stents or valve work. One Clinic keeps those visit types, files, and invoices on one patient record.",
      sections: [
        {
          heading: "Intervals, not only dates",
          body: "A cardiology review is often “in six weeks” or “after the holter.” Structured follow-up dates and reminders bring the patient back without a manual call list.",
        },
        {
          heading: "Reports stay with the patient",
          body: "ECG, echo, and cath summaries should open from the chart. Attachments on the profile stop the “send it on WhatsApp again” loop at reception.",
        },
        {
          heading: "Billing for consults and packages",
          body: "Cardiology revenue mixes single visits and packages. Invoicing on the same file keeps finance aligned with what the doctor actually did.",
        },
      ],
      benefits: [
        { title: "Visit types", text: "New consult, review, ECG, and procedure slots on one calendar." },
        { title: "File attachments", text: "Keep diagnostics next to the clinical note." },
        { title: "Clear invoices", text: "Charge the visit or package from the patient ledger." },
      ],
      faqs: [
        {
          question: "Can a hospital cardiology OPD use this?",
          answer: "Yes. Cardiology can sit as a department inside the hospital management setup.",
        },
        {
          question: "Do you cover UAE and Saudi heart clinics?",
          answer: "Yes. Private cardiology clinics and hospital OPDs in both markets are a common fit.",
        },
        {
          question: "Is this a diagnostic PACS?",
          answer: "No. It is clinic and patient management with attachments. Imaging vendors stay in place; reports live on the patient file.",
        },
      ],
      cta: "Request a cardiology demo",
    },
    ar: {
      name: "القلب",
      title: "برنامج إدارة عيادات القلب",
      description:
        "برنامج لعيادات القلب للاستشارات وفترات المتابعة وقوائم الإجراءات والفوترة في دبي والرياض وجدة وحيدر آباد.",
      h1: "برنامج عيادات القلب للاستشارة والمتابعة",
      intro:
        "تمزج عيادات القلب بين الاستشارات الجديدة وقوائم تخطيط القلب ومراجعات دقيقة بعد القسطرة أو الصمامات. يبقي وان كلينك أنواع الزيارات والملفات والفواتير على سجل واحد.",
      sections: [
        {
          heading: "فترات لا تواريخ فقط",
          body: "مراجعة القلب غالباً «بعد ستة أسابيع» أو «بعد الهولتر». تواريخ المتابعة والتذكيرات تعيد المريض دون قائمة اتصال يدوية.",
        },
        {
          heading: "التقارير مع المريض",
          body: "تخطيط القلب والإيكو وملخص القسطرة يجب أن تُفتح من الملف. المرفقات توقف حلقة «أرسلها على واتساب مرة أخرى».",
        },
        {
          heading: "فوترة الاستشارة والباقات",
          body: "إيراد القلب يخلط الزيارة الواحدة والباقات. الفوترة على نفس الملف تبقي المالية متوافقة مع ما فعله الطبيب.",
        },
      ],
      benefits: [
        { title: "أنواع الزيارات", text: "استشارة جديدة ومراجعة وتخطيط وإجراء على تقويم واحد." },
        { title: "مرفقات الملف", text: "أبقِ التشخيص بجانب الملاحظة السريرية." },
        { title: "فواتير واضحة", text: "احسب الزيارة أو الباقة من دفتر المريض." },
      ],
      faqs: [
        {
          question: "هل تستخدمه عيادة القلب في المستشفى؟",
          answer: "نعم. يمكن أن يكون القلب قسماً داخل إعداد إدارة المستشفى.",
        },
        {
          question: "هل تغطون عيادات الإمارات والسعودية؟",
          answer: "نعم. عيادات القلب الخاصة وعيادات المستشفى في السوقين تناسب المنصة.",
        },
        {
          question: "هل هذا نظام أرشفة أشعة؟",
          answer: "لا. هو إدارة عيادة ومرضى مع مرفقات. تبقى أنظمة التصوير كما هي وتُحفظ التقارير على الملف.",
        },
      ],
      cta: "اطلب عرض عيادة القلب",
    },
  },
  pediatrics: {
    en: {
      name: "Pediatrics",
      title: "Pediatric Clinic Management Software",
      description:
        "Pediatric clinic software for child records, vaccination-style recall, parent contacts, and high-volume walk-ins. Built for child clinics in the UAE, Saudi Arabia, and Hyderabad.",
      h1: "Pediatric clinic software parents can rely on",
      intro:
        "Paediatric days are high volume and high interruption. One Clinic keeps the child’s file, guardian contacts, and next visit visible so reception is not reconstructing the family from memory.",
      sections: [
        {
          heading: "The child is the patient, the parent is the channel",
          body: "Reminders go to the guardian, but the chart belongs to the child. Separate identities stop siblings from sharing one messy file.",
        },
        {
          heading: "Growth and review cadence",
          body: "Well-baby and chronic reviews (asthma, allergy) need a cadence. Visit types and recalls bring families back without relying on a paper booklet alone.",
        },
        {
          heading: "Walk-ins without losing the queue",
          body: "Evening fever clinics in Ajman, Jeddah, and Hyderabad overflow. A live schedule and quick registration keep the queue honest.",
        },
      ],
      benefits: [
        { title: "Guardian contacts", text: "Reach the right parent on WhatsApp or phone." },
        { title: "Child-only records", text: "Each sibling has a clean timeline." },
        { title: "Busy-day scheduling", text: "Mix booked slots and walk-ins on one list." },
      ],
      faqs: [
        {
          question: "Can we run vaccination reminders?",
          answer: "You can schedule recall visits and message guardians. Exact vaccine protocols stay a clinical decision; the software runs the calendar and outreach.",
        },
        {
          question: "Is this for standalone pediatric clinics or hospital wards?",
          answer: "It is strongest for OPD and standalone pediatric clinics. Inpatient ward boards are not the first use case.",
        },
        {
          question: "Do you support Arabic-speaking families?",
          answer: "Yes. Teams in the UAE and Saudi Arabia can operate the product in an Arabic site experience and message families as they already do on WhatsApp.",
        },
      ],
      cta: "See pediatric clinic software",
    },
    ar: {
      name: "طب الأطفال",
      title: "برنامج إدارة عيادات الأطفال",
      description:
        "برنامج لعيادات الأطفال وسجلات الطفل واستدعاء المراجعات وتواصل الأهل والزيارات الكثيفة في الإمارات والسعودية وحيدر آباد.",
      h1: "برنامج عيادات أطفال يعتمد عليه الأهل",
      intro:
        "أيام الأطفال عالية الحجم وكثيرة المقاطعة. يبقي وان كلينك ملف الطفل وبيانات ولي الأمر والزيارة التالية ظاهرة حتى لا يعيد الاستقبال بناء الأسرة من الذاكرة.",
      sections: [
        {
          heading: "الطفل هو المريض والأهل قناة التواصل",
          body: "التذكيرات تذهب لولي الأمر والملف للطفل. هويات منفصلة تمنع اختلاط ملفات الإخوة.",
        },
        {
          heading: "إيقاع النمو والمراجعة",
          body: "زيارات الطفل السليم والمراجعات المزمنة تحتاج إيقاعاً. أنواع الزيارات والاستدعاء تعيد الأسرة دون الاعتماد على الكرت الورقي وحده.",
        },
        {
          heading: "بدون موعد دون فقدان الطابور",
          body: "عيادات الحمى المسائية في عجمان وجدة وحيدر آباد تمتلئ. جدول حي وتسجيل سريع يبقيان الطابور واضحاً.",
        },
      ],
      benefits: [
        { title: "تواصل ولي الأمر", text: "الوصول للوالد الصحيح على واتساب أو الهاتف." },
        { title: "سجل لكل طفل", text: "خط زمني نظيف لكل أخ." },
        { title: "جدولة الأيام المزدحمة", text: "امزج الحجوزات والزيارات الفورية في قائمة واحدة." },
      ],
      faqs: [
        {
          question: "هل يمكن تشغيل تذكير التطعيم؟",
          answer: "يمكن جدولة زيارات الاستدعاء ومراسلة الأهل. بروتوكول اللقاح قرار سريري؛ البرنامج يدير التقويم والتواصل.",
        },
        {
          question: "هل للعيادة المستقلة أم لأقسام التنويم؟",
          answer: "هو أقوى لعيادات الأطفال الخارجية. لوحات التنويم ليست الاستخدام الأول.",
        },
        {
          question: "هل تدعمون الأسر الناطقة بالعربية؟",
          answer: "نعم. يمكن للفرق في الإمارات والسعودية استخدام تجربة عربية ومراسلة الأهل عبر واتساب كما يفعلون.",
        },
      ],
      cta: "شاهد برنامج عيادة الأطفال",
    },
  },
  dentistry: {
    en: {
      name: "Dentistry",
      title: "Dental Clinic Management Software",
      description:
        "Dental clinic software for chair scheduling, treatment plans, and billing. Clinic solutions for dental practices in Dubai, Sharjah, Riyadh, and Hyderabad.",
      h1: "Dental clinic software for chairs and treatment plans",
      intro:
        "Dentistry is chair time. One Clinic maps providers, rooms, and follow-up treatments so a crown prep and a hygiene slot do not collide.",
      sections: [
        {
          heading: "The calendar is the clinic",
          body: "Double-booking a chair is an expensive mistake. Provider hours, room awareness, and visit length keep the day realistic.",
        },
        {
          heading: "Treatment that spans visits",
          body: "Root canals and ortho reviews are multi-visit. Notes and planned next steps stay on the patient so the next dentist is not guessing.",
        },
        {
          heading: "Billing patients understand",
          body: "Itemised invoices for procedures reduce front-desk arguments. Payments attach to the same patient ledger as the chart.",
        },
      ],
      benefits: [
        { title: "Chair-aware booking", text: "Protect provider and room time." },
        { title: "Multi-visit plans", text: "Keep the next dental step on the file." },
        { title: "Procedure billing", text: "Invoice what was done, not a vague consult fee." },
      ],
      faqs: [
        {
          question: "Is this a dental imaging suite?",
          answer: "No. It is practice management: booking, records, and billing. You can attach images to the patient file.",
        },
        {
          question: "Can a dental group with several clinics use it?",
          answer: "Yes. Multi-location is a core path for groups in the UAE and Saudi Arabia.",
        },
        {
          question: "Do you work with Hyderabad dental clinics?",
          answer: "Yes. High-volume private dental clinics in Hyderabad are a typical clinic-software fit.",
        },
      ],
      cta: "Request a dental clinic demo",
    },
    ar: {
      name: "طب الأسنان",
      title: "برنامج إدارة عيادات الأسنان",
      description:
        "برنامج لعيادات الأسنان لجدولة الكراسي وخطط العلاج والفوترة في دبي والشارقة والرياض وحيدر آباد.",
      h1: "برنامج عيادات الأسنان للكراسي وخطط العلاج",
      intro:
        "طب الأسنان وقت كرسي. يربط وان كلينك الأطباء والغرف والعلاجات المتابعة حتى لا يصطدم تحضير التاج مع موعد التنظيف.",
      sections: [
        {
          heading: "التقويم هو العيادة",
          body: "الحجز المزدوج على الكرسي خطأ مكلف. ساعات الطبيب والغرفة ومدة الزيارة تجعل اليوم واقعياً.",
        },
        {
          heading: "علاج يمتد على زيارات",
          body: "العصب والتقويم زيارات متعددة. تبقى الملاحظات والخطوة التالية على ملف المريض.",
        },
        {
          heading: "فوترة يفهمها المريض",
          body: "فواتير مفصّلة للإجراءات تقلل الجدل في الاستقبال. تُربط المدفوعات بنفس دفتر المريض.",
        },
      ],
      benefits: [
        { title: "حجز يراعي الكرسي", text: "احمِ وقت الطبيب والغرفة." },
        { title: "خطط متعددة الزيارات", text: "أبقِ الخطوة التالية على الملف." },
        { title: "فوترة الإجراءات", text: "احسب ما نُفّذ لا رسماً عاماً." },
      ],
      faqs: [
        {
          question: "هل هذا نظام تصوير أسنان؟",
          answer: "لا. هو إدارة ممارسة: حجز وسجلات وفوترة. يمكن إرفاق الصور بملف المريض.",
        },
        {
          question: "هل يناسب مجموعة عيادات؟",
          answer: "نعم. تعدد الفروع مسار أساسي للمجموعات في الإمارات والسعودية.",
        },
        {
          question: "هل تعملون مع عيادات حيدر آباد؟",
          answer: "نعم. عيادات الأسنان الخاصة عالية الحجم هناك تناسب برنامج العيادة.",
        },
      ],
      cta: "اطلب عرض عيادة الأسنان",
    },
  },
  dermatology: {
    en: {
      name: "Dermatology",
      title: "Dermatology Clinic Management Software",
      description:
        "Dermatology clinic software for consults, procedure lists, photo follow-up, and packages. Clinic solutions for skin clinics in Dubai, Jeddah, and Hyderabad.",
      h1: "Dermatology clinic software for consults and procedures",
      intro:
        "Skin clinics mix medical dermatology and aesthetic lists. One Clinic separates those calendars, stores follow-up photos on the file, and bills packages without a second spreadsheet.",
      sections: [
        {
          heading: "Two calendars, one patient",
          body: "A rash review and a laser slot should not fight for the same room blindly. Visit types keep medical and procedure lists readable.",
        },
        {
          heading: "Photos belong on the chart",
          body: "Progress photos get lost in phones. Attachments on the patient record make the next comparison honest.",
        },
        {
          heading: "Packages without shadow books",
          body: "Aesthetic clinics sell courses of visits. The patient ledger should show remaining sessions instead of a paper punch card.",
        },
      ],
      benefits: [
        { title: "Medical and aesthetic lists", text: "Book the right room and duration." },
        { title: "Photo follow-up", text: "Keep comparisons on the patient file." },
        { title: "Package tracking", text: "See remaining sessions at reception." },
      ],
      faqs: [
        {
          question: "Can dermatologists in Dubai and Jeddah use this?",
          answer: "Yes. Private skin clinics in the UAE and Saudi Arabia are a common clinic-software use case.",
        },
        {
          question: "Do you replace the laser device software?",
          answer: "No. Device consoles stay as they are. One Clinic runs the practice around them.",
        },
        {
          question: "Is this suitable for a hospital dermatology OPD?",
          answer: "Yes, as a department calendar and record layer.",
        },
      ],
      cta: "Book a dermatology demo",
    },
    ar: {
      name: "الجلدية",
      title: "برنامج إدارة عيادات الجلدية",
      description:
        "برنامج لعيادات الجلدية للاستشارات والإجراءات ومتابعة الصور والباقات في دبي وجدة وحيدر آباد.",
      h1: "برنامج عيادات الجلدية للاستشارة والإجراءات",
      intro:
        "تمزج عيادات الجلد بين الطب والتجميل. يفصل وان كلينك تلك الجداول ويحفظ صور المتابعة على الملف ويحاسب الباقات دون جدول بيانات ثانٍ.",
      sections: [
        {
          heading: "تقويمان ومريض واحد",
          body: "مراجعة طفح وموعد ليزر يجب ألا يتنازعا على الغرفة. أنواع الزيارات تجعل القوائم واضحة.",
        },
        {
          heading: "الصور على الملف",
          body: "صور التقدم تضيع في الهواتف. المرفقات على سجل المريض تجعل المقارنة صادقة.",
        },
        {
          heading: "باقات بلا دفاتر ظل",
          body: "عيادات التجميل تبيع سلسلة زيارات. يجب أن يظهر دفتر المريض الجلسات المتبقية.",
        },
      ],
      benefits: [
        { title: "قوائم طبية وتجميلية", text: "احجز الغرفة والمدة الصحيحين." },
        { title: "متابعة بالصور", text: "أبقِ المقارنة على ملف المريض." },
        { title: "تتبع الباقات", text: "اعرض الجلسات المتبقية في الاستقبال." },
      ],
      faqs: [
        {
          question: "هل يناسب أطباء الجلد في دبي وجدة؟",
          answer: "نعم. عيادات الجلد الخاصة في الإمارات والسعودية استخدام شائع.",
        },
        {
          question: "هل تستبدلون برنامج جهاز الليزر؟",
          answer: "لا. تبقى أجهزة الأجهزة كما هي. وان كلينك يدير الممارسة حولها.",
        },
        {
          question: "هل يناسب عيادة الجلد في المستشفى؟",
          answer: "نعم، كطبقة تقويم وسجلات للقسم.",
        },
      ],
      cta: "احجز عرض عيادة الجلدية",
    },
  },
  orthopedics: {
    en: {
      name: "Orthopedics",
      title: "Orthopedic Clinic Management Software",
      description:
        "Orthopedic clinic software for consults, injection and physio follow-ups, imaging notes, and billing. For bone and joint clinics in the UAE, Saudi Arabia, and Hyderabad.",
      h1: "Orthopedic clinic software for consults and reviews",
      intro:
        "Ortho mixes new trauma slots, planned injections, and long physio-style reviews. One Clinic keeps the injury story, images, and next procedure date on one file.",
      sections: [
        {
          heading: "Acute and elective on one board",
          body: "Morning fracture reviews and afternoon elective lists need different lengths. Visit types stop a 10-minute review from eating a 30-minute new-patient slot.",
        },
        {
          heading: "X-rays next to the note",
          body: "Attach imaging so the next visit is not “please bring the CD.” The orthopedic story stays in the patient management system.",
        },
        {
          heading: "Therapy and injection follow-up",
          body: "Many pathways are a series. Recalling patients after an injection or a physio block is an operations job the software should own.",
        },
      ],
      benefits: [
        { title: "Mixed lists", text: "Trauma reviews and elective consults on one calendar." },
        { title: "Imaging on the chart", text: "Files travel with the patient identity." },
        { title: "Series care", text: "Remind the next injection or review automatically." },
      ],
      faqs: [
        {
          question: "Can physio sit on the same system?",
          answer: "Yes, as another visit type or provider calendar sharing the patient record.",
        },
        {
          question: "Do hospital ortho OPDs fit?",
          answer: "Yes. Orthopedics is a typical department on the hospital management setup.",
        },
        {
          question: "Which cities do you target?",
          answer: "Clinics and hospital OPDs in Dubai, Sharjah, Riyadh, Jeddah, Dammam, and Hyderabad.",
        },
      ],
      cta: "See orthopedic clinic software",
    },
    ar: {
      name: "العظام",
      title: "برنامج إدارة عيادات العظام",
      description:
        "برنامج لعيادات العظام للاستشارات ومتابعة الحقن والعلاج الطبيعي وملاحظات الأشعة والفوترة في الإمارات والسعودية وحيدر آباد.",
      h1: "برنامج عيادات العظام للاستشارة والمراجعة",
      intro:
        "تمزج العظام بين إصابات جديدة وحقن مخططة ومراجعات طويلة. يبقي وان كلينك قصة الإصابة والصور وموعد الإجراء التالي على ملف واحد.",
      sections: [
        {
          heading: "الحاد والانتقائي على لوحة واحدة",
          body: "مراجعات الكسور صباحاً والقوائم الانتقائية مساءً تحتاج مدداً مختلفة. أنواع الزيارات تمنع مراجعة قصيرة من التهام موعد مريض جديد.",
        },
        {
          heading: "الأشعة بجانب الملاحظة",
          body: "أرفق التصوير حتى لا تكون الزيارة التالية «أحضر القرص». تبقى قصة العظام في نظام إدارة المرضى.",
        },
        {
          heading: "متابعة العلاج والحقن",
          body: "كثير من المسارات سلسلة. استدعاء المريض بعد حقن أو برنامج علاج طبيعي مهمة تشغيل يجب أن يملكها البرنامج.",
        },
      ],
      benefits: [
        { title: "قوائم مختلطة", text: "مراجعات الإصابات واستشارات انتقائية على تقويم واحد." },
        { title: "أشعة على الملف", text: "تسافر الملفات مع هوية المريض." },
        { title: "رعاية متسلسلة", text: "ذكّر بالحقن أو المراجعة التالية تلقائياً." },
      ],
      faqs: [
        {
          question: "هل يمكن أن يكون العلاج الطبيعي على نفس النظام؟",
          answer: "نعم، كنوع زيارة أو تقويم معالج يشارك سجل المريض.",
        },
        {
          question: "هل تناسب عيادة العظام في المستشفى؟",
          answer: "نعم. العظام قسم شائع في إعداد إدارة المستشفى.",
        },
        {
          question: "أي مدن تستهدفون؟",
          answer: "عيادات وعيادات مستشفى في دبي والشارقة والرياض وجدة والدمام وحيدر آباد.",
        },
      ],
      cta: "شاهد برنامج عيادة العظام",
    },
  },
  "general-practice": {
    en: {
      name: "General practice",
      title: "Multi-Specialty & General Clinic Management Software",
      description:
        "Clinic management software for GP and multi-specialty centres: shared reception, specialty visit types, and one patient file. For polyclinics in the UAE, Saudi Arabia, and Hyderabad.",
      h1: "Clinic software for GP and multi-specialty centres",
      intro:
        "Most neighbourhood clinics are not a single specialty. One Clinic lets a GP, a paediatrician, and a dentist share reception and billing while keeping specialty-shaped visit types.",
      sections: [
        {
          heading: "One front desk, many lists",
          body: "Reception should not run three products. Shared search, payments, and calendars keep the polyclinic coherent.",
        },
        {
          heading: "Specialty without silos",
          body: "A patient who sees GP and dermatology still has one identity. That is the difference between a collection of apps and a clinic solution.",
        },
        {
          heading: "Right-sized for growing centres",
          body: "Start with two doctors in Ajman or a Hyderabad polyclinic, then add specialties and rooms. You should not re-implement software at every hire.",
        },
      ],
      benefits: [
        { title: "Shared reception", text: "One search box for every doctor’s patients." },
        { title: "Per-specialty slots", text: "Visit lengths and names match each practice." },
        { title: "One ledger", text: "Billing stays central even when specialties differ." },
      ],
      faqs: [
        {
          question: "Is this GP software or a hospital system?",
          answer: "It is clinic management software that scales to a small hospital or multi-location group when you need it.",
        },
        {
          question: "Can we add maternity or neurology later?",
          answer: "Yes. Specialties are visit types and calendars on the same patient management system.",
        },
        {
          question: "Which markets is this for?",
          answer: "Polyclinics and GP groups in Dubai, Sharjah, Ajman, Riyadh, Jeddah, Dammam, and Hyderabad.",
        },
      ],
      cta: "Request a multi-specialty demo",
    },
    ar: {
      name: "العيادة العامة",
      title: "برنامج إدارة العيادات العامة ومتعددة التخصصات",
      description:
        "برنامج إدارة عيادات للمراكز العامة ومتعددة التخصصات: استقبال مشترك وأنواع زيارات وملف مريض واحد في الإمارات والسعودية وحيدر آباد.",
      h1: "برنامج عيادات للمراكز العامة ومتعددة التخصصات",
      intro:
        "معظم عيادات الحي ليست تخصصاً واحداً. يتيح وان كلينك لطبيب عام وطبيب أطفال وطبيب أسنان مشاركة الاستقبال والفوترة مع أنواع زيارات تناسب كل تخصص.",
      sections: [
        {
          heading: "مكتب أمامي واحد وقوائم متعددة",
          body: "يجب ألا يشغّل الاستقبال ثلاثة منتجات. البحث والمدفوعات والتقويمات المشتركة تبقي المجمع متماسكاً.",
        },
        {
          heading: "تخصص بلا عزلة",
          body: "المريض الذي يرى الطبيب العام والجلدية يبقى هوية واحدة. هذا فرق التطبيق المتفرق وحل العيادة.",
        },
        {
          heading: "حجم يناسب المراكز النامية",
          body: "ابدأ بطبيبين في عجمان أو مجمع في حيدر آباد ثم أضف تخصصات وغرفاً دون إعادة تنفيذ البرنامج مع كل تعيين.",
        },
      ],
      benefits: [
        { title: "استقبال مشترك", text: "صندوق بحث واحد لمرضى كل الأطباء." },
        { title: "مواعيد حسب التخصص", text: "مدة الزيارة واسمها يناسبان كل ممارسة." },
        { title: "دفتر واحد", text: "تبقى الفوترة مركزية حتى مع اختلاف التخصصات." },
      ],
      faqs: [
        {
          question: "هل هذا برنامج طبيب عام أم نظام مستشفى؟",
          answer: "هو برنامج إدارة عيادات يتوسع إلى مستشفى صغير أو مجموعة متعددة الفروع عند الحاجة.",
        },
        {
          question: "هل نضيف النساء أو الأعصاب لاحقاً؟",
          answer: "نعم. التخصصات أنواع زيارات وتقويمات على نفس نظام إدارة المرضى.",
        },
        {
          question: "لأي أسواق هذا؟",
          answer: "مجمعات وعيادات عامة في دبي والشارقة وعجمان والرياض وجدة والدمام وحيدر آباد.",
        },
      ],
      cta: "اطلب عرض العيادة متعددة التخصصات",
    },
  },
};

export const specialtySlugs = Object.keys(specialties) as SpecialtySlug[];
