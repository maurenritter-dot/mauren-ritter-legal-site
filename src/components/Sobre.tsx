import { motion } from "framer-motion";
import { Award, GraduationCap, BookOpen, Scale } from "lucide-react";
import fotoMauren from "@/assets/foto-mauren.png";

const qualificacoes = [
  { icon: Award, text: "OAB/PR 100.001" },
  { icon: GraduationCap, text: "Pós-Graduação em Direito Civil e Direito Processual Civil – Faculdade Legale Educacional, São Paulo/SP" },
  { icon: BookOpen, text: "Bacharel em Direito – Universidade Anhanguera Uniderp, Campo Grande/MS" },
  { icon: Scale, text: "Atuação em Direito Civil, Direito do Consumidor e Leilões Judiciais" },
];

const Sobre = () => (
  <section id="sobre" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={fotoMauren}
            alt="Mauren Ritter - Advogada"
            className="w-72 md:w-96 aspect-[3/4] rounded-2xl object-cover object-[center_15%] border-2 border-gold/20 shadow-lg"
          />
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

          <ul className="space-y-4 mb-6">
            {qualificacoes.map(({ icon: Icon, text }, i) => (
              <li key={i} className="flex items-start gap-3">
                <Icon className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <span className="text-muted-foreground leading-relaxed text-sm">{text}</span>
              </li>
            ))}
          </ul>

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
