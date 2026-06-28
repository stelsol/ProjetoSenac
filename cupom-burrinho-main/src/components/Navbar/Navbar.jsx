import Menu from "../Menu/Menu";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ loggedIn = false }) {
  const navigate = useNavigate();

  function handleSair() {
    // TODO: limpar sessão/token de verdade aqui
    navigate("/login");
  }

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md border-b border-border"
      style={{
        background:
          "color-mix(in oklch, oklch(0.985 0.015 75) 80%, transparent)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Menu />

        {loggedIn ? (
          <button
            onClick={handleSair}
            className="rounded-full border-2 border-blue-burrinho-deep px-5 py-2 text-sm font-bold text-blue-burrinho-deep hover:bg-blue-burrinho-deep hover:text-white transition-colors"
          >
            Sair
          </button>
        ) : (
          <Link
            to="/login"
            className="rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground hover:scale-105 transition-transform inline-block"
          >
            Entrar no Clube
          </Link>
        )}
      </div>
    </header>
  );
}
