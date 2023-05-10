import { PropsWithChildren } from "react"

export type ShowProps = PropsWithChildren<{
  when: boolean
}>

export function Show({ when, children }: ShowProps) {
  return when ? <>{children}</> : null
}
