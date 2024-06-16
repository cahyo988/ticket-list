import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">Ticket Not Found</h2>
      <p>We couldnt find the ticket you were looking for</p>
      <p>
        Go back to the <Link href="/">Dashboard</Link>
      </p>
    </main>
  );
}