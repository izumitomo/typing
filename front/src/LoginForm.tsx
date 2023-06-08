import { useForm, SubmitHandler } from "react-hook-form";
import { Box, Button, TextField } from "@mui/material";

// formで利用する値のtype指定
type LoginForm = {
	name: string;
	// password: string;
};

export const LoginForm = ({
	updateName,
}: {
	updateName: (name: string) => void;
}) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<LoginForm>();

	console.log(watch("name"));

	const onSubmit: SubmitHandler<LoginForm> = (data) => {
		console.log(data);
		updateName(data.name);
	};

	return (
		<Box
			sx={{
				width: 500,
				maxWidth: "100%",
			}}
		>
			<TextField
				fullWidth
				label="Your Name?"
				{...register("name", { minLength: 3, maxLength: 15 })}
				color="secondary"
				inputProps={{ style: { color: "white" } }}
				// error={"name" in errors}
				// helperText={errors.name?.message}
			>
				{errors.name && <p>3文字以上で入力してください</p>}
				{errors.name?.type === "maxLength" && (
					<p>15文字以下で入力してください</p>
				)}
			</TextField>
			<Button
				color="warning"
				variant="contained"
				size="large"
				onClick={handleSubmit(onSubmit)}
			>
				作成
			</Button>
		</Box>
	);
};
