function listEvenNumbers(numbers) {
    const even = numbers.filter(x => {
        if (x%2 === 0) console.log(x + ' is even');
    });
}

function listOddNumbers(numbers) {
    const odd = numbers.filter(x => {
        if (x%2 != 0) console.log(x + ' is odd');
    });
}
listEvenNumbers([2, 6, 7, 8, 12, 9, 11, 1]);
listOddNumbers([2, 6, 7, 8, 12, 9, 11, 1]);