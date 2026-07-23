fetch("../data/vagas.json")
    .then(resposta => resposta.json())
    .then(vagas => {

        const lista = document.getElementById("lista-vagas");

        vagas.forEach(vaga => {

            lista.innerHTML += `

                <div class="card">

                    <h2>${vaga.titulo}</h2>

                    <p class="info">
                        <strong>Regime:</strong> ${vaga.regime}
                    </p>

                    <p class="info">
                        <strong>Vagas:</strong> ${vaga.vagas}
                    </p>

                    <p class="info">
                        <strong>Publicação:</strong> ${vaga.publicacao}
                    </p>

                    <span class="status ${vaga.status}">
                        ${vaga.status === "aberto"
                    ? "Aberto para envio"
                    : "Fechado para envio"}
                    </span>

                    <a href="detalhes.html?id=${vaga.id}" class="botao">

                        Ver detalhes

                    </a>

                </div>

            `;

        });

    });