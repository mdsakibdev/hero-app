import { IAppType } from '@/typescript/app.type';
import Image from 'next/image';


export interface IAppProps {
    app: IAppType
}

const AppCard = ({app}: IAppProps) => {
    return (
        
        <div className="card border border-base-200 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      
      <div className="card-body">

        {/* Top Section */}
        <div className="flex items-start gap-4">

          {/* App Image */}
          <div className="shrink-0">
            <Image 
            className="h-20 w-20 rounded-2xl object-cover"
            src={app.image}
              alt={app.title}
              width={80}
              height={80}
            />
          </div>

          {/* App Info */}
          <div className="min-w-0 flex-1">

            <h2 className="truncate text-lg font-bold text-base-content">
              {app.title}
            </h2>

            <p className="mt-1 text-sm text-base-content/60">
              {app.companyName}
            </p>

            {/* Rating */}
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="text-sm font-semibold">
                  {app.ratingAvg}
                </span>

                <span className="text-yellow-400">★</span>
              </div>

              <span className="text-xs text-base-content/50">
                ({app.reviews} reviews)
              </span>
            </div>

          </div>
        </div>

        {/* Description */}
        <p className="mt-4 line-clamp-2 text-sm leading-6 text-base-content/60">
          {app.description}
        </p>

        {/* App Information */}
        <div className="mt-4 flex items-center gap-3">

          <div className="badge badge-outline">
            {app.size} MB
          </div>

          <div className="badge badge-outline">
            {app.downloads} Downloads
          </div>

        </div>

        {/* Bottom */}
        <div className="card-actions mt-5 items-center justify-between">

          <div>
            <p className="text-xs text-base-content/50">
              Average Rating
            </p>

            <p className="text-lg font-bold">
              {app.ratingAvg}
              <span className="ml-1 text-sm text-yellow-400">
                ★
              </span>
            </p>
          </div>

          <button className="btn btn-primary rounded-full px-6">
            View Details
          </button>

        </div>

      </div>
    </div>


    );
};

export default AppCard;