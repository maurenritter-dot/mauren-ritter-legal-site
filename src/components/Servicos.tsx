import { motion } from "framer-motion";
import { ShieldAlert, Scale, Gavel } from "lucide-react";

const services = [
  {
    icon: ShieldAlert,
    title: "Direito do Consumidor",
    items: ["Negativação indevida", "Fraudes bancárias", "Cobranças abusivas"],
  },
  {
    icon: Scale,
    title: "Direito Civil",
    items: ["Indenizações", "Cobranças", "Descumprimento contratual"],
  },
  {
    icon: Gavel,
    title: "Leilões Judiciais",
    items: ["Assessoria em arrematação", "Análise de riscos", "Acompanhamento completo"],
  },
];

const Servicos = () => (
  <section id="servicos" className="py-20 md:py-28 bg-navy">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-medium text-gold tracking-widest uppercase">
          Áreas de atuação
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mt-3">
          Serviços Jurídicos
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-navy-light/60 backdrop-blur border border-gold/10 rounded-xl p-8 hover:border-gold/30 transition-colors"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gold/10 mb-6">
              <s.icon className="w-7 h-7 text-gold" />
            </div>
            <h3 className="font-display text-xl font-bold text-primary-foreground mb-5">
              {s.title}
            </h3>
            <ul className="space-y-3">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-primary-foreground/70"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Servicos;
