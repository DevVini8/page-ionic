angular.module('ucsalApp')

.controller('LoginCtrl', function($scope, $state, $rootScope, AuthService) {
  $scope.credenciais = {
    matricula: '',
    senha: ''
  };
  $scope.erroLogin = '';
  $rootScope.alunoLogado = AuthService.getAlunoLogado();

  $scope.entrar = function() {
    if (!$scope.credenciais.matricula || !$scope.credenciais.senha) {
      $scope.erroLogin = 'Preencha a matrícula e a senha.';
      return;
    }

    var aluno = AuthService.login($scope.credenciais.matricula, $scope.credenciais.senha);
    if (aluno) {
      $scope.erroLogin = '';
      $rootScope.alunoLogado = aluno;
      $state.go('app.noticias');
    } else {
      $scope.erroLogin = 'Matrícula ou senha inválidos.';
    }
  };

  $scope.sair = function() {
    AuthService.logout();
    $rootScope.alunoLogado = null;
    $scope.credenciais = { matricula: '', senha: '' };
    $state.go('login');
  };
});
