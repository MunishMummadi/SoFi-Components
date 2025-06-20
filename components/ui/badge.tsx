import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent sofi-gradient text-white",
        secondary: "border-transparent bg-sofi-gray-100 text-sofi-gray-900 hover:bg-sofi-gray-200",
        destructive: "border-transparent bg-red-500 text-white hover:bg-red-600",
        outline: "text-sofi-teal-600 border-sofi-teal-200 hover:bg-sofi-teal-50",
        success: "border-transparent bg-sofi-green-500 text-white hover:bg-sofi-green-600",
        warning: "border-transparent bg-amber-500 text-white hover:bg-amber-600",
      },
      size: {
        default: "px-3 py-1 text-xs",
        sm: "px-2 py-0.5 text-xs",
        lg: "px-4 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
}

export { Badge, badgeVariants }
