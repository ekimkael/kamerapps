import React from "react"
import Card from "./Card"
import Pagination from "./Pagination"
import { Grid } from "@chakra-ui/react"
// import data from "../pages/fakelements.json"
import { Items, Product } from "../pages/api/products/new"

export interface Props {
	data: Items
	grid?: number
	itemsPerPage?: number
	pagination?: boolean
}

const ProductsList = ({
	grid = 3,
	pagination,
	itemsPerPage = 6,
	data,
}: Props) => {
	const { items } = data

	return (
		<>
			<Grid
				gap={4}
				templateColumns={{
					base: "repeat(2, 1fr)",
					sm: "repeat(3, 1fr)",
					md: `repeat(${grid}, 1fr)`,
				}}
			>
				{items?.slice(0, itemsPerPage)?.map((element: Product) => (
					<Card key={element?.id} data={element} />
				))}
			</Grid>

			{pagination && <Pagination />}
		</>
	)
}

export default ProductsList
