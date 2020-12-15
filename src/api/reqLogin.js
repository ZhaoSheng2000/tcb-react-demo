import tcb from "tcb-js-sdk";

const app = tcb.init({
    env: "movie-0g7l5naq8b967325"
});

const auth = app.auth();


export const reqLogin = ({ email, password }) => auth
.signInWithEmailAndPassword(email, password)
.then((loginState) => {
    // 邮箱密码登录成功
    return ({ data: '邮箱密码登录成功', code: 200 })
})
.catch(err => {
return({data: '登录失败', message:err,code:201})
})
    ;