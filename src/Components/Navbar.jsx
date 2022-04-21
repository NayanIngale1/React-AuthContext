import { Flex, Button, Center,Heading, Spacer, Box } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export const Navbar = () => {
  const { isAuth, toggleAuth, setIsLogin } = useContext(AuthContext);

  const handleLogout = () => {
    toggleAuth();
    setIsLogin(false);
  };

  return (
    <Flex
      bg="#f3f3f3"
      m={3}
      border="1px"
      boxShadow="base"
      borderColor="gray.300"
    >
      <Box p="2">
        <Heading m={2}>User Login</Heading>
      </Box>
      <Spacer />
      <Center mr="20px">
        <Button colorScheme="blue" onClick={isAuth ? handleLogout : null}>
          {isAuth ? "Logout" : "Login"}
        </Button>
      </Center>
    </Flex>
  );
};
