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
				role={"group"}
				p={6}
				w={"full"}
				bg={useColorModeValue("white", "gray.800")}
				boxShadow={"2xl"}
				rounded={"lg"}
				pos={"relative"}
				zIndex={1}
			>
				<Box
					rounded={"lg"}
					pos={"relative"}
					height={"230px"}
					_after={{
						transition: "all .3s ease",
						content: '""',
						w: "full",
						h: "full",
						pos: "absolute",
						top: 5,
						left: 0,
						backgroundImage: `url(${data?.icon})`,
						filter: "blur(15px)",
						zIndex: -1,
					}}
					_groupHover={{
						_after: {
							filter: "blur(20px)",
						},
					}}
				>
					<Image
						rounded={"lg"}
						height={230}
						width={230}
						margin="0 auto"
						objectFit={"cover"}
						src={data?.icon}
						alt="logo of the application"
					/>
				</Box>
				<Stack pt={6} align={"center"}>
					<Heading fontSize={"2xl"}>{data?.name}</Heading>
					<Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
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
