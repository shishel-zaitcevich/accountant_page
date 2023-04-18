import './Header.css';
export function HeaderBottom() {
  return (
    <div className="header_container-bottom">
      <article className="article">
        <h1 className="main-title">
          Управляй своим делом в режиме реального времени
        </h1>
        <button className="button">Написать нам</button>
      </article>
      <img src="./assets/main-screen.svg" alt="diagram" />
    </div>
  );
}
