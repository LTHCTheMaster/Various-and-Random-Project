var LTHC = {};
(function () {
	LTHC.path = GDT.getRelativePath();
	
	LTHC.addEvent = function () {

		var eventId = "F413351E-2108-4967-A989-A7E98F4DEED5";

		var myRandomEvent = {
			id: eventId,
			isRandom: false,
			maxTriggers: 1,
			trigger: function (company) {
				return company.currentLevel == 1 && company.isGameProgressBetween(0.2, 0.9);
			},
			
			getNotification: function (company) {
				var game = company.currentGame;

				var msg = "Bonjour cher moi du passé, je me suis dis que grace aux connaissances actuelles de mon temps, j'allais te faire un don à travers l'espace temps et accepte mon cadeau en appuyant sur oui"
					.localize().format(game.title);
				company.adjustHype(25 + 25 * company.getRandom());

				return new Notification({
					sourceId: eventId,
					header: "Venu du futur".localize(),
					text: msg,
					options: ["Yes".localize()]
				});
			},
			complete: function (decision) {

				var company = GameManager.company;

				if (decision === 0) {
					var n = new Notification({
						header: "Venu du futur".localize(),
						text: "Abraé kazamistouille et zipouilette".localize(),
						weeksUntilFired: 1 + 2 * company.getRandom()
					});
					n.adjustCash(8500000000, "Offrande");
					n.adjustFans(850000);
					company.notifications.push(n);
					GameManager.company.researchPoints += 29563;
					GameManager.company.cash += 8500000000
						var character = GameManager.company.staff[0];
					character.designFactor= 2;
					character.technologyFactor= 2;
					character.speedFactor= 2;
						character.qualityFactor= 1;
					character.experience= 9000;
					character.researchFactor= 2;
					character.efficiency= 1;
					VisualsManager.researchPoints.updatePoints(GameManager.company.researchPoints);	
					GameManager.company.topics = [];
					GameManager.company.topics = GameManager.company.topics.concat([],Topics.topics);
					GameManager.company.currentLevel = 4,
					VisualsManager.nextLevel();
					Media.createLevel4Notifications();
					GameManager.save(GameManager.company.slot + "L4");
					GameManager.resume(true);					
					return;
				}
			}
		};

		GDT.addEvent(myRandomEvent);
	};
	
	
	//Plateformes
	LTHC.addPlatform = function () {
		GDT.addPlatform(
			{
				id: 'LTHC Lab Console',
				name: 'Console LTHC Lab',
				company: 'LTHC Multi Company',
				startAmount: 1.1,
				unitsSold: 5.4,
				licencePrize: 2500000,
				published: '2/2/2',
				platformRetireDate: '23/3/3',
				developmentCosts: 180000,
				genreWeightings: [0.9, 0.6, 1, 0.8, 0.6, 1],
				audienceWeightings: [0.8, 0.6, 1],
				techLevel: 6,
				iconUri: LTHC.path + '/lthc/img/lthcLabConsole.png',
				events: [
					{
						id: '10537DA1-58F1-4F23-8854-F1E2621933BF-ddddadadad11',
						date: '2/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Arrivé du futur".localize(),
								text: "Une entreprise appelée LTHC Multi Company prétend venir du futur en proposant une console dotée d'un eye tracker et de seulement 3 boutons. cette console permet donc de jouer avec ses yeux et ses doigts {0}.".localize().format(General.getETADescription('2/1/1', '2/2/2')),
								image: LTHC.path + '/lthc/img/lthcLabConsole.png'
							});
						}
					}
				]
			});
	};
	LTHC.addPlatform2 = function () {
		GDT.addPlatform(
			{
				id: 'LTHC Cube Screen',
				name: 'Cube écran LTHC',
				company: 'LTHC Multi Company',
				startAmount: 2.1,
				unitsSold: 6.7,
				licencePrize: 3500000,
				published: '8/2/2',
				platformRetireDate: '28/3/3',
				developmentCosts: 250000,
				genreWeightings: [0.6, 0.6, 1, 1, 0.6, 0.8],
				audienceWeightings: [1, 1, 1],
				techLevel: 6,
				iconUri: LTHC.path + '/lthc/img/console2.png',
				events: [
					{
						id: '10537DA1-58F1-4F23-8854-F1E2621933BF-ddddadadad112',
						date: '8/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Une nouvelle console".localize(),
								text: "LTHC Multi Company a annoncé l'arrivée de la Cube écran LTHC. cette console est un écran cubique tactile. Cette console est déjà annoncée comme une ponite du marché {0}.".localize().format(General.getETADescription('8/1/1', '8/2/2')),
								image: LTHC.path + '/lthc/img/console2.png'
							});
						}
					}
				]
			});
	};
	LTHC.addPlatform3 = function () {
		GDT.addPlatform(
			{
				id: 'LTHC Console metaforge',
				name: 'Console LTHC metaforge',
				company: 'LTHC Multi Company',
				startAmount: 3.2,
				unitsSold: 8.4,
				licencePrize: 4700000,
				published: '13/2/2',
				platformRetireDate: '29/4/4',
				developmentCosts: 360000,
				genreWeightings: [1, 1, 1, 1, 1, 1],
				audienceWeightings: [1, 1, 1],
				techLevel: 6,
				iconUri: LTHC.path + '/lthc/img/console3.png',
				events: [
					{
						id: '10537DA1-58F1-4F23-8854-F1E2621933BF-ddddadadad113',
						date: '13/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Une nouvelle console, encore".localize(),
								text: "LTHC Multi Company a annoncé l'arrivée de la Console LTHC Metaforge. cette console possède deux boutons et un écran tactile sous forme de pavé, cett console ressemble à une enclume. les joueurs la désigne comme la perfection des consoles de jeux {0}.".localize().format(General.getETADescription('13/1/1', '13/2/2')),
								image: LTHC.path + '/lthc/img/console3.png'
							});
						}
					}
				]
			});
	};
	
	
	//Topics
	LTHC.addTopic = function () {
		GDT.addTopics([
		{ 
			id: "aabababab15462255655255555555455455555bbbdbdbfcbae", 
			name: "Vie étrange réelle".localize("game topic"), 
			iconUrl: LTHC.path + '/lthc/img/topic0.png',
			genreWeightings: [0.6, 0.7, 1, 0.8, 0.8, 1], 
			audienceWeightings: [0.6, 0.8, 1] 
		}
	]);
	}
	LTHC.addTopic2 = function () {
		GDT.addTopics([
		{ 
			id: "aabababab15462255655255555555455455555bbbdbdbfcbae2", 
			name: "Donjons animaliers".localize("game topic"), 
			iconUrl: LTHC.path + '/lthc/img/topic2.png',
			genreWeightings: [0.8, 0.8, 1, 1, 0.7, 0.9], 
			audienceWeightings: [0.9, 0.8, 0.9] 
		}
	]);
	}
	LTHC.addTopic3 = function () {
		GDT.addTopics([
		{ 
			id: "aabababab15462255655255555555455455555bbbdbdbfcbae3", 
			name: "Compagnie pub".localize("game topic"), 
			iconUrl: LTHC.path + '/lthc/img/topic1.png',
			genreWeightings: [1, 0.6, 0.9, 0.9, 1, 0.8], 
			audienceWeightings: [0.8, 1, 0.7] 
		}
	]);
	}
	LTHC.addTopic4 = function () {
		GDT.addTopics([
		{ 
			id: "aabababab15462255655255555555455455555bbbdbdbfcbae4", 
			name: "Combat de bersrkir".localize("game topic"), 
			iconUrl: LTHC.path + '/lthc/img/topic3.png',
			genreWeightings: [1, 1, 0.6, 0.6, 0.9, 0.7], 
			audienceWeightings: [1, 1, 1] 
		}
	]);
	}
	
	//Research Items
	LTHC.addRI = function () {
		GDT.addResearchItem({
			id: "Histoire Profonde Evolutive",
			name: "Histoire Profonde Evolutive".localize(),
			v: 2,
			canResearch: function (company) {
				return (LevelCalculator.getMissionLevel('Story/Quests') > 3 && LevelCalculator.getMissionLevel('AI') > 2)
			},
			category: "Story/Quests",
			categoryDisplayName: "Story/Quests".localize()
		});
	}
	LTHC.addRI2 = function () {
		GDT.addResearchItem({
			id: "Quetes Puzzles Complexes",
			name: "Quetes Puzzles Complexes".localize(),
			v: 2,
			canResearch: function (company) {
				return (LevelCalculator.getMissionLevel('Story/Quests') > 4 && LevelCalculator.getMissionLevel('Dialogs') > 3)
			},
			category: "Story/Quests",
			categoryDisplayName: "Story/Quests".localize()
		});
	}
	LTHC.addRI3 = function () {
		GDT.addResearchItem({
			id: "Path Finding Realiste",
			name: "Path Finding Realiste".localize(),
			v: 2,
			canResearch: function (company) {
				return (LevelCalculator.getMissionLevel('AI') > 4 && LevelCalculator.getMissionLevel('World Design') > 2)
			},
			category: "AI",
			categoryDisplayName: "AI".localize()
		});
	}
	LTHC.addRI4 = function () {
		GDT.addResearchItem({
			id: "IA Surrealiste Dynamique",
			name: "IA Surrealiste Dynamique".localize(),
			v: 2,
			canResearch: function (company) {
				return (LevelCalculator.getMissionLevel('AI') > 5 && LevelCalculator.getMissionLevel('Level Design') > 3 && LevelCalculator.getMissionLevel('Dialogs') > 3)
			},
			category: "AI",
			categoryDisplayName: "AI".localize()
		});
	}
	LTHC.addRI5 = function () {
		GDT.addResearchItem({
			id: "Monde Progressif Imersif",
			name: "Monde Progressif Imersif".localize(),
			v: 2,
			canResearch: function (company) {
				return (LevelCalculator.getMissionLevel('Gameplay') > 1 && LevelCalculator.getMissionLevel('World Design') > 2)
			},
			category: "World Design",
			categoryDisplayName: "World Design".localize()
		});
	}
	LTHC.addRI6 = function () {
		GDT.addResearchItem({
			id: "Monde A Double Realites Profondes",
			name: "Monde A Double Realites Profondes".localize(),
			v: 2,
			canResearch: function (company) {
				return (LevelCalculator.getMissionLevel('Gameplay') > 3 && LevelCalculator.getMissionLevel('World Design') > 5 && LevelCalculator.getMissionLevel('Level Design') > 4 && LevelCalculator.getMissionLevel('Sound') > 3)
			},
			category: "World Design",
			categoryDisplayName: "World Design".localize()
		});
	}
	
	//Ultimate Research Items
	LTHC.addURI = function(){
		UltimateLib.Research.addEngineResearch({
			id: "Niveaux Customs Communautaires",
			name: "Niveaux Customs Communautaires",
			canResearch: function () {
									var res = true;
									res =   GameManager.company.canDevelopMMOGames();
									res &=   LevelCalculator.getMissionLevel('Level Design') > 5

								return res;
					},
			category: "Level Design",
			categoryDisplayName: "Level Design",
			v: 2
		});
	}
	LTHC.addURI2 = function(){
		UltimateLib.Research.addEngineResearch({
			id: "Niveaux Progressifs Intelligents",
			name: "Niveaux Progressifs Intelligents",
			canResearch: function () {
									var res = true;
									res =   GameManager.company.canDevelopMMOGames();
									res &=   LevelCalculator.getMissionLevel('Level Design') > 6;
									res &=   LevelCalculator.getMissionLevel('AI') > 5;
									res &=   LevelCalculator.getMissionLevel('Graphic') > 5

								return res;
					},
			category: "Level Design",
			categoryDisplayName: "Level Design",
			v: 2
		});
	}
})();