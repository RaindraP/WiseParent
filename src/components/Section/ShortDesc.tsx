const ShortDesc = () => {
  return (
    <div className="container my-[100px]">
      <div className="overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p
                  className="mt-2 text-3xl tracking-tight text-gray-800 sm:text-5xl"
                  style={{ lineHeight: "130%" }}
                >
                  About <br />{" "}
                  <span className="font-bold text-primary700">WiseParent</span>
                </p>
                <p className="mt-6 text-lg leading-8 font-normal text-gray-600 text-justify">
                  WiseParent is a website that provides resources, guidance and
                  inspiration for parents to develop positive and sustainable
                  parenting. We believe that every parent has the potential to
                  be a strong mentor to their children.
                </p>
                <p className="mt-6 text-lg leading-8 font-normal text-gray-600 text-justify">
                  hrough a combination of experience, knowledge and current
                  research, we strive to provide useful and practical
                  information to help you build strong bonds with your children,
                  facilitate their development and create a loving and
                  harmonious family environment.
                </p>
              </div>
            </div>
            <img src="/img/about.png" width={700} height={504} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortDesc;
