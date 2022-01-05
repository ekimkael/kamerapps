import React from "react"
import Card from "./Card"
import { Grid } from "@chakra-ui/react"
import data from "../pages/fakelements.json"
import Pagination from "./Pagination"

export interface Props {
	grid?: number
	itemsPerPage?: number
	pagination?: boolean
}

const ProductsList = ({ grid = 3, pagination, itemsPerPage = 6 }: Props) => {
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
				{data.slice(0, itemsPerPage).map((element) => (
					<Card key={element?.id} data={element} />
				))}
			</Grid>

			{pagination && <Pagination />}
		</>
	)
}

export default ProductsList
