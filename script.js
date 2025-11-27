const iconeTopo = document.querySelector(".icone-topo");
const barraProgresso = document.querySelector(".barra-progresso");

iconeTopo.addEventListener("click", () => {
  barraProgresso.classList.toggle("aberto");
});

const bolinhasDeCor = document.querySelectorAll(".cor");

bolinhasDeCor.forEach((bolinha) => {
  bolinha.addEventListener("click", function () {
    if (this.classList.contains("ativo")) return;

    bolinhasDeCor.forEach((b) => b.classList.remove("ativo"));
    this.classList.add("ativo");

    const novaCorSrc = this.getAttribute("data-cor");

    let imagemVisivel = document.querySelector(".carro-fade.ativo");
    let imagemInvisivel = document.querySelector(".carro-fade.inativo");

    imagemInvisivel.src = novaCorSrc;

    imagemVisivel.classList.remove("ativo");
    imagemVisivel.classList.add("inativo");

    imagemInvisivel.classList.remove("inativo");
    imagemInvisivel.classList.add("ativo");
  });
});
