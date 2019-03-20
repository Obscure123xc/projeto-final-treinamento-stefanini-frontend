routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $urlRouterProvider) {
    let homeState = {
        name: 'home',
        url: '/home',
        templateUrl: './modulos/home/home.view.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      }
      $stateProvider.state(homeState);
      
      let armarioState = {
        name: 'armario',
        url: '/armario',
        templateUrl: './modulos/armario/armario.view.html',
        controller: 'ArmarioController',
        controllerAs: 'vm'
      }
      $stateProvider.state(armarioState);
      
      $urlRouterProvider.otherwise('/home')  
}