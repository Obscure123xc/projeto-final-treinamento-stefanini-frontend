import angular from 'angular';
import uirouter from 'angular-ui-router';

import ArmarioController from './armario.controller';

import armarioService from '../../servicos/armario.service';

export default angular.module('myApp.armario', [uirouter, armarioService])
  .controller('ArmarioController', ArmarioController)
  .name;