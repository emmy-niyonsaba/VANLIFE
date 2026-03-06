import { redirect } from "react-router-dom"
export const checkAuth = () => {
    const isAuthenticated = true
    if (!isAuthenticated) {
        throw redirect('/login?message=You must be logged in to access The page')
    }
    return null
}