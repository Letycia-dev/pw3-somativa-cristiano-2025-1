import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Container from './components/Layout/Container'

/* IMPORTS DOS COMPONENTES DE PÁGINAS */
import Home from './components/pages/Home'
import CreateBook from './components/pages/CreateBook'
import ListBook from './components/pages/ListBook'
import DetailBook from './components/pages/Details/DetailBook'
import UpdateBooks from './components/pages/UpdateBook'
import DeleteBook from './components/pages/DeleteBook'
/* IMPORTAÇÃO DO NAVBAR */
import NavBar from './components/Layout/NavBar'

import cavernas from './assets/cavernas_aco.jpg'

function App() {

  return (
    <>

    
      <div>

        <BrowserRouter>

          <Container>

            <Routes>

              <Route path='/' element={<NavBar />}>
                <Route index element={<Home />} />
                <Route path='newBook' element={<CreateBook />} />
                <Route path='listBook' element={<ListBook />} />
                <Route path='/details/:cod_livro' element={<DetailBook />} />
                <Route path='/deleteBook/:cod_livro' element={<DeleteBook />} />
                <Route path='/updateBook/:cod_livro' element={<UpdateBooks />} />
              </Route>


            </Routes>

          </Container>

        </BrowserRouter>

      </div>
    </>
  )
}

export default App
