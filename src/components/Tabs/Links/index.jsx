function Links({ setCategory }) {
  const handleClickTabsCategory = (tab) => {
    const category = tab.target.dataset.category
    setCategory(category)
  }

  return (
    <div className='w-full'>
      <ul className='flex justify-center xs:text-sm'>
        <li className='m-2 cursor-pointer text-lightblue-500' onClick={handleClickTabsCategory} data-category='all'>
          All
        </li>
        <li className='m-2 cursor-pointer' onClick={handleClickTabsCategory} data-category='bags'>
          Bags
        </li>
        <li className='m-2 cursor-pointer' onClick={handleClickTabsCategory} data-category='sneakers'>
          Sneakers
        </li>
        <li className='m-2 cursor-pointer' onClick={handleClickTabsCategory} data-category='belt'>
          Belt
        </li>
        <li className='m-2 cursor-pointer' onClick={handleClickTabsCategory} data-category='sunglasses'>
          Sunglasses
        </li>
      </ul>
    </div>
  )
}

export default Links