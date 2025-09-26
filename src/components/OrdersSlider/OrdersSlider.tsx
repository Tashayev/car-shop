'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Download from "../../../public/download.svg"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import './ordersSlider.scss';

const orders = [
  { id: 1, title: "Счета на оплату для Юр. Лиц", img: "/orders/order3.png" },
  { id: 2, title: "Гарантия на детали для бампера", img: "/orders/order1.png" },
  { id: 3, title: "Чеки для Физ.лиц", img: "/orders/order2.png" },
  { id: 4, title: "Счета на оплату для Юр. Лиц", img: "/orders/order4.png" },
  { id: 5, title: "Счета на оплату для Юр. Лиц", img: "/orders/order3.png" },
  { id: 6, title: "Гарантия на детали для бампера", img: "/orders/order1.png" },
  { id: 7, title: "Чеки для Физ.лиц", img: "/orders/order2.png" },
  { id: 8, title: "Счета на оплату для Юр. Лиц", img: "/orders/order4.png" },
];

export default function OrdersSlider() {
  return (
    <div className="ordersSlider">
      <div className='name'>
        <div className="blue"></div>
        <h4 className='typography'>Заказы</h4>
      </div>
      <Swiper
        modules={[Pagination]}
       
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {orders.map(order => (
          <SwiperSlide key={order.id}>
            <img src={order.img} alt={order.title} />
            <div className='title-btn'>
              <h3>{order.title}</h3>
              <button><Download className='icon' /> Скачать</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
