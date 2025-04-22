import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

import {db} from "./util/FirebaseInit.js";
import { collection, getDocs } from "firebase/firestore"

const app = express()
const port = 8080;

app.use(express.json())
app.use(
	cors({
		origin: "http://localhost:3000"
	})
)

// Create a route at http://localhost:8080/testRoute. You can try it with your browser!
app.get("/", async (req, res) => {
	res.send("Hello World!");
});

// Get all watches
app.get("/testimonials", async (req, res) => {
	console.log("getting all testimonials")
	const collectionRef = collection(db, "Testimonials");
	const collectionSnap = await getDocs(collectionRef)
	const docs = []
	collectionSnap.forEach((doc) => {
		docs.push({
			id: doc.id,
			name: doc.data().name,
			title: doc.data().title,
			status: doc.data().status
		})
	})
	res.send(docs)
})

// Add a new testimonial
app.post("/testimonials", async (req, res) => {
	console.log("adding new testimonial")
	const { name, bio, message } = req.body
	const collectionRef = collection(db, "Testimonials");
	const newDoc = await addDoc(collectionRef, {
		name,
		bio,
		message,
		status: "pending"
	})
	res.send({
		id: newDoc.id,
		name,
		bio,
		message,
		status: "pending"
	})
})

// Update a testimonial
app.put("/testimonials/:id", async (req, res) => {
	console.log("updating testimonial")
	const { id } = req.params
	const { name, bio, message, status } = req.body
	const docRef = doc(db, "Testimonials", id)
	await updateDoc(docRef, {
		name,
		bio,
		message,
		status
	})
	res.send({
		id,
		name,
		bio,
		message,
		status
	})
})

// Delete a testimonial
app.delete("/testimonials/:id", async (req, res) => {
	console.log("deleting testimonial")
	const { id } = req.params
	const collectionRef = collection(db, "Testimonials");
	const docRef = doc(db, "Testimonials", id)
	await deleteDoc(docRef)
	res.send({ id })
})

function start() {
	app.listen(port, () => {
		console.log(`Started listening on http://localhost:${port}`)
	})
}

start()
