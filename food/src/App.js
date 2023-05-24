import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import FoodList from "./components/foodList";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <FoodList></FoodList>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
