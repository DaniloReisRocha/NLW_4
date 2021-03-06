import React from "react";
export interface Props {
  style?: React.CSSProperties;
  children?: JSX.Element | string | null;
}

const Button = (props: Props) => {
  const { style, children } = props;
  return <button style={style}>{children}</button>;
};

export default Button;
