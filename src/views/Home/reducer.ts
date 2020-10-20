import { Reducer } from 'react'

export enum Actions {
    continue,
    fail,
    restart,
}

interface Action {
    type: Actions
    payload?: { [key: string]: any }
}

interface HomeState {
    level: number
    fail: boolean
}

export const defaultState: HomeState = {
    level: 1,
    fail: false,
}

export const homeReducer: Reducer<HomeState, Action> = (
    state = defaultState,
    { type, payload }
) => {
    switch (type) {
        case Actions.continue:
            return {
                ...state,
                level: state.level + 1,
            }

        case Actions.fail:
            return {
                ...state,
                fail: true,
            }

        case Actions.restart:
            return {
                ...defaultState,
            }

        default:
            return state
    }
}
