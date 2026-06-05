import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import tokens from "../chakraConfig/tokens";
import { HeartIcon, CommentIcon } from "./shared/icons";

export interface CompactItemProps {
    title: string;
    date: string;
    action: string;
    actionDate: string;
    likes: number;
    comments: number;
    thumbnailColor?: string;
}

const CompactItem = ({
    title,
    date,
    action,
    actionDate,
    likes,
    comments,
    thumbnailColor = "gray.300",
}: CompactItemProps) => {
    return (
        <Box
            bg="white"
            borderRadius={tokens.borderRadius.base}
            overflow="hidden"
            boxShadow="0 0.25rem 0.75rem rgba(0,0,0,0.08)"
            maxW='836px'
            width='100%     '

        >
            <Flex align="center">
                <Box
                    width="5.375rem"
                    height="5.375rem"
                    flexShrink={0}
                    bg={thumbnailColor}
                    overflow="hidden"
                />

                <Flex
                    flex={1}
                    p="1rem"
                    pl="1.25rem"
                    justify="space-between"
                    align="center"
                >
                    <Box>
                        <Text fontWeight={tokens.fontWeight.medium} fontSize={tokens.fontSize.md} mb="0.25rem">
                            {title}
                        </Text>
                        <HStack spacing="0.75rem" align="center">
                            <HeartIcon width="18px" height="18px" />
                            <Text fontWeight={tokens.fontWeight.medium} fontSize={tokens.fontSize.base}>
                                {likes}
                            </Text>
                            <Box display="inline-flex" ml="0.75rem">
                                <CommentIcon width="18px" height="18px" />
                            </Box>
                            <Text fontWeight={tokens.fontWeight.medium} fontSize={tokens.fontSize.base}>
                                {comments}
                            </Text>
                        </HStack>
                    </Box>

                    <Box textAlign="center">
                        <Text fontWeight={tokens.fontWeight.medium} fontSize={tokens.fontSize.md} mb="0.25rem" textAlign='start'>
                            {date}
                        </Text>
                        <HStack spacing="0.75rem" justify="center">
                            <HeartIcon width="18px" height="18px" />
                            <Text fontWeight={tokens.fontWeight.medium} fontSize={tokens.fontSize.base}>
                                67
                            </Text>
                            <CommentIcon width="18px" height="18px" />
                            <Text fontWeight={tokens.fontWeight.medium} fontSize={tokens.fontSize.base}>
                                22
                            </Text>
                        </HStack>
                    </Box>

                    <Box textAlign="right">
                        <Text fontWeight={tokens.fontWeight.medium} fontSize={tokens.fontSize.base}>
                            {action}
                        </Text>
                        <Text fontSize={tokens.fontSize.es} fontWeight={tokens.fontWeight.medium}>
                            {actionDate}
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
};

export default CompactItem;
