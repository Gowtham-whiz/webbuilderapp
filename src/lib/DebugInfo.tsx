// components/DebugInfo.tsx
"use client";

const DebugInfo = ({ data }: { data: any }) => {
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <div className="fixed bottom-0 right-0 bg-black/80 text-white p-4 m-4 rounded max-w-lg max-h-96 overflow-auto">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DebugInfo;
