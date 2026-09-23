const Loading = () => {
  return (
    <main className="min-h-screen bg-base-200/40">

      {/* Hero Section Skeleton */}
      <section className="relative overflow-hidden border-b border-base-200 bg-base-100">
        {/* Background decoration */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-secondary/5 blur-3xl" />

        <div className="container relative mx-auto px-4 py-16 sm:py-20">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">

            {/* Badge */}
            <div className="skeleton h-9 w-40 rounded-full" />

            {/* Title */}
            <div className="mt-6 space-y-3">
              <div className="skeleton mx-auto h-12 w-80 rounded-lg sm:h-14 sm:w-125" />
              <div className="skeleton mx-auto h-12 w-64 rounded-lg sm:h-14 sm:w-80" />
            </div>

            {/* Description */}
            <div className="mt-6 w-full max-w-2xl space-y-2">
              <div className="skeleton mx-auto h-4 w-full max-w-xl rounded-md" />
              <div className="skeleton mx-auto h-4 w-5/6 max-w-lg rounded-md" />
            </div>

            {/* App Count */}
            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-base-300 bg-base-100 p-3 shadow-sm">
              <div className="skeleton h-10 w-10 rounded-xl" />

              <div className="space-y-2">
                <div className="skeleton h-3 w-24 rounded" />
                <div className="skeleton h-5 w-20 rounded" />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Apps Section */}
      <section className="container mx-auto px-4 py-12 sm:py-16">

        {/* Section Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          <div className="space-y-3">
            {/* Small heading */}
            <div className="skeleton h-4 w-32 rounded" />

            {/* Main heading */}
            <div className="skeleton h-9 w-56 rounded-lg" />

            {/* Description */}
            <div className="skeleton h-4 w-72 rounded-md" />
          </div>

          {/* App count badge */}
          <div className="skeleton h-10 w-40 rounded-full" />
        </div>


        {/* Apps Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-base-200 bg-base-100 p-4 shadow-sm"
            >

              {/* Image */}
              <div className="skeleton h-48 w-full rounded-xl" />

              {/* Content */}
              <div className="mt-5 space-y-3">

                {/* Title */}
                <div className="skeleton h-6 w-3/4 rounded-md" />

                {/* Description */}
                <div className="space-y-2">
                  <div className="skeleton h-3 w-full rounded" />
                  <div className="skeleton h-3 w-5/6 rounded" />
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between pt-3">
                  <div className="skeleton h-8 w-20 rounded-lg" />
                  <div className="skeleton h-8 w-24 rounded-lg" />
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
};

export default Loading;