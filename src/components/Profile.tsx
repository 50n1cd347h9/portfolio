import react from "react";
import { Box, Heading, Image, Text, Button, Grid, GridItem, IconButton } from '@chakra-ui/react';

const Profile = () => {
	return (
		<Box m="28px 0" display="flex" flexDirection="column">
			<Box display="flex" flexDirection="row"> 
				<Box w="80px" h="80px"  borderRadius="100%" background="blue" overflow="hidden">
					<Image src="https://avatars.githubusercontent.com/u/104137693?v=4" />
				</Box>

				<Box p="0 8px" display="flex" flexDirection="column">
					<Heading as="h3" size="lg" textAlign="left">Hello!🐶 </Heading>	

					<Box display="flex" flexDirection="row">
						<Heading>My_name_is_</Heading>

						<Heading color="#9158ff">50nicd347h9</Heading>
					</Box>
				</Box>
			</Box>

			<Grid p="16px 0 0 0" templateColumns="repeat(5, 1fr)">
				<GridItem >
					<Button background="blue" color="white">Twitter</Button>
				</GridItem>

				<GridItem >
					<Button background="blue" color="white">GitHub</Button>
				</GridItem>
			</Grid>
		</Box>
	)
}

export default Profile;
