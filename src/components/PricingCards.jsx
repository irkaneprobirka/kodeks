import React from "react";
import styles from "../style/PricingCards.module.css";

const PricingCards = () => {
  const pricingPlans = [
    {
      id: 1,
      name: "Базовый план",
      price: "5,000 руб./мес",
      description:
        "Подходит для начинающих. Индивидуальные занятия 2 раза в неделю.",
      features: [
        "Индивидуальные уроки",
        "2 занятия в неделю",
        "Доступ к учебным материалам",
      ],
    },
    {
      id: 2,
      name: "Продвинутый план",
      price: "10,000 руб./мес",
      description:
        "Для тех, кто хочет углубить свои знания. 4 занятия в неделю.",
      features: [
        "Групповые и индивидуальные уроки",
        "4 занятия в неделю",
        "Подготовка к экзаменам",
      ],
    },
    {
      id: 3,
      name: "Премиум план",
      price: "15,000 руб./мес",
      description:
        "Максимальный уровень подготовки с ежедневными занятиями и поддержкой.",
      features: [
        "Индивидуальные и групповые уроки",
        "Ежедневные занятия",
        "Круглосуточная поддержка преподавателей",
      ],
    },
  ];

  return (
    <>
      <h2 id = 'PricingCards'>Стоимость</h2>
      <section className={styles.pricing}>
        {pricingPlans.map((plan) => (
          <div key={plan.id} className={styles.card}>
            <h2>{plan.name}</h2>
            <p className={styles.price}>{plan.price}</p>
            <p className={styles.description}>{plan.description}</p>
            <ul className={styles.features}>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className={styles.button}>Записаться</button>
          </div>
        ))}
      </section>
    </>
  );
};

export default PricingCards;
