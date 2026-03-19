import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-navy border-t border-gold/10 py-8">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Mauren Ritter Advocacia" className="h-8 w-auto opacity-60" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-primary-foreground/40">
          <span>© {new Date().getFullYear()} Todos os direitos reservados</span>
          <Link to="/politica-de-privacidade" className="hover:text-gold transition-colors">
            Política de Privacidade
          </Link>
          <Link to="/termos-de-uso" className="hover:text-gold transition-colors">
            Termos de Uso
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
