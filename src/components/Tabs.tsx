const Tabs = () => {
  return (
    <div className="border-gray-6">
      <div aria-orientation="horizontal" role="tablist">
        <button
          id="tabs-1-tab-1"
          className="text-body-2 text-black border-b whitespace-nowrap text-base font-bold mr-3 pb-1"
          aria-controls="tabs-1-panel-1"
          role="tab"
          type="button"
        >
          Buy
        </button>

        <button
          id="tabs-1-tab-2"
          className="text-body-2 text-gray-4 border-transparent whitespace-nowrap text-base"
          aria-controls="tabs-1-panel-2"
          role="tab"
          type="button"
        >
          Sell
        </button>
      </div>
    </div>
  );
};

export default Tabs;
