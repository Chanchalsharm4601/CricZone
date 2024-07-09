async function getMatchData() {
    try {
        const response = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=aa9d6460-1ee8-4b0c-9b94-2c4978966bb0&offset=0");
        const data = await response.json();

        if (data.status !== "success") return;

        const matchesList = data.data;

        if (!matchesList) return [];

        const relevantData = matchesList.map(match => {
        return `<div> 
        <strong>Name:</strong> ${match.name}<br>
                    <strong>Status:</strong> ${match.status}<br>
                    <strong>Score:</strong> ${match.score ? match.score.map(s => `${s.inning}: ${s.r}/${s.w} in ${s.o} overs`).join(', ') : 'N/A'}</div>`});
        console.log({relevantData});

        document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match}</li>`).join("");
        return relevantData;
    } catch (e) {
        console.log(e);
    }
}

getMatchData();
