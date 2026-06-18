import { useState } from 'react';
import { useTimelineStore } from '../store/timelineStore';
import TimelineEntry from '../components/TimelineEntry';

export default function Timeline() {
  const { entries } = useTimelineStore();
  const [filter, setFilter] = useState('all');

  const filtered =
    filter === 'all' ? entries : entries.filter(e => e.type === filter);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 hover:text-emerald-700 transition duration-300">
        Timeline
      </h1>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-8 w-full max-w-xs bg-white border border-gray-200 rounded-2xl py-4 px-6 text-gray-700 focus:outline-none hover:border-gray-300 transition duration-300"
      >
        <option value="all">Filter timeline</option>
        <option value="call">Call</option>
        <option value="text">Text</option>
        <option value="video">Video</option>
      </select>

      <div className="space-y-4">
        {filtered.map(entry => (
          <div key={entry.id} className="hover:scale-[1.01] transition duration-300">
            <TimelineEntry entry={entry} />
          </div>
        ))}
      </div>
    </div>
  );
}