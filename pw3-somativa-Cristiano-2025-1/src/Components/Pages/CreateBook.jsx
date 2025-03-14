import React from "react";
import { useState } from "react";
import style from "./Createbooks.module.css";

import Input from "../Form/input";
import Select from "../Form/Select";
import Button from "../Form/Button";

const CreateBook = () => {
  /*Tudo que não será renderizdo fica fora do return*/
  /* Cria a estrutura de state para os dados de livros*/

  const [book, setBook] = useState({});

    /* Monitoramento de mudança dos elementos do input em form*/
    function handlerChangeBook(event){
      setBook({...book, [event.target.name] : event.target.value});
      console.log(book);
    }

    /* Monitoramento de mudança dos elementos do select em form*/
    function handlerChangeCategory(event) {
        setBook({...book, category : event.target.options[event.target.selectedIndex].text})
    }

    /* Envio dos dados para a Api */
    function submit(event) {
        event.preventDefault();   /* não enviar os dados para o banco */
        console.log(book);
    }

  return (
    <section className={style.create_book_container}>
      <h1>CADASTRO DE LIVROS</h1>

        <form onSubmit={submit}>

        <Input
        type="text"
        name="txt_livro"
        id="txt_livro"
        placeholder="Digite o nome do livro"
        handlerChange={handlerChangeBook}
      />

      <Input
        type="text"
        name="txt_autor"
        id="txt_autor"
        placeholder="Digite o nome do autor"
        handlerChange={handlerChangeBook}
      />

      <Input
        type="text"
        name="txt_descricao"
        id="txt_descricao"
        placeholder="Digite a descrição do livro"
        handlerChange={handlerChangeBook}
      />

      <Select
        name="slc_categoria"
        id="slc_categoria"
        text="Categoria do Livro"
        handlerChange={handlerChangeCategory}
      />

      <Button
       label="Cadastrar Livro" 
       />

      </form>

    </section>
  );
};

export default CreateBook;
