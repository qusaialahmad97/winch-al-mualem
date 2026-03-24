import { Metadata } from 'next';
import Image from "next/image";

// تحسين الـ SEO الخاص بصفحة سحب السيارات
export const metadata: Metadata = {
  title: 'سحب سيارات في عمان 24 ساعة | ونش المعلم الأردني',
  description: 'أفضل خدمة سحب سيارات في عمان والأردن. ونش قريب منك متاح 24 ساعة لسحب السيارات المعطلة والمصدومة بأمان واحترافية عالية وبأقل الأسعار.',
};

export default function CarTowing() {
  const phone1 = "0790702217";
  const phone2 = "0787629992";
  const manager = "كباتن محترفين";

  return (
    <main className="min-h-screen bg-[#fafafa] pt-40 pb-20 px-6 text-right" dir="rtl">
      <div className="max-w-7xl mx-auto">
        
        {/* مقدمة الصفحة */}
        <div className="max-w-4xl mx-auto mb-20 space-y-6">
          <h1 className="text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">
            خدمة سحب السيارات في عمان والأردن
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
            تعرضت سيارتك لعطل مفاجئ؟ هل تبحث عن ونش قريب منك في عمان؟ نحن في ونش المعلم نوفر لك خدمة سحب السيارات على مدار الساعة. نصلك في دقائق لسحب سيارتك المعطلة أو المصدومة باستخدام أحدث الرافعات الهيدروليكية لضمان حماية كاملة لمركبتك.
          </p>
        </div>
        
        {/* القسم الذي يحتوي على الخلفية الصورة h2.png */}
        <div className="relative rounded-[3.5rem] shadow-2xl shadow-slate-900/10 overflow-hidden min-h-[500px] flex items-center mb-16 border-4 border-white">
          
          {/* خلفية الصورة h2.png */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/h2.png" // تأكد من وجود هذه الصورة في مجلد public
              alt="ونش سحب سيارات عمان الأردن" 
              fill
              className="object-cover object-center"
              priority 
            />
            {/* طبقة تظليل لجعل النص واضحاً */}
            <div className="absolute inset-0 bg-slate-950/80 z-10" />
          </div>

          {/* محتوى القسم */}
          <div className="relative z-20 w-full p-12 md:p-20 flex flex-col items-center md:items-start text-white">
            <h2 className="text-4xl font-black mb-10 text-yellow-500 italic tracking-tight font-arabic">لماذا تختارنا لسحب سيارتك؟</h2>
            <ul className="space-y-6 text-xl md:text-2xl font-bold max-w-2xl text-slate-200">
              <li className="flex items-center gap-4">
                 <span className="text-green-400 text-3xl">✓</span>
                 سرعة استجابة فائقة نصلك أينما كنت في عمان خلال 15-20 دقيقة.
              </li>
              <li className="flex items-center gap-4">
                 <span className="text-green-400 text-3xl">✓</span>
                 نستخدم أحدث الأدوات لحماية السيارات الحديثة والمنخفضة.
              </li>
              <li className="flex items-center gap-4">
                 <span className="text-green-400 text-3xl">✓</span>
                 فريق محترف وخبير في التعامل مع كافة أنواع الأعطال والحوادث.
              </li>
            </ul>
          </div>
        </div>

        {/* أزرار الاتصال السريع */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 font-mono pt-8">
            <a 
              href={`tel:${phone1}`} 
              className="bg-yellow-500 text-slate-950 p-8 rounded-[2rem] text-3xl font-black text-center shadow-xl hover:-translate-y-1 transition-transform italic"
            >
              {phone1}
            </a>
            <a 
              href={`tel:${phone2}`} 
              className="bg-slate-950 text-white p-8 rounded-[2rem] text-3xl font-black text-center shadow-xl hover:-translate-y-1 transition-transform italic"
            >
              {phone2}
            </a>
        </div>

      </div>
    </main>
  );
}