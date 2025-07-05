import React from 'react'

const PagesHero = ({head,head1,head2,head3, paragraph,paragraph1,paragraph2,paragraph3, image,image1,image2}) => {
  return (
    <div>
        <section>
            <main>
                <h1>{head}</h1>
                <p>{paragraph}</p>
            </main>
            <main>
                <nav>
                    <h1>{head1}</h1>
                    <p>{paragraph1}</p>
                    <img src={image1} alt="" />
                </nav>
                <nav>
                    <h1>{head2}</h1>
                    <p>{paragraph2}</p>
                    <img src={image2} alt="" />
                </nav>
                <nav>
                    <h1>{head3}</h1>
                    <p>{paragraph3}</p>
                    <img src={image} alt="" />
                </nav>
            </main>

        </section>
    </div>
  )
}

export default PagesHero