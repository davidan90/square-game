import { useEffect } from 'react'

export function useResize(cb: () => void) {
    useEffect(() => {
        const onResize = () => {
            cb()
        }

        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [cb])
}
