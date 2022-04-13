import { SocialIcon } from 'react-social-icons';
import { Box } from '@chakra-ui/react';

export const SocialMediaIcons = () => {
  return (
    <Box display="flex" alignItems="center" gap={3}>
      <SocialIcon
        url="https://discord.gg/4Xsgr4maGV"
        bgColor="#fff"
        style={{ width: 30, height: 30 }}
      />
      <SocialIcon
        url="https://twitter.com/DevilroNFT"
        bgColor="#fff"
        style={{ width: 30, height: 30 }}
      />
      <SocialIcon
        url="https://www.instagram.com/elrond.devils/"
        bgColor="#fff"
        style={{ width: 30, height: 30 }}
      />
      <SocialIcon
        url="https://devil.ro/#"
        bgColor="#fff"
        style={{ width: 30, height: 30 }}
      />
      <SocialIcon
        url="https://youtube.com/channel/UCYV5_SUtLWwnuyyWwaXAYNA"
        bgColor="#fff"
        style={{ width: 30, height: 30 }}
      />
    </Box>
  );
};
