import { useContext } from "react"
import { ToastContext } from "../context/ToastPovider"


const useToastContext = () => {
    const context = useContext(ToastContext)
    return context
}

export default useToastContext