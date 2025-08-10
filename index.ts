function returnParams<Type>(param: Type): Type {
  return param;
}

const return1 = returnParams<string>('123');
const return2 = returnParams<number>(123);

const myParam: <T>(param: T) => T = (param) => param;

const myParam2 = function <U>(param: U): U {
  return param;
};

type ObjectType = {
  myParam: <V, X>(param: V, param2: X) => V | X;
};

type MyParam = <K>(param: K) => K;
