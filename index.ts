import { DependencyList, useEffect } from "react";

export function useAsyncEffect(
  effect: () => Promise<any>,
  deps?: DependencyList
) {
  useEffect(() => {
    const promise = effect();
    return () => {
      promise.then((cleanup) => {
        if (cleanup == null) {
          return;
        }
        cleanup();
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
