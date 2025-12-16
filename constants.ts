import { PromptData } from './types';

export const PROMPTS_DATA: PromptData[] = [
  {
    id: 1,
    category: "Social Media",
    title_en: "Modern Product Ad Post",
    title_ar: "تصميم منشور منتج عصري",
    image_url: "https://picsum.photos/400/300?random=1",
    prompt_text_en: "A high-end minimal social media post for a luxury skincare brand, featuring a gold serum bottle on a marble podium, soft lighting, pastel beige background, 8k resolution, photorealistic.",
    prompt_text_ar: "منشور تواصل اجتماعي عالي الجودة لعلامة تجارية فاخرة للعناية بالبشرة، يتميز بزجاجة سيروم ذهبية على منصة رخامية، إضاءة ناعمة، خلفية بيج باستيل، دقة 8k، واقعية.",
    tags: ["Instagram", "Luxury", "Minimalist"]
  },
  {
    id: 2,
    category: "Branding",
    title_en: "Tech Startup Logo Concept",
    title_ar: "مفهوم شعار شركة تقنية ناشئة",
    image_url: "https://picsum.photos/400/300?random=2",
    prompt_text_en: "Vector logo for a cyber security startup, abstract shield shape combined with circuit lines, neon blue and dark grey color palette, flat design, clean lines, scalable vector.",
    prompt_text_ar: "شعار فيكتور لشركة ناشئة في مجال الأمن السيبراني، شكل درع تجريدي مدمج مع خطوط الدوائر الإلكترونية، لوحة ألوان زرقاء نيون ورمادية داكنة، تصميم مسطح، خطوط نظيفة، فيكتور قابل للتطوير.",
    tags: ["Vector", "Logo", "Tech"]
  },
  {
    id: 3,
    category: "Cards",
    title_en: "Double-Sided Business Card",
    title_ar: "بطاقة عمل مزدوجة الوجه",
    image_url: "https://picsum.photos/400/300?random=3",
    prompt_text_en: "Professional business card design, matte black background with gold foil embossing text, modern sans-serif typography, QR code on back, elegant layout.",
    prompt_text_ar: "تصميم بطاقة عمل احترافية، خلفية سوداء غير لامعة مع نص ذهبي بارز، طباعة حديثة بخط سان سيريف، رمز QR في الخلف، تخطيط أنيق.",
    tags: ["Print Ready", "Elegant", "Card"]
  },
  {
    id: 4,
    category: "Web Design",
    title_en: "SaaS Landing Page Hero",
    title_ar: "واجهة صفحة هبوط لخدمة سحابية",
    image_url: "https://picsum.photos/400/300?random=4",
    prompt_text_en: "UI design for a project management dashboard landing page, isometric 3D illustration of analytics charts, glassmorphism elements, purple and white gradient, clean whitespace.",
    prompt_text_ar: "تصميم واجهة مستخدم لصفحة هبوط لوحة تحكم إدارة المشاريع، رسم توضيحي ثلاثي الأبعاد لمخططات التحليلات، عناصر زجاجية، تدرج أرجواني وأبيض، مساحات بيضاء نظيفة.",
    tags: ["UI/UX", "Web", "Dashboard"]
  },
  {
    id: 5,
    category: "Illustration",
    title_en: "Cyberpunk Character Art",
    title_ar: "شخصية سايبربانك فنية",
    image_url: "https://picsum.photos/400/300?random=5",
    prompt_text_en: "Portrait of a cyborg woman with neon glowing eyes, rain-slicked city background at night, cyberpunk aesthetic, synthwave colors, highly detailed digital painting.",
    prompt_text_ar: "بورتريه لامرأة سايبورغ بعيون نيون متوهجة، خلفية مدينة ممطرة في الليل، جماليات السايبربانك، ألوان سينثويف، رسم رقمي مفصل للغاية.",
    tags: ["Art", "Character", "Cyberpunk"]
  },
  {
    id: 6,
    category: "Social Media",
    title_en: "Coffee Shop Story Promo",
    title_ar: "قصة ترويجية لمقهى",
    image_url: "https://picsum.photos/400/300?random=6",
    prompt_text_en: "Instagram story layout for a cozy coffee shop, steaming latte art cup in focus, warm bokeh lights in background, handwritten overlay text 'Morning Brew', cozy atmosphere.",
    prompt_text_ar: "تخطيط قصة انستغرام لمقهى مريح، كوب لاتيه ساخن مع فن الرغوة في التركيز، أضواء بوكيه دافئة في الخلفية، نص مكتوب بخط اليد 'قهوة الصباح'، جو مريح.",
    tags: ["Story", "Coffee", "Warm"]
  },
  {
    id: 7,
    category: "Branding",
    title_en: "Eco-Friendly Packaging",
    title_ar: "تغليف صديق للبيئة",
    image_url: "https://picsum.photos/400/300?random=7",
    prompt_text_en: "Mockup of recycled cardboard packaging for organic soap, green leaf botanical illustrations, rustic texture, natural lighting, studio shot.",
    prompt_text_ar: "موك اب لتغليف من الورق المقوى المعاد تدويره للصابون العضوي، رسوم توضيحية نباتية لأوراق خضراء، ملمس ريفي، إضاءة طبيعية، لقطة استوديو.",
    tags: ["Packaging", "Eco", "Mockup"]
  },
  {
    id: 8,
    category: "Restaurant Menu",
    title_en: "Traditional-Modern Arabic Menu (Vertical)",
    title_ar: "قائمة طعام عربية أصيلة ومعاصرة ( بالطول )",
    image_url: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop",
    prompt_text_en: "Design a full Arabic restaurant menu poster with a traditional-modern fusion style, inspired exactly by the reference image. Vertical layout (A3 or 4:5 friendly). Background uses a warm beige / light parchment texture with subtle stains and patterns to give a classic food-menu feel. Color palette is dominated by beige, cream, dark red, and brown tones, creating a warm, appetizing atmosphere.\nThe layout is dense but well-organized, divided into multiple clear menu sections arranged vertically and in columns. Each section title is in bold Arabic typography with dark brown or deep red color, clearly separated using decorative red vertical price tags or pill-shaped red columns containing prices written vertically in white Arabic numerals.\nInclude illustrated or realistic food images near each section header for visual guidance, such as burgers, shawarma wraps, tea cups, fries, desserts, juices, and rice dishes. Images should be small, cleanly cut, and integrated naturally into the layout without overpowering the text.\nMenu sections must include (with exact Arabic titles):\n- \"قسم الساندوتشات\"\n- \"قسم الشاورما\"\n- \"قسم الوجبات\"\n- \"قسم المقبلات\"\n- \"قسم الشاي\"\n- \"قسم الإضافات\"\n- \"قسم الحلى\"\n- \"قسم الملك شيك\"\n- \"البكجات\"\n- \"قسم سلطة الفواكه\"\n- \"قسم الصحون\"\nEach section contains a list of items in Arabic with prices aligned vertically beside them inside red rounded rectangles. Typography is clean Arabic sans-serif for items, slightly bolder for section headers. Spacing is tight but readable, like a real fast-food or shawarma restaurant menu.\nAt the bottom center, add a bold circular badge or sticker shape in red with Arabic text reading exactly: \"لا تنسوا\". Below it, include a call-to-action line reading: \"الطلبات والتوصيل\" followed by: \"خليكم بالبيت نوصلكم لين عندك\". Add delivery icons (phone or scooter) in a simple flat illustration style.\nInclude a contact section at the bottom with multiple phone numbers aligned vertically, using small phone icons. Add branch/location notes in smaller Arabic text. Do not include any real brand logos; keep it generic.\nOverall style is traditional restaurant menu design, slightly modernized, busy but structured, print-ready, high resolution. No watermarks. All Arabic text must be accurate, sharp, and fully readable.",
    prompt_text_ar: "صمم ملصقًا لقائمة طعام مطعم عربي كاملة بأسلوب يجمع بين الأصالة والمعاصرة، مستوحى تمامًا من الصورة المرجعية. تصميم عمودي (مناسب لحجم A3 أو 4:5). الخلفية بلون بيج دافئ/ملمس ورق البرشمان الفاتح مع بقع ونقوش خفيفة لإضفاء طابع كلاسيكي على قوائم الطعام. تطغى درجات البيج والكريمي والأحمر الداكن والبني على لوحة الألوان، مما يخلق جوًا دافئًا وشهيًا.\n\nالتصميم كثيف لكنه منظم جيدًا، مقسم إلى عدة أقسام واضحة مرتبة عموديًا وفي أعمدة. عنوان كل قسم مكتوب بخط عربي غامق بلون بني داكن أو أحمر داكن، مفصول بوضوح باستخدام ملصقات أسعار عمودية حمراء مزخرفة أو أعمدة حمراء بيضاوية الشكل تحتوي على الأسعار مكتوبة عموديًا بأرقام عربية بيضاء.\n\nأضف صورًا توضيحية أو واقعية للأطعمة بالقرب من كل عنوان قسم للإرشاد البصري، مثل البرغر، ولفائف الشاورما، وأكواب الشاي، والبطاطس المقلية، والحلويات، والعصائر، وأطباق الأرز. يجب أن تكون الصور صغيرة، ومقطوعة بدقة، ومدمجة بسلاسة في التصميم دون أن تطغى على النص.\n\nأضف صورًا للأطعمة، سواء كانت توضيحية أو واقعية، بالقرب من عنوان كل قسم، لتسهيل القراءة، مثل البرغر، ولفائف الشاورما، وأكواب الشاي، والبطاطس المقلية، والحلويات، والعصائر، وأطباق الأرز. يجب أن تتضمن أقسام القائمة (بالعناوين العربية الدقيقة):\n- \"قسم الساندوتشات\"\n- \"قسم الشاورما\"\n- \"قسم المنافذ\"\n- \"قسم المقبلات\"\n- \"قسم الشاي\"\n- \"قسم الإضافات\"\n- \"قسم الحلى\"\n- \"قسم الملك شيك\"\n- \"البكجات\"\n- \"قسم أكلات الفواكه\"\n- \"قسم الصحون\"\nيحتوي كل قسم على قائمة بالسلع باللغة العربية مع أسعارها بشكل عمودي بجانبها داخل مستطيلات مستديرة باللون الأحمر. الطباعة هي عبارة عن لغة عربية نظيفة للعناصر، وأكثر جرأة قليلاً لرؤوس الأقسام. تكون المسافات ضيقة ولكن قابلة للقراءة، مثل قائمة مطاعم الوجبات السريعة أو الشاورما الحقيقية.\nفي الجزء السفلي الأوسط، أضف شارة دائرية عريضة أو شكل ملصق باللون الأحمر مع نص باللغة العربية يقرأ بالضبط: \"لا تنسوا\". أسفله، قم بتضمين عبارة تحث المستخدم على اتخاذ إجراء تقرأ: \"الطلبات والتوصيل\" متبوعة بـ: \"خليكم بالبيت نوصلكم لين عندك\". أضف أيقونات التوصيل (الهاتف أو السكوتر) بأسلوب توضيحي بسيط ومسطح.\nأضف قسمًا للاتصال في الأسفل يتضمن أرقام هواتف متعددة مرتبة عموديًا باستخدام أيقونات هواتف صغيرة. أضف ملاحظات عن الفروع/المواقع بخط عربي أصغر. لا تستخدم شعارات العلامات التجارية؛ اجعل التصميم عامًا.\n\nالنمط العام هو تصميم قائمة طعام مطعم تقليدي، مع لمسة عصرية، وتفاصيل كثيرة لكن منظمة، وجاهز للطباعة، وبدقة عالية. لا تستخدم علامات مائية. يجب أن يكون النص العربي دقيقًا وواضحًا ومقروءًا تمامًا.",
    tags: ["Menu", "Restaurant", "Arabic"]
  },
  // NEW ITEM - Horizontal Menu
  {
    id: 9,
    category: "Restaurant Menu",
    title_en: "Traditional-Modern Arabic Menu (Horizontal)",
    title_ar: "قائمة طعام عربية أصيلة ومعاصرة ( بالعرض )",
    // Image showing a table/landscape view for variety
    image_url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
    prompt_text_en: "A wide, horizontal layout Arabic restaurant menu poster, designed for A3 landscape printing (or 3:2 aspect ratio), with an ultra-high resolution (300 DPI, print-ready). The style is a traditional-modern fusion. The background uses a warm beige and light parchment texture with subtle vintage stains and classical patterns to create an appetizing, classic feel. The color palette is dominated by beige, cream, dark red, and deep brown tones.\nThe layout is dense but well-organized, spread horizontally across three to four main vertical columns to fill the wide frame. Each section header is in bold Arabic typography in dark brown or deep red, accompanied by small, cleanly cut, realistic illustrations for visual guidance (burgers, shawarma wraps, tea cups, fries, desserts, juices, rice dishes).\nThe menu sections must include these exact Arabic titles, distributed evenly across the horizontal columns:\n\"قسم الساندوتشات\", \"قسم الشاورما\", \"قسم الوجبات\", \"قسم المقبلات\", \"قسم الشاي\", \"قسم الإضافات\", \"قسم الحلى\", \"قسم الملك شيك\", \"البكجات\", \"قسم سلطة الفواكه\", \"قسم الصحون\".\nUnder each section, list items in clean Arabic sans-serif typography, with prices aligned vertically beside them inside decorative, pill-shaped red rounded rectangles with white Arabic numerals. Spacing is tight but readable.\nAt the bottom center, spanning the width of the footer area, include a bold circular red badge with the exact Arabic text: \"لا تنسوا\". Below it, add a prominent horizontal call-to-action line: \"الطلبات والتوصيل\" followed by: \"خليكم بالبيت نوصلكم لين عندك\", accompanied by simple flat illustration icons of a phone and a scooter. Below this, arrange multiple phone numbers and branch/location notes horizontally in smaller Arabic text along the bottom edge. No real brand logos. All Arabic text must be accurate, sharp, and fully readable for print.",
    prompt_text_ar: "ملصق قائمة طعام أفقي عريض لمطعم عربي، مصمم للطباعة على ورق A3 أفقي (أو بنسبة عرض إلى ارتفاع 3:2)، بدقة عالية (300 نقطة في البوصة، جاهز للطباعة). يمزج التصميم بين الأسلوبين التقليدي والمعاصر. تستخدم الخلفية لونًا بيجًا دافئًا وملمسًا خفيفًا يشبه ورق البرشمان مع لمسات عتيقة رقيقة ونقوش كلاسيكية لخلق إحساس كلاسيكي رائع. تهيمن درجات البيج والكريمي والأحمر الداكن والبني الغامق على لوحة الألوان.\n\nيتميز التصميم بكثافة محتواه وتنظيمه الدقيق، حيث يمتد أفقيًا عبر ثلاثة أو أربعة أعمدة رأسية رئيسية لملء الإطار العريض. كُتب عنوان كل قسم بخط عربي عريض باللون البني الداكن أو الأحمر الغامق، مصحوبًا برسومات توضيحية صغيرة وواضحة وواقعية للإرشاد البصري (البرغر، لفائف الشاورما، أكواب الشاي، البطاطس المقلية، الحلويات، العصائر، أطباق الأرز).\n\nيجب أن تتضمن أقسام القائمة هذه العناوين العربية الدقيقة، موزعة بالتساوي على الأعمدة الأفقية: \"السندويشات\"، \"الشاورما\"، \"الإضافات\"، \"الشاي\"، \"المقبلات\"، \"الحلويات\"، \"الميلك شيك\"، \"الوجبات الجاهزة\"، \"سلطة الفواكه\"، و\"الأطباق الرئيسية\".\n\nأسفل كل قسم، أدرج الأصناف بخط عربي واضح، مع وضع الأسعار بجانبها عموديًا داخل مستطيلات حمراء مزخرفة على شكل حبوب، بأرقام عربية بيضاء. يجب أن تكون المسافة بين الأسطر ضيقة ولكن واضحة.\n\nفي أسفل المنتصف، في منطقة التذييل، أضف شعارًا دائريًا أحمر عريضًا يحمل النص العربي الدقيق: \"لا تنسَ\". أسفل هذا الشعار، أضف عبارة تحث المستخدم على اتخاذ إجراء أفقية بارزة: \"الطلبات والتوصيل\"، متبوعة بـ \"ابقَ في المنزل، نحن نوصل إليك\"، مصحوبة بأيقونات بسيطة مسطحة للهاتف والدراجة النارية. أسفل ذلك، رتب أرقام الهواتف المتعددة وملاحظات الفروع/المواقع أفقيًا مع نص عربي أصغر على طول الحافة السفلية. لا يُسمح بشعارات العلامات التجارية. يجب أن يكون النص العربي دقيقًا وواضحًا ومقروءًا تمامًا عند الطباعة.",
    tags: ["Menu", "Restaurant", "Arabic", "Horizontal"]
  },
  // NEW ITEM - Sales Invoice
  {
    id: 10,
    category: "Notebooks",
    title_en: "Professional Sales Invoice",
    title_ar: "فاتورة بيع احترافية",
    image_url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
    prompt_text_en: `CREATE_IMAGE: TYPE: Static image SIZE: A4 vertical PURPOSE: Fully redesigned professional corporate sales invoice QUALITY: Ultra high-resolution, print-ready
STYLE: Layout: Modern corporate with clean geometric shapes Typography: Arabic sans-serif, bold headers, readable body text Visual hierarchy: Distinct sections with color highlights Overall feel: Elegant, premium, organized
COLORS: Background: Soft off-white Header: Deep navy blue Accent: Gold for highlights Secondary: Cool gray for tables and borders Highlight: Red (for invoice number only) Text: Charcoal
HEADER: Height: Medium Shape: Rounded top edges with subtle shadow Right side: Rounded rectangle → Logo placeholder Below: Company info (Arabic) - Name (bold) - Address - Phone - Email - Website Center: Floating gold badge → Text: "فاتورة بيع" (Arabic, bold, white) Below: Payment options checkboxes [ ] "نقداً" [ ] "آجل" Left side: Invoice Number: Label: "رقم الفاتورة:" Number: "{{INVOICE_NUMBER:0001}}" # Auto-increment placeholder Style: Red, bold Below: "التاريخ:"
CUSTOMER_SECTION: Layout: Modern card-style row Label: "مطلوب من الأخ/ الأخت:" Dots for filling: "……" Large horizontal spacing Followed by: "المحترم" Background: Very light gray with subtle rounded corners
TABLE: Style: Clean geometric table Borders: Soft gray lines Header row: Deep navy blue background, white text Columns: - التفاصيل - العدد - سعر الوحدة - القيمة الإجمالية Rows: Multiple empty rows Total column: Light gray background
TOTAL_SECTION: Box: Gold border with subtle shadow Text: "الإجمالي الكلي" (Arabic, bold) Background: White Text color: Deep navy blue
SIGNATURE_SECTION: Layout: Three aligned fields with lines Labels: - اسم المستلم: - التوقيع: - المبيعات:
SOCIAL_MEDIA_SECTION: Position: Bottom above footer Icons: Facebook | Instagram | Twitter (X) | TikTok | Snapchat | WhatsApp Icon style: Flat, monochrome, small Text placeholders next to each icon for usernames or numbers
FOOTER: Divider: Thin gold line Text: "استلمت البضاعة الموضحة أعلاه كاملة وسليمة" (Arabic, centered)
RULES:
Invoice number increments automatically from 0001
Red color only for invoice number
Customer section has large spacing for handwritten name
Dots only next to customer label for filling
No extra logos or watermarks
Fully redesigned, modern and elegant layout`,
    prompt_text_ar: `إنشاء صورة: النوع: صورة ثابتة، الحجم: A4 عمودي، الغرض: فاتورة مبيعات احترافية مُعاد تصميمها بالكامل للشركات، الجودة: دقة فائقة، جاهزة للطباعة

النمط: التخطيط: عصري للشركات بأشكال هندسية واضحة، الخط: عربي بدون serif، عناوين بارزة، نص مقروء، التسلسل الهرمي البصري: أقسام مميزة مع تمييز بالألوان، المظهر العام: أنيق، فاخر، منظم

الألوان: الخلفية: أبيض فاتح، العنوان: أزرق داكن، التمييز: ذهبي للتمييز، اللون الثانوي: رمادي فاتح للجداول والحدود، التمييز: أحمر (لرقم الفاتورة فقط)، النص: رمادي داكن

العنوان: الارتفاع: متوسط، الشكل: حواف علوية مستديرة مع ظل خفيف، الجانب الأيمن: مستطيل مستدير ← مكان الشعار، أسفل: معلومات الشركة (عربي) - الاسم (بارز) - العنوان - رقم الهاتف - البريد الإلكتروني - الموقع الإلكتروني، الوسط: شارة ذهبية عائمة ← النص: "فاتورة بيع" (عربي، بارز، أبيض)، أسفل: مربعات اختيار خيارات الدفع [ ] "دفع" [ ] "آجل"، الجانب الأيسر: رقم الفاتورة: Label: "رقم:" Number: "{{INVOICE_NUMBER:0001}}" # العنصر النائب للزيادة التلقائية النمط: أحمر، غامق أدناه: "التاريخ:"
CUSTOMER_SECTION: التخطيط: صف حديث على شكل بطاقة التسمية: "مطلوب من الأخ/ الأخت:" نقاط للحشو: "……" مسافة أفقية كبيرة يتبعها: "المحترم" الخلفية: رمادي فاتح جدًا مع زوايا مستديرة دقيقة
الجدول: النمط: جدول هندسي نظيف الحدود: خطوط رمادية ناعمة صف الرأس: خلفية زرقاء داكنة، نص أبيض الأعمدة: - التفاصيل - العدد - سعر الوحدة - القيمة الصفوف: عدة صفوف فارغة العمود الإجمالي: خلفية رمادية فاتحة
TOTAL_SECTION: المربع: حدود ذهبية مع ظل خفيف النص: "الإجمالي الكلي" (عربي، غامق) الخلفية: أبيض لون النص: أزرق داكن عميق
SIGNATURE_SECTION: التخطيط: ثلاثة حقول محاذية مع خطوط التسميات: - الاسم المستلم: - التوقيع: - الأدوات:
قسم وسائل التواصل الاجتماعي: الموقع: أسفل الصفحة، أعلى التذييل. الأيقونات: فيسبوك | إنستغرام | تويتر (X) | تيك توك | سناب شات | واتساب. نمط الأيقونات: مسطح، أحادي اللون، صغير. توجد خانات نصية بجوار كل أيقونة لأسماء المستخدمين أو الأرقام.
التذييل: الفاصل: خط ذهبي رفيع. النص: "الحقت الفائضة المغادرة كاملة وسليمة" (بالعربية، في المنتصف).
القواعد:
يزداد رقم الفاتورة تلقائيًا من 0001.
اللون الأحمر مخصص لرقم الفاتورة فقط.
يحتوي قسم العميل على مساحة كبيرة لكتابة الاسم بخط اليد.
نقاط فقط بجوار اسم العميل للتعبئة.
ممنوع إضافة شعارات أو علامات مائية إضافية.
تصميم جديد كليًا، عصري وأنيق.`,
    tags: ["Invoice", "Print", "Business"]
  }
];