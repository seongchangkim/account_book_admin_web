
# account_book_admin_web
회원 기능(로그인, 로그아웃)이 있고 관리자 회원으로 로그인하여 회원 목록(검색, 페이징 처리)을 통해 회원을 관리할 수 있고 프로필 수정, 회원 탈퇴가능한 웹 클라이언트 서비스입니다.
<br/><br/>
<img width="1415" alt="account-book-admin-web" src="https://github.com/seongchangkim/account_book_admin_web/assets/74657556/3d771d27-96cc-4b56-ab52-e404c4aabad7">

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

![login-ezgif com-crop](https://github.com/seongchangkim/account_book_admin_web/assets/74657556/5c8263e4-6c99-4d25-a435-383e2be752e3)
<p align="center">로그인 성공</p>

![login-role-ezgif com-crop](https://github.com/seongchangkim/account_book_admin_web/assets/74657556/b0e6c8c9-eb08-44d9-bcbf-5e4c77fed1db)
<p align="center">권한 로그인 오류창</p>

![login-not-found-ezgif com-crop](https://github.com/seongchangkim/account_book_admin_web/assets/74657556/525f4ab3-7359-428d-ae06-d2106d8f74e0)
<p align="center">이메일 및 비밀번호 불일치 오류창</p>

### 2. 로그아웃
- 상단 네비게이션 바 부분에 있는 로그아웃 부분에 클릭하면 로그아웃 API를 POST방식으로 호출하여 회원 id를 들고 request한 뒤, DB안에 해당 회원 id를 찾아서 서버에서 token를 null 값으로 수정하도록 합니다. 서버에서 response 값을 받아서 웹 클라이언트에서 마지막으로 user 상태 저장소를 빈 객체로 초기화시키고 로그인 페이지로 이동함.

![logout-ezgif com-crop](https://github.com/seongchangkim/account_book_admin_web/assets/74657556/8583742a-b491-4c6c-a574-c8b4bf9a2c42)

### 3. 회원 목록(feat. 페이지 처리 및 검색 기능)

![page-ezgif com-crop](https://github.com/seongchangkim/account_book_admin_web/assets/74657556/0b4ae0f8-faa9-461c-a968-19e2db5b8fc2)
<p align="center">페이지 처리</p>

![search-ezgif com-crop](https://github.com/seongchangkim/account_book_admin_web/assets/74657556/00f7eb51-16c4-46b5-a85b-31a34f13699e)
<p align="center">검색 기능</p>

1). 회원 목록 : 회원 목록 페이지 들어가기 전에 회원 목록 api를 호출하여 웹 클라이언트에 response 값으로 페이지 처리에 필요한 값이나 회원 목록 데이터를 받아서 회원 목록 페이지에 렌더링합니다. <br/>
2). 페이지 처리 : 맨 밑에 페이지 처리 관련 UI가 있는데 회원 목록 갯수에 따라 페이지 수를 렌더링했습니다. 그 중에 <(이전 페이지) 누르면 이전 페이지로 이동하면서 이전 페이지에 대한 response값을 받으면서 회원 목록 페이지를 리렌더링을 하고 >(다음 페이지)로 누르면 다음 페이지에 대한 response값을 받으면서 회원 목록 페이지를 리렌더링을 합니다. 그리고 해당 페이지를 누르면 해당 페이지에 대한 response값을 받으면서 회원 목록 페이지를 리렌더링을 합니다. 그리고 처음 페이지로 이동하면 이전 페이지 아이콘이 없고 맨 마지막 페이지로 이동하면 다음 페이지 아이콘이 없도록 설정했습니다. <br/>
3). 검색 기능 : 맨 오른쪽에 검색 UI가 있는데 검색 카테고리를 고르고 검색어를 입력하면 그에 대한 요청을 들고 회원 목록 api를 호출하여 그 검색 카테고리에 대한 데이터를 검색어를 비슷한 단어를 조회하는 다음에 웹 클라이언트에 reponse 값으로 페이지 처리에 필요한 값이나 회원 목록 데이터를 받아서 회원 목록 페이지에 리렌더링합니다.

### 4. 회원 상세보기, 회원 수정 및 회원 삭제

![user-detail-ezgif com-crop](https://github.com/seongchangkim/account_book_admin_web/assets/74657556/66cb1754-75cd-4b42-8d78-ce7d7cfe2f24)
<p align="center">회원 상세보기</p>

![user-edit-ezgif com-crop](https://github.com/seongchangkim/account_book_admin_web/assets/74657556/68fe5096-0128-449d-bfab-3ee0a3dfd2ae)
<p align="center">회원 수정</p>

![user-delete-ezgif com-crop](https://github.com/seongchangkim/account_book_admin_web/assets/74657556/53aa5496-4cff-4f8a-a7f1-8e4c4c8a34a6)
<p align="center">회원 삭제</p>

<br/>
1). 회원 상세보기 : 회원 목록 페이지에 해당 회원 이름을 클릭하면 회원 id값을 라우터 파라미터로 들고 회원 상세보기 웹 페이지에 이동하여 렌더링합니다. <br />
2). 회원 수정 : 회원 상세보기 페이지에서 수정하고자 프로필 이미지 경로, 이름, 전화번호 및 회원 권한을 수정하여 수정 버튼을 클릭하면 회원 수정 API를 호출하여 수정하고자 프로필 이미지 경로, 이름, 전화번호 및 회원 권한을 request 값으로 들고 서버에 요청한 뒤에 DB에서 해당 사용자를 조회해서 해당 사용자와 일치하는 데이터에  프로필 이미지 경로, 이름, 전화번호 및 회원 권한을 수정하고 updatedAt 컬럼을 해당 API를 호출했던 시점으로 수정됨. 그 다음에 회원 수정이 성공하면 회원 수정 알림창이 뜨고 회원 수정 알림창에 확인 버튼을 누르면 회원 상세보기 페이지에서 새로고침됩니다.<br />
3). 회원 삭제 : 회원 상세보기 페이지에서 삭제를 누르면 회원 탈퇴 API를 호출하여 해당 사용자 id를 들고 request해서 작동함. 그리고 DB에서 해당 사용자 id로 조회하여 해당 사용자와 일치하면 조회된 데이터를 삭제되어 회원 삭제 처리가 성공하면 회원 삭제 알림창을 뜸. 회원 삭제 알림창에서 확인 버튼을 클릭하면 로그인 페이지로 이동됨.

### 5. 프로필 상세보기, 프로필 수정 및 회원 탈퇴

![profile-ezgif com-crop](https://github.com/seongchangkim/account_book_admin_web/assets/74657556/e1f9348c-c0b7-42ce-bfec-7bd360f9064a)
<p align="center">프로필 상세보기</p>

![profile-edit-ezgif com-crop](https://github.com/seongchangkim/account_book_admin_web/assets/74657556/4073f34a-4fed-4315-a30b-cab5fc914242)
<p align="center">프로필 수정</p>

![user-leave-ezgif com-crop](https://github.com/seongchangkim/account_book_admin_web/assets/74657556/14b26490-e2dc-4a54-8dd2-6479f99199ca)
<p align="center">회원 삭제</p>

<br/>
1). 프로필 상세보기 : 사이드바에 My 프로필을 클릭하면 회원에 대한 상태 저장소에서 가져온 회원 id값을 라우터 파라미터값으로 들고 프로필 상세보기 웹 페이지에 이동하여 렌더링합니다. <br />
2). 프로필 수정 : 프로필 상세보기 웹 페이지에서 수정하고자 프로필 이미지, 이름 또는 전화번호를 수정하여 수정 버튼을 클릭하면 프로필 수정 API를 호출하여 수정하고자 프로필 이미지 경로, 이름 및 전화번호를 들고 request해서 작동함. 그리고 DB에서 해당 사용자를 조회해서 해당 사용자와 일치하는 데이터에 프로필 이미지 경로, 이름 및 전화번호를 수정하고 updatedAt 컬럼을 해당 API를 호출했던 시점으로 수정됨. 그 다음에 프로필 정보 수정이 성공하면 프로필 정보 수정 알림창이 뜸. 그리고 프로필 정보 수정 알림창에 확인 버튼을 누르면 새로고침됩니다.<br />
3). 회원 탈퇴 : 프로필 상세보기 웹 페이지에서 회원 탈퇴를 누르면 회원 탈퇴 API를 호출하여 해당 사용자 id를 들고 request해서 작동함. 그리고 DB에서 해당 사용자 id로 조회하여 해당 사용자와 일치하면 조회된 데이터를 삭제되어 회원 탈퇴 처리가 성공하면 회원 탈퇴 알림창을 뜸. 회원 탈퇴 알림창에서 확인 버튼을 클릭하면 로그인 페이지로 이동됨.
