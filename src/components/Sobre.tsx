import { motion } from "framer-motion";
import { User } from "lucide-react";

const Sobre = () => (
  <section id="sobre" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl bg-muted border-2 border-gold/20 flex items-center justify-center">
            <div className="text-center">
              <User className="w-16 h-16 text-muted-foreground/40 mx-auto mb-3" />
              <span className="text-sm text-muted-foreground">Foto em breve</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium text-gold tracking-widest uppercase">
            Sobre o escritório
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Mauren Ritter
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Atuação jurídica voltada à solução prática de problemas do dia a dia,
            com foco em prejuízos financeiros, fraudes e conflitos contratuais.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            O atendimento é 100% online, com comunicação clara, estratégia e
            acompanhamento próximo. Curitiba – PR.
          </p>
          <div className="flex items-center gap-3 bg-gold/10 border border-gold/20 rounded-lg px-5 py-3 w-fit">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm font-medium text-gold">
              Atendimento 100% online em todo o Brasil
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Sobre;
