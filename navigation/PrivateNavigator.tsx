import {FC} from "react"
import {TypeRootStackParamList} from "./navigation.types";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {routes} from "./user.routes";
import {useAuth} from "../hooks/useAuth";
import {Screen404, Auth, Home} from "../components/screens";
import {getColor} from "../config/colors.config";

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const PrivateNavigator: FC = () => {
  const {user} = useAuth()

	return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: getColor("secondaryDark")
      }
    }}>
      {user ? (
        routes.map(route => user.isAdmin || !route.isAdmin? (
          <Stack.Screen key={route.name} {...route} />
        ) : (
          <Stack.Screen key="Screen404" name="Screen404" component={Screen404} />
        ))
      ): (
        <Stack.Screen key="Auth" name="Auth" component={Auth} />
      )}
    </Stack.Navigator>
	)
}

export default PrivateNavigator