import { toast } from "react-toastify"

let toadId

// toast.configure({
//     pauseOnHover: false,
//     closeOnClick: false,
//     autoClose: 1500
// })

const showToast = (type, message) => {

    if (toadId && toast.isActive(toadId)) {
        toast.update(toadId, { render: message, type, isLoading: false, autoClose: 1500 })
    } else {
        toadId = toast[type](message, {
            autoClose: 1500,
            pauseOnHover: false,
            draggable: false,
            closeOnClick: false
        })
    }
}

const dissmisToast = () => {
    toast.dismiss(toastId)
}

export {
    dissmisToast,
    showToast
}
