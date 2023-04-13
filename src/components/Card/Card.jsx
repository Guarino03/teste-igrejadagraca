import React from 'react'
import styles from "./Card.module.css";
import foto from '../../assets/foto.png'

export function Card() {
  return (
    <div className={styles.card}>
        <div className={styles.img}>
            <img src={foto} className={styles.cardImg} alt="" srcset="" />
        </div>
        <div className={styles.info}>
           <div>
                <h1 className={styles.nome}>Nome Sobrenome</h1>
                <div>
                    <span className={styles.label}>
                        Usuário:
                    </span>
                    <strong>
                        UserName
                    </strong>
                </div>
                <div>
                    <span className={styles.label}>
                        E-mail:
                    </span>
                    <strong>
                        asdsadasdasdsadasdasdsasda@dominio.com
                    </strong>
                </div>            
           </div>
            <a href="">http://www.siteusuario.com</a>
        </div>
    </div>
  )
}
