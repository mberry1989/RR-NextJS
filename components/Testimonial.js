export default function Testimonial({testimonial}) {
    return (
        <div className="text-black">
            <div className="w-fullmx-auto flex flex-col px-5 py-2 text-black lg:flex-row bg-gray-200 mt-2" >
              <div className="items-center flex flex-col pt-8 text-left lg:w-1/2 lg:flex-grow lg:items-start lg:pl-32 lg:pl-48 lg:text-left">
                <h2 className="mb-4 text-3xl font-bold sm:text-3xl" dangerouslySetInnerHTML={{__html: testimonial.elements.quote.value}}>
                </h2>
                <div className="lg:mb-0 lg:w-full lg:max-w-xl">
                <img
                  className="w-24 h-24 rounded-full"
                  alt="image"
                  src={testimonial.elements.person.linkedItems[0].elements.image.value[0].url}
                />
              </div>
                <div className="text-lg font-bold sm:text-lg">
                  {testimonial.elements.person.linkedItems[0].elements.firstName.value}&nbsp;{testimonial.elements.person.linkedItems[0].elements.lastName.value},&nbsp;
                  <span
                  href="/"
                  className="underline-blue text-lg font-bold leading-relaxed"
                >
                  {testimonial.elements.person.linkedItems[0].elements.jobTitle.value}
                </span>
                </div>
              </div>
            </div>
          </div>
    )
}