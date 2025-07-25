import Link from "next/link";
import Image from "next/image";
import config from "@/config";

const Header = () => {
  return (
    <>
      <header className="bg-[#003366] py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Miami-Dade Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="text-white font-bold text-xl tracking-wide">
              311 Miami-Dade
            </span>
          </Link>

          <div className="flex items-center gap-4 ml-auto">
            <Link
              href="/estimate"
              className="bg-white text-[#003366] font-semibold px-4 py-2 rounded hover:bg-gray-100 transition"
            >
              Estimate the Time of Your Request
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage: 'url("/miami-skyline.png")',
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Predict 311 Request Resolution Times
          </h1>
          <p className="text-lg md:text-xl">
            311 Miami-Dade County Prediction empowers residents and officials by
            providing predictive insights into how long common service requests are
            likely to take — based on real county data. <br />
            Know what to expect before you submit.
          </p>
        </div>
      </section>
    </>
  );
};

export default Header;
