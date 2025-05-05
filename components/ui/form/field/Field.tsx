import {FC, JSX} from "react"
import {View, TextInput, Text} from "react-native"
import {IField} from "./field.interface";
import {Controller} from "react-hook-form";
import cn from "clsx";

const Field = <T extends Record<string, any>>({
	control, rules, name, className, ...rest
}: IField<T>): JSX.Element => {
	return (
		<Controller control={control} name={name} rules={rules} render={
			({field: {value, onChange, onBlur}, fieldState: {error}}) => <>
				<View className={cn(
					"bg-[#6a994e] w-full border-2 rounded-lg pb-1 pt-1.5 px-4 my-1.5",
					error ? "border-[#bc4749] border-2" : "border-transparent"
				)}>
					<TextInput autoCapitalize={"none"}
										 onChangeText={onChange}
										 onBlur={onBlur}
										 value={(value || "").toString()}
										 className="text-[#f2e8cf] text-base"
										 {...rest} />
					</View>
				{error && <Text className="text-[#bc4749] font-medium">{error.message}</Text>}
				</>
		} />
	)
}

export default Field