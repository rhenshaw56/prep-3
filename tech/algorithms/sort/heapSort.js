const swap = (A, i, j) => {
  const temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}

const heapify = (A, N, i) => {
  // Find largest among root and children
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < N && A[left] > A[largest]) {
    largest = left;
  }
  if (right < N && A[right] > A[largest]) {
    largest = right;
  }

  // If root is not largest, swap with largest and continue heapifying
  if(largest !== i) {
    swap(A, i, largest);
    heapify(A, largest, N);
  }
}

const buildMaxHeap = (A, N) => {
  for (let i = 0; i <= Math.floor(N/2); i++) {
    heapify(A, N, i)
  }
}

const heapSort = (A, N) => {

  // Build max heap
  buildMaxHeap(A, N);
  // console.log('list', A);

  for (let j = N - 1; j > 0; j--) {

    swap(A, 0, j);
    heapify(A, j, 0);
  }

  return A;
}

const arr = [5, 9, 2, 3];

const sorted = heapSort(arr, arr.length);

console.log('sorted --->', sorted);