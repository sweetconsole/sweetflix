import {FC} from "react"
import {Pressable, Text, View} from "react-native";
import {useTypedNavigation} from "../../../hooks/useTypedNavigation";

const Home: FC = () => {
	const {navigate} = useTypedNavigation()

	return (
		<View>
			<Text>Home</Text>

			<Pressable onPress={() => navigate("Auth")}>
				<Text style={{color: "f4d58d"}}>Go to login</Text>
			</Pressable>
		</View>
	)
}

export default Home