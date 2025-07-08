import React from 'react'
import CardProduto from "../components/CardProduto";

import ButtonExit from '../components/ButtonExit';
import Aba_Produtos from '../components/aba_produtos';

const Blusas = () => {
  return (
    <div>
      <nav>
        <Aba_Produtos/>
      </nav>
    <section>
      <CardProduto 
    titulo="Blusas"
    descricao="Modelos leves, sofisticados, ideais para todas as estações.    
    Adcione seu produto aqui!"
    imagem={'Adcione seu modelo de blusa aqui!'}
    alt="Blusas Bella Modas"
  />
      </section>  
    <ButtonExit/>
    </div>


  )
}

export default Blusas



