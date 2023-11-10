import { Box, Link, VStack, Flex } from '@chakra-ui/react';
import { Link as RouterLink, useLocation} from 'react-router-dom';
import logoImage from '../assets/logo1.svg';

function Navbar() {
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
        background: '#1C1C1C',
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
    <Flex
        as="nav"
        align="center"
        justify="space-between"
        p="4"
        bg="transparent"
        color="white"
        position="fixed"
        width="100%"
    >
        <Box bg="#1C1C1C" color="white" w="64" h="100vh" pt="4" position="fixed" left="0" top="0">
            <VStack spacing="4" align="stretch">
            <Link as={RouterLink} to="/" mb="40px" pl='4' pr='4'>
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
            <Link as={RouterLink} to="/logout" display="flex" alignItems="center">
                <div style={{ ...boxStyle, ...getBoxStyleForPath('/logout') }}>
                    Logout
                </div>
            </Link>
            </VStack>
        </Box>
    </Flex>
    );
};

export default Navbar;