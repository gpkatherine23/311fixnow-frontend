import Link from "next/link";
import Image from "next/image";
import config from "@/config";

const Footer = () => {
  return (
    <footer className="bg-[#003366] text-white border-t border-base-content/10">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/"
              aria-current="page"
              className="flex gap-3 justify-center md:justify-start items-center"
            >
              <Image
                src="/logoCopy.png"
                alt="Miami-Dade County Logo"
                width={80}
                height={80}
                className="rounded"
              />
              <strong className="font-extrabold tracking-tight text-lg">
                311 Miami-Dade
              </strong>
            </Link>

            <p className="mt-3 text-sm text-white/80">
              A Miami-Dade data platform to analyze and predict 311 service response times across neighborhoods.
            </p>
            <p className="mt-3 text-sm text-white/60">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>

          <div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold tracking-widest text-sm md:text-left mb-3">
                LINKS
              </div>
              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm text-white/60">
                <span className="pointer-events-none opacity-50">Support</span>
                <span className="pointer-events-none opacity-50">Pricing</span>
                <span className="pointer-events-none opacity-50">Blog</span>
                <span className="pointer-events-none opacity-50">Affiliates</span>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold tracking-widest text-sm md:text-left mb-3">
                LEGAL
              </div>
              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm text-white/60">
                <span className="pointer-events-none opacity-50">Terms of services</span>
                <span className="pointer-events-none opacity-50">Privacy policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
