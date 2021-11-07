function incode(str, n) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            code += n;
            if (code > 90) {
                code -= 26;
            }
        } else if (code >= 97 && code <= 122) {
            code += n;
            if (code > 122) {
                code -= 26;
            }
        }
        result += String.fromCharCode(code);
    }
    return result;
}

function solution(s, n) {
    return incode(s, n);
}