// import images from "../public/images"
export default function Team() {
  return (
    <section className="text-gray-600 body-font bg-ma-pink" id="team">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col items-center text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
            OUR TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-700">
            The people behind Mighty Axolotl
          </p>
        </div>
        <div className="flex flex-wrap ">
          <div className="p-4 lg:w-1/3 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4"
                src="images/axov2.png"             />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  @McCallister
                </h2>
                <h3 className="text-gray-600 mb-3">Project Lead</h3>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4"
                src="images/axov1.png"              
                />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  @Mimoska
                </h2>
                <h3 className="text-gray-600 mb-3">Artist</h3>
                
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4"
                src="images/axov1.png"               />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  @nini
                </h2>
                <h3 className="text-gray-600 mb-3">Developer</h3>
                
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
}
