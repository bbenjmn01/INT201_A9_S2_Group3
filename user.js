import { CookieUtil } from "./cookie.js";

// ตรวจสอบ cookie ของ user 
function userStatus() {
    if(CookieUtil.get('user') == null) {
        let user = window.prompt("Enter Your Name: ");
        CookieUtil.set('user', user, new Date('January 1, 2022'));
    } else {
        alert(`Welcome ${CookieUtil.get('user')} !`)
    }
}

userStatus();
