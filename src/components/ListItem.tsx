import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import tokens from "../chakraConfig/tokens";
import { HeartIcon, CommentIcon } from "./shared/icons";

export interface ListItemProps {
    title: string;
    date: string;
    action: string;
    actionDate: string;
    likes: number;
    comments: number;
    thumbnailColor?: string;
}

const ListItem = ({
    title,
    date,
    action,
    actionDate,
    likes,
    comments,
    thumbnailColor = "gray.300",
}: ListItemProps) => {
    return (
        <Box
            bg="white"
            overflow="hidden"
            boxShadow="0 6px 18px rgba(0,0,0,0.06)"
        >
            <Box height="12.6875rem" bg={thumbnailColor} />

            <Box p="0.75rem">
                <Flex justify="space-between" align="flex-start" mb="0.5rem">
                    <Box>
                        <Text fontWeight={tokens.fontWeight.medium} fontSize={tokens.fontSize.md} mb="0.125rem">
                            {title}
                        </Text>
                    </Box>
                    <Text fontWeight={tokens.fontWeight.medium} fontSize={tokens.fontSize.md} mb="0.125rem">
                        {date}
                    </Text>
                </Flex>
                <HStack spacing="0.5rem" mb='0.5rem'>
                    <Box as="span" display="inline-flex" alignItems="center">
                        <HeartIcon width="18px" height="18px" />
                    </Box>
                    <Text fontSize={tokens.fontSize.base} fontWeight={tokens.fontWeight.medium}>{likes}</Text>
                    <Box as="span" display="inline-flex" alignItems="center" ml="1rem">
                        <HeartIcon width="18px" height="18px" />
                    </Box>
                    <Text fontSize={tokens.fontSize.base} fontWeight={tokens.fontWeight.medium}>{comments}</Text>
                </HStack>
                <Box mb='1.5rem'>
                    <HStack spacing="0.5rem">
                        <Box as="span" display="inline-flex" alignItems="center">
                            <CommentIcon width="18px" height="18px" />
                        </Box>
                        <Text fontSize={tokens.fontSize.base} fontWeight={tokens.fontWeight.medium}>67</Text>
                        <Box as="span" display="inline-flex" alignItems="center" ml="0.5rem">
                            <CommentIcon width="18px" height="18px" />
                        </Box>
                        <Text fontSize={tokens.fontSize.base} fontWeight={tokens.fontWeight.medium}>22</Text>
                    </HStack>
                </Box>

                <Flex justifyContent='space-between' alignItems='center'>
                    <Text fontSize={tokens.fontSize.base} fontWeight={tokens.fontWeight.medium}>
                        {action}
                    </Text>
                    <Text fontSize={tokens.fontSize.es} fontWeight={tokens.fontWeight.medium}>
                        {actionDate}
                    </Text>
                </Flex>
            </Box>
        </Box >
    );
};

export default ListItem;
