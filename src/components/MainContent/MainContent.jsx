import React, { useEffect, useState } from 'react'
import styles from "./MainContent.module.css"
import { Card } from '../Card/Card'
import axios from 'axios'

export function MainContent() {

  const [users, setUsers] = useState([])

  const buscaUsuarios = async () => {
    try {
      let response = await axios.get('https://fakerapi.it/api/v1/users?_quantity=30');
      setUsers(response.data.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    buscaUsuarios()
  }, [])

  return (
    <main className={styles.mainContent}>
      <Card/>

    </main>
  )
}
