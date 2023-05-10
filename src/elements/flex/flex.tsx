import styles from "./flex.module.css"
import { ComponentPropsWithRef } from "react"

export type FlexProps = ComponentPropsWithRef<"div"> & {
  gap?: string
  justifyContent?: string
  alignItems?: string
  alignSelf?: string
  direction?: "row" | "column"
  wrap?: boolean
}

export function Flex({
  children,
  direction,
  justifyContent = "flex-start",
  alignItems = "flex-start",
  alignSelf = "",
  className = "",
  gap = "1rem",
  wrap = false,
}: FlexProps) {
  const props =
    alignSelf === ""
      ? { gap, justifyContent, alignItems }
      : { gap, justifyContent, alignItems }
  const flexDirection =
    direction === "column" ? styles.flexColumn : styles.flexRow
  const addWrap = wrap ? styles.flexWrap : ""
  return (
    <div
      className={`${styles.flex} ${flexDirection}${addWrap} ${className}`}
      style={props}
    >
      {children}
    </div>
  )
}
