/**
 * Sort a list of objects by date
 * @param {*} list - array of objects with date property
 */
export const sortListByDate = list => {
  const array = [...list];
  return array.sort(
    (a, b) =>
      // Sort by date
      new Date(b.date) - new Date(a.date)
  );
};
