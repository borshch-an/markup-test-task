/// <reference types="vite/client" />

import {
    Box,
    Container,
    Flex,
    Button,
    Grid,
    VStack,
    Image,
} from "@chakra-ui/react";
import { useState } from "react";
import tokens from "./chakraConfig/tokens";
import ListItem from "./components/ListItem";
import CompactItem from "./components/CompactItem";
import { Header } from "./components/Header";
import { Toogler } from "./components/Toggler";

const itemCards = Array.from({ length: 9 }, (_, index) => ({
    title: `Today ${index + 1}`,
    date: "9-08-2016",
    action: "Image upload",
    actionDate: "11-04-2016",
    likes: 128 + index,
    comments: 31 + index,
    thumbnailColor: index % 3 === 0 ? "teal.300" : index % 3 === 1 ? "gray.300" : "blue.200",
}));

const MarkupTest = () => {
    const [viewMode, setViewMode] = useState<"cards" | "list">("cards");

    return (
        <Box bg="gray.50" minH="100vh" position="relative" overflow="hidden">
            <Image
                position="absolute"
                top="-2.25rem"
                left="-2.6875rem"
                src={`${import.meta.env.BASE_URL}/topCorner.png`}
                zIndex={0}
                width='689px'
                height='482px'
                alt='Decorative top corner image'
            />
            <Image
                position="absolute"
                bottom="2.5rem"
                right="0"
                width="19.6533rem"
                height="22.9758rem"
                src={`${import.meta.env.BASE_URL}/bottomCorner.png`}
                zIndex={0}
                alt='Decorative bottom corner image' />



            <Container maxW="100%" position="relative" zIndex={1} padding={0}>
                <Header />

                <Toogler viewMode={viewMode} setViewMode={setViewMode} />
                <main>
                    {viewMode === "cards" ? (
                        <Grid
                            templateColumns={{ base: "1fr", sm: "repeat(2, minmax(0, 1fr))", md: 'repeat(4, minmax(0, 1fr))', xl: "repeat(4, minmax(0, 1fr))" }}
                            gap="0.5rem"
                            margin="0 auto"
                            maxWidth='70%'
                        >
                            {itemCards.map((item, index) => (
                                <ListItem key={index} {...item} />
                            ))}
                        </Grid>
                    ) : (
                        <VStack gap="0.5rem" align="stretch" w='100%' alignItems='center'>
                            {itemCards.map((item, index) => (
                                <CompactItem key={index} {...item} />
                            ))}
                        </VStack>
                    )}
                </main>

                <Flex justifyContent="center" mt="2rem" mb="2rem">
                    <Button
                        variant="outline"
                        borderRadius="full"
                        borderColor="gray.500"
                        color="gray.500"
                        fontSize={tokens.fontSize.xs}
                        fontWeight={tokens.fontWeight.medium}
                        _hover={{
                            bg: "transparent",
                        }}
                        name="Load more"
                    >
                        LOAD MORE
                    </Button>
                </Flex>
            </Container>
        </Box>
    );
};

export default MarkupTest;
