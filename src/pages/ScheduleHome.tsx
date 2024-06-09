import Navbar from "../components/Navbar/Navbar";

const ScheduleHome = () => {
  return (
    <>
      <Navbar theme="light" selected="schedule" />
      <div className="overflow-hidden bg-white my-[100px]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-6 mt-6">
            <a href="/schedule/area15">
              <div className="border border-primary200 rounded-md flex flex-col">
                <img
                  src="/img/hope.png"
                  alt="class_cover"
                  className="rounded-t-md h-[100px] bg-cover"
                />
                <div className="flex flex-col absolute p-3">
                  <p className="font-bold text-md text-white">Area 15 Domain</p>
                  <p className="text-sm text-white mt-1">Miori Celesta</p>
                </div>
                <img
                  src="/img/sampul.jpg"
                  alt="class_cover"
                  className="rounded-full absolute w-[80px] h-[80px] ml-[180px] mt-14"
                />

                <div className="flex flex-col p-3 text-sm h-[200px]">tes</div>
              </div>
            </a>
            <div className="border border-primary200 rounded-md flex flex-col">
              <img
                src="/img/hope.png"
                alt="class_cover"
                className="rounded-t-md h-[100px] bg-cover"
              />
              <div className="flex flex-col absolute p-3">
                <p className="font-bold text-md text-white">Area 15 Domain</p>
                <p className="text-sm text-white mt-1">Miori Celesta</p>
              </div>
              <img
                src="/img/sampul.jpg"
                alt="class_cover"
                className="rounded-full absolute w-[80px] h-[80px] ml-[180px] mt-14"
              />

              <div className="flex flex-col p-3 text-sm h-[200px]">tes</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleHome;
