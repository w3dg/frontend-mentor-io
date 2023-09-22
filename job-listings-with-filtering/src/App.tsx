import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { unifyFields } from "./utils/unifyFields";

import { Job, JobWithUnifiedFields } from "./interfaces/Job";

import data from "../data.json";
import "./App.css";

function App() {
  const dataWithUnifiedFields: JobWithUnifiedFields[] = (data as Job[]).map((item) => {
    const newData = {
      ...item,
      filterStrings: unifyFields(item),
    };
    return newData;
  });

  const [jobs, setJobs] = useState<JobWithUnifiedFields[]>(dataWithUnifiedFields);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // toggleFilter function on the tags
  const toggleFilter = (filterStr: string): void => {
    // if not present, add it but not more than 5
    if (activeFilters.indexOf(filterStr) === -1) {
      if (activeFilters.length === 3) return;
      setActiveFilters([...activeFilters, filterStr]);
    } else {
      // else remove it
      setActiveFilters(activeFilters.filter((filter) => filter !== filterStr));
    }
  };

  // if the filterList includes the term for every filter applied, its a match
  const matchesAllFilters = (filterList: string[], filters: string[]): boolean => filters.every((element) => filterList.includes(element));

  useEffect(() => {
    if (activeFilters.length === 0) return setJobs(dataWithUnifiedFields);
    else {
      setJobs(dataWithUnifiedFields.filter(({ filterStrings }) => matchesAllFilters(filterStrings, activeFilters)));
    }
  }, [activeFilters]);

  return (
    <>
      <div className="w-full h-full pb-8 text-sm lg:text-md bg-cyan-50">
        <header className="bg-teal-600 header-bg h-28 lg:h-32"></header>

        {/* filter bar */}

        {activeFilters.length > 0 ? (
          <section className="relative">
            <div className="absolute w-10/12 -top-6 lg:max-w-3xl filter-bar">
              <div className="flex flex-wrap w-full h-12 gap-2 p-2 bg-white rounded-md shadow-2xl shadow-cyan-800">
                {/* active filters with buttons to remove them */}
                {activeFilters.map((f, index) => {
                  return (
                    <div key={index} className="flex justify-between overflow-hidden rounded-md">
                      <p className="px-2 py-1 font-bold text-teal-700 bg-cyan-100">{f}</p>
                      <button onClick={() => toggleFilter(f)} className="p-1 text-white bg-teal-700 hover:bg-teal-500">
                        <FiX />
                      </button>
                    </div>
                  );
                })}
                <div></div>
              </div>
            </div>
          </section>
        ) : (
          <></>
        )}
        <section className="w-10/12 mx-auto mt-16 lg:max-w-3xl">
          {jobs.map((job) => {
            return (
              <div className={"relative grid gap-4 p-4 bg-white rounded shadow-lg  lg:grid-cols-[4rem_2fr_2fr] mt-12 " + (job.featured && "border-l-2 border-l-teal-900")} key={job.id}>
                {/* picture */}
                <div className="absolute w-16 h-16 -top-8 left-4 lg:hidden">
                  <img src={job.logo} alt="" />
                </div>
                <div className="hidden my-auto lg:block">
                  <img src={job.logo} alt="" />
                </div>
                {/* info */}
                <section className="mt-4 lg:mt-0">
                  <div className="flex items-center justify-start gap-2">
                    <h1 className="p-2 font-bold text-teal-700">{job.company}</h1>
                    {job.new && <p className="px-2 py-1 text-xs text-white bg-teal-500 rounded-full">NEW</p>}
                    {job.featured && <p className="px-2 py-1 text-xs text-white bg-teal-900 rounded-full">FEATURED</p>}
                  </div>
                  <h2 className="px-2 text-lg font-bold lg:text-xl">{job.position}</h2>
                  <div className="flex items-center gap-2 px-2 text-gray-500">
                    <p>{job.postedAt}</p>
                    <div className="w-[5px] h-[5px] bg-gray-500 rounded-full my-3"></div>
                    <p>{job.contract}</p>
                    <div className="w-[5px] h-[5px] bg-gray-500 rounded-full my-3"></div>
                    <p>{job.location}</p>
                  </div>
                </section>
                <hr className="border-gray-300 lg:hidden" />
                {/* tags */}
                <div className="px-2 my-auto">
                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    {unifyFields(job).map((tag, index) => {
                      return (
                        <button onClick={() => toggleFilter(tag)} className="px-2 py-1 rounded-md bg-cyan-100 text-cyan-700 hover:bg-cyan-200" key={index}>
                          {tag}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}

export default App;
