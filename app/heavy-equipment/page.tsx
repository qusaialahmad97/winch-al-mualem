import { Metadata } from 'next';
import Image from "next/image";

// SEO Metadata for this specific page
export const metadata: Metadata = {
  title: 'نقل المعدات الثقيلة والآليات | ونش المعلم عمان',
  description: 'خدمة نقل المعدات الثقيلة ومولدات الكهرباء والرافعات في عمان وكافة أنحاء الأردن. ونش كرين متخصص ومعدات حديثة لضمان النقل الآمن وبأفضل الأسعار.',
};

export default function HeavyEquipment() {
  const phone1 = "0790702217";
  const phone2 = "0787629992";
  const manager = "كباتن محترفين";

  return (
    <main className="min-h-screen bg-[#fafafa] pt-40 pb-20 px-6 text-right" dir="rtl">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header and Intro */}
        <div className="max-w-4xl mx-auto mb-20 space-y-6">
          <h1 className="text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">
            نقل المعدات الثقيلة والآليات في عمان الأردن
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
            نوفر في ونش المعلم خدمة متخصصة لنقل الآليات الإنشائية والمعدات الثقيلة والضخمة باستخدام أحدث الرافعات وونش كرين محترف. نخدم شركات المقاولات والأفراد في كافة أنحاء المملكة بأسعار منافسة جداً والتزام تام بالمواعيد.
          </p>
        </div>
        
        {/* THIS IS THE SECTION YOU WANT TO CHANGE:
           We changed it from 'bg-slate-900' to 'relative' with an image background.
        */}
        <div className="relative rounded-[3.5rem] shadow-2xl shadow-slate-900/10 overflow-hidden min-h-[500px] flex items-center mb-16 border-4 border-white">
          
          {/* 1. THE BACKGROUND IMAGE (h1.png) */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/h1.png" // Path to your new image in the 'public' folder
              alt="Heavy Equipment Transport Background" 
              fill
              className="object-cover object-center"
              priority 
            />
            {/* Dark Overlay for readability: bg-slate-950/80 
               This applies a 80% dark tint over the image so white text stays sharp.
            */}
            <div className="absolute inset-0 bg-slate-950/80 z-10" />
          </div>

          {/* 2. THE CONTENT (The text from the image you uploaded) */}
          <div className="relative z-20 w-full p-12 md:p-20 flex flex-col items-center md:items-start text-white">
            <h2 className="text-4xl font-black mb-10 text-yellow-500 italic tracking-tight font-arabic">لماذا تختارنا لنقل معداتك؟</h2>
            <ul className="space-y-6 text-xl md:text-2xl font-bold max-w-2xl text-slate-200">
              <li className="flex items-center gap-4">
                 <span className="text-green-400 text-3xl">✓</span>
                 خبـرة عالية في التعامل مع الرافعات ومولدات الكهرباء والآليات الضخمة.
              </li>
              <li className="flex items-center gap-4">
                 <span className="text-green-400 text-3xl">✓</span>
                 التزام تام ومطلق بمواعيد التسليم والموقع المحدد.
              </li>
              <li className="flex items-center gap-4">
                 <span className="text-green-400 text-3xl">✓</span>
                 تأمين شامل وكامل على المعدات أثناء عملية النقل لضمان حقك.
              </li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
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