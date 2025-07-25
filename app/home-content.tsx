'use client';

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function HomeContent(): JSX.Element {
  return (
    <>
      <main className="p-8 max-w-6xl mx-auto text-center">
        <section className="mb-12">
          <Image
            src="/leadspace.jpeg" // ⛳ Replace this with your hero image in /public
            alt="311 Miami-Dade"
            width={800}
            height={400}
            className="rounded-lg mx-auto"
          />

          <p className="text-lg mt-6 text-gray-700 max-w-2xl mx-auto">
            311 Miami-Dade County Prediction empowers residents and officials by providing predictive insights into how long common service requests are likely to take—based on real county data. Know what to expect before you submit.
          </p>

          <Link
  href="/estimate"
  className="inline-block mt-6 bg-[#003366] text-white px-6 py-3 rounded hover:bg-[#002244] transition"
>
  Estimate the Time of Your Request
</Link>

        </section>
      </main>
      <Footer />
    </>
  );
}
