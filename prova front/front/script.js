const uri = 'http://localhost:3000';

function carregar() {
    fetch(uri + '/read')
        .then((resp) => { return resp.json() })
            .then((data) => {
                data.forEach(chamado => {
                    let linha = document.createElement("tr");
                    let id = document.createElement("td");
                    let tipo = document.createElement("td");
                    let severidade = document.createElement("td");
                    let descricao = document.createElement("td");
                    let data = document.createElement("td");
                    let horaChama = document.createElement("td");
                    let horaI = document.createElement("td");
                    let horaF = document.createElement("td");
                    let destino = document.createElement("td");
                    let editar = document.createElement("td");
                    let excluir = document.createElement("td");

                    id.innerHTML = 
                    tipo.innerHTML = chamado.tipo;
                    severidade.innerHTML = (chamado.severidade == 1)? "Urgente" : 2? "Grave" : "Nomral";
                    descricao.innerHTML = chamado.descricao;
                    data.innerHTML = chamado.data;
                    horaChama.innerHTML = chamado.hora;
                    horaI.innerHTML = chamado.hora_inicio;
                    horaF.innerHTML = chamado.hora_fim;
                    destino.innerHTML = chamado.destino;
                    editar.innerHTML = `<img onClick = "preparaEdit(${chamado.id})" src='./assets/editar.png' width='40px' height='40px' />`
                    excluir.innerHTML = `<img onClick = "preparaExclusao(${chamado.id})" src='./assets/excluir.png' width='40px' height='40px' />`;

                    linha.appendChild(id);
                    linha.appendChild(tipo);
                    linha.appendChild(severidade);
                    linha.appendChild(descricao);
                    linha.appendChild(data);
                    linha.appendChild(horaI);
                    linha.appendChild(horaF);
                    linha.appendChild(destino);
                    linha.appendChild(editar);
                    linha.appendChild(excluir);

                    document.querySelector('tbody').appendChild(linha);
                })
         });
}