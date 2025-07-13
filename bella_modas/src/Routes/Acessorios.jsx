import React from 'react'
import CardProduto from '../components/CardProduto'
import Pratas from '../img/anel_banhado.jpg'
import ButtonExit from '../components/ButtonExit'
import Aba_Produtos from '../components/aba_produtos'
import anel_1 from '../img/anel_banhado.jpg'
import anel_2 from '../img/anel_prata.jpg'
const Acessorios = () => {
  return (
   <div>
    <nav>
      <Aba_Produtos/>
    </nav>
    <section>
     <CardProduto
       titulo= "Acessórios de Prata"
       imagem={anel_1}
       descricao="Acessórios elegantes para  as ocasiões --
       Adcione seu produto aqui!"
 
     />
     <CardProduto
       titulo= "Acessórios de Prata"
       imagem={anel_2}
       descricao="Acessórios elegantes para todas as ocasiões --  Adcione seu produto aqui!"
 
     />
    </section>
    <ButtonExit/>
   </div> 
  )
}

export default Acessorios