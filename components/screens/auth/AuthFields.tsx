import {FC} from "react"
import {IAuthFormData} from "../../../shared/types/auth.interface";
import {Control} from "react-hook-form";
import {Field} from "../../ui";
import {validEmail} from "../../../shared/regex";
import {getColor} from "../../../config/colors.config";

interface IAuthFields {
	control: Control<IAuthFormData>
	isPassRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({control, isPassRequired}) => {
	return (
		<>
			<Field<IAuthFormData>
				placeholder="Введите email"
				placeholderTextColor={getColor("secondaryLight")}
				control={control}
				name="email"
				rules={{required: "Вы не ввели электронную почту!",
								pattern: {value: validEmail, message: "Укажите корректную электронную почту!"}
				}}
				keyboardType="email-address"
			/>

			<Field<IAuthFormData>
				placeholder="Введите пароль"
				placeholderTextColor={getColor("secondaryLight")}
				control={control}
				name="password"
				rules={isPassRequired ? {
					required: "Вы не ввели пароль!",
					minLength: {value: 6, message: "Пароль должен иметь минимум 6 символов!"}
				} : {}}
			/>
		</>
	)
}

export default AuthFields