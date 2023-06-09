import React, { useEffect, useState } from 'react'
import styles from "./MainContent.module.css"
import { Card } from '../Card/Card'

import axios from 'axios'

export function MainContent() {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const buscaUsuarios = async () => {
    try {
      let response = await axios.get('https://fakerapi.it/api/v1/users?_quantity=30')
      setUsers(response.data.data)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    buscaUsuarios()
  }, [])

  return (
    <main className={styles.mainContent}>
      {loading ? (<div className={styles.spinner}></div>) :
        users.length > 0 && (
          users.map(user => (
            <Card
              imagem={user.image}
              nomeSobrenome={user.firstname + ' ' + user.lastname}
              userName={user.username}
              email={user.email}
              site={user.website}
            />
          ))        
        )     
      }

    </main>
  )
}
