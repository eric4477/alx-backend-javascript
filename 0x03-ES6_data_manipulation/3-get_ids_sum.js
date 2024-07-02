const getStudentIdsSum = (students) => students.reduce((accum, cur) => accum + cur.id, 0);

export default getStudentIdsSum;
