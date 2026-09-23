import AppCard from '@/components/shared/AppCard';
import { getTrandingAppData } from '@/lib/apps';
import { IAppType } from '@/typescript/app.type';


const AllAppPage = async () => {
  const appData = await getTrandingAppData();

  return (
    
    <main className="min-h-screen bg-base-200/40">
      {/* Hero / Header Section */}
      <section className="relative overflow-hidden border-b border-base-200 bg-base-100">
        {/* Background decoration */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

        <div className="container relative mx-auto px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">

            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Explore Our Apps
            </div>

            {/* Title */}
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Discover
              <span className="text-primary"> Amazing Apps</span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-base-content/60 sm:text-lg">
              Explore our collection of powerful, useful and beautifully
              designed applications built to make your digital experience
              better.
            </p>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="container mx-auto px-4 py-12 sm:py-2">

        {/* Section Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Our Collection
            </p>

            <h2 className="text-2xl font-bold sm:text-3xl">
              All Applications
            </h2>

            <p className="mt-2 text-sm text-base-content/60">
              Browse all applications available on our platform.
            </p>
          </div>

          {/* Total apps */}
          <div className="badge badge-lg border-base-300 bg-base-100 px-4 py-4 shadow-sm">
            {appData.length} Applications
          </div>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {appData.map((app: IAppType, index: number) => (
            <AppCard
              key={app.id ?? index}
              app={app}
            />
          ))}
        </div>
      </section>
    </main>

  );
};

export default AllAppPage;