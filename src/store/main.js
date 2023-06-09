import { createStore } from "vuex";
import userStore from "@/store/user/index";
import dashBoardStore from "@/store/dash_board/index";
import createPersistedState from "vuex-persistedstate";

const storageState = createPersistedState({
    paths: ['userStore', 'dashBoardStore']
});

const store = createStore({
    modules: {
        userStore: userStore,
        dashBoardStore: dashBoardStore
    },
    plugins: [storageState]
});

export default store;