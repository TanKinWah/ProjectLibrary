import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <h1>Olaaa!</h1>
                <p>Bem vindo a um projeto teste de livraria.</p>
                <ul>
                    <li><a href='/add-book'>Cadastrar</a> um novo livro.</li>
                    <li><a href='fetch-book'>Livros</a> ja cadastrados.</li>
                </ul>
                <p>No menu se encontra os atalhos:</p>
                <ul>
                    <li><strong>Home</strong>. -> Volta ao menu inicial.</li>
                    <li><strong>Books</strong>. -> O registro dos livros e as acoes: <code>CRIAR, EDITAR e DELETAR</code> onde verificar tambem os livros cadastrados.</li>
                </ul>
                <p>Para testar os endpoints do <code>CRUD</code>, por favor entre no <a href='/swagger'>Swagger</a>.</p>
            </div>
        );
    }
}
