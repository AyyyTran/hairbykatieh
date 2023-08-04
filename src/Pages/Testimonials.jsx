import React from 'react';
import Title from '../Components/Title';
import CardSection from '../Components/CardSection';
import CardData1, {CardData2, CardData3} from '../Data/CardData';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <Title title={CardData1.title} />
      <div className="flex flex-col justify-center items-center py-8 lg:flex-row ">
        <CardSection
          quote={CardData1.quote}
          imageURL={CardData1.imageURL}
          imageDesc={CardData1.imageDesc}
          name={CardData1.name}
        />
        <CardSection
          quote={CardData2.quote}
          imageURL={CardData2.imageURL}
          imageDesc={CardData2.imageDesc}
          name={CardData2.name}
        />
        <CardSection
          quote={CardData3.quote}
          imageURL={CardData3.imageURL}
          imageDesc={CardData3.imageDesc}
          name={CardData3.name}
        />
      </div>
    </div>
  );
};

export default Testimonials;
