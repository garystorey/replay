import {
  ChangeEvent,
  ComponentPropsWithRef,
  FocusEvent,
  FormEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  KeyboardEvent,
  MouseEvent,
} from "react"

export type BaseFrame = {
  frames: number
  buttons: number
  timestamp: number
}

export type AltFrame = {
  buttons: string
  timestamp: number
}

export type FrameWithDescription = BaseFrame & {
  description: string
}

export type Frame = BaseFrame | FrameWithDescription

export type DivAllAttributes = ComponentPropsWithRef<"div">
export type SpanAllAttributes = ComponentPropsWithRef<"span">
export type ParagraphAllAttributes = ComponentPropsWithRef<"p">

export type InputFocusEvent = FocusEvent<HTMLInputElement>
export type InputChangeEvent = ChangeEvent<HTMLInputElement>
export type InputMouseEvent = MouseEvent<HTMLInputElement>
export type InputKeyboardEvent = KeyboardEvent<HTMLInputElement>
export type InputAllAttributes = InputHTMLAttributes<HTMLInputElement>

export type ButtonFocusEvent = FocusEvent<HTMLButtonElement>
export type ButtonChangeEvent = ChangeEvent<HTMLButtonElement>
export type ButtonMouseEvent = MouseEvent<HTMLButtonElement>
export type ButtonKeyboardEvent = KeyboardEvent<HTMLButtonElement>

export type FormSubmitEvent = FormEvent<HTMLFormElement>

export type JustifyContent =
  | "center"
  | "flex-start"
  | "flex-end"
  | "start"
  | "end"
  | "space-around"
  | "space-evenly"
  | "space-between"
  | "left"
  | "right"

export type AlignItems =
  | "stretch"
  | "center"
  | "flex-start"
  | "flex-end"
  | "baseline"
  | "start"
  | "end"
  | "self-start"
  | "self-end"

export type AlignContent =
  | "center"
  | "normal"
  | "start"
  | "end"
  | "space-around"
  | "space-evenly"
  | "space-between"
  | "stretch"

export type FlexDirection =
  | "column"
  | "row"
  | "column-reverse"
  | "row-reverse"
  | "inherit"
  | "initial"
  | "revert"
  | "unset"

export type FlexWrap = "wrap" | "nowrap" | "wrap-reverse"

export type FlexBasis = "auto" | "content" | number | string

export type AlignSelf = "center" | "auto" | "start" | "end" | "baseline" | "stretch"

export type AllowedFlexElements = "span" | "div" | "p"

export type FlexProps = HTMLAttributes<HTMLDivElement> & {
  p?: number | string
  pt?: number | string
  pr?: number | string
  pb?: number | string
  pl?: number | string
  px?: number | string
  py?: number | string
  m?: number | string
  mt?: number | string
  mr?: number | string
  mb?: number | string
  ml?: number | string
  mx?: number | string
  my?: number | string
  inline?: boolean
  gap?: number | string
  justify?: JustifyContent
  align?: AlignItems
  alignContent?: AlignContent
  direction?: FlexDirection
  wrap?: FlexWrap
  order?: number
  grow?: number
  shrink?: number
  basis?: FlexBasis
  alignSelf?: AlignSelf
  as?: AllowedFlexElements
}
