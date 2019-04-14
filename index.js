export default function flip (unction) {
  return function flipUnction (left) {
    return function flipUnctionValue (right) {
      return unction(right)(left);
    };
  };
}
