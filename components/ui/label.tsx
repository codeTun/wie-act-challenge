// components/ui/label.tsx
import React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label'; // Make sure this import is correct
import { VariantProps } from 'class-variance-authority'; // Adjust import if necessary

// Define your props interface
interface LabelProps extends React.ComponentProps<typeof LabelPrimitive.Root>, VariantProps<typeof LabelPrimitive.Root> {
  className?: string;
  variant?: string; // Adjust types as necessary
  size?: string;    // Adjust types as necessary
}

const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, LabelProps>(
  ({ className, variant, size, ...props }, ref) => (
    <LabelPrimitive.Root ref={ref} className={className} {...props}>
      {props.children}
    </LabelPrimitive.Root>
  )
);

Label.displayName = 'Label'; // Helpful for debugging

export default Label;
