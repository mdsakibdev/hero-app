import { IAppType } from '@/typescript/app.type';
import AppCard from '../shared/AppCard';
import Link from 'next/link';
import { getTrandingAppData } from '@/lib/apps';


const TrandingApps = async () => {
  const appData = await getTrandingAppData();

  return (
    <section className="relative overflow-hidden bg-base-200/40 py-20 sm:py-24">

      {/* Background Decoration */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container relative mx-auto px-4">

        {/* ================= Header ================= */}
        <div className="mx-auto max-w-2xl text-center">

          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <span className="text-base">Trending Appp Now</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Explore Our
            <span className="text-primary"> Trending Apps</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-base-content/60 sm:text-lg">
            Discover the most popular apps loved by our community.
            Find powerful tools and exciting experiences in one place.
          </p>

        </div>


        {/* ================= Apps Grid ================= */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {appData
            .slice(0, 8)
            .map((app: IAppType, index: number) => (
              <AppCard
                key={app.id ?? index}
                app={app}
              />
            ))}

        </div>


        {/* ================= Bottom Button ================= */}
        <div className="mt-12 flex justify-center">

          <Link
            href="/apps"
            className="group inline-flex items-center gap-3 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-content shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
          >
            <span>View All Apps</span>

            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default TrandingApps;