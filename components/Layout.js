/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

export default function Main({screen}) {
  return (
    <div className="grotesk w-full mx-auto">
      <section className="w-full text-white bg-emerald-700">
        <div className="max-w-8xl mx-auto inline-block items-center p-3 pt-0 lg:flex lg:flex-wrap pt-4">
          <div className="lg:w-3/6">
            <h2 className="max-w-xl lg:text-[4.2em] text-3xl font-bold leading-none text-white inline-block bg-emerald-700">
              {screen.elements.title.value}
            </h2>
            <p className="mt-6 max-w-2xl text-xl font-semibold text-gray-300">
             {screen.elements.subtitle.value}
            </p>
          </div>
          <div className="mb-20 mt-8 w-full flex-col lg:mt-12 lg:inline-block lg:w-3/6 ">
            <img src={screen.elements.image.value[0].url} alt="Hero" />
          </div>
        </div>
      </section>
    </div>
  );
}
