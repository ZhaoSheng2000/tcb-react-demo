import tcb from "tcb-js-sdk";

const app = tcb.init({
  env: "movie-0g7l5naq8b967325"
});
export const reqRegister =({email, password})=>app
  .auth()
  .signUpWithEmailAndPassword(email,password)
  .then(() => {
    console.log('发送邮件成功')
  })
  .catch((err) => {
    console.error('发送邮件err',err)
  });
  