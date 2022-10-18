export type Report = {
  bug_id: number;
  description: string;
  created_by: string;
  status: boolean;
  date_created: string;
  date_resolved: string | null;
  resolved_by: string | null;
};
