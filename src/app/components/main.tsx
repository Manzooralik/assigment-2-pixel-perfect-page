export default function Main() {
    return (
      <div>
        <div className="main bg-[#252B42] w-[1046px] h-[600px] top-[104px] left-[197px] py-[80px] gap-80 flex flex-col text-center items-center">
          <div className="main-content w-[699px] h-[496px] py-[40px] gap-40 font-[700] ml-[440px] items-center">
            <h5 className="text-[#35A6F0] w-[77px] h-[24px] text-[16px] ml-[210px] text-center">
              Welcome
            </h5>
            {/* main heading */}
            <h1 className="text-white font-bold w-[542px] h-[160px] text-[58px] mt-7 leading-[80px] flex items-center ">
              Selling on the <br />
              internet like a pro
            </h1>
            {/* subheading */}
            <h4 className="text-white font-normal flex text-center ml-[60px] mt-5 w-[536px] h-[60px]">
              We know how large objects will act, but things on a <br />
              small scale just do not act that way.
            </h4>
            {/* both buttons */}
            <div className="w-[365px] h-[52px] flex space-x-4 mt-[40px] ml-[85px]  ">
              <button className="bg-[#35A6F0] text-white font-[700px] w-[193px] h-[52px] px-6 py-2 rounded">
                <span>Get Quote Now</span>
              </button>
              <button className="border border-[#35A6F0] text-[#35A6F0] w-[162px] h-[52px] rounded ">
                <span className="w-[82px] h-[22px] ">Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }