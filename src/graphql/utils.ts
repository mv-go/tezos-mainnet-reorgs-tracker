function tuple<T1, T2>(data: [T1, T2]): typeof data
function tuple (data: Array<unknown>): unknown {
  return data
}

export {
  tuple,
}
