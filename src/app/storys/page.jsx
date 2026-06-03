"use client";
import { useSachinGoal } from "@/contexts/SachinGoalContext";

const Story = () => {
  const { sachinGoal } = useSachinGoal();
  return (
    <div className="p-4 flex flex-col gap-4 text-[var(--text)] bg-[var(--bg)] rounded-xl shadow-lg max-w-md mx-auto min-h-screen">
      <h1>Story</h1>
      <p>This is a simple story page.</p>
      <ul>
        {Object.entries(sachinGoal).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Story;
