const iconeTopo = document.querySelector(".icone-topo");
const barraProgresso = document.querySelector(".barra-progresso");
const botaoToggleDireita = document.querySelector(".botao-toggle");
const menuLateralDireita = document.querySelector(".menu-lateral-direita");
const bolinhasParaAnimar = document.querySelectorAll(".cor");
const numerosAngulo = document.querySelectorAll(".numeros-arco li");

iconeTopo.addEventListener("click", () => {
  const estaAberto = barraProgresso.classList.contains("aberto");

  if (estaAberto) {
    [...bolinhasParaAnimar].reverse().forEach((bolinha, index) => {
      bolinha.style.transitionDelay = `${index * 0.1}s`;
    });
    barraProgresso.classList.remove("aberto");
  } else {
    bolinhasParaAnimar.forEach((bolinha, index) => {
      bolinha.style.transitionDelay = `${index * 0.1}s`;
    });
    barraProgresso.classList.add("aberto");
  }
});

botaoToggleDireita.addEventListener("click", () => {
  menuLateralDireita.classList.toggle("aberto");
});

const bancoDeImagens = {
  branco: {
    lado: "img/branco 2.webp",
    frente: "img/branco.webp",
    tras: "img/branco 2.webp",
    interno: "img/branco 2.webp",
  },
  roxo: {
    lado: "img/roxo 2.webp",
    frente: "img/roxo.webp",
    tras: "img/roxo 2.png",
    interno: "img/roxo 2.png",
  },
  azul: {
    lado: "img/azul 2.webp",
    frente: "img/azul.webp",
    tras: "img/azul 2.png",
    interno: "img/azul 2.png",
  },
  vermelho: {
    lado: "img/vermelho 2.webp",
    frente: "img/vermelho.webp",
    tras: "img/vermelho 2.png",
    interno: "img/vermelho 2.png",
  },
  preto: {
    lado: "img/preto 2.webp",
    frente: "img/preto.webp",
    tras: "img/preto 2.png",
    interno: "img/preto 2.png",
  },
};

let corAtual = "branco";
let anguloAtual = "lado";

function atualizarCarro() {
  const novaImagemSrc = bancoDeImagens[corAtual][anguloAtual];

  let imagemVisivel = document.querySelector(".carro-fade.ativo");
  let imagemInvisivel = document.querySelector(".carro-fade.inativo");

  if (!novaImagemSrc) return;

  imagemInvisivel.src = novaImagemSrc;

  imagemVisivel.classList.remove("ativo");
  imagemVisivel.classList.add("inativo");

  imagemInvisivel.classList.remove("inativo");
  imagemInvisivel.classList.add("ativo");
}

const bolinhasDeCor = document.querySelectorAll(".cor");

bolinhasDeCor.forEach((bolinha) => {
  bolinha.addEventListener("click", function () {
    if (this.classList.contains("ativo")) return;

    bolinhasDeCor.forEach((b) => b.classList.remove("ativo"));
    this.classList.add("ativo");

    corAtual = this.getAttribute("data-nome-cor");

    atualizarCarro();
  });
});

numerosAngulo.forEach((numero) => {
  numero.addEventListener("click", function () {
    const novoAngulo = this.getAttribute("data-angulo");

    if (anguloAtual === novoAngulo) return;

    numerosAngulo.forEach((n) => n.classList.remove("selecionado"));
    this.classList.add("selecionado");

    anguloAtual = novoAngulo;
    atualizarCarro();
  });
});
