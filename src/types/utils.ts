/*

*/
export type RequireField<T, K extends keyof T> = T & Required<Pick<T, K>>;

//*

export type Maybe<T> = T | null;

export type Size = {
   width: number;
   height: number;
};

export type Fn = () => void;

export type VariantSize = 'small' | 'medium' | 'big' | 'huge';

type Type1<T> = T extends infer S ? S : 'never';

type GetTypeFromArray<T> = T extends Type1<infer U> ? U : T;

type IsString = GetTypeFromArray<string>;

type Merto = Type1<string>;

export type ColorsKey = 'purple' | 'orange' | 'pink' | 'red' | 'blue';

export type ColorsWithKey = Record<ColorsKey, any>;
