export default function Roadmap() {
  return (
    <div className="mx-auto w-full h-full" id="roadmap">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <h1 className="font-bold font-capriola text-center text-2xl title-font mb-4 text-gray-900">
          ROADMAP
        </h1>
        <p className="font-open-sans text-center text-sm mb-4 text-gray-500">Subject to change according to community decisions</p>
        <div
          className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
          style={{ left: "50%" }}
        ></div>
        {/* <!-- left timeline --> */}
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-16 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">0%</h1>
          </div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <p className="font-capriola font-bold text-gray-800 text-sm sm:text-lg ">
              {" "}

              Early adopters sale for early Discord users!
            </p>
          </div>
        </div>

           {/* <!-- right timeline --> */}
           <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-16 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">5%</h1>
          </div>
          <div className="order-1 bg-ma-pink rounded-lg shadow-xl w-5/12 px-6 py-4">
            <p className="font-capriola font-bold text-white text-sm sm:text-lg">
              {" "}

              Listing on Rarity Sniper!
            </p>
          </div>
        </div>

{/* <!-- left timeline --> */}
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-16 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">10%</h1>
          </div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <p className="font-capriola font-bold text-gray-800 text-sm sm:text-lg ">
              {" "}

              Paid promotion on Rarity Sniper!
            </p>
          </div>
        </div>

        {/* <!-- right timeline --> */}
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-16 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">25%</h1>
          </div>
          <div className="order-1 bg-ma-pink rounded-lg shadow-xl w-5/12 px-6 py-4">
            <p className="font-capriola font-bold text-white text-sm sm:text-lg">
              {" "}

              Rarity Tools listing & 2 RARE Axolotls airdrop to holders!
            </p>
          </div>
        </div>

        {/* <!-- left timeline --> */}
        <div className="mb-8 flex justify-between items-center flex-row-reverse w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-16 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">50%</h1>
          </div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <p className="font-capriola font-bold text-gray-800 text-sm sm:text-lg">
              {" "}
              2 RARE Axolotls & 2 ETH airdrops to holders | 1 ETH into community wallet!
            </p>
          </div>
        </div>

        {/* <!-- right timeline --> */}
        <div className="mb-8 flex justify-between  items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-16 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">75%</h1>
          </div>
          <div className="order-1 bg-ma-pink rounded-lg shadow-xl w-5/12 px-6 py-4">
            <p className="font-capriola font-bold text-white text-sm sm:text-lg">
              {" "}
             1 RARE Axolotl & 0.8 ETH airdrops to holders | 1 ETH into community wallet!
            </p>
          </div>
        </div>

        {/* <!-- left timeline --> */}
        <div className="mb-8 flex justify-between items-center flex-row-reverse w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-16 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">90%</h1>
          </div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <p className="font-capriola font-bold text-gray-800 text-sm sm:text-lg">
              {" "}
              2 ETH into community wallet!
            </p>
          </div>
        </div>

        {/* <!-- right timeline --> */}
        <div className="mb-8 flex justify-between  items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-16 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">100%</h1>
          </div>
          <div className="order-1 bg-ma-pink rounded-lg shadow-xl w-5/12 px-6 py-4">
            <p className="font-capriola font-bold text-white text-sm sm:text-lg">
              {" "}
              10% charity to Amphibian Foundation!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
