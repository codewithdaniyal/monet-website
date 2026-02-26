'use client';

import React from 'react';
import { X } from 'lucide-react';

interface DeleteModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  loading?: boolean;
}

export function DeleteModal({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  loading,
}: DeleteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onCancel}
      />

      {/* Modal */}
      <div className="relative bg-white border border-gold/10 rounded-xl shadow-2xl max-w-sm w-full p-6">
        <button
          onClick={onCancel}
          className="absolute top-4 right-4 text-darkbg/30 hover:text-darkbg transition-colors"
        >
          <X size={18} />
        </button>

        <h3 className="font-playfair text-xl font-bold text-darkbg mb-2">
          {title}
        </h3>
        <p className="font-inter text-sm text-darkbg/50 mb-6">{message}</p>

        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2.5 rounded-lg border border-gold/15 text-darkbg/60 font-inter text-sm hover:bg-white/5 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 px-4 py-2.5 rounded-lg bg-red-500/90 text-darkbg font-inter text-sm font-medium hover:bg-red-500 transition-colors disabled:opacity-50"
          >
            {loading ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
}
