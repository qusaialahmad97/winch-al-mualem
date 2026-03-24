import { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
  title: 'خدمات الشركات والعقود السنوية | ونش المعلم عمان',
  description: 'نقدم عروضاً خاصة للشركات والمصانع في عمان. عقود سنوية لنقل السيارات والمعدات، خصومات حصرية، وأولوية في الوصول. شريككم اللوجستي الموثوق.',
};

export default function CompaniesPage() {
  const phone1 = "0790702217";
  const phone2 = "0787629992";

  return (
    <main className="min-h-screen bg-[#fafafa] pt-40 pb-20 px-6 text-right" dir="rtl">
      <div className="max-w-7xl mx-auto">
        
        {/* مقدمة الصفحة */}
        <div className="max-w-4xl mx-auto mb-20 space-y-6">
          <h1 className="text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tighter text-center md:text-right">
            خدمات الشركات والعقود السنوية
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light text-center md:text-right">
            في ونش المعلم، نفهم متطلبات قطاع الأعمال. لذلك صممنا باقات خاصة للشركات، معارض السيارات، والمصانع التي تحتاج إلى خدمات نقل دورية. نوفر لكم حلولاً لوجستية متكاملة تضمن سير عملكم دون انقطاع مع توفير مادي كبير.
          </p>
        </div>
        
        {/* القسم الرئيسي مع خلفية h4.png */}
        <div className="relative rounded-[3.5rem] shadow-2xl shadow-slate-900/10 overflow-hidden min-h-[550px] flex items-center mb-16 border-4 border-white">
          
          <div className="absolute inset-0 z-0">
            <Image 
              src="/h4.png" // تأكد من إضافة الصورة h4.png
              alt="خدمات الشركات ونش المعلم" 
              fill
              className="object-cover object-center"
              priority 
            />
            <div className="absolute inset-0 bg-slate-950/85 z-10" />
          </div>

          <div className="relative z-20 w-full p-12 md:p-20 flex flex-col items-center md:items-start text-white">
            <h2 className="text-4xl font-black mb-10 text-yellow-500 italic tracking-tight font-arabic">مميزات التعاقد مع ونش المعلم</h2>
            <ul className="space-y-6 text-xl md:text-2xl font-bold max-w-3xl text-slate-200">
              <li className="flex items-center gap-4">
                 <span className="text-yellow-500 text-3xl">✦</span>
                 خصومات حصرية تصل إلى 30% على العقود السنوية والدورية.
              </li>
              <li className="flex items-center gap-4">
                 <span className="text-yellow-500 text-3xl">✦</span>
                 أولوية قصوى في الاستجابة (نصلكم قبل الجميع) لضمان عدم تعطل أعمالكم.
              </li>
              <li className="flex items-center gap-4">
                 <span className="text-yellow-500 text-3xl">✦</span>
                 أنظمة دفع مرنة (شهري أو سنوي) مع فواتير رسمية وكشوفات دورية.
              </li>
              <li className="flex items-center gap-4">
                 <span className="text-yellow-500 text-3xl">✦</span>
                 فريق مخصص ومدرب للتعامل مع احتياجات الشركات والمعدات الحساسة.
              </li>
            </ul>
          </div>
        </div>

        {/* قسم دعوة للعمل (CTA) */}
        <div className="max-w-4xl mx-auto text-center bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100">
          <h3 className="text-3xl font-black text-slate-900 mb-6">اطلب عرض سعر مخصص لشركتك الآن</h3>
          <p className="text-lg text-slate-500 mb-10">تواصل معنا لمناقشة حجم أعمالك والحصول على باقة تناسب ميزانيتك.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono">
              <a 
                href={`tel:${phone1}`} 
                className="bg-yellow-500 text-slate-950 p-8 rounded-[2rem] text-3xl font-black text-center shadow-lg hover:scale-105 transition-transform italic"
              >
                {phone1}
              </a>
              <a 
                href={`tel:${phone2}`} 
                className="bg-slate-950 text-white p-8 rounded-[2rem] text-3xl font-black text-center shadow-lg hover:scale-105 transition-transform italic"
              >
                {phone2}
              </a>
          </div>
        </div>

      </div>
    </main>
  );
}