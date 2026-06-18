import { useParams, Link } from 'react-router-dom';
import  friends  from '../data/friends';
import { useTimelineStore } from '../store/timelineStore';
import { toast } from 'react-toastify';
import { PhoneCall, MessageCircle, Video, Clock, Archive, Trash2 } from 'lucide-react';
import TimelineEntry from '../components/TimelineEntry';

export default function FriendDetail() {
  const { id } = useParams();
  const friend = friends.find(f => f.id === Number(id));
  const { entries, addEntry } = useTimelineStore();

  if (!friend) return null;

  const friendEntries = entries.filter(e => e.friendId === friend.id);

  const handleCheckIn = (type) => {
    const title = `${type.charAt(0).toUpperCase() + type.slice(1)} with ${friend.name}`;
    addEntry({ title, type, friendId: friend.id, friendName: friend.name });
    toast.success(`${type.charAt(0).toUpperCase() + type.slice(1)} logged with ${friend.name}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
      <div>
        <div className="bg-white rounded-3xl shadow-sm hover:shadow-md transition duration-300 p-6 sm:p-8">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-2xl object-cover hover:scale-105 transition duration-300"
          />

          <h1 className="text-3xl font-bold text-center mt-6 hover:text-emerald-700 transition duration-300">
            {friend.name}
          </h1>

          <div
            className={`mx-auto w-fit px-5 py-1 rounded-3xl text-white text-sm font-medium mt-3 transition duration-300 ${
              friend.status === 'overdue'
                ? 'bg-red-500'
                : friend.status === 'almost due'
                ? 'bg-orange-500'
                : 'bg-emerald-600'
            }`}
          >
            {friend.status.toUpperCase()}
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {friend.tags.map(tag => (
              <span
                key={tag}
                className="bg-emerald-100 text-emerald-700 px-4 py-1 text-xs rounded-3xl hover:bg-emerald-200 transition duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-6 text-sm sm:text-base hover:text-gray-700 transition duration-300">
            {friend.bio}
          </p>

          <p className="text-center text-gray-500 mt-2 hover:text-gray-600 transition duration-300">
            Preferred: email
          </p>

          <div className="mt-10 space-y-3">
            <button className="w-full flex items-center gap-3 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 py-4 px-6 rounded-2xl text-left text-sm sm:text-base transition duration-300">
              <Clock size={20} /> Snooze 2 Weeks
            </button>

            <button className="w-full flex items-center gap-3 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 py-4 px-6 rounded-2xl text-left text-sm sm:text-base transition duration-300">
              <Archive size={20} /> Archive
            </button>

            <button className="w-full flex items-center gap-3 bg-white border border-gray-200 hover:bg-red-50 hover:border-red-200 py-4 px-6 rounded-2xl text-left text-red-500 text-sm sm:text-base transition duration-300">
              <Trash2 size={20} /> Delete
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition duration-300">
            <p className="text-4xl font-bold text-emerald-700">
              {friend.days_since_contact}
            </p>
            <p className="text-xs text-gray-500">Days Since Contact</p>
          </div>

          <div className="bg-white rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition duration-300">
            <p className="text-4xl font-bold text-emerald-700">{friend.goal}</p>
            <p className="text-xs text-gray-500">Goal (Days)</p>
          </div>

          <div className="bg-white rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition duration-300">
            <p className="text-4xl font-bold text-emerald-700">
              {friend.next_due_date}
            </p>
            <p className="text-xs text-gray-500">Next Due</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition duration-300">
          <div className="flex justify-between items-center">
            <p className="font-semibold">Relationship Goal</p>
            <button className="text-xs bg-gray-100 hover:bg-gray-200 transition px-5 py-2 rounded-3xl">
              Edit
            </button>
          </div>

          <p className="text-gray-600 mt-2">
            Connect every {friend.goal} days
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition duration-300">
          <p className="font-semibold mb-5">Quick Check-In</p>

          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={() => handleCheckIn('call')}
              className="flex flex-col items-center gap-2 py-6 hover:bg-emerald-50 rounded-2xl transition duration-300"
            >
              <PhoneCall size={32} className="text-emerald-700" />
              <span className="text-sm">Call</span>
            </button>

            <button
              onClick={() => handleCheckIn('text')}
              className="flex flex-col items-center gap-2 py-6 hover:bg-emerald-50 rounded-2xl transition duration-300"
            >
              <MessageCircle size={32} className="text-emerald-700" />
              <span className="text-sm">Text</span>
            </button>

            <button
              onClick={() => handleCheckIn('video')}
              className="flex flex-col items-center gap-2 py-6 hover:bg-emerald-50 rounded-2xl transition duration-300"
            >
              <Video size={32} className="text-emerald-700" />
              <span className="text-sm">Video</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition duration-300">
          <div className="flex justify-between mb-6">
            <p className="font-semibold">Recent Interactions</p>
            <Link
              to="/timeline"
              className="text-emerald-700 text-sm flex items-center gap-1 hover:text-emerald-800 transition"
            >
              Full History →
            </Link>
          </div>

          <div className="space-y-4 max-h-80 overflow-auto">
            {friendEntries.slice(0, 4).map(entry => (
              <TimelineEntry key={entry.id} entry={entry} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}