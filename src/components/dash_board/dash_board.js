import axios from 'axios';
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
        async logout(){
            const user = this.$store.getters.getUser;

            const param = {
                "userId" : this.id
            };

            console.log(`id : ${user["id"]}`);
            try{
                await axios.post(`${axios.defaults.baseURL}api/user/logout`, param, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                this.$store.commit("setUser", {});
                this.$router.push("/login");
            }catch(error){
                console.error(`error : ${error}`);
            }
        },
        clickMoveCursor(index){
            this.index = index;

            console.log(`index : ${index}`);
            if(this.index === 1){
                this.$store.commit("setSideBarIndex", index);
                this.$router.push("/dashboard/home");
            }
        },
    },
} 