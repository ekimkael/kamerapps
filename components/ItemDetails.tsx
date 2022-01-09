import {
	Box,
	Text,
	Tag,
	Stack,
	Modal,
	Icon,
	Grid,
	Image,
	HStack,
	Button,
	Heading,
	LinkBox,
	GridItem,
	TagLabel,
	ModalBody,
	IconButton,
	LinkOverlay,
	ModalFooter,
	ModalOverlay,
	ModalContent,
	ModalCloseButton,
} from "@chakra-ui/react"
import Apple from "./icons/Apple"
import Twitter from "./icons/Twitter"
import Facebook from "./icons/Facebook"
import PlayStore from "./icons/PlayStore"
import ExternaLink from "./icons/ExternaLink"

const ItemDetails = ({ details, isOpen, onClose }: any) => {
	return (
		<Modal isOpen={isOpen} isCentered onClose={onClose} size="xl">
			<ModalOverlay />
			<ModalContent>
				<ModalCloseButton />
				<ModalBody>
					<HStack mt="10" justifyContent="space-between">
						<HStack>
							<Image
								rounded="lg"
								height={{ base: "60px", md: "100px" }}
								width={{ base: "60px", md: "100px" }}
								objectFit={"cover"}
								src={details?.icon || "./appIcons/default.png"}
								alt={`logo of ${details?.name}`}
							/>
							<Box>
								<Heading as="h1" fontSize={{ base: "xl", md: "3xl" }}>
									{details?.name}
								</Heading>

								<Tag size="md" colorScheme="purple">
									<TagLabel>{details?.category}</TagLabel>
								</Tag>
							</Box>
						</HStack>
						<LinkBox display={{ base: "none", md: "block" }}>
							<LinkOverlay href={details?.apps?.website} isExternal>
								<Button leftIcon={<ExternaLink />}>website</Button>
							</LinkOverlay>
						</LinkBox>

						{/* On mobile */}
						<LinkBox display={{ base: "block", md: "none" }}>
							<LinkOverlay href={details?.apps?.website} isExternal>
								<IconButton
									isRound
									aria-label="link to the website"
									icon={<Icon as={ExternaLink} />}
								/>
							</LinkOverlay>
						</LinkBox>
					</HStack>

					<Text fontSize={{ base: "md", md: "xl" }} color="gray.500" my="6">
						{details?.description}
					</Text>
					<HStack>
						<LinkBox>
							<LinkOverlay href={details?.apps?.android} isExternal>
								<Button variant="outline" size="lg" leftIcon={<PlayStore />}>
									Play Store
								</Button>
							</LinkOverlay>
						</LinkBox>
						<LinkBox>
							<LinkOverlay href={details?.apps?.ios} isExternal>
								<Button variant="outline" size="lg" leftIcon={<Apple />}>
									App Store
								</Button>
							</LinkOverlay>
						</LinkBox>
					</HStack>

					<Stack py="6">
						<Heading as="h4" size="md" color="primary">
							Social Networks
						</Heading>
						<HStack>
							<LinkBox>
								<LinkOverlay href={details?.socials?.facebook} isExternal>
									<IconButton
										isRound
										size="lg"
										aria-label="Facebook account"
										icon={<Icon as={Facebook} />}
									/>
								</LinkOverlay>
							</LinkBox>
							<LinkBox>
								<LinkOverlay href={details?.socials?.twitter} isExternal>
									<IconButton
										isRound
										size="lg"
										aria-label="Twitter account"
										icon={<Icon as={Twitter} />}
									/>
								</LinkOverlay>
							</LinkBox>
						</HStack>
					</Stack>
				</ModalBody>

				<ModalFooter borderTopWidth="1px">
					<Grid templateColumns="repeat(5, 1fr)" gap={4} width="full">
						<GridItem colSpan={2}>
							<LinkBox>
								<LinkOverlay
									href="https://opencollective.com/osscameroon/donate"
									isExternal
								>
									<Text as="span" color="gray.500">
										Previous
									</Text>
									<Heading size="md">Hostme</Heading>
								</LinkOverlay>
							</LinkBox>
						</GridItem>
						<GridItem colStart={4} colEnd={6} align="right">
							<LinkBox>
								<LinkOverlay
									href="https://opencollective.com/osscameroon/donate"
									isExternal
								>
									<Text as="span" color="gray.500">
										Next
									</Text>
									<Heading size="md">Mapane</Heading>
								</LinkOverlay>
							</LinkBox>
						</GridItem>
					</Grid>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}

export default ItemDetails
