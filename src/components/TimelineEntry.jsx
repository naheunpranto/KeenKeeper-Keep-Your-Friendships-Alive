import { PhoneCall, MessageCircle, Video } from 'lucide-react';

export default function TimelineEntry({ entry }) {
  const Icon = entry.type === 'call' ? PhoneCall : entry.type === 'text' ? MessageCircle : Video;
  return (
    <div className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-sm">
      <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center">
        <Icon size={24} className="text-emerald-700" />
      </div>
      <div className="flex-1">
        <p className="font-medium">{entry.title}</p>
        <p className="text-sm text-gray-500">{new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
      </div>
    </div>
  );
}