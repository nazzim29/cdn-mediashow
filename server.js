require('dotenv').config()

const express = require("express");
const app = express();
const ejs = require("ejs");

const {MongoClient} = require('mongodb')

const client = new MongoClient(process.env.MONGO_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use("/static",express.static("public"));
app.get("/", async (req, res) => {
    const uuid = req.query.t
    if (!uuid) return res.status(405).send('Bad Request')
    try {
			await client.connect();
			const collection = client.db("mow").collection("scenarios");
        const scenario = await collection.findOne({ uuid });
        console.log(scenario)
			const dynamicContent = await ejs.renderFile("template.js", {
				/* data */
                staticIndexUrl: "/static/index.js",
                scenario
			});
			res.setHeader("Content-Type", "text/javascript");
			res.send(dynamicContent);
	} catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
	} finally {
		await client.close();
	}
	
});

app.get("/devhtml", (req, res) => {
    res.setHeader("Content-Type", "text/html"); 	//set content-type header to html
    res.sendFile(__dirname + "/index.html"); //send the html file from the current directory of the app module as the response body
})

app.listen(3000, () => {
	console.log("Server is listening on port 3000");
});