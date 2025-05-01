import React, { useEffect, useState } from "react";

const stats = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Satisfied Clients" },
  { value: 17, suffix: "+", label: "Countries We Operate" },
  { value: 200, prefix: "$", suffix: "K+", label: "Managed Marketing Fund" },
  { value: 2.9, prefix: "$", suffix: "M+", label: "Clients Gain" },
];

const Progress = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prevCounts =>
        prevCounts.map((count, index) => {
          const target = stats[index].value;
          const increment = target / 50;
          if (count < target) {
            const newCount = count + increment;
            return newCount > target ? target : newCount;
          }
          return target;
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 text-center py-16 px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">
        Our{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
          Progress
        </span>
      </h1>
      <p className="max-w-3xl mx-auto text-gray-700 text-lg mb-12">
        TOJO GLOBAL connects your business directly to your target audience,
        eliminating the need to search for clients. With us, they’ll find their
        way to you.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="w-52 h-44 flex flex-col justify-center items-center bg-[linear-gradient(45deg,#060043,#4764D6)] border-2 border-white rounded-2xl text-white shadow-md hover:scale-105 transition-transform duration-300"
          >
            <h1 className="text-3xl md:text-4xl font-bold">
              {item.prefix || ""}
              {item.value % 1 === 0
                ? Math.floor(counts[index])
                : counts[index].toFixed(1)}
              {item.suffix || ""}
            </h1>
            <p className="text-sm mt-2 px-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;
