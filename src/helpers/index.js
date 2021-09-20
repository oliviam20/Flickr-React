export const formatQuery = (queryArr) => {
  return queryArr.split(' ').map(query => query.replace(/[^0-9a-z]/gi, '')).filter(query => query !== '').join(',');
}
