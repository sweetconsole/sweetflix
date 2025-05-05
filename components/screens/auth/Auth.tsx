import {FC, useState} from "react"
import {View, Text, Pressable} from "react-native";
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuthFormData} from "../../../shared/types/auth.interface";
import {Button, Loader, DismissKeyboard} from "../../ui";
import AuthFields from "./AuthFields";

const Auth: FC = () => {
	const [isRegistration, setIsRegistration] = useState(false)
	const isLoading = false

	const {handleSubmit, reset, control} = useForm<IAuthFormData>({
		mode: "onChange"
	})

	const onSubmit: SubmitHandler<IAuthFormData> = ({email, password}) => {
		console.log(email, password)
	}

	return (
		<DismissKeyboard>
			<View className="mx-2 items-center justify-center h-full">
				<View className="w-9/12">
					<Text className="text-center text-[#f2e8cf] text-4xl font-bold mb-4">
						{isRegistration ? "Регистрация" : "Авторизация"}
					</Text>
					{isLoading ? (<Loader />) : (
						<>
							<AuthFields control={control} isPassRequired />

							<Button onPress={handleSubmit(onSubmit)} icon={"film"}>Смотреть</Button>

							<Pressable onPress={() => setIsRegistration(!isRegistration)}>
								<Text className="text-center text-[#f2e8cf] opacity-75 text-xl mt-6">
									{isRegistration ? "Авторизоваться" : "Зарегистрироваться"}
								</Text>
							</Pressable>
						</>
					)}
				</View>
			</View>
		</DismissKeyboard>
	)
}

export default Auth