
    /**
     * <pre>
     * 省、直辖市代码表：
     *     11 : 北京  12 : 天津  13 : 河北   14 : 山西  15 : 内蒙古
     *     21 : 辽宁  22 : 吉林  23 : 黑龙江 31 : 上海  32 : 江苏
     *     33 : 浙江  34 : 安徽  35 : 福建   36 : 江西  37 : 山东
     *     41 : 河南  42 : 湖北  43 : 湖南   44 : 广东  45 : 广西  46 : 海南
     *     50 : 重庆  51 : 四川  52 : 贵州   53 : 云南  54 : 西藏
     *     61 : 陕西  62 : 甘肃  63 : 青海   64 : 宁夏  65 : 新疆
     *     71 : 台湾
     *     81 : 香港  82 : 澳门
     *     91 : 国外
     * </pre>
     */
    let CITY_CODE = ["11", "12", "13", "14", "15", "21", "22", "23", "31", "32", "33", "34", "35", "36", "37", "41", "42", "43", "44", "45", "46", "50", "51", "52", "53", "54", "61", "62", "63", "64", "65", "71", "81", "82", "91"];

    /**
     * 效验码
     */
    let PARITYBIT = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];

    /**
     * 加权因子
     * Math.pow(2,  i - 1) % 11
     */
    let POWER = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];


    export default isCard;

    /**
     * 验证是否为正确的身份证号码
     *
     * @param id
     * @return
     */
    function isCard(id) {
        if (id == undefined || id ==null) {
            return false;
        }

        const  len = id.length;
        if (len != 15 && len != 18) {
            return false;
        }

        //校验区位码
        if (!validCityCode(id.substring(0, 2))) {
            return false;
        }

        //校验生日
        if (!validDate(id)) {
            return false;
        }

        if (len == 15) {
            return true;
        }

        //校验位数
        return validParityBit(id);

    }

    function validParityBit(id) {
        const cs = id.toUpperCase().split('');

        let power = 0;
        for (let i = 0; i < cs.length; i++) {
            //最后一位可以是X
            if (i == cs.length - 1 && cs[i] == 'X') {
                break;
            }

            // 非数字
            if (!/^[0-9]$/.test(Number(cs[i]))) {
                return false;
            }

            // 加权求和
            if (i < cs.length - 1) {
                power += (cs[i] - '0') * POWER[i];
            }
        }


        return PARITYBIT[power % 11] == cs[cs.length - 1];
    }

    function validDate( id) {
        // try {
        //     String birth = id.length() == 15 ? "19" + id.substring(6, 12) : id.substring(6, 14);
        //     SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
        //     Date birthDate = sdf.parse(birth);
        //     if (!birth.equals(sdf.format(birthDate))) {
        //         return false;
        //     }
        // } catch (ParseException e) {
        //     return false;
        // }

        let birth=id.length===15?`19${id.substring(6,12)}`:id.substring(6,14);


        const Y=Number(birth.substr(0,4));
        const M=Number(birth.substr(4,2));
        const D=Number(birth.substr(6,2));


        if(!(Y>1900)){
            return false;
        }

        if(!(1<=M<=12)){
            return false;
        }

        if(D<1||isNaN(D)){
          return false;
        }

        if(M==2){
            if(Y%4==0){
                if(D>29){
                    return false;
                }
            }else{
                if(D>=28){
                    return false;
                }
            }
        }else if(M==4||M==6||M==9||M==11){
            if(D>=30){
                return false;
            }
        }else{
            if(D>=31){
                return false ;
            }
        }

        return true;
    }

    function validCityCode(cityCode) {

        if(CITY_CODE.includes(cityCode)){
            return true ;
        }
        return false;
    }

