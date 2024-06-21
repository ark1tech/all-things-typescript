// Other useful cases

// NonNullable (removes null or undefined)
type UnsureString = string | null | undefined;
type SureString = NonNullable<UnsureString>;

// Promise & Awaited
type PromiseString = Promise<string>;
type Result = Awaited<PromiseString>;

// Strings
type UpperCaseString = Uppercase<"a" | "b">
type LowerCaseString = Lowercase<UpperCaseString>
type CapitalCaseString = Capitalize<"cat" | "dog">
type Uncapitalize = Capitalize<CapitalCaseString>

// Applications:

// 1
const func = async () => {
  return { id: 123 };
};
type FuncResult = Awaited<Promise<typeof func>>;

// 2
const getUser = async (userId: number) => {
  if (userId === 0) return;
  if (userId === 1) return null;

  return {
    id: userId,
    name: 'JuanDLC'
  };
};
type UserType = ReturnType<typeof getUser>;
type AwaitedUserType = Awaited<UserType>;
type CertainUser = NonNullable<AwaitedUserType>;
type UserProps = Partial<CertainUser>;

// 3
const score: Record<string, number[]> = {
  john: [1, 2],
  jane: [3, 2]
};
