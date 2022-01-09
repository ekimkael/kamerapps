/* eslint-disable react/no-children-prop */
import React from "react"
import {
	FormControl,
	FormLabel,
	Button,
	FormErrorMessage,
	FormHelperText,
	Input,
	InputGroup,
	InputLeftAddon,
	HStack,
	Select,
	Textarea,
} from "@chakra-ui/react"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

const schema = yup.object().shape({
	name: yup.string().required(),
	category: yup.string().required(),
	description: yup.string().required().nullable(),
	apps: yup.object({
		website: yup.string().url().notRequired().nullable(),
		android: yup.string().url().notRequired().nullable(),
		ios: yup.string().url().notRequired().nullable(),
	}),
	socials: yup.object({
		facebook: yup.string().notRequired().nullable(),
		twitter: yup.string().notRequired().nullable(),
	}),
})

const AppForm = ({ close }: any) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		mode: "onSubmit",
		resolver: yupResolver(schema),
	})

	const onSubmit = async (details: any) => {
		try {
			const response = await fetch("/api/products/new", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(details),
			})

			const data = await response.json()
			close()
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormControl id="name" isInvalid={!!errors?.name}>
				<FormLabel>Name</FormLabel>
				<Input {...register("name")} placeholder="Application's name" />
			</FormControl>

			<HStack my="2">
				<FormControl id="website" isInvalid={!!errors?.apps?.website}>
					<FormLabel>Website</FormLabel>
					<Input
						{...register("apps.website")}
						placeholder="Application's website"
					/>
					{errors["apps.website"] && (
						<FormErrorMessage>
							{errors["apps.website"]?.message}
						</FormErrorMessage>
					)}
				</FormControl>

				<FormControl id="category" isInvalid={!!errors?.category}>
					<FormLabel>Category</FormLabel>
					<Select {...register("category")} placeholder="Select option">
						<option value="app">App</option>
						<option value="product">Product</option>
						<option value="service">Service</option>
					</Select>
				</FormControl>
			</HStack>

			<FormControl id="description" isInvalid={errors.description}>
				<FormLabel>Description</FormLabel>
				<Textarea
					{...register("description")}
					placeholder="Describe what your app does"
				/>
				{errors.description && (
					<FormErrorMessage>{errors.description?.message}</FormErrorMessage>
				)}
			</FormControl>

			<FormControl as="fieldset" my="2">
				<FormLabel as="legend" mt="2" color="gray.500">
					Stores
				</FormLabel>

				<HStack>
					<FormControl id="android" isInvalid={!!errors["apps.android"]}>
						<FormLabel>Google Play</FormLabel>
						<Input
							{...register("apps.android")}
							placeholder="Google Play link to your app"
						/>
						{errors["apps.android"] && (
							<FormErrorMessage>
								{errors["apps.android"]?.message}
							</FormErrorMessage>
						)}
					</FormControl>

					<FormControl id="ios" isInvalid={!!errors["apps.ios"]}>
						<FormLabel>App Store</FormLabel>
						<Input
							{...register("apps.ios")}
							placeholder="App Store link to your app"
						/>
					</FormControl>
				</HStack>
			</FormControl>

			<FormControl as="fieldset" my="2">
				<FormLabel as="legend" mt="2" color="gray.500">
					Social Networks
				</FormLabel>

				<FormControl
					id="facebook"
					isInvalid={!!errors["socials.facebook"]}
					my="1"
				>
					<InputGroup>
						<InputLeftAddon children="https://facebook.com/" />
						<Input
							{...register("socials.facebook")}
							placeholder="Facebook account"
						/>
					</InputGroup>
				</FormControl>

				<FormControl
					id="twitter"
					isInvalid={!!errors["socials.twitter"]}
					my="1"
				>
					<InputGroup>
						<InputLeftAddon children="https://twitter.com/" />
						<Input
							{...register("socials.twitter")}
							placeholder="Twitter account"
						/>
					</InputGroup>
				</FormControl>
			</FormControl>

			<Button
				type="submit"
				size="lg"
				colorScheme="purple"
				isFullWidth
				// disabled={!isValid}
			>
				Submit
			</Button>
		</form>
	)
}

export default AppForm
