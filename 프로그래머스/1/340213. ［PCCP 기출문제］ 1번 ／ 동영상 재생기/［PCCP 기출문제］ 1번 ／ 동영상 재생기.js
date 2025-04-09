const SKIP_TIME = 10;

function solution(video_len, pos, op_start, op_end, commands) {
    // 초 단위로 변환
    let pos_sec = timeToSeconds(pos);
    const video_len_sec = timeToSeconds(video_len);
    const op_start_sec = timeToSeconds(op_start);
    const op_end_sec = timeToSeconds(op_end);
    
    // 오프닝 체크
    pos_sec = isInOpening(pos_sec, op_start_sec, op_end_sec);
    
    for(const command of commands) {
        if(command == "prev"){
            pos_sec = Math.max(0, pos_sec - SKIP_TIME);
            // 오프닝 체크
            pos_sec = isInOpening(pos_sec, op_start_sec, op_end_sec);
        } else if(command == "next"){
            pos_sec = Math.min(video_len_sec, pos_sec + SKIP_TIME);
            // 오프닝 체크
            pos_sec = isInOpening(pos_sec, op_start_sec, op_end_sec);
        }
    }
    pos_sec = Math.min(video_len_sec, pos_sec);
    
    return secondsToTime(pos_sec);
}

function isInOpening(pos, op_start, op_end) {
    if(pos >= op_start && pos < op_end) return pos = op_end;
    return pos;
}

function timeToSeconds(timeStr) {
    const [mm, ss] = timeStr.split(":").map(Number);
    return mm * 60 + ss;
}

function secondsToTime(seconds) {
    const mm = Math.floor(seconds / 60);
    const ss = seconds % 60;
    return `${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, "0")}`;
}