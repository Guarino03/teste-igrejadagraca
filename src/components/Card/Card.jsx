import React from 'react'
import styles from "./Card.module.css";

export function Card(props) {
    console.log(props.nomeSobrenome);
  return (
    <div className={styles.card}>
        <div className={styles.img}>
            <img src={props.imagem} loading="lazy" className={styles.cardImg} alt={`Foto de ${props.nomeSobrenome}.`} />
        </div>
        <div className={styles.info}>
           <div>
                <h1 className={styles.nome}>{props.nomeSobrenome}</h1>
                <div>
                    <span className={styles.label}>
                        Usuário:
                    </span>
                    <strong>
                        {props.userName}
                    </strong>
                </div>
                <div>
                    <span className={styles.label}>
                        E-mail:
                    </span>
                    <strong>
                        {props.email}
                    </strong>
                </div>            
           </div>
            <a href={props.site}>{props.site}</a>
        </div>
    </div>
  )
}
