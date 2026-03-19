import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermosDeUso = () => (
  <main className="bg-background min-h-screen">
    <div className="container mx-auto px-4 sm:px-6 py-16 max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" />
        Voltar ao início
      </Link>

      <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-8">
        Termos de Uso
      </h1>

      <div className="prose prose-invert max-w-none space-y-6 text-primary-foreground/70">
        <p className="text-sm text-primary-foreground/50">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

        <section>
          <h2 className="text-xl font-display font-semibold text-primary-foreground mb-3">1. Aceitação dos Termos</h2>
          <p>Ao acessar e utilizar este site, você concorda com os presentes Termos de Uso. Caso não concorde com alguma disposição, recomendamos que não utilize o site.</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-semibold text-primary-foreground mb-3">2. Descrição do Serviço</h2>
          <p>Este site é mantido por <strong>Mauren Ritter Advocacia e Assessoria Jurídica</strong> e tem caráter informativo. O conteúdo disponibilizado não constitui consultoria jurídica, parecer ou recomendação profissional.</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-semibold text-primary-foreground mb-3">3. Conteúdo Informativo</h2>
          <p>Os artigos, textos e materiais publicados neste site têm finalidade exclusivamente educativa e informativa. Não substituem a consulta jurídica individualizada, sendo recomendado o contato direto com um advogado para análise do caso concreto.</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-semibold text-primary-foreground mb-3">4. Propriedade Intelectual</h2>
          <p>Todo o conteúdo deste site — incluindo textos, imagens, logotipos e layout — é protegido por direitos autorais e de propriedade intelectual. É vedada a reprodução, total ou parcial, sem autorização prévia por escrito.</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-semibold text-primary-foreground mb-3">5. Limitação de Responsabilidade</h2>
          <p>A Mauren Ritter Advocacia não se responsabiliza por decisões tomadas com base exclusivamente nas informações disponibilizadas neste site. A relação advogado-cliente somente se estabelece mediante contratação formal dos serviços.</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-semibold text-primary-foreground mb-3">6. Links Externos</h2>
          <p>Este site pode conter links para sites de terceiros. Não nos responsabilizamos pelo conteúdo, políticas de privacidade ou práticas desses sites externos.</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-semibold text-primary-foreground mb-3">7. Alterações nos Termos</h2>
          <p>Reservamo-nos o direito de alterar estes Termos de Uso a qualquer momento, sem aviso prévio. As alterações entram em vigor imediatamente após a publicação nesta página.</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-semibold text-primary-foreground mb-3">8. Legislação Aplicável</h2>
          <p>Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de Curitiba — PR para dirimir quaisquer questões decorrentes destes termos.</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-semibold text-primary-foreground mb-3">9. Contato</h2>
          <p>Em caso de dúvidas sobre estes Termos de Uso, entre em contato:</p>
          <ul className="list-none space-y-1">
            <li><strong>E-mail:</strong> contato@maurenritteradv.com.br</li>
            <li><strong>WhatsApp:</strong> (41) 99115-8368</li>
          </ul>
        </section>
      </div>
    </div>
  </main>
);

export default TermosDeUso;
