const Contacts = () => {
  return (
    <div
      id="contact"
      className="min-h-screen bg-[#09101a] py-4 pt-[1rem] md:pt-[4rem] pb-[4rem] flex flex-col justify-center sm:py-12"
    >
      <h1 className="heading pb-[5rem] md:pb-3">
        Contact<span className="text-yellow-400"> Me</span>
      </h1>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="relative py-4  sm:max-w-4xl sm:mx-auto  w-full px-4 md:px-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl w-full"></div>
        <div className="relative px-6 py-8 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-16 flex flex-col md:flex-row md:items-start w-full">
          <div className="md:w-1/2 text-white md:pr-10">
            <h3 className="text-3xl font-semibold mb-4 ">
              I`m available for full-time opportunities
            </h3>
            <p>
              Feel free to directly contact me via
              <a className="hover:text-yellow-400 transition-colors" href="#">
                <u> Email</u>
              </a>{" "}
              or
              <a className="hover:text-yellow-400 transition-colors" href="#">
                <u> LinkedIn</u>
              </a>
              .
            </p>
          </div>
          <div className="md:w-1/2 w-full mt-8 md:mt-0">
            <form className="flex flex-col gap-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name"
                name="name"
              />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
                name="email"
              />
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                placeholder="Type your message here..."
                name="message"
              />
              <div className="flex justify-between">
                <input
                  className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="reset"
                  value="Reset"
                />
                <input
                  className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  value="Send ➤"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    // <div className="bg-[#09101a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
    //   <h1 className="heading">
    //     Contact<span className="text-yellow-400"> Me</span>
    //   </h1>

    // </div>
  );
};

export default Contacts;
