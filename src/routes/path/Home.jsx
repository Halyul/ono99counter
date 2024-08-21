import React, { useState } from 'react'
import homeClasses from './Home.module.scss'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <section className={homeClasses.app}>
      <h1>Vite + React</h1>
      <section className={homeClasses.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </section>
    </section>
  )
}
