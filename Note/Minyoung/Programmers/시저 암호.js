function solution(s, n) {
    let ascii = [];
    
    for(let i=0; i< s.length; i++) {
        if(s[i]==' ') // space
            ascii[i]=s[i].charCodeAt();
        else if(s[i]>='A'&&s[i]<='Z') { // upper
            ascii[i]=s[i].charCodeAt()+n;
            console.log(ascii[i]);
            if(ascii[i]>90) ascii[i]-=26;
        }
        else { // lower
            ascii[i]=s[i].charCodeAt()+n;
            console.log(ascii[i]);
            if(ascii[i]>122) ascii[i]-=26;
        }            
    }

    return String.fromCharCode.apply(null,ascii);
}