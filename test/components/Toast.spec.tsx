import "@testing-library/jest-dom"

import { screen, render, fireEvent } from "@testing-library/react"
import Toast from "@/components/Toast"
// import { useContext } from "react"
import {
  ToastContextProvider,
  toastUseContext,
} from "@/utils/controllers/ToastContext"
// import { ToastContextProtocol } from "@/utils/controllers/ToastContext"

it("should close on button click", () => {
  const [toastOpts, setToastOpts] = toastUseContext()

  setToastOpts({ visible: true, status: "Success", message: "" })

  render(
    <ToastContextProvider>
      <Toast />
    </ToastContextProvider>
  )

  const closeButton = screen.getByTestId("close-btn")

  fireEvent.click(closeButton)

  expect(toastOpts.visible).toBe(false)
})
