const StartReading = () => {
  return (
    <div className="overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="my-16 mx-6">
          <p className="text-xl font-bold mb-4 text-gray-500 uppercase text-center">
            Start Reading
          </p>
          <p className="mt-2 text-3xl tracking-tight text-gray-800 sm:text-5xl font-bold text-center mb-[60px]">
            Recommended Articles
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 mx-auto text-center">
            <div className="flex flex-col p-6 bg-primary500 bg-opacity-50 rounded-2xl justify-between">
              <div className="flex flex-col">
                <img
                  src={`img/recommended-1.jpg`}
                  alt={"tes"}
                  width={373}
                  height={373}
                  className="rounded-2xl"
                />
                <p className="font-bold text-3xl mt-4 text-gray-700 text-left">
                  Navigating Parenthood
                </p>
                <p className="text-left mt-2">
                  10 Tips for New Moms and Dads..
                </p>
              </div>
              <button className="bg-white mt-4 rounded-lg py-2 font-bold">
                Read More
              </button>
            </div>

            <div className="flex flex-col p-6 bg-primary500 bg-opacity-50 rounded-2xl justify-between">
              <div className="flex flex-col">
                <img
                  src={`img/recommended-3.jpg`}
                  alt={"tes"}
                  width={373}
                  height={373}
                  className="rounded-2xl"
                />
                <p className="font-bold text-3xl mt-4 text-gray-700 text-left">
                  Seeking Support!
                </p>
                <p className="text-left mt-2">
                  Finding Community as New Parents..
                </p>
              </div>
              <button className="bg-white mt-4 rounded-lg py-2 font-bold">
                Read More
              </button>
            </div>

            <div className="flex flex-col p-6 bg-primary500 bg-opacity-50 rounded-2xl justify-between">
              <div className="flex flex-col">
                <img
                  src={`img/recommended-2.jpg`}
                  alt={"tes"}
                  width={373}
                  height={373}
                  className="rounded-2xl"
                />
                <p className="font-bold text-3xl mt-4 text-gray-700 text-left">
                  Age-By-Age Guide
                </p>
                <p className="text-left mt-2">Sleeping Training for Babies..</p>
              </div>
              <button className="bg-white mt-4 rounded-lg py-2 font-bold">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartReading;
