function swap(A, i, j) {
  let temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}

function partition(A, start, end) {
  let piv = A[start];
  let piv_pos = start;

  for (let j = start + 1; j <= end; j++) {
    if (A[j] < piv) {
      piv_pos++;
      swap(A, piv_pos, j);
    }
  }

   // put the pivot element in its proper place.
  swap(A, start, piv_pos);

  return piv_pos;
}

function quickSort(A) {
  if (A.length <= 1) {
    return A;
  }
  const pivot = A[0];
  const left = [];
  const right = [];
  for (let i = 1; i < A.length; i++) {
    if (A[i] < pivot) {
      left.push(A[i]);
    } else {
      right.push(A[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const a = quickSort([7,4,5,2]);

console.log(a)