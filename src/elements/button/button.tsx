import { ComponentPropsWithRef } from "react"

export type ButtonVariants = "primary" | "secondary" | "tertiary"

export type ButtonProps = ComponentPropsWithRef<"button"> & {
  variant: ButtonVariants
}

export function Button({
  variant = "primary",
  children,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const classes = `button button-${variant} ${className}`
  return (
    <button {...props} type={type} className={classes}>
      {children}
    </button>
  )
}
