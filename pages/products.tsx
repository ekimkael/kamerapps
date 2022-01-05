import React from "react"
import NavBar from "../components/NavBar"
import ProductsList from "../components/ProductsList"
import { Box, Container, useColorModeValue } from "@chakra-ui/react"

const Products = () => {
	return (
		<Box height="100vh" bg={useColorModeValue("gray.50", "gray.700")}>
			<Container maxW={{ md: "container.xl" }}>
				<NavBar />
				{/* <Heading size="lg">All products</Heading> */}
				<ProductsList grid={4} />
			</Container>
		</Box>
	)
}

export default Products
