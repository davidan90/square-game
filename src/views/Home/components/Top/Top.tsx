import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useUsers, User } from 'services'
import {
    Container,
    Header,
    Title,
    NameInput,
    TableContainer,
    Table,
    Row,
} from './style'

const sortUsers = (a: User, b: User) => b.score - a.score

interface Props {
    score: number
    restart: () => void
    top?: number
}
export const Top: React.FC<Props> = ({ score, restart, top = 10 }) => {
    const { t } = useTranslation()
    const { queryUsers, mutateUsers } = useUsers()
    const [users, setUsers] = useState<User[]>()

    useEffect(() => {
        queryUsers(sortUsers).then((users: User[]) => {
            setUsers(users)
        })
    }, [queryUsers])

    if (users) {
        const submitName = (e: React.KeyboardEvent<HTMLInputElement>) => {
            const enterKey = 13
            if (e.keyCode === enterKey) {
                e.preventDefault()
                const user = {
                    name: (e.target as HTMLInputElement).value,
                    score,
                }
                const newUsers = users.concat([user])

                mutateUsers(newUsers).then(() => {
                    restart()
                })
            }
        }

        return (
            <Container>
                <Header>
                    <Title>{t('game_over')}</Title>
                    <NameInput
                        type="text"
                        placeholder={t('user_name-placeholder')}
                        onKeyUp={submitName}
                    />
                </Header>

                {users.length ? (
                    <TableContainer>
                        <Title>{t('hall_of_fame')}</Title>
                        <Table>
                            {users
                                .map((user, i) => (
                                    <Row key={i}>
                                        <span>{user.name}</span>{' '}
                                        <span>{user.score}</span>
                                    </Row>
                                ))
                                .splice(0, top)}
                        </Table>
                    </TableContainer>
                ) : null}
            </Container>
        )
    } else {
        return null
    }
}

export default Top
