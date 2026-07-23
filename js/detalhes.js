// Pega o ID que veio na URL
const parametros = new URLSearchParams(window.location.search);
const id = Number(parametros.get("id"));

// Lê o arquivo JSON
fetch("../data/vagas.json")
    .then(resposta => resposta.json())
    .then(vagas => {

        // Procura a vaga pelo ID
        const vaga = vagas.find(v => v.id === id);

        // Caso não encontre
        if (!vaga) {

            document.querySelector(".vaga").innerHTML =
                "<h2>Vaga não encontrada.</h2>";

            return;
        }

        // Preenche os dados
        document.getElementById("titulo").textContent = vaga.titulo;
        document.getElementById("empresa").textContent = vaga.empresa || "-";
        document.getElementById("regime").textContent = vaga.regime;
        document.getElementById("salario").textContent = vaga.salario || "-";
        document.getElementById("local").textContent = vaga.local || "-";
        document.getElementById("vagas").textContent = vaga.vagas;
        document.getElementById("descricao").textContent = vaga.descricao || "-";

        // Status
        const status = document.getElementById("status");

        if (vaga.status === "aberto") {

            status.textContent = "Aberto para envio";
            status.classList.add("aberto");

        } else {

            status.textContent = "Fechado";
            status.classList.add("fechado");

        }

        // Requisitos
        const listaRequisitos = document.getElementById("requisitos");

        vaga.requisitos.forEach(item => {

            listaRequisitos.innerHTML += `<li>${item}</li>`;

        });

        // Benefícios
        const listaBeneficios = document.getElementById("beneficios");

        vaga.beneficios.forEach(item => {

            listaBeneficios.innerHTML += `<li>${item}</li>`;

        });

        // Botão candidatura
        document.getElementById("btn-candidatura").href =
            `candidatura.html?id=${vaga.id}`;

    });