const mergeSort = (A) => {
  if (A.length === 1) {
    return A;
  }

  const middle = Math.floor(A.length / 2);
  const left = A.slice(0, middle);
  const right = A.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  const sortedArray = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      sortedArray.push(left[indexLeft]);
      indexLeft++;
    } else {
      sortedArray.push(right[indexRight]);
      indexRight++;
    }
  }

  return [...sortedArray, ...left.slice(indexLeft), ...right.slice(indexRight)]
}

const list = [5, 9, 2, 3];

const sorted = mergeSort(list);

console.log('sorted --->', sorted);