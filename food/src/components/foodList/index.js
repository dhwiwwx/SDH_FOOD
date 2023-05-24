import {
  Card,
  CardBody,
  CardHeader,
  Center,
  ChakraProvider,
  Heading,
  Text,
} from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function FoodList() {
  return (
    <Center h={"100vh"} justifyContent={"center"}>
      <Card
        size={"md"}
        w={"md"}
        textAlign={"center"}
        border={"1px solid #E2E8F0"}
      >
        <CardHeader>
          <Heading>오늘의 급식</Heading>
        </CardHeader>
        <CardBody>
          <Text>현미밥, 옹심이구물</Text>
        </CardBody>
      </Card>
    </Center>
  );
}

export default FoodList;
