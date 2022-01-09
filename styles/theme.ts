import { extendTheme } from "@chakra-ui/react"
import { colors } from "./colors"

export const theme = extendTheme({
	colors: colors,
	fonts: {
		heading:
			"Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
		body: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
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
						_invalid: {
							borderColor: "red.500",
							boxShadow: `0 0 0 1px red`,
						},
					},
				},
			},
		},
		Textarea: {
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
		Select: {
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
