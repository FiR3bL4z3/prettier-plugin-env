export type TransformFn<T> = (nodes: T[]) => T[];
export type ConditionalTransformFn<T> = {
  condition: boolean;
  transform: TransformFn<T>;
};

export type Transformer<T> = TransformFn<T> | ConditionalTransformFn<T>;

export const transform = <T>(ast: T[], transformFns: Transformer<T>[]) => {
  return transformFns.reduce((acc, fn) => {
    if ("condition" in fn) {
      return fn.condition ? fn.transform(acc) : acc;
    }
    return fn(acc);
  }, ast);
};
