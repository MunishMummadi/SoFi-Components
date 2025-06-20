import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const headingVariants = cva("font-display font-bold tracking-tight", {
  variants: {
    variant: {
      h1: "text-display-2xl md:text-display-2xl",
      h2: "text-display-xl md:text-display-xl",
      h3: "text-display-lg md:text-display-lg",
      h4: "text-display-md md:text-display-md",
      h5: "text-display-sm md:text-display-sm",
      h6: "text-display-xs md:text-display-xs",
    },
    color: {
      default: "text-sofi-gray-900",
      gradient: "sofi-gradient-text",
      muted: "text-sofi-gray-600",
    },
  },
  defaultVariants: {
    variant: "h1",
    color: "default",
  },
})

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, color, as, ...props }, ref) => {
    const Comp =
      as ||
      (variant === "h1"
        ? "h1"
        : variant === "h2"
          ? "h2"
          : variant === "h3"
            ? "h3"
            : variant === "h4"
              ? "h4"
              : variant === "h5"
                ? "h5"
                : "h6")
    return <Comp className={cn(headingVariants({ variant, color, className }))} ref={ref} {...props} />
  },
)
Heading.displayName = "Heading"

const textVariants = cva("", {
  variants: {
    variant: {
      body: "text-base leading-relaxed",
      lead: "text-xl leading-relaxed font-medium",
      large: "text-lg leading-relaxed",
      small: "text-sm leading-normal",
      muted: "text-sm text-sofi-gray-500 leading-normal",
    },
  },
  defaultVariants: {
    variant: "body",
  },
})

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div"
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(({ className, variant, as = "p", ...props }, ref) => {
  const Comp = as
  return <Comp className={cn(textVariants({ variant, className }))} ref={ref} {...props} />
})
Text.displayName = "Text"

export { Heading, Text, headingVariants, textVariants }
