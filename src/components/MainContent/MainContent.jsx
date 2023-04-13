import React from 'react'
import styles from "./MainContent.module.css"
import { Card } from '../Card/Card'

export function MainContent() {
  return (
    <main className={styles.mainContent}>
      <Card/>
      <Card/>
      <Card/>

    </main>
  )
}
