import NextImage from 'next/image';
import NextLink from 'next/link';

import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/layout';
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite
} from 'react-icons/md';

const navMenu = [
  {
    name: 'Home',
    icon: MdHome,
    route: '/'
  },
  {
    name: 'Search',
    icon: MdSearch,
    route: '/search'
  },
  {
    name: 'Your Library',
    icon: MdLibraryMusic,
    route: '/libary'
  }
];

const musicMenu = [
  {
    name: 'Create Playlist',
    icon: MdPlaylistAdd,
    route: '/'
  },
  {
    name: 'Favorites',
    icon: MdFavorite,
    route: '/favorites'
  }
];

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="1rem"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px">
          <NextImage src="/spotify.png" height={80} width={80} />
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((item) => {
              return (
                <ListItem key={item.name} fontSize="16px">
                  <LinkBox>
                    <NextLink href={item.route} passHref>
                      <LinkOverlay>
                        <ListIcon
                          as={item.icon}
                          color="white"
                          marginRight="20px"
                        />
                        {item.name}
                      </LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box marginY="20px">
          <List spacing={2}>
            {musicMenu.map((item) => {
              return (
                <ListItem fontSize="16px" key={item.name}>
                  <LinkBox>
                    <NextLink href={item.route} passHref>
                      <LinkOverlay>
                        <ListIcon
                          as={item.icon}
                          color="white"
                          marginRight="20px"
                        />
                        {item.name}
                      </LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Divider color="gray.700" />
        <Box height="50%" overflowY="auto" paddingY="20px">
          {new Array(50).fill(1).map((index) => {
            return <h1 key={index}>ABC</h1>;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
