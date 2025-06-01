import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import style from './CreateBook.module.css';

import Input from "../Form/Input";
import Select from "../Form/Select";
import Button from "../Form/Button";


const CreateBook = () => {
  const [book, setBook] = useState({});
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  // Captura os dados dos inputs
  const handleChangeBook = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
    console.log(book);
  };

  // Captura os dados do select (categoria)
  const handleChangeCategory = (event) => {
    setBook({
      ...book,
      cod_categoria: event.target.options[event.target.selectedIndex].value,
    });
  };

  // Envia o livro para a API
  const submit = (event) => {
    event.preventDefault();
    insertBook(book);
    console.log(book);
  };

  // Inserção de livro via API
  const insertBook = (book) => {
    fetch('http://127.0.0.1:5000/inserirLivro', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
      .then((response) => response.json())
      .then((respJson) => {
        console.log('Resposta: ', respJson);
        setMessage('Livro cadastrado com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao cadastrar livro: ', error);
        setMessage('Erro ao cadastrar livro.');
      });
  };

  // Busca as categorias da API
  useEffect(() => {
  fetch('http://127.0.0.1:5000/listagemCategorias', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((categories) => {
      setCategories(categories.data);
    })
    .catch((error) => {
      console.error('Erro ao buscar categorias:', error);
    });
}, []);


  return (
    <section className={style.create_book_container}>
      <form className={message ? style.alertMessage : ''} onSubmit={submit}>
        <h1>CADASTRO DE LIVROS</h1>

        <Input
          type="text"
          name="nome_livro"
          id="nome_livro"
          placeholder="Digite o nome do livro"
          action={handleChangeBook}
        />

        <Input
          type="text"
          name="autor_livro"
          id="autor_livro"
          placeholder="Digite o nome do autor"
          action={handleChangeBook}
        />

        <Input
          type="text"
          name="descricao_livro"
          id="descricao_livro"
          placeholder="Digite a descrição do livro"
          action={handleChangeBook}
        />

        <Select
          name="cod_categoria"
          id="cod_categoria"
          text="Categoria do Livro"
          handlerChange={handleChangeCategory}
          options={categories}
        />

        <Button label="Cadastrar Livro" />
      </form>

      {message && (
        <div className={style.message}>
          <p>{message}</p>
          <button
            onClick={() => {
              setMessage('');
              navigate('/listBook');
            }}
          >
            OK
          </button>
        </div>
      )}
    </section>
  );
};

export default CreateBook;
