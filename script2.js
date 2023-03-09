//внизу закомментирована пузырьковая сортировка для сравнения

const ArrayNumbers = [-81, 2, 7, 2, 41, 834, 354, 34, 33]; // mini

const ArrayNumbers2 = []; //stress

const ArrayNumbers3 = [-14, -10, -1, 15, 66, 78, 141]; //sortedMas

for (let i = 0; i < 100000; i++) {
  ArrayNumbers2.push(Math.floor(Math.random() * (100000 - -100000) + -100000));
}
const date = Date.now();

//Хоара
const QuickSort = (ArrayNumbers, left, right) => {
  const Elem = ArrayNumbers[Math.floor((left + right) / 2)];
  while (left <= right) {
    while (ArrayNumbers[left] < Elem) {
      left++;
    }
    while (ArrayNumbers[right] > Elem) {
      right--;
    }
    if (left <= right) {
      let temp = ArrayNumbers[left];
      ArrayNumbers[left] = ArrayNumbers[right];
      ArrayNumbers[right] = temp;
      left++;
      right--;
    }
  }
  return left;
};

const RecSort = (arr, start, end) => {
  if (start >= end) return;
  const rightStart = QuickSort(arr, start, end);
  RecSort(arr, start, rightStart - 1);
  RecSort(arr, rightStart, end);
};

//копирование массивов для сравнения с пузырьковой

const copyArrayNumbers = ArrayNumbers.slice(0);
RecSort(copyArrayNumbers, 0, copyArrayNumbers.length - 1);
// console.log(copyArrayNumbers);

const copyArrayNumbers2 = ArrayNumbers2.slice(0);
RecSort(copyArrayNumbers2, 0, copyArrayNumbers2.length - 1);
// console.log(copyArrayNumbers2);

const copyArrayNumbers3 = ArrayNumbers3.slice(0);
RecSort(copyArrayNumbers3, 0, copyArrayNumbers3.length - 1);
// console.log(copyArrayNumbers3);

const dateEnd = Date.now();
console.log("milliseconds quickSort:" + (dateEnd - date));

// пузырьковая;

// const BubbleSort = (arr) => {
//   let length = arr.length - 1;
//   while (length) {
//     for (let i = 0; i < length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//       }
//     }
//     length--;
//   }
// };

// BubbleSort(ArrayNumbers);
// // console.log(ArrayNumbers);
// BubbleSort(ArrayNumbers2);
// // console.log(ArrayNumbers2);
// BubbleSort(ArrayNumbers3);
// // console.log(ArrayNumbers3);

// const dateEndBubble = Date.now();
// console.log("milliseconds bubble:" + (dateEndBubble - dateEnd));
