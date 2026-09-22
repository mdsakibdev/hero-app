import Image from "next/image";
import heroImage from "@/assets/hero.png";
import googleIcon from "@/assets/googleIcon.png";
import appleIcon from "@/assets/appIcon.png";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7f8fa] pt-14 sm:pt-16 lg:pt-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Hero Content */}
        <div className="mx-auto max-w-3xl text-center">

          {/* Heading */}
          <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-[#172b3d] sm:text-4xl lg:text-[60px]">
            We Build
            <br />

            <span className="bg-linear-to-r from-[#7c3aed] to-[#a855f7] bg-clip-text text-transparent">
              Productive
            </span>{" "}
            Apps
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            At HERO.IO, we craft innovative apps designed to make everyday
            life simpler, smarter, and more exciting. Our goal is to turn your
            ideas into digital experiences that truly make an impact.
          </p>

          {/* Store Buttons */}
          <div className="mt-5 flex items-center justify-center gap-3">

            {/* Google Play */}
            <button
              className=" cursor-pointer flex items-center gap-3 rounded-md border border-gray-200 bg-white px-4 py-2.5 text-xs font-medium text-gray-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:px-5"
            >
              {/* Google Play Icon */}
              <Image src={googleIcon} alt="google Icon"/>
              <span className="font-bold text-sm">Google Play</span>
            </button>

            {/* App Store */}
            <button
              className=" cursor-pointer flex items-center gap-3 rounded-md border border-gray-200 bg-white px-4 py-2.5 text-xs font-medium text-gray-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:px-5"
            >
              {/* Apple Icon */}
              <Image src={appleIcon} alt="apple Icon"/>

              <span className="font-bold text-sm">App Store</span>
            </button>

          </div>
        </div>

        {/* Hero Image Area */}
        <div className="mx-auto mt-10 flex max-w-3xl justify-center sm:mt-10">
          {/* Phone Image */}
          <div className="relative z-10">
            <Image
              src={heroImage}
              alt="HERO.IO App"
              priority
              className="h-auto w-65 sm:w-[320px] lg:w-112.5"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;