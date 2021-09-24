
/**
 * Make require field in T
 */
export type RequireField<T, K extends keyof T> = T & Required<Pick<T, K>>;

//*

export type Maybe<T> = T | null;

export type Await<T> = T extends Promise<infer U> ? U : T;

export type Size = {
   width: number;
   height: number;
};

export type Fn = () => void;

type Merto = Await<Promise<string>>;
export type VariantSize = 'small' | 'medium' | 'big' | 'huge';
export type ColorsKey = 'purple' | 'orange' | 'pink' | 'red' | 'blue';

export type ColorsWithKey = Record<ColorsKey, any>;
