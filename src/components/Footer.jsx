import React from 'react';
import styles from '../style/Footer.module.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3>Контакты</h3>
          <p>Адрес: ул. Наличная, 40, г. Санкт-Петербург</p>
          <p>Телефон: +7 (000) 000-00-00</p>
          <p>Email: angl@academy.ru</p>
        </div>
        <div className={styles.column}>
          <h3>Полезные ссылки</h3>
          <ul>
            <li><a href="#">О нас</a></li>
            <li><a href="#PricingCards">Стоимость</a></li>
            <li><a href="#Carousel">Наши преимущества</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Следите за нами</h3>
          <div className={styles.socialIcons}>
            <a href="#"><img src="https://i.pinimg.com/564x/3e/72/e4/3e72e4f4fc4afb2b865bc289abff4ee3.jpg" alt="Instagram" /></a>
            <a href="#"><img src="https://i.pinimg.com/564x/7e/7d/67/7e7d67f534e63f2ff89c9ea642014649.jpg" alt="vk" /></a>
            <a href="#"><img src="https://i.pinimg.com/564x/30/6d/e5/306de5db6446a43d97314e26f3a61757.jpg" alt="tg" /></a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© 2024 Академия английского языка. Все права защищены. created by irkaneprobirka</p>
      </div>
    </footer>
  );
};

export default Footer;
