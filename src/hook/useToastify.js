import { useContext } from "react"
import { ToastContext } from "../context/ToastContext"


export const useToastify = () => {
    return useContext(ToastContext)
}