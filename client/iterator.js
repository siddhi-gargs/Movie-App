const myIterator = (array) => {
    let index = 0;
    return {
        next: function () {
            return {
                value: array[index++],
                done: index + 1 > array.length
            }
        }
    }
}