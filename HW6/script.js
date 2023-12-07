// Бинарный поиск

function binarySearch(array, number) {   
    let startIndex = 0;
    let endIndex = array.length - 1;

    while (startIndex <= endIndex) {
        let midleIndex = Math.floor((startIndex + endIndex) / 2);
        if (array[midleIndex] === number) {            
            return ` Искомый элемент ${array[midleIndex]} находиться на позиции ${midleIndex}`;
        } else if (array[midleIndex] < number) {
            startIndex = midleIndex + 1;
        } else {
            endIndex = midleIndex - 1;
        }
    }
}
    
sortedArr = [1, 3, 7, 9, 12, 16, 17, 23];
numberSearch = 17;

if (!sortedArr.includes(numberSearch)) {
    console.log(`Заданного числа ${numberSearch} в массиве нет`);     
} else {
    console.log(binarySearch(sortedArr, numberSearch));
}

