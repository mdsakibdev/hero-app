


const StatsSection = () => {
  return (
    <section className="bg-linear-to-r from-[#6D28D9] via-[#7C3AED] to-[#A855F7] py-5 sm:py-8 lg:py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted By Millions. Built For You
          </h2>
        </div>

        {/* Stats */}
        <div className="mt-5 md:mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-0">

          {/* Downloads */}
          <div className="text-center sm:border-r sm:border-white/20">
            <p className="text-xs font-normal text-white/70">
              Total Downloads
            </p>

            <h3 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
              29.6M
            </h3>

            <p className="mt-2 text-[11px] text-white/70">
              21% More Than Last Month
            </p>
          </div>

          {/* Reviews */}
          <div className="text-center sm:border-r sm:border-white/20">
            <p className="text-xs font-normal text-white/70">
              Total Reviews
            </p>

            <h3 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
              906K
            </h3>

            <p className="mt-2 text-[11px] text-white/70">
              46% More Than Last Month
            </p>
          </div>

          {/* Active Apps */}
          <div className="text-center">
            <p className="text-xs font-normal text-white/70">
              Active Apps
            </p>

            <h3 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
              132+
            </h3>

            <p className="mt-2 text-[11px] text-white/70">
              31 More Will Launch
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;