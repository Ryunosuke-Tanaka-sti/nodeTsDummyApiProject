export type ITest = {
  test: string;
};

export class TestService {
  public test = async (): Promise<ITest> => {
    await new Promise((resolve) => resolve("test"));
    return { test: "test" };
  };
}
