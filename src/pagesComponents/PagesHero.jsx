import React from 'react';

const PagesHero = ({
  head,
  paragraph,
  head1,
  paragraph1,
  image,
  head2,
  paragraph2,
  image1,
  head3,
  paragraph3,
  image2,
}) => {
  return (
    <div className="min-h-screen  flex flex-col justify-center items-center px-4 py-10">
      
      <section className="text-center text-black mb-12 flex flex-col">
        <h1 className="text-5xl font-bold ">{head}</h1>
        <p className="text-[20px]  max-w-xl mx-auto">{paragraph}</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[100%] ">
        <div className="bg-white px-10 pt-16 rounded-[20px] shadow-lg text-start w-[45%]">
          <h2 className="text-[38px]  text-[#7913E5] font-semibold mb-2">{head1}</h2>
          <p className="text-gray-700 text-[18px] mb-4">{paragraph1}</p>
          <img src={image} alt={head1} className="w-[1000px]  h-auto rounded" />
        </div>

        <div className="bg-white px-10 pt-16 rounded-[20px] shadow-lg text-start">
          <h2 className="text-[38px] text-[#7913E5]   font-semibold pb-3 mb-2">{head2}</h2>
          <p className="text-gray-700 pb-6 mb-4">{paragraph2}</p>
          <img src={image1} alt={head2} className=" w-[1000px]  h-auto rounded" />
        </div>

        <div className="bg-white px-10 pt-16 rounded-[20px] shadow-lg text-start ">
          <h2 className="text-[38px] text-[#7913E5] font-semibold pb-3 mb-2">{head3}</h2>
          <p className="text-gray-700 mb-4 pb-3">{paragraph3}</p>
          <img src={image2} alt={head3} className="w-[1000px] h-auto rounded" />
        </div>
      </section>
    </div>
  );
};

export default PagesHero;
