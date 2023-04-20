export function PriceQuestions() {
  return (
    <section className="section section_other section-reverse">
      <article className="text-part">
        <h2 className="section_title">
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
      <img src="./assets/screen-02.png" alt="image" />
    </section>
  );
}
