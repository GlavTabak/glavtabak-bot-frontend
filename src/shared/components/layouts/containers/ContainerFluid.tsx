import { cn } from '@utils';
import type { ReactNode } from 'react';

interface ContainerFluidProps {
  children: ReactNode;
  className?: string;
}

export function ContainerFluid({ children, className }: ContainerFluidProps) {
  return (
    <div className={cn('mr-auto w-full max-w-screen-desktopXl px-3.5 tablet:px-5 desktop:px-[30px]', className)}>
      {children}
    </div>
  );
}
