import { useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProTip from "./ProTip";
import { useMedia } from "react-use";

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}.
		</Typography>
	);
}

export default function App() {
	const width = useMedia("(max-width: 400px)");
	useEffect(() => {
		const ref = document.querySelector("meta[name='viewport']");
		ref?.setAttribute("content", width ? "width=400,shrink-to-fit=no, maximum-scale=0.8" : "initial-scale=1, width=device-width");
	}, []);

	return (
		<Container maxWidth="sm">
			<Box sx={{ my: 4 }}>
				<Typography variant="h4" component="h1" gutterBottom>
					ViteJS App example with TypeScript
				</Typography>
				<ProTip />
				<Copyright />
			</Box>
		</Container>
	);
}
