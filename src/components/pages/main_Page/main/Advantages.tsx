import './MainPart.css';

export function Advantages() {
  return (
    <section className="section">
      <h2 className="section_title">Наши преимущества</h2>
      <p className="section_text advantages_text text">
        Удаленное бухгалтерское обслуживание - удобное решение для руководителей
        ООО и индивидуальных предпринимателей. Предлагаем надежную бухгалтерскую
        поддержку, позволяющую нашим клиентам экономить время и ресурсы для
        направления их на развитие бизнеса.
      </p>
      <div className="advantages_listing">
        <div className="advantages_list ">
          <img
            src="./assets/icons.svg"
            alt="icon"
            className="advantages_icons"
          />
          <div className="advantages_description">
            <h4 className="advantages_title text">Комплексное обслуживание</h4>
            <p className="listing-text text">
              Наладим бухгалтерский, налоговый, финансовый и управленческий
              учет, поможем оптимизировать затраты
            </p>
          </div>
        </div>

        <div className="advantages_list">
          <img
            src="./assets/computer.svg"
            alt="icon"
            className="advantages_icons"
          />
          <div className="advantages_description">
            <h4 className="advantages_title text">
              Высокий уровень проффесионализма
            </h4>
            <p className="listing-text text">
              Многолетний опыт наших сотрудников позволяет гарантировать
              качество обслуживания по договору
            </p>
          </div>
        </div>

        <div className="advantages_list">
          <img
            src="./assets/sale.svg"
            alt="icon"
            className="advantages_icons"
          />
          <div className="advantages_description">
            <h4 className="advantages_title text">Гибкая ценовая политика</h4>
            <p className="listing-text text">
              Стоимость услуг определяется индивидуально и зависит от объема и
              сложности задач
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
