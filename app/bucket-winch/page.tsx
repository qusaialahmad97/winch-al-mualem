import { Metadata } from 'next';
import Image from "next/image";

// تحسين الـ SEO لخدمة ونش السلة
export const metadata: Metadata = {
  title: 'ونش سلة للإيجار في عمان | جميع الارتفاعات | ونش المعلم',
  description: 'نوفر خدمة ونش سلة مخصص لجميع الارتفاعات في عمان. تنظيف واجهات زجاجية، تركيب لوحات، وصيانة إنارة. فريق محترف وأسعار منافسة جداً.',
};

export default function BucketWinch() {
  const phone1 = "0790702217";
  const phone2 = "0787629992";

  return (
    <main className="min-h-screen bg-[#fafafa] pt-40 pb-20 px-6 text-right" dir="rtl">
      <div className="max-w-7xl mx-auto">
        
        {/* مقدمة الصفحة */}
        <div className="max-w-4xl mx-auto mb-20 space-y-6">
          <h1 className="text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tighter text-center md:text-right">
            ونش سلة لجميع الارتفاعات في عمان
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light text-center md:text-right">
            هل تحتاج إلى ونش سلة للعمل في المرتفعات؟ نحن في ونش المعلم نوفر لك رافعات سلة حديثة وآمنة لخدمتكم في تنظيف الواجهات الزجاجية، تركيب اللوحات الإعلانية، وأعمال الصيانة المرتفعة. نصلك في أي مكان في عمان مع طاقم خبير لضمان إنجاز العمل بأعلى معايير السلامة.
          </p>
        </div>
        
        {/* القسم الذي يحتوي على خلفية h3.png */}
        <div className="relative rounded-[3.5rem] shadow-2xl shadow-slate-900/10 overflow-hidden min-h-[500px] flex items-center mb-16 border-4 border-white">
          
          <div className="absolute inset-0 z-0">
            <Image 
              src="/h3.png" // تأكد من وضع الصورة h3.png في مجلد public
              alt="ونش سلة عمان الأردن" 
              fill
              className="object-cover object-center"
              priority 
            />
            <div className="absolute inset-0 bg-slate-950/80 z-10" />
          </div>

          <div className="relative z-20 w-full p-12 md:p-20 flex flex-col items-center md:items-start text-white">
            <h2 className="text-4xl font-black mb-10 text-yellow-500 italic tracking-tight font-arabic">لماذا تختار خدمة ونش سلة المعلم؟</h2>
            <ul className="space-y-6 text-xl md:text-2xl font-bold max-w-2xl text-slate-200">
              <li className="flex items-center gap-4">
                 <span className="text-green-400 text-3xl">✓</span>
                 توفر رافعات سلة تصل لارتفاعات شاهقة لتغطية كافة احتياجاتكم.
              </li>
              <li className="flex items-center gap-4">
                 <span className="text-green-400 text-3xl">✓</span>
                 التزام كامل بمعايير السلامة والأمان للعمال والمباني.
              </li>
              <li className="flex items-center gap-4">
                 <span className="text-green-400 text-3xl">✓</span>
                 مثالي لتنظيف الزجاج، تركيب اليفط، وصيانة كاميرات المراقبة.
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