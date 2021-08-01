/*

*/
export type RequireField<T, K extends keyof T> = T & Required<Pick<T, K>>;

//*

export type Maybe<T> = T | null;
