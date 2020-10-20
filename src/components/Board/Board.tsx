import React, { useEffect, useState, useMemo } from 'react'
import { useResize } from 'hooks'
import { getRandomColor, getRandomCoordinates } from './utils'
import { Base, Line, Box } from './style'

const getSide = (side?: number) => {
    const landscape = window.innerWidth > window.innerHeight
    if (side) {
        if (landscape) {
            return side > window.innerHeight ? window.innerHeight : side
        } else {
            return side > window.innerWidth ? window.innerWidth : side
        }
    }

    return landscape ? window.innerHeight : window.innerWidth
}

interface Props {
    clickBox: (success: boolean) => void
    level?: number
    side?: number
}
const Board: React.FC<Props> = ({ clickBox, level = 1, side = 500 }) => {
    const difficult = useMemo(() => (level < 2 ? 2 : level + 1), [level])
    const [baseSide, setBaseSide] = useState(getSide(side))
    const [color, setColor] = useState(getRandomColor())
    const [coordinates, setCoordinates] = useState(
        getRandomCoordinates(difficult)
    )
    useResize(() => setBaseSide(getSide(side)))

    const grid = Array.from(Array(difficult)).map((e) =>
        Array.from(Array(difficult))
    )
    const boxSide = baseSide / difficult

    useEffect(() => {
        setColor(getRandomColor())
        setCoordinates(getRandomCoordinates(difficult))
    }, [difficult])

    return (
        <Base side={baseSide}>
            {grid.map((line, l) => (
                <Line key={`l-${l}`} side={boxSide}>
                    {line.map((box, b) => {
                        const selected =
                            l === coordinates[0] && b === coordinates[1]

                        return (
                            <Box
                                key={`b-${b}`}
                                side={boxSide}
                                bg={color}
                                selected={selected}
                                onClick={() => clickBox(selected)}
                            />
                        )
                    })}
                </Line>
            ))}
        </Base>
    )
}

export default Board
