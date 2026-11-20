angular.module('ucsalApp')

.factory('FinanceiroService', function() {
  var semestres = ['2025.2', '2026.1', '2026.2'];

  var mensalidades = [
    {
      id: 1,
      semestre: '2025.2',
      mes: 'Julho / 2025',
      vencimento: '10/07/2025',
      valor: 890.00,
      status: 'Paga',
      codigoBarras: ''
    },
    {
      id: 2,
      semestre: '2025.2',
      mes: 'Agosto / 2025',
      vencimento: '10/08/2025',
      valor: 890.00,
      status: 'Paga',
      codigoBarras: ''
    },
    {
      id: 3,
      semestre: '2025.2',
      mes: 'Setembro / 2025',
      vencimento: '10/09/2025',
      valor: 890.00,
      status: 'Paga',
      codigoBarras: ''
    },
    {
      id: 4,
      semestre: '2026.1',
      mes: 'Janeiro / 2026',
      vencimento: '10/01/2026',
      valor: 940.00,
      status: 'Paga',
      codigoBarras: ''
    },
    {
      id: 5,
      semestre: '2026.1',
      mes: 'Fevereiro / 2026',
      vencimento: '10/02/2026',
      valor: 940.00,
      status: 'Paga',
      codigoBarras: ''
    },
    {
      id: 6,
      semestre: '2026.1',
      mes: 'Março / 2026',
      vencimento: '10/03/2026',
      valor: 940.00,
      status: 'A Pagar',
      codigoBarras: '03399.63290 64000.000006 00125.201020 4 95840000094000'
    },
    {
      id: 7,
      semestre: '2026.2',
      mes: 'Julho / 2026',
      vencimento: '10/07/2026',
      valor: 980.00,
      status: 'Paga',
      codigoBarras: ''
    },
    {
      id: 8,
      semestre: '2026.2',
      mes: 'Agosto / 2026',
      vencimento: '10/08/2026',
      valor: 980.00,
      status: 'A Pagar',
      codigoBarras: '03399.63290 64000.000008 00126.201020 1 97350000098000'
    },
    {
      id: 9,
      semestre: '2026.2',
      mes: 'Setembro / 2026',
      vencimento: '10/09/2026',
      valor: 980.00,
      status: 'A Pagar',
      codigoBarras: '03399.63290 64000.000009 00126.201020 8 97660000098000'
    }
  ];

  return {
    listarSemestres: function() {
      return semestres;
    },
    listarMensalidades: function() {
      return mensalidades;
    }
  };
});
