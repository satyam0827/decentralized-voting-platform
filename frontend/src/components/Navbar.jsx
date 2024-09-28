import { Container, Flex, Text, Box, Button } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
const Navbar = () => {
  const [walletAddress, setWalletAddress] = useState('');

  // Function to fetch wallet address from localStorage (or an API)
  const fetchWalletAddress = () => {
    const storedAddress = localStorage.getItem('wallet_address'); // Assuming it's stored in localStorage
    if (storedAddress) {
      setWalletAddress(storedAddress);
    } else {
      toast.error('No wallet address found!');
    }
  };

  useEffect(() => {
    fetchWalletAddress();
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress);
      toast.success('Wallet address copied to clipboard!');
    } catch (error) {
      toast.error('Failed to copy address');
    }
  };

  return (
    <Container bg={"white"} p={15} width={"100%"}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row"
        }}
       
      >
        <Link to={"/"} style={{textDecoration:"none"}}>
          <Text fontSize="xl" fontWeight="bold" >DiamPoll</Text>
        </Link>

        <Box mt={{ base: 4, sm: 0 }}>
          {walletAddress ? (
            <Flex alignItems="center" gap={2}>
              <Text
                fontSize="md"
                fontWeight="medium"
                onClick={copyToClipboard}
                cursor="pointer"
                color="blue.500"
              >
                {walletAddress.slice(0, 5)}...{walletAddress.slice(-5)}
              </Text>
              <Button
                size="sm"
                colorScheme="blue"
                onClick={copyToClipboard}
              >
                Copy
              </Button>
            </Flex>
          ) : (
            <Text fontSize="md" color="red.500">
              No Wallet Address
            </Text>
          )}
        </Box>
      </Flex>
    </Container>
  );
};

export default Navbar;
