// Дан список целых чисел. Написать в
//  императивном и декларативном стиле процедуру сортировки чисел
//  в списке в порядке убывания

const array = [5, 8, 1, 6, 2, 7, 0];

// Императивный стиль 
function quickSort(arr) {
    if (arr.length < 2) return arr;
    let pivot = arr[0];
    const left = [];
    const right = [];
      
    for (let i = 1; i < arr.length; i++) {
      if (pivot < arr[i]) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quickSort(left).concat(pivot, quickSort(right));
  }

console.log(quickSort(array));  

// Декларативный стиль
console.log(array.sort((a, b) => { return b - a }));