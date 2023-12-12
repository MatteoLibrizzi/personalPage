import { ReactNode } from "react";
import "./styles.css";

export interface InfoItemProps {
  children: ReactNode;
  textElement: ReactNode;
}

export const InfoItem = ({ children, textElement }: InfoItemProps) => {
  return (
    <div className="info-item">
		<div className="text-item">{textElement}</div>
		<div className="children-item">{children}</div>
    </div>
  );
};
