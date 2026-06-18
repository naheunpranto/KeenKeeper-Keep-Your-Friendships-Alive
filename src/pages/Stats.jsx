import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { useTimelineStore } from '../store/timelineStore';

export default function Stats() {
  const { entries } = useTimelineStore();

  const callCount = entries.filter(e => e.type === 'call').length;
  const textCount = entries.filter(e => e.type === 'text').length;
  const videoCount = entries.filter(e => e.type === 'video').length;

  const data = [
    { name: 'Text', value: textCount || 0, fill: '#8b5cf6' },
    { name: 'Call', value: callCount || 0, fill: '#111827' },
    { name: 'Video', value: videoCount || 0, fill: '#10b981' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 hover:text-emerald-700 transition duration-300">
        Friendship Analytics
      </h1>

      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm max-w-md mx-auto hover:shadow-md transition duration-300">
        <p className="text-center font-medium mb-8 hover:text-gray-700 transition duration-300">
          By Interaction Type
        </p>

        <PieChart width={340} height={340} className="mx-auto hover:scale-[1.02] transition duration-300">
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={130}
            dataKey="value"
            paddingAngle={5}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}