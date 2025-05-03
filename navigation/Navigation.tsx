import {FC} from "react"
import {NavigationContainer} from "@react-navigation/native";
import {TypeRootStackParamList} from "./navigation.types";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {userRoutes} from "./user.routes";

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

const Navigation: FC = () => {
	return (
		<NavigationContainer>
      <Stack.Navigator screenOptions={{
				headerShown: false,
				contentStyle: {
					backgroundColor: "#386641"
				}
			}}>
				{userRoutes.map(route => (
					<Stack.Screen key={route.name} {...route} />
				))}
			</Stack.Navigator>
    </NavigationContainer>
	)
}

export default Navigation