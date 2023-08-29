export interface CategoryType {
  id: number;
  subject: string;
  learningStatus: "Ongoing" | "Finished";
  finishedCount: number;
  totalCount: number;
}
