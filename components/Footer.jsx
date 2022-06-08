import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiOutlineGithub} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
   <p>2022 Emin Demirhan's Store All rights reserverd.</p>
      <p className="icons">
        <AiFillInstagram />
        
        <a href='https://twitter.com/emindemirhann'>

        <AiOutlineTwitter />
        </a>
        
        
        
        
        <a href='https://github.com/emindemirhan'>

        <AiOutlineGithub />
        </a>
        

      </p>
    </div>
  )
}

export default Footer



