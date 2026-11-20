angular.module('ucsalApp')

.controller('PerfilCtrl', function($scope, $ionicPopup, $rootScope, AlunoService) {
  $scope.aluno = AlunoService.obterDados();
  $scope.mensagemSucesso = false;

  $scope.$on('$ionicView.beforeEnter', function() {
    $scope.aluno = AlunoService.obterDados();
    $scope.mensagemSucesso = false;
  });

  $scope.salvarCadastro = function() {
    AlunoService.salvarDados($scope.aluno);
    $rootScope.alunoLogado = angular.copy($scope.aluno);
    $scope.mensagemSucesso = true;

    $ionicPopup.alert({
      title: 'Cadastro Atualizado',
      template: 'Seus dados de contato e endereço foram salvos com sucesso.',
      okText: 'OK',
      okType: 'button-ucsal'
    });
  };
});
