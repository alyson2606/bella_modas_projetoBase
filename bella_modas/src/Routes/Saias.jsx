import React from 'react'
import SaiaJunina from  '../img/saia_junina.jpg'
import CardProduto from '../components/CardProduto'
import ButtonExit from '../components/ButtonExit'
ButtonExit
const Saias = () => {
  return (
    <div>
     <section>
      <CardProduto 
        titulo="Saias"
        descricao="Modelos leves que valorizam as curvas e o seu corpo."
        imagem={SaiaJunina}
        alt="Blusas Bella Modas"
      />
      </section> 
      <ButtonExit/>
    </div>
  )
}

export default Saias