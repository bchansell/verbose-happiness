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
  );
};

export default Header;
