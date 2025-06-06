import { Slot } from "@radix-ui/react-slot";
import { ButtonProps } from "@radix-ui/themes/dist/cjs/components/button";
import { forwardRef } from "react";

const NexusButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={`w-44 text-nowrap max-w-48  h-11 mt-2.5 px-8 items-center justify-center rounded-lg text-sm
font-medium tracking-[.025em] ring-offset-[#4b6cb7] bg-gradient-to-br from-[#FF6E8C] from-5% to-[#4b6cb7] to-60% animate-gradient
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
