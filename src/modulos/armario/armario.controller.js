import { inherit } from "@uirouter/core";

export default class ArmarioController {

  constructor(armarioService) {
    var vm = this;
    this.name = 'Armario';
   
    init();

    function init(){
      armarioService.getArmarios().then(function abc(resp) {
        vm.armarios = resp.data;
      });
    }
    vm.salvar = function(armario){
      armarioService.salvar(armario).then(function abc(resp) {
        vm.resposta = resp.data;
        init();
      });
    }
    vm.excluir = function(id){
      armarioService.excluir(id).then(function abc(resp) {
        vm.resposta = resp.data;
        init()
      });
    }
    vm.editar = function(armario){
      armarioService.editar(armario).then(function abc(resp) {
        vm.resposta = resp.data;
        init()
      });
      
    }
  }
  
}
ArmarioController.$inject = ['armarioService'];