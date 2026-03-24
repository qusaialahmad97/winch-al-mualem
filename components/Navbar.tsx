"use client"; // ضروري لاستخدام الـ State في Next.js

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const phone1 = "0790702217";
  const phone2 = "0787629992";
  const manager = "كباتن محترفين";

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-6 inset-x-0 z-50 max-w-7xl mx-auto px-4">
      <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-[2.5rem] px-6 py-4 flex items-center justify-between relative">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 md:w-12 md:h-12 shrink-0">
            <Image 
              src="/Logo_no_background.png" 
              alt="شعار ونش المعلم" 
              fill 
              className="object-contain"
            />
          </div>
          <div className="flex flex-col leading-none text-right">
            <Link href="/" className="text-lg md:text-2xl font-black tracking-tighter text-slate-900">
              ونش <span className="text-yellow-600">المعلم</span>
            </Link>
            <span className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mr-1 italic">بإدارة {manager}</span>
          </div>
        </div>
        
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-6 font-black text-slate-600 text-sm">
          <Link href="/" className="hover:text-yellow-600 transition-colors">الرئيسية</Link>
          <Link href="/car-towing" className="hover:text-yellow-600 transition-colors">سحب السيارات</Link>
          <Link href="/heavy-equipment" className="hover:text-yellow-600 transition-colors">نقل المعدات</Link>
          <Link href="/bucket-winch" className="hover:text-yellow-600 transition-colors">ونش سلة</Link>
          <Link href="/companies" className="hover:text-yellow-600 transition-colors font-bold text-slate-900">الشركات 💼</Link>
          <Link href="/gallery" className="hover:text-yellow-600 transition-colors">المعرض</Link>
        </div>

        {/* Action Buttons (Desktop & Mobile Small Version) */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex flex-col md:flex-row gap-2 font-mono">
            <a href={`tel:${phone1}`} className="bg-slate-900 text-white px-4 py-2 rounded-xl font-black text-[10px] md:text-xs hover:bg-yellow-600 transition-all text-center italic tracking-tighter">
              {phone1}
            </a>
            <a href={`tel:${phone2}`} className="bg-yellow-500 text-slate-950 px-4 py-2 rounded-xl font-black text-[10px] md:text-xs hover:bg-slate-900 hover:text-white transition-all text-center italic tracking-tighter">
              {phone2}
            </a>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2 text-slate-900 focus:outline-none"
          >
            {isOpen ? (
              <span className="text-2xl font-bold">✕</span> // أيقونة الإغلاق
            ) : (
              <div className="space-y-1.5">
                <div className="w-6 h-1 bg-slate-900 rounded"></div>
                <div className="w-6 h-1 bg-yellow-500 rounded"></div>
                <div className="w-4 h-1 bg-slate-900 rounded"></div>
              </div>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 bg-white/95 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-[2rem] p-8 lg:hidden flex flex-col gap-6 text-center font-black text-slate-900 text-xl animate-in fade-in slide-in-from-top-4 duration-300">
            <Link href="/" onClick={toggleMenu} className="hover:text-yellow-600">الرئيسية</Link>
            <Link href="/car-towing" onClick={toggleMenu} className="hover:text-yellow-600">سحب السيارات</Link>
            <Link href="/heavy-equipment" onClick={toggleMenu} className="hover:text-yellow-600">نقل المعدات</Link>
            <Link href="/bucket-winch" onClick={toggleMenu} className="hover:text-yellow-600">ونش سلة</Link>
            <Link href="/companies" onClick={toggleMenu} className="hover:text-yellow-600 text-yellow-600">خدمات الشركات 💼</Link>
            <Link href="/gallery" onClick={toggleMenu} className="hover:text-yellow-600">المعرض</Link>
            
            {/* Mobile Call Buttons */}
            <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-slate-100">
               <a href={`tel:${phone1}`} className="bg-slate-900 text-white py-4 rounded-2xl font-mono">{phone1}</a>
               <a href={`tel:${phone2}`} className="bg-yellow-500 text-slate-950 py-4 rounded-2xl font-mono">{phone2}</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}