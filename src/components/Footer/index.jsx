function Footer() {
  return (
    <footer className='flex flex-col bg-lightblue-200  '>
      <div className='flex py-10 px-4 sm:p-10 flex-wrap sm:flex-nowrap justify-evenly'>
        <Box paragraf='Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa facilis omnis hic tenetur quos impedit aliquid animi reprehenderit suscipit aliquam.'>
          <div className='flex items-center'>
            <div className='bg-logo w-8 h-8 bg-cover mr-4'></div>
            <span className='font-semibold sm:text-xl text-md'>E-Comm</span>
          </div>
        </Box>
        <Box
          title="Follow Us"
          paragraf="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa facilis omnis hic tenetur quos impedit aliquid animi reprehenderit suscipit aliquam." />
        <Box
          title="Contact US"
          paragraf="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa facilis omnis hic tenetur quos impedit aliquid animi reprehenderit suscipit aliquam." />
      </div>
      <div className='w-4/5 h-0.5 bg-gray-100 mb-4 m-auto'></div>
      <div className='mb-12 text-sm text-center'>
        <span>&copy; 2021 - Nazir Bahrul Ulum</span>
      </div>
    </footer >
  )
}

function Box({ children, title, paragraf }) {
  return (
    <div className='w-full sm:w-56 m-4 sm:m-6'>
      {children}
      <span className='font-semibold text-md sm:text-lg xs:text-md'>{title}</span>
      <p className='text-sm mt-2 xs:text-xs '>{paragraf}</p>
    </div>
  )
}

export default Footer