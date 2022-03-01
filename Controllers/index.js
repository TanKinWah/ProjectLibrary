const express = require('express'); //importa o express

const server = express(); //cria uma variável chamada server que chama a função express

server.use(express.json()); //faz com que o express entenda JSON

const library = ['Book', 'chair', 'user', 'employeer']; //as informações ficarão armazenadas dentro deste array

server.use((req, res, next) => { //server.use cria o middleware global
    console.time('Request'); //marca o início da requisição
    console.log(`Método: ${req.method}; URL: ${req.url}; `); //retorna qual o método e url foi chamada

    next(); //função que chama as próximas ações

    console.log('Finalizou'); //será chamado após a requisição ser concluída
    console.timeEnd('Request'); //marca o fim da requisição
});

function checkLibraryExists(req, res, next) {
    const lib = library[req.params.index];
    if (!req.body.name) { //middleware local que irá checar se a propriedade name foi informada corretamente
        return res.status(400).json({ error: 'Library item does not exist' }); //caso negativo, irá retornar um erro 400 - BAD REQUEST
    }
    req.lib = lib;

    return next(); //se o nome for informado corretamente, a função next() chama as próximas ações
}

function checkLibraryInArray(req, res, next) {
    const lib = library[req.params.index];
    if (!lib) {
        return res.status(400).json({ error: 'Library item does not exist in array' });
    } //checa se o Library existe no array, caso negativo informa que o index não existe
    req.lib = lib;

    return next();
}

server.get('/library', (req, res) => {
    return res.json(library);
}) //rota para listar todos os Library

server.get('/library/:index', checkLibraryInArray, (req, res) => {
    return res.json(req.lib);
})

server.post('/library', checkLibraryExists, (req, res) => {
    const { name } = req.body; //buscar o name informado dentro do body da requisição
    library.push(name);

    return res.json(library); //retorna a informação da variável Library
})

server.put('/library/:index', checkLibraryInArray, checkLibraryExists, (req, res) => {
    const { index } = req.params; //recupera o index com os dados
    const { name } = req.body;

    library[index] = name; //sobrepõe o index obtido na rota de acordo com o novo valor

    return res.json(library);
}) //retorna novamente os Library atualizados após o update

server.delete('/library/:index', checkLibraryInArray, (req, res) => {
    const { index } = req.params; //recupera o index com os dados

    library.splice(index, 1); //percorre o vetor até o index selecionado e deleta uma posição no array

    return res.json(library);
}) // retorna os dados após a exclusão

server.listen(5000); //faz com que o servidor seja executado na porta 5000 do seu localhost:3000