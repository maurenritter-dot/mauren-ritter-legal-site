import { motion } from "framer-motion";
import { MessageCircle, HelpCircle, Globe } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5541991158368?text=Olá,%20gostaria%20de%20falar%20sobre%20um%20assunto%20jurídico.";

const Hero = () => (
  <section
    id="inicio"
    className="relative min-h-screen flex items-center bg-navy pt-20 overflow-hidden"
  >
    {/* Subtle pattern overlay */}
    <div className="absolute inset-0 opacity-5">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--gold)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
    </div>

    <div className="container mx-auto px-4 sm:px-6 relative z-10">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-8"
        >
          <Globe className="w-4 h-4 text-gold" />
          <span className="text-sm text-gold font-medium">
            Atendimento 100% online
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
        >
          Atendimento jurídico online, claro e estratégico para{" "}
          <span className="text-gradient-gold">proteger seus direitos</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-primary-foreground/60 mb-10 max-w-2xl leading-relaxed"
        >
          Atuação em Direito Civil, Direito do Consumidor e Leilões Judiciais
          com soluções práticas e atendimento direto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gold text-accent-foreground font-semibold px-8 py-4 rounded-md text-lg hover:brightness-110 transition shadow-gold"
          >
            <MessageCircle className="w-5 h-5" />
            Fale pelo WhatsApp
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-gold/40 text-gold font-medium px-8 py-4 rounded-md text-lg hover:bg-gold/10 transition"
          >
            <HelpCircle className="w-5 h-5" />
            Tirar minha dúvida
          </a>
        </motion.div>
      </div>
    </div>

    {/* Decorative gold line */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
  </section>
);

export default Hero;
