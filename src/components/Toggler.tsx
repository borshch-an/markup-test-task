import { Flex, Box, ButtonGroup, Button } from "@chakra-ui/react"
import { BoxIcon, ListIcon } from "./shared/icons"

interface TooglerProps {
    viewMode: "cards" | "list";
    setViewMode: (mode: "cards" | "list") => void;
}

export const Toogler = ({ viewMode, setViewMode }: TooglerProps) => {
    return <Flex justify="space-between" align="center" mb="1rem">
        <Box />
        <ButtonGroup size="sm">
            <Button
                onClick={() => setViewMode("cards")}
                name='Toggle view mode - cards'
                aria-label="Toggle view mode - cards"

            >
                <BoxIcon fill={viewMode === "list" ? "blue.500" : undefined} />
            </Button>
            <Button
                onClick={() => setViewMode("list")}
                name='Toggle view mode - list'
                aria-label="Toggle view mode - list"

            >
                <ListIcon fill={viewMode === "cards" ? "blue.500" : undefined} />
            </Button>
        </ButtonGroup>
    </Flex>
}