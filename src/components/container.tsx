import { ReactNode } from "react";
import styled from "styled-components";

interface ContainerProps {
  children: ReactNode;
}
const Wrapper = styled.div`
  width: 100%;
  display: ;
  margin: 0 auto;
  transition: width 0.1s;
  overflow-wrap: break-word;
  @media (min-width: 640px) {
    width: 640px;
  }
  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1024px) {
    width: 1024px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
  }
  @media (min-width: 1536px) {
    width: 1536px;
  }
`;

export default function Container({ children }: ContainerProps) {
  return <Wrapper>{children}</Wrapper>;
}
