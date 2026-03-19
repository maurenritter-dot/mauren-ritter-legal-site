import { motion } from "framer-motion";
import { Globe, Zap, MessageSquare, Target, Lightbulb } from "lucide-react";

const items = [
  { icon: Globe, title: "Atendimento 100% online", desc: "Resolva suas questões jurídicas de qualquer lugar do Brasil." },
  { icon: Zap, title: "Agilidade no atendimento", desc: "Acompanhamento constante e dedicado ao seu caso." },
  { icon: MessageSquare, title: "Comunicação clara", desc: "Sem juridiquês. Você entende cada etapa do seu processo." },
  { icon: Target, title: "Estratégia personalizada", desc: "Cada caso recebe análise individual e plano de ação dedicado." },
  { icon: Lightbulb, title: "Foco em solução prática", desc: "Orientação objetiva para resolver o que realmente importa." },
];

const Diferenciais = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-medium text-gold tracking-widest uppercase">
          Por que nos escolher
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
          Diferenciais do escritório
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-lg p-6 shadow-soft hover:shadow-card transition-shadow border border-border text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 mb-4">
              <item.icon className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Diferenciais;
