import Navbar from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import CourseFeatures from "../components/Section/CourseFeatures";

const Courses = () => {
  const data = [
    {
      title: "Parenting Course 1",
      description:
        "Course Lorem uga telah mengkonsumsi susu untuk perkembangan otak anak  sejak mengandung.",
      price: "Rp. 250.000,00",
      imgTitle: "nutrisi.png",
      slug: "parenting-course-1",
      topic: [
        "Parenting Fundamental",
        "Parenting Fundamental",
        "Parenting Fundamental",
      ],
      mentor: "Krisna Wandhana",
    },
    {
      title: "Parenting Course 2",
      description:
        "Course Lorem uga telah mengkonsumsi susu untuk perkembangan otak anak  sejak mengandung.",
      price: "Rp. 250.000,00",
      imgTitle: "stimulasi.png",
      slug: "parenting-course-2",
      topic: [
        "Parenting Fundamental",
        "Parenting Fundamental",
        "Parenting Fundamental",
      ],
      mentor: "Tegukuh",
    },
    {
      title: "Parenting Course 3",
      description:
        "Course Lorem uga telah mengkonsumsi susu untuk perkembangan otak anak  sejak mengandung.",
      price: "Rp. 250.000,00",
      imgTitle: "parenting.png",
      slug: "parenting-course-3",
      topic: [
        "Parenting Fundamental",
        "Parenting Fundamental",
        "Parenting Fundamental",
      ],
      mentor: "Agung Mahadana",
    },
  ];

  return (
    <>
      <Navbar theme="light" selected="course" />
      <div className="relative h-screen">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={`/img/hero-default-2.jpg`}
          alt="Wise Parent Hero"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center flex items-center justify-center">
          <div className="container">
            <div className="flex flex-col gap-2 text-left mx-auto max-w-7xl px-6 lg:px-8">
              <p className="text-4xl font-bold leading-[150%] text-primary700">
                Best parenting for best
                <br /> children's future.
              </p>
              <p className="text-gray-800 max-w-lg">
                With practical guidance and a deep understanding of children's
                needs, you will discover ways to form strong relationships and
                achieve happiness together in the journey of raising children.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[40px]">
        <CourseFeatures />
      </div>
      <div className="overflow-hidden bg-primary200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="my-16 mx-6">
            <p className="text-xl font-bold mb-4 text-gray-500 uppercase text-center">
              WiseParent's Course
            </p>
            <p className="mt-2 text-3xl tracking-tight text-gray-800 sm:text-5xl font-bold text-center">
              Available Courses
            </p>
            <div className="grid lg:grid-cols-3 gap-8 mt-12">
              {data.map((item, index) => (
                <a href={`course/${item.slug}`} key={index}>
                  <div className="col-span-1 flex flex-col p-6 bg-white rounded-lg">
                    <img
                      className="w-full rounded-lg mb-2"
                      src={`/img/${item.imgTitle}`}
                      alt="Wise Parent Hero"
                    />
                    {/* <div className="flex flex-row gap-2 mt-6">
                      {item.category.map((tags, index) => (
                        <p
                          key={index}
                          className="text-xs px-2 py-1 bg-secondary600 text-white rounded-lg"
                        >
                          {tags}
                        </p>
                      ))}
                    </div> */}
                    <p className="font-bold text-xl mt-4">{item.title}</p>

                    <p className="text-sm mt-2">{item.description}</p>
                    <p className="font-semibold text-primary800 text-xl mt-4">
                      {item.price}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Courses;
