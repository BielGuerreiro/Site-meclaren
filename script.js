// 1. Seleciona todas as bolinhas de cor no cabeçalho
const bolinhasDeCor = document.querySelectorAll(".cor");

// Adiciona o "ouvinte de clique" em cada bolinha
bolinhasDeCor.forEach((bolinha) => {
  bolinha.addEventListener("click", function () {
    // A. Se clicou na cor que já está ativa, para por aqui.
    if (this.classList.contains("ativo")) return;

    // B. Atualiza visualmente as bolinhas (troca a borda branca)
    bolinhasDeCor.forEach((b) => b.classList.remove("ativo"));
    this.classList.add("ativo");

    // --- AQUI É A LIGAÇÃO QUE VOCÊ QUERIA ---

    // C. Lê a "etiqueta invisível" para saber qual imagem carregar
    const novaCorSrc = this.getAttribute("data-cor");

    // D. Encontra as duas imagens lá no container principal
    let imagemVisivel = document.querySelector(".carro-fade.ativo");
    let imagemInvisivel = document.querySelector(".carro-fade.inativo");

    // E. Coloca a nova imagem na tag que está escondida atrás
    imagemInvisivel.src = novaCorSrc;

    // F. Troca as classes para o CSS fazer a transição suave
    // A imagem da frente começa a sumir
    imagemVisivel.classList.remove("ativo");
    imagemVisivel.classList.add("inativo");

    // A imagem de trás começa a aparecer
    imagemInvisivel.classList.remove("inativo");
    imagemInvisivel.classList.add("ativo");
  });
});
