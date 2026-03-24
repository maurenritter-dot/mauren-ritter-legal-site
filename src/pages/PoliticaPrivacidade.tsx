import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PoliticaPrivacidade = () => (
  <main className="bg-background min-h-screen">
    <div className="container mx-auto px-4 sm:px-6 py-16 max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" />
        Voltar ao início
      </Link>

      <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
        Política de Privacidade
      </h1>

      <div className="prose max-w-none space-y-6 text-foreground/70">
        <p className="text-sm text-foreground/50">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

        <section>
          <h2 className="text-xl font-display font-semibold text-primary-foreground mb-3">1. Introdução</h2>
          <p>A <strong>Mauren Ritter Advocacia e Assessoria Jurídica</strong> ("nós") está comprometida com a proteção da sua privacidade. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-semibold text-primary-foreground mb-3">2. Dados Coletados</h2>
          <p>Podemos coletar os seguintes dados pessoais:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Nome completo</li>
            <li>Endereço de e-mail</li>
            <li>Número de telefone/WhatsApp</li>
            <li>Dados fornecidos voluntariamente durante o atendimento jurídico</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-display font-semibold text-primary-foreground mb-3">3. Finalidade do Tratamento</h2>
          <p>Seus dados pessoais são tratados para as seguintes finalidades:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Prestação de serviços jurídicos contratados</li>
            <li>Comunicação sobre andamento de processos e consultas</li>
            <li>Envio de conteúdos informativos, quando autorizado</li>
            <li>Cumprimento de obrigações legais e regulatórias</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-display font-semibold text-primary-foreground mb-3">4. Base Legal</h2>
          <p>O tratamento de dados pessoais é realizado com base nas seguintes hipóteses legais previstas na LGPD:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Consentimento do titular</li>
            <li>Execução de contrato ou procedimentos preliminares</li>
            <li>Cumprimento de obrigação legal ou regulatória</li>
            <li>Exercício regular de direitos em processo judicial</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-display font-semibold text-primary-foreground mb-3">5. Compartilhamento de Dados</h2>
          <p>Seus dados pessoais não serão compartilhados com terceiros, exceto quando necessário para a prestação dos serviços jurídicos contratados, cumprimento de obrigação legal ou mediante autorização expressa do titular.</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-semibold text-primary-foreground mb-3">6. Armazenamento e Segurança</h2>
          <p>Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, perda, alteração ou destruição. Os dados são armazenados pelo tempo necessário ao cumprimento das finalidades descritas nesta política.</p>
        </section>

        <section>
          <h2 className="text-xl font-display font-semibold text-primary-foreground mb-3">7. Direitos do Titular</h2>
          <p>Conforme a LGPD, você tem direito a:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Confirmar a existência de tratamento de dados</li>
            <li>Acessar seus dados pessoais</li>
            <li>Corrigir dados incompletos ou desatualizados</li>
            <li>Solicitar a anonimização, bloqueio ou eliminação de dados</li>
            <li>Revogar o consentimento a qualquer momento</li>
            <li>Solicitar a portabilidade dos dados</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-display font-semibold text-primary-foreground mb-3">8. Contato</h2>
          <p>Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de seus dados pessoais, entre em contato:</p>
          <ul className="list-none space-y-1">
            <li><strong>E-mail:</strong> contato@maurenritteradv.com.br</li>
            <li><strong>WhatsApp:</strong> (41) 99115-8368</li>
          </ul>
        </section>
      </div>
    </div>
  </main>
);

export default PoliticaPrivacidade;
