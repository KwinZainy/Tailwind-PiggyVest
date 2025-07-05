import React from 'react'

const PagesSection = ({head,paragraph,image}) => {
  return (
    <div>
          <section>
            <main>
                <h1>{head}</h1>
                <p>{paragraph}</p>
            </main>
            <main>
                <img src={image} alt="" />
            </main>
        </section>
    </div>
  )
}

export default PagesSection