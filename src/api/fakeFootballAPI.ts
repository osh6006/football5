import axios from "axios";

export async function getOneLatestMatches() {
  return (await axios.get("/apifootball/latestMatches.json")).data.response;
}

export async function getTwoNextMatches() {
  return (await axios.get("/apifootball/nextMatches.json")).data.response;
}
