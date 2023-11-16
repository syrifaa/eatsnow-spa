import { Link as RouterLink, useLocation} from 'react-router-dom';

import { Box, useDisclosure, useMediaQuery, Link, VStack } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import logoImage from '../assets/logo1.svg';


const Navbar: React.FC = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThanMd] = useMediaQuery("(min-width: 48em)");
  let location = useLocation();
    const boxStyle = {
        width: '100%',
        height: '66px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '18px',
        fontWeight: 'bold',
        cursor: 'pointer',
    };

    const getBoxStyleForPath = (path: string) => {
        const baseStyle = {
            background: '#1C1C1C',
            color: 'white',
        };
    
        if (location.pathname === path) {
            return {
            ...baseStyle,
            background: '#FFF177', 
            color: 'black',
            };
        }
        return baseStyle;
        };

  return (
    <>
      {!isLargerThanMd && (
        <HamburgerIcon
          display={{ base: "block", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          position="fixed"
          top={4}
          left={isOpen? 200 : 4}
          boxSize={10}
          zIndex={2}
          color={isOpen ? "white" : "black"}
        />
      )}
      <Box
        display={isOpen || isLargerThanMd ? "block" : "none"}
        position={{ base: "fixed", md: "static" }}
        top={0}
        left={0}
        bottom={0}
        right={0}
        width={{ base: "280px", md: "20rem" }}
        h="100vh"
        p={4}
        zIndex={1}
      >
        <Box bg="#1C1C1C" color="white" w="64" h="100vh" pt="4" position="fixed" left="0" top="0">
            <VStack spacing="4" align="stretch">
            <Link as={RouterLink} to="/" mb="40px" mt={isOpen? "40px" : "0px"} pl='4' pr='4'>
                <img src={logoImage} alt="logo" />
            </Link>
            <Link as={RouterLink} to="/" display="flex" alignItems="center">
            <div style={{ ...boxStyle, ...getBoxStyleForPath('/') }}>
                    List Restaurant
                </div>
            </Link>
            <Link as={RouterLink} to="/redeem-voucher" display="flex" alignItems="center">
                <div style={{ ...boxStyle, ...getBoxStyleForPath('/redeem-voucher') }}>
                    Redeem Voucher
                </div>
            </Link>
            <Link as={RouterLink} to="/my-voucher" display="flex" alignItems="center">
                <div style={{ ...boxStyle, ...getBoxStyleForPath('/my-voucher') }}>
                    My Voucher
                </div>
            </Link>
            <Link as={RouterLink} to="/my-review" display="flex" alignItems="center">
                <div style={{ ...boxStyle, ...getBoxStyleForPath('/my-review') }}>
                    My Review
                </div>
            </Link>
            <Link as={RouterLink} to="/logout" display="flex" alignItems="center">
                <div style={{ ...boxStyle, ...getBoxStyleForPath('/logout') }}>
                    Logout
                </div>
            </Link>
            </VStack>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;