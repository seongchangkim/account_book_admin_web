import axios from 'axios';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default{
    data(){
        return{
            user: {},
            file: {},
            id: 0
        }
    },
    methods: {
        getImageUrl(path){
            const url = path !== null ? path : "/src/assets/default-user-profile.png";
            return new URL(url, import.meta.url).href;
        },
        // 빈 객체 체크
        isEmptyObject(obj) {
            return Object.keys(obj).length === 0 && obj.constructor === Object;
        },
        // 프로필 이미지 변경
        onChangeProfileImage(event){
            const file = event.target.files || event.dataTransfer.files

            if(file === {}) return;

            this.file = file[0];

            this.user.profileUrl = URL.createObjectURL(this.file);
        },
        // 전화번호 형식
        transferPhoneNumberFormat(event){
            let phoneNumber = "";
            phoneNumber = event.target.value.replace(/[^0-9]/g, "");

            if(phoneNumber.length < 4){
                this.user.tel = phoneNumber;
            }else if(phoneNumber.length === 4){
                this.user.tel = `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
            }else if(phoneNumber.length === 7){
                this.user.tel = `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 7)}-${phoneNumber.slice(7)}`;
            }else{
                this.user.tel = `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 7)}-${phoneNumber.slice(7, 11)}`;
            }
        },
        // 프로필 수정
        async onUserEditing() {
            this.id = this.$route.params.id;

            if (this.isEmptyObject(this.file)) {
                const params = {
                    "name": this.user.name,
                    "tel": this.user.tel,
                    "profileUrl": this.user.profileUrl,
                };
        
                this.profileEditingProcess(params);
            }else{
                const storage = getStorage();
                const fileName = this.user.profileUrl.slice(
                    this.user.profileUrl.lastIndexOf("/")
                );
                const mountainsRef = ref(
                    storage,
                    `profiles/${this.id}/${this.file.name}`
                );
                uploadBytes(mountainsRef, this.file).then(async (snapshot) => {
                    const getUpLoadImageURL = await getDownloadURL(snapshot.ref);

                    this.user.profile_image = snapshot.ref;

                    var params = {
                        "name": this.user.name,
                        "tel": this.user.tel,
                        "profileUrl": getUpLoadImageURL,
                    };

                    this.profileEditingProcess(params);
                });
            }
        },
        // 회원 탈퇴
        async onUserDeleting(){
            this.id = this.$route.params.id;

            const res = await axios.delete(`${axios.defaults.baseURL}api/user/${this.id}`);
            
            if(res.data['isSuccess']){
                this
                alert(`회원 탈퇴되었습니다.`);
                this.$router.push('/login');
            }
        },
        // 프로필 수정 공통 처리 메소드
        async profileEditingProcess(params){
            var res = await axios.patch(
                `${axios.defaults.baseURL}api/profile/${this.id}`,
                params,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (res.data['success']) {
                alert(`해당 사용자 정보가 수정되었습니다.`);
                window.location.reload();
            }  
        }
    },
    async beforeCreate(){
        this.id = this.$route.params.id;

        const res = await axios.get(`${axios.defaults.baseURL}api/profile/${this.id}`);

        this.user = res.data;
    },
}