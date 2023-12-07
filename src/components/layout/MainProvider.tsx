'use client';

import AuthProvider from '@/providers/AuthProvider';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SessionProvider} from 'next-auth/react';
import {type PropsWithChildren} from 'react';
import {Toaster} from 'react-hot-toast';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export default function MainProvider({children}: PropsWithChildren<unknown>) {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>{children}</AuthProvider>
      </QueryClientProvider>
      <Toaster position="top-right" />
    </SessionProvider>
  );
}
