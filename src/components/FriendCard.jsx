export default function FriendCard({ friend }) {
  const statusColor =
    friend.status === 'overdue'
      ? 'bg-red-500'
      : friend.status === 'almost due'
      ? 'bg-orange-500'
      : 'bg-emerald-600';

  return (
    <div className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="p-6">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-20 h-20 mx-auto rounded-2xl object-cover hover:scale-105 transition duration-300"
        />

        <h3 className="text-center font-semibold text-lg mt-4 hover:text-emerald-700 transition duration-300">
          {friend.name}
        </h3>

        <p className="text-center text-sm text-gray-500 hover:text-gray-600 transition duration-300">
          {friend.days_since_contact}d ago
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {friend.tags.map(tag => (
            <span
              key={tag}
              className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-3xl hover:bg-emerald-200 transition duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          className={`${statusColor} text-white text-xs font-medium px-4 py-1.5 rounded-3xl mt-4 text-center hover:opacity-90 transition duration-300`}
        >
          {friend.status === 'overdue'
            ? 'Overdue'
            : friend.status === 'almost due'
            ? 'Almost Due'
            : 'On-Track'}
        </div>
      </div>
    </div>
  );
}