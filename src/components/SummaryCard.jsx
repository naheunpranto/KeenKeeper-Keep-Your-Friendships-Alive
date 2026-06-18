export default function SummaryCard({ title, value, color = 'emerald' }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <p
        className={`text-5xl font-bold transition-colors duration-300 ${
          color === 'emerald'
            ? 'text-emerald-700'
            : color === 'red'
            ? 'text-red-500'
            : 'text-gray-900'
        }`}
      >
        {value}
      </p>

      <p className="text-sm text-gray-500 mt-1 hover:text-gray-600 transition duration-300">
        {title}
      </p>
    </div>
  );
}