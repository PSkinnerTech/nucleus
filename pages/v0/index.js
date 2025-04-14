import React from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// Metadata for the V0 section
export const v0Meta = {
  title: "v0",
  pages: [
    {
      title: "V0 Roadmap",
      path: "v0-roadmap"
    },
    {
      title: "Step 1: Developer and Testing",
      path: "developer-and-testing"
    }
  ]
};

// Create a proper React component that redirects to the first page
export default function V0Index() {
  const router = useRouter();
  
  // Redirect to the first page in the section
  useEffect(() => {
    router.push('/v0/v0-roadmap');
  }, [router]);
  
  // Return a loading state while redirecting
  return (
    <div>
      <h1>Rin V0</h1>
      <p>Redirecting to V0 Roadmap...</p>
    </div>
  );
} 