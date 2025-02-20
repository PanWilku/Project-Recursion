function mergeSort(array) {

    if(array.length <= 1) {
        return array;
    }

    let sortedArray = [];

    const splitIndex = Math.ceil(array.length / 2);

    let leftArr = array.slice(0, splitIndex);
    let rightArr = array.slice(splitIndex);

    const left = mergeSort(leftArr)
    const right = mergeSort(rightArr)


    let i = 0;
    let j = 0;

    while(i < left.length && j < right.length) {
        if(left[i] <= right[j]) {
            sortedArray.push(left[i])
            i++
        } else {
            sortedArray.push(right[j])
            j++
        }
    }

    const remainingElementsL = left.slice(i)
    const remainingElementsR = right.slice(j)
    

    sortedArray.push(...remainingElementsL, ...remainingElementsR);
    
    return sortedArray
}
const input1 = [105, 79, 100, 110];
const input2 = [3, 2, 1, 13, 8, 5, 0, 1];
console.log("siema");
console.log(mergeSort(input1));

