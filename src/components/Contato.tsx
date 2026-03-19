import { motion } from "framer-motion";
import { MessageCircle, Mail, Instagram, MapPin } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5541991158368?text=Olá,%20gostaria%20de%20falar%20sobre%20um%20assunto%20jurídico.";

const Contato = () => (
  <section id="contato" className="py-20 md:py-28 bg-navy">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-medium text-gold tracking-widest uppercase">
          Fale conosco
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mt-3">
          Entre em Contato
        </h2>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10"
        >
          <div className="flex items-center gap-4 bg-navy-light/60 border border-gold/10 rounded-lg px-5 py-4">
            <Mail className="w-5 h-5 text-gold" />
            <div>
              <span className="block text-xs text-primary-foreground/50 mb-0.5">E-mail</span>
              <a href="mailto:contato@maurenritteradv.com.br" className="text-sm text-primary-foreground hover:text-gold transition-colors">
                contato@maurenritteradv.com.br
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-navy-light/60 border border-gold/10 rounded-lg px-5 py-4">
            <Instagram className="w-5 h-5 text-gold" />
            <div>
              <span className="block text-xs text-primary-foreground/50 mb-0.5">Instagram</span>
              <a href="https://instagram.com/maurenritter.adv" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground hover:text-gold transition-colors">
                @maurenritter.adv
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-navy-light/60 border border-gold/10 rounded-lg px-5 py-4">
            <MessageCircle className="w-5 h-5 text-gold" />
            <div>
              <span className="block text-xs text-primary-foreground/50 mb-0.5">WhatsApp</span>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground hover:text-gold transition-colors">
                (41) 99115-8368
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-navy-light/60 border border-gold/10 rounded-lg px-5 py-4">
            <MapPin className="w-5 h-5 text-gold" />
            <div>
              <span className="block text-xs text-primary-foreground/50 mb-0.5">Localização</span>
              <span className="text-sm text-primary-foreground">Curitiba – PR</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold text-accent-foreground font-semibold px-10 py-4 rounded-md text-lg hover:brightness-110 transition shadow-gold"
          >
            <MessageCircle className="w-5 h-5" />
            Fale agora pelo WhatsApp
          </a>
          <p className="text-primary-foreground/40 text-sm mt-4">
            Atendimento 100% online
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Contato;
