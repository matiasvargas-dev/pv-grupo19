import { HStack, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const RatingStars = ({ rate = 0, count = 0 }) => (
  <HStack spacing={1}>
    {[...Array(5)].map((_, i) => (
      <StarIcon
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        key={i}
        color={i < Math.round(rate) ? "yellow.400" : "gray.300"}
        boxSize={4}
      />
    ))}
    <Text fontSize="sm" color="gray.600">
      ({count})
    </Text>
  </HStack>
);

export default RatingStars;

