import React, { Component } from "react"
import { Link } from 'react-router-dom'
import './AddBook.css';

export class Book {
    constructor() {
        this.id = 0;
        this.genero = "";
        this.nome = "";
        this.conteudo = "";
    }
}
export class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = { titulo: "", book: new Book(), loading: true }
        this.inicialize();
        this.handleSalvar = this.handleSalvar.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    async inicialize() {
        var id = this.props.match.params["id"];
        if (id > 0) {
            const response = await fetch("api/books/" + id);
            const data = await response.json();
            this.setState({ title: "Edição", book: data, loading: false });
        }
        else {
            this.state = { title: "Criando", book: new Book(), loading: false };
        }
    }

    render() {
        let contents = this.state.loading
            ? <p><em> Carregando... </em></p>
            : this.renderCreateForm();

        return (
            <div>
                <h1> {this.state.title} </h1>
                <h3> Book </h3>
                {contents}
            </div>
        );
    }

    handleCancel(event) {
        event.preventDefault();
        //this.props.history.push("/fetch-book");
        window.location.href = "/fetch-book";
    }

    handleSalvar(event) {
        event.preventDefault();

        const data = new FormData(event.target);

        if (this.state.book.id) {
            const response1 = fetch('api/books/' + this.state.book.id, { method: "PUT", body: data });
            window.location.href = "/fetch-book";
            //this.props.history.push("/fetch-book");
        }
        else {
            const response2 = fetch('api/books/', { method: "POST", body: data });
            window.location.href = "/fetch-book";
        }

    }

    renderCreateForm() {
        return (
            <form onSubmit={this.handleSalvar}>
                <div className="form-group row">
                    <input type="hidden" name="id" value={this.state.book.id} />
                </div>
                <div className="form-group row">
                    <div className="col-md-6">
                        <h6> O genero do livro (Conto de fada, Autoajuda, Ficcao, etc) </h6>
                        <input className="form-control" type="text" name="Genero" defaultValue={this.state.book.genero} required />
                        <h6> Nome do livro </h6>
                        <input className="form-control" type="text" name="Nome" Value={this.state.book.nome} required />
                        
                        <h6> Prefácio do livro</h6>
                        <textarea id="story" name="Conteudo"
                            rows="10" cols="100" Value={this.state.book.conteudo} require>
                            No luar da noite, era uma vez ...
                        </textarea>
                    </div>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-success" value={this.state.book.id}>Salvar</button>
                    <button type="Cancelar" className="btn btn-danger" onClick={this.handleCancel}>Cancelar</button>
                </div>
            </form>
        );
    }
}