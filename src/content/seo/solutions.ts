import type { LocalizedCopy } from "./types";

export type SolutionSlug =
  | "clinic-management-software"
  | "hospital-management-system"
  | "patient-management-system";

export const solutions: Record<SolutionSlug, LocalizedCopy> = {
  "clinic-management-software": {
    en: {
      name: "Clinic management software",
      title: "Clinic Management Software & Clinic Solutions",
      description:
        "One Clinic is clinic management software for growing practices. Run scheduling, records, billing, and WhatsApp follow-up in one clinic solution for UAE, Saudi Arabia, and Hyderabad.",
      h1: "Clinic management software for modern practices",
      intro:
        "One Clinic is a complete clinic solution for single-doctor rooms and multi-provider groups. Replace scattered notebooks, WhatsApp chats, and spreadsheets with one system for appointments, patient records, and billing.",
      sections: [
        {
          heading: "Clinic software that matches how you actually work",
          body: "Front desk books the visit, the doctor updates the chart, and billing closes the same day. Clinic software should follow that path instead of forcing extra clicks. One Clinic keeps scheduling, digital records, invoices, and reminders in one place so staff are not jumping between tools.",
        },
        {
          heading: "Built for clinics in the UAE, Saudi Arabia, and India",
          body: "Practices in Dubai, Sharjah, Ajman, Riyadh, Jeddah, Dammam, and Hyderabad need bilingual communication and WhatsApp-first follow-up. The platform supports that workflow: confirmations, recalls, and reports your admin team can run without a dedicated IT person.",
        },
        {
          heading: "From first visit to repeat care",
          body: "A clinic solution is only useful if it stays accurate after the first booking. Patient profiles store history, prescriptions, and payments so the next visit starts faster. Managers see no-shows, revenue, and occupancy without exporting five files.",
        },
      ],
      benefits: [
        { title: "Scheduling and reminders", text: "Calendar views, provider hours, and WhatsApp or email reminders that cut empty slots." },
        { title: "Records and billing together", text: "Chart the visit and raise the invoice in the same patient file." },
        { title: "Multi-clinic ready", text: "Add rooms, doctors, and locations as the practice grows." },
      ],
      faqs: [
        {
          question: "Is this clinic software or a full hospital system?",
          answer:
            "One Clinic is clinic management software first. Growing groups and smaller hospitals use the same platform and can move to hospital-style workflows when they add departments and locations.",
        },
        {
          question: "Can one clinic solution serve maternity and other specialties?",
          answer:
            "Yes. Maternity, neurology, cardiology, pediatrics, dentistry, and general practice share the core booking and records layer, with specialty-friendly visit types.",
        },
        {
          question: "Do you support clinics in Dubai, Riyadh, and Hyderabad?",
          answer:
            "Yes. We onboard clinics and medical groups across the UAE, Saudi Arabia, and Hyderabad, with demos in English or Arabic.",
        },
      ],
      cta: "Request a clinic software demo",
    },
    ar: {
      name: "برنامج إدارة العيادات",
      title: "برنامج إدارة العيادات وحلول العيادات",
      description:
        "وان كلينك برنامج إدارة عيادات للممارسات النامية. نظّم المواعيد والسجلات والفوترة ومتابعة واتساب في حل عيادي واحد للإمارات والسعودية وحيدر آباد.",
      h1: "برنامج إدارة عيادات للممارسات الحديثة",
      intro:
        "وان كلينك حل متكامل للعيادة الفردية ومجموعات الأطباء. استبدل الدفاتر والمحادثات وجداول البيانات بنظام واحد للمواعيد وسجلات المرضى والفوترة.",
      sections: [
        {
          heading: "برنامج يتبع طريقة عملكم الحقيقية",
          body: "الاستقبال يحجز الزيارة، الطبيب يحدّث الملف، والمالية تغلق الحساب في اليوم نفسه. يجب أن يتبع برنامج العيادة هذا المسار دون نقرات زائدة. يجمع وان كلينك الجدولة والسجلات والفواتير والتذكيرات في مكان واحد.",
        },
        {
          heading: "مصمم لعيادات الإمارات والسعودية والهند",
          body: "عيادات دبي والشارقة وعجمان والرياض وجدة والدمام وحيدر آباد تحتاج تواصلاً ثنائي اللغة ومتابعة عبر واتساب. يدعم النظام التأكيدات واستدعاء المرضى والتقارير دون الحاجة لفريق تقنية معلومات.",
        },
        {
          heading: "من الزيارة الأولى إلى المتابعة",
          body: "يحفظ ملف المريض التاريخ والوصفات والمدفوعات حتى تبدأ الزيارة التالية بسرعة. يرى المدير الغياب والإيراد والإشغال دون تصدير ملفات متعددة.",
        },
      ],
      benefits: [
        { title: "جدولة وتذكيرات", text: "تقويم وساعات الأطباء وتذكيرات واتساب أو بريد تقلل المواعيد الفارغة." },
        { title: "سجل وفوترة معاً", text: "وثّق الزيارة وأصدر الفاتورة من نفس ملف المريض." },
        { title: "جاهز لتعدد العيادات", text: "أضف غرفاً وأطباء وفروعاً مع نمو الممارسة." },
      ],
      faqs: [
        {
          question: "هل هذا برنامج عيادة أم نظام مستشفى؟",
          answer: "وان كلينك برنامج إدارة عيادات أولاً. تستخدمه المجموعات والمستشفيات الصغيرة ويمكن توسيعه عند إضافة الأقسام والفروع.",
        },
        {
          question: "هل يخدم عيادات النساء والأعصاب وغيرها؟",
          answer: "نعم. تشترك التخصصات في الحجز والسجلات مع أنواع زيارات تناسب كل تخصص.",
        },
        {
          question: "هل تدعمون دبي والرياض وحيدر آباد؟",
          answer: "نعم. نجهّز عيادات ومجموعات طبية في الإمارات والسعودية وحيدر آباد، والعروض بالإنجليزية أو العربية.",
        },
      ],
      cta: "اطلب عرض برنامج العيادة",
    },
  },
  "hospital-management-system": {
    en: {
      name: "Hospital management system",
      title: "Hospital Management System for Growing Medical Groups",
      description:
        "Hospital management software for departments, multiple locations, and shared billing. One Clinic helps hospitals and large clinics in Riyadh, Dubai, and Hyderabad run one operational picture.",
      h1: "Hospital management system for multi-department care",
      intro:
        "A hospital management system has to coordinate more than one calendar. One Clinic gives administrators a single view of departments, doctors, beds of work (rooms and lists), billing, and patient movement without buying a heavyweight stack they will never finish implementing.",
      sections: [
        {
          heading: "One operational picture, not five products",
          body: "Hospitals stall when OPD, billing, and records live in different vendors. This hospital management solution keeps registration, appointments, clinical notes, and invoices on one patient identity so a transfer between departments does not create a second file.",
        },
        {
          heading: "Fit for private hospitals and large polyclinics",
          body: "Groups in Riyadh, Jeddah, Dammam, Dubai, and Hyderabad often run a hospital-grade front office with clinic-speed specialties. One Clinic scales from a flagship site to additional locations, with role-based access for reception, finance, and medical directors.",
        },
        {
          heading: "Reporting leadership can use",
          body: "Directors need occupancy, collection, and specialty mix — not raw exports. Dashboards show booked versus completed visits, outstanding invoices, and which services drive volume across branches.",
        },
      ],
      benefits: [
        { title: "Department scheduling", text: "Separate lists for OPD, procedures, and consultants without double booking." },
        { title: "Shared patient identity", text: "One record follows the patient across services and locations." },
        { title: "Finance visibility", text: "Invoices, payments, and outstanding balances in one ledger view." },
      ],
      faqs: [
        {
          question: "Is this a hospital management system or clinic software?",
          answer:
            "It is both a clinic platform and a hospital management system for private hospitals and medical groups that need departments, roles, and multi-location control without a two-year ERP project.",
        },
        {
          question: "Can we start with one hospital and add branches?",
          answer: "Yes. Start with a single site, then add locations, users, and services as the group expands.",
        },
        {
          question: "Do you implement in Saudi Arabia and the UAE?",
          answer: "Yes. We onboard hospital groups and large clinics in Saudi Arabia, the UAE, and Hyderabad.",
        },
      ],
      cta: "Book a hospital system demo",
    },
    ar: {
      name: "نظام إدارة المستشفيات",
      title: "نظام إدارة المستشفيات للمجموعات الطبية",
      description:
        "برنامج إدارة مستشفيات للأقسام والفروع والفوترة المشتركة. يساعد وان كلينك المستشفيات والعيادات الكبيرة في الرياض ودبي وحيدر آباد على رؤية تشغيلية واحدة.",
      h1: "نظام إدارة مستشفيات للرعاية متعددة الأقسام",
      intro:
        "يحتاج نظام المستشفى إلى أكثر من تقويم واحد. يمنح وان كلينك الإدارة صورة واحدة للأقسام والأطباء والغرف والفوترة وحركة المرضى دون مشروع تقني ثقيل.",
      sections: [
        {
          heading: "صورة تشغيلية واحدة لا خمسة منتجات",
          body: "تتوقف المستشفيات عندما يعيش العيادات الخارجية والفوترة والسجلات عند موردين مختلفين. يحافظ هذا الحل على التسجيل والمواعيد والملاحظات والفواتير بهوية مريض واحدة.",
        },
        {
          heading: "يناسب المستشفيات الخاصة والعيادات الكبرى",
          body: "مجموعات الرياض وجدة والدمام ودبي وحيدر آباد تدير مكتباً أمامياً بمستوى مستشفى مع تخصصات سريعة. يتوسع وان كلينك من موقع رئيسي إلى فروع مع صلاحيات للاستقبال والمالية والمدير الطبي.",
        },
        {
          heading: "تقارير تصلح للإدارة",
          body: "يحتاج المديرون الإشغال والتحصيل ومزيج التخصصات. تعرض اللوحات الزيارات المحجوزة مقابل المكتملة والفواتير المعلقة والخدمات الأعلى حجماً.",
        },
      ],
      benefits: [
        { title: "جدولة الأقسام", text: "قوائم منفصلة للعيادات والإجراءات دون حجز مزدوج." },
        { title: "هوية مريض مشتركة", text: "سجل واحد يتبع المريض عبر الخدمات والفروع." },
        { title: "وضوح مالي", text: "فواتير ومدفوعات وأرصدة في دفتر واحد." },
      ],
      faqs: [
        {
          question: "هل هذا نظام مستشفى أم برنامج عيادة؟",
          answer: "هو منصة عيادات ونظام إدارة مستشفيات للمجموعات التي تحتاج أقساماً وصلاحيات وفروعاً دون مشروع سنوات.",
        },
        {
          question: "هل نبدأ بمستشفى واحد ثم نضيف فروعاً؟",
          answer: "نعم. ابدأ بموقع واحد ثم أضف المواقع والمستخدمين والخدمات.",
        },
        {
          question: "هل تنفّذون في السعودية والإمارات؟",
          answer: "نعم. نجهّز مجموعات مستشفيات وعيادات كبيرة في السعودية والإمارات وحيدر آباد.",
        },
      ],
      cta: "احجز عرض نظام المستشفى",
    },
  },
  "patient-management-system": {
    en: {
      name: "Patient management system",
      title: "Patient Management System & Digital Health Records",
      description:
        "A patient management system for registration, digital records, visit history, and follow-up. One Clinic keeps every patient file complete for clinics and hospitals in the UAE, Saudi Arabia, and Hyderabad.",
      h1: "Patient management system that stays complete",
      intro:
        "If the file is incomplete, the next doctor starts from zero. One Clinic is a patient management solution that keeps registration, history, prescriptions, attachments, and payments on one timeline staff can trust.",
      sections: [
        {
          heading: "Registration that does not create duplicates",
          body: "Busy reception teams in Jeddah, Dubai, and Hyderabad often open a second file for the same person. Search-before-create, contact details, and visit history reduce duplicates so analytics and billing stay honest.",
        },
        {
          heading: "A record the clinician will actually open",
          body: "Patient management software fails when the chart is slower than paper. The timeline shows prior visits, notes, and prescriptions in a few seconds so maternity follow-ups, neuro reviews, and general consults stay consistent.",
        },
        {
          heading: "Follow-up is part of the file, not a side chat",
          body: "Recalls, lab returns, and review dates live on the patient — not only in a receptionist’s WhatsApp. That is what turns a database into a patient management system.",
        },
      ],
      benefits: [
        { title: "Single patient timeline", text: "Visits, notes, files, and invoices in one profile." },
        { title: "Fewer duplicate files", text: "Search and match before a new registration is created." },
        { title: "Safer handoffs", text: "The next doctor sees the same history the last doctor wrote." },
      ],
      faqs: [
        {
          question: "What is included in the patient management system?",
          answer:
            "Registration, digital health records, visit notes, prescriptions, attachments, billing history, and follow-up reminders in one patient profile.",
        },
        {
          question: "Can we import existing patient lists?",
          answer: "Yes. We help clinics migrate core patient data during onboarding so you are not retyping the register.",
        },
        {
          question: "Is this only for large hospitals?",
          answer: "No. Solo clinics and hospital OPDs use the same patient management layer; hospitals add departments and locations on top.",
        },
      ],
      cta: "See the patient system in a demo",
    },
    ar: {
      name: "نظام إدارة المرضى",
      title: "نظام إدارة المرضى والسجلات الصحية الرقمية",
      description:
        "نظام إدارة مرضى للتسجيل والسجلات وتاريخ الزيارات والمتابعة. يحافظ وان كلينك على اكتمال ملف كل مريض في عيادات ومستشفيات الإمارات والسعودية وحيدر آباد.",
      h1: "نظام إدارة مرضى يبقى مكتملاً",
      intro:
        "إذا كان الملف ناقصاً يبدأ الطبيب التالي من الصفر. وان كلينك حل لإدارة المرضى يجمع التسجيل والتاريخ والوصفات والمرفقات والمدفوعات على خط زمني يوثق به الفريق.",
      sections: [
        {
          heading: "تسجيل لا يصنع نسخاً مكررة",
          body: "فرق الاستقبال في جدة ودبي وحيدر آباد تفتح ملفاً ثانياً لنفس الشخص. البحث قبل الإنشاء وبيانات التواصل وتاريخ الزيارات يقلل التكرار.",
        },
        {
          heading: "سجل يفتحه الطبيب فعلاً",
          body: "يفشل برنامج المرضى عندما يكون أبطأ من الورق. يعرض الخط الزمني الزيارات والملاحظات والوصفات في ثوانٍ لمتابعات الحمل والأعصاب والاستشارات العامة.",
        },
        {
          heading: "المتابعة جزء من الملف لا من الدردشة",
          body: "الاستدعاءات ونتائج التحاليل ومواعيد المراجعة تعيش على ملف المريض لا في واتساب الاستقبال فقط.",
        },
      ],
      benefits: [
        { title: "خط زمني واحد", text: "زيارات وملاحظات وملفات وفواتير في ملف واحد." },
        { title: "ملفات مكررة أقل", text: "ابحث وطابق قبل إنشاء تسجيل جديد." },
        { title: "تسليم أكثر أماناً", text: "يرى الطبيب التالي نفس التاريخ الذي كتبه السابق." },
      ],
      faqs: [
        {
          question: "ماذا يشمل نظام إدارة المرضى؟",
          answer: "التسجيل والسجلات والملاحظات والوصفات والمرفقات وتاريخ الفوترة وتذكيرات المتابعة في ملف واحد.",
        },
        {
          question: "هل يمكن استيراد قوائم المرضى؟",
          answer: "نعم. نساعد العيادات على ترحيل بيانات المرضى الأساسية أثناء التشغيل.",
        },
        {
          question: "هل هذا للمستشفيات الكبيرة فقط؟",
          answer: "لا. تستخدمه العيادة الفردية وعيادات المستشفى الخارجية؛ وتضيف المستشفيات الأقسام والفروع فوقه.",
        },
      ],
      cta: "شاهد نظام المرضى في عرض",
    },
  },
};

export const solutionSlugs = Object.keys(solutions) as SolutionSlug[];
