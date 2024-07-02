function getListStudentIds(arr) {
  const idsArr = [];
  if (!Array.isArray(arr)) {
    return [];
  }
  arr.map((item) => idsArr.push(item.id));
  return idsArr;
}

export default getListStudentIds;
