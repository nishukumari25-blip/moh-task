import React, { useEffect } from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3500);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fadeIn max-w-sm w-full">
      <div className="bg-charcoal-950/95 text-ivory-50 border border-gold-500/30 shadow-2xl backdrop-blur-luxury px-4 py-3.5 flex items-center justify-between gap-3 rounded-none">
        <div className="flex items-center gap-3">
          {type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
          ) : (
            <Info className="w-5 h-5 text-sand-300 shrink-0" />
          )}
          <p className="text-xs uppercase tracking-wider font-medium text-ivory-100">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="text-charcoal-400 hover:text-ivory-50 transition-colors p-1"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
