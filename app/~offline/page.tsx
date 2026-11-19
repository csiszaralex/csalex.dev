'use client';

import { WifiOff } from 'lucide-react';

export default function OfflinePage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[80vh] text-center px-4'>
      <WifiOff className='w-24 h-24 mb-6 text-muted-foreground mx-auto' />
      <h1 className='text-4xl font-bold mb-4'>You are offline</h1>
      <p className='text-lg text-muted-foreground mb-8 max-w-md mx-auto'>
        This page hasn&apos;t been saved for offline use yet. Pages you have already visited still
        work offline. To send a message, please reconnect first.
      </p>
      <button
        onClick={() => window.location.reload()}
        className='px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:opacity-90 transition-opacity mx-auto block'
      >
        Retry Connection
      </button>
    </div>
  );
}
