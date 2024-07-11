export default function Product({product}) {
    return (
        <div className="px-5 py-2">
        <div className="lg:text-center w-full lg:w-3/6 text-center items-center m-auto">
       
        <h3 className="text-2xl text-emerald-500 ">
          {product.elements.title.value}
        </h3>
        <h4 className="text-lg text-gray-600" dangerouslySetInnerHTML={{__html:product.elements.description.value}} >
        </h4>
   
        <div className="mb-20 mt-8 w-full flex-col lg:inline-block lg:w-1/6 ">
        <img src={product.elements.image.value[0].url} alt="ECM product">
        </img>
        <span className=" text-xs bg-emerald-500 rounded-full font-semibold p-2">
              {product.elements.productType.value[0].name}
          </span>
        </div>
      </div>
      </div>
    )
}