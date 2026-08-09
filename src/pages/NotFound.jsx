import React from 'react';
import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-center p-6">
      <div className="space-y-4 max-w-md">
        <Compass className="h-16 w-16 text-emerald-700 mx-auto animate-spin" style={{ animationDuration: '10s' }} />
        <h1 className="text-4xl font-black text-slate-900">404 - Page Not Found</h1>
        <p className="text-xs text-slate-600">The destination or route you are looking for does not exist on our map.</p>
        <Link to="/">
          <Button className="font-bold mt-2">Back to Home Page</Button>
        </Link>
      </div>
    </div>
  );
}