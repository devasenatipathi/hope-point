import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, FileText, Upload, Plus } from 'lucide-react';
import { NGOCategory, UrgencyLevel } from '../../types';

export const PostRequirementModal: React.FC = () => {
  const { postRequirement, setActiveModal } = useApp();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Shelter & Clothing');
  const [quantityRequired, setQuantityRequired] = useState(50);
  const [unit, setUnit] = useState('Pieces');
  const [urgency, setUrgency] = useState<UrgencyLevel>('High');
  const [requiredBy, setRequiredBy] = useState('2026-08-20');
  const [location, setLocation] = useState('Puducherry, India');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    postRequirement({
      title,
      category,
      quantityRequired: Number(quantityRequired),
      unit,
      urgency,
      requiredBy,
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
            <FileText className="w-5 h-5 text-blue-600" />
            <h3 className="text-base font-bold text-slate-900">+ Post NGO Requirement</h3>
          </div>
          <button onClick={() => setActiveModal(null)} className="text-slate-400 hover:text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 text-xs">
          <div>
            <label className="block font-bold text-slate-700 mb-1">Requirement Title</label>
            <input
              type="text"
              placeholder="e.g. Winter Woolen Blankets, Wheelchairs, Textbooks"
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
                <option value="Education & Books">Education & Books</option>
                <option value="Healthcare & Medical">Healthcare & Medical</option>
                <option value="Food & Nutrition">Food & Nutrition</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Urgency Level</label>
              <select
                value={urgency}
                onChange={(e) => setUrgency(e.target.value as UrgencyLevel)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 font-medium"
              >
                <option value="Emergency">Emergency</option>
                <option value="High">High Urgency</option>
                <option value="Medium">Medium Urgency</option>
                <option value="Low">Low Urgency</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Quantity Needed</label>
              <input
                type="number"
                value={quantityRequired}
                onChange={(e) => setQuantityRequired(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 font-medium"
                required
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Unit</label>
              <input
                type="text"
                placeholder="Pieces, Units, Kits, Sets"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 font-medium"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Required By Date</label>
              <input
                type="date"
                value={requiredBy}
                onChange={(e) => setRequiredBy(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 font-medium"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Location / City</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Requirement Description</label>
            <textarea
              rows={3}
              placeholder="Explain the necessity and target beneficiaries..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5"
              required
            />
          </div>

          <div className="pt-3 flex gap-2">
            <button
              type="submit"
              className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors"
            >
              Post Requirement
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
