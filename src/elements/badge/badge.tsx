export type BadgeProps = {
  children: React.ReactNode
}
export function Badge({ children }: BadgeProps) {
  return (
    <span className="mr-2 rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-300">
      {children}
    </span>
  )
}
