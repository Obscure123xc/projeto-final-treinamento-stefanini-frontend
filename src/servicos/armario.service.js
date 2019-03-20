import angular from 'angular';

class ArmarioService {

    constructor($http) {
        this.$http = $http;
        //const apiBase = "http://localhost:9090/projeto/api";
        const apiBase = "http://localhost:8080";
        this.path =  apiBase + "/armario";
    }
    
    getArmarios() {
        return this.$http.get(this.path);
    }
    salvar(Armario){
        return this.$http.post(this.path,+"/salvar");
    }
    excluir(id){
        return this.$http.delete(this.path + "/excluir"+"/"+{id},{'Content-Type': 'application/json'});
    }
    editar(armario){
        return this.$http.put(this.path,"/editar");
    }
}

export default angular.module('services.armario-service', [])
.service('armarioService', ArmarioService)
.name;