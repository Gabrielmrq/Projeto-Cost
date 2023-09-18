import { useState, useEffect } from "react";

import styles from "../../styles/stylesLayout/Message.module.css"
// import styles from "./Message.module.css";

function Message({ type, msg }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!msg) {
      setVisible(false); // não tem msg = visibilidade falsa
      return;
    }

    setVisible(true); // tem msg = visibilidade true e começa o setTimeout

    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [msg]);

  return (
    <>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
      )}
    </>
  );
}

export default Message;
