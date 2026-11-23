// StatCard.jsx
function StatCard({ title, value }) {
  return (
    <div className="rounded-lg bg-white p-5 shadow-sm transition hover:scale-105">
      <h2 className="text-sm font-bold text-gray-500">{title}</h2>
      <p className="mt-2 text-2xl font-bold text-[#673F89]">{value}</p>
    
    </div>
  );
}

export default StatCard;