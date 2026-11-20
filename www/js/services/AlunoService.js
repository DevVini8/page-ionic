angular.module('ucsalApp')

.factory('AlunoService', function(AuthService) {
  return {
    obterDados: function() {
      var aluno = AuthService.getAlunoLogado();
      var chave = 'ucsal_cadastro_' + aluno.matricula;
      var salvo = localStorage.getItem(chave);
      if (salvo) {
        return JSON.parse(salvo);
      }
      return angular.copy(aluno);
    },
    salvarDados: function(dados) {
      var chave = 'ucsal_cadastro_' + dados.matricula;
      localStorage.setItem(chave, JSON.stringify(dados));
      localStorage.setItem('ucsal_aluno_logado', JSON.stringify(dados));
      return true;
    }
  };
});
