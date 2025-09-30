'use client'
import React from 'react';

interface ClientButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className: string;
}

export default function ClientButton({ onClick, children, className }: ClientButtonProps) {
   return (
    <div>
      {/* ... */}
      <ClientButton onClick={onClick} className="btn-primary">
        Sign In
      </ClientButton>
      {/* ... */}
    </div>
  );
}