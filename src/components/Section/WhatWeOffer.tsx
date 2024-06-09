const WhatWeOffer = () => {
  return (
    <div className="overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="my-16 mx-6">
          <p className="text-xl font-bold mb-4 text-gray-500 uppercase">
            Services
          </p>
          <p className="mt-2 text-3xl tracking-tight text-gray-800 sm:text-5xl font-bold">
            What We Offer?
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 mx-auto text-center">
            <div className="flex flex-col gap-4">
              <img
                src={`img/what-1.png`}
                alt={"tes"}
                width={373}
                height={373}
                className="my-6"
              />
              <p className="font-bold">Parenting Guides</p>
              <p className="text-justify">
                Read our parenting guides to get practical guidance and
                in-depth knowledge in educating children
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <img
                src={`img/what-2.png`}
                alt={"tes"}
                width={373}
                height={373}
                className="my-6"
              />
              <p className="font-bold">Scheduling</p>
              <p className="text-justify">
                Through the 'Schedule' feature you can makes decision-making easier,
                eleminates uncertainties, and builds healthy habits to manage your time
                and energy better.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <img
                src={`img/what-3.png`}
                alt={"tes"}
                width={373}
                height={373}
                className="my-6"
              />
              <p className="font-bold">KidZone</p>
              <p className="text-justify">
                Explore our Kidzone section for fun and educational activities designed to engage your children. 
                From namely to kisahnesia, find endless ideas to stimulate their 
                imagination and support their development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
