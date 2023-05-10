import { HTMLAttributes, PropsWithChildren, ReactElement } from "react"

export type MessageProps = PropsWithChildren<{
  error: ReactElement | string
  id: string
}> &
  Omit<HTMLAttributes<HTMLDivElement>, "id">

export function Message({ error, children, id }: MessageProps) {
  return (
    <>
      <output className="m-0 p-0 text-sm tracking-wide text-neutral-500" id={`${id}-message`}>
        {children}
      </output>
      <output className="m-0 p-0 text-red-800" id={`${id}-error`} role="alert" aria-live="polite">
        {error ?? ""}
      </output>
    </>
  )
}
