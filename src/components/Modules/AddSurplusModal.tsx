import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Package } from 'lucide-react';

export const AddSurplusModal: React.FC = () => {
  const { addSurplusResource, setActiveModal } = useApp();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Shelter & Clothing');
  const [quantityAvailable, setQuantityAvailable] = useState(100);
  const [unit, setUnit] = useState('Pieces');
  const [condition, setCondition] = useState<'New' | 'Gently Used' | 'Refurbished' | 'Good'>('New');
  const [availableUntil, setAvailableUntil] = useState('2026-09-30');
  const [location, setLocation] = useState('Puducherry, India');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    addSurplusResource({
      title,
      category,
      quantityAvailable: Number(quantityAvailable),
      unit,
      condition,
      availableUntil,
      location,
      description,
      imageUrl: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&auto=format&fit=crop&q=80'
    });

    setActiveModal(null);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-teal-600" />
            <h3 className="text-base font-bold text-slate-900">+ Add Surplus Resource</h3>
          </div>
          <button onClick={() => setActiveModal(null)} className="text-slate-400 hover:text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 text-xs">
          <div>
            <label className="block font-bold text-slate-700 mb-1">Surplus Resource Title</label>
            <input
              type="text"
              placeholder="e.g. 100 Fleece Blankets, Benches, Crutches"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 font-medium"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 font-medium"
              >
                <option value="Shelter & Clothing">Shelter & Clothing</option>
                <option value="Assistive Devices">Assistive Devices</option>
                <option value="Education & Furniture">Education & Furniture</option>
                <option value="Healthcare & Medical">Healthcare & Medical</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Condition</label>
              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value as any)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 font-medium"
              >
                <option value="New">Brand New</option>
                <option value="Gently Used">Gently Used</option>
                <option value="Refurbished">Refurbished</option>
                <option value="Good">Good</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Quantity Available</label>
              <input
                type="number"
                value={quantityAvailable}
                onChange={(e) => setQuantityAvailable(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 font-medium"
                required
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Unit</label>
              <input
                type="text"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 font-medium"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Available Until</label>
              <input
                type="date"
                value={availableUntil}
                onChange={(e) => setAvailableUntil(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 font-medium"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Description</label>
            <textarea
              rows={3}
              placeholder="Describe surplus source and condition details..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5"
              required
            />
          </div>

          <div className="pt-3 flex gap-2">
            <button
              type="submit"
              className="flex-1 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition-colors"
            >
              List Surplus Resource
            </button>
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="px-4 py-2.5 bg-slate-100 text-slate-700 font-bold rounded-xl"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
