export type testType = {
  id: number;
  text: string;
  done: boolean;
};

export const isTestType = (data: testType): data is testType =>
  "id" in data && "text" in data && "done" in data;
