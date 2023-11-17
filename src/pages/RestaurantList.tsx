import {
    Card,
    CardBody, CardFooter,
    Text,
    Image,
    Stack,
    Flex,
    CSSReset,
    Spacer,
    Box,
    Link,
    Button,
  } from "@chakra-ui/react";
import { Link as RouterLink} from 'react-router-dom';

import Navbar from '../components/Navbar';

import pinpointImage from '../assets/vectors/pinpoint.svg';
import starImage from '../assets/vectors/star.svg';
import exampleImage from '../assets/rest1.svg';
import { useEffect, useState } from "react";
import axios from 'axios';
import { REST_URL } from "../utils/url";


function RestaurantList() {
  interface YourItemType {
    resto_id: number;
    resto_name: string;
    category: string;
    address: string;
    rating: number;
  }
  interface YourComponentProps {
    data: YourItemType[];
  }

    const url = REST_URL + 'restaurant';
    const fetchRestaurant = () => {
        return axios.get(url);
    };

    const [data, setData] = useState<YourItemType[]>([]);

    useEffect(() => {
        fetchRestaurant().then(response => {
            setData(response.data);
        }).catch(error => {
            console.error('Error fetching voucher:', error);
        });
    }, []);

  // const restaurantData = [
  //   { id: 1, name: 'Ahoe', type: 'Korean', address: 'Jalan Raya, Cileunyi Wetan, Cileunyi, Bandung Regency, West Java 40622', time: '1-9.30 PM • Saturday Closed', rating: '4.8' },
  //   { id: 2, name: 'Ahoe', type: 'Korean', address: 'Jalan Raya, Cileunyi Wetan, Cileunyi, Bandung Regency, West Java 40622', time: '1-9.30 PM • Saturday Closed', rating: '4.8' },
  //   { id: 3, name: 'Ahoe', type: 'Korean', address: 'Jalan Raya, Cileunyi Wetan, Cileunyi, Bandung Regency, West Java 40622', time: '1-9.30 PM • Saturday Closed', rating: '4.8' },
  //   { id: 4, name: 'Geprek Bensu', type: 'Indonesian', address: 'Jalan Raya, Cileunyi Wetan, Cileunyi, Bandung Regency, West Java 40622', time: '1-9.30 PM • Saturday Closed', rating: '4.4' },
  //   { id: 5, name: 'Ayam Bang Dava', type: 'Other', address: 'Jalan Raya Jatinangor No. 145, Cikeruh, Sumedang Regency, West Java 43193', time: '1-9.30 PM • Saturday Closed', rating: '4.9' },
  // ];

  const buttonStyle = {
    right: '0',
    borderRadius: '99px',
    width: '166px',
    height: '44px',
  };

  const YourComponent: React.FC<YourComponentProps> = ({ data }) => {
    return(
      <>
        <Flex align="center" justify="center" minH="100vh" direction="row">
          <Navbar/>
          <Stack direction="column" spacing="35px" mt="76px" ml="10px" mr="10px">
            {data.map((item, index) => (
              <Card
              boxShadow="none"
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              maxW="820px"
              h={{ base: 'auto', sm: 'auto', md: '250px' }}
              key={item.resto_id}
            >
              <Image
                objectFit='cover'
                maxW={{ sm: 'auto', base: 'auto', md: '250px' }}
                maxH={{ sm: 'auto', base: 'auto', md: '250px' }}
                src={exampleImage}
                alt='Contoh Gambar'
                className='my-class'
                
                
              />
              <Stack backgroundColor="#F5F5F5" pl="35px" w="313px">
                <CardBody pt={0} pl='5px' pr='10px' pb='0px'>
                  <Text fontSize="16px" fontWeight={900} textAlign="left" mb="7px" mt={0}>{item.resto_name}</Text>
                  <Text textAlign={'left'} fontSize={12} mb="7px" mt={0}>{item.category}</Text>
  
                  <Flex alignItems="center" mb="5px">
                    <Image src={pinpointImage} alt='pinpoint' mr="7px" />
                    <Text textAlign='left' m={0}>{item.address}</Text>
                  </Flex>
  
                  <Flex alignItems="center" mb="0px">
                    <Image src={starImage} alt='clock' mr="7px" />
                    <Text textAlign='left' m={0}>{item.rating}</Text>
                  </Flex>
  
                </CardBody>
  
                <CardFooter p={0}>
                  <Spacer/>
                  <Link as={RouterLink} to={`/add-review/${item.resto_id}/${item.resto_name}`} display="flex" alignItems="center">
                    <Button
                    type="submit"
                    id="submit-login"
                    bgColor="#FFF177"
                    borderColor="#1C1C1C"
                    borderWidth="3px"
                    color="#1C1C1C"
                    fontWeight="bold"
                    fontSize="md"
                    padding="10px"
                    borderRadius="20"   
                    >
                      Add Review
                    </Button>
                  </Link>
                </CardFooter>
              </Stack>
            </Card>
            ))}
            </Stack>
        </Flex>
      </>
    );
  };
  return <YourComponent data={data}/>;
}

export default RestaurantList;