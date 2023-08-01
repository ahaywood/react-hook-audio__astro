import React, { useState } from "react";
import { motion } from "framer-motion";

const PlusClose = () => {
  return (
    <svg
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.98633 9.99996L3.49319 6.50681L5.69936 4.30064L9.19251 7.79378L12.6855 4.30076L14.8917 6.50693L11.3987 9.99996L14.8917 13.493L12.6856 15.6992L9.19251 12.2061L5.69932 15.6993L3.49314 13.4931L6.98633 9.99996Z"
        />
      </g>
    </svg>
  );
};

interface FaqProps {
  question: string;
  children: JSX.Element;
}

const Faq = ({ question, children }: FaqProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const plusCloseVariants = {
    plus: { rotate: 45 },
    close: { rotate: 0 },
  };

  const answerVariants = {
    open: { height: "auto", opacity: 1 },
    close: { height: 0, opacity: 0 },
  };

  const handleClick = (event: React.MouseEvent): void => {
    event.preventDefault();
    setIsOpen((prevValue) => !prevValue);
  };

  return (
    <div className="mb-6 border-b-[1px] border-balticSea pb-6">
      <div className="font-contrail text-2xl leading-[42px] relative">
        <a
          href="#"
          onClick={(e) => handleClick(e)}
          className="text-turquoise no-underline flex items-center gap-x-4 relative -left-10 hover:text-daffodil"
        >
          <motion.div
            className="plus-close"
            variants={plusCloseVariants}
            animate={isOpen ? "close" : "plus"}
          >
            <PlusClose />
          </motion.div>
          {question}
        </a>
      </div>
      <motion.div
        className="font-barlow leading-7 text-white"
        variants={answerVariants}
        animate={isOpen ? "open" : "close"}
      >
        {children}
      </motion.div>
    </div>
  );
};

export { Faq };
