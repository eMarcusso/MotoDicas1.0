var database = require("../database/config")

function listar() {
    var instrucao = `
    select combo, count(combo) from cadastro group by combo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar
};  