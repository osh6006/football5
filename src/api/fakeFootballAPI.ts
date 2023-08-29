import axios from "axios";

export async function getOneLatestMatches() {
  return (await axios.get("/apifootball/latestMatches.json")).data.response;
}

export async function getTwoNextMatches() {
  return (await axios.get("/apifootball/nextMatches.json")).data.response;
}

export async function getOneLiveMatch() {
  return (await axios.get("/apifootball/latestMatches.json")).data.response;
}

export async function getStandings() {
  return (await axios.get("/apifootball/standings.json")).data.response;
}

export async function getTopScorer() {
  return (await axios.get("/apifootball/topScorer.json")).data.response;
}

export async function getLiveScore() {
  return (await axios.get("/apifootball/liveData.json")).data.response;
}
