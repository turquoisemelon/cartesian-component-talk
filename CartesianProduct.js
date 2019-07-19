import { map, pipe, xprod, unnest, reduce, mergeAll } from "ramda"

export const cartesianProduct = ({ props }) => {
  const xproduct = reduce(pipe(xprod, map(unnest)), [[]])

  const parsedProps = Object.keys(props).reduce((acc, curr) => {
    return acc.concat([arr(props[curr]).map(v => ({ [curr]: v }))])
  }, [])

  return map(mergeAll, xproduct(parsedProps))
}