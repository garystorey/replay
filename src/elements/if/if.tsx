import { Show } from "../show/show"
import { PropsWithChildren } from "react"
import { createContext, useContext } from "react"

type IfProp = "true" | "false"

const IfContext = createContext<IfProp | null>(null)

function useIfContext() {
  const context = useContext(IfContext)
  if (!context)
    throw new Error(
      `Component can not be used outside of an <If /> component block.`
    )
  return context
}

export type IfProps = PropsWithChildren<{
  condition: boolean
}>

export function If({ condition, children }: IfProps) {
  return (
    <IfContext.Provider value={`${condition}`}>
      <>{children}</>
    </IfContext.Provider>
  )
}

type ResultProps = PropsWithChildren<unknown>

function Truthy({ children }: ResultProps) {
  const condition = useIfContext()
  return <Show when={condition === "true"}>{children}</Show>
}

function Falsey({ children }: ResultProps) {
  const condition = useIfContext()
  return <Show when={condition === "false"}>{children}</Show>
}

If.True = Truthy
If.False = Falsey
