import React from "react";
import { FormErrorMsg, InputContainer } from "./Input.styled";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
	register: UseFormRegisterReturn;
	name: string;
	type: string;
	required?: boolean;
	error?: FieldError;
}

export const Input: React.FC<InputProps> = ({
	register,
	name,
	type,
	error,
	required = false,
}) => {
	return (
		<InputContainer>
			<label htmlFor={name}>{name}</label>
			<input id={name} {...register} required={required} type={type} />
			{error && <FormErrorMsg>{error.message}</FormErrorMsg>}
		</InputContainer>
	);
};
