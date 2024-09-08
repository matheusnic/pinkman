function search() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  // se o campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
    section.innerHTML = "<p>type some movie dude</p>"
return
  }

  campoPesquisa = campoPesquisa.toLowerCase ()

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = "";
  let synopsis = "";
  let tags = "";
  // Itera sobre cada dado da lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    synopsis = dado.synopsis.toLowerCase()
    tags = dado.tags.toLowerCase()
    // se titulo inclui campoPesquisa
    if (titulo.includes(campoPesquisa) || synopsis.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // cria um novo elemento
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.synopsis}</p>
        <a href=${dado.link} target="_blank">Imdb yo</a>
      </div>
    `;
    }
  }

  if(!resultados) {
    resultados = "<p>didn't watch that one bro, is it new?</p>"
  }

  // Insere os resultados gerados na seção HTML
  section.innerHTML = resultados;
}
// console.log(dados); // (Comentário opcional: para verificar o conteúdo de 'dados')