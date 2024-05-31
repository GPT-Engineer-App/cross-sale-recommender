import React, { useState } from "react";
import { Container, VStack, Text, Button, HStack, Box, Image } from "@chakra-ui/react";
import { FaSync } from "react-icons/fa";

// Sample dataset
const products = [
  { id: 1, name: "Product A", image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwQXxlbnwwfHx8fDE3MTcxMzIwMDJ8MA&ixlib=rb-4.0.3&q=80&w=1080' },
  { id: 2, name: "Product B", image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwQnxlbnwwfHx8fDE3MTcxMzIwMDN8MA&ixlib=rb-4.0.3&q=80&w=1080' },
  { id: 3, name: "Product C", image: 'https://images.unsplash.com/photo-1528028018421-7787621bd55d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwQ3xlbnwwfHx8fDE3MTcxMzIwMDR8MA&ixlib=rb-4.0.3&q=80&w=1080' },
  { id: 4, name: "Product D", image: 'https://images.unsplash.com/photo-1587837073080-448bc6a2329b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwRHxlbnwwfHx8fDE3MTcxMzIwMDR8MA&ixlib=rb-4.0.3&q=80&w=1080' },
  { id: 5, name: "Product E", image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwRXxlbnwwfHx8fDE3MTcxMzIwMDV8MA&ixlib=rb-4.0.3&q=80&w=1080' },
];

// Simulated recommendation logic
const getRecommendations = (currentProductId) => {
  // For simplicity, recommend the next two products in the list
  const currentIndex = products.findIndex((product) => product.id === currentProductId);
  return products.slice(currentIndex + 1, currentIndex + 3);
};

const Index = () => {
  const [currentProduct, setCurrentProduct] = useState(products[0]);
  const [recommendations, setRecommendations] = useState(getRecommendations(products[0].id));

  const handleNextProduct = () => {
    const nextProductIndex = (products.findIndex((product) => product.id === currentProduct.id) + 1) % products.length;
    const nextProduct = products[nextProductIndex];
    setCurrentProduct(nextProduct);
    setRecommendations(getRecommendations(nextProduct.id));
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Current Product</Text>
        <Box textAlign="center">
          <Image src={currentProduct.image} alt={currentProduct.name} boxSize="150px" objectFit="cover" />
          <Text>{currentProduct.name}</Text>
        </Box>
        <Button leftIcon={<FaSync />} onClick={handleNextProduct}>
          Next Product
        </Button>
        <Text fontSize="2xl">Recommended Products</Text>
        <HStack spacing={4}>
          {recommendations.map((product) => (
            <Box key={product.id} textAlign="center">
              <Image src={product.image} alt={product.name} boxSize="100px" objectFit="cover" />
              <Text>{product.name}</Text>
            </Box>
          ))}
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
