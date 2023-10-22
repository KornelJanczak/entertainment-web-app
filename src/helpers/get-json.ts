import { json } from "react-router-dom";

export default async function getJSON() {
  const response = await fetch("data.json");

  if (!response.ok) {
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    return response.json();
  }
}
