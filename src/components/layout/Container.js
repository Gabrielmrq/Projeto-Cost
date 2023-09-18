import styles from '../../styles/stylesLayout/Container.module.css'
// import styles from "./Container.module.css";

function Container(props) {
  // {props.children} direciona onde conteúdo que está abrigado dentro do component Container vai ser exibido
  return (
    <div className={`${styles.container} ${styles[props.customClass]}`}>
      {props.children}
    </div>
  );
}

export default Container;
