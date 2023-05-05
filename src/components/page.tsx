import { ReactNode } from "react";
import Container from "./container";

interface PageProps {
  children: ReactNode;
  title: string;
}

export default function Page({ children, title }: PageProps) {
  return (
    <main>
      <Container>{children}</Container>
    </main>
  );
}
