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
              <p className="font-bold">Parenting Class</p>
              <p className="text-justify">
                Join our parenting classes to get practical guidance and
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
              <p className="font-bold">Ask with Community</p>
              <p className="text-justify">
                Through the 'ask your question' feature you can get answers from
                community that can help you become a good parent.
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
              <p className="font-bold">Information Sharing</p>
              <p className="text-justify">
                Providing trusted and useful content, to support you in
                addressing important aspects of parenting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
