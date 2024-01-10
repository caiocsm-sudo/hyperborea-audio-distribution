import "@testing-library/jest-dom"

import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Toast from "@/components/Toast"
import SignUp from "./page"
import fetchMock from "jest-fetch-mock"

import { act } from "react-dom/test-utils"

describe("should render components on click", () => {
  fetchMock.enableMocks()
  act(() => {
    render(<SignUp />)
  })

  it("should render the toaster when click the sign up button", async () => {
    const submitbtn = screen.getByText("Sign Up")

    act(() => {
      fireEvent.click(submitbtn)
    })

    // OH MY FUCKING MOTHERFUCKING FUCKING
    await waitFor(() => {
      expect(screen.getByText("User created successfully")).toBeInTheDocument()
    });
  })
})
