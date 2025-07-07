import React from 'react'
import CardProduto from "../components/CardProduto";
import blusaPreta from '../img/blusa_preta.jpg'
import ButtonExit from '../components/ButtonExit';

const Blusas = () => {
  return (
    <div>
    <section>
      <CardProduto 
    titulo="Blusas"
    descricao="Modelos leves, sofisticados, ideais para todas as estações."
    imagem={blusaPreta}
    alt="Blusas Bella Modas"
  />
      </section>  
    <ButtonExit/>
    </div>


  )
}

export default Blusas



