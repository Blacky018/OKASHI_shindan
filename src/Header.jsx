import "./Header.css";

function Header({ subtitle }) {
  return (
    <header className="header">
      <h1 className="header-title">🍩 お菓子診断アプリ</h1>
      <p className="header-subtitle">{subtitle}</p>
    </header>
  );
}

export default Header;

