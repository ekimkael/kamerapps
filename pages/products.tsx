import React from "react"
import Head from "next/head"
import NavBar from "../components/NavBar"
import { Items } from "./api/products/new"
import type { NextPage, GetStaticProps } from "next"
import ProductsList from "../components/ProductsList"
import { Box, Container, Heading, useColorModeValue } from "@chakra-ui/react"

const Products: NextPage<Items> = (items) => {
	return (
		<>
			<Head>
				<title>galerications. | List of products</title>
			</Head>

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
					<ProductsList grid={4} data={items} itemsPerPage={10} />
				</Container>
			</Box>
		</>
	)
}

export const getStaticProps: GetStaticProps = async (context) => {
	const response = await fetch(`${process.env.API_URL}/api/products`, {
		headers: {
			"User-Agent": "*",
		},
	})
	const { items } = await response.json()
	return {
		props: {
			items,
		},
	}
}

export default Products
