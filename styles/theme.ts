import { extendTheme } from "@chakra-ui/react"
import { colors } from "./colors"

export const theme = extendTheme({
	colors: colors,
	fonts: {
		heading: "Inter",
		body: "Inter",
	},
	components: {
		Button: {
			variants: {
				primary: {
					bg: "primary",
					color: "white",
				},
			},
		},
		Input: {
			variants: {
				outline: {
					field: {
						_focus: {
							borderColor: "primary",
						},
					},
				},
			},
		},
	},
})
