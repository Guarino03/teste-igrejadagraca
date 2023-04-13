import React from 'react'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <span>{new Date().getFullYear()} - Todos os direitos reservados</span>
    </footer>
  )
}
