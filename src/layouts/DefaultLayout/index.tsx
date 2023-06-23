import Header from '@/components/Header';
import { PropsWithChildren } from 'react';

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default DefaultLayout;
