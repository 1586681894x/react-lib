import {
    observable,
    action,
    //computed
} from 'mobx';

// 资源项
class Store {
    @observable token = '';

    @action
    loadUser(){
        this.token = '';
    }
}

export default new Store();
