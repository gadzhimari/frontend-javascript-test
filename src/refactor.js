export const drawRating = (vote) => Math.ceil(vote / 20) || 1;

/*
 * Примечание. Если в задании имелось ввиду написать свою версию
 * поиска элемента в строке, то тогда это отрефакторенная версия
 * номер 2. Иначе 1 вариант.
 *
 */

// 1st version
// export const func = (str, a, b) => str ? Math.max(str.lastIndexOf(a), str.lastIndexOf(b)) : -1;

// 2nd version
export const func = (str, a, b) => {
  const iter = (rest, aIndex, bIndex) => {
    const length = rest.length - 1;
    if (aIndex === -1 && bIndex === -1 && length > 0) {
      const newAIndex = rest.substring(length, length + 1) === a ? length : aIndex;
      const newBIndex = rest.substring(length, length + 1) === b ? length : bIndex;
      return iter(rest.slice(0, -1), newAIndex, newBIndex);
    }
    return Math.max(aIndex, bIndex);
  }
  return iter(str, -1, -1);
}
