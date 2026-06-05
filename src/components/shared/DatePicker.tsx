import { forwardRef } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Box, Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { CalendarIcon, CrossIcon } from "./icons";

interface DatePickerProps {
    label?: string;
    selected: Date | null;
    onChange: (date: Date | null) => void;
    placeholder?: string;
    ariaLabel?: string;
}

const CustomInput = forwardRef<HTMLInputElement, { value?: string; onClick?: () => void, ariaLabel?: string }>(
    ({ value, onClick, ariaLabel }, ref) => (
        <InputGroup>
            <Input
                ref={ref}
                value={value}
                onClick={onClick}
                readOnly
                cursor="pointer"
                _readOnly={{ bg: "white" }}
                _focus={{ boxShadow: "none", borderColor: "gray.200" }}
                _active={{ boxShadow: "none" }}
                _hover={{ borderColor: "gray.300" }}
                variant="outline"
                maxW='162px'
                aria-label={ariaLabel}
            />
            <InputRightElement pointerEvents='none' height='100%' width='auto' right='0'>
                <Flex bgColor="gray.200" fontSize="0.875rem" alignItems='center' borderRightRadius='base' height='100%'>
                    <CrossIcon width='24px' height='24px' />
                    <CalendarIcon width='24px' height='24px' />
                </Flex>
            </InputRightElement>
        </InputGroup>
    )
);

CustomInput.displayName = "CustomInput";

const DatePicker = ({ label, selected, onChange, placeholder, ariaLabel }: DatePickerProps) => {
    return (
        <Box>
            {label ? (
                <Text mb="0.5rem" fontSize="0.875rem" fontWeight={600}>
                    {label}
                </Text>
            ) : null}
            <ReactDatePicker
                selected={selected}
                onChange={onChange}
                customInput={<CustomInput ariaLabel={ariaLabel} />}
                placeholderText={placeholder}
                dateFormat="dd-MM-yyyy"
            />
        </Box>
    );
};

export default DatePicker;
