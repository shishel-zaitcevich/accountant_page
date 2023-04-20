import './Header.css';
export function HeaderBottom() {
  return (
    <div className="header_container-bottom">
      <article className="article">
        <h1 className="main-title">
          Управляй своим делом в режиме реального времени
        </h1>
        <a href="mailto:abracadabra@mail.ru">
          <button className="button">Написать нам</button>
        </a>
      </article>
      <img src="./assets/main-screen.png" alt="diagram" />
    </div>
  );
}
