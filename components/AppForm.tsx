import React from "react"
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	InputGroup,
	InputLeftAddon,
	HStack,
	Select,
	Textarea,
} from "@chakra-ui/react"

const AppForm = () => {
	return (
		<form>
			<FormControl id="name" isRequired>
				<FormLabel>Name</FormLabel>
				<Input placeholder="Application's name" />
			</FormControl>

			<HStack my="2">
				<FormControl id="website">
					<FormLabel>Website</FormLabel>
					<Input placeholder="Application's website" />
				</FormControl>

				<FormControl id="website" isRequired>
					<FormLabel>Category</FormLabel>
					<Select placeholder="Select option">
						<option value="option1">Option 1</option>
						<option value="option2">Option 2</option>
						<option value="option3">Option 3</option>
					</Select>
				</FormControl>
			</HStack>

			<FormControl id="description">
				<FormLabel>Description</FormLabel>
				<Textarea placeholder="Describe what your app does" />
			</FormControl>

			<FormControl as="fieldset" my="2">
				<FormLabel as="legend" mt="2" color="gray.500">
					Stores
				</FormLabel>

				<HStack>
					<FormControl id="android">
						<FormLabel>Google Play</FormLabel>
						<Input placeholder="Google Play link of your app" />
					</FormControl>

					<FormControl id="ios">
						<FormLabel>App Store</FormLabel>
						<Input placeholder="App Store link of your app" />
					</FormControl>
				</HStack>
			</FormControl>

			<FormControl as="fieldset" my="2">
				<FormLabel as="legend" mt="2" color="gray.500">
					Social Networks
				</FormLabel>

				<FormControl id="facebook" my="1">
					<InputGroup>
						<InputLeftAddon children="https://facebook.com/" />
						<Input placeholder="Facebook account" />
					</InputGroup>
				</FormControl>

				<FormControl id="twitter" my="1">
					<InputGroup>
						<InputLeftAddon children="https://twitter.com/" />
						<Input placeholder="Twitter account" />
					</InputGroup>
				</FormControl>
			</FormControl>
		</form>
	)
}

export default AppForm
