import { Slot } from "@radix-ui/react-slot";
import { ButtonProps } from "@radix-ui/themes/dist/cjs/components/button";
import { forwardRef } from "react";

const NexusButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={`h-11 px-8 items-center justify-center rounded-lg text-sm 
font-medium ring-offset-[#4b6cb7] bg-gradient-to-br from-[#FF6E8C] from-5% to-[#4b6cb7] to-60% animate-gradient
opacity-90 hover:opacity-100
 `}
        ref={ref}
        {...props}
      />
    );
  },
);
NexusButton.displayName = "NexusButton";

export { NexusButton };
