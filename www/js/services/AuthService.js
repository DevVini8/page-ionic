angular.module('ucsalApp')

.factory('AuthService', function() {
  var alunos = [
    {
      matricula: '20261001',
      senha: '123456',
      nome: 'Gabriel Almeida Souza',
      curso: 'Engenharia de Software',
      email: 'gabriel.souza@ucsal.edu.br',
      telefone: '(71) 99876-5432',
      cep: '41740-000',
      rua: 'Av. Prof. Pinto de Aguiar, 2589',
      bairro: 'Pituaçu',
      cidade: 'Salvador - BA'
    },
    {
      matricula: '20261002',
      senha: '123456',
      nome: 'Mariana Costa Lima',
      curso: 'Engenharia de Software',
      email: 'mariana.lima@ucsal.edu.br',
      telefone: '(71) 99123-4567',
      cep: '40231-300',
      rua: 'Av. Cardeal da Silva, 205',
      bairro: 'Federação',
      cidade: 'Salvador - BA'
    }
  ];

  var alunoLogado = null;

  var salvo = localStorage.getItem('ucsal_aluno_logado');
  if (salvo) {
    alunoLogado = JSON.parse(salvo);
  }

  return {
    login: function(matricula, senha) {
      for (var i = 0; i < alunos.length; i++) {
        if (alunos[i].matricula === matricula && alunos[i].senha === senha) {
          alunoLogado = angular.copy(alunos[i]);
          localStorage.setItem('ucsal_aluno_logado', JSON.stringify(alunoLogado));
          return alunoLogado;
        }
      }
      return null;
    },
    logout: function() {
      alunoLogado = null;
      localStorage.removeItem('ucsal_aluno_logado');
    },
    getAlunoLogado: function() {
      return alunoLogado || alunos[0];
    }
  };
});
