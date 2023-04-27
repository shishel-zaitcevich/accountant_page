import './Header.css';
export function Icons() {
  return (
    <aside className="icons">
      <a href="https://wa.me/79991112233">
        <img src="./assets/Group.svg" alt="whatsapp" />
      </a>
      <a href="tg://resolve?domain=<USERNAME>">
        <img src="./assets/telegram.svg" alt="telegram" />
      </a>
      <a href="mailto:abracadabra@mail.ru">
        <img src="./assets/mail.svg" alt="mail" />
      </a>
    </aside>
  );
}
