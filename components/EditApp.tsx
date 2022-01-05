import React from "react"
import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from "@chakra-ui/react"
import AppForm from "./AppForm"

const EditApp = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<Button variant="primary" size="lg" onClick={onOpen}>
				Submit your app
			</Button>

			{isOpen && (
				<Modal onClose={onClose} isOpen={isOpen} size="lg" isCentered>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Submit your product</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<AppForm />
						</ModalBody>
						<ModalFooter>
							<Button onClick={onClose}>Close</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			)}
		</>
	)
}

export default EditApp
