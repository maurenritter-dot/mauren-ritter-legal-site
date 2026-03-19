import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    title: "Nome negativado indevidamente: o que fazer?",
    summary: "Entenda seus direitos quando seu nome é negativado de forma indevida.",
    url: "https://www.jusbrasil.com.br/artigos/nome-negativado-indevidamente/853324714",
  },
  {
    title: "Perdi a comanda: preciso pagar multa?",
    summary: "Saiba se a cobrança de multa é legal nesses casos.",
    url: "https://www.jusbrasil.com.br/artigos/perdi-a-comanda-tenho-que-pagar-multa/870655568",
  },
];

const Conteudos = () => (
  <section id="conteudos" className="py-20 md:py-28 bg-muted/50">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-medium text-gold tracking-widest uppercase">
          Conteúdos Jurídicos
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
          Artigos e Informativos
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {articles.map((a, i) => (
          <motion.a
            key={a.title}
            href={a.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card rounded-xl p-8 shadow-soft hover:shadow-card border border-border hover:border-gold/30 transition-all"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="font-display text-lg font-bold text-foreground group-hover:text-gold transition-colors">
                {a.title}
              </h3>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-colors flex-shrink-0 mt-1" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {a.summary}
            </p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Conteudos;
