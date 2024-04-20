import Navbar from "../Navbar/Navbar";

const HeroDefault = () => {
  return (
    <>
      <Navbar theme="dark" selected="home" />

      <div className="relative h-screen">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={`/img/hero-default-1.jpg`}
          alt="Wise Parent Hero"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center flex items-center justify-center">
          <div className="container">
            <div className="flex flex-col gap-2 text-left mx-auto max-w-7xl px-6 lg:px-8">
              <p className="text-4xl font-bold leading-[150%] text-white">
                Find happiness in wise <br /> parenting.
              </p>
              <p className="text-white max-w-lg">
                With practical guidance and a deep understanding of children's
                needs, you will discover ways to form strong relationships and
                achieve happiness together in the journey of raising children.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroDefault;
