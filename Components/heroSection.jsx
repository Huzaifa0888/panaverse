

function HeroSection() {
  return (
    <>
      <section className="py-10 bg-[url('/background.jpg')] min-h-[200px] lg:h-[100vh] lg:pb-[100px] bg-auto bg-center bg-no-repeat lg:py-10">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-stretch grid-cols-1  gap-x-16 gap-y-12 xl:gap-x-24">
            <div className="flex items-center justify-start  lg:order-1  ">
              <div>
                <h2 className=" text-3xl font-extrabold leading-tight text-white lg:w-[70%] md:w-[85%] sm:text-4xl lg:text-[64px]   lg:leading-tight">
                  Web 3.0 And Metaverse Development
                </h2>
                <p className="mb-20 text-xl leading-relaxed text-white mt-9 lg:w-[50%]">
                  First two quarters are compulsary for everyone and remaining
                  two are the specialization in different domains
                </p>

                <a href="#" title="" className="btn " role="button ">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection