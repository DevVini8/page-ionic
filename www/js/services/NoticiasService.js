angular.module('ucsalApp')

.factory('NoticiasService', function() {
  var publicacoes = [
    {
      id: 1,
      titulo: 'Inscrições abertas para a SEMOC 2026',
      data: '15/10/2026',
      categoria: 'Evento',
      campus: 'Campus Pituaçu',
      imagem: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
      resumo: 'Participe da Semana de Mobilização Científica da UCSal com palestras, minicursos e apresentação de artigos.',
      conteudo: 'A Semana de Mobilização Científica (SEMOC) da UCSal está com inscrições abertas para estudantes e pesquisadores. O evento acontecerá no Campus Pituaçu e contará com trilhas de Engenharia de Software, Inteligência Artificial e Sustentabilidade. Os alunos participantes receberão certificado de horas complementares.'
    },
    {
      id: 2,
      titulo: 'Prazo de Rematrícula para o Semestre 2026.2',
      data: '10/10/2026',
      categoria: 'Notícia',
      campus: 'Pituaçu e Federação',
      imagem: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
      resumo: 'Confira o calendário oficial de renovação de matrícula e garanta sua vaga nas disciplinas do próximo semestre.',
      conteudo: 'A Secretaria Acadêmica da UCSal informa que o período de rematrícula online para o semestre 2026.2 estará aberto até o final do mês. Para realizar a renovação, o estudante deve estar com a situação financeira regularizada e confirmar a grade de disciplinas no portal.'
    },
    {
      id: 3,
      titulo: 'Maratona de Programação UCSal Tech',
      data: '22/10/2026',
      categoria: 'Evento',
      campus: 'Campus Pituaçu',
      imagem: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      resumo: 'Forme sua equipe e participe do desafio de algoritmos e desenvolvimento de software da Escola de Tecnologias.',
      conteudo: 'A Escola de Tecnologias convida todos os alunos de Engenharia de Software para a Maratona de Programação UCSal Tech. As equipes terão 5 horas para resolver desafios práticos de lógica e arquitetura nos laboratórios do Campus Pituaçu.'
    },
    {
      id: 4,
      titulo: 'Edital de Iniciação Científica e Extensão',
      data: '05/10/2026',
      categoria: 'Notícia',
      campus: 'Campus Federação',
      imagem: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
      resumo: 'Estão abertas as seleções para bolsistas e voluntários em projetos de pesquisa e extensão universitária.',
      conteudo: 'A Pró-Reitoria de Pesquisa e Pós-Graduação publicou o novo edital de Iniciação Científica e Projetos de Extensão nos campi Pituaçu e Federação. Os estudantes de Engenharia de Software podem se candidatar às vagas de desenvolvimento de soluções sociais e inovação tecnológica.'
    }
  ];

  return {
    listar: function() {
      return publicacoes;
    },
    buscarPorId: function(id) {
      var idNum = parseInt(id, 10);
      for (var i = 0; i < publicacoes.length; i++) {
        if (publicacoes[i].id === idNum) {
          return publicacoes[i];
        }
      }
      return null;
    }
  };
});
