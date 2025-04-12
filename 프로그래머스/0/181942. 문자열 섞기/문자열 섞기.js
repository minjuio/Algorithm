function solution(str1, str2) {
    return [...str1].map((str, i) => str + str2[i]).join('');
}