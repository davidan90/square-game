import React from 'react'
import styled from 'styled-components'

const boxMargin = 2.5
const boxTotalMargin = boxMargin * 2

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    side: number
}
export const Base = styled.div<Props>`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: ${(props) => props.side}px;
    height: ${(props) => props.side}px;
`

export const Line = styled.div<Props>`
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: ${(props) => props.side}px;
`

interface BoxProps extends Props {
    bg: string
    selected?: boolean
}
export const Box = styled.div<BoxProps>`
    border-radius: 5px;
    margin: ${boxMargin}px;
    background-color: ${(props) => props.bg};
    opacity: ${(props) => (props.selected ? 0.6 : 1)};
    width: ${(props) => props.side - boxTotalMargin}px;
    height: ${(props) => props.side - boxTotalMargin}px;
    ${(props) =>
        props.onClick
            ? `
        :hover {
            cursor:pointer;
        }
    `
            : undefined}
`
