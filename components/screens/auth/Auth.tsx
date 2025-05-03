import {FC, useState} from "react"
import {View, Text, Pressable} from "react-native";
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuthFormData} from "../../../shared/types/auth.interface";
import {Button, Loader} from "../../ui";

const Auth: FC = () => {
	const [isRegistration, setIsRegistration] = useState(false)
	const isLoading = false

	const {handleSubmit, reset, control} = useForm<IAuthFormData>({
		mode: "onChange"
	})

	const onSubmit: SubmitHandler<IAuthFormData> = ({email, password}) => {

	}

	return (
		<View className="mx-2 items-center justify-center h-full">
			<View className="w-9/12">
				<Text className="text-center text-[#f2e8cf] text-4xl font-bold mb-2.5">
					{isRegistration ? "Register" : "Login"}
				</Text>
				{isLoading ? (<Loader />) : (
					<>
						<Button onPress={handleSubmit(onSubmit)} icon={"film"}>
							Go to watch
						</Button>

						<Pressable onPress={() => setIsRegistration(!isRegistration)}>
							<Text className="text-center text-[#f2e8cf] opacity-50 text-xl mt-4">
								{isRegistration ? "Login" : "Register"}
							</Text>
						</Pressable>
					</>
				)}
			</View>
		</View>
	)
}

export default Auth