
// 验证手机号
export const checkMobile = (m)=>{
  if(/^[1][3,4,5,7,8][0-9]{9}$/.test(m)){
    return true;
  }
  return false;
}


// 验证邮箱地址
export const checkEmail = (e) => {
  if (/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(e)) {
    return true;
  }
  return false ;
}


const check = {
  checkEmail,
  checkMobile,
}

export default check ;