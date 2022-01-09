import {
	Box,
	Icon,
	Input,
	HStack,
	Button,
	LinkBox,
	InputGroup,
	IconButton,
	LinkOverlay,
	useColorMode,
	InputLeftElement,
} from "@chakra-ui/react"
import Sun from "./icons/Sun"
import Moon from "./icons/Moon"
import Github from "./icons/Github"
import Search from "./icons/Search"
import Twitter from "./icons/Twitter"

const NavBar = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<HStack
			as="nav"
			display={{ base: "none", md: "flex" }}
			justifyContent="space-between"
			mb="10"
		>
			<Box w="md">
				<InputGroup>
					<InputLeftElement mt="1" color="gray.500" pointerEvents="none">
						<Search />
					</InputLeftElement>
					<Input
						type="search"
						placeholder="What are you looking for?"
						size="lg"
					/>
				</InputGroup>
			</Box>
			<HStack>
				<LinkBox>
					<LinkOverlay
						href="https://opencollective.com/osscameroon/donate"
						isExternal
					>
						<Button variant="primary">Support us on OpenCollective</Button>
					</LinkOverlay>
				</LinkBox>
				<IconButton
					onClick={toggleColorMode}
					isRound
					aria-label="Search database"
					icon={colorMode === "light" ? <Icon as={Moon} /> : <Icon as={Sun} />}
				/>
				<IconButton
					isRound
					aria-label="Search database"
					icon={<Icon as={Twitter} />}
				/>
				<IconButton
					isRound
					aria-label="Search database"
					icon={<Icon as={Github} />}
				/>
			</HStack>
		</HStack>
	)
}

export default NavBar
