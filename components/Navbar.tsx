import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const phone1 = "0790702217";
  const phone2 = "0787629992";
  const manager = "كباتن محترفين";

  return (
    <nav className="fixed top-6 inset-x-0 z-50 max-w-7xl mx-auto px-4">
      <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-[2.5rem] px-6 py-4 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          {/* تم استبدال الإيموجي بالشعار الخاص بك */}
          <div className="relative w-12 h-12 shrink-0">
            <Image 
              src="/Logo_no_background.png" 
              alt="شعار ونش المعلم" 
              fill 
              className="object-contain"
            />
          </div>
          <div className="flex flex-col leading-none text-right">
            <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter text-slate-900">
              ونش <span className="text-yellow-600">المعلم</span>
            </Link>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mr-1 italic text-center md:text-right font-sans">بإدارة {manager}</span>
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden lg:flex gap-4 font-black text-slate-600 text-sm">
          <Link href="/" className="hover:text-yellow-600 transition-colors">الرئيسية</Link>
          <Link href="/car-towing" className="hover:text-yellow-600 transition-colors">سحب السيارات</Link>
          <Link href="/heavy-equipment" className="hover:text-yellow-600 transition-colors">نقل المعدات</Link>
          <Link href="/bucket-winch" className="hover:text-yellow-600 transition-colors">ونش سلة</Link>
          <Link href="/companies" className="hover:text-yellow-600 transition-colors font-bold text-slate-900">الشركات 💼</Link>
          <Link href="/gallery" className="hover:text-yellow-600 transition-colors">المعرض</Link>
        </div>

        {/* Phone Numbers */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-3 font-mono">
          <a href={`tel:${phone1}`} className="bg-slate-900 text-white px-4 py-2 rounded-xl font-black text-[10px] md:text-xs hover:bg-yellow-600 transition-all text-center tracking-tighter italic">
            {phone1}
          </a>
          <a href={`tel:${phone2}`} className="bg-yellow-500 text-slate-950 px-4 py-2 rounded-xl font-black text-[10px] md:text-xs hover:bg-slate-900 hover:text-white transition-all text-center tracking-tighter italic">
            {phone2}
          </a>
        </div>

      </div>
    </nav>
  );
}