import { useMutation } from '@apollo/client';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { DocumentNode } from 'graphql';

type Mutation = DocumentNode | TypedDocumentNode;

type ResultFunc = (exisiting: any, newData: any) => any;

const useMutationWithCache = <T = any, U = object>(
   Mutation: Mutation,
   mutationFieldName: string,
   updatedFieldName: string,
   resultFunc: ResultFunc
) => {
   const [mutation, { loading, data, error }] = useMutation<T, U>(Mutation, {
      update: (cache, { data }: Record<string, any>) => {
         if (data) {
            const newData = data[mutationFieldName];
            cache.modify({
               fields: {
                  [updatedFieldName]: (existData = []) => resultFunc(existData, newData),
               },
            });
         }
      },
   });

   return [mutation, { loading, data, error }];
};

export default useMutationWithCache;
