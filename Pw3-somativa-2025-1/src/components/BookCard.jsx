import React from 'react'
import './BookCard.css'

const BookCard = ({titulo, autor, imagem})=> {

    return(
        <div className='book-card'>
            <h3 className='book-titulo'> {titulo} </h3>
            <p className='book-autor'> {autor} </p>
            <img src={imagem} alt={`Capa do livro ${titulo}`} className='book-image' />
        </div>
    )
}

export default BookCard