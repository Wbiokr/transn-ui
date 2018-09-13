export  const formatMDhm = (stamp=new Date(),type='YMD',st='-')=>{
  
  if(!stamp){
    return false;
  }
  
  const Y = new Date(stamp).getFullYear();
  const M = stayTwo(new Date(stamp).getMonth()+1);
  const D = stayTwo(new Date(stamp).getDate());
  const h = stayTwo(new Date(stamp).getHours());
  const m = stayTwo(new Date(stamp).getMinutes());
  const s = stayTwo(new Date(stamp).getSeconds());
  
  switch(type){
    case 'YM':
      return `${Y}${st}${M}`;
    // case 'YMD':
    //   return `${Y}${st}${M}${st}${D}`;
    case 'YMDh':
      return `${Y}${st}${M}${st}${D} ${h}`;
    case 'YMDhm':
      return `${Y}${st}${M}${st}${D} ${h}:${m}`;
    case 'YMDhms':
      return `${Y}${st}${M}${st}${D} ${h}:${m}:${s}`;
    case 'YMD':
    default:
      return `${Y}${st}${M}${st}${D}`;
  }


}

function stayTwo(s){
  return `0${s}`.slice(-2)
}

export default formatMDhm;