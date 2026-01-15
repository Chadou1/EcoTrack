document.getElementById("ecoForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const transport = parseInt(document.getElementById("transport").value);
    const food = parseInt(document.getElementById("food").value);
    const digital = parseInt(document.getElementById("digital").value);
    const energy = parseInt(document.getElementById("energy").value);

    const totalImpact = transport + food + digital + energy;
    const score = Math.max(0, 100 - totalImpact);

    document.getElementById("result").classList.remove("hidden");
    document.getElementById("scoreValue").textContent = score + " / 100";

    let interpretation = "";
    let tips = "";

    if (score > 70) {
        interpretation = "Faible impact écologique. Excellent !";
    } else if (score > 40) {
        interpretation = "Impact écologique moyen. Des améliorations sont possibles.";
    } else {
        interpretation = "Impact écologique élevé. Des changements sont recommandés.";
    }

    if (transport >= 25) {
        tips += "Réduire l’usage de la voiture ou de l’avion.<br>";
    }
    if (food >= 25) {
        tips += "Diminuer la consommation de viande.<br>";
    }
    if (digital >= 15) {
        tips += "Limiter le streaming et les usages intensifs.<br>";
    }
    if (energy >= 25) {
        tips += "Passer à une énergie plus propre.<br>";
    }

    document.getElementById("interpretation").innerHTML = interpretation;
    document.getElementById("tips").innerHTML = "<strong>Propositions :</strong><br>" + tips;
});
