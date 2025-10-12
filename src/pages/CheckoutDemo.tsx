import React, { useState } from 'react';
import { useCart } from '../contexts/cartCore';

const CheckoutDemo: React.FC = () => {
  const { cart, clear, getTotal } = useCart();
  const items = Object.entries(cart);
  const [step, setStep] = useState<number>(0);
  const [form, setForm] = useState({ name: '', email: '', card: '' });

  const handleProceed = () => setStep(1);
  const handleBillingNext = () => setStep(2);
  const handleConfirm = () => {
    // mock payment processing delay
    setTimeout(() => {
      clear();
      setStep(3);
    }, 800);
  };

  return (
    <div className="min-h-screen p-8 bg-[#1a1428] text-white">
      <div className="max-w-3xl mx-auto bg-white/5 rounded-2xl p-8">
        <h1 className="text-2xl font-bold mb-4">Checkout Demo</h1>

        {step === 0 && (
          <div>
            {items.length === 0 ? (
              <p className="text-gray-400">Your cart is empty.</p>
            ) : (
              <>
                <div className="space-y-3 mb-4">
                  {items.map(([id, qty]) => (
                    <div key={id} className="flex items-center justify-between">
                      <div>Item {id}</div>
                      <div>{qty}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between font-semibold text-lg mb-4">
                  <div>Total items</div>
                  <div>{getTotal()}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={handleProceed} className="px-4 py-2 bg-orange-500 rounded-md">
                    Proceed
                  </button>
                  <button onClick={() => clear()} className="px-4 py-2 bg-white/10 rounded-md">
                    Clear cart
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {step === 1 && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Billing Information</h2>
            <div className="space-y-3">
              <input
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="Full name"
                className="w-full px-3 py-2 rounded-md bg-white/5"
              />
              <input
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="Email"
                className="w-full px-3 py-2 rounded-md bg-white/5"
              />
              <input
                value={form.card}
                onChange={e => setForm(f => ({ ...f, card: e.target.value }))}
                placeholder="Card (mock)"
                className="w-full px-3 py-2 rounded-md bg-white/5"
              />
            </div>
            <div className="flex items-center gap-2 mt-4">
              <button onClick={handleBillingNext} className="px-4 py-2 bg-orange-500 rounded-md">
                Review
              </button>
              <button onClick={() => setStep(0)} className="px-4 py-2 bg-white/10 rounded-md">
                Back
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Confirm</h2>
            <p className="text-gray-300 mb-4">Confirm your mock payment for {getTotal()} items.</p>
            <div className="flex items-center gap-2">
              <button onClick={handleConfirm} className="px-4 py-2 bg-orange-500 rounded-md">
                Pay (mock)
              </button>
              <button onClick={() => setStep(1)} className="px-4 py-2 bg-white/10 rounded-md">
                Back
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-3">Success!</h2>
            <p className="text-gray-300 mb-4">
              Your mock payment was processed and the cart was cleared.
            </p>
            <button onClick={() => setStep(0)} className="px-4 py-2 bg-orange-500 rounded-md">
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutDemo;
