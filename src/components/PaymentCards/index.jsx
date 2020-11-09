import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";

export default function PaymentCards({ card = [] }) {
  return (
    <div className="payment-options">
      {card.map(({ icon, id, size, iteam }) => (
        <FontAwesomeIcon
          key={id}
          icon={icon}
          size={size}
          className={`card ${title}`}
        />
      ))}
    </div>
  );
}
