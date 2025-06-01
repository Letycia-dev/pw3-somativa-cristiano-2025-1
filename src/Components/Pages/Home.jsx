import React from 'react'
import styles from './Home.module.css';
 
const Home = ()=>{
    return(
 
        <section className={styles.home_container}>
 
            <h1>Bem vindo ao WEB APP<span>LIBRI</span></h1>
            <p>Comece a gerenciar os seus livros agora mesmo!</p>
            <img src="./book_home.png" alt="" />
 
        </section>
 
    );
}
 
export default Home;
 