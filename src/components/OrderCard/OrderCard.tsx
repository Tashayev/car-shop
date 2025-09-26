import React from 'react'
import "./OrderCard.scss"
export default function OrderCard() {
  return (
    <div className='card'>
      <div className="status">
        <span></span>
        <h5>Статус</h5>
      </div>
      <h2>Детали услуги</h2>
      <h4>Дата заказа</h4>
      <button>Повтарить заказ</button>
    </div>
  )
}
