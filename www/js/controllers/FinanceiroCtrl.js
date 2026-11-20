angular.module('ucsalApp')

.controller('FinanceiroCtrl', function($scope, $ionicPopup, FinanceiroService) {
  $scope.semestres = FinanceiroService.listarSemestres();
  $scope.mensalidades = FinanceiroService.listarMensalidades();
  $scope.filtro = {
    semestre: '2026.1'
  };
  $scope.codigoCopiadoId = null;

  $scope.copiarCodigo = function(parcela) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(parcela.codigoBarras);
    }
    $scope.codigoCopiadoId = parcela.id;

    $ionicPopup.alert({
      title: 'Código de Barras Copiado',
      template: 'Linha digitável copiada:<br><br><b>' + parcela.codigoBarras + '</b>',
      okText: 'Fechar',
      okType: 'button-ucsal'
    });
  };
});
