export interface User {
    name: string
    score: number
}

export type sortCallback = (a: User, b: User) => number

export type usersProvider = {
    queryUsers: (sort?: sortCallback) => Promise<User[]>
    mutateUsers: (users: User[]) => Promise<void>
}
