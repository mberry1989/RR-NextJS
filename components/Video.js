export default function Video({video}) {
    return (
        <div className="text-black bg-gray-200 mb-2 p-4">
        <div
          className="
          max-w-9xl
          mx-auto
          flex
          flex-col
          items-center
          justify-center
          px-5
        "
        >
          <div className="mr-0 mb-6 w-full lg:w-2/3">
            {video.elements.title.value && <h4 className="text-2xl font-bold sm:text-2xl">
              {video.elements.title.value}
            </h4>}
          </div>
          <div className="w-5/6">
          <span className=" text-xs bg-emerald-500 rounded-full font-semibold absolute lg:relative lg:mt-14 lg:ml-24 p-2 m-2">
              For {video.elements.persona.value[0].name}
          </span>
          </div>
          <iframe
            className="
            lg:w-5/7
            lg:h-80
            h-48
            lg:mb-8
            w-5/6
            rounded object-cover
            object-center
            lg:inline-block 
            lg:w-4/6
          " src={video.elements.videoLink.value} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen>
        </iframe>
      </div>
      </div>
    )
}