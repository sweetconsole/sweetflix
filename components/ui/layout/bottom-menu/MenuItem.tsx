import {FC} from "react"
import {IMenuItemProps} from "./menu.interface";
import {Pressable} from "react-native";
import {Feather} from "@expo/vector-icons";
import {getColor} from "../../../../config/colors.config";

const MenuItem: FC<IMenuItemProps> = ({currentRoute, navigation, item}) => {
  const isActive = currentRoute == item.path

	return (
		<Pressable className="items-center w-[20%]" onPress={() => navigation(item.path)}>
      <Feather name={item.iconName} size={26} color={isActive ? getColor("primary") : getColor("secondaryLight")} />
    </Pressable>
	)
}

export default MenuItem