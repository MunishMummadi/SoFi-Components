import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex w-full rounded-lg border bg-background px-4 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-sofi-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sofi-teal-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border-sofi-gray-200 hover:border-sofi-gray-300 focus-visible:border-sofi-teal-500",
        error: "border-red-500 focus-visible:ring-red-500",
        success: "border-sofi-green-500 focus-visible:ring-sofi-green-500",
      },
      size: {
        default: "h-11",
        sm: "h-9 px-3 text-xs",
        lg: "h-12 px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">, VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, variant, size, type, ...props }, ref) => {
  return <input type={type} className={cn(inputVariants({ variant, size, className }))} ref={ref} {...props} />
})
Input.displayName = "Input"

export { Input, inputVariants }
