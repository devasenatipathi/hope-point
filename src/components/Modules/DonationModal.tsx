import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Heart, ShieldCheck, CheckCircle2, Package, CreditCard, ArrowRight } from 'lucide-react';

export const DonationModal: React.FC = () => {
  const {
    requirements,
    selectedRequirementId,
    createDonation,
    setActiveModal,
    setSelectedDonationId
  } = useApp();

  const req = requirements.find(r => r.id === selectedRequirementId) || requirements[0];

  const [donationType, setDonationType] = useState<'In-Kind' | 'Financial'>('In-Kind');
  const [quantity, setQuantity] = useState(10);
  const [financialAmount, setFinancialAmount] = useState(2500);
  const [itemTitle, setItemTitle] = useState(req ? req.title : 'General Relief Contribution');
  const [logisticsMode, setLogisticsMode] = useState<'Pickup' | 'Drop-off'>('Drop-off');
  const [isSuccess, setIsSuccess] = useState(false);
  const [createdTrackingCode, setCreatedTrackingCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const record = createDonation({
      ngoId: req ? req.ngoId : 'ngo-caretrust',
      ngoName: req ? req.ngoName : 'CareTrust Foundation',
      requirementId: req ? req.id : undefined,
      type: donationType,
      itemTitle: donationType === 'In-Kind' ? itemTitle : `Financial Sponsorship for ${req.title}`,
      quantityOrAmount: donationType === 'In-Kind' ? `${quantity} ${req.unit || 'Units'}` : `₹ ${financialAmount.toLocaleString()}`,
      amountNumber: donationType === 'Financial' ? financialAmount : undefined
    });

    setCreatedTrackingCode(record.trackingCode);
    setSelectedDonationId(record.id);
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4 max-h-[90vh] overflow-y-auto">
        
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-emerald-600 fill-emerald-600" />
            <h3 className="text-base font-bold text-slate-900">Donate / Sponsor Support</h3>
          </div>
          <button onClick={() => setActiveModal(null)} className="text-slate-400 hover:text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            
            {/* NGO Target Card */}
            {req && (
              <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-1">
                <p className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">Target NGO & Requirement</p>
                <p className="font-bold text-slate-900 text-sm flex items-center gap-1">
                  {req.ngoName}
                  {req.ngoVerified && <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />}
                </p>
                <p className="text-xs text-slate-700">Needs: <strong>{req.title}</strong> ({req.quantityFulfilled} / {req.quantityRequired} {req.unit} fulfilled)</p>
              </div>
            )}

            {/* Donation Type Selector */}
            <div>
              <label className="block font-bold text-slate-700 mb-1.5">Select Donation Type</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setDonationType('In-Kind')}
                  className={`p-3 rounded-xl border font-bold flex items-center justify-center gap-2 transition-all ${
                    donationType === 'In-Kind'
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <Package className="w-4 h-4" />
                  <span>In-Kind Resource Item</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDonationType('Financial')}
                  className={`p-3 rounded-xl border font-bold flex items-center justify-center gap-2 transition-all ${
                    donationType === 'Financial'
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Financial Sponsorship</span>
                </button>
              </div>
            </div>

            {donationType === 'In-Kind' ? (
              <div className="space-y-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Item Title</label>
                  <input
                    type="text"
                    value={itemTitle}
                    onChange={(e) => setItemTitle(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 font-medium"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Quantity Pledged</label>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 font-medium"
                    min={1}
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Logistics / Delivery Mode</label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setLogisticsMode('Drop-off')}
                      className={`flex-1 py-2 rounded-lg border font-semibold text-xs ${
                        logisticsMode === 'Drop-off' ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      I will drop off at NGO Puducherry center
                    </button>
                    <button
                      type="button"
                      onClick={() => setLogisticsMode('Pickup')}
                      className={`flex-1 py-2 rounded-lg border font-semibold text-xs ${
                        logisticsMode === 'Pickup' ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      Request HopePoint Volunteer Pickup
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Select Amount (INR)</label>
                  <div className="grid grid-cols-4 gap-2 mb-2">
                    {[500, 1000, 2500, 5000].map(amt => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setFinancialAmount(amt)}
                        className={`py-2 rounded-lg border font-bold text-xs ${
                          financialAmount === amt ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-slate-50 text-slate-700 border-slate-200'
                        }`}
                      >
                        ₹ {amt}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    value={financialAmount}
                    onChange={(e) => setFinancialAmount(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 font-bold text-slate-900"
                    required
                  />
                </div>
              </div>
            )}

            <div className="pt-2 flex gap-2">
              <button
                type="submit"
                className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors shadow-md flex items-center justify-center gap-1.5"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Confirm Contribution</span>
              </button>
            </div>

          </form>
        ) : (
          /* Success Screen */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-slate-900">Donation Successfully Logged!</h3>
              <p className="text-xs text-slate-500 mt-1">Thank you for supporting {req ? req.ngoName : 'HopePoint Social Care'}.</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs space-y-1">
              <p className="text-slate-500 font-medium">Tracking Code:</p>
              <p className="text-base font-mono font-black text-emerald-700">{createdTrackingCode}</p>
              <p className="text-[11px] text-slate-500 mt-2">
                Status: <strong className="text-slate-800">Initiated → Pending NGO Receipt</strong>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setActiveModal('track-donation');
                }}
                className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-colors"
              >
                Track Live Donation Status
              </button>
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2.5 bg-slate-100 text-slate-700 font-bold text-xs rounded-xl"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
