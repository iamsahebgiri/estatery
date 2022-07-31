import React, { useState } from "react";
import Layout from "~/components/layout";
import { NextPageWithAuthAndLayout } from "~/utils/types";
import { Button } from "~/components/button";
import Property from "~/components/property";
import { useForm } from "react-hook-form";
import allProperties from "~/data/data.json";

const Home: NextPageWithAuthAndLayout = () => {
  const [properties, setProperties] = useState(allProperties);
  const { register, handleSubmit } = useForm();
  console.log(properties);
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mt-4 mb-8 flex flex-col sm:flex-row align-center justify-between">
        <h2 className="font-bold text-2xl sm:text-3xl">
          Search properties to rent ({properties.length})
        </h2>
        <form className="group relative mt-4 sm:mt-0">
          <input
            className="focus:ring-2 focus:ring-violet-500 border-0 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pr-10 ring-1 ring-violet-200 shadow-sm"
            type="text"
            aria-label="Search with search bar"
            placeholder="Search with search bar..."
          />
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="absolute right-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-violet-500"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
        </form>
      </div>
      <div className="bg-white p-4 my-8 rounded-md shadow-sm">
        <form
          className="grid grid-cols-1 items-center gap-6 sm:grid-cols-5"
          onSubmit={handleSubmit((data) => {
            const { location, price, when, propertyType } = data;
            let results = allProperties;
            if (location !== "") {
              results = results.filter((result) =>
                result.location.includes(location)
              );
            }

            if (price !== "any") {
              let [low, high] = price.split("-");
              results = results.filter(
                (result) =>
                  result.price >= Number(low) && result.price <= Number(high)
              );
            }
            if (propertyType !== "all") {
              results = results.filter(
                (result) => result.type === propertyType
              );
            }
            if (when !== "") {
              // 2022-07-31 --> 31/07/2022

              results = results.filter(
                (result) => result.when === when.split("-").reverse().join("/")
              );
            }

            console.log(when);

            setProperties(results);
          })}
        >
          <div className="flex flex-col">
            <label htmlFor="location" className="text-slate-500">
              Location
            </label>
            <input
              type="text"
              className="mt-2 w-full rounded-md bg-gray-100 border-transparent focus:bg-white focus:ring-0"
              {...register("location")}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="when" className="text-slate-500">
              When
            </label>
            <input
              type="date"
              {...register("when")}
              className="mt-2 w-full rounded-md bg-gray-100 border-transparent focus:bg-white focus:ring-0"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price" className="text-slate-500">
              Price
            </label>
            <select
              {...register("price")}
              className="mt-2 w-full rounded-md bg-gray-100 border-transparent focus:bg-white focus:ring-0"
            >
              <option value="any">Any</option>
              <option value="0-500">&lt; $500</option>
              <option value="500-2000">$500-$2000</option>
              <option value="2000-5000">$2000-$5000</option>
              <option value="5000-10000">$5000-$10000</option>
              <option value="10000-50000">$10000 +</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="propertyType" className="text-slate-500">
              Property type
            </label>
            <select
              {...register("propertyType")}
              className="mt-2 w-full rounded-md bg-gray-100 border-transparent focus:bg-white focus:ring-0"
            >
              <option value="all">All</option>
              <option value="Independent House">Independent House</option>
              <option value="Residential Apartment">
                Residential Apartment
              </option>
              <option value="Independent Floor">Independent Floor</option>
              <option value="Apartment Studio">Apartment Studio</option>
              <option value="Farm House">Farm House</option>
            </select>
          </div>
          <div className="mt-7">
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
      {properties.length === 0 && (
        <div className="max-w-lg mx-auto text-center py-24">
          <h2 className="text-lg font-medium text-gray-900">
            No Results found
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Currently we don&apos;t have the required data available
          </p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center lg:justify-items-stretch">
        {properties.slice(0, 50).map((property) => {
          return <Property key={property.id} property={property} />;
        })}
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
