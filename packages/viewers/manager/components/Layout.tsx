/* eslint-disable react/no-children-prop */
import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./Header";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <Grid templateAreas={`"header" "main" "footer"`} gap="0">
      <GridItem pl="2" area={"header"}>
        <Header />
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        {children}
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
};

export default Layout;
