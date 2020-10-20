export const getRandom = (n = 1): number => Math.floor(Math.random() * n)

export const getRandomColor = (): string => {
    const hue = getRandom(360)
    const saturation = 25 + getRandom(70)
    const light = 10 + getRandom(85)
    return `hsl(${hue},${saturation}%, ${light}%)`
}

export const getRandomCoordinates = (n = 1): [number, number] => [
    getRandom(n),
    getRandom(n),
]
