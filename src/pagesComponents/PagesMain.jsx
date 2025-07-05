import React from 'react'

const PagesMain = ({head,head1,paragraph, paragraph1,text,image}) => {
  return (
    <div>
        <section>
            <h1>{head}</h1>
            <main>
                <nav>
                    <img src={image} alt="" />
                </nav>
                <nav>
                    <h1>{head1}</h1>
                    <div>
                        <p>{paragraph}</p>
                        <p>{text}</p>
                    </div>
                    <p>{paragraph1}</p>
                </nav>
            </main>
        </section>
    </div>
  )
}

export default PagesMain