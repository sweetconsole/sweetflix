import {FC, PropsWithChildren} from "react"
import {Pressable, Text} from "react-native";
import {IButton} from "./button.interface";
import cn from "clsx"
import {LinearGradient} from "expo-linear-gradient";
import {Feather} from "@expo/vector-icons";

const Button: FC<PropsWithChildren<IButton>> = ({className, icon, children, ...rest}) => {
	return (
		<Pressable className={cn("self-center mt-3.5", className)} {...rest}>
			<LinearGradient start={{x: 0, y: 0.25}}
											end={{x: 1, y: 0.75}}
											className={cn("w-full py-3 px-8 items-center", {"flex-row": !!icon})}
											style={{borderRadius: 16}}
											colors={["#c44c4e", "#bc4749"]}>
				{icon && <Feather name={icon} size={18} color="#f2e8cf" />}

				<Text className={cn("text-[#f2e8cf] text-center font-medium text-lg", {"ml-2": !!icon})}>
					{children}
				</Text>
			</LinearGradient>
		</Pressable>
	)
}

export default Button