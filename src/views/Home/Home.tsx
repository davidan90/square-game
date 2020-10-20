import React, { useReducer, useEffect, useCallback } from 'react'
import { useCountDown } from 'hooks'
import { UsersProvider } from 'services'
import { Game, Top } from './components'
import { Actions, homeReducer, defaultState } from './reducer'
import './Home.css'

const timeLimit = 3

const Home: React.FC = () => {
    const { count, stopCount, restartCount } = useCountDown(timeLimit)
    const [{ level, fail }, dispatch] = useReducer(homeReducer, defaultState)

    useEffect(() => {
        if (!count) {
            dispatch({ type: Actions.fail })
        }
    }, [count])

    const handleClick = useCallback(
        (success: boolean) => {
            let type: Actions
            if (success) {
                type = Actions.continue
                restartCount()
            } else {
                type = Actions.fail
                stopCount()
            }

            dispatch({ type })
        },
        [stopCount, restartCount]
    )

    const handleRestart = useCallback(() => {
        restartCount()
        dispatch({ type: Actions.restart })
    }, [restartCount])

    return (
        <section className="home">
            {fail ? (
                <UsersProvider>
                    <Top score={level} restart={handleRestart} />
                </UsersProvider>
            ) : (
                <Game {...{ level, count, click: handleClick }} />
            )}
        </section>
    )
}

export default Home
