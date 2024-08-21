import React, {
} from 'react'
import aboutClasses from './About.module.scss'

export default function About() {

  return (
    <section className={aboutClasses.app}>
      <h1>Vite + React</h1>
      <section className={aboutClasses.card}>
        <p>
          About
        </p>
      </section>
    </section>
  )
}
