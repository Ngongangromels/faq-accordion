import React, { useState } from "react";
import { FaqItem } from "../type";
import "./FaqAccordion.css";
import iconPlus from "../assets/images/iconPlus.svg";
import iconMinus from "../assets/images/iconMinus.svg";

export const Accordion: React.FC<{ items: FaqItem[] }> = ({ items = [] }) => {
  const [activeId, setActiveId] = useState<number | undefined>();
  const handleClick = (id: number) => {
    if (id === activeId) {
      // if the accordion is open, close it
      setActiveId(undefined);
    } else {
      setActiveId(id);
    }
  };
  return (
    <div className="faqAccordion">
      {items.map((faq, id) => (
        <AccordionItem
          faq={faq}
          key={id}
          activeId={activeId}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

interface AccordionItemProps {
  faq: FaqItem;
  onClick: (id: number) => void;
  activeId?: number;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  faq,
  activeId,
  onClick,
}) => {
  const open = activeId === faq.id;
  return (
    <div className="blocAccordion">
      <hr />
      {/* question */}
      <p onClick={() => onClick(faq.id)} className="faqQuestion">
        <span className="question">{faq.question}</span>
        {open ? (
          <img className="iconPlus-minus" src={iconMinus} alt="icon-plus" />
        ) : (
          <img className="iconPlus-minus" src={iconPlus} alt="Icon-minus" />
        )}
      </p>
      {/* answer */}
      {open && <p className="answer">{faq.answer} </p>}
    </div>
  );
};
