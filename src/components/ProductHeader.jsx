

function ProductHeader({productName}) {
  return (
    <div className='bg-[#191919] text-center'>
        <h1 className='text-whitePrimary uppercase font-semibold text-xl md:text-2xl tracking-widest py-16'>{productName}</h1>
    </div>
  )
}

export default ProductHeader