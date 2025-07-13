import React from 'react'
import CardProduto from '../components/CardProduto'
import ButtonExit from '../components/ButtonExit'
import Aba_Produtos from '../components/aba_produtos'
import Saia from '../img/saia_junina.jpg'
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
        imagem={Saia}
        alt="Blusas Bella Modas" 
      />
      </section> 
      <ButtonExit/>
    </div>
  )
}

export default Saias