import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import style from './DetailBook.module.css'

import cavernas from '../Details/cavernas_aco.jpg'

import Button from '../../Button'


const DetailBook = () => {

    console.log('Imagem cavernas:', cavernas);


    /* RECUPERANDO O ID DA URL */
    const {cod_livro} = useParams();
    //console.log('ID:' + cod_livro);

    /* CRIA O STATE DE DADOS QUE VAI ARMAZENAR O DEALHE DO LIVRO ESCOLHIDO */
    const[book, setBook] = useState({});

    /* RECUPERANDO OS DADOS DE LIVRO PARA A EDIÇAO */
    useEffect(()=>{

        fetch(`http://localhost:5000/listagemLivro/${cod_livro}`, {
            method: 'GET',
            mode:'cors',
            headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Headers':'*',
        },
        })
            .then((resp)=>resp.json())
            .then((data)=>{
            setBook(data.data);
            console.log(data.data);
        })
        .catch((err)=>{console.log(err)});

        },[]);

    return (
        <div className={style.grid}>
            
            <div className={style.container_img}>
                <img className={style.img_book_detail} src={cavernas} alt='Capa do livro: As cavernas de aço' />
            </div>

            <div className={style.info}>

                <span className={style.titulo}>{book.nome_livro}</span>
                <span className={style.autor}>{book.autor_livro}</span>

                <span className={style.descricao}>
                    {book.descricao_livro}
                </span>

                <div className={style.container_buttons}>
                    <Button 
                        label='EDITAR'
                        router='/updateBook/'
                        cod_livro={book.cod_livro}
                        
                    />

                    <Button 
                        label='EXCLUIR'
                        router='/deleteBook/'
                        cod_livro={book.cod_livro}
                    />

                    <Button
                            label='Voltar'
                            router='/listBook'
                            cod_livro={''}
                    />

                </div>

            </div>

        </div>
    )

}

export default DetailBook