import React from 'react'
import CardProduto from '../components/CardProduto'
import ButtonExit from '../components/ButtonExit'
import Aba_Produtos from '../components/aba_produtos'
ButtonExit
const Saias = () => {
  return (
    <div>
      <nav>
        <Aba_Produtos/>
      </nav>
     <section>
      <CardProduto 
        titulo="Saias"
        descricao="Modelos leves que valorizam as curvas e o seu corpo. --
        Adcione seu produto aqui!"
        imagem={'adcione seu modelo de Saia aqui!'}
        alt="Blusas Bella Modas" 
      />
      </section> 
      <ButtonExit/>
    </div>
  )
}

export default Saias