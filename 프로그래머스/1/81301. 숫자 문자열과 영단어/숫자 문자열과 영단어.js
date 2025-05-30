function solution(s) {
    const regex = /zero|one|two|three|four|five|six|seven|eight|nine/g;
    const map = {
        zero: '0',
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9'
    };
    return s.replaceAll(regex, match => map[match]) * 1;
}