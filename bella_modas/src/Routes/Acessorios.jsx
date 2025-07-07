import React from 'react'
import CardProduto from '../components/CardProduto'
import Pratas from '../img/anel_banhado.jpg'
import ButtonExit from '../components/ButtonExit'
const Acessorios = () => {
  return (
   <div>
    <section>
     <CardProduto
       titulo= "Acessórios de Prata"
       imagem={Pratas}
       descricao="Acessórios elegantes para todas as ocasiões"
 
     />
     <CardProduto
       titulo= "Acessórios de Prata"
       imagem={Pratas}
       descricao="Acessórios elegantes para todas as ocasiões"
 
     />
    </section>
    <ButtonExit/>
   </div> 
  )
}

export default Acessorios