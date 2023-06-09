import * as getters from "@/store/dash_board/getters.js";

export default{
    state: () => ({
        sideBarOpen: false,
        sideBarIndex: 1
    }),
    getters: getters,
    mutations:{
        toggleSideBar: (state) => {
            state.sideBarOpen = !state.sideBarOpen;
        },
        setSideBarIndex: (state, payload) => {
            state.sideBarIndex = payload;
        }
    }
}