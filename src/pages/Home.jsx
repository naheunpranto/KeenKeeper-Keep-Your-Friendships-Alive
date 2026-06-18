import { Link } from 'react-router-dom';
import friends from "../data/friends.json"
import FriendCard from '../components/FriendCard';
import SummaryCard from '../components/SummaryCard';
import { Plus } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className="bg-white py-12 sm:py-16 text-center border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 hover:text-emerald-700 transition duration-300">
            Friends to keep close in your life
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-8 hover:text-gray-700 transition duration-300">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>

          <button className="bg-emerald-700 text-white px-6 sm:px-8 py-4 rounded-2xl flex items-center gap-3 mx-auto text-base sm:text-lg font-medium hover:bg-emerald-800 hover:scale-[1.02] transition duration-300">
            <Plus size={24} className="transition duration-300" /> Add a Friend
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="hover:-translate-y-1 transition duration-300">
            <SummaryCard title="Total Friends" value={20} />
          </div>

          <div className="hover:-translate-y-1 transition duration-300">
            <SummaryCard title="On Track" value={8} color="emerald" />
          </div>

          <div className="hover:-translate-y-1 transition duration-300">
            <SummaryCard title="Need Attention" value={7} color="red" />
          </div>

          <div className="hover:-translate-y-1 transition duration-300">
            <SummaryCard title="Interactions This Month" value={12} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 hover:text-emerald-700 transition duration-300">
          Your Friends
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {friends.map(friend => (
            <Link
              key={friend.id}
              to={`/friend/${friend.id}`}
              className="block hover:scale-[1.02] transition duration-300"
            >
              <FriendCard friend={friend} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}