import { Scale } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy border-t border-gold/10 py-8">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Scale className="w-5 h-5 text-gold/60" />
          <span className="text-sm text-primary-foreground/50">
            Mauren Ritter Advocacia e Assessoria Jurídica
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm text-primary-foreground/40">
          <span>© {new Date().getFullYear()} Todos os direitos reservados</span>
          <a href="#" className="hover:text-gold transition-colors">
            Política de Privacidade
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
