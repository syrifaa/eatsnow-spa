import Navbar from '../components/Navbar';
import {
    Card,
    CardBody, CardFooter,
    Text,
    Image,
    Stack,
    Button,
    Flex,
    ChakraProvider,
    CSSReset,
    extendTheme, 
    Spacer,
  } from "@chakra-ui/react";
import pinpointImage from '../assets/vectors/pinpoint.svg';
import clockImage from '../assets/vectors/clock.svg';
import starImage from '../assets/vectors/star.svg';
import exampleImage from '../assets/rest1.svg';

function RestaurantList() {

  const restaurantData = [
    { id: 1, name: 'Ahoe', type: 'Korean', address: 'Jalan Raya, Cileunyi Wetan, Cileunyi, Bandung Regency, West Java 40622', time: '1-9.30 PM • Saturday Closed', rating: '4.8' },
    { id: 2, name: 'Ahoe', type: 'Korean', address: 'Jalan Raya, Cileunyi Wetan, Cileunyi, Bandung Regency, West Java 40622', time: '1-9.30 PM • Saturday Closed', rating: '4.8' },
    { id: 3, name: 'Ahoe', type: 'Korean', address: 'Jalan Raya, Cileunyi Wetan, Cileunyi, Bandung Regency, West Java 40622', time: '1-9.30 PM • Saturday Closed', rating: '4.8' },
    { id: 4, name: 'Geprek Bensu', type: 'Indonesian', address: 'Jalan Raya, Cileunyi Wetan, Cileunyi, Bandung Regency, West Java 40622', time: '1-9.30 PM • Saturday Closed', rating: '4.4' },
    { id: 5, name: 'Ayam Bang Dava', type: 'Other', address: 'Jalan Raya Jatinangor No. 145, Cikeruh, Sumedang Regency, West Java 43193', time: '1-9.30 PM • Saturday Closed', rating: '4.9' },
  ];

  const buttonStyle = {
    right: '0',
    borderRadius: '99px',
    width: '166px',
    height: '44px',
  };
  
  return(
    <ChakraProvider theme={extendTheme({})}>
      <CSSReset />
      <Flex align="center"
        justify="center"
>
        <Navbar/>
        <Stack direction="column" spacing="35px" mt="76px" ml="10px" mr="10px">
          {restaurantData.map((item) => (
            <Card
            boxShadow="none"
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            maxW="820px"
            h={{ base: 'auto', sm: 'auto', md: '250px' }}
            key={item.id}
          >
            <Image
              objectFit='cover'
              maxW={{ sm: 'auto', base: 'auto', md: '250px' }}
              maxH={{ sm: 'auto', base: 'auto', md: '250px' }}
              src={exampleImage}
              alt='Contoh Gambar'
              className='my-class'
              mr="35px"
            />
            <Stack>
              <CardBody pt={0} pl='5px' pr='10px' pb='0px'>
                <Text fontSize="16px" fontWeight={900} textAlign="left" mb="7px" mt={0}>{item.name}</Text>
                <Text textAlign={'left'} fontSize={12} mb="7px" mt={0}>{item.type}</Text>

                <Flex alignItems="center" mb="5px">
                  <Image src={pinpointImage} alt='pinpoint' mr="7px" />
                  <Text textAlign='left' m={0}>{item.address}</Text>
                </Flex>

                <Flex alignItems="center" mb="5px">
                  <Image src={clockImage} alt='clock' mr="7px" />
                  <Text textAlign='left' m={0}>{item.time}</Text>
                </Flex>

                <Flex alignItems="center" mb="0px">
                  <Image src={starImage} alt='clock' mr="7px" />
                  <Text textAlign='left' m={0}>{item.rating}</Text>
                </Flex>

              </CardBody>

              <CardFooter p={0}>
                <Spacer/>
                <Button variant='solid' backgroundColor='#FFF177' borderColor='#FFF177' style={buttonStyle} fontSize={18} fontWeight="bold" mb="10px">
                  Add Review
                </Button>
              </CardFooter>
            </Stack>
          </Card>
          ))}
          </Stack>
      </Flex>
    </ChakraProvider>
  );
}

export default RestaurantList;