// Definindo a lista de estudantes com seus respectivos dados
var estudantes = [
  {
    nome: "João",
    nota1: 8,
    nota2: 7,
  },
  {
    nome: "Maria",
    nota1: 6,
    nota2: 7,
  },
  {
    nome: "Julia",
    nota1: 5,
    nota2: 7,
  },
]

// Função para calcular a média das notas de cada aluno
function calcularMedia(aluno) {
  return (aluno.nota1 + aluno.nota2) / 2
}

// Função para verificar se o aluno foi aprovado ou reprovado
function verificarAprovacao(aluno) {
  var media = calcularMedia(aluno)
  var mensagem =
    "A média do(a) aluno(a) " + aluno.nome + " é: " + media.toFixed(2) + "\n"
  if (media >= 7) {
    mensagem +=
      "Parabéns, " + aluno.nome + ", você foi aprovado(a) no concurso!"
  } else {
    mensagem += "Não foi dessa vez, " + aluno.nome + "! Tente novamente."
  }
  alert(mensagem)
}

// Iterando sobre a lista de estudantes para verificar a aprovação de cada um
estudantes.forEach(function (aluno) {
  verificarAprovacao(aluno)
})
