import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ResetButton } from "./ResetButton";
import { LoginForm } from "./LoginForm";

const App = () => {
	// const [login, setLogin] = useState<boolean>(false);
	const reset = (): void => {
		setName("");
	};
	const [name, setName] = useState<string>("");
	const updateName = (name: string): void => {
		setName(name);
	};

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<div>
				{name == "" ? (
					<LoginForm updateName={updateName} />
				) : (
					<h2>Your Name: {name}</h2>
				)}
			</div>
			<ResetButton reset={reset} />

			{/* <h1> {user.name}</h1> */}

			{/* <img
				className="avatar"
				src={user.imageUrl}
				style={{ width: user.imageSize, height: user.imageSize }}
			/> */}
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
};

export default App;
