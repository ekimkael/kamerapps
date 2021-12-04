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
			<Grid templateColumns="repeat(6, 1fr)" maxH={"100vh"}>
				<GridItem colSpan={2} px="6">
					<Center height="100%">
						<Stack>
							<Image
								alt={"Login Image"}
								objectFit={"cover"}
								src="./cover.png"
							/>
							<Heading as="h1" size="4xl" color="primary">
								Kamerapps.
							</Heading>
							<Text fontSize={{ base: "md", lg: "xl" }} color={"gray.500"}>
								A curate list of Cameroonian <br />
								<Tag size="xl" colorScheme="purple" px="2">
									<TagLabel>Apps • Services • Products</TagLabel>
								</Tag>
							</Text>

							<Stack direction={{ base: "column", md: "row" }} spacing={4}>
								<Button size="lg">How It Works</Button>
								<EditApp />
							</Stack>
						</Stack>
					</Center>
				</GridItem>
				<GridItem colSpan={4} bg="gray.50">
					<Container maxW="container.lg" my="3">
						<NavBar />
						<Grid templateColumns="repeat(3, 1fr)" gap={4}>
							{data.slice(0, 6).map((element) => (
								<Card key={element?.id} data={element} />
							))}
						</Grid>
						<Stack p={50} w="full" alignItems="center" justifyContent="center">
							<Button variant="primary" size="lg">
								Voir tous
							</Button>
						</Stack>
					</Container>
				</GridItem>
			</Grid>
		</>
	)
}

export default Home
