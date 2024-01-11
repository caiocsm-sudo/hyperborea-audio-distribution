"use client"

import React, { useState, useContext, createContext, Dispatch, SetStateAction } from "react"
import { ToastOptProtocol, emptyToast } from "../authProtocols"

export type ToastContextProtocol = [
  ToastOptProtocol,
  Dispatch<SetStateAction<ToastOptProtocol>>
]

export const ToastContext = createContext<ToastContextProtocol | undefined>(
  undefined
)

export function ToastContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [toastOpts, setToastOpts] = useState<ToastOptProtocol>(emptyToast)
  const providerObj: ToastContextProtocol = [toastOpts, setToastOpts]

  return (
    <ToastContext.Provider value={providerObj}>
      {children}
    </ToastContext.Provider>
  )
}

export const toastUseContext = (): ToastContextProtocol => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("Something wrong with the toast controller");
  }

  return context;
}
