import React from 'react';
import styles from "../style/MainBanner.module.css";

const MainBanner = () => {
  return (
    <section className={styles.banner}>
      <h1>Академия английского языка</h1>
      <div className={styles.bannerContent}>
        <p>
          Академия английского языка — это современная образовательная платформа, предлагающая персонализированные программы для всех уровней владения языком. Наша цель — помочь вам овладеть английским языком максимально эффективно, используя инновационные методики, современные технологии и опытных преподавателей, в том числе носителей языка.
          <br />
          Мы предлагаем гибкие форматы обучения: онлайн-курсы, занятия в аудиториях, индивидуальные и групповые уроки. Каждый студент получает персональный план занятий, адаптированный под его уровень и цели, будь то общение, бизнес, путешествия или подготовка к международным экзаменам (IELTS, TOEFL).
        </p>
      </div>
    </section>
  );
};

export default MainBanner;
