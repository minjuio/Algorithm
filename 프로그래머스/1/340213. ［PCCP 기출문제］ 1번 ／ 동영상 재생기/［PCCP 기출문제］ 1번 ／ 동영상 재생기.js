function solution(video_len, pos, op_start, op_end, commands) {
    while(commands.length != 0) {
        let current_command = commands.shift();
        pos = isInOpening(pos, op_start, op_end);
        
        if(current_command == "prev") {
            pos = pos.split(":");
            if(pos[1] >= 10) pos[1] = Number(pos[1]) - 10;
            else if(pos[0] >= 1) {
                pos[0] = Number(pos[0]) - 1;
                pos[1] = 60+Number(pos[1])-10;
            } else pos = [0, 0];
            pos = pos.join(":");
        } else {
            pos = isInOpening(pos, op_start, op_end);
            
            pos = pos.split(":");
            if(pos[1] < 50) pos[1] = Number(pos[1]) + 10;
            else {
                pos[0] = Number(pos[0]) + 1;
                pos[1] = Number(pos[1])+10-60;
            }
            pos = pos.join(":");
            pos = setMMSS(pos);
            pos = isInOpening(pos, op_start, op_end);
            
            if(pos.replace(":", "") > Number(video_len.replace(":", ""))) pos = video_len;
        }
    }
    pos = setMMSS(pos);
    pos = isInOpening(pos, op_start, op_end);
    return pos;
}

// 오프닝?
function isInOpening(pos, op_start, op_end) {
    let posNum = Number(pos.replace(":", ""));
    if(posNum >= Number(op_start.replace(":", "")) && posNum < Number(op_end.replace(":", ""))) pos = op_end;
    return pos;
}

function setMMSS(pos) {
    if(pos.split(":")[0].length == 1) {
        pos = pos.split(":");
        pos[0] = "0" + pos[0];
        pos = pos.join(":");
    }
    if(pos.split(":")[1].length == 1) {
        pos = pos.split(":");
        pos[1] = "0" + pos[1];
        pos = pos.join(":");
    }
    return pos;
}