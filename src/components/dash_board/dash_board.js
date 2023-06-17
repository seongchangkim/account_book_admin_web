import SideBar from '@/components/side_bar/side_bar.vue';
import NavBar from '@/components/nav_bar/nav_bar.vue';
import { mapGetters } from "vuex";

export default {
    data(){
        return{
            id: this.$store.getters.getUser["id"],
            index: 1,
            sideBarOpen: this.$store.state.dashBoardStore.sideBarOpen
        }
    },
    components: {
        SideBar,
        NavBar
    },
    computed: mapGetters({
        sidebar: "sideBarOpen",
    }),
    methods: {
        clickMoveCursor(index){
            this.index = index;

            if(this.index === 1){
                this.$store.commit("setSideBarIndex", index);
                this.$router.push("/dashboard/home");
            }
        },
    },
} 