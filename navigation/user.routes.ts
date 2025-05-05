import {IRoute} from "./navigation.types";
import {adminRoutes} from "./admin.routes";
import {Home, Trending, Search, Favorites, Profile, Auth} from "../components/screens";

export const userRoutes: IRoute[] = [
	{
		name: "Home",
		component: Home
	},
	{
		name: "Trending",
		component: Trending
	},
	{
		name: "Search",
		component: Search
	},
	{
		name: "Favorites",
		component: Favorites
	},
	{
		name: "Profile",
		component: Profile
	},
	{
		name: "Auth",
		component: Auth
	},
]

export const routes = [
	...userRoutes, ...adminRoutes
]