## 코드 제출 방법

### 최초 1회

1. 자신의 로컬 저장소에 이 저장소를 `clone`합니다.  
   `$ git clone https://github.com/dsc-sangmyung/2021-JavaScript-Study.git`

2. `Note`폴더에 자신의 이름으로 새 폴더를 만들어 줍니다.  
   `$ mkdir <your name>`

3. 1주차 과제, 노트정리를 작성한 뒤 알아보기 편한 파일명(ex. week1_과제.md, week1_노트정리.png ...)으로 저장해준 뒤 로컬저장소로 `push`해줍니다.  

   ```bash
   # 자기 이름의 폴더에 과제, 노트정리 작성한 뒤
   $ git add -A
   $ git commit -m "커밋 메시지를 적어줍니다."
   $ git push -u origin main
   ```

4. 자신의 코드가 원격 저장소에 잘 올라갔는지 확인합니다.

### 2회차 이후

1. `clone`으로 가져왔던 폴더로 들어가 줍니다.  
   `$ cd 2021-JavaScript-Study`

2. `pull`명령어로 변경사항을 업데이트 해줍니다.  
   `$ git pull`

3. 자기이름으로 만들었던 폴더에 해당 주차 과제, 노트정리 파일을 작성합니다.  
   **(다른 사람의 폴더에 접근하지 않도록 주의합시다!)**

4. 원격 저장소에 변경사항을 업로드 해줍니다.  

   ```bash
   $ git add -A
   $ git commit -m "n주차 과제, 노트정리 업로드(홍길동)"
   $ git push
   ```

5. 자신의 코드가 원격 저장소에 잘 올라갔는지 확인합니다.