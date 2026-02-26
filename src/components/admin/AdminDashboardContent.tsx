'use client';

import React from 'react';
import { StatsCards } from './StatsCards';
import { BookingsTable } from './BookingsTable';
import { MessagesTable } from './MessagesTable';

interface AdminDashboardContentProps {
  stats: {
    total: number;
    today: number;
    pending: number;
    completed: number;
  };
}

export function AdminDashboardContent({ stats }: AdminDashboardContentProps) {
  return (
    <>
      <StatsCards
        total={stats.total}
        today={stats.today}
        pending={stats.pending}
        completed={stats.completed}
      />
      <BookingsTable />
      <MessagesTable />
    </>
  );
}
