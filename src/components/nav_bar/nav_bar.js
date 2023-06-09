import { mapState } from "vuex";

export default{
    name: "NavBar",
    computed: {
        ...mapState(["sideBarOpen", "user"]),
    },
    methods: {
        toggleSidebar(){
            // console.log('click');
            // console.log(this.$store.state.dashBoardStore.sideBarOpen);
            this.$store.commit("toggleSideBar");
        }
    }
}