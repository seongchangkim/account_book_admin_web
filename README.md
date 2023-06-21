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
