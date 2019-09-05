import {MapperFunctionType} from "./types";

export default function flip<A, B, C> (unction: MapperFunctionType<A, MapperFunctionType<B, C>>) {
  return function flipUnction (left: B) {
    return function flipUnctionValue (right: A): C {
      return unction(right)(left);
    };
  };
}
