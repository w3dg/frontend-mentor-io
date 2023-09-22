import { Job } from "../interfaces/Job";

import { unifyFields } from "./unifyFields";

export default function getAllFilters(jobs: Job[]): string[] {
  return jobs.reduce((accumulator: string[], current: Job): string[] => {
    const uniqueFiltersSet = new Set(accumulator.concat(unifyFields(current)));
    return Array.from(uniqueFiltersSet);
  }, []);
}
