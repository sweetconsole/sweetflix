import {TypeFeatherIconNames} from "../../../../shared/types/icon.types"
import {TypeRootStackParamList} from "../../../../navigation/navigation.types"

export type TypeNavigate = (screenName: keyof TypeRootStackParamList) => void

export interface IMenuItem {
	iconName: TypeFeatherIconNames
	path: keyof TypeRootStackParamList
}

export interface IMenuItemProps {
	item: IMenuItem
	navigation: TypeNavigate
	currentRoute?: string
}

export interface IBottomMenu {
	navigation: TypeNavigate
	currentRoute?: string
}