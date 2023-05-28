import { ComponentPropsWithRef } from "react"

export type ButtonVariants = "primary" | "alternate" | "warning" | "success" | "none"

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
    <button data-button-as={`${variant}`} {...props} type={type} className={classes}>
      {children}
    </button>
  )
}
