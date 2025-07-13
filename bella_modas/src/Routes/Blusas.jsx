import React from 'react'
import CardProduto from "../components/CardProduto";

import ButtonExit from '../components/ButtonExit';
import Aba_Produtos from '../components/aba_produtos';
import blusa from "../img/blusa_preta.jpg"


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
    imagem={blusa}
    alt="Blusas Bella Modas" 

  />
      </section>  
    <ButtonExit/>
    </div>


  )
}

export default Blusas



