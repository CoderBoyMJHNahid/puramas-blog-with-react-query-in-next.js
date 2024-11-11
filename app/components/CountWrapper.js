import React from 'react'

const CountWrapper = () => {
  return (
    <section id="count_wrapper" className='mt-3 animate__animated animate__fadeInUp'>
      <div className="container m-auto">
        <div className="grid py-14 text-white text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className='text-5xl font-bold mb-2'>4,593,000</h2>
            <p className='uppercase mb-0'>Clicks en Blog</p>
          </div>
          <div>
            <h2 className='text-5xl font-bold mb-2'>928,000</h2>
            <p className='uppercase mb-0'>Consumidores Felices</p>
          </div>
          <div>
            <h2 className='text-5xl font-bold mb-2'>1,120</h2>
            <p className='uppercase mb-0'>Tiendas</p>
          </div>
          <div>
            <h2 className='text-5xl font-bold mb-2'>623,000</h2>
            <p className='uppercase mb-0'>Followers</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CountWrapper
