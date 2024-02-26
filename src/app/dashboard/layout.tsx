import type { ReactNode } from 'react';
import { Sidebar } from '@/components/SideBar';
import { TopBar } from '@/components/TopBar';
import { fakeFetchUser } from '@/services/userFetch';

import './index.css';

export default async function DashboardLayout({
  children
}: {
  children: ReactNode;
}) {
  const user = await fakeFetchUser();

  return (
    <>
      <Sidebar {...user} />
      <TopBar />
      {children}
    </>
  );
}
