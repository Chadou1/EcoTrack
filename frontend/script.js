const QUESTION_SECTIONS = [
    {
        title: "🌍 Logement & Énergie",
        questions: [
            {
                text: "Type de logement ?",
                options: [
                    { label: "Appartement", points: 0 },
                    { label: "Maison mitoyenne", points: -1 },
                    { label: "Maison individuelle", points: -3 }
                ]
            },
            {
                text: "Superficie du logement ?",
                options: [
                    { label: "< 50 m²", points: 1 },
                    { label: "50–100 m²", points: 0 },
                    { label: "> 100 m²", points: -2 }
                ]
            },
            {
                text: "Mode de chauffage principal ?",
                options: [
                    { label: "Électricité verte", points: 3 },
                    { label: "Gaz", points: -2 },
                    { label: "Fioul", points: -5 },
                    { label: "Bois", points: 1 }
                ]
            },
            {
                text: "Isolation du logement ?",
                options: [
                    { label: "Très bonne", points: 3 },
                    { label: "Moyenne", points: 0 },
                    { label: "Mauvaise", points: -4 }
                ]
            },
            {
                text: "Température en hiver ?",
                options: [
                    { label: "≤ 19°C", points: 2 },
                    { label: "20–21°C", points: 0 },
                    { label: "≥ 22°C", points: -2 }
                ]
            },
            {
                text: "Climatisation en été ?",
                options: [
                    { label: "Non", points: 2 },
                    { label: "Occasionnelle", points: -1 },
                    { label: "Fréquente", points: -3 }
                ]
            },
            {
                text: "Électricité verte ?",
                options: [
                    { label: "Oui", points: 3 },
                    { label: "Partiellement", points: 1 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Appareils énergivores récents ?",
                options: [
                    { label: "Tous A+++", points: 2 },
                    { label: "Mixtes", points: 0 },
                    { label: "Anciens", points: -2 }
                ]
            },
            {
                text: "Veille des appareils coupée ?",
                options: [
                    { label: "Toujours", points: 2 },
                    { label: "Parfois", points: 0 },
                    { label: "Jamais", points: -1 }
                ]
            },
            {
                text: "Production d’énergie personnelle ?",
                options: [
                    { label: "Oui", points: 5 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Eau chaude :",
                options: [
                    { label: "Solaire", points: 3 },
                    { label: "Électrique", points: 0 },
                    { label: "Gaz", points: -1 }
                ]
            },
            {
                text: "Douches ou bains ?",
                options: [
                    { label: "Douches courtes", points: 2 },
                    { label: "Longues douches", points: 0 },
                    { label: "Bains fréquents", points: -2 }
                ]
            },
            {
                text: "Réducteurs de débit ?",
                options: [
                    { label: "Oui", points: 2 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Récupération d’eau de pluie ?",
                options: [
                    { label: "Oui", points: 2 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Lave-linge éco ?",
                options: [
                    { label: "Oui", points: 1 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Séchage naturel ?",
                options: [
                    { label: "Toujours", points: 2 },
                    { label: "Parfois", points: 0 },
                    { label: "Sèche-linge", points: -2 }
                ]
            },
            {
                text: "Nombre de personnes / logement ?",
                options: [
                    { label: "Optimisé", points: 1 },
                    { label: "Surdimensionné", points: -1 }
                ]
            },
            {
                text: "Domotique énergie ?",
                options: [
                    { label: "Oui", points: 1 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Double vitrage ?",
                options: [
                    { label: "Oui", points: 1 },
                    { label: "Non", points: -1 }
                ]
            },
            {
                text: "Audit énergétique réalisé ?",
                options: [
                    { label: "Oui", points: 1 },
                    { label: "Non", points: 0 }
                ]
            }
        ]
    },
    {
        title: "🚗 Transports",
        questions: [
            {
                text: "Moyen principal de transport ?",
                options: [
                    { label: "Marche/vélo", points: 5 },
                    { label: "Transports publics", points: 3 },
                    { label: "Voiture", points: -3 }
                ]
            },
            {
                text: "Type de voiture ?",
                options: [
                    { label: "Électrique", points: 2 },
                    { label: "Hybride", points: 1 },
                    { label: "Essence", points: -2 },
                    { label: "Diesel", points: -3 }
                ]
            },
            {
                text: "Nombre de km/an ?",
                options: [
                    { label: "< 5 000", points: 2 },
                    { label: "5 000–15 000", points: 0 },
                    { label: "> 15 000", points: -3 }
                ]
            },
            {
                text: "Covoiturage ?",
                options: [
                    { label: "Souvent", points: 2 },
                    { label: "Parfois", points: 1 },
                    { label: "Jamais", points: 0 }
                ]
            },
            {
                text: "Avion par an ?",
                options: [
                    { label: "0", points: 5 },
                    { label: "1–2", points: -2 },
                    { label: "> 3", points: -5 }
                ]
            },
            {
                text: "Train préféré à l’avion ?",
                options: [
                    { label: "Oui", points: 3 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Télétravail ?",
                options: [
                    { label: "> 3j/semaine", points: 3 },
                    { label: "Occasionnel", points: 1 },
                    { label: "Jamais", points: 0 }
                ]
            },
            {
                text: "Vélo électrique ?",
                options: [
                    { label: "Oui", points: 2 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Entretien du véhicule ?",
                options: [
                    { label: "Régulier", points: 1 },
                    { label: "Rare", points: -1 }
                ]
            },
            {
                text: "Conduite éco ?",
                options: [
                    { label: "Oui", points: 2 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Véhicule partagé ?",
                options: [
                    { label: "Oui", points: 2 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Scooter thermique ?",
                options: [
                    { label: "Oui", points: -2 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Scooter électrique ?",
                options: [
                    { label: "Oui", points: 1 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Livraison express fréquente ?",
                options: [
                    { label: "Oui", points: -2 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Déplacements optimisés ?",
                options: [
                    { label: "Oui", points: 1 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Pneus basse consommation ?",
                options: [
                    { label: "Oui", points: 1 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Véhicule surdimensionné ?",
                options: [
                    { label: "Oui", points: -2 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Marche quotidienne ?",
                options: [
                    { label: "Oui", points: 1 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Carburant bio ?",
                options: [
                    { label: "Oui", points: 1 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Usage transports doux ?",
                options: [
                    { label: "Régulier", points: 2 },
                    { label: "Rare", points: 0 }
                ]
            }
        ]
    },
    {
        title: "🍽️ Alimentation",
        questions: [
            {
                text: "Régime alimentaire ?",
                options: [
                    { label: "Vegan", points: 5 },
                    { label: "Végétarien", points: 4 },
                    { label: "Flexitarien", points: 2 },
                    { label: "Omnivore", points: 0 }
                ]
            },
            {
                text: "Viande rouge ?",
                options: [
                    { label: "Jamais", points: 3 },
                    { label: "1–2/semaine", points: -1 },
                    { label: "Souvent", points: -4 }
                ]
            },
            {
                text: "Produits locaux ?",
                options: [
                    { label: "Majoritairement", points: 3 },
                    { label: "Parfois", points: 1 },
                    { label: "Rarement", points: 0 }
                ]
            },
            {
                text: "Produits bio ?",
                options: [
                    { label: "Souvent", points: 2 },
                    { label: "Parfois", points: 1 },
                    { label: "Jamais", points: 0 }
                ]
            },
            {
                text: "Fruits/légumes de saison ?",
                options: [
                    { label: "Oui", points: 2 },
                    { label: "Non", points: -1 }
                ]
            },
            {
                text: "Gaspillage alimentaire ?",
                options: [
                    { label: "Aucun", points: 3 },
                    { label: "Peu", points: 1 },
                    { label: "Beaucoup", points: -3 }
                ]
            },
            {
                text: "Eau en bouteille ?",
                options: [
                    { label: "Jamais", points: 2 },
                    { label: "Parfois", points: -1 },
                    { label: "Souvent", points: -3 }
                ]
            },
            {
                text: "Emballages plastiques ?",
                options: [
                    { label: "Minimisés", points: 2 },
                    { label: "Normaux", points: 0 },
                    { label: "Excessifs", points: -2 }
                ]
            },
            {
                text: "Cuisine maison ?",
                options: [
                    { label: "Souvent", points: 2 },
                    { label: "Rare", points: 0 }
                ]
            },
            {
                text: "Produits ultra-transformés ?",
                options: [
                    { label: "Rare", points: 2 },
                    { label: "Souvent", points: -2 }
                ]
            },
            {
                text: "Poisson durable ?",
                options: [
                    { label: "Oui", points: 1 },
                    { label: "Non", points: -1 }
                ]
            },
            {
                text: "Produits laitiers ?",
                options: [
                    { label: "Peu", points: 1 },
                    { label: "Beaucoup", points: -1 }
                ]
            },
            {
                text: "Achat en vrac ?",
                options: [
                    { label: "Oui", points: 2 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Compost ?",
                options: [
                    { label: "Oui", points: 3 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Restes réutilisés ?",
                options: [
                    { label: "Toujours", points: 2 },
                    { label: "Parfois", points: 1 },
                    { label: "Jamais", points: 0 }
                ]
            },
            {
                text: "Jardin potager ?",
                options: [
                    { label: "Oui", points: 3 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Boissons industrielles ?",
                options: [
                    { label: "Rare", points: 1 },
                    { label: "Fréquentes", points: -1 }
                ]
            },
            {
                text: "Fast-food ?",
                options: [
                    { label: "Jamais", points: 2 },
                    { label: "Parfois", points: -1 },
                    { label: "Souvent", points: -3 }
                ]
            },
            {
                text: "Café/thé équitable ?",
                options: [
                    { label: "Oui", points: 1 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Livraison repas ?",
                options: [
                    { label: "Rare", points: 0 },
                    { label: "Fréquente", points: -2 }
                ]
            }
        ]
    },
    {
        title: "🛍️ Consommation & Déchets",
        questions: [
            {
                text: "Achats impulsifs ?",
                options: [
                    { label: "Jamais", points: 2 },
                    { label: "Parfois", points: 0 },
                    { label: "Souvent", points: -2 }
                ]
            },
            {
                text: "Seconde main ?",
                options: [
                    { label: "Souvent", points: 3 },
                    { label: "Parfois", points: 1 },
                    { label: "Jamais", points: 0 }
                ]
            },
            {
                text: "Réparation plutôt que remplacement ?",
                options: [
                    { label: "Oui", points: 3 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Recyclage ?",
                options: [
                    { label: "Toujours", points: 3 },
                    { label: "Partiel", points: 1 },
                    { label: "Jamais", points: -3 }
                ]
            },
            {
                text: "Tri sélectif ?",
                options: [
                    { label: "Oui", points: 2 },
                    { label: "Non", points: -2 }
                ]
            },
            {
                text: "Déchets électroniques recyclés ?",
                options: [
                    { label: "Oui", points: 2 },
                    { label: "Non", points: -2 }
                ]
            },
            {
                text: "Fast fashion ?",
                options: [
                    { label: "Jamais", points: 3 },
                    { label: "Parfois", points: -1 },
                    { label: "Souvent", points: -3 }
                ]
            },
            {
                text: "Vêtements durables ?",
                options: [
                    { label: "Oui", points: 2 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Produits jetables ?",
                options: [
                    { label: "Rare", points: 2 },
                    { label: "Souvent", points: -2 }
                ]
            },
            {
                text: "Produits réutilisables ?",
                options: [
                    { label: "Oui", points: 2 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Téléphone gardé >3 ans ?",
                options: [
                    { label: "Oui", points: 2 },
                    { label: "Non", points: -1 }
                ]
            },
            {
                text: "Nombre d’appareils électroniques ?",
                options: [
                    { label: "Raisonnable", points: 0 },
                    { label: "Excessif", points: -2 }
                ]
            },
            {
                text: "Don plutôt que jeter ?",
                options: [
                    { label: "Oui", points: 2 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Impression papier ?",
                options: [
                    { label: "Rare", points: 1 },
                    { label: "Souvent", points: -1 }
                ]
            },
            {
                text: "Papier recyclé ?",
                options: [
                    { label: "Oui", points: 1 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Produits ménagers écolos ?",
                options: [
                    { label: "Oui", points: 2 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Cosmétiques solides ?",
                options: [
                    { label: "Oui", points: 1 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Emballages réutilisés ?",
                options: [
                    { label: "Oui", points: 1 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Consommation numérique raisonnée ?",
                options: [
                    { label: "Oui", points: 1 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Objets connectés inutiles ?",
                options: [
                    { label: "Non", points: 1 },
                    { label: "Oui", points: -1 }
                ]
            }
        ]
    },
    {
        title: "🌱 Engagement & Habitudes",
        questions: [
            {
                text: "Sensibilisation entourage ?",
                options: [
                    { label: "Oui", points: 2 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Soutien associations écolo ?",
                options: [
                    { label: "Oui", points: 2 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Vote écologique ?",
                options: [
                    { label: "Oui", points: 2 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Banque éthique ?",
                options: [
                    { label: "Oui", points: 2 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Compensation carbone ?",
                options: [
                    { label: "Oui", points: 2 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Réduction consommation globale ?",
                options: [
                    { label: "Oui", points: 3 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Participation actions locales ?",
                options: [
                    { label: "Oui", points: 2 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Nettoyage nature ?",
                options: [
                    { label: "Oui", points: 2 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Jardin biodiversité ?",
                options: [
                    { label: "Oui", points: 2 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Zéro déchet ?",
                options: [
                    { label: "Oui", points: 4 },
                    { label: "En transition", points: 2 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Apprentissage écologie ?",
                options: [
                    { label: "Oui", points: 1 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Partage d’objets ?",
                options: [
                    { label: "Oui", points: 2 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Achats responsables ?",
                options: [
                    { label: "Oui", points: 2 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Limitation numérique ?",
                options: [
                    { label: "Oui", points: 1 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Choix fournisseurs éthiques ?",
                options: [
                    { label: "Oui", points: 2 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Réduction viande volontaire ?",
                options: [
                    { label: "Oui", points: 2 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Refus publicité papier ?",
                options: [
                    { label: "Oui", points: 1 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Soutien circuits courts ?",
                options: [
                    { label: "Oui", points: 2 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Objectifs écolos personnels ?",
                options: [
                    { label: "Oui", points: 2 },
                    { label: "Non", points: 0 }
                ]
            },
            {
                text: "Évolution des habitudes ?",
                options: [
                    { label: "Forte", points: 3 },
                    { label: "Modérée", points: 1 },
                    { label: "Aucune", points: 0 }
                ]
            }
        ]
    }
];

const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

const introPanel = document.getElementById("intro");
const questionPanel = document.getElementById("questionPanel");
const resultPanel = document.getElementById("resultPanel");

const sectionTitle = document.getElementById("sectionTitle");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");

const scoreValue = document.getElementById("scoreValue");
const interpretation = document.getElementById("interpretation");
const pointsSummary = document.getElementById("pointsSummary");
const tips = document.getElementById("tips");

const flattenedQuestions = QUESTION_SECTIONS.flatMap((section) =>
    section.questions.map((question) => ({
        sectionTitle: section.title,
        text: question.text,
        options: question.options
    }))
);

const totalQuestions = flattenedQuestions.length;
let currentIndex = 0;
let answers = Array(totalQuestions).fill(null);

const formatPoints = (points) => (points > 0 ? `+${points}` : `${points}`);

const setActivePanel = (panel) => {
    [introPanel, questionPanel, resultPanel].forEach((element) => {
        element.classList.toggle("active", element === panel);
    });
};

const renderQuestion = () => {
    const current = flattenedQuestions[currentIndex];
    sectionTitle.textContent = current.sectionTitle;
    questionText.textContent = current.text;
    optionsContainer.innerHTML = "";

    current.options.forEach((option, optionIndex) => {
        const optionId = `option_${currentIndex}_${optionIndex}`;

        const label = document.createElement("label");
        label.classList.add("option-item");
        label.setAttribute("for", optionId);

        const input = document.createElement("input");
        input.type = "radio";
        input.name = `question_${currentIndex}`;
        input.id = optionId;
        input.value = option.points;
        input.checked = answers[currentIndex] === option.points;
        input.addEventListener("change", () => {
            answers[currentIndex] = Number(option.points);
            nextButton.disabled = false;
        });

        const optionText = document.createElement("span");
        optionText.textContent = option.label;

        const pointsTag = document.createElement("span");
        pointsTag.classList.add("points-tag");
        pointsTag.textContent = `${formatPoints(option.points)} pts`;

        label.appendChild(input);
        label.appendChild(optionText);
        label.appendChild(pointsTag);
        optionsContainer.appendChild(label);
    });

    progressText.textContent = `Question ${currentIndex + 1} / ${totalQuestions}`;
    progressFill.style.width = `${((currentIndex + 1) / totalQuestions) * 100}%`;

    prevButton.disabled = currentIndex === 0;
    nextButton.textContent = currentIndex === totalQuestions - 1 ? "Voir le résultat" : "Suivant";
    nextButton.disabled = answers[currentIndex] === null;
};

const computeScore = () => {
    const totalPoints = answers.reduce((sum, value) => sum + (value ?? 0), 0);
    const rawScore = 100 + totalPoints;
    const score = Math.max(0, Math.min(100, rawScore));

    scoreValue.textContent = `${score} / 100`;
    pointsSummary.textContent = `Variation totale : ${formatPoints(totalPoints)} points`;

    if (score >= 80) {
        interpretation.textContent = "Faible impact écologique. Excellent !";
    } else if (score >= 60) {
        interpretation.textContent = "Impact écologique modéré. Vous êtes sur la bonne voie.";
    } else if (score >= 40) {
        interpretation.textContent = "Impact écologique moyen. Des améliorations sont possibles.";
    } else {
        interpretation.textContent = "Impact écologique élevé. Des changements sont recommandés.";
    }

    if (score >= 80) {
        tips.innerHTML = "<strong>Propositions :</strong><br>Excellent engagement écologique. Continuez à inspirer votre entourage !";
    } else if (score >= 60) {
        tips.innerHTML = "<strong>Propositions :</strong><br>Bon équilibre. Identifiez 2 ou 3 leviers prioritaires pour progresser.";
    } else if (score >= 40) {
        tips.innerHTML = "<strong>Propositions :</strong><br>Impact modéré. Commencez par les gestes du quotidien (transport, énergie, alimentation).";
    } else {
        tips.innerHTML = "<strong>Propositions :</strong><br>Impact élevé. Réduisez les postes majeurs (transports, énergie, consommation) pour progresser rapidement.";
    }
};

startButton.addEventListener("click", () => {
    setActivePanel(questionPanel);
    renderQuestion();
});

restartButton.addEventListener("click", () => {
    currentIndex = 0;
    answers = Array(totalQuestions).fill(null);
    setActivePanel(introPanel);
});

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex -= 1;
        renderQuestion();
    }
});

nextButton.addEventListener("click", () => {
    if (currentIndex < totalQuestions - 1) {
        currentIndex += 1;
        renderQuestion();
        return;
    }

    computeScore();
    setActivePanel(resultPanel);
});
