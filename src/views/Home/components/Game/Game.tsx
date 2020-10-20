import React from 'react'
import { useTranslation } from 'react-i18next'
import { Board } from 'components'
import { Container, Header, Title } from './style'

interface Props {
    level: number
    count: number
    click: (success: boolean) => void
}

const Game: React.FC<Props> = ({ level, count, click }) => {
    const { t } = useTranslation()

    return (
        <Container>
            <Header>
                <Title>
                    <span>{`${t('level')} ${level}`}</span>
                    <span>{count}s</span>
                </Title>
            </Header>
            <div>
                <Board level={level} clickBox={click} />
            </div>
        </Container>
    )
}

export default Game
