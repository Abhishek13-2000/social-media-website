import React from "react";
import useLogout from "../../hooks/useLogout";
import { Flex, Text, Avatar, Button } from "@chakra-ui/react";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";

const SuggestedHeader = () => {
  const {handleLogout, isLoggingOut} = useLogout()
  const authUser = useAuthStore(state => state.user)

  if(!authUser) return null;
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={5}>
        <Link to={`${authUser.username}`}>
        <Avatar  size={"lg"} src={authUser.profilePicURL} />
        </Link>
        <Link to={`${authUser.username}`}>
        <Text fontSize={12} fontWeight={"bold"}>
          {authUser.username}
        </Text>
        </Link>
        <Button
          size={"xs"}
          background={"transparent"}
          _hover={{ background: "transparent" }}
          fontSize={14}
          fontWeight={"medium"}
          color={"blue.400"}
          onClick={handleLogout}
          isLoading={isLoggingOut}
          cursor={"pointer"}
        >
          Log out
        </Button>
      </Flex>
    </Flex>
  );
};

export default SuggestedHeader;
