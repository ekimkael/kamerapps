import React from "react"
import { chakra, Flex, useColorModeValue } from "@chakra-ui/react"

const Pagination = () => {
	const PagButton = (props: any) => {
		const activeStyle = {
			bg: useColorModeValue("purple.600", "purple.500"),
			color: useColorModeValue("white", "gray.200"),
		}
		return (
			<chakra.button
				mx={1}
				px={4}
				py={2}
				rounded="md"
				opacity={props.disabled && 0.6}
				_hover={!props.disabled && activeStyle}
				cursor={props.disabled && "not-allowed"}
				{...(props.active && activeStyle)}
			>
				{props.children}
			</chakra.button>
		)
	}
	return (
		<Flex
			bg={useColorModeValue("#F9FAFB", "gray.600")}
			p={50}
			w="full"
			alignItems="center"
			justifyContent="center"
		>
			<Flex>
				<PagButton disabled>previous</PagButton>
				<PagButton active>1</PagButton>
				<PagButton>2</PagButton>
				<PagButton>3</PagButton>
				<PagButton>4</PagButton>
				<PagButton>5</PagButton>
				<PagButton>Next</PagButton>
			</Flex>
		</Flex>
	)
}

export default Pagination
