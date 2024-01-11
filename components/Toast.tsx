import "@/styles/components/toast.scss"

import { Cross1Icon } from "@radix-ui/react-icons"
import { useContext } from "react"
import {
  ToastContext,
  ToastContextProtocol,
} from "@/utils/controllers/ToastContext"
import { emptyToast } from "@/utils/authProtocols"

export default function Toast() {
  const [toastOpts, setToastOpts] = useContext(
    ToastContext
  ) as ToastContextProtocol

  const handleCloseBtn = () => {
    setToastOpts(emptyToast)

    console.log(toastOpts.visible)
  }

  return (
    <>
      {toastOpts.visible ? (
        <div className="toast">
          <div className="toast__header">
            {toastOpts.status}
            <button data-testid="close-btn" className="close-btn" onClick={handleCloseBtn}>
              <Cross1Icon />
            </button>
          </div>
          <div className="toast__message">
            <p>{toastOpts.message}</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  )
}
