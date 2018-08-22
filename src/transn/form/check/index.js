export const checkUsername = (v,cb=function(){
  alert('输入的用户名无效')
}) => {
  if (v.length == 0 || v == undefined || !/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(v)) {
    cb();
    return false;
  }

}

export const checkMobile = (m,cb=()=>{
  alert('请输入正确的手机号')
})=>{
  if(!/^[1][3,4,5,7,8][0-9]{9}$/.test(m)){
    cb()
    return false;
  }
}

export const checkPassword = (p,cb=function(){
  alert("密码长度应为8~16位，数字+字母组合")
}) => {
  if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{8,16}$/.test(p)) {
    cb()
    return false;
  }
}

export const checkEmail = (e,cb=function(){
  alert("请输入正确的Email")
}) => {
  if (!/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(e)) {
    cb()
    return false;
  }
}
// ^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$ 

export const checkActor = (a,cb=function(){
  alert('未选择身份')
}) => {
  if (a == undefined) {
    cb()
    return false;
  }
}

const check = {
  checkUsername,
  checkPassword,
  checkActor,
  checkEmail,
  checkMobile,
}

export default check ;