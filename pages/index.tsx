import {
	Button,
	Container,
	Heading,
	Stack,
	Text,
	Image,
	Tag,
	Box,
	VStack,
	TagLabel,
	useColorModeValue,
} from "@chakra-ui/react"
import Head from "next/head"
import Link from "next/link"
import NavBar from "../components/NavBar"
import { Items } from "./api/products/new"
import EditApp from "../components/EditApp"
import type { NextPage, GetStaticProps } from "next"
import ProductsList from "../components/ProductsList"

const Home: NextPage<Items> = (items) => {
	return (
		<>
			<Head>
				<title>galerications. | Welcome</title>
			</Head>

			<Stack
				direction={{ base: "column", md: "row" }}
				width="100vw"
				height="100vh"
			>
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
						color="primary"
						fontSize={{ base: "5xl", md: "8xl" }}
					>
						galerications.
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

				<Stack bg={useColorModeValue("gray.50", "gray.700")} flex={2}>
					<Container centerContent my={3} maxW={{ md: "container.lg" }}>
						<NavBar />
						<ProductsList data={items} />
					</Container>

					<Stack p={8} w="full" alignItems="center" justifySelf="flex-end">
						<Link href="/products">
							<a>
								<Button variant="primary" size="lg">
									See more
								</Button>
							</a>
						</Link>
					</Stack>
				</Stack>
			</Stack>
		</>
	)
}

export const getStaticProps: GetStaticProps = async (context) => {
	const response = await fetch(`${process.env.API_URL}/api/products`)
	const { items } = await response.json()
	return {
		props: {
			items,
		},
	}
}

export default Home
