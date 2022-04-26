import { Box } from '@chakra-ui/layout';
import React from 'react';

interface Props {}
const PlayerLayout: React.FC<Props> = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width="250px" left="0">
        Sidebar
      </Box>
      <Box marginLeft="250px" marginBottom="250px">
        {children}
      </Box>
      <Box position="absolute" bottom="0" left="0">
        player
      </Box>
    </Box>
  );
};

export default PlayerLayout;
