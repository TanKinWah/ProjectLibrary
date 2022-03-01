import React, { Component } from "react"
import { Link } from 'react-router-dom'

export class FetchBook extends Component {
    static displayName = "Books";

    constructor() {
        super();
        this.state = { books: [], loading: true }
    }

    componentDidMount() {
        this.populaBookData();

    }

    static handleEdit(id) {
        window.location.href = "/book/edit/" + id;
    }


    static handleDelete(id) {
        if (!window.confirm("Voce deseja deletar o produto: " + id)) {
            return;
        }
        else {
            fetch("api/books/" + id, { method: "DELETE" }).
                then(json => {
                    window.location.href = "/fetch-book";
                    alert("Deletado com sucesso!");
                })
        }
    }

    static renderBooksTabela(books) {

        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Genero</th>
                        <th>Nome</th>
                        <th>Prefacio</th>
                        <th> Ações </th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(livro =>
                        <tr key={livro.id}>
                            <td>{livro.id}</td>
                            <td>{livro.genero}</td>
                            <td>{livro.nome}</td>
                            <td>{livro.conteudo}</td>

                            <td>
                                <button className="btn btn-success" onClick={(id) => this.handleEdit(livro.id)}> Edit </button> &nbsp;
                                <button className="btn btn-danger" onClick={(id) => this.handleDelete(livro.id)}>  Delete </button>
                            </td>
                          
                        </tr>
                    )}
                </tbody>

            </table>
        );

    }


    render() {
        let contents = this.state.loading
            ? <p><em> Carregando... </em></p>
            : FetchBook.renderBooksTabela(this.state.books);

        return (
            <div>
                <h1 id="tabelLabel"> Books/Livros </h1>
                <p> Tela de Listagem de Books </p>

                <p>
                    <Link to="/add-book"> Cadastrar Books </Link>
                </p>

                {contents}
            </div>
        )
    }


    async populaBookData() {
        const response = await fetch("api/books");
        const data = await response.json();
        this.setState({ books: data, loading: false })
    }

}