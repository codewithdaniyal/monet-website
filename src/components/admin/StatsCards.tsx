'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

interface StatsCardsProps {
  total: number;
  today: number;
  pending: number;
  completed: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export function StatsCards({ total, today, pending, completed }: StatsCardsProps) {
  const stats = [
    {
      label: 'Total Bookings',
      value: total,
      icon: CalendarDays,
      color: 'text-gold',
      bg: 'bg-gold/5',
      border: 'border-gold/15',
    },
    {
      label: "Today's Bookings",
      value: today,
      icon: Clock,
      color: 'text-blue-400',
      bg: 'bg-blue-500/5',
      border: 'border-blue-500/15',
    },
    {
      label: 'Pending',
      value: pending,
      icon: AlertCircle,
      color: 'text-amber-400',
      bg: 'bg-amber-500/5',
      border: 'border-amber-500/15',
    },
    {
      label: 'Completed',
      value: completed,
      icon: CheckCircle2,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/5',
      border: 'border-emerald-500/15',
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className={`${stat.bg} ${stat.border} border rounded-xl p-5 md:p-6`}
          >
            <div className={`${stat.color} mb-3`}>
              <Icon size={22} strokeWidth={1.5} />
            </div>
            <motion.p
              className={`font-playfair text-3xl md:text-4xl font-bold ${stat.color}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.1 + 0.3 }}
            >
              {stat.value}
            </motion.p>
            <p className="font-inter text-xs text-darkbg/40 mt-1 uppercase tracking-wider">
              {stat.label}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
