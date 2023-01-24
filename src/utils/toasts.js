import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const warnToast = (msj) =>
  toast.warn(msj, {
    position: 'bottom-left',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark'
  })

export const successToast = (msj) =>
  toast.success(msj, {
    position: 'bottom-right',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark'
  })
