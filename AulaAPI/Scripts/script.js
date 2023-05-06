function pesquisarCEP(){
    let cep = document.querySelector("#CEP").value
    fetch("https://viacep.com.br/ws/" + cep + "/json/")
        .then(response => response.json()) 
        .then(response => {
            document.querySelector("#logradouro").value = response.logradouro
            document.querySelector("#bairro").value = response.bairro
            document.querySelector("#localidade").value = response.localidade
            document.querySelector("#uf").value = response.uf
            document.querySelector("#ibge").value = response.ibge
        })
}

function limpar() {
    //Limpa valores do formulário de cep.
    let cep = document.querySelector("#CEP").value=("")
    document.querySelector('#logradouro').value=("");
    document.querySelector('#bairro').value=("");
    document.querySelector('#localidade').value=("");
    document.querySelector('#uf').value = ("");
    document.querySelector('#ibge').value = ("");
}

function AtualizarTabela() {
    document.querySelector("#tabela").insertAdjacentElement("beforeEnd.")
}
<tr>
    <td>${response.cep}</td>
    <td>${response.logradouro}</td>
    <td>${response.bairro}</td>
    <td>${response.localidade}</td>
    <td>${response.uf}</td>
    <td>${response.ibge}</td>
</tr>
    
