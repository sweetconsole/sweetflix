import RnToast, {BaseToast} from "react-native-toast-message"
import {FC} from "react"
import {getColor} from "../../config/colors.config";

const options = (primaryColor: string) => ({
	style: {backgroundColor: getColor("secondary"), borderColor: primaryColor},
	textStyle: {
		color: getColor("white"),
		fontSize: 16
	},
	text2Style: {
		fontSize: 14,
	}
})

const Toast: FC = () => {
	return (
		<RnToast topOffset={50} config={{
			success: props => <BaseToast {...props} {...options("#67e769")} />,
			info: props => <BaseToast {...props} {...options("#65d4ff")} />,
			error: props => <BaseToast {...props} {...options("#ff4949")} />,
		}} />
	)
}

export default Toast