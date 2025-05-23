import React, { useState, useEffect } from "react";
import style from "./Createbooks.module.css";

import Input from "../Form/Input";
import Select from "../Form/Select";
import Button from "../Form/Button";

const CreateBook = () => {
  /* Tudo que não será renderizado fica fora do return */

  /* Cria a estrutura de state para os dados do livro */
  const [book, setBook] = useState({});

  /* Cria a estrutura de state para os dados de categoria */
  const [categories, setCategories] = useState([]);

  /* Monitoramento de mudança dos elementos do input em form */
  function handlerChangeBook(event) {
    setBook({ ...book, [event.target.name]: event.target.value });
    console.log("Book:", book);
  }

  /* Monitoramento de mudança dos elementos do select em form */
  function handlerChangeCategory(event) {
    setBook({ ...book, cod_categoria: event.target.value });
  }

  /* Envio dos dados para a API */
  function submit(event) {
    event.preventDefault(); // Evita o comportamento padrão do form (recarregar página)
    console.log("Enviando livro:", book);
    insertBook(book);
  }

  /* Recupera os dados da API REST de categorias */
  useEffect(() => {
    fetch('http://127.0.0.1:5000/listagemCateorias', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((categorias) => {
        console.log("Categorias recebidas:", categorias.data);
        setCategories(categorias.data);
      })
      .catch((error) => {
        console.log("Erro ao carregar categorias:", error);
      });
  }, []);

  /* Inserção de livro na API REST */
  function insertBook(book) {
    fetch("http://127.0.0.1:5000/inserirLivro", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(book)
    })
      .then((response) => response.json())
      .then((respJSON) => {
        console.log("Resposta do servidor:", respJSON);
      })
      .catch((error) => {
        console.log("Erro ao inserir livro:", error);
      });
  }

  return (
    <section className={style.create_book_container}>
      <h1>CADASTRO DE LIVROS</h1>

      <form onSubmit={submit}>
        <Input
          type="text"
          name="nome_livro"
          id="nome_livro"
          placeholder="Digite o nome do livro"
          handlerChange={handlerChangeBook}
        />

        <Input
          type="text"
          name="autor_livro"
          id="autor_livro"
          placeholder="Digite o nome do autor"
          handlerChange={handlerChangeBook}
        />

        <Input
          type="text"
          name="descricao_livro"
          id="descricao_livro"
          placeholder="Digite a descrição do livro"
          handlerChange={handlerChangeBook}
        />

        <Select
          name="cod_categoria"
          id="cod_categoria"
          text="Categoria do Livro"
          handlerChange={handlerChangeCategory}
          options={categories}
        />

        <Button
          label="Cadastrar Livro"
          type="submit" // importante garantir que o botão seja de envio
        />
      </form>
    </section>
  );
};

export default CreateBook;
