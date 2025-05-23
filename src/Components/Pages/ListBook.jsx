import React, { useState, useEffect } from "react";
import style from './ListBook.module.css';

import cavernas from '../../assets/cavernas_aco.jpg'
import BookCard from "../../Components/BookCard.jsx";
import Conteiner from '../Layout/Container.jsx';

const ListBook = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/listagemLivros', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            }
        })
        .then((resp) => resp.json())
        .then((bookData) => {
            setBooks(bookData.data);
            console.log(bookData.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <section className={style.body}>
            <h1>LIVROS CADASTRADOS</h1>
            <Conteiner>
                {books.map((book) => (
                    <BookCard
                        key={book.cod_livro}
                        cod_livro={book.cod_livro}
                        nome_livro={book.nome_livro}
                        autor_livro={book.autor_livro}
                        img_livro={cavernas}
                    />
                ))}
            </Conteiner>
        </section>
    );
};

export default ListBook;
