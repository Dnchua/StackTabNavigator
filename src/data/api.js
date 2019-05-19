const localhost ='http://47.106.245.58:15515';
const localhostTest = 'http://192.168.31.178:15515';

export const api = {
    getSearchBook:localhostTest+'/getSearchBook?name=',
    teacherLogin:localhostTest+'/signin/teacher',
    login:localhostTest+'/signin',
    studentSignup: localhostTest+'/signup'
}