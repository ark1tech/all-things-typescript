// Utility types for object types

type User = {
  id: string;
  name: string;
  age: number;
};

// Partial
type SomeProps = Partial<User>;
// Required
type AllProps = Required<User>;

// Omit
type OmitProps = Omit<User, 'id' | 'name'>;
// Pick
type PickProps = Pick<User, 'id' | 'name'>;

// Readonly
type ReadOnlyProps = Readonly<User>;

// Record (key value type)
const score: Record<string, number[]> = {
  john: [1, 2],
  jane: [3, 2]
};

// Combinations
type SomePickedProps = Partial<Pick<User, 'id' | 'name'>>;

