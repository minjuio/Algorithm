function solution(n, arr1, arr2) {
    const combinedMap = arr1.map((num, i) => (num | arr2[i]).toString(2).padStart(n, "0"));

    return combinedMap.map((num) => num.replace(/1/g, "#").replace(/0/g, " "));
}