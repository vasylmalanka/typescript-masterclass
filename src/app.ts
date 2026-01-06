// Mapped Types
// Partial Type Implementation
type PartialType<T> = {
  [P in keyof T]?: T[P];
};
// Conditional Types
// Exclude Type Implementation
type ExcludeType<T, U> = T extends U ? never : T;
