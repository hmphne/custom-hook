import { useEffect, useState } from "react"

export const useDocVisible = () => {
    const [visible, setvisible] = useState(
        document.visibilityState === 'visible'
    )
    useEffect(() => {
        const change = () => setvisible(
            document.visibilityState === 'visible'
        )
        document.addEventListener(
            'visibilitychange', change
        )
        return () => document.removeEventListener('visibilitychange', change)
    }, [])
    return visible
}