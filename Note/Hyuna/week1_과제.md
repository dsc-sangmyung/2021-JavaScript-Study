//2-1. alert 창 띄우기
<!DOCTYPE html>
<html>

<body>

    <script>
        alert("I'm JavaScript!");
    </script>

</body>

</html>

//2-1. 외부 스크립트를 이용해 alert 창 띄우기
<!DOCTYPE html>
<html>
    
<body>

    <scripot src="alert.js"></scripot>
    
</body>

</html>


//2-4. 변수 가지고 놀기

let admin, name;

name = "John";

admin = name;

alert( admin );


//2-4. 올바른 이름 선택하기

let currentplanet = "Earth"

let currentUserName = "Hyuna"


//2-4. 대문자 상수 올바로 사용하기

실행 전에 이미 값을 알고 있고, 코드에서 그 값을 쓰는 경우이기 때문이다.


//2-5. 문자열 따옴표

let name = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello Ilya


//2-6. 간단한 페이지 만들기
<!DOCTYPE html>
<html>
<body>

  <script>
    'use strict';

    let name = prompt("이름을 입력해 주세요.", "");
    alert(name);
  </script>

</body>
</html>

//2-8. 전위형과 후위형
a=2, b=2, c=2, d=1

//2-8. 할당 후 결과 예측하기
a=4, x=5

//2-8. 형 변환
//2-8. 덧셈 고치기


