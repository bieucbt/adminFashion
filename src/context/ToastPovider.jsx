import React, { createContext } from 'react'
import { useRef } from 'react'
import { toast, ToastContainer } from 'react-toastify'


export const ToastContext = createContext()

const ToastProvider = ({ children }) => {
    const toastIdRef = useRef(null)

    const showToast = (type, message) => {
        if (toastIdRef.current && toast.isActive(toastIdRef.current)) {
            toast.update(toastIdRef.current, { render: message, type, isLoading: false, autoClose: 2000 })
        } else {
            toastIdRef.current = toast[type](message)
        }
    }

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <ToastContainer />
        </ToastContext.Provider>
    )
}

export default ToastProvider


