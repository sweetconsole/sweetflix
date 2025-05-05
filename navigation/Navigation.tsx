import {FC, useEffect, useState} from "react"
import {NavigationContainer, useNavigationContainerRef} from "@react-navigation/native";
import PrivateNavigator from "./PrivateNavigator";
import {useAuth} from "../hooks/useAuth";
import {BottomMenu} from "../components/ui";


const Navigation: FC = () => {
	const {user} = useAuth()
	const [currentRoute, setCurrentRoute] = useState<string|undefined>(undefined)
	const navigationRef = useNavigationContainerRef()

	useEffect(() => {
		const timeout = setTimeout(() => setCurrentRoute(navigationRef.getCurrentRoute()?.name), 100)

		return () => {
			clearTimeout(timeout)
		}
	}, []);

	useEffect(() => {
		const listener = navigationRef.addListener("state", () => setCurrentRoute(navigationRef.getCurrentRoute()?.name))

		return () => {
			navigationRef.removeListener("state", listener)
		}
	}, []);

	return (
		<>
			<NavigationContainer ref={navigationRef}>
				<PrivateNavigator />
			</NavigationContainer>

			{user && currentRoute && (
				<BottomMenu navigation={navigationRef.navigate} currentRoute={currentRoute} />
			)}
		</>
	)
}

export default Navigation