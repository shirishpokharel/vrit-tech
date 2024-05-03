"use client";
import { cn } from "@/utils";
import React, { useState } from "react";

function Faqs() {
  const [activeQn, setactiveQn] = useState(0);

  const faqData = [
    {
      index: 1,
      question: "My flowers are falling off or dying?",
      answer: `Plants are easy way to add color energy and transform your space
      but which planet is for you. Choosing the right plant.`,
    },
    {
      index: 2,
      question: "What causes leaves to become pale?",
      answer:
        " Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.",
    },
    {
      index: 3,
      question: "What causes brown crispy leaves?",
      answer:
        "Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.",
    },
    {
      index: 4,
      question: "How do i choose a plant?",
      answer:
        " Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.",
    },
    {
      index: 5,
      question: "How do I change the pots?",
      answer:
        "Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.",
    },
    {
      index: 6,
      question: "Why are gnats flying around my plant?",
      answer:
        "Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.",
    },
  ];

  return (
    <section className="questions section" id="faqs">
      <h2 className="section__title-center questions__title container">
        Some common questions <br /> were often asked
      </h2>

      <div className="questions__container container grid">
        {/* <div className="questions__group"> */}
        {faqData?.length > 0
          ? faqData?.map((faq, index) => {
              return (
                <div
                  className={cn(
                    "questions__item",
                    faq?.index === activeQn && " accordion-open "
                  )}
                  key={index}
                  onClick={() => {
                    setactiveQn((prev) => {
                      return prev === faq?.index ? null : faq?.index;
                    });
                  }}
                >
                  <header className={"questions__header"}>
                    <i className="ri-add-line questions__icon"></i>
                    <h3 className="questions__item-title">
                      My flowers are falling off or dying?
                    </h3>
                  </header>

                  <div
                    className={cn(
                      "questions__content",
                      faq?.index === activeQn && "accordion-open h-96"
                    )}
                  >
                    <p className="questions__description">
                      Plants are easy way to add color energy and transform your
                      space but which planet is for you. Choosing the right
                      plant.
                    </p>
                  </div>
                </div>
              );
            })
          : null}
        {/* </div> */}
      </div>
    </section>
  );
}

export default Faqs;
