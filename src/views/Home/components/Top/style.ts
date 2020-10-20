import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 770px;
    padding: 20px;
`

export const Header = styled.header`
    width: 100%;
`

export const Title = styled.h1`
    text-align: center;
    padding: 0 20px;
`
export const NameInput = styled.input`
    width: 100%;
    height: 40px;
    padding: 0 20px;
    box-sizing: border-box;
`

export const TableContainer = styled.div`
    margin-top: 50px;
    width: 100%;
`

export const Table = styled.ul`
    list-style: none;
    padding: 0;
    width: 100%;
`
export const Row = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    :nth-child(even) {
        background-color: #efefef;
    }
`
