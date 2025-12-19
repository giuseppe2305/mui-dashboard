import { Container } from "@mui/material";
import type { ChildrenNode } from "../types/ChildrenNode";

function PageContainer({ children }: ChildrenNode) {
  return (
    <Container maxWidth="xl" sx={{ py: 10 }}>
      {children}
    </Container>
  );
}

export { PageContainer };
