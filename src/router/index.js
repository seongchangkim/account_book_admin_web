import { createRouter, createWebHistory } from 'vue-router';
import store from "@/store/main";
import axios from "axios";

const routes = [
    { 
        path : '/',
        redirect: { name : "login" },
    },
    { 
        name : "login", 
        path : "/login", 
        component: () => import("@/pages/user/login/login_page.vue"),
        async beforeEnter(to, from, next) {
            const user = store.state.userStore.user;

            const param = {
                token: user.token !== undefined ? user.token : "",
            };

            const res = await axios.post(
                `${axios.defaults.baseURL}api/user/auth`,
                param,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const isAuth = res.data["auth"];

            if (isAuth) {
                next({ name: 'dashBoardHome' })
            } else {
                next()
            }
        }
    },
    { 
        name : "dashBoard",
        path : "/dashBoard",
        component: () => import("@/components/dash_board/dash_board.vue"),
        meta: { requiresAuth : true },
        children: [
            {
                name : "dashBoardHome",
                path: "home",
                component: () => import("@/pages/admin/user_list/user_list_page.vue"),
            },
            {
                name : "userDetail",
                path: "user/detail/:id",
                // lazy loading
                component: () => import("@/pages/admin/user_detail/user_detail_page.vue"),
            },
            {
                name : "profile",
                path: "user/profile/:id",
                component: () => import("@/pages/user/profile/profile_page.vue"),
            }
        ]
    }
];


const router = createRouter({
    routes,
    history: createWebHistory()
});

// router.beforeEach((to, from, next) => {
//     if(to.matched.some((recond) => recond.meta.requiresAuth)){
//         const user = store.state.userStore.user;

//         // console.log(`token : ${user.token}`);
//         // const param = {
//         //     token: user.token,
//         // };

//         // console.log(user);
//         try {
//             // const res = await axios.post(
//             //     `${axios.defaults.baseURL}api/user/auth`,
//             //     param,
//             //     {
//             //         headers: {
//             //             "Content-Type": "application/json",
//             //         },
//             //     }
//             // );

//             // const isAuth = res.data["auth"];

//             // console.log(to.path);
//             // console.log(`isAuth : ${isAuth}`);
//             // console.log(`user type : ${typeof user}`);
//             // console.log(`user : ${JSON.stringify(user)}`);
//             // console.log(`token : ${typeof user.token}`);
//             console.log(`${to.meta}`)
//             if (to.matched.some(record => record.meta.requiresAuth)) {
//                 console.log(`token : ${user['token']}`);
//                 if(user.token === undefined){
//                     console.log(`token : ${user['token'] === undefined}`);
//                     alert('해당 페이지는 로그인되어야 합니다!');
//                     next({
//                         name: 'login'
//                     });
//                 }else{
//                     next();
//                 }
//                 // console.log(`token : ${JSON.stringify(user.token)}`);
//                 console.log(`user : ${JSON.stringify(user)}`)
//                 console.log('you must login in!');
//                 return;
//             } 
//             console.log(`user : ${JSON.stringify(user)}`)
//             console.log('logging in!');
//             next();
            

//         } catch (e) {
//             console.error(`e : ${e}`);
//         }
//     }
// });

export default router;