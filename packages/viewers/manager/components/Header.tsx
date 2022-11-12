import { SearchIcon } from "@chakra-ui/icons";
import {
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import Image from "next/image";

const Header = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={5}>
      <GridItem w="100%" bg="blue.500">
        <span>
          <Image
            src="/logo-no-background.svg"
            alt="Underscore"
            width={125}
            height={125}
          />
        </span>
      </GridItem>
      <GridItem w="100%" bg="blue.500">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon />
          </InputLeftElement>
          <Input type="text" placeholder="search..." />
        </InputGroup>
      </GridItem>
      <GridItem w="100%" bg="blue.500" />
    </Grid>

    // <Grid templateAreas={`"logo" "search" "nav"`}>
    //   <GridItem pl="2" bg={"green.100"} area={"logo"}>
    //     <span>
    //       <Image
    //         src="/logo-no-background.svg"
    //         alt="Underscore"
    //         width={125}
    //         height={125}
    //       />
    //     </span>
    //   </GridItem>
    //   <GridItem pl="2" bg={"green.300"} area={"search"}>

    //   </GridItem>
    //   <GridItem pl="2" bg={"green.500"} area={"nav"}>
    //     <InputGroup>
    //       <InputLeftElement pointerEvents="none">
    //         <SearchIcon />
    //       </InputLeftElement>
    //       <Input type="text" placeholder="search..." />
    //     </InputGroup>
    //   </GridItem>
    // </Grid>
  );
};

export default Header;
