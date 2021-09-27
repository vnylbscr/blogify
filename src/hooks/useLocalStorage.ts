import { useState } from 'react';

/**
 *
 * @param key to be add to local storage
 * @default empty string
 * @param initialValue initial value for the key
 * @returns value
 * @returns function that for update it
 *
 *
 */
const useLocalStorage = <T>(key: string, initialValue: T) => {
   const [item, setItem] = useState<T>(() => {
      try {
         const item = localStorage.getItem(key);
         return item ? JSON.parse(item) : initialValue;
      } catch (error) {
         console.log(error);
         return initialValue;
      }
   });

   const setValue = (value: T | ((value: T) => T)) => {
      try {
         const valueToStore = value instanceof Function ? value(item) : value;
         setItem(valueToStore);
         window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
         console.log(error);
      }
   };

   return [item, setValue] as const;
};

export default useLocalStorage;
