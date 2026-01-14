import { PuffLoader } from "react-spinners";

const Loading = () => {
	return (
		<div className="min-h-full min-w-full flex justify-center items-center">
			<PuffLoader color="purple" size={120}/>
		</div>
	);
};

export default Loading;
