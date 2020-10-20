import { useEffect, useState, useRef, useCallback } from 'react'

export function useCountDown(seconds: number = 60) {
    const [count, setCount] = useState(seconds)
    const timer = useRef(0)

    const stopCount = useCallback(() => {
        clearTimeout(timer.current)
    }, [])

    const restartCount = useCallback(() => {
        setCount(seconds)
    }, [seconds])

    useEffect(() => {
        timer.current = setTimeout(() => {
            setCount(count - 1)
        }, 1000)

        if (!count) {
            stopCount()
        } else {
            return () => stopCount()
        }
    }, [count, stopCount])

    return {
        count,
        stopCount,
        restartCount,
    }
}
