import React, { createContext } from 'react'
import { toast } from 'react-toastify'


export const ToastContext = createContext(null)

const ToastProvider = ({ children }) => {
    let toastId = toast.loading('Đang xử lý, xin vui lòng đợi')
    return (
        <ToastContext.Provider value={{ toastId }}>{children}</ToastContext.Provider>
    )
}

export default ToastProvider


