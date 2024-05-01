import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignContent={"center"} gap={10}>
          {/* Left hand side */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.jpg" h={280} alt="Image"></Image>
          </Box>

          {/* Right hand side  */}
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
