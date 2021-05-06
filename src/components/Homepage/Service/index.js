import Image from 'next/image'

function Service() {
  return (
    <div className='flex my-16 flex-wrap w-full h-auto justify-evenly text-center md:text-xl text-sm p-4'>
      <BoxService imageSrc="/icons/shipping.png" title="Free Shipping" paragraf="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, accusamus!" />
      <BoxService imageSrc="/icons/refund.png" title="100% Refund" paragraf="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, accusamus!" />
      <BoxService imageSrc="/icons/support.png" title="Support 24/7" paragraf="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, accusamus!" />
    </div>
  )
}

function BoxService({ imageSrc, title, paragraf }) {
  return (
    <div className='w-48 m-4'>
      <div className='md:w-14 w-12 m-auto'>
        <Image src={`${imageSrc}`} width={32} height={32} layout='responsive'></Image>
      </div>
      <span className='block mt-4'>{title}</span>
      <p className='xs:text-xs md:text-sm text-center mt-2'>{paragraf}</p>
    </div>
  )
}

export default Service