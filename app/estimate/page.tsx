'use client';

import Head from 'next/head'; // ✅ Add this
import TopIssues from "@/components/TopIssues";
import PredictForm from "@/components/PredictForm";
import SearchByZip from "@/components/SearchByZip";
import Footer from "@/components/Footer";

export default function EstimatePage() {
  return (
    <>
      {/* ✅ Tab Title */}
      <Head>
  <title>311 Miami Dade | Estimate Request Time</title>
  <link rel="icon" href="/favicon.png" type="image/png" />
</Head>


      {/* 🔹 Hero Banner with full height and visible background image */}
      <section
        className="w-full bg-cover bg-center bg-no-repeat py-16"
        style={{ backgroundImage: "url('/leadspace.jpeg')" }}
      >
        <div className="max-w-3xl mx-auto text-center bg-white bg-opacity-80 p-6 rounded shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Estimate 311 Request Time</h2>
          <p className="text-gray-700">
            Use real county data to learn how long it typically takes to resolve issues in your ZIP code.
          </p>
        </div>
      </section>

      {/* 🔹 Light Blue Background for the rest of the page */}
      <div className="bg-blue-50 min-h-screen">
        <main className="p-8 max-w-4xl mx-auto">
          <div className="my-12">
            <PredictForm />
          </div>
          <div className="my-12">
            <SearchByZip />
          </div>
          <div className="my-12">
            <TopIssues />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
