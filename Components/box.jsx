
const Box = () => {
  return (
    <>
      <div className="py-10    grid lg:grid-cols-3 md:max-w-3xl  gap-x-52 gap-y-4 w-full pt-10  px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="mx-auto w-64">
          <div className="rounded-3xl overflow-hidden relative">
            <div className="h-[410px] box p-7">
              <img className="w-full" src="/description.svg" alt="benefit1" />
              <p className="text-sm  text-white text-center font-semibold mt-6">
                Quarter I
              </p>
              <p className="text-sm  text-white text-center font-semibold mt-3">
                Object-Oriented Programming using TypeScript
              </p>
            </div>
            <div className="absolute left-0 bottom-0  bg-gradient-to-t from-purple-400 via-transparent to-transparent"></div>
          </div>
        </div>
        <div className="mx-auto w-64">
          <div className="rounded-3xl overflow-hidden relative">
            <div className="h-[410px] box p-7">
              <img className="w-full" src="/description1.svg" alt="benefit1" />
              <p className="text-sm  text-white text-center font-semibold mt-6">
                Quarter II
              </p>
              <p className="text-sm  text-white text-center font-semibold mt-3">
                Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and
                APIs using Next.js 13 and Cloud Development Kit (CDK) for
                Terraform
              </p>
            </div>
            <div className="absolute left-0 bottom-0  bg-gradient-to-t from-purple-400 via-transparent to-transparent"></div>
          </div>
        </div>
        <div className="mx-auto w-64">
          <div className="rounded-3xl overflow-hidden relative">
            <div className="h-[410px] box p-7">
              <img className="w-full" src="/description2.svg" alt="benefit1" />
              <p className="text-sm  text-white text-center font-semibold mt-6">
                Quarter III
              </p>
              <p className="text-sm  text-white text-center font-semibold mt-3">
                Dollar Making Bootcamp - Full-Stack Template and API Product
                Development
              </p>
            </div>
            <div className="absolute left-0 bottom-0  bg-gradient-to-t from-purple-400 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Box;
