import bedRegular from "@iconify/icons-fluent/bed-24-regular";
import dropRegular from "@iconify/icons-fluent/drop-24-regular";
import heartRegular from "@iconify/icons-fluent/heart-24-regular";
import rectangleLandscapeRegular from "@iconify/icons-fluent/rectangle-landscape-24-regular";
import sparkleFilled from "@iconify/icons-fluent/sparkle-24-filled";
import { Icon } from "@iconify/react";

export type PropertyType = {
  id: number;
  streetName: string;
  streetSuffix: string;
  location: string;
  price: number;
  isPopular: boolean;
  beds: number;
  bathroom: number;
  when: string;
  area: string;
  type: string;
  image: string;
};

type PropertyProps = {
  property: PropertyType;
};

export default function Property({ property }: PropertyProps) {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="w-full h-60 rounded-t-lg object-cover"
          src={property.image}
          alt=""
        />
      </a>
      <div className="p-5 relative">
        {property.isPopular && (
          <div>
            <div className="flex px-2 py-2 absolute -top-5 -left-4 bg-violet-500 uppercase text-sm font-medium tracking-wide text-white rounded-lg rounded-bl-none">
              <Icon icon={sparkleFilled} className="h-5 w-5 text-white mr-1" />
              <div>Popular</div>
            </div>
            <div className="absolute -left-4 top-4 h-0 w-0 border-t-0 border-r-[1rem] border-b-[1rem] border-l-0 border-t-transparent border-r-violet-600 border-b-transparent border-l-transparent"></div>
          </div>
        )}

        <div className="flex items-start justify-between mt-2">
          <div>
            <div className="flex items-center">
              <h2 className="text-3xl font-bold tracking-tight text-violet-600">
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 0,
                }).format(property.price)}
              </h2>
              <div className="font-normal pl-1 text-slate-500 dark:text-gray-400">
                /month
              </div>
            </div>
            <a href="#">
              <h5 className="mb-2 mt-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {property.streetName} {property.streetSuffix}
              </h5>
            </a>
          </div>
          <button className="inline-flex items-center justify-center p-2 text-sm rounded-full shadow-sm border-violet-200 border-2 text-violet-700 bg-white">
            <Icon icon={heartRegular} className="h-7 w-7 text-violet-600" />
          </button>
        </div>
        <p className="mb-3 font-normal text-slate-500 dark:text-gray-400">
          {property.location}
        </p>
        <ul className="flex items-center justify-between border-t pt-4">
          <li className="flex items-center">
            <Icon icon={bedRegular} className="h-6 w-6 text-violet-600 mr-2" />
            <div>{property.beds} Beds</div>
          </li>
          <li className="flex items-center">
            <Icon icon={dropRegular} className="h-6 w-6 text-violet-600 mr-2" />
            <div>{property.bathroom} Bathrooms</div>
          </li>
          <li className="flex items-center">
            <Icon
              icon={rectangleLandscapeRegular}
              className="h-6 w-6 text-violet-600 mr-2"
            />
            <div>
              {property.area} m<sup>2</sup>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
