import React from 'react';
import ContactSection from '../Components/ContactSection';
import InfoSection from '../Components/InfoSection';
import ContactData, {ContactInfoData} from '../Data/ContactData';
import Title from '../Components/Title';

const Contact = () => {
  return (
    <div className="contact my-64" id="contact">
      <Title title={ContactInfoData.title} />
      <div className="flex flex-col justify-center items-center mb-8 lg:flex-row">
        <InfoSection
          subheading={ContactInfoData.subheading}
          heading={ContactInfoData.heading}
          description={ContactInfoData.description}
          icons={ContactInfoData.icons}
        />
        <ContactSection
          instagram={ContactData.instagram}
          email={ContactData.email}
          phone={ContactData.phone}
        />
      </div>
    </div>
  );
};

export default Contact;
