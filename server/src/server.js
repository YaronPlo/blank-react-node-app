import http from "http";
import app from "./app.js";

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

const startServer = () => {
	server.listen(PORT, () => {
		console.log(`Server starterd on Port: ${PORT}...`);
	});
};

//Initial server start.
//For more On-load server functionality add in the startServer func..
startServer();
