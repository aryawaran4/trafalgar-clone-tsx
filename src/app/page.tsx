'use client'
import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to /best-of-italy
  redirect('/best-of-italy');

  return <main></main>; // You can keep this empty or provide some loading indication if needed
}
