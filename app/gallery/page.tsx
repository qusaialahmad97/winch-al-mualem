import Image from "next/image";

export default function GalleryPage() {
  const images = [1, 2, 3, 4, 5, 6];

  return (
    <main className="min-h-screen bg-[#fafafa] pt-40 pb-20 px-6" dir="rtl">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter">معرض الصور</h1>
        <p className="text-xl text-slate-500 italic font-light">توثيق لعمليات ونش المعلم في الميدان - سرعة، أمان، واحترافية</p>
        <div className="h-2 w-32 bg-yellow-500 mx-auto mt-8 rounded-full shadow-lg shadow-yellow-500/20"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {images.map((num) => (
          <div key={num} className="relative h-[450px] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl group transition-all hover:shadow-yellow-500/10">
            <Image 
              src={`/${num}.png`} 
              alt={`صورة المعرض ${num}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-10">
              <span className="text-white font-black text-xl border-b-2 border-yellow-500 pb-2 tracking-widest">ونش المعلم الاحترافي 🚛</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}