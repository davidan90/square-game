import React, { createContext, useContext } from 'react'
import { User, usersProvider, sortCallback } from './types'

const usersKey = 'users'

const queryUsers = (sortCb?: sortCallback) => {
    return new Promise<User[]>((resolve, reject) => {
        try {
            let users = []
            const storage = window.localStorage.getItem(usersKey)
            if (storage) {
                users = sortCb
                    ? JSON.parse(storage).sort(sortCb)
                    : JSON.parse(storage)
            }
            resolve(users)
        } catch (err) {
            reject(err)
        }
    })
}

const mutateUsers = (users: User[]) => {
    return new Promise<void>((resolve, reject) => {
        try {
            window.localStorage.setItem(usersKey, JSON.stringify(users))
            resolve()
        } catch (err) {
            reject(err)
        }
    })
}

const defaultUserService = {
    queryUsers,
    mutateUsers,
}

const UsersContext = createContext<usersProvider>(defaultUserService)

export const useUsers = () => {
    return useContext(UsersContext)
}

export const UsersProvider: React.FC = ({ children }) => (
    <UsersContext.Provider value={defaultUserService}>
        {children}
    </UsersContext.Provider>
)

export default UsersProvider
