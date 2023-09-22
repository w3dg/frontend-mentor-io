import { Job } from "../interfaces/Job";

export function unifyFields(job: Job): string[] {
  let fields: string[] = [];
  fields.push(job.role);
  fields.push(job.level);
  fields = fields.concat(job.tools).concat(job.languages);
  return fields;
}
