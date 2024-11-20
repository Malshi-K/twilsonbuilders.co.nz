import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const GuaranteeCard = ({ content }) => {
  return (
    <Card className="overflow-hidden shadow-lg">
      {/* Image Section */}
      <div className="w-full h-64 relative">
        <Image
          src={content.imageUrl}
          alt={content.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content Section */}
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-orange-500">
          {content.title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-gray-700 leading-relaxed">{content.description}</p>
      </CardContent>
    </Card>
  );
};

const GuaranteeSection = () => {
  const cardsData = [
    {
      imageUrl: "/assets/images/guarantee/1.jpg",
      title: "Quality Assurance",
      description: {
        type: "paragraph",
        content:
          "We go above and beyond the minimum required standards to give you a top-quality job. We offer a 10-year Halo Residential Guarantee and for your added security carry out our own quality assurance checks. This ensures that all our workmanship (including our sub-contractors) meets our high standards throughout the entirety of your job.",
      },
    },
    {
      imageUrl: "/assets/images/guarantee/2.jpg",
      title: "Communication",
      description: {
        type: "paragraph",
        content:
          "The number of tradespeople and professionals involved in a building project can be a bit daunting. At T. Wilson Builders, Tyler and his team have a strong people-focused culture and strive always to coordinate your project with clarity, thereby reducing the potential for chaos.",
      },
    },
    {
      imageUrl: "/assets/images/guarantee/3.jpg",
      title: "Our Team Culture",
      description: {
        type: "mixed",
        paragraphs: [
          "A small, professional team will work with you throughout your project who will know exactly what's happening and where the project is at. We employ only the best tradesmen and sub-contractors, and you'll get to know them well.",
          "Some of the strict standards we adhere to and which you can expect include:",
        ],
        bullets: [
          "Exceeding client expectations with outstanding service and results",
          "Working with integrity – we take pride in our work",
          "Respecting our client's home, privacy and opinions",
          "Accountability",
        ],
        footer: "Our goal is to be leaders in our industry.",
      },
    },
    {
      imageUrl: "/assets/images/guarantee/4.jpg",
      title: "Reputation & Referrals",
      description: {
        type: "paragraph",
        content:
          "At T. Wilson Builders we pride ourselves on being one of Waikato's most recommended building companies. Actions speak louder than words: most of our contracts come to us via word of mouth. Our mission is to ensure you have a great building experience with us.",
      },
    },
    {
      imageUrl: "/assets/images/guarantee/5.jpg",
      title: "Accurate Pricing",
      description: {
        type: "paragraphs",
        content: [
          "We have all heard a horror story about someone spending thousands of dollars on a design only to find out too late that it wasn't what they wanted and that it had gone way over budget. Rest assured that this will not be part of your experience with T. Wilson Builders. We offer a one-hour complimentary consultation right at the beginning of your home improvement journey. We will listen carefully to your list of must-haves as well as your nice-to-haves to ensure your budget aligns with your scope of work. By setting these parameters with you upfront, we'll be able to customise a plan to achieve what you want and what that is likely to cost.",
          "Once your plans are confirmed, we will cost your job and provide details of exactly what is included. We will communicate with you to ensure we understand your requirements and use our pricing checklist and custom-built software to make sure nothing is missed and there are no nasty surprises.",
        ],
      },
    },
  ];

  const renderDescription = (description) => {
    switch (description.type) {
      case "paragraph":
        return (
          <p className="text-gray-700 leading-relaxed text-center">
            {description.content}
          </p>
        );

      case "paragraphs":
        return description.content.map((paragraph, idx) => (
          <p
            key={idx}
            className="text-gray-700 leading-relaxed mb-4 text-center"
          >
            {paragraph}
          </p>
        ));

      case "mixed":
        return (
          <div className="text-gray-700 leading-relaxed">
            {description.paragraphs.map((para, idx) => (
              <p key={idx} className="mb-4 text-center">
                {para}
              </p>
            ))}
            <ul className="list-disc pl-5 mb-4 space-y-2">
              {description.bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
            {description.footer && <p className="mt-4">{description.footer}</p>}
          </div>
        );

      default:
        return <p className="text-gray-700 leading-relaxed">{description}</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-64 relative">
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              <CardHeader>
                <CardTitle className="text-2xl font-bold text-orange-500 text-center">
                  {card.title}
                </CardTitle>
              </CardHeader>

              <CardContent>{renderDescription(card.description)}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuaranteeSection;