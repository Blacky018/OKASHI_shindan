import "./Header.css";

function Header({ subtitle }) {
  return (
    <header className="header">
      <h1 className="header-title">🍩 今食べたいお菓子診断</h1>
      <p className="header-subtitle">{subtitle}</p>
    </header>
  );
}

export default Header;

