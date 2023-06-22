# account_book_admin_web
<img width="1415" alt="account-book-admin-web" src="https://github.com/seongchangkim/account_book_admin_web/assets/74657556/3d771d27-96cc-4b56-ab52-e404c4aabad7">


회원 기능(로그인, 로그아웃)이 있고 관리자 회원으로 로그인하여 회원 목록(검색, 페이징 처리)을 통해 회원을 관리할 수 있고 프로필 수정, 회원 탈퇴가능한 웹 클라이언트 서비스입니다.
<br/>
● 제작기간 : 2023.5.26~2023.6.9, 2023.6.18(12일, 주말 제외)(1인 프로젝트)

### 개발 환경
#### 1). Skill Stack
> 1. VITE v4.3.8 
> 2. Vue.js v3.2.47
> 3. HTML5
> 4. CSS3
> 5. JavaScript
> 6. npm v8.19.2
> 7. tailwindcss v3.3.2

#### 2). IDE
> 1. Visual Studio Code

## 주요 기능 및 페이지
### 1. 로그인
- 로그인 페이지에서 이메일과 비밀번호를 입력하여 로그인 API를 POST방식으로 호출하여 입력한 이메일과 비밀번호를 들고 request해서 작동합니다. 그 다음에 DB에서 이메일으로 일치한 데이터를 조회하여 비밀번호를 암호화하여 DB에서 암호화된 비밀번호가 있는지 조회합니다. DB에서 이메일과 비밀번호가 둘 다 일치한 DB가 있으면 로그인 성공되어 홈 화면으로 이동함. 그렇지 않으면 상황별로 알림창을 띄우도록 합니다.

### 2. 로그아웃
- 상단 네비게이션 바 부분에 있는 로그아웃 부분에 클릭하면 로그아웃 API를 POST방식으로 호출하여 회원 id를 들고 request한 뒤, DB안에 해당 회원 id를 찾아서 서버에서 token를 null 값으로 수정하도록 합니다. 서버에서 response 값을 받아서 웹 클라이언트에서 마지막으로 user 상태 저장소를 빈 객체로 초기화시키고 로그인 페이지로 이동함.
![logout-ezgif com-crop](https://github.com/seongchangkim/account_book_admin_web/assets/74657556/8583742a-b491-4c6c-a574-c8b4bf9a2c42)

### 4. 회원 상세보기, 회원 수정 및 회원 삭제
<img src="https://user-images.githubusercontent.com/74657556/220316730-e103610f-068c-4b1d-8a40-3d9f01c9614c.jpeg" width="250" height="500">
<p align="center">프로필 상세보기</p>


https://user-images.githubusercontent.com/74657556/220317161-ee49de4f-f5a6-4675-ab85-858a0fc64e39.mp4
<p align="center">프로필 정보 수정</p>

<img src="https://user-images.githubusercontent.com/74657556/220350951-b6ea53ec-9429-42b7-a5b5-33f46befc233.gif" width="250" height="500">
<p align="center">프로필 상세보기</p>

<br/>
1). 회원 상세보기 : 회원 목록 페이지에 해당 회원 이름을 클릭하면 회원 id값을 라우터 파라미터로 들고 회원 상세보기 웹 페이지에 이동하여 렌더링합니다. 
2). 프로필 정보 수정 : 프로필 상세보기 페이지에서 수정하고자 이름과 전화번호를 수정하여 프로필 수정 버튼을 클릭하면 프로필 수정 API를 호출하여 수정하고자 이름과 전화번호를 들고 request해서 작동함. 그리고 DB에서 해당 사용자를 조회해서 해당 사용자와 일치하는 데이터에 이름과 전화번호를 수정하고 updatedAt 컬럼을 해당 API를 호출했던 시점으로 수정됨. 그 다음에 프로필 정보 수정이 성공하면 프로필 정보 수정 알림창이 뜸. 그리고 프로필 정보 수정 알림창에 확인 버튼을 누르면 그 부분이 취소가 됨.(유효성 검사 기능도 있음.)
3). 회원 탈퇴 : 프로필 상세보기 페이지에서 회원 탈퇴를 누르면 회원 탈퇴 API를 호출하여 해당 사용자 id를 들고 request해서 작동함. 그리고 DB에서 해당 사용자 id로 조회하여 해당 사용자와 일치하면 deletedAt를 해당 API를 호출했던 시점으로 저장되고 회원 탈퇴 처리가 성공하면 회원 탈퇴 알림창을 뜸. 회원 탈퇴 알림창에서 확인 버튼을 클릭하면 로그인 페이지로 이동됨.
