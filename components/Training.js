export default function Training({training}) {

    const startDate = new Date(training.elements.startDate.value).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
    const start = startDate + ' ' + new Date(training.elements.startDate.value).toLocaleTimeString()
    const endTime = new Date(training.elements.endDate.value).toLocaleTimeString()

    return (
        <div className="py-2 text-white">
          <a href="/">
        <div className="max-w-9xl mx-auto flex flex-col items-center bg-emerald-700 px-5 py-8 lg:flex-row hover:bg-gray-700">
          <div className="flex flex-col items-center pb-16 pl-0 text-left lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pl-12 lg:pr-24 lg:text-left">
          <div className="text-lg font-bold sm:text-lg py-2 w-full text-gray-300">
           {start}
          </div>
            <h2 className="pb-4 text-2xl font-bold leading-tight lg:text-4xl w-full">
              {training.elements.title.value}
            </h2>
            <div className="underline-blue text-md font-bold leading-relaxed w-full">
           {training.elements.eventType.value[0].name}
          </div>
          </div>
          <div className="text-lg font-bold sm:text-lg">
           {training.elements.location.linkedItems > 1 && training.elements.location.linkedItems[0].elements.name.value}
          <div className="text-sm font-bold sm:text-lg py-2">
           Ends at {endTime}
          </div>
          </div>
        </div>
        </a>
      </div>
    )
}