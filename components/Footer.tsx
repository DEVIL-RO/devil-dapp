import { Container, Box, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box
      height="120px"
      bgColor="elvenTools.dark.darker"
      color="elvenTools.white"
      display="flex"
      alignItems="center"
    >
      <Container
        maxW="container.xl"
        fontSize="sm"
        fontWeight="normal"
        textAlign="center"
      >
        <Box>DEVIL.RO</Box>
        <Box fontSize="xs" fontWeight="hairline">
          Focused on art, creativity, and building community around it.
        </Box>
        <Box fontSize="xs" fontWeight="bold">
          <Text
            as="a"
            color="elvenTools.color3.base"
            href="https://trust.market"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Trust.Market
          </Text>{' '}
          ⚡{' '}
          <Text
            as="a"
            color="elvenTools.color3.base"
            href="https://www.devil.ro"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            DEVIL.RO
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
