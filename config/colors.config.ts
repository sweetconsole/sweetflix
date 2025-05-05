
const colors = {
	primary: '#bc4749',
	secondaryLight: '#a7c957',
	secondary: "#6a994e",
	secondaryDark: '#386641',
	white: "#f2e8cf",
	yellow: '#00ff00',
}

export const getColor = (color: keyof typeof colors) => colors[color]