/* eslint-disable @next/next/no-html-link-for-pages */

export default function Header() {
  return (
    <>
      <div className="grotesk mt-6 mb-2 flex items-center justify-between py-4 px-4 sm:mx-0 sm:mb-20 sm:px-0 md:px-6">
        <div className=" inline-block pb-4 pl-8">
          <a href="/" className="align-middle text-3xl font-bold text-black">
            <img src="https://assets-us-01.kc-usercontent.com/0556adc4-3835-004e-57f9-6c9bfaa316d6/aeba8970-91f2-4bf9-b93f-d255ba7f969b/evergreen-logo.jpg%20%283829%C3%97833%29.png" 
            alt="evergreen logo" className="w-10 float-left"/><span className="text-emerald-700">EVERGREEN</span>
          </a>
          <div className="hidden pl-14 align-middle xl:inline-block">
            <a href="/" className="pr-12 text-xl text-black">
              Cras.
            </a>
            <a href="/" className="pr-12 text-xl text-black">
              Cras.
            </a>
            <a href="/" className="pr-12 text-xl text-black">
              Fringilla.
            </a>
            <a href="/" className="text-xl text-black">
              Enim.
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <div className="hidden py-1 text-right xl:inline-block">
            <a
              className="mt-2 inline-flex items-center px-12 py-3 text-lg font-semibold tracking-tighter text-black"
              href="/"
            >
              Log in
            </a>
            <a
              className="bg-blue mt-2 inline-flex items-center px-8 py-3 text-lg font-semibold tracking-tighter text-white"
              href="/"
            >
              Request a demo
            </a>
          </div>
          <button className="pr-12 pl-4">
            <svg
              className="mr-auto inline-block text-black xl:hidden"
              width="33"
              height="50"
              viewBox="0 0 23 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.892578 10.8691H22.1058"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M0.892578 18.8691H22.1058"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M22.1066 14.8688H0.893399"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
