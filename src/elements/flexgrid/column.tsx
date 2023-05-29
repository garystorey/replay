import { PropsWithChildren, useMemo } from "react"
import { AlignItems, FlexDirection, JustifyContent } from "../../types"
import { cssclass } from "../../utils"
import css from "./flexgrid.module.scss"

export type ColumnProps = PropsWithChildren<{
  className?: string
  span?: 0 | 1 | 2 | 3 | 4 | 5
  justify?: JustifyContent
  align?: AlignItems
  direction?: FlexDirection
  gap?: number | string
}>

function Column({
  className = "",
  span = 1,
  children,
  justify,
  align,
  direction,
  gap,
}: ColumnProps) {
  const styles = useMemo(
    () =>
      typeof gap === "number"
        ? { gap: `${gap}rem` }
        : typeof gap === "string"
        ? { gap }
        : {},
    [gap]
  )

  const classes = cssclass(css.fgcol, className, {
    [css[`fgspan${span}`]]: span >= 0 && span <= 5,
    [css[`jc${justify}`]]: !!justify,
    [css[`ai${align}`]]: !!align,
    [css[`fd${direction}`]]: !!direction,
  })

  return (
    <section className={classes} style={styles}>
      {children}
    </section>
  )
}

export default Column
