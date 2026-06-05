import { Box, Flex, Button, HStack, Text, Image } from "@chakra-ui/react"
import tokens from "../chakraConfig/tokens"
import DatePicker from "./shared/DatePicker"
import { useState } from "react";

export const Header = () => {

    const [fromDate, setFromDate] = useState<Date | null>(new Date("2016-08-09"));
    const [toDate, setToDate] = useState<Date | null>(new Date("2016-08-09"));

    return <Box
        as="header"
        bg="rgba(255, 255, 255, 0.67)"
        backdropFilter="blur(8px)"
        boxShadow="0px 0.25rem 1.5rem rgba(0,0,0,0.12)"
        borderRadius="0"
        p="1.5rem"
        mb="2rem"
        display='flex'
        justifyContent='center'
    >
        <Flex gap="2rem" alignItems="center">
            <Box
                width="8.625rem"
                height="8.625rem"
                borderRadius="lg"
                overflow="hidden"
                flexShrink={0}
            >
                <Image src={`${import.meta.env.BASE_URL}/logo.png`} alt='logo' width='138px' height='138px' />
            </Box>

            <Flex direction="column" flex={1} gap="1rem">
                <Flex alignItems="center" gap="1rem">
                    <Text fontSize="1.5rem" fontWeight={tokens.fontWeight.medium} fontFamily={tokens.fontFamily.montserrat}>
                        monblanproject
                    </Text>
                    <Button
                        size="sm"
                        variant="outline"
                        borderColor="blue.500"
                        color="blue.500"
                        fontSize={tokens.fontSize.sm}
                        _hover={{
                            bg: "transparent",
                        }}
                    >
                        Start on 17-02-2016
                    </Button>
                </Flex>

                <HStack gap="2rem" fontSize={tokens.fontSize.base}>
                    <Text>
                        <Text as="span" fontWeight={tokens.fontWeight.bold}>
                            870
                        </Text>{" "}
                        posts
                    </Text>
                    <Text>
                        <Text as="span" fontWeight={tokens.fontWeight.bold}>
                            11,787
                        </Text>{" "}
                        followers
                    </Text>
                    <Text>
                        <Text as="span" fontWeight={tokens.fontWeight.bold}>
                            112
                        </Text>{" "}
                        following
                    </Text>
                </HStack>

                <Flex alignItems="center" gap="1rem">
                    <Text fontWeight={tokens.fontWeight.medium} fontSize={tokens.fontSize.md}>
                        Date
                    </Text>
                    <HStack spacing="1rem" align="flex-start">
                        <DatePicker
                            selected={fromDate}
                            onChange={(date) => setFromDate(date)}
                            placeholder="Select date"
                            ariaLabel="From date"
                        />
                        <DatePicker
                            selected={toDate}
                            onChange={(date) => setToDate(date)}
                            placeholder="Select date"
                            ariaLabel="To date"
                        />
                    </HStack>
                </Flex>
            </Flex>
        </Flex>
    </Box>
}