import { Container, Typography } from "@mui/material";
import type { ChildrenNode } from "../types/ChildrenNode";
import type { ChildrenString } from "../types/ChildrenString";

function PageContainer({ children }: ChildrenNode) {
  return (
    <Container maxWidth="xl" sx={{ py: 10 }}>
      {children}
    </Container>
  );
}

function Title({ children }: ChildrenString) {
  return <Typography variant="h3">{children}</Typography>;
}

function Subtitle({ children }: ChildrenString) {
  return <Typography>{children}</Typography>;
}

PageContainer.Title = Title;
PageContainer.Subtitle = Subtitle;

export { PageContainer };
