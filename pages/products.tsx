import React from "react"
import NavBar from "../components/NavBar"
import ProductsList from "../components/ProductsList"
import { Box, Container, Heading, useColorModeValue } from "@chakra-ui/react"

const Products = () => {
	return (
		<Box
			minHeight="100vh"
			py={10}
			bg={useColorModeValue("gray.50", "gray.700")}
		>
			<Container maxW={{ md: "container.xl" }}>
				<NavBar />
				<Heading fontSize={{ base: "2xl", md: "4xl" }} pb={4}>
					All products
				</Heading>
				<ProductsList grid={4} itemsPerPage={10} />
			</Container>
		</Box>
	)
}

export default Products
