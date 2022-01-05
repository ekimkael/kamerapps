import React from "react"
import Card from "./Card"
import { Grid } from "@chakra-ui/react"
import data from "../pages/fakelements.json"
import Pagination from "./Pagination"

export interface Props {
	grid?: number
	pagination?: boolean
}

const ProductsList = ({ grid = 3, pagination }: Props) => {
	return (
		<>
			<Grid
				templateColumns={{ base: "repeat(2, 1fr)", md: `repeat(${grid}, 1fr)` }}
				gap={4}
			>
				{data.slice(0, 6).map((element) => (
					<Card key={element?.id} data={element} />
				))}
			</Grid>

			{pagination && <Pagination />}
		</>
	)
}

export default ProductsList
