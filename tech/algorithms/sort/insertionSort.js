function insertionSort(A) {
  const len = A.length;

  for(let i = 0; i < len; i++) {
    /* storing current element whose left side is checked for its correct position */
    const temp = A[i];
    let j = i;

    /* check whether the adjacent element in left side is greater or less than the current element. */
    while(j > 0 && temp < A[j - 1]) {

      // moving the left side element to one position forward.
      A[j] = A[j - 1];
      j = j - 1;
    }

    // moving current element to its  correct position.
    A[j] = temp;
  }

  return A;
}

const arr = [5, 9, 2, 3];

const sorted = insertionSort(arr);

console.log('sorted --->', sorted);