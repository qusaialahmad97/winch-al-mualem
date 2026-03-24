import Image from "next/image";

export default function Home() {
  const phone1 = "0790702217";
  const phone2 = "0787629992";
  const whatsapp = "962790702217";
  const manager = "كباتن محترفين";

  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-yellow-400/30" dir="rtl">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[95vh] flex items-center pt-24 px-6 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/winch.png" 
            alt="ونش عمان - رقم ونش في عمان 24 ساعة" 
            fill 
            className="object-cover opacity-40 scale-105" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">
          <div className="text-right space-y-10">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-2.5 rounded-full text-yellow-500 text-sm font-black shadow-2xl backdrop-blur-md">
              بإدارة {manager} | ونش عمان الأردن 24 ساعة
            </div>
            
            <h1 className="text-7xl md:text-[6rem] font-black text-white leading-[1] tracking-tighter">
              ونش المعلم <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-300 via-yellow-500 to-yellow-600 font-arabic">
                أفضل ونش في عمان
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-xl leading-relaxed font-light">
              هل تبحث عن رقم ونش في عمان؟ نصلك فوراً لسحب السيارات. ونش عمان 24 ساعة جاهز لخدمتكم في كافة مناطق العاصمة بأفضل الأسعار.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-6 font-mono">
                <a href={`tel:${phone1}`} className="bg-yellow-500 text-slate-950 px-10 py-6 rounded-[2rem] font-black text-2xl transition-all hover:scale-105 text-center shadow-xl italic tracking-tighter">
                  {phone1}
                </a>
                <a href={`tel:${phone2}`} className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-6 rounded-[2rem] font-black text-2xl transition-all hover:bg-white/20 text-center italic tracking-tighter">
                  {phone2}
                </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MODERN SERVICES GRID */}
      <section id="services" className="py-32 px-6 max-w-7xl mx-auto text-right">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-sm font-black text-yellow-600 uppercase tracking-[0.4em]">خدمات ونش سيارات عمان</h2>
          <p className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter italic text-center">احترافية في كل مهمة</p>
          <div className="h-1.5 w-24 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: "🚚", title: "نقل سيارات عمان", desc: "أفضل خدمة ونش سيارات عمان لنقل المركبات المعطلة والمصدومة بأمان تام.", dark: true },
            { icon: "📦", title: "نقل البضائع", desc: "نقل البضائع والحمولات بمهنية عالية مع ضمان سلامة المنقولات." },
            { icon: "🏗️", title: "نقل المعدات الثقيلة", desc: "متخصصون في نقل المعدات الثقيلة والآليات الضخمة باستخدام أحدث الكرينات." },
            { icon: "🆘", title: "ونش عمان 24 ساعة", desc: "مساعدة طريق فورية في أي وقت. اتصل الآن على رقم ونش عمان للحصول على دعم سريع.", yellow: true },
            { icon: "🪟", title: "تنظيف واجهات زجاجية", desc: "نقدم خدمات ونش سلة مخصص لتنظيف الواجهات الزجاجية للمباني المرتفعة." },
            { icon: "🏗️", title: "ونش سلة للارتفاعات", desc: "ونش سلة متخصص لجميع الارتفاعات مع فريق آمن ومحترف." }
          ].map((service, idx) => (
            <div key={idx} className={`${service.dark ? 'bg-slate-900 text-white' : service.yellow ? 'bg-yellow-500 text-slate-900' : 'bg-white text-slate-900'} rounded-[3rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl transition-all hover:-translate-y-2 group`}>
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className={`text-2xl font-black mb-4 ${service.dark ? 'text-yellow-500' : ''}`}>{service.title}</h3>
              <p className={`${service.dark ? 'text-slate-400' : 'text-slate-500'} leading-relaxed font-medium`}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. THE 6 PICTURES GALLERY */}
      <section className="py-24 bg-white px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-sm font-black text-yellow-600 uppercase tracking-[0.4em] mb-4 text-center">معرض أعمال ونش المعلم</h2>
          <p className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter text-center">المعلم في الميدان</p>
          <div className="h-1.5 w-24 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="relative h-[400px] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl group transition-all">
              <Image 
                src={`/${num}.png`} 
                alt={`ونش سيارات عمان - ونش عمان الاردن رقم ${num}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                 <span className="text-white font-black tracking-widest text-lg">ونش المعلم</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SEO DEEP CONTENT */}
      <section className="py-20 bg-slate-50 px-6">
        <div className="max-w-5xl mx-auto text-right space-y-8">
          <h2 className="text-3xl font-black text-slate-900 underline decoration-yellow-500 underline-offset-8">رقم ونش عمان الموثوق</h2>
          <p className="text-xl text-slate-600 leading-[2] font-medium">
            نحن في ونش المعلم نفخر بتقديم أسرع رقم ونش في عمان لخدمتكم فوراً. إذا كنت عالقاً وتبحث عن ونش في عمان أو ونش قريب مني، فإن فريقنا الموزع في ونش البيادر عمان و ونش عمان القويسمة جاهز للتحرك. خدمتنا تشمل ونش نقل سيارات عمان و ونش كرين عمان لجميع الأحمال. نوفر لك رقم ونش عمان يعمل كـ ونش عمان 24 ساعة طوال أيام الأسبوع. اتصل بنا الآن للحصول على أفضل ونش سيارات عمان بأسعار منافسة جداً.
          </p>
        </div>
      </section>

      {/* 5. MANAGEMENT & CTA */}
      <section className="py-24 px-6 bg-slate-950 text-white text-center">
          <h2 className="text-5xl font-black tracking-tighter mb-12 italic">إدارة الكباتن المحترفين</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 font-mono">
            <a href={`tel:${phone1}`} className="w-full md:w-auto bg-yellow-500 text-slate-950 px-12 py-8 rounded-[2.5rem] text-4xl font-black hover:scale-105 shadow-2xl transition-all tracking-tighter">
              {phone1}
            </a>
            <a href={`tel:${phone2}`} className="w-full md:w-auto bg-white/10 text-white px-12 py-8 rounded-[2.5rem] text-4xl font-black hover:bg-white/20 shadow-2xl transition-all tracking-tighter">
              {phone2}
            </a>
          </div>
      </section>

{/* 6. CLEAN FOOTER */}
      <footer className="bg-slate-950 text-white pt-20 pb-12 px-6 border-t border-white/5 text-right">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 border-b border-white/5 pb-16">
          <div className="space-y-6 flex flex-col items-center md:items-start">
            
            {/* الشعار في الفوتر - تم تكبير الحجم هنا */}
            <div className="relative w-48 h-48 md:w-56 md:h-56">
               <Image 
                 src="/Logo_no_background.png" 
                 alt="ونش المعلم Logo" 
                 fill 
                 className="object-contain" 
               />
            </div>

            <div className="text-center md:text-right space-y-2">
              <div className="text-5xl font-black tracking-tighter text-yellow-500 italic underline underline-offset-8">
                ونش المعلم
              </div>
              <p className="text-slate-400 text-xl tracking-wide italic">
                خدمة ونش سيارات عمان الأسرع والأكثر أماناً.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4 text-slate-600 font-mono text-lg">
             <span className="tracking-widest uppercase italic">winchalmualem.com</span>
             <span className="tracking-widest uppercase italic">Amman, Jordan</span>
          </div>
        </div>
        
        <p className="text-center pt-8 text-[10px] text-slate-800 font-black tracking-[0.5em] uppercase">
          Designed by Qusai Ahmad
        </p>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a href={`https://wa.me/${whatsapp}`} className="fixed bottom-10 left-10 z-[70] bg-[#25D366] text-white py-6 px-10 rounded-full shadow-[0_20px_60px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all flex items-center gap-5 font-black text-2xl border-4 border-white/20 backdrop-blur-sm">
         أرسل موقعك (GPS) 📍
      </a>
    </main>
  );
}