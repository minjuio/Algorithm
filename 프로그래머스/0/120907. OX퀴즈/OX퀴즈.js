function solution(quiz) {
    return quiz.map((q) =>{
        const [a, op, b, _, sol] = q.split(" ");
        let realSol = op == "+" ? Number(a) + Number(b) : Number(a) - Number(b);
        return realSol == sol ? "O" : "X";
    })
}