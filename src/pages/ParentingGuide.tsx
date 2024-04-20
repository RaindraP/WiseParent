import Navbar from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ParentingGuide = () => {
  const data = [
    {
      title: "Benefits of Milk for Children's Brain Development",
      description:
        "Having intelligent children is the hope of all mothers. The development of a baby's brain does not just appear, it starts in the womb and continues to develop until childhood. Mothers may also have consumed milk for the development of their child's brain since pregnancy.",
      timestamp: "3 Minutes Ago - Wise Parent Admin",
      imgTitle: "nutrisi.png",
      category: ["Nutrition"],
      slug: "benefits-of-milk-for-childrens-brain-development",
    },
    {
      title: "Effective Ways to Educate Children to Be Smart and Intelligent",
      description:
        "Smart children are considered to be able to achieve better in school and achieve success in life. Therefore, it is not uncommon for parents to be willing to do anything to make their children smarter, such as enrolling their children in tutoring/course programs.",
      timestamp: "60 Minutes Ago - Wise Parent Admin",
      imgTitle: "stimulasi.png",
      category: ["Stimulation"],
      slug: "effective-ways-to-educate-children-to-be-smart-and-intelligent",
    },
    {
      title: "How to Support Children's Potential in the Digital Era",
      description:
        "Technological advances in the digital era provide many benefits in human life, such as facilitating communication, searching for information, and helping the learning process.",
      timestamp: "90 Minutes Ago - Wise Parent Admin",
      imgTitle: "parenting.png",
      category: ["Parenting", "Stimulation"],
      slug: "how-to-support-childrens-potential-in-the-digital-era",
    },
    // Add more objects as needed
  ];

  const tags = [
    {
      title: "Parenting",
      href: "parenting",
    },
    {
      title: "Stimulation",
      href: "stimulation",
    },

    {
      title: "Nutrition",
      href: "nutrition",
    },
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (className: any) {
      return '<span class="' + className + '"></span>';
    },
  };

  return (
    <>
      <Navbar theme="light" selected="parenting" />
      <div className="overflow-hidden bg-white mt-[40px]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="my-16 mx-6">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="col-span-9 flex flex-col">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 3000 }}
                  navigation
                  pagination={pagination}
                  modules={[Pagination]}
                  className="mySwiper w-full"
                >
                  {data.map((article, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative">
                        <img
                          className="rounded-xl"
                          src={`/img/${article.imgTitle}`}
                          alt="Wise Parent Hero"
                        />
                        <div className="absolute inset-0 bg-black opacity-35"></div>
                        <div className="absolute bottom-4 left-4 p-4 text-white">
                          <div className="flex flex-row gap-4">
                            {article.category.map((cat, index) => (
                              <p
                                className="border border-white rounded-md py-1 px-3 text-sm font-semibold"
                                key={index}
                              >
                                {cat}
                              </p>
                            ))}
                          </div>

                          <p className="text-4xl mt-4 font-semibold">
                            {article.title}
                          </p>
                          <p className="mt-4 text-md font-normal">
                            {article.timestamp}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="w-full border-b border-gray-300 mt-8"></div>
                <div className="flex flex-col">
                  <p className="text-primary600 text-xl font-bold my-4">
                    News Feed
                  </p>
                  <div className="flex flex-col gap-8">
                    {data.map((item, index) => (
                      <a href={`parenting/article/${item.slug}`} key={index}>
                        <div className="grid lg:grid-cols-3 gap-8">
                          <img
                            className="w-full h-full col-span-1 rounded-lg"
                            src={`/img/${item.imgTitle}`}
                            alt="Wise Parent Hero"
                          />

                          <div className="flex flex-col col-span-2 gap-4">
                            <div className="flex flex-row gap-2">
                              {item.category.map((tags, index) => (
                                <p
                                  key={index}
                                  className="text-sm px-2 py-1 bg-secondary600 text-white rounded-lg"
                                >
                                  {tags}
                                </p>
                              ))}
                            </div>
                            <p className="font-bold text-2xl">{item.title}</p>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                            <p className="text-sm">{item.timestamp}</p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="w-full border-b border-gray-300 mt-8"></div>
                  <p className="text-primary600 text-xl font-bold my-4">
                    Recommended For You
                  </p>
                  <div className="grid lg:grid-cols-3 gap-8">
                    {data.map((item, index) => (
                      <a href={`parenting/article/${item.slug}`} key={index}>
                        <div className="col-span-1 flex flex-col gap-4">
                          <img
                            className="w-full rounded-lg mb-2"
                            src={`/img/${item.imgTitle}`}
                            alt="Wise Parent Hero"
                          />
                          <div className="flex flex-row gap-2">
                            {item.category.map((tags, index) => (
                              <p
                                key={index}
                                className="text-xs px-2 py-1 bg-secondary600 text-white rounded-lg"
                              >
                                {tags}
                              </p>
                            ))}
                          </div>
                          <p className="font-bold text-xl">{item.title}</p>

                          <p className="text-sm">{item.timestamp}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-span-3">
                <p className="text-primary600 text-lg font-bold mb-4">
                  Search This Site
                </p>
                <input
                  type="text"
                  className="border py-2 px-4 border-gray-300 rounded-sm"
                  placeholder="search here"
                />
                <div className="w-full border-b border-gray-300 mt-8"></div>
                <p className="text-primary600 text-lg font-bold my-4">
                  Categories
                </p>
                <div className="flex flex-col gap-3">
                  {tags.map((tag, index) => (
                    <a href={`/parenting/${tag.href}`} key={index}>
                      <div className="border py-2 px-4 border-gray-300 rounded-md hover:bg-primary600 hover:text-white hover:border-primary600">
                        {tag.title}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ParentingGuide;
