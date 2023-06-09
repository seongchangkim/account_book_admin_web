import * as getters from "@/store/user/getters";

export default {
    state: {
        user: {}
    },
    getters: {
        getUser: (state) => {
            return state.user;
        }
    },
    mutations: {
        setUser: (state, payload) => {
            state.user = payload;
        }
    }
}