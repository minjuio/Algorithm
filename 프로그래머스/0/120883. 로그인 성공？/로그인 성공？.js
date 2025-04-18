function solution(id_pw, db) {
    const userMap = {};
    db.forEach(([id, pw]) => userMap[id] = pw);
    
    const [id, pw] = id_pw;
    
    if(!(id in userMap)) return "fail";
    
    return userMap[id] === pw ? "login" : "wrong pw"; 
}