const Loader = ({ full }) => {
  if (full) {
    return (
      <div className="bg-slate-900 flex-1 items-center py-4 flex justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500" />
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center py-3">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500" />
    </div>
  );
};

export default Loader;
