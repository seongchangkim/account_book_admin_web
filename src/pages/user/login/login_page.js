import axios from "axios";

export default {
    name: 'login',
    data(){
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        async login(){
            // console.log(`user : ${this.$store.getters.getUser}`);
            let email = this.email;
            let password = this.password;
            
            const params = {
                'email': email,
                'password': password,
            };

            await axios
                .post(`${axios.defaults.baseURL}api/user/login`, params, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                })
                .then(async (res) => {
                    if(res.data["role"] !== "ADMIN"){
                        alert("관리자 권한만 로그인할 수 있습니다!");
                        return;
                    }
    
                    if (res.data["errorMessage"] === null || res.data["errorMessage"] === "") {
                        const authParam = {
                            "token" : res.data["token"]
                        };

                        const authRes = await axios
                            .post(`${axios.defaults.baseURL}api/user/auth`, authParam, {
                                headers: {
                                    "Content-Type": "application/json"
                                },
                            });

                        this.$store.commit("setUser", authRes.data);

                            // console.log("auth id : " + authRes.data["id"]);

                        this.$router.push("/dashboard/home");
                    } else {
                        alert(res.data["errorMessage"]);
                    }
                }).catch((error) => alert(`오류 : ${error}`));
        } 
    },
}
