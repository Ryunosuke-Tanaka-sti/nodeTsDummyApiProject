import { testType } from "../types/testType";

const dummyData: testType[] = [
  {
    id: 0,
    text: "dummy1",
    done: false,
  },
  {
    id: 1,
    text: "dummy2",
    done: false,
  },
  {
    id: 2,
    text: "dummy3",
    done: false,
  },
];
type ITest = {
  test: "test";
};
export class TestService {
  public test = async (): Promise<ITest> => {
    await new Promise((resolve) => resolve("test"));
    return { test: "test" };
  };
  public getData = async (id: number): Promise<testType | undefined> => {
    const returnData: testType | undefined = dummyData.find(
      (value) => value.id == id
    );
    await new Promise((resolve) => resolve("test"));
    return returnData;
  };
  public getAllData = async (): Promise<testType[] | undefined> => {
    await new Promise((resolve) => resolve("test"));
    return dummyData;
  };
  public createData = async (data: Omit<testType, "id">): Promise<testType> => {
    await new Promise((resolve) => resolve("test"));
    // ここは作成処理・情報が重複している場合とかも対応ありけり
    return { id: 4, ...data };
  };
  public editData = async (data: testType): Promise<void> => {
    await new Promise((resolve) => resolve("test"));
    // ここは更新処理・情報がない場合はエラーを返す必要あり
    // 暫定として一致するidがない場合は処理失敗を投げる
    const returnData: testType | undefined = dummyData.find(
      (value) => value.id == data.id
    );
    if (!returnData) throw new Error("一致するid情報がありません");
  };
  public deleteData = async (id: number): Promise<void> => {
    await new Promise((resolve) => resolve("test"));
    const returnData: testType | undefined = dummyData.find(
      (value) => value.id == id
    );
    if (!returnData) throw new Error("一致するid情報がありません");
  };
}
