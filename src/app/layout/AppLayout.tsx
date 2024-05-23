import { Navbar } from '@root/widgets/Navbar/Navbar';
import type { ReactNode } from 'react';
import { ContainerFluid } from '@components/layouts';

/** Файл глобальной разметки страницы, тут выделяется место под headers, footers и тд */
export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ContainerFluid className="grid min-h-screen grid-rows-[max-content_auto_max-content] gap-y-10">
      <Navbar />
      {children}
    </ContainerFluid>
  );
};
