import Navbar from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import {
  CalendarDaysIcon,
  CheckBadgeIcon,
  PhoneIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const CourseDetails = () => {
  return (
    <>
      <Navbar theme="light" selected="krisbu" />
      <div className="overflow-hidden mt-[40px]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="my-16 mx-6">
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="col-span-8">
                <div className="flex flex-col gap-4">
                  <p className="flex flex-row gap-4">
                    <a href="../" className="text-primary700">
                      Home
                    </a>
                    <p>•</p>
                    <a href="../course" className="text-primary700">
                      Course
                    </a>
                    <p>•</p>
                    <p>Parenting Course 1</p>
                  </p>
                  <p className="text-4xl font-semibold">Parenting Course 1</p>
                  <p className="">
                    With{" "}
                    <span className="font-semibold text-primary700">
                      Agung Mahadana
                    </span>
                  </p>
                </div>
                <div className="flex flex-col gap-4 mt-12">
                  <p className="text-2xl font-semibold text-primary800">
                    About This Course
                  </p>
                  <p className="text-gray-700">
                    The parenting 1 course is a course provided for parents who
                    are in the early stages of building a household. Devoted to
                    all young newly married couples so that they can prepare
                    themselves to apply good parenting knowledge so that a
                    harmonious family foundation and good child parenting
                    management will be achieved.
                  </p>
                </div>
                <div className="flex flex-col gap-4 mt-12">
                  <p className="text-2xl font-semibold text-primary800">
                    Material Lists
                  </p>
                  <div className="p-4 border border-gray-200 flex flex-col gap-2">
                    <p>Parenting Basics</p>
                    <p>Behavioral Theory</p>
                    <p>Nutrition Theory</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 mt-12">
                  <p className="text-2xl font-semibold text-primary800">
                    Expected Output
                  </p>
                  <p className="text-gray-700">
                    The parenting 1 course is a course provided for parents who
                    are in the early stages of building a household. Devoted to
                    all young newly married couples so that they can prepare
                    themselves to apply good parenting knowledge so that a
                    harmonious family foundation and good child parenting
                    management will be achieved.
                  </p>
                </div>
              </div>
              <div className="col-span-4">
                <img src="/img/nutrisi.png" alt="kelas-1" />
                <div className="border p-4 shadow-md flex flex-col gap-4">
                  <div className="flex flex-row gap-4">
                    <PhoneIcon width={16} />
                    <p>Rp. 250.000</p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <StarIcon width={16} />
                    <p>4.9 / 5.0</p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <CalendarDaysIcon width={16} />
                    <p>4 Weeks</p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <CheckBadgeIcon width={16} />
                    <p>Unlimited Material Access</p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <CheckBadgeIcon width={16} />
                    <p>Community and Mentor Discussion</p>
                  </div>
                  <button className="mt-4 py-2 bg-primary500 hover:bg-primary700 text-white rounded-lg">
                    Join Course
                  </button>
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

export default CourseDetails;
