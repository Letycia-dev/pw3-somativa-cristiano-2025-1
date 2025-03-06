import { useState } from "react";
import Styles from "./BookCard.module.css";
import "./BookCard.css";
import GuerraCivil from "../../assets/imgGuerraCivil.jpg";
import DiarioDeUmBanana from "../../assets/imgDiarioDeUmBanana.jpg";

const BookCard = ({ titulo, autor, imagem }) => {

  return (
    <div className="BookCard">
      <h3>{titulo}</h3>
      <p>{autor}</p>
      <img src={imagem} style={Styles.img}></img>
    </div>
  );
};

export default BookCard;