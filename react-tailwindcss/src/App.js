import React from "react";
import "./assets/main.css";
import bg from "./assets/background-web-1.png";
import doc from "./assets/icon@2x.png";
import uploadLarge from "./assets/upload@2x.png";
import backLarge from "./assets/back@2x.png";
import forwardLarge from "./assets/forward@2x.png";
import "./assets/style.css";

function App() {
	return (
		<div className="App bg-gray-500 w-100">
			<div
				className="lg:flex content-center rounded-lg justify-center"
				style={{ height: "36%", backgroundColor: "#fff" }}
			>
				<div
					className="lg:block md:hidden sm:hidden lg:w-2/5 rounded-tl-lg rounded-bl-lg p-16 bg-style"
					style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover",backgroundColor: "#45ab93", clipPath: "polygon(0 0, 100% 0%, 80% 100%, 0% 100%)" }}
				>
					<center>
						<div
						className="rounded-full bg-white flex items-center justify-center p-12 mt-8"
						style={{ height: "100%",
						width: "fit-content",
						marginTop: "56px",
						}}>
							<img src={doc} alt="Doc" style={{width: "4rem", height: "4rem"}} />
						</div>
					</center>
				</div>
				

				<div
					className="lg:hidden md:w-100 sm:w-100 rounded-tl-lg rounded-bl-lg p-16 lg:bg-style md:bg-style-res"
					style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover",backgroundColor: "#45ab93" }}
				>
					<center>
						<div
						className="rounded-full bg-white flex items-center justify-center p-12 mt-8"
						style={{ height: "100%",
						width: "fit-content",
						marginTop: "56px",
						}}>
							<img src={doc} alt="Doc" style={{width: "4rem", height: "4rem"}} />
						</div>
					</center>
				</div>


				<div className="lg:w-3/5 w-100 bg-white rounded-br-lg rounded-tr-lg p-16">
					<center>
						<p className="font-bold pb-4">Upload your reports</p>
						<div
							className="border-2 border-dashed p-4"
						>
							<img src={uploadLarge} alt="Upload" width="128" />
							<p className="font-bold">Some text here</p>
							<small>Lorem Ipsum</small>
						</div>
						<div className="pt-4">
							<button
								className="mr-1 bg-transparent rounded px-6 py-2"
								style={{
									border: "1px solid #52ab96",
									color: "#52ab96",
								}}
							>
								Pass
							</button>
							<button
								className="ml-1 rounded px-6 py-2"
								style={{
									border: "1px solid #52ab96",
									color: "#fff",
									backgroundColor: "#52ab96",
								}}
							>
								Submit
							</button>
						</div>
					</center>
				</div>
			
				<div
					className="absolute bg-white p-4 rounded-full shadow-xs"
					style={{ left: "8px", top: "24%" }}
				>
					<img src={backLarge} width="16" />
				</div>
				<div
					className="absolute bg-white p-4 rounded-full shadow-xs"
					style={{ right: "8px", top: "24%" }}
				>
					<img src={forwardLarge} width="16" />
				</div>
			</div>
		</div>
	);
}

export default App;
