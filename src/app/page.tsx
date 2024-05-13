'use client';

import { QueryClient, QueryClientProvider } from 'react-query';
import ChallengerList from '../components/ChallengerList';

// Create a client
const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChallengerList />
    </QueryClientProvider>
  );
}
