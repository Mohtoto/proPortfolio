import { ReactNode } from "react";


interface Props {
    children: ReactNode; // Update type to ReactNode
  }

export const H1 = (props: Props) => {
  return (
    <h1 className="h1 text-center">
        {props.children}
    </h1>
  )
}

