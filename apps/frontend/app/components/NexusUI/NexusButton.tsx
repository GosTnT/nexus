import { Slot } from "@radix-ui/react-slot";
import { ButtonProps } from "@radix-ui/themes/dist/cjs/components/button";
import { forwardRef } from "react";

const NexusButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={`h-11 px-8 inline-flex items-center justify-center rounded-lg text-sm 
font-medium ring-offset-[#4b6cb7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
focus-visible:ring-offset-2 bg-gradient-to-br from-[#FF6E8C] from-5% to-[#4b6cb7] to-60%
 ease-in-out delay-1000 hover:-translate-y-1 hover:scale-110 hover:bg-red-800 duration-1000`}
        ref={ref}
        {...props}
      />
    );
  },
);
NexusButton.displayName = "NexusButton";

export { NexusButton };
