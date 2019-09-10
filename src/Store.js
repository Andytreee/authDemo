import { observable, action } from 'mobx';

class User {
    @observable isLogin = !!localStorage.getItem('isLogin');
    @action login () {
        this.isLogin = true;
    }
}


export default new User();
