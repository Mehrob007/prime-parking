import React from 'react'
import logoHeader from '../../assets/icon/logo-header.svg'

export default function Box1() {
  return (
    <div className='box1-main'>
      <header>
        <div className="nav-bar">
          <div>
            <a href="">Услуги</a>
            <a href="">Оферта</a>
            <a href="">Правила паркинга</a>
          </div>
          <img src={logoHeader} alt="logoHeader" />
          <a href="tel: +7 (495) 481 22 44">+7 (495) 481 22 44</a>
        </div>
      </header>
    </div>
  )
}
