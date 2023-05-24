import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Box from '@mui/material/Box';
import { TextField, InputLabel } from '@mui/material';
import './App.css';

const textList = [
	'Hello World',
	'This is Happy Hack TyPing',
	'def blank\n  hogehoge\nend',
];

function App() {
	const [count, setCount] = useState(0);

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
				<h1>Happy Hack TyPing</h1>
				<Box
					component="form"
					sx={{
						'& .MuiTextField-root': { m: 1, width: '45ch' },
					}}
					noValidate
					autoComplete="off"
				>
					<TextField
						fullWidth
						placeholder="Hello World"
						inputProps={{
							style: { color: 'white' },
						}}
						id="outlined-multiline-static"
						focused
						color="secondary"
						// label="Multiline"
						multiline
						rows={4}
					/>
				</Box>
			</div>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
