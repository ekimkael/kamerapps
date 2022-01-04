import {
	Box,
	Heading,
	Text,
	Tag,
	TagLabel,
	HStack,
	Stack,
	Modal,
	ModalBody,
	ModalOverlay,
	ModalContent,
	ModalFooter,
	ModalCloseButton,
	LinkBox,
	LinkOverlay,
	IconButton,
	Icon,
	Button,
	Grid,
	GridItem,
	Image,
} from "@chakra-ui/react"
import Play from "./icons/Play"
import Apple from "./icons/Apple"
import Twitter from "./icons/Twitter"
import Facebook from "./icons/Facebook"
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
								height={{ base: "80px", md: "120px" }}
								width={{ base: "80px", md: "120px" }}
								objectFit={"cover"}
								src={details?.icon}
								alt={`logo of ${details?.name}`}
							/>
							<Box>
								<Heading as="h1" fontSize={{ base: "2xl", md: "4xl" }}>
									{details?.name}
								</Heading>

								<Tag size="lg" colorScheme="purple">
									<TagLabel>{details?.category}</TagLabel>
								</Tag>
							</Box>
						</HStack>
						<LinkBox>
							<LinkOverlay href={details?.apps?.website} isExternal>
								<Button leftIcon={<ExternaLink />} isTruncated>
									website
								</Button>
							</LinkOverlay>
						</LinkBox>
					</HStack>

					<Text fontSize={{ base: "lg", md: "xl" }} color="gray.500" my="6">
						{details?.description}
					</Text>
					<HStack>
						<LinkBox>
							<LinkOverlay href={details?.apps?.android} isExternal>
								<Button variant="outline" size="lg" leftIcon={<Play />}>
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
