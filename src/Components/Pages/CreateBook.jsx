import React from "react";
import { useState, useEffect } from "react"; //mandar os dados do formulário, captura os dados
import style from "./Createbooks.module.css";

import Input from "../Form/input";
import Select from "../Form/Select";
import Button from "../Form/Button";

const CreateBook = () => {
  /*Tudo que não será renderizdo fica fora do return*/
  /* Cria a estrutura de state para os dados de livros*/

  const [book, setBook] = useState({});

   /* Cria a estrutura de state para os dados de categoria*/
  const [categories, setCategories] = useState([]);

    /* Monitoramento de mudança dos elementos do input em form*/
    function handlerChangeBook(event){
      setBook({...book, [event.target.name] : event.target.value});
      console.log(book);
    }

    /* Monitoramento de mudança dos elementos do select em form*/
    function handlerChangeCategory(event) {
        setBook({...book, cod_categoria : event.target.options[event.target.selectedIndex].text})
    }

    /* Envio dos dados para a Api */
    function submit(event) {
        event.preventDefault();   /* não enviar os dados para o banco */
        console.log(book);
    }
    
    /* Recupera os dados da Apirest */

    useEffect(()=>{
      fetch('http://127.0.0.1:5000/listagemCateorias', {
        method:'GET', 
        headers:{
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Headers':'*'
        }

      }).then((response)=>
        response.json()
      ).then((categorias)=>{
         console.log('TESTE' + categorias.data);
      }).catch((error)=>{
        console.log('ERRO: ' + error);
      })
    }, []);


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
      />

      <Button
       label="Cadastrar Livro" 
       />

      </form>

    </section>
  );
};

export default CreateBook;
