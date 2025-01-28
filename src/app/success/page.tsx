'use client';

import { Suspense, useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const SuccessPage = () => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  // Suspense boundary wrapping `useSearchParams`
  const SearchParamsSuspenseWrapper = () => {
    const searchParams = useSearchParams();
    const payment_intent = searchParams.get('payment_intent');
    return payment_intent;
  };

  useEffect(() => {
    setIsClient(true); // Runs only on the client side
  }, []);

  useEffect(() => {
    const payment_intent = SearchParamsSuspenseWrapper();
    if (payment_intent && isClient) {
      const makeRequest = async () => {
        try {
          await fetch(`${process.env.NEXT_PUBLIC_URL}/api/confirm/${payment_intent}`, {
            method: 'PUT',
          });
          setTimeout(() => {
            router.push('/orders');
          }, 5000);
        } catch (err) {
          console.log(err);
        }
      };

      makeRequest();
    }
  }, [isClient, router]);

  if (!isClient) {
    return <p>Loading ... </p>; // Prevent render during SSR
  }

  return (
    <div className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-15rem)] flex items-center justify-center text-center text-2xl text-green-700">
      <p className="max-w-[600px]">
        Payment successful. You are being redirected to the orders page. Please do not close the page.
      </p>
    </div>
  );
};

export default function SuccessPageWithSuspense() {
  return (
    <Suspense fallback={<p>Loading search params...</p>}>
      <SuccessPage />
    </Suspense>
  );
}