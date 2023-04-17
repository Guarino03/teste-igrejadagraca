import React, { useState } from 'react'
import styles from './Header.module.css'
import logo from '../../assets/logo.svg'
import { MagnifyingGlass, List } from '@phosphor-icons/react'

export function Header() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.menu}>

          <img src={logo} alt="Logo da Empresa" />

          <nav className={styles.desktopMenu}>
            <a href="" className={styles.navbarItem}>Home</a>
            <a href="" className={styles.navbarItem}>Usuários</a>
            <a href="" className={styles.navbarItem}>Produtos</a>
            <a href="" className={styles.navbarItem}><MagnifyingGlass size={16} /></a>
          </nav>

          <div className={styles.responsiveMenuContainer}>
            <List size={24} className={styles.burgerButton} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
            {isMobileMenuOpen && (
              <nav className={styles.responsiveMenu}>
                <a href="" className={styles.navbarItem}>Home</a>
                <a href="" className={styles.navbarItem}>Usuários</a>
                <a href="" className={styles.navbarItem}>Produtos</a>
              </nav>
            )}
          </div>

        </div>

        <hr className={styles.divider} />

        <div className={styles.pageTitle}>
          <h1>Lista de usuários</h1>
        </div>

      </div>
    </header>
  )
}
