import { FlexProps } from "@/types"
import { cssclass, getSpacing, getValue } from "@/utils"
import { useMemo } from "react"

import css from "./flexgrid.module.scss"

/**
 * A component for creating Flexbox containers
 */
function Flex({
  inline = false,
  align,
  alignContent,
  children,
  className = "",
  justify,
  basis,
  direction,
  wrap,
  alignSelf,
  shrink,
  grow,
  gap,
  order,
  as = "span",
  ...props
}: FlexProps) {
  const Tag = as
  const classes = cssclass(
    `${css.fgflex}`,
    {
      inline: !!inline,
      [`jc${justify!.replace("-", "")}`]: !!justify,
      [`ai${align!.replace("-", "")}`]: !!align,
      [`ac${alignContent!.replace("-", "")}`]: !!alignContent,
      [`fd${direction!.replace("-", "")}`]: !!direction,
      [`fw${wrap!.replace("-", "")}`]: !!wrap,
      [`as${alignSelf!.replace("-", "")}`]: !!alignSelf,
      [`fb${basis!.toString().replace("-", "")}`]: !!basis,
    },
    className
  )
  const spacing = getSpacing(props)
  const updatedGap = getValue(gap || 0)
  const styles = useMemo(() => {
    return updatedGap === 0
      ? {
          flexShrink: shrink,
          flexGrow: grow,
          order,
          ...spacing,
        }
      : {
          flexShrink: shrink,
          flexGrow: grow,
          order,
          ...spacing,
          gap: updatedGap,
        }
  }, [shrink, grow, updatedGap, order, spacing])

  // eslint-disable-next-line no-unused-vars
  const { p, pt, pl, pr, pb, px, py, m, mt, ml, mr, mb, mx, my, ...flexProps } = props
  return (
    <Tag {...flexProps} className={classes} style={styles}>
      {children}
    </Tag>
  )
}

export default Flex
