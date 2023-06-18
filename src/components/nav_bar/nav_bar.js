import { mapState } from "vuex";
import axios from "axios";

export default{
    name: "NavBar",
    computed: {
        ...mapState(["sideBarOpen", "user"]),
    },
    methods: {
        toggleSidebar(){
            this.$store.commit("toggleSideBar");
        },
        async logout(){
            const user = this.$store.getters.getUser;

            const param = {
                "userId" : user.id
            };

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
    }
}