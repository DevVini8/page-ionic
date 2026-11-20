angular.module('ucsalApp')

.controller('NoticiasCtrl', function($scope, $state, $stateParams, NoticiasService) {
  $scope.publicacoes = NoticiasService.listar();
  $scope.filtro = {
    categoria: ''
  };

  if ($stateParams.id) {
    $scope.noticiaAtual = NoticiasService.buscarPorId($stateParams.id);
  }

  $scope.abrirDetalhe = function(id) {
    $state.go('app.noticia-detalhe', { id: id });
  };
});
