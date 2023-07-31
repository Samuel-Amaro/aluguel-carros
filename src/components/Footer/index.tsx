import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div>
        <header>
          <div>
            <Image src="/assets/logo.svg" alt="logo" width={25} height={25} />
            <h2>Aluguel de Carros</h2>
          </div>

          <p>
            Nossa visão é proporcionar comodidade e ajudar a aumentar o seu
            negócio de vendas.
          </p>
        </header>
        <div>
          <section>
            <h3>Sobre</h3>
            <ul>
              <li>Como Funciona</li>
              <li>Apresentação</li>
              <li>Parceria</li>
              <li>Relação de Trabalho</li>
            </ul>
          </section>
          <section>
            <h3>Comunidade</h3>
            <ul>
              <li>Eventos</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Convidar um amigo</li>
            </ul>
          </section>
          <section>
            <h3>Redes Sociais</h3>
            <ul>
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </section>
        </div>
      </div>
      <hr />
      <div>
        <p>©2023 Aluguel Carros. Todos os direitos reservados</p>
        <div>
          <p>Política de Privacidade</p>
          <p>Termos e Condições</p>
        </div>
      </div>
    </footer>
  );
}
