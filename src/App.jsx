/* Importa os componentes de navegação */
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* Importa o arquivo base de CSS de App.jsx */
import './App.css'

/* Importa o compoente de BookCard */
//import BookCard from './components/BookCard'

/* Importa o compoente de NavBar */
import NavBar from './components/layout/NavBar'

/* Importa o compoente de Container */
import Container from './components/layout/Container'

/* Importa o componente de página de HOME */
import Home from './Components/Pages/Home.jsx'

/* Importa o componente de página de CREATE BOOKS */
import Createbooks from './Components/Pages/CreateBook'

/* Importa o componente de página de LIST BOOKS */
import ListBooks from './Components/Pages/ListBook.jsx'

/* Importa o componente de página de DETAIL BOOK */
import DetailBook from './components/pages/DetailBook'

/* Importa o componente de exclusão de livro */
import DeleteBook from './components/pages/DeleteBook'

/* Importa o componente de alteração de livro */
import UpdateBooks from './Components/Pages/UpdateBook.jsx'

/* Objeto de imagem para teste de insercão de imagem */
// import cavernas from './assets/cavernas_aco.jpg'

function App() {
  return (
    <>

      {/* Chamada do componente de BookCard com passagem de dados por meio de props */}
      {/* <BookCard 
        titulo='As Cavernas de Aço'
        autor='Isaac Azimov'
        imagem={cavernas}
      /> */}

      {/* Chamada do componente de NavBar */}
      {/* <NavBar /> */}

        {/* <img className='book_home' src="./book_home.jpg" alt="" /> */}
        {/* <Home /> */}
        {/* <Createbooks /> */}
        {/* <ListBooks /> */}

        {/* ESTRUTURA DE ROTAS/NAVEGAÇÃO */}
        <BrowserRouter>

        <Container>

            <Routes>

              <Route path='/' element={<NavBar />}>

                  <Route path='/' element={<Home />} />
                  <Route path='/listBook' element={<ListBooks />} />
                  <Route path='/newBook' element={<Createbooks />} />
                  <Route path='/detailBook/:cod_livro' element={<DetailBook />} />
                  <Route path='/deleteBook/:cod_livro' element={<DeleteBook />} />
                  <Route path='/updateBook/:cod_livro' element={<UpdateBooks />} />
                  <Route path='/updateBook/' element={<UpdateBooks />} />

              </Route>

            </Routes>

        </Container>

        </BrowserRouter>

    </>
  )
}

export default App