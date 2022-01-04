import Head from "next/head"
import type { NextPage } from "next"
import {
	Button,
	Container,
	Center,
	Grid,
	GridItem,
	Heading,
	Stack,
	Text,
	Image,
	Tag,
	TagLabel,
	useColorModeValue,
	Box,
	VStack,
} from "@chakra-ui/react"

import data from "./fakelements.json"
import Card from "../components/Card"
import NavBar from "../components/NavBar"
import EditApp from "../components/EditApp"

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Kamerapps</title>
			</Head>

			<Stack direction={{ base: "column", md: "row" }} width="100vw">
				<VStack
					px={6}
					flex={1}
					py={{ base: 20 }}
					alignItems="center"
					justifyContent="center"
				>
					<Image alt={"Login Image"} objectFit={"cover"} src="./cover.png" />
					<Heading
						as="h1"
						fontSize={{ base: "5xl", md: "8xl" }}
						color="primary"
					>
						Kamerapps.
					</Heading>
					<Text fontSize={{ base: "xl", lg: "4xl" }} color={"gray.500"}>
						A curate list of Cameroonian <br />
						<Tag size="xl" colorScheme="purple" px="2">
							<TagLabel>Apps • Services • Products</TagLabel>
						</Tag>
					</Text>

					<Stack direction="row" spacing={4}>
						<Button size="lg">How It Works</Button>
						<EditApp />
					</Stack>
				</VStack>

				<Box bg={useColorModeValue("gray.50", "gray.700")} flex={2}>
					<Container centerContent my={3} maxW={{ md: "container.lg" }}>
						<NavBar />
						<Grid
							templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
							gap={4}
						>
							{data.slice(0, 6).map((element) => (
								<Card key={element?.id} data={element} />
							))}
						</Grid>
					</Container>

					<Stack p={8} w="full" alignItems="center" justifyContent="center">
						<Button variant="primary" size="lg">
							Voir tous
						</Button>
					</Stack>
				</Box>
			</Stack>
		</>
	)
}

export default Home
