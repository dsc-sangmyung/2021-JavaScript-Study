function solution(a, b) {
    let answer = '';
    let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let d = "2016," + a +"," + b;
    const date = new Date(d);
    answer = day[date.getDay()];
    return answer
}