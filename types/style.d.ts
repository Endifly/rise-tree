import { CSSProperties, ReactNode } from "react";

export interface BaseChildren {
  children: JSX.Element | ReactNode;
}

export interface BaseStyle {
  className?: string;
  style?: CSSProperties;
}

export interface BaseLink {
  href?: string;
  target?: HTMLAttributeAnchorTarget;
}
