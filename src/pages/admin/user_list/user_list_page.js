import axios from 'axios';
import moment from 'moment';  

const url = `${axios.defaults.baseURL}api/admin/user/list`;

export default{
    data() {
        return {
            userList: [],
            totalPage: 1,
            moment: moment,
            isFirst: false,
            isLast: false,
            currentPageIndex: 0,
            selectSearchCategory: "",
            selectSearchCategoryValue: "",
            searchKeyWord: "",
            isSearchCategoryShow: false,
            searchCategoryObj: {
                이름: 'name',
                이메일: 'email',
                권한: 'role',
                소설로그인: 'socialType'
            },
            searchParam: this.searchKeyWord !== null ? `&${this.selectSearchCategoryValue}=${this.searchKeyWord}` : ""
        };
    },
    compute: {
        dateFormat(date){
            console.log(moment().format("yyyy-MM-DD HH:mm:ss"));
            return moment(date).format("yyyy-MM-DD HH:mm:ss")
        }
    },
    methods: {
        getImageUrl(path){
            const url = path !== null ? path : "/src/assets/default-user-profile.png";
            return new URL(url, import.meta.url).href;
        },
        // 이전 페이지
        async getPrevUserList(){
            const res = await axios.get(`${url}?page=${this.currentPageIndex-1}${this.searchParam}`);

            this.setPageInfo(res);
        },
        // 페이지 선택
        async getUserList(index){
            const res = await axios.get(`${url}?page=${index-1}${this.searchParam}`);

            this.setPageInfo(res);
        },
        // 다음 페이지 
        async getNextUserList(){
            const res = await axios.get(`${url}?page=${this.currentPageIndex+1}${this.searchParam}`);

            this.setPageInfo(res);
        },
        // 검색 카테고리 선택
        onSearchCategoryClick(){
            this.isSearchCategoryShow = !this.isSearchCategoryShow;
        },
        // 검색 카테고리 중 하나 선택
        onSelectSearchCategory(key){
            this.selectSearchCategory = key;
            this.selectSearchCategoryValue = this.searchCategoryObj[key];
            this.isSearchCategoryShow = false;
        },
        async onSearchKeyWord(keyword){
            if(this.selectSearchCategoryValue === ""){
                alert("검색 카테고리를 선택하세요!");
                return;
            }

            const res = await axios.get(`${url}?page=${this.currentPageIndex}&${this.selectSearchCategoryValue}=${keyword}`);

            this.setPageInfo(res);
        },
        moveUserDetail(id){
            this.$router.push({
                name: "userDetail",
                params: {
                    id: id
                }
            })
        },
        // 페이징 처리 공통 메소드
        setPageInfo(res){
            console.log(`res : ${JSON.stringify(res.data['content'])}`);
            
            this.userList = res.data['content'];
            this.totalPage = res.data['totalPages'];
            this.isFirst = res.data["first"];
            this.isLast = res.data["last"];
            this.currentPageIndex = res.data["number"];
        }
    },
    async beforeCreate(){
        const res = await axios.get(url);

        this.setPageInfo(res);
    },
}