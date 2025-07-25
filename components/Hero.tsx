'use client';

import Link from 'next/link';
import Image from 'next/image';
import MiamiSkyline from '@/public/leadspace.jpeg'; // adjust path if needed

export default function Hero() {
  return (
    <section className="relative h-[600px] w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url('/leadspace.jpeg')` }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Floating content */}
      <div className="relative z-10 text-center max-w-3xl px-6 text-white">
        <p className="text-xl mb-6 font-medium drop-shadow">
          311 Miami-Dade County Prediction empowers residents and officials by
          providing predictive insights into how long common service requests are likely
          to take—based on real county data. Know what to expect before you submit.
        </p>
        <Link
          href="/estimate"
          className="inline-block bg-[#003366] text-white px-6 py-3 rounded hover:bg-[#002244] transition font-semibold"
        >
          Estimate the Time of Your Request
        </Link>
      </div>
    </section>
  );
}
