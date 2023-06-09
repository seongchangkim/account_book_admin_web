import { mapGetters } from "vuex";

export default{
    name: "SideBar",
    data(){
        return{
            selectSideBar : this.$store.state.dashBoardStore.sideBarIndex
        }
    },
    props:{
        id: Number,
        index: Number
    },
    computed: {
        ...mapGetters({
            sideBarOpen: "sideBarOpen",
        }),
    },
    watch:{
        selectSideBar:{
            handler: function (index){
                this.setCursorIndex(index);
            }
        },
        index:{
            handler: function (index){
                this.setCursorIndex(index);
            }
        }
    },
    methods:{
        setCursorIndex(index){
            this.$store.commit("setSideBarIndex", index);
            this.selectSideBar = this.$store.state.dashBoardStore.sideBarIndex;
            this.$emit("setChildIndex", this.selectSideBar);

            // console.log(`sideBarSide : ${JSON.stringify(this.$store.state.dashBoardStore.sideBarIndex)}`);
            if (index === 1) {
                this.$router.push("/dashboard/home");
              } else if (index === 2) {
                this.$router.push({
                    name: 'profile',
                    params: {
                        id: this.id
                    }
                });
              } 
        },
        
    },
    beforeCreate() {
        // 홈 화면 들어가자마자 sideBarStore index값을 1로 설정함.
        // this.$store.commit("setIndex", 1);
        this.selectBar = this.$store.state.dashBoardStore.sideBarIndex;
    },
    mounted() {
        // 새로고침할 때마다 sideBarStore에 포함한 sideBar index 값을 가져와서 유지하도록 함.
        // console.log(`mounted selectBar : ${this.selectBar}`);
        this.selectBar = this.$store.state.dashBoardStore.sideBarIndex;
    },

}