const Loader = ({ full }) => {
  if (full) {
    return (
      <>
        <div className="flex-1 bg-[#000000e5] items-center py-4 flex justify-center">
          <div className="triple-spinner"></div>
        </div>
      </>
    );
  }
  return (
    <div class="bg-[#000000e5]">
      <div className="flex-1 items-center py-4 space-x-2 flex justify-center animate-bounce">
        <div class="w-6 h-6 bg-[#7b3ec8] rounded-full"></div>
        <div class="w-6 h-6 bg-[#7680e3] rounded-full"></div>
        <div class="w-6 h-6 bg-[#a894d0] rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;
