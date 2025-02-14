import './App.css'

import BookCard from './components/BookCard'

import capa_livro from'./assets/cavernas_aco.jpg'

function App (){

  return(
    <>
      <h1>PW3 - WEBAPP - LIVRARIA</h1>
      <BookCard
        titulo='As Cavernas de Aço'
        autor='Isaac Azimov'
        imagem={capa_livro} />

    </>
  )

}

export default App
