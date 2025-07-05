import React from 'react'

const PagesHero = ({head,head1,head2,head3, paragraph,paragraph1,paragraph2,paragraph3, image,image1,image2}) => {
  return (
    <div className=' bg-pink-600'>
        <section className=' flex flex-col  w-screen  bg-red-600' >
            <main className=' bg-amber-400 w-[100%] text-center'>
                <h1>{head}</h1>
                <p>{paragraph}</p>
            </main>
            <main>
                <nav    className=' bg-green-700'>
                    <h1>{head1}</h1>
                    <p>{paragraph1}</p>
                    <img src={image} alt="" />
                </nav>
                <nav>
                    <h1>{head2}</h1>
                    <p>{paragraph2}</p>
                    <img src={image1} alt="" />
                </nav>
                <nav>
                    <h1>{head3}</h1>
                    <p>{paragraph3}</p>
                    <img src={image2} alt="" />
                </nav>
            </main>

        </section>
    </div>
  )
}

export default PagesHero