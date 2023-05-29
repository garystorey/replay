import { PropsWithChildren, useMemo } from "react"
import { AlignItems, JustifyContent } from "../../types"
import { cssclass } from "../../utils"
import css from "./flexgrid.module.scss"

export type RowProps = PropsWithChildren<{
  className?: string
  reverse?: boolean
  gap?: number | string
  justify?: JustifyContent
  align?: AlignItems
}>

function Row({
  reverse = false,
  className = "",
  children,
  justify,
  align,
  gap,
  ...rowProps
}: RowProps) {
  const styles = useMemo(
    () =>
      typeof gap === "number"
        ? { gap: `${gap}rem` }
        : typeof gap === "string"
        ? { gap }
        : {},
    [gap]
  )

  const classes = useMemo(
    () =>
      cssclass(
        `${css.fgrow}`,
        { reverse, [`jc${justify}`]: !!justify, [`ai${align}`]: !!align },
        className
      ),
    [reverse, className, justify, align]
  )

  return (
    <section className={classes} style={styles} {...rowProps}>
      {children}
    </section>
  )
}

export default Row
