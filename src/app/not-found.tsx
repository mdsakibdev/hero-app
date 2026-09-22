"use client"

import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-37.5 left-1/2 -translate-x-1/2 w-125 h-125 bg-blue-500/20 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* 404 */}
        <div className="relative inline-block mb-6">
          <h1 className="text-[120px] sm:text-[160px] font-black leading-none tracking-tighter bg-linear-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            404
          </h1>

          <div className="absolute -top-2 -right-5 sm:-right-8 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-xs text-slate-300 rotate-6">
            Oops!
          </div>
        </div>

        {/* Content */}
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">
          Page not found
        </h2>

        <p className="text-slate-400 max-w-md mx-auto leading-relaxed mb-8">
          The page you’re looking for doesn’t exist, has been moved, or
          might have been removed.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-950 font-semibold hover:bg-slate-200 transition-all duration-200"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-all duration-200"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        {/* Bottom Hint */}
        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-slate-500">
          <Search size={15} />
          <span>Try checking the URL or return to the homepage.</span>
        </div>
      </div>
    </main>
  );
}