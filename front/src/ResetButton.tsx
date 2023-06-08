export const ResetButton = ({ reset }: { reset: () => void }) => (
	<>
		<button onClick={() => reset()}>Reset</button>
	</>
);
