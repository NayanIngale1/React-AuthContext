import {
  Flex,
  Button,
  Heading,
  Input,
  Spacer,
    VStack,
    Box,
  Center,
  useToast,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
export const Form = () => {
  const { toggleAuth, isLogin, setIsLogin } = useContext(AuthContext);

  const [user, setUser] = useState({ email: "", password: "" });

  const alert = useToast();

  const [token, setToken] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        if (data.token) {
          setToken(data.token);
          toggleAuth();
          setIsLogin(true);
          alert({
            title: "Login Successfull.",
            description: "Welcome to Dashboard...",
            status: "success",
            position: "bottom-right",
            duration: 5000,
            isClosable: true,
          });
        } else if (data.error) {
          alert({
            title: "Email or Password is wrong...",
            description: `${data.error}`,
            status: "error",
            position: "bottom-right",
            duration: 5000,
            isClosable: true,
          });
        }
      });
  };

  return isLogin ? (
    <Box
      bg="primary"
      maxW={400}
      p="40px 20px"
      m="100px auto"
      rounded={5}
      border={"1px solid lightblue"}
      boxShadow="outline"
    >
      <Heading isTruncated>Login Successfull</Heading>
      <Heading isTruncated>Token : {token}</Heading>
    </Box>
  ) : (
    <form onSubmit={handleSubmit}>
      <VStack
        gap={3}
        maxW={400}
        p="40px 20px"
        m="100px auto"
        rounded={5}
        border={"1px solid lightblue"}
        boxShadow="outline"
      >
        <Heading>Login</Heading>
        <Input
          type="text"
          name="email"
          placeholder="Enter email..."
          onChange={handleChange}
        />
        <Input
          type="text"
          name="password"
          placeholder="Enter password..."
          onChange={handleChange}
        />
        <Button type="submit" colorScheme="blue" w="100%">
          Login
        </Button>
      </VStack>
    </form>
  );
};
