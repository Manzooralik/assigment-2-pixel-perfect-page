export default function Navbar() {
    return (
      <div className="bg-[#252B42]">
        <div className="container w-[1322px] h-[91px] flex justify-between items-center">
          <div className="navbar-brand w-[187px] ml-[136px] top-[17px] h-[58px]">
            <div className="brandName cursor-pointer w-[152px] h-[32px] mt-[10px] text-2xl text-white font-bold">
              <span>BrandName</span>
            </div>
          </div>
          {/* Navbar components */}
          <div className="className= nav-com w-[815px] h-[58px] left-[364px] top-[16px] flex justify-between items-center">
            <div className="Navbar-nav w-[275px] h-[24px] top-[17px] space-x-8 text-white font-bold ">
              <span className="w-[43px] h-[24px] cursor-pointer">Home</span>
              <span className="w-[43px] h-[24px] cursor-pointer">Product</span>
              <span className="w-[43px] h-[24px] cursor-pointer">Pricing</span>
              <span className="w-[43px] h-[24px] cursor-pointer">Contact</span>
            </div>
            {/* login and join button  */}
            <div className="w-[189px] h-[52px] mt-[3px] left-[626px] space-x-6">
              <span className="w-[41px] h-[22px] text-white font-bold">
                Login
              </span>
              <button className="bg-[#23A6F0] text-white font-bold rounded-s-lg left-[25px] px-[25px] py-[15px]">
                Join Us
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }