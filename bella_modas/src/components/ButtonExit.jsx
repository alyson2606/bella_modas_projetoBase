import React from 'react'
import {Link} from 'react-router-dom'
const ButtonExit = () => {
  return (
    <div>
        <Link to={'/'}><button type="button" class="btn btn-primary btn-sm mt-4" >Voltar ao menu</button></Link>
    </div>
  )
}

export default ButtonExit