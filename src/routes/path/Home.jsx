import React, { useState } from 'react'
import classes from './Home.module.scss'
import Counter from '@/routes/components/Home/Counter'
import Operation from '@/routes/components/Home/Operation'
import CardDeck from '@/routes/components/Home/CardDeck'
import { useEffect } from 'react'
import { useCallback } from 'react'

export default function Home() {
  const [history, setHistory] = useState([0])
  const [prevHistory, setPrevHistory] = useState([])

  useEffect(() => {
    console.log('history', history)
    console.log('prevHistory', prevHistory)
  }, [history, prevHistory])

  const handleReset = useCallback(() => {
    setHistory([0])
    setPrevHistory([])
  }, [])

  const handlePrev = useCallback(() => {
    setPrevHistory([...prevHistory, history.pop()])
    setHistory([...history])
  }, [history, prevHistory])

  const handleNext = useCallback(() => {
    setHistory([...history, prevHistory.pop()])
    setPrevHistory([...prevHistory])
  }, [history, prevHistory])

  const handleCountUp = useCallback((count) => {
    setHistory(prev => [
      ...prev,
      prev[prev.length - 1] + parseInt(count)
    ])
    setPrevHistory([])
  }, [])

  return (
    <section className={classes.app}>
      <Counter history={history} onHistoryChange={setHistory} />
      <Operation
        history={history}
        prevHistory={prevHistory}
        handleReset={handleReset}
        handlePrev={handlePrev}
        handleNext={handleNext}
        />
      <CardDeck
        handleCountUp={handleCountUp}
        />
    </section>
  )
}
