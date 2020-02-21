export const convertArrToObj = (arr, title, value) => {
  return arr.reduce((obj, item) => {
    return {
      ...obj,
      [item[title]]: item[value],
    };
  }, {})
}