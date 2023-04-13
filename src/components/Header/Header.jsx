import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/logo.svg'
import { MagnifyingGlass } from '@phosphor-icons/react'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          <img src={logo} alt="Logo da Empresa" />
          <nav>
            <a href="" className={styles.navbarItem}>Home</a>
            <a href="" className={styles.navbarItem}>Usuários</a>
            <a href="" className={styles.navbarItem}>Produtos</a>
            <a href="" className={styles.navbarItem}><MagnifyingGlass size={16} /></a>
          </nav>
        </div>

        <hr className={styles.divider} />

        <div className={styles.pageTitle}>
          <h1>Lista de usuários</h1>
        </div>

      </div>
    </header>
  )
}
