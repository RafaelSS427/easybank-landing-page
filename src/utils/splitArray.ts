export const splitArray = <T>(chunk: number, arrayToSplit: T[]):T[][] => { // e.g: chunk: 2, array length: 5
    const result = [];
    let count = 0;

    for (let i = 0; i < arrayToSplit.length; i += chunk) {
        result[count++] = arrayToSplit.slice(i, i + chunk);
    }

    return result;
}