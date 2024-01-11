import "@testing-library/jest-dom"

import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import SignUp from "@/app/(auth)/signup/page"
import fetchMock from "jest-fetch-mock"

import { ToastContextProvider } from "@/utils/controllers/ToastContext"

import { act } from "react-dom/test-utils"

describe("should render components on click", () => {
  fetchMock.enableMocks()
  render(
    <ToastContextProvider>
      <SignUp />
    </ToastContextProvider>
  )

  it("should render the toaster when click the sign up button", async () => {
    const submitbtn = screen.getByText("Sign Up")

    act(() => {
      fireEvent.click(submitbtn)
    })

    // OH MY FUCKING MOTHERFUCKING FUCKING
    await waitFor(() => {
      expect(screen.getByText("User created successfully")).toBeInTheDocument()
    })
  })
})
