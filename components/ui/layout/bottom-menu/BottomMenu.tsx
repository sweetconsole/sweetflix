import {FC} from "react"
import {IBottomMenu} from "./menu.interface";
import {View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import MenuItem from "./MenuItem";
import {menuItems} from "./menu.data";

const BottomMenu: FC<IBottomMenu> = (props) => {
	const {bottom} = useSafeAreaInsets()
	
	return (
		<View className="pt-5 px-2 flex-row justify-between items-center w-full border-t-2 border-t-solid border-t-[#a7c957] bg-[#386641]" style={{paddingBottom: bottom + 10}}>
			{menuItems.map(item => (
				<MenuItem key={item.path} item={item} {...props} />
			))}
		</View>
	)
}

export default BottomMenu