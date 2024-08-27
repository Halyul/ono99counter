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
  const [isTTSOn, setIsTTSOn] = useState(false)

  useEffect(() => {
    console.log('history', history)
    console.log('prevHistory', prevHistory)
  }, [history, prevHistory])

  const handleScoreTTS = useCallback((score) => {
    if (isTTSOn) {
      const utterance = new SpeechSynthesisUtterance(score)
      speechSynthesis.speak(utterance)
    }
  }, [isTTSOn])

  const handleReset = useCallback(() => {
    const newHistory = [0]
    setHistory(newHistory)
    setPrevHistory([])
    handleScoreTTS(newHistory[newHistory.length - 1])
  }, [handleScoreTTS])

  const handlePrev = useCallback(() => {
    if (history.length === 1) return
    setPrevHistory([...prevHistory, history.pop()])
    const newHistory = [...history]
    setHistory(newHistory)
    handleScoreTTS(newHistory[newHistory.length - 1])
  }, [handleScoreTTS, history, prevHistory])

  const handleNext = useCallback(() => {
    if (prevHistory.length === 0) return
    const newHistory = [...history, prevHistory.pop()]
    setHistory(newHistory)
    setPrevHistory([...prevHistory])
    handleScoreTTS(newHistory[newHistory.length - 1])
  }, [handleScoreTTS, history, prevHistory])

  const handleCountUp = useCallback((count) => {
    const newHistory = [...history, history[history.length - 1] + parseInt(count)]
    setHistory(newHistory)
    setPrevHistory([])
    handleScoreTTS(newHistory[newHistory.length - 1])
  }, [handleScoreTTS, history])

  const handleTTSToggle = useCallback(() => {
    setIsTTSOn(!isTTSOn)
  }, [isTTSOn])

  return (
    <section className={classes.home}>
      <Counter history={history} onHistoryChange={setHistory} />
      <section className={classes.container}>
        <Operation
          history={history}
          prevHistory={prevHistory}
          handleReset={handleReset}
          handlePrev={handlePrev}
          handleNext={handleNext}
          isTTSOn={isTTSOn}
          handleTTSToggle={handleTTSToggle}
          />
        <CardDeck
          handleCountUp={handleCountUp}
          />
      </section>
    </section>
  )
}
