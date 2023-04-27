export function PriceQuestions() {
  return (
    <section className="section section_other section-reverse">
      <article className="text-part text_part-reverse">
        <h2 className="section_title section_title-reverse">
          Из чего складывается цена обслуживания?
        </h2>
        <ul className="list">
          <li className="section_text text section_text-other">
            Количество обрабатываемых документов;
          </li>
          <li className="section_text text section_text-other">
            Количество регистрируемых операций;
          </li>
          <li className="section_text text section_text-other">
            Количество сотрудников фирмы клиента;
          </li>
          <li className="section_text text section_text-other">
            Выбранный режим налогообложения клиента;
          </li>
          <li className="section_text text section_text-other">
            Форма собственности организации
          </li>
        </ul>
      </article>
      <img
        src="./assets/photo-1675453987972-48f9d721281b.png"
        alt="image"
        className="main_part-img"
      />
    </section>
  );
}
