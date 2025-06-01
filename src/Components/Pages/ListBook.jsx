import React from "react";
import { useState, useEffect } from "react";
import Style from './ListBook.module.css'

import BookCard from "../BookCard";

import cavernas from "./Details/cavernas_aco.jpg"

import Container from "../Layout/Container";

const ListBook = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/listagemLivros', {

            method: 'GET',
            mode: 'cors',
            headers: {

                'Conten-Type': 'application/json',
                'Access-Control-Allow-Oringins': '*',
                'Access-Control-Allow-Headers': '*'

            }

        }).then((resp) => resp.json())
            .then((bookData) => {

                setBooks(...books, bookData.data)

                console.log(bookData.data)


            }).catch((err) => { console.log(err) });

    }, []);

    return (

        <section className={Style.body} >

            <h1>LIVROS CADASTRADOS</h1>

            <Container>

                {books.map((book) => (

                    <BookCard
                        cod_livro={book.cod_livro}
                        nome_livro={book.nome_livro}
                        autor_livro={book.autor_livro}
                        img_livro = {cavernas}
                        key={book.cod_livro} />
                ))

                }

            </Container>

        </section>

    )
}

export default ListBook