const localhost ='http://47.106.245.58:15515';
const localhostTest = 'http://192.168.31.178:15515';

export const api = {
    zhuye:localhost,
    getSearchBook:localhost+'/getSearchBook?name=',
    teacherLogin:localhost+'/signin/teacher',
    login:localhost+'/signin',
    studentSignup: localhost+'/signup',
    addBook: localhost+'/addBook',
    changePersonInfo:localhost+'/changePersonInfo',
    changePsw:localhost+'/changePsw',
    defaultPic:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559407130987&di=c5c64f02b85a768b65a1399cd8b16d35&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fbdaca9a07e1a8947c00c2f826ebf848750927aa24963-cATwbg_fw658',
    getRecommendBook:localhost+'/getRecommendBook?id='

}