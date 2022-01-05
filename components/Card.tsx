import {
	Button,
	Box,
	useColorModeValue,
	Heading,
	Text,
	Stack,
	Image,
	useDisclosure,
} from "@chakra-ui/react"
import ItemDetails from "./ItemDetails"

export default function Card({ data }: any) {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<Box
				w="full"
				zIndex={1}
				rounded="lg"
				role="group"
				boxShadow={"2xl"}
				p={{ base: 2, md: 6 }}
				bg={useColorModeValue("white", "gray.800")}
			>
				<Image
					rounded="lg"
					height={{ base: "120px", md: "230px" }}
					width={{ base: "full", md: "230px" }}
					margin="0 auto"
					src={data?.icon}
					objectFit={"cover"}
					alt="logo of the application"
				/>
				<Stack
					align="center"
					pt={{ base: 2, md: 4 }}
					spacing={{ base: 1, md: 2 }}
				>
					<Heading fontSize={{ base: "xl", md: "2xl" }}>{data?.name}</Heading>
					<Text
						color={"gray.500"}
						textTransform={"uppercase"}
						fontSize={{ base: "xs", md: "sm" }}
					>
						{data?.category}
					</Text>
					<Button variant="primary" isFullWidth onClick={onOpen}>
						More details
					</Button>
				</Stack>
			</Box>

			{isOpen && (
				<ItemDetails details={data} isOpen={isOpen} onClose={onClose} />
			)}
		</>
	)
}
