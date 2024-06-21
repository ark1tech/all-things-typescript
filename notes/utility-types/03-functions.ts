// Utility types for functions

type fx = (a: number, b: number) => number;

// ReturnType
type ReturnValue = ReturnType<fx>;

// Parameters (returns n-tuple of n types)
type Params = Parameters<fx>;
