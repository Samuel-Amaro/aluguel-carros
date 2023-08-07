import Image from "next/image";
import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContainerHeader}>
          <div className={styles.footerContainerLogo}>
            <Image
              src="/assets/logo.svg"
              alt="logo"
              width={25}
              height={25}
              className={styles.footerLogo}
            />
            <h2 className={styles.footerTitle}>Aluguel de Carros</h2>
          </div>
          <p className={styles.footerDescription}>
            Nossa visão é proporcionar comodidade e ajudar a aumentar o seu
            negócio de vendas.
          </p>
        </div>
        <div className={styles.containerBody}>
          <section>
            <h3 className={styles.footerTitleLinks}>Sobre</h3>
            <ul className={styles.footerList}>
              <li className={styles.footerListItem}>Como Funciona</li>
              <li className={styles.footerListItem}>Apresentação</li>
              <li className={styles.footerListItem}>Parceria</li>
              <li className={styles.footerListItem}>Relação de Trabalho</li>
            </ul>
          </section>
          <section>
            <h3 className={styles.footerTitleLinks}>Comunidade</h3>
            <ul className={styles.footerList}>
              <li className={styles.footerListItem}>Eventos</li>
              <li className={styles.footerListItem}>Blog</li>
              <li className={styles.footerListItem}>Podcast</li>
              <li className={styles.footerListItem}>Convidar um amigo</li>
            </ul>
          </section>
          <section>
            <h3 className={styles.footerTitleLinks}>Redes Sociais</h3>
            <ul className={styles.footerList}>
              <li className={styles.footerListItem}>Discord</li>
              <li className={styles.footerListItem}>Instagram</li>
              <li className={styles.footerListItem}>Twitter</li>
              <li className={styles.footerListItem}>Facebook</li>
            </ul>
          </section>
        </div>
      </div>
      <hr className={styles.footerLineDiviser} />
      <div className={styles.footerContainerDescriptions}>
        <p className={`${styles.footerText} ${styles.footerTextMargin}`}>
          ©2023 Aluguel Carros. Todos os direitos reservados
        </p>
        <div className={styles.footerContainerText}>
          <p className={styles.footerText}>Política de Privacidade</p>
          <p className={styles.footerText}>Termos e Condições</p>
        </div>
      </div>
    </footer>
  );
}
