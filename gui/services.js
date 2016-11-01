//SERVICE
paragonApp.service('personnageService', function(){
    var self = this;   
    
    /*****************************************************************************/
    /*                Constantes/valeurs par défaut                              */
    /*****************************************************************************/
    
    self.constantes = {
        formatsExportationListe: ['json', 'LaTeX', 'pdf', 'csv', 'html'],
        formatExportation: 'html',
        originesListe: ['Aftokratorias', 'Bretinia Rike', 'OPE', 'Zhongguo'],
        competencesCombatListe:[
            'Armes d\'épaule','Armes de jet','Armes lourdes','Armes de mêlée',
            'Armes exotiques','Boxe bretinienne','Judo','Jiu-jitsu','Lutte grecque'
        ],
        competencesEtiquetteListe:[
            'Ankh-Rose','Architectes','Brouwersliga','DEP','Dingdan shé yinshen',
            'Drachensee Ltd','Dockers','Drachen','Drews','Esclaves','Finance',
            'Fritenkers','Froura','Gangs','GAT','Gotha','GRYDAN','Hétaires',
            'Jul\'ek','Kalti Akab','Kérberos','kinêma','Leeds Garden',
            'Maisons du Crime','Mao Huo','Marins','Mode','OPE','Paragons',
            'Politiciens','Presse','Récupérateurs','Rike','Routiers','Sport autokinite',
            'Sport éolien','Stratos','Shan Luwei Yuan','Syllips kranio','Vabensliga',
            'Wyrlards','Zhongguo'
        ],
        competencesMetierListe:[
            'Armurerie','Bureaucratie','Cartographie','Chant','Comptabilité','Commandement',
            'Comédie','Contrefaçon','Criminalistique','Cryptographie','Danse','Déminage',
            'Dessin','Droit','Électricité','Électronique','Hermaphorique','Hypnose',            'Ichornétique','Ichoromatique','Immobilisation','Imposture','Interrogatoire',
            'Kinêma','Mécanique','Médecine','Métallurgie','Menuiserie','Musique',
            'Oenologie','Peinture','Photographie','Phreaking','Pilotage autokinite',
            'Pilotage éole','Pilotage fortigo','Pilotage hermaphore','Pilotage kini',
            'Pilotage navire','Pilotage thalès','Pister','Plomberie','Premiers soins',
            'Psychanalyse','Psychologie','Recherche documentaire','Sculpture',
            'Sécurité','Serrurerie','Survie','Télécommunications','Taxidermie'
        ],
        competencesScienceListe:[
            'Anthropologie','Archéologie','Architecture','Astrologie','Biochimie',
            'Biologie','Botanique','Cosmogonie','Criminalistique','Economie','Géographie',
            'Géologie','Glaciologie','Histoire','Hydrologie','Ichorologie','Mathématiques',
            'Météorologie','Minéralogie','Occultisme','Océanographie','Paléontologie',
            'Pharmacologie','Phrénologie','Physique','Politique','Sismologie','Sociologie',
            'Stratégie','Volcanologie','Zoologie'
        ],
        competencesDiversListe:[
            'Baratin','Bricolage','Discrétion','Dissimulation','Dressage','Équitation',
            'Grimpe','Jeu','Langue: aforakien','Langue: arabe','Langue: bretinien',            'Langue: grec','Langue: zhongguo','Lecture à l\'envers','Lecture sur les lèvres',
            'Natation','Négociation','Orientation','Parachutisme','Persuasion','Plongée',
            'Syllips kranio'
        ],
        equipementArmesAFeuListe:[
            {nom: 'Artémis E35', constructeur: 'KV', type: 'pistolet', cout: '250'},
            {nom: 'Artémis S40', constructeur: 'KV', type: 'pistolet', cout: '700'},
            {nom: 'Artémis V33', constructeur: 'KV', type: 'pistolet', cout: '560'},
            {nom: 'P403 Preyhunter', constructeur: 'Badas', type: 'pistolet', cout: '640'},
            {nom: 'P503 Warhawk', constructeur: 'Badas', type: 'pistolet', cout: '280'},
            {nom: 'Protector', constructeur: 'Savage', type: 'pistolet', cout: '1250'},
            {nom: 'Saturos', constructeur: 'Pados', type: 'pistolet', cout: '355'},
            {nom: 'TA-3', constructeur: 'Taki', type: 'pistolet', cout: '320'},
            {nom: 'TA-4', constructeur: 'Taki', type: 'pistolet', cout: '310'},
            {nom: 'Aédé S60', constructeur: 'KV', type: 'mitrailleuse', cout: '21750'},
            {nom: 'Gorgo', constructeur: 'Pados', type: 'mitrailleuse', cout: '19960'},
            {nom: 'M909 Chainsaw', constructeur: 'Badas', type: 'mitrailleuse', cout: '10620'},
            {nom: 'Fumbler', constructeur: 'Savage', type: 'mitraillette', cout: '1530'},
            {nom: 'TA-6', constructeur: 'Taki', type: 'mitraillette', cout: '340'},
            {nom: 'Toxo T97', constructeur: 'KV', type: 'fusil de précision', cout: '14145'},
            {nom: 'Vauxhall', constructeur: 'Savage', type: 'fusil de précision', cout: '18450'},
            {nom: 'Medousa', constructeur: 'Pados', type: 'fusil de chasse', cout: '2310'},
            {nom: 'TA-7', constructeur: 'Taki', type: 'fusil de chasse', cout: '2470'},
            {nom: 'Arès S50', constructeur: 'KV', type: 'fusil d\'assaut', cout: '4980'},
            {nom: 'Erazer', constructeur: 'Savage', type: 'fusil d\'assaut', cout: '14025'},
            {nom: 'K303 Widowmaker', constructeur: 'Badas', type: 'fusil d\'assaut', cout: '3420'},
            {nom: 'C420 Boomer', constructeur: 'Badas', type: 'canon d\'assaut', cout: '12240'},
            {nom: 'Thunderfyre', constructeur: 'Savage', type: 'canon d\'assaut', cout: '36525'}
        ],
        equipementArmesDiversListe:[
            {nom: 'Bang', constructeur: '-', type: 'grenade explosive', cout: '60'},
            {nom: 'Couteau', constructeur: '-', type: 'perforant', cout: '10'},
            {nom: 'Dévastatron', constructeur: '-', type: 'grenade haut explosif', cout: '500'},
            {nom: 'Flash', constructeur: '-', type: 'grenade incapacitante', cout: '50'},
            {nom: 'Fumi', constructeur: '-', type: 'grenade fumigène', cout: '40'},
            {nom: 'Griffes', constructeur: '-', type: 'tranchant', cout: '30'},
            {nom: 'Lame', constructeur: '-', type: 'tranchant', cout: '100'},
            {nom: 'Lame vibrante', constructeur: '-', type: 'tranchant', cout: '500'},
            {nom: 'Masse', constructeur: '-', type: 'contondant', cout: '80'},
            {nom: 'Masse pulsée', constructeur: '-', type: 'contondant', cout: '450'},
            {nom: 'Poings rikiens', constructeur: '-', type: 'perforant', cout: '30'},
            {nom: 'Pulsor', constructeur: '-', type: 'grenade telsa', cout: '800'}
        ],
        equipementProtectionsListe:[
            {nom: 'Apollon 01k', constructeur: 'KV', type: 'khiton renforcé', cout: '200'},
            {nom: 'Générique', constructeur: 'Divers', type: 'casque léger', cout: '200'},
            {nom: 'Générique', constructeur: 'Divers', type: 'gants légers', cout: '200'},
            {nom: 'Générique', constructeur: 'Divers', type: 'bottes légères', cout: '200'},
            {nom: 'Jacket X', constructeur: 'Savage', type: 'khiton renforcé', cout: '400'},
            {nom: 'Générique', constructeur: 'Divers', type: 'casque moyen', cout: '400'},
            {nom: 'Générique', constructeur: 'Divers', type: 'gants moyens', cout: '400'},
            {nom: 'Générique', constructeur: 'Divers', type: 'bottes moyennes', cout: '400'},
            {nom: 'Apollon 02c', constructeur: 'KV', type: 'khiton blindé', cout: '600'},
            {nom: 'Générique', constructeur: 'Divers', type: 'casque lourd', cout: '600'},
            {nom: 'Générique', constructeur: 'Divers', type: 'gants lourds', cout: '600'},
            {nom: 'Générique', constructeur: 'Divers', type: 'bottes lourdes', cout: '600'},
            {nom: 'TAk-TT', constructeur: 'Taki', type: 'khiton blindé', cout: '700'},
            {nom: 'Chimera B', constructeur: 'Daidalos', type: 'chlamyde renforcée', cout: '1800'},
            {nom: 'Herkulos', constructeur: 'Pados', type: 'chlamyde renforcée', cout: '2000'},
            {nom: 'Chimera T', constructeur: 'Daidalos', type: 'chlamyde blindée', cout: '2600'},
            {nom: 'Apollon 03cc', constructeur: 'KV', type: 'chlamyde blindée', cout: '3000'},
            {nom: 'TAk-MD', constructeur: 'Taki', type: 'armure légère', cout: '4800'},
            {nom: 'R-more L', constructeur: 'Savage', type: 'armure légère', cout: '5400'},
            {nom: 'R-more M', constructeur: 'Savage', type: 'armure moyenne', cout: '8800'},
            {nom: 'Wall ST4', constructeur: 'Badas', type: 'armure moyenne', cout: '10000'},
            {nom: 'Chimera X', constructeur: 'Daidalos', type: 'armure lourde', cout: '19000'},
            {nom: 'R-more H', constructeur: 'Savage', type: 'armure lourde', cout: '20000'},
            {nom: 'Wall RT5', constructeur: 'Badas', type: 'armure lourde', cout: '25000'}
        ],
        equipementAutokinitesListe:[
            {nom: 'Gladios Asteri', constructeur: 'Godapos', type: 'Limousine', cout: '7200'},
            {nom: 'Motita A', constructeur: 'Godapos', type: 'Limousine', cout: '9600'},
            {nom: 'Wolff Mk IV', constructeur: 'Nyte Raider', type: 'Moto cross', cout: '2400'},
            {nom: 'Grasina GL A', constructeur: 'Godapos', type: 'Moto cross', cout: '1200'},
            {nom: 'Mary Mk I', constructeur: 'Wotan', type: 'Moto cross', cout: '640'},
            {nom: 'Hawke Mk II', constructeur: 'Nyte Raider', type: 'Moto routière', cout: '3520'},
            {nom: 'Domo Excelsior', constructeur: 'Godapos', type: 'Moto routière', cout: '2800'},
            {nom: 'Adelaïde Mk II', constructeur: 'Wotan', type: 'Moto routière', cout: '2520'},
            {nom: 'Tyger Mk 1', constructeur: 'Nyte Raider', type: 'Moto routière', cout: '5670'},
            {nom: 'Hydra CX35', constructeur: 'Daidalos', type: 'Quadripode', cout: '2700000'},
            {nom: 'VL8', constructeur: 'Phantasma', type: 'Sportive', cout: '21600'},
            {nom: 'VL10', constructeur: 'Phantasma', type: 'Sportive', cout: '23040'},
            {nom: 'Japet', constructeur: 'Siriti', type: 'Sportive', cout: '69120'},
            {nom: 'Ouranos', constructeur: 'Siriti', type: 'Sportive', cout: '80000'},
            {nom: 'Yseult V2', constructeur: 'Wotan', type: 'Sportive', cout: '42000'},
            {nom: 'Margaret V6', constructeur: 'Wotan', type: 'Sportive', cout: '75600'},
            {nom: 'Dory 2P T2i', constructeur: 'ZAP', type: 'Sportive', cout: '64000'},
            {nom: 'KXX', constructeur: 'Nyte Raider', type: 'Trike de course', cout: '9000'},
            {nom: 'Chimaera CX33', constructeur: 'Daidalos', type: 'Tripode', cout: '1536000'},
            {nom: 'GS 01', constructeur: 'Daidalos', type: 'Van', cout: '9600'},
            {nom: 'Motita B', constructeur: 'Godapos', type: 'Van', cout: '24000'},
            {nom: 'HIZ-03', constructeur: 'Acheos', type: 'Van', cout: '2400'},
            {nom: 'HIZ-04', constructeur: 'Acheos', type: 'Van', cout: '8000'},
            {nom: 'Koros B', constructeur: 'Godapos', type: 'Voiture', cout: '2400'},
            {nom: 'Koros A', constructeur: 'Godapos', type: 'Voiture', cout: '800'},
            {nom: 'Koros G', constructeur: 'Godapos', type: 'Voiture', cout: '4800'},
            {nom: 'Koros D', constructeur: 'Godapos', type: 'Voiture', cout: '9600'},
            {nom: 'Koros V', constructeur: 'Godapos', type: 'Voiture', cout: '32000'},
            {nom: 'Vanguard Mk I', constructeur: 'Nyte Raider', type: 'Voiture', cout: '4000'},
            {nom: 'Vanguard Mk II', constructeur: 'Nyte Raider', type: 'Voiture', cout: '5760'},
            {nom: 'Vanguard Mk III', constructeur: 'Nyte Raider', type: 'Voiture', cout: '7840'},
            {nom: 'Lisbeth V1', constructeur: 'Wotan', type: 'Voiture', cout: '7200'}
        ],
        equipementEolesListe:[
            {nom: 'KDA4c', constructeur: 'Kholos Dynamikos', type: 'Acrobatie', cout: '216000'},
            {nom: 'ME-47E Kataigida', constructeur: 'Promethaios', type: 'Acrobatie', cout: '64000'},
            {nom: 'Kip-134', constructeur: 'Kip', type: 'Aéronef d’affaires', cout: '108000'},
            {nom: 'Kip-151', constructeur: 'Kip', type: 'Aéronef d’affaires', cout: '140000'},
            {nom: 'ME-35D Gypas', constructeur: 'Promethaios', type: 'Chasseur', cout: '12000'},
            {nom: 'ME-47C Floga', constructeur: 'Promethaios', type: 'Chasseur', cout: '280000'},
            {nom: 'ME-49A Velos', constructeur: 'Promethaios', type: 'Chasseur', cout: '960000'},
            {nom: 'Colibri', constructeur: 'Palodas', type: 'Hélicoptère', cout: '8400'},
            {nom: 'Grue', constructeur: 'Palodas', type: 'Hélicoptère', cout: '16800'},
            {nom: 'Frelon', constructeur: 'Palodas', type: 'Hélicoptère', cout: '31500'},
            {nom: 'Guêpe', constructeur: 'Palodas', type: 'Hélicoptère de combat', cout: '112000'},
            {nom: 'KP-9 Berserker', constructeur: 'Promethaios', type: 'Hélicoptère de combat', cout: '525000'},
            {nom: 'KD-13', constructeur: 'Kholos Dynamikos', type: 'Passagers et fret', cout: '28800'},
            {nom: 'DM-27', constructeur: 'Denler-Mancini', type: 'Passagers et fret', cout: '48000'},
            {nom: 'DM-37', constructeur: 'Denler-Mancini', type: 'Passagers et fret', cout: '105000'},
            {nom: 'DM-47', constructeur: 'Denler-Mancini', type: 'Passagers et fret', cout: '240000'},
            {nom: 'KD330', constructeur: 'Kholos Dynamikos', type: 'Passagers et fret', cout: '48000'},
            {nom: 'KD150', constructeur: 'Kholos Dynamikos', type: 'Passagers et fret', cout: '90000'},
            {nom: 'T-023', constructeur: 'Thalès', type: 'Passagers et fret', cout: '134400'},
            {nom: 'T-024', constructeur: 'Thalès', type: 'Passagers et fret', cout: '576000'},
            {nom: 'Kraken Mk I', constructeur: 'Vanguard Int.', type: 'Passagers et fret', cout: '1440000'},
            {nom: 'S-P03', constructeur: 'Thalès', type: 'Porte éoles', cout: '9360000'},
            {nom: 'Leviathan Mk III', constructeur: 'Vanguard Int.', type: 'Porte éoles', cout: '9000000'}
        ],
        equipementHermaphoresListe:[
            {nom: 'Thalophore Mk1', constructeur: 'Marathon', type: 'transport', cout: '7300'},
            {nom: 'Hermaphore Mk2', constructeur: 'Marathon', type: 'surveillance', cout: '8300'},
            {nom: 'Kipa K', constructeur: 'Daidalos', type: 'combat', cout: '8850'},
            {nom: 'Tumbler', constructeur: 'Savage', type: 'combat', cout: '11300'},
            {nom: 'Thalès K', constructeur: 'Daidalos', type: 'combat', cout: '14100'},
            {nom: 'DMH-1', constructeur: 'Denler-Mancini', type: 'transport', cout: '14850'},
            {nom: 'Sneaker', constructeur: 'Savage', type: 'infiltration', cout: '15300'},
            {nom: 'Héphaïstos I2', constructeur: 'KV', type: 'infiltration', cout: '17200'},
            {nom: 'TAh-1', constructeur: 'Taki', type: 'surveillance', cout: '21100'},
            {nom: 'Hermès S10', constructeur: 'KV', type: 'surveillance', cout: '22600'},
            {nom: 'AuGy K', constructeur: 'Daidalos', type: 'combat', cout: '23500'},
            {nom: 'DMH-2', constructeur: 'Denler-Mancini', type: 'transport', cout: '32100'},
            {nom: 'H109', constructeur: 'Badas', type: 'combat', cout: '43550'}
        ],
        equipementPhreakboxesListe:[
            {nom: 'blue box', constructeur: '1', type: 'feed the cow/clamper', cout: '3000'},
            {nom: 'blue box', constructeur: '2', type: 'feed the cow/clamper', cout: '6000'},
            {nom: 'blue box', constructeur: '3', type: 'feed the cow/clamper', cout: '13500'},
            {nom: 'blue box', constructeur: '4', type: 'feed the cow/clamper', cout: '18000'},
            {nom: 'blue box', constructeur: '5', type: 'feed the cow/clamper', cout: '30000'},
            {nom: 'bunny box', constructeur: '1', type: 'hopper', cout: '6000'},
            {nom: 'bunny box', constructeur: '2', type: 'hopper', cout: '12000'},
            {nom: 'bunny box', constructeur: '3', type: 'hopper', cout: '24000'},
            {nom: 'bunny box', constructeur: '4', type: 'hopper', cout: '32000'},
            {nom: 'bunny box', constructeur: '5', type: 'hopper', cout: '50000'},
            {nom: 'cam box', constructeur: '1', type: 'watcher/action!', cout: '1000'},
            {nom: 'cam box', constructeur: '2', type: 'watcher/action!', cout: '2000'},
            {nom: 'cam box', constructeur: '3', type: 'watcher/action!', cout: '3000'},
            {nom: 'cam box', constructeur: '4', type: 'watcher/action!', cout: '8000'},
            {nom: 'cam box', constructeur: '5', type: 'watcher/action!', cout: '10000'},
            {nom: 'gray box', constructeur: '1', type: 'coacher', cout: '1000'},
            {nom: 'gray box', constructeur: '2', type: 'coacher', cout: '2000'},
            {nom: 'gray box', constructeur: '3', type: 'coacher', cout: '6000'},
            {nom: 'gray box', constructeur: '4', type: 'coacher', cout: '8000'},
            {nom: 'gray box', constructeur: '5', type: 'coacher', cout: '15000'},
            {nom: 'red box', constructeur: '1', type: 'blower', cout: '10000'},
            {nom: 'red box', constructeur: '2', type: 'blower', cout: '20000'},
            {nom: 'red box', constructeur: '3', type: 'blower', cout: '30000'},
            {nom: 'red box', constructeur: '3', type: 'blower', cout: '37500'},
            {nom: 'red box', constructeur: '5', type: 'blower', cout: '62500'},
            {nom: 'tape box', constructeur: '1', type: 'stringer', cout: '500'},
            {nom: 'tape box', constructeur: '2', type: 'stringer', cout: '1000'},
            {nom: 'tape box', constructeur: '3', type: 'stringer', cout: '3000'},
            {nom: 'tape box', constructeur: '4', type: 'stringer', cout: '4000'},
            {nom: 'tape box', constructeur: '5', type: 'stringer', cout: '7500'},
            {nom: 'white box', constructeur: '1', type: 'switcher/hit the cow', cout: '500'},
            {nom: 'white box', constructeur: '2', type: 'switcher/hit the cow', cout: '1000'},
            {nom: 'white box', constructeur: '3', type: 'switcher/hit the cow', cout: '3000'},
            {nom: 'white box', constructeur: '4', type: 'switcher/hit the cow', cout: '4000'},
            {nom: 'white box', constructeur: '5', type: 'switcher/hit the cow', cout: '7500'}
        ],
        equipementIchornetiqueListe:[
            {nom: 'Gadget', constructeur: 'Gamma', type: 'Variable', cout: '6000'},
            {nom: 'Main', constructeur: 'Gamma', type: 'AD + 1', cout: '7250'},
            {nom: 'Nez', constructeur: 'Gamma', type: 'AC + 1', cout: '7250'},
            {nom: 'Oreille', constructeur: 'Gamma', type: 'AC + 1', cout: '7250'},
            {nom: 'Œil', constructeur: 'Gamma', type: 'AC + 1', cout: '8250'},
            {nom: 'Bras', constructeur: 'Gamma', type: 'RO + 1 / TACH + 1', cout: '9250'},
            {nom: 'Jambe', constructeur: 'Gamma', type: 'RO + 1 / TACH + 1', cout: '9750'},
            {nom: 'Gadget', constructeur: 'Beta', type: 'Variable', cout: '10500'},
            {nom: 'Crâne', constructeur: 'Gamma', type: 'ZOI + 1', cout: '11250'},
            {nom: 'Main', constructeur: 'Beta', type: 'AD + 2', cout: '11750'},
            {nom: 'Nez', constructeur: 'Beta', type: 'AC + 2', cout: '11750'},
            {nom: 'Oreille', constructeur: 'Beta', type: 'AC + 2', cout: '11750'},
            {nom: 'Bras', constructeur: 'Beta', type: 'RO + 2 / TACH + 2', cout: '12500'},
            {nom: 'Œil', constructeur: 'Beta', type: 'AC + 2', cout: '12750'},
            {nom: 'Torse', constructeur: 'Gamma', type: 'ZOI + 2', cout: '12750'},
            {nom: 'Jambe', constructeur: 'Beta', type: 'RO + 2 / TACH + 2', cout: '13500'},
            {nom: 'Crâne', constructeur: 'Beta', type: 'ZOI + 2', cout: '14500'},
            {nom: 'Gadget', constructeur: 'Alfa', type: 'Variable', cout: '15500'},
            {nom: 'Torse', constructeur: 'Beta', type: 'ZOI + 4', cout: '16000'},
            {nom: 'Bras', constructeur: 'Alfa', type: 'RO + 3 / TACH + 3', cout: '16250'},
            {nom: 'Main', constructeur: 'Alfa', type: 'AD + 3', cout: '16250'},
            {nom: 'Nez', constructeur: 'Alfa', type: 'AC + 3', cout: '16250'},
            {nom: 'Oreille', constructeur: 'Alfa', type: 'AC + 3', cout: '16250'},
            {nom: 'Jambe', constructeur: 'Alfa', type: 'RO + 3 / TACH + 3', cout: '17250'},
            {nom: 'Œil', constructeur: 'Alfa', type: 'AC + 3', cout: '17250'},
            {nom: 'Crâne', constructeur: 'Alfa', type: 'ZOI + 3', cout: '17750'},
            {nom: 'Torse', constructeur: 'Alfa', type: 'ZOI + 6', cout: '19250'},
            {nom: 'Cœur', constructeur: 'Gamma', type: 'RO + 1 / TACH + 1', cout: '21250'},
            {nom: 'Poumon', constructeur: 'Gamma', type: 'RO + 1 / ZOI + 1 / TACH + 1', cout: '21250'},
            {nom: 'Cœur', constructeur: 'Beta', type: 'RO + 2 / TACH + 2', cout: '23000'},
            {nom: 'Poumon', constructeur: 'Beta', type: 'RO + 2 / ZOI + 2 / TACH + 2', cout: '23000'},
            {nom: 'Derme', constructeur: 'Gamma', type: 'ZOI + 5', cout: '23750'},
            {nom: 'Cœur', constructeur: 'Alfa', type: 'RO + 3 / TACH + 3', cout: '24750'},
            {nom: 'Poumon', constructeur: 'Alfa', type: 'RO + 3 / ZOI + 3 / TACH + 3', cout: '24750'},
            {nom: 'Derme', constructeur: 'Beta', type: 'ZOI + 10', cout: '27000'},
            {nom: 'Squelette', constructeur: 'Gamma', type: 'RO + 2 / ZOI + 5', cout: '28750'},
            {nom: 'Derme', constructeur: 'Alfa', type: 'ZOI + 20', cout: '30250'},
            {nom: 'Squelette', constructeur: 'Beta', type: 'RO + 4 / ZOI + 10', cout: '30500'},
            {nom: 'Squelette', constructeur: 'Alfa', type: 'RO + 8 / ZOI + 20', cout: '32250'}
        ],
        contactsOccupationListe:[
            'Agent spécial',
            'Ambulancier',
            'Armurier',
            'Astéri du kinêma',
            'Astéri du rolo podi',
            'Charcuteur',
            'Coach de syllips',
            'Comptable',
            'Coureur autokinite',
            'Docker',
            'Drew',
            'Faucon',
            'Forhandler',
            'Gangster',
            'Hétaire',
            'Hoplite',
            'Ichornéticien',
            'Joueur de syllips',
            'Journaliste',
            'Marin',
            'Marionnettiste',
            'Mécanicien',
            'Médecin',
            'Membre de l\'Hydre',
            'Membre des Corsaires',
            'Membre des Pirates Égéens',
            'Militaire à la retraite',
            'Militaire en activité',
            'Ombre',
            'Philosophe',
            'Phreaker',
            'Pilote',
            'Policier',
            'Politicien',
            'Récupérateur',
            'Rhéto',
            'Seahandler',
            'Wyrlard'
        ],
        affinitesListe:[
            {categorie: 'Politique',
			 nom: 'Basiléiste',
             description: 'Le Basiléiste est un passéiste, un conservateur pur et dur, le plus souvent impérialiste, voire, pour les plus extrêmes, fervent défenseur des monarchies absolues. Dans l\'Aftokratorias, il lorgne avec envie sur le Rike et la gloire du Köng. Dans le Rike, il est un fervent supporter de la maison köngale et regarde avec mépris l\'Aftokratorias. Dans les deux cas, il crache sur les OPE. En théorie, aucun Opéien n\'est Basiléiste, mais beaucoup de cadres de Kérberos le sont pourtant très ouvertement.'},
            {categorie: 'Politique',
			 nom: 'Démocrate',
            description: 'Le Démocrate abhorre les notions d\'aristocratie, de mainmise d\'une élite féodale sur le pouvoir. Il défend vaillamment les droits du peuple, la liberté d\'expression, et s\'avère en général plutôt progressiste. Dans l\'Aftokratorias, il représente la majorité de la population. Dans le Rike, il est un fritenker, un dissident aux moeurs dissolues, étroitement surveillé par Leeds Garden. Dans les OPE, il représente la moitié la plus modérée de la population.'},
            {categorie: 'Politique',
			 nom: 'Néo-platonicien',
            description: 'Le Néo-Platonicien est un adepte du collectivisme, de la raison et de la Cité Juste. Il est généralement convaincu que seuls la mise en commun et le partage des richesses peuvent apporter le plus grand bien. Dans les OPE, il représente une bonne moitié de la population. Dans l\'Aftokratorias et le Rike, il est étroitement surveillé par le gouvernement, voire persécuté.'},
            {categorie: 'Politique',
			 nom: 'Anarchiste',
            description: 'L\'Anarchiste représente une frange plutôt réduite de la population de Gaïa, qui recherche un collectivisme total, niant tout droit aux biens individuels non utilisés; généralement très engagé politiquement, il refuse l\'idée d\'un pouvoir central, et en défend la mise en place de structures ordrées dépourvues d\'autorité centrale. Dans les OPE, il est vu comme un collectiviste extrémiste aux idées révolutionnaires. Dans l\'Aftokratorias, il est généralement mal vu, voire persécuté. Dans le Rike, il est littéralement pourchassé.'},
            {categorie: 'Politique',
			 nom: 'Sans avis',
            description: 'La politique, c\'est pour les autres.'},
			{categorie: 'Géopolitique',
			 nom: 'Iréniste',
            description: 'L\'Iréniste est un pacifiste, profondément humaniste, défenseur du rapprochement entre les peuples. Généralement désabusé, il est dégoûté par les excès de la Guerre Mondiale et fait tout pour aider son prochain.'},
            {categorie: 'Géopolitique',
			 nom: 'Polémiste',
            description: 'Le Polémiste est un belliqueux, convaincu que "sa" nation aurait dû remporter la Guerre Mondiale. Revanchard, xénophobe, le Polémiste fait tout ce qui est en son pouvoir pour que la Guerre reprenne et que "sa" nation termine le travail.'},
            {categorie: 'Géopolitique',
			 nom: 'Qabbaliste',
            description: 'Le Qabbaliste sait pertinemment que la Guerre Mondiale n\'a jamais pris fin. Conspirationniste actif, théoricien du complot, le Qabbaliste sait que des puissances occultes manipulent les gouvernements, et cachent au public "le" grand secret. Il se pourrait même que le Qabbaliste fasse partie du Complot, à son insu ou non.'},
            {categorie: 'Géopolitique',
			 nom: 'Sans avis',
            description: 'La géopolitique, c\'est pour les autres.'},
			{categorie: 'Mystique',
			 nom: 'Dévot',
            description: 'Le Dévot respecte et défend les traditions ancestrales, qu\'elles soient hellénistiques ou nordiques. Certes, les Dieux ont abandonné les Humains, mais il reste de l\'espoir. Le Dévot fera tout ce qui est en son pouvoir pour convertir les autres et ramener les Dieux auprès des Humains.'},
             {categorie: 'Mystique',
			 nom: 'Défaitiste',
            description: 'Le Défaitiste a perdu toute illusion. l\'Âge d\'Or des Dieux de l\'Olympe (ou d\'Asgard) est révolue depuis longtemps. La fin des temps, le Ragnarök, sont proches. Il n\'y a plus aucun espoir, alors à quoi bon lutter ? Nombreux sont les Défaitistes qui abandonnent toute forme de morale pour laisser leurs plus bas instincts s\'exprimer. Beaucoup plus rares sont ceux qui font exactement l\'inverse en signe d\'expiation.'},
             {categorie: 'Mystique',
			 nom: 'Monothéiste',
            description: 'Le Monothéiste est plutôt rare dans les sociétés hellénistiques et bretiniennes, et se rencontre en général dans les Royaumes Arabes, c\'est à dire au Moyen-Orient. Adepte d\'un seul Dieu, celui d\'Abraham, il est plutôt secret, mais convaincu que son peuple a été choisi pour un grand dessein. Dans le Rike, le Monothéiste est persécuté. Dans l\'Aftokratorias et les OPE, plus tolérants, il est seulement tourné en dérision.'},
             {categorie: 'Mystique',
			 nom: 'Chamaniste',
            description: 'Le Chamaniste est influencé par les cultures euphoriennes d\'origine et vénère les esprits de Gaïa. Si les plus grands rassemblements de Chamanistes se trouvent dans les OPE, il n\'est pas rare que de nombreux jeunes Aftokratoriens, influencés par certaines astéris du rolo podi, le soient plus ou moins ouvertement. De même, la plupart des dews bretiniens, qui sont officiellement inféodés aux dieux de l\'Asgard, n\'ont pas oublié leurs traditions naturalistes, et peuvent être considérés comme des Chamanistes.'},
             {categorie: 'Mystique',
			 nom: 'Humaniste',
            description: 'L\'Humaniste est un réaliste moderne, souvent philosophe ou attiré par les sciences, qui se veut rationnel. De toute évidence pour l\'Humaniste, les Dieux n\'ont jamais existé et ne sont que des créations de l\'esprit, inspirées jadis aux tribus et aux peuplades primitives par leurs peurs ancestrales. Encore plutôt rare avant-guerre, l\'affinité Humaniste ne cesse de se développer dans l\'Aftokratorias et dans les OPE. Dans le Rike, les Humanistes sont lynchés en place publique.'},
             {categorie: 'Mystique',
			 nom: 'Sans avis',
            description: 'Rien à cirer.'},
			{categorie: 'Moeurs',
			 nom: 'Agynécien',
            description: '(opposé: Gynécien) l\'Agynécien est un fervent défenseur de la cause féministe, voire un membre officiel de l\'Agynéciade. Rares sont les hommes nés avant-guerre à être Agynéciens, sauf dans les OPE où l\'égalité est une vertu nationale.'},
             {categorie: 'Moeurs',
			 nom: 'Déiciste',
            description: '(opposé: Ragnarökien) convaincu par la Prophétie de la Pythie, le Déiciste met tout en œuvre pour contrer le retour des Titans, que cela soit avec l\'aide des Dieux ou pas.'},
             {categorie: 'Moeurs',
			 nom: 'Gynécien',
            description: '(opposé: Agynécien) le Gynécien est un fervent défenseur du modèle familial traditionnel; il représente encore en cela la majorité des gens nés avant-guerre.'},
             {categorie: 'Moeurs',
			 nom: 'Hédoniste',
            description: '(opposé: Spartiate) l\'Hédoniste est un fervent partisan du relâchement des mœurs. Il défend l\'abolition de la prohibition, est généralement fêtard, soutient activement les homosexuels et la relation traditionnelle entre le maître et son élève.'},
             {categorie: 'Moeurs',
			 nom: 'Ichoricien',
            description: '(opposé: Raisonnable) l\'Ichoricien fait partie des très rares individus convaincus que l\'ichor est en réalité le sang des Titans, et non une simple boue énergétique. Généralement issu de milieux mystiques, il est souvent tourné en dérision par la majorité de la population, et utilisé comme bouc émissaire par la presse.'},
             {categorie: 'Moeurs',
			 nom: 'Podoniste',
            description: '(opposé: Somatiste) le Podoniste est un fervent défenseur de l\'esclavage traditionnel. Comme leurs conditions de vie sont généralement meilleures que celles des ouvriers libres de l\'industrie, de nombreux esclaves athéniens sont Podonistes.'},
             {categorie: 'Moeurs',
			 nom: 'Ragnarökien',
            description: '(opposé: Déiciste) convaincu par la Prophétie de la Pythie, le Ragnarökien fait tout pour œuvrer dans son sens et s\'attirer les faveurs des Titans. Mieux vaut être du côté des vainqueurs.'},
             {categorie: 'Moeurs',
			 nom: 'Raisonnable',
            description: '(opposé: Ichoricien) le Raisonnable, généralement membre de la communauté des philosophes ou sympathisant, sait pertinemment, toutes les études le prouvent d\'ailleurs, que l\'ichor n\'est pas le sang des Titans. Toute personne qui prétendrait le contraire ne serait qu\'un affabulateur - nous ne sommes pas dans une bobine de science-fiction, par Hermès !'},
             {categorie: 'Moeurs',
			 nom: 'Somatiste',
            description: '(opposé: Podoniste) le Somatiste prône l\'abolition de l\'esclavage, sous quelque forme que cela soit, et est généralement un défenseur des libertés individuelles. Le courant de pensée Somatiste est de plus en plus répandu dans l\'Aftokratorias, au grand dam des esclaves athéniens.'},
             {categorie: 'Moeurs',
			 nom: 'Spartiate',
            description: '(opposé: Hédoniste) le Spartiate est contre les relations éraste/éromène, contre les relations homosexuelles en général, contre l\'alcool, contre les drogues - de manière générale, il s\'agit d\'un puritain qui est contre pratiquement tous les plaisirs de la vie.'}
        ],
        languesListe: ['grec', 'bretinien', 'grec', 'zhongguo'],        
        sexesListe: ['Femme', 'Homme'],
        salairesListe: [
            {nom:'ouvrier',montant:500},
            {nom:'fonctionnaire',montant:1000},
            {nom:'cadre',montant:2000},
            {nom:'patron',montant:10000}
        ],
        metatypesListe: [
                    {
                        nom: 'Hoplite',
                        competences:[
                             'Armes de poing',
                             'Armes d\'épaule',
                             'Premiers soins',
                             'Compétence de métier au choix'
                        ]
                    },
                    {
                        nom: 'Faucon',
                        competences:[
                             'Art martial au choix',
                             'Armes de mêlée',
                             'Acrobatie',
                             'Premiers soins'
                        ]
                    },
                    {
                        nom: 'Ombre',
                        competences:[
                             'Discrétion',
                             'Dissimulation',
                             'Systèmes de sécurité',
                             'Art martial au choix'
                        ]
                    },
                    {   
                        nom: 'Rhéto',
                        competences:[
                             'Baratin',
                             'Séduction',
                             'Etiquette au choix',
                             'Compétence de science au choix'
                    ]},
                    {
                        nom: 'Marionnettiste',
                        competences:[
                             'Pilotage: hermaphores',
                             'Électronique',
                             'Mécanique',
                             'Armurerie'
                        ]
                    },
                    {
                        nom: 'Phreaker',
                        competences:[
                             'Phreaking',
                             'Électronique',
                             'Radio',
                             'Électricité'
                        ]
                    }
                ],
        //Valeurs de bonus des axes
        bonusCresusDrachmes: 500000,
        bonusAristoteCompetences: 20,
        bonusAristoteContacts: 5,
        bonusPerseeCaracteristiques: 15,        
        axesListe: [
            { 
                nom: 'Crésus',
                description: 'Favorisé par la fortune, le Crésus dispose lors de la Création d\'un capital additionnel de 500\'000 DR.'
            },
            {
                nom: 'Aristote',
                description: 'Extrêmement compétent, l\'Aristote a toujours privilégié les études et le professionnalisme. Il obtient 20 points à répartir dans ses Compétences et 5 points pour ses Contacts.'
            },
            {
                nom: 'Persée',
                description: 'Différent du commun des mortels depuis sa tendre jeunesse, le Persée est l\'archétype du héros naturel. Il obtient 15 points supplémentaires à répartir dans ses Caractéristiques principales et dérivées.'
            }
        ],
        ageDefaut: 20,
        professionDefaut: 'Agent du DEP',
        caracMin: 3,
        tachMin: 5,
        carSofiasDepart: 50,
        compSofiasDepart: 25,
        contactsSofiasDepart: 5
    };//END constantes
    
    /*****************************************************************************/
    /*                        Objets                                             */
    /*****************************************************************************/
    
    this.Competence = function(/* optional */ nom='',min=0,base=0,selfChanged=false){
        this.nom = nom;
        this.min = min;
        this.base = base;
        //Pour éviter les appels récursifs des watchs...
        //Il semble que depuis 2012 il y a demande pour ajouter
        //au core cette fonctionnalité dans la watch elle-même
        //puisque le cas est fréquent...
        this.selfChanged = selfChanged;
        this.rang = function(){
            return this.min+this.base;
        };
    };//END Competence
    
    this.Contact = function(/* optional */ nom='', occupation='', min=0,base=0,selfChanged=false){
        this.nom = nom;
        this.occupation = occupation;
        this.min = min;
        this.base = base;
        //Pour éviter les appels récursifs des watchs
        this.selfChanged = selfChanged;

        this.rang = function(){
            return this.min+this.base;
        }
    };//END Contact
    
    this.Equipement = function(/* optional */ nom='', constructeur='', type='', cout=0){
        this.nom = nom;
        this.constructeur = constructeur;
        this.type = type;
        this.cout = cout;
    };//END Equipement

    this.Personnage = function(){
        /*******************************************
        *************** FONCTIONS ******************
        ********************************************
        *******************************************/
            
         /*****************************************************************************/
        /*                        Générateur de noms                                 */
        /*****************************************************************************/
            
        //Génération d'un GUID 
        this.guid = function(){
          function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
          }
          return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
        };//END guid
    
        //Retourne un préfixe aléatoire selon une table
        this.prefixe = function(){
            //But : fabriquer des débuts de nom
            //à la grecque ou bretinienne
            //TODO: peut-être choisir selon l'origine...
            var prefixes = [
                'Aar', 'Ab','Aga','Alc','Amb', 'Aphr', 'Aphi', 'Ast', 'Aur','Azo',
                'Baud', 'Barth', 'Ben', 'Bil', 'Bell', 'Barn', 'Bjor', 'Bjar', 'Bjur',
                'Gab', 'Geor', 'Garn', 'Gu', 'Gre', 'Dav', 'Ded', 'Eli', 'Hec', 'Hen',
                'Herm', 'Euth', 'Zach', 'Zen', 'Zeph', 'Zoil', 'Thal', 'Thol', 'Thul',
                'Thi', 'Isi', 'Joc', 'Jach', 'Joun', 'Matt', 'Math', 'Madh', 'Max', 'Mith',
                'Mar', 'Mab','Xeno', 'Xanth', 'Xan', 'Xun','Xin','Pos', 'Pas', 'Pal', 'Pil',
                'Pri', 'Pro', 'Pto','Pta','Pyr','Rhad','Rhod','Rob','Rab','Rol','Rod','Syp',
                'Spyr','Step','Sim','Soc','Soph','Ser','Tele','Tim','Tit','Tryp','Phr','Or',
                'Ori','Ari','Ar','Ned'
            ];

            var index = this.de(0,prefixes.length-1);
            return prefixes[index];
        };//END prefixe

        //Vérifie si les 3 derniers caractères sont une suite de consonnes
        this.troisConsonnes = function(lettre1,lettre2,lettre3){
            const regex = /[bcdfghjklmnpqrstvwxz]/i;

            var patt = new RegExp(regex);
            if(     true === patt.test(lettre1)
               &&   true === patt.test(lettre2)
               &&   true === patt.test(lettre3)){
                return true;
            }

            return false;
        };//END troisConsonnes

        //Fournit le milieu du nom, aléatoirement
        this.milieu = function(taille, actuel=''){
            var paires = 'abecualdefegaheijikilimonopuoqrisateuvewxeyezea';

            var lettre = '';
            var name = '';
            for(var i=0;i<taille;i++){
                lettre = paires.substr(this.de(0,paires.length),1);

                if(actuel.length > 2){
                    var lettreA = actuel.substr(i-1,1);
                    var lettreAA = actuel.substr(i-2,1);
                    //3 lettres identiques d'affilées, c'est moche
                    while(lettre === lettreA && lettre === lettreAA){
                        lettre = paires.substr(this.de(0,paires.length),1);
                    }

                    //3 consonnes l'une après l'autre bof...
                    while(this.troisConsonnes(lettreAA, lettreA, lettre)){
                        lettre = paires.substr(this.de(0,paires.length),1);
                    }

                    //certains couples sont impossibles (tw, tz etc.)
                    while(
                            (lettreA === 't' && lettre == 'z')
                        ||  (lettreA === 't' && lettre == 'w')
                        ||  (lettreA === 'b' && lettre == 'x')
                        ||  (lettreA === 'r' && lettre == 'h')
                        ||  (lettreA === 'b' && lettre == 'q')
                    ){
                        lettre = paires.substr(this.de(0,paires.length),1);
                    }
                }

                name += lettre;
                actuel += lettre;
            }

            return name;
        };//END milieu

        //Fournit le suffixe du nom selon une table
        this.suffixe = function(){
            //But : fabriquer des fins de nom
            //à la grecque ou bretinienne
            //TODO: peut-être choisir selon l'origine...
            var suffixes = [
                'poulos',            'palos',            'pilos',
                'ousis',            'onis',            'nos',
                'dato',            'mos',            'tzo',
                'okis',            'akis',            'th',
                'san',            'sen',            'son',
                'sun',             'arsan',            'arsen',
                'arson',            'arsun',            'ksan',
                'ksen',            'kson',            'ksun',
                'gan',            'gen',            'gon',
                'gun',            'dran',            'dren',
                'dron',            'drun',            'skan',
                'sken',            'skon',            'skun',
                'garn',            'gorn',            'gern',
                'gurn',            'ate',             'ote',
                'ocle'
            ];

            var index = this.de(0,suffixes.length-1);
            return suffixes[index];
        };//END suffixes

        //Génère un prénom et un nom en utilisant les fonctions ci-dessus
        this.nomGenerateur = function(){
            var prenom = this.prefixe();
            prenom += this.milieu(this.de(1,3),prenom);

            var nom = this.prefixe();
            nom += this.milieu(this.de(1,2),nom)+this.suffixe();

            prenom = prenom.capitalizeFirstLetter();
            nom = nom.capitalizeFirstLetter();

            return prenom + ' ' + nom;
        };//END nomGenerateur

        /*****************************************************************************/
        /*                        Utilitaires                                        */
        /*****************************************************************************/

        //Tirage de dé
        this.de = function(min,max){
            return Math.floor(max*Math.random())+min;
        };//END de

        //Remise à zéro du personnage, soit totalement (dans ce cas toutes les 
        //valeurs sont remises à zéro), soit partiellement (dans ce cas certaines valeurs
        //telles que le guid, le nom, les compétences etc. sont conservées)
        this.remiseAZero = function(total=false){
            //Quand on regénère aléatoirement un perso 
            //on a pas forcément envie de changer son uid
            //son nom et son âge, etc., mais juste ses stats, par contre
            //pour un nouveau personnage si
            if( true === total ){
                this.uuid = this.guid();
                this.nom = this.nomGenerateur();
                this.age = self.constantes.ageDefaut;
                this.sexe = self.constantes.sexesListe[0];
                this.profession = self.constantes.professionDefaut;
                this.origine = self.constantes.originesListe[0];
                this.competencesListe = [
                    new self.Competence(this.langueMaternelle(this.origine),1,0,false)
                ];
                this.contactsListe = [];
                this.equipementListe = [];

                this.affinitePolitique = self.constantes.affinitesPolitiquesListe[0];
                this.affiniteGeopolitique = self.constantes.affinitesGeopolitiquesListe[0];
                this.affiniteMystique = self.constantes.affinitesMystiquesListe[0];
                this.affiniteMoeurs = self.constantes.affinitesMoeursListe[0];
            }

            this.metatype = self.constantes.metatypesListe[0];
            this.axePrecedentIndex = 0;
            this.axe(self.constantes.axesListe[0]);
            this.carSofias = self.constantes.carSofiasDepart;
            this.compSofias = self.constantes.compSofiasDepart;
            this.contactsSofias = self.constantes.contactsSofiasDepart;

            this.robustesseMin = self.constantes.caracMin;
            this._robustesseBase = 0;
            this.adresseMin = self.constantes.caracMin;
            this._adresseBase = 0;
            this.astuceMin = self.constantes.caracMin;
            this._astuceBase = 0;
            this.acuiteMin = self.constantes.caracMin;
            this._acuiteBase = 0;
            this.prestanceMin = self.constantes.caracMin;
            this._prestanceBase = 0;
            this.determinationMin = self.constantes.caracMin;
            this._determinationBase = 0;
            this._zoisBase = 0;
            this.tachyosMin = self.constantes.tachMin;
            this._tachyosBase = 0;
            this._polemBase = 0;
            this._stoaBase = 0;
        }; //END personnageRAZ

        this.aleatoire = function(){
            var constantes = self.constantes;
            //Réinitialiser le personnage
            this.remiseAZero(false);
            //0-5 metatype
            var rand = this.de(0,6);
            this.metatype = constantes.metatypesListe[rand];
            //0-2 axe
            var rand = this.de(0,3);
            this.axe(constantes.axesListe[rand]);
            //Caractéristiques
            //TODO: randomizer l'ordre dans lequel les Caracs sont prises
            //TODO: ajouter TACH
            //TODO: pondérer fonction du metatype (selon CARACS maîtresses)
            var min = 0;
            var max = 15;
            rand = this.de(min,max);
            this.astuceBase(rand);
            rand = this.de(min,max);
            this.acuiteBase(rand);
            rand = this.de(min,max);
            this.adresseBase(rand);

            //A partir de ce point, au maximum, on a 45 sofias utilisés, donc
            //pour chaque prochain rand, on prend au maximum ce qu'il reste...
            max = (this.carSofias<max) ? this.carSofias : max;
            rand = this.de(min,max);
            this.robustesseBase(rand);

            max = (this.carSofias<max) ? this.carSofias : max;
            rand = this.de(min,max);
            this.determinationBase(rand);

            this.prestanceBase(this.carSofias);

            //Compétences de metatype
            for(var i=0; i<this.metatype.competences.length;i++){
                var comp = new self.Competence(
                    this.metatype.competences[i],
                    1,0,false
                );
                this.competencesListe.push( comp );
            };
        }; //END personnageAleatoire
        
        /************** EXPORTATION **********************************/

        this.redux = function(){
            var perso = {
                uuid: this.uuid,
                nom: this.nom,
                age: this.age,
                sexe: this.sexe,
                origine: this.origine,
                capital: this.capital(),

                sofias: this.sofias(),
                carSofias: this.carSofias,
                compSofias: this.compSofias,
                contactsSofias: this.contactsSofias,
                
                metatype: this.metatype.nom,
                axe: this._axe.nom,
                salaire: this.salaire.nom,

                acuite: this.acuite(),
                _acuiteBase: this._acuiteBase,
                adresse: this.adresse(),
                _adresseBase: this._adresseBase,
                astuce: this.astuce(),
                _astuceBase: this._astuceBase,
                determination: this.determination(),
                _determinationBase: this._determinationBase,
                prestance: this.prestance(),
                _prestanceBase: this._prestanceBase,
                robustesse: this.robustesse(),
                _robustesseBase: this._robustesseBase,

                impact: this.impact(),
                polem: this.polem(),
                _polemBase: this._polemBase,
                stoa: this.stoa(),
                _stoaBase: this._stoaBase,
                tachyos: this.tachyos(),
                _tachyosBase: this._tachyosBase,
                zois: this.zois(),
                _zoisBase: this._zoisBase,    

            };

            perso.affiniteMystique = this.affiniteMystique.nom;
            perso.affinitePolitique = this.affinitePolitique.nom;
            perso.affiniteGeopolitique = this.affiniteGeopolitique.nom;
            perso.affiniteMoeurs = this.affiniteMoeurs.nom;

            perso.competences = [new Array(this.competencesListe.length)];
            for(var i=0;i<this.competencesListe.length;i++){           
                perso.competences[i] = {
                    nom: this.competencesListe[i].nom,
                    min: this.competencesListe[i].min,
                    base: this.competencesListe[i].base,
                    rang: this.competencesListe[i].rang()
                };            
            }

            perso.contacts = new Array(this.contactsListe.length);
            for(var i=0;i<this.contactsListe.length;i++){            
                perso.contacts[i] = {
                    nom: this.contactsListe[i].nom,
                    occupation: this.contactsListe[i].occupation,
                    base: this.contactsListe[i].base,
                    rang: this.contactsListe[i].rang()
                };        
            }

            perso.equipement = new Array(this.equipementListe.length);
            for(var i=0;i<this.equipementListe.length;i++){            
                perso.equipement[i] = {
                    constructeur: this.equipementListe[i].constructeur,
                    nom: this.equipementListe[i].nom,
                    type: this.equipementListe[i].type,
                    cout: this.equipementListe[i].cout
                }
            }        

            return perso;
        }; //END redux    
        
        this.extract = function(persoRedux){
            this.uuid = persoRedux.uuid;
            this.nom = persoRedux.nom;
            this.age = parseInt(persoRedux.age);
            this.sexe = persoRedux.sexe;
            this.origine = persoRedux.origine;
            
            this.carSofias = parseInt(persoRedux.carSofias);
            this.compSofias = parseInt(persoRedux.compSofias);
            this.contactsSofias = parseInt(persoRedux.contactsSofias); 

            this._acuiteBase = parseInt(persoRedux._acuiteBase);
            this._adresseBase = parseInt(persoRedux._adresseBase);
            this._astuceBase = parseInt(persoRedux._astuceBase);
            this._determinationBase = parseInt(persoRedux._determinationBase);
            this._prestanceBase = parseInt(persoRedux._prestanceBase);
            this._robustesseBase = parseInt(persoRedux._robustesseBase);
                
            this._polemBase = parseInt(persoRedux._polemBase);
            this._stoaBase = parseInt(persoRedux._stoaBase);
            this._tachyosBase = parseInt(persoRedux._tachyosBase);
            this._zoisBase = parseInt(persoRedux._zoisBase);
            
            //Metatype
            for(let i=0;i<self.constantes.metatypesListe.length;i++){
                if(self.constantes.metatypesListe[i].nom === persoRedux.metatype){
                    this.metatype = self.constantes.metatypesListe[i];
                    break;
                }
            }
            
            //Axe
            for(let i=0;i<self.constantes.axesListe.length;i++){
                if(self.constantes.axesListe[i].nom === persoRedux.axe){
                    this._axe = self.constantes.axesListe[i];
                    this.axePrecedentIndex = i;
                    break;
                }
            }
            
            //Salaire
            for(let i=0;i<self.constantes.salairesListe.length;i++){
                if(self.constantes.salairesListe[i].nom === persoRedux.salaire){
                    this.salaire = self.constantes.salairesListe[i];
                    break;
                }
            }
            
            //Compétences
            this.competencesListe = new Array();
            for(let i=0;i<persoRedux.competences.length;i++){
                this.competencesListe.push(
                    new self.Competence(
                        persoRedux.competences[i].nom,
                        persoRedux.competences[i].min,
                        persoRedux.competences[i].base,
                        false
                    )
                );            
            }
            
            //Contacts            
            this.contactsListe = new Array();
            for(let i=0;i<persoRedux.contacts.length;i++){
                this.contactsListe.push(
                    new self.Contact(
                        persoRedux.contacts[i].nom,
                        persoRedux.contacts[i].occupation,
                        0,
                        persoRedux.contacts[i].base,
                        false
                    )
                );            
            }
            //Equipement   (problème, plusieurs listes...)         
            this.equipementListe = new Array();
            
            for(let i=0;i<persoRedux.equipement.length;i++){
                //Parcourir chaque liste d'équipement pour trouver le bon
                //mais éviter de tout parser à chaque passe
                var trouve = false;
                var piece = null;                
                
                for(let j=0;j<self.constantes.equipementArmesAFeuListe.length;j++){
                    if(
                        self.constantes.equipementArmesAFeuListe[j].nom === persoRedux.equipement[i].nom
                        &&
                        self.constantes.equipementArmesAFeuListe[j].constructeur === persoRedux.equipement[i].constructeur
                    ){
                        trouve = true;
                        piece = self.constantes.equipementArmesAFeuListe[j];
                        break;
                    }
                }
                
                if(trouve){
                    this.equipementListe.push(piece);
                    continue;
                }          
                
                for(let j=0;j<self.constantes.equipementArmesDiversListe.length;j++){
                    if(
                        self.constantes.equipementArmesDiversListe[j].nom === persoRedux.equipement[i].nom
                        &&
                        self.constantes.equipementArmesDiversListe[j].constructeur === persoRedux.equipement[i].constructeur
                    ){
                        trouve = true;
                        piece = self.constantes.equipementArmesDiversListe[j];
                        break;
                    }
                }
                
                if(trouve){
                    this.equipementListe.push(piece);
                    continue;
                }                
                
                for(let j=0;j<self.constantes.equipementProtectionsListe.length;j++){
                    if(
                        self.constantes.equipementProtectionsListe[j].nom === persoRedux.equipement[i].nom
                        &&
                        self.constantes.equipementProtectionsListe[j].constructeur === persoRedux.equipement[i].constructeur
                    ){
                        trouve = true;
                        piece = self.constantes.equipementProtectionsListe[j];
                        break;
                    }
                }
                
                if(trouve){
                    this.equipementListe.push(piece);
                    continue;
                }                
                
                for(let j=0;j<self.constantes.equipementAutokinitesListe.length;j++){
                    if(
                        self.constantes.equipementAutokinitesListe[j].nom === persoRedux.equipement[i].nom
                        &&
                        self.constantes.equipementAutokinitesListe[j].constructeur === persoRedux.equipement[i].constructeur
                    ){
                        trouve = true;
                        piece = self.constantes.equipementAutokinitesListe[j];
                        break;
                    }
                }
                
                if(trouve){
                    this.equipementListe.push(piece);
                    continue;
                }                
                
                for(let j=0;j<self.constantes.equipementEolesListe.length;j++){
                    if(
                        self.constantes.equipementEolesListe[j].nom === persoRedux.equipement[i].nom
                        &&
                        self.constantes.equipementEolesListe[j].constructeur === persoRedux.equipement[i].constructeur
                    ){
                        trouve = true;
                        piece = self.constantes.equipementEolesListe[j];
                        break;
                    }
                }
                
                if(trouve){
                    this.equipementListe.push(piece);
                    continue;
                }                 
                
                for(let j=0;j<self.constantes.equipementHermaphoresListe.length;j++){
                    if(
                        self.constantes.equipementHermaphoresListe[j].nom === persoRedux.equipement[i].nom
                        &&
                        self.constantes.equipementHermaphoresListe[j].constructeur === persoRedux.equipement[i].constructeur
                    ){
                        trouve = true;
                        piece = self.constantes.equipementHermaphoresListe[j];
                        break;
                    }
                }
                
                if(trouve){
                    this.equipementListe.push(piece);
                    continue;
                }              
                
                for(let j=0;j<self.constantes.equipementPhreakboxesListe.length;j++){
                    if(
                        self.constantes.equipementPhreakboxesListe[j].nom === persoRedux.equipement[i].nom
                        &&
                        self.constantes.equipementPhreakboxesListe[j].constructeur === persoRedux.equipement[i].constructeur
                    ){
                        trouve = true;
                        piece = self.constantes.equipementPhreakboxesListe[j];
                        break;
                    }
                }
                
                if(trouve){
                    this.equipementListe.push(piece);
                    continue;
                }                 
                
                for(let j=0;j<self.constantes.equipementIchornetiqueListe.length;j++){
                    if(
                        self.constantes.equipementIchornetiqueListe[j].nom === persoRedux.equipement[i].nom
                        &&
                        self.constantes.equipementIchornetiqueListe[j].constructeur === persoRedux.equipement[i].constructeur
                    ){
                        trouve = true;
                        piece = self.constantes.equipementIchornetiqueListe[j];
                        break;
                    }
                }
                
                if(trouve){
                    this.equipementListe.push(piece);
                    continue;
                }
                       
            }
            
            //Affinités
            var affinitesTrouvees = 0;
            for(let i=0;i<self.constantes.affinitesListe.length;i++){
                //Si on a trouvé les 4 affinités, inutile de poursuivre
                if(affinitesTrouvees === 4){
                    break;
                }
                if(self.constantes.affinitesListe[i].nom === persoRedux.affiniteGeopolitique){
                    this.affiniteGeopolitique = self.constantes.affinitesListe[i];
                    affinitesTrouvees++;
                    continue;
                }
                if(self.constantes.affinitesListe[i].nom === persoRedux.affinitePolitique){
                    this.affinitePolitique = self.constantes.affinitesListe[i];
                    affinitesTrouvees++;
                    continue;
                }
                if(self.constantes.affinitesListe[i].nom === persoRedux.affiniteMystique){
                    this.affiniteMystique = self.constantes.affinitesListe[i];
                    affinitesTrouvees++;
                    continue;
                }
                if(self.constantes.affinitesListe[i].nom === persoRedux.affiniteMoeurs){
                    this.affiniteMoeurs = self.constantes.affinitesListe[i];
                    affinitesTrouvees++;
                    continue;
                }                
            }
            
                
        }; //END extract 

        this.html = function(reduxPerso){ return '<div>Bientôt!</div>';}; //END html
        this.csv = function(reduxPerso){ return 'Bientôt!';}; //END csv  
        this.pdf = function(reduxPerso){ return 'Bientôt!';}; //END pdf     

        this.latex = function(reduxPerso){
            var archetype = '';
            var lf = '\n';
            //4 espaces = 1 tab
            var tb = '    ';
            var bs = '\\';

            archetype += '%%%%%%%%%%%%% ARCHETYPE DU '+reduxPerso.metatype+'%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%'+lf;

            archetype += bs+'section{'+reduxPerso.metatype+'}'+lf;

            archetype += bs+'begin{introtext}'+lf;
            archetype += reduxPerso.nom+' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a accumsan diam. Vivamus id metus viverra, blandit diam vitae, consequat odio. Etiam sed justo non augue imperdiet eleifend vel sit amet enim. Nullam nec ornare sapien. Etiam a ultrices massa, eget malesuada felis. In eros augue, laoreet ut dui ac, egestas condimentum ex. Aliquam erat volutpat. Vivamus mattis massa non sollicitudin fringilla.'+lf;
            archetype += bs+'end{introtext}'+lf;
            archetype += bs+'includegraphics[scale=0.6]{img/ArchetypePlaceholder.png}'+bs+bs+lf;
            archetype += bs+'emph{'+reduxPerso.nom+', une fauconne enragée}'+lf;
            archetype += bs+'vfill'+lf;
            archetype += bs+'columnbreak'+lf;
            archetype += lf;
            archetype += bs+'noindent %otherwise we have the paragraph start indent!'+lf;
            archetype += bs+'textbf{Données personnelles}'+lf;
            archetype += bs+'begin{tabbing}'+lf;
            archetype += bs+'hspace{2.5cm} '+bs+'= '+bs+'hspace{0.5cm} '+bs+'= '+bs+'hspace{3cm} '+bs+'kill'+lf;
            archetype += tb+'Metatype '+bs+'> : '+bs+'> '+reduxPerso.metatype+bs+bs+lf;
            archetype += tb+'Axe'+bs+'>:'+bs+'>'+reduxPerso.axe+bs+bs+lf;
            archetype += tb+'Politique'+bs+'>:'+bs+'>'+reduxPerso.affinitePolitique+bs+bs+lf;
            archetype += tb+'Géopolitique'+bs+'>:'+bs+'>'+reduxPerso.affiniteGeopolitique+bs+bs+lf;
            archetype += tb+'Moeurs'+bs+'>:'+bs+'>'+reduxPerso.affiniteMoeurs+bs+bs+lf;
            archetype += tb+'Mystique'+bs+'>:'+bs+'>'+reduxPerso.affiniteMystique+lf;
            archetype += bs+'end{tabbing}'+lf;
            archetype += bs+'textbf{Caractéristiques}'+lf;
            archetype += bs+'begin{tabbing}'+lf;
            archetype += bs+'hspace{2.5cm} '+bs+'= '+bs+'hspace{0.5cm} '+bs+'= '+bs+'hspace{3cm} '+bs+'kill'+lf;
            archetype += tb+bs+'textcolor{CaracCode}{AC}uité'+bs+'>:'+bs+'>'+reduxPerso.acuite+bs+bs+lf;
            archetype += tb+bs+'textcolor{CaracCode}{AD}resse'+bs+'>:'+bs+'>'+reduxPerso.adresse+bs+bs+lf;
            archetype += tb+bs+'textcolor{CaracCode}{AS}tuce'+bs+'>:'+bs+'>'+reduxPerso.astuce+bs+bs+lf;
            archetype += tb+bs+'textcolor{CaracCode}{DE}termination'+bs+'>:'+bs+'>'+reduxPerso.determination+bs+bs+lf;
            archetype += tb+bs+'textcolor{CaracCode}{PR}estance'+bs+'>:'+bs+'>'+reduxPerso.prestance+bs+bs+lf;
            archetype += tb+bs+'textcolor{CaracCode}{RO}bustesse'+bs+'>:'+bs+'>'+reduxPerso.robustesse+bs+bs+lf;
            archetype += tb+bs+'textcolor{CaracCode}{IM}pact'+bs+'>:'+bs+'>'+reduxPerso.impact+bs+bs+lf;
            archetype += tb+bs+'textcolor{CaracCode}{PO}lem'+bs+'>:'+bs+'>'+reduxPerso.polem+bs+bs+lf;
            archetype += tb+bs+'textcolor{CaracCode}{ST}oa'+bs+'>:'+bs+'>'+reduxPerso.stoa+bs+bs+lf;
            archetype += tb+bs+'textcolor{CaracCode}{TA}chyos'+bs+'>:'+bs+'>'+reduxPerso.tachyos+bs+bs+lf;
            archetype += tb+bs+'textcolor{CaracCode}{ZO}is'+bs+'>:'+bs+'>'+reduxPerso.zois+lf;
            archetype += bs+'end{tabbing}'+lf;
            archetype += bs+'textbf{Compétences}'+lf;
            archetype += bs+'begin{tabbing}'+lf;
            archetype += bs+'hspace{5cm} '+bs+'= '+bs+'hspace{0.5cm} '+bs+'= '+bs+'hspace{3cm} '+bs+'kill'+lf;

            for(var i=0;i<reduxPerso.competences.length;i++){            
                archetype += tb+reduxPerso.competences[i].nom+bs+'>:'+bs+'>'+reduxPerso.competences[i].rang+bs+bs+lf;
            }

            //!!!!! attention à supprimer le dernier \\ !!!!!!
            archetype = archetype.substr(0,archetype.length-3)+lf;

            archetype += bs+'end{tabbing}'+lf;
            archetype += bs+'textbf{Contacts}'+lf;
            archetype += bs+'begin{tabbing}'+lf;
            archetype += bs+'hspace{5cm} '+bs+'= '+bs+'hspace{0.5cm} '+bs+'= '+bs+'hspace{3cm} '+bs+'kill'+lf;

            for(var i=0;i<reduxPerso.contacts.length;i++){            
                archetype += tb+reduxPerso.contacts[i].nom+''+bs+'>:'+bs+'>'+reduxPerso.contacts[i].rang+bs+bs+lf;
            }

            //!!!!! attention à supprimer le dernier \\ !!!!!!        
            archetype = archetype.substr(0,archetype.length-3)+lf;

            archetype += bs+'end{tabbing}'+lf;
            archetype += bs+'textbf{Équipement}'+lf;
            archetype += bs+'begin{description}'+lf;

            for(var i=0;i<reduxPerso.equipement.length;i++){         
                archetype += tb+bs+'item['+reduxPerso.equipement[i].type+'] '+reduxPerso.equipement[i].constructeur+' : '+reduxPerso.equipement[i].nom+ ' ('+reduxPerso.equipement[i].cout+' DR)'+lf;
            }

            archetype += bs+'end{description}'+lf;          

            return archetype;
        };//END latex
        
        /************* Fonctions 'système' ******************/
        
        //Sauver un personnage dans le local storage
        this.sauver = function(){
            if (typeof(Storage) !== "undefined") {
                var persoRedux = this.redux();

                //Sauver
                //1) récupérer la sauvegarde actuelle (un array json)
                var listePersos = this.chargerListePersonnages();
                
                //2) ajouter le perso 'redux' à la liste
                //peut-être l'a-ton déjà sauvé
                var index = -1;
                
                for(let i=0;i<listePersos.length;i++){
                    if(listePersos[i].uuid === persoRedux.uuid ){
                        index = i;
                        break;
                    }
                }                
                    
                if( index > -1 ){
                    listePersos[index] = persoRedux;
                }
                else{
                   listePersos.push(persoRedux); 
                }
                
                //3) écraser la liste
                localStorage.listePersos = JSON.stringify(listePersos);
                //Mise à jour liste en mémoire
                this.listePersonnages = listePersos;
                //console.log('Personnage '+persoRedux.uuid+' sauvé.');
            } else {
                alert('Votre browser ne supporte pas la sauvegarde locale.');
            }
        }; //END sauver
        
        //Charger le personnage au format redux du local storage
        this.charger = function(uuid){
            //console.log('Recherche du personnage '+uuid);
            if(typeof(uuid) === "undefined"){
                alert('Personnage non défini!');
                return;
            }
            
            //1) récupérer la liste du local storage
            var listePersos = this.chargerListePersonnages();
            
            //2) chercher le perso
            var index = -1;

            for(let i=0;i<listePersos.length;i++){
                if(listePersos[i].uuid === uuid ){
                    index = i;
                    break;
                }
            }                

            if( index === -1 ){
                alert('Personnage non trouvé!');
            }
            else{
                //console.log('Personnage trouvé:\n'+JSON.stringify(listePersos[index]));
                this.extract(listePersos[index]);
            }
            
            //this.extract(persoRedux);
        }; //END charger        
        
        this.chargerListePersonnages = function(){            
            //1) récupérer la liste du local storage
            var listePersos = localStorage.listePersos;
                
            if(     typeof(listePersos) === 'undefined'
               ||   listePersos.length===0){
                listePersos = '[]';
            }
            
            listePersos = JSON.parse(listePersos);

            //console.log('Liste des personnages chargée ('+listePersos.length+' persos):\n'+JSON.stringify(listePersos));
            
            return listePersos;
        }; //END chargerListe      
        
        this.purgerListe = function(){ 
            if( confirm('Tu veux vraiment effacer toute la liste?') ){
                localStorage.removeItem('listePersos');
                this.listePersonnages = new Array();
            }
        }; //END purgerListe
        
        this.exporter = function(){
            var perso = '';
        
            var type = 'text/plain';
            var ext = '.txt';
            
            switch(self.constantes.formatExportation){
                case 'json':
                    perso = JSON.stringify(this.redux());
                    type = 'text/json';
                    ext = '.json';
                    break;
                case 'LaTeX':
                    perso = this.latex(this.redux());
                    type = 'application/x-tex';
                    ext = '.tex';
                    break;
                case 'csv':
                    perso = this.csv(this.redux());
                    type = 'text/csv';
                    ext = '.csv';
                    break;
                case 'pdf':
                    perso = this.pdf(this.redux());
                    type = 'application/pdf';
                    ext = '.pdf';
                    break;
                case 'html':
                    perso = this.html(this.redux());
                    type = 'text/html';
                    ext = '.html';
                    break;
            }

            var formBlob = new Blob([perso], { type: type });
            var a = document.getElementById('personnageExport');
            a.setAttribute('href', window.URL.createObjectURL(formBlob));
            a.download = this.metatype.nom+'_'+this.nom+ext; 

            var clickEvent = new MouseEvent("click", {
                    "view": window,
                    "bubbles": true,
                    "cancelable": false
                });
            
            a.dispatchEvent(clickEvent);

            return perso;
        };// END exporter         
        
        this.langueMaternelle = function(origine){
            var index = self.constantes.originesListe.indexOf(origine);
            var langue1 = 'Langue maternelle : ';
            var langue2 = (index>=0 && index<self.constantes.languesListe.length)?self.constantes.languesListe[index]:'inconnue';
            return langue1+langue2;
        };//END langueMaternelle
        
        /*********************** PROPRIETES *************************/
        /*******************ET GETTERS/SETTERS **********************/
        
        this.listePersonnages = this.chargerListePersonnages();
        
        //ID unique pour référence
        this.uuid = this.guid();
        //Données génériques
        this.nom = this.nomGenerateur();
        this.age = self.constantes.ageDefaut;
        this.sexe = self.constantes.sexesListe[0];
        this.origine = self.constantes.originesListe[0];
        this.profession = self.constantes.professionDefaut;
        this.salaire = self.constantes.salairesListe[0];
        this.metatype = self.constantes.metatypesListe[0];
        this.axePrecedentIndex = 0;
        this._axe = self.constantes.axesListe[0];
        this.axe = function(newValue){
            if(arguments.length===0){
                return this._axe;
            }
            
            //Remettre à 0 les bons compteurs
            switch(this.axePrecedentIndex){
                case 0:
                    //Crésus - calculé automatiquement par capital(), rien à faire
                    break;
                case 1:
                    //Aristote - bonus en compétences et contacts
                    this.compSofias -= self.constantes.bonusAristoteCompetences;
                    this.contactsSofias -= self.constantes.bonusAristoteContacts;
                    break;
                case 2:
                    //Persée - bonus en caractéristiques
                    this.carSofias -= self.constantes.bonusPerseeCaracteristiques;
                    break;                    
            }
            
            //Mettre à jour l'index du précédent pour le prochain changement
            this.axePrecedentIndex = self.constantes.axesListe.indexOf(newValue);   
                        
            //Appliquer les bonus avec l'index actuel
            switch(this.axePrecedentIndex){
                case 0:
                    //Crésus - calculé automatiquement par capital(), rien à faire
                    break;
                case 1:
                    //Aristote - bonus en compétences et contacts
                    this.compSofias += self.constantes.bonusAristoteCompetences;
                    this.contactsSofias += self.constantes.bonusAristoteContacts;
                    break;
                case 2:
                    //Persée - bonus en caractéristiques
                    this.carSofias += self.constantes.bonusPerseeCaracteristiques;
                    break;                  
            }
            
            this._axe = newValue;
        }; // END axe   
        
        this.carSofias = self.constantes.carSofiasDepart;
        this.compSofias = self.constantes.compSofiasDepart;
        this.contactsSofias = self.constantes.contactsSofiasDepart;
        this.sofias = function(){
          return this.carSofias+this.compSofias+this.contactsSofias;  
        };
        //Compétences - de base au moins la langue maternelle
        this.competencesListe = [
            new self.Competence(this.langueMaternelle(self.constantes.originesListe[0]), 1,0,false)
        ];               
        this.supprimerCompetence = function(competence){
            var index = this.competencesListe.indexOf(competence);
            this.competencesListe.splice(index,1);
            //Resetter les sofias!
            this.compSofias += competence.base;
        };        
        this.ajouterCompetence = function(nom='Compétence'){
            var competence = new self.Competence(
                nom,
                0,0,false
            );
            this.competencesListe.push( competence );
        };
        this.initialiseCompetences = function(){
            this.competencesListe.splice(1, this.competencesListe.length);
            var compDefaut = this.metatype.competences;
            
            for(var i=0; i<compDefaut.length;i++){
                var comp = new self.Competence(
                        compDefaut[i],
                        1,0,false
                    );
                this.competencesListe.push( comp );
            }
        };
        this.changementMetatype = function(oldValue, newValue){
            //On sait que les compétences de metatype
            //sont à index 1 à 4
            //Si le nouveau metatype a 1 ou plusieurs compétences
            //gratuites identiques à l'ancien, il faut conserver les rangs.
            //Il faut aussi gérer le cas de figure où une compétence
            //de metatype était auparavant listée comme compétence normale
            //donc
            //et il faut conserver les autres compétences
            
            //1) créer la nouvelle liste (pour être sûr d'avoir les 
            //compétences par défaut dans l'ordre correct pour le
            //prochain passage ici...)
            var nouvelleListe = [];
            var defautListe = this.metatype.competences;
            var ancienneListe = this.competencesListe;
            
            //Langue maternelle
            var comp = new self.Competence(
                        ancienneListe[0].nom,
                        1,ancienneListe[0].base,false
            );
            nouvelleListe.push(comp); //langue maternelle
            
            //Compétences par défaut du metatype
            for(var i=0;i<defautListe.length;i++){
                comp = new self.Competence(
                        defautListe[i],
                        1,0,false
                    );
                nouvelleListe.push(comp);
            }
                        
            //2) parcourir les existantes pour récupérer les rangs éventuels            
            for(var i=0;i<ancienneListe.length;i++){
                //Si on trouve la compétence i dans la nouvelle liste
                //on récupère les points mis dans base.
                //Sinon, on ajoute la compétence
                //Attention à ne pas dépasser le rang max 
                //(cas de la compétence 'normale' mise à 5 points devenue
                //compétence par défaut avec un min de 1...)
                //L'inverse ne pose pas de problème (max 4 point répartis donc
                //passage de rang 4 à rang 5 au maximum)
                
                //Parcourir la nouvelle liste pour voir si on trouve
                //la compétence actuelle
                var trouve = false;
                for(var j=0; j<nouvelleListe.length;j++){                    
                    if(ancienneListe[i].nom === nouvelleListe[j].nom){
                        nouvelleListe[j].base = ancienneListe[i].base;
                        
                        if(nouvelleListe[j].rang() > 5){
                            nouvelleListe[j].base = 4;
                            //Ne pas oublier de mettre à jour les Sofias,
                            //ils ne sont tenus à jour que par la liste
                            //de personnage...
                            this.compSofias++;
                        }                        
                        trouve = true;
                        break;
                    }
                }
                
                //Si on n'a pas trouvé la compétence, on peut l'ajouter directement
                //à la suite de la nouvelle liste
                if(!trouve){
                    comp = new self.Competence(
                        ancienneListe[i].nom,
                        0,ancienneListe[i].base,false
                    );
                    nouvelleListe.push(comp);
                }
            }
            
            //3) remplacer l'existante par la nouvelle liste
            this.competencesListe = nouvelleListe;
        }; //END changementMetatype
        this.contactsListe = [];        
        this.supprimerContact = function(contact){
            var index = this.contactsListe.indexOf(contact);
            this.contactsListe.splice(index,1);
            //Resetter les sofias!
            this.contactsSofias += contact.base;
        };        
        this.ajouterContact = function(occupation='Occupation'){
            var contact = new self.Contact(
                this.nomGenerateur(),
                occupation,
                0,0,false
            );
            this.contactsListe.push( contact );
        };
        
        this.equipementListe = [];               
        this.supprimerEquipement = function(equipement){
            var index = this.equipementListe.indexOf(equipement);
            this.equipementListe.splice(index,1);
            //Le capital est auto-calculé à mesure
        };        
        this.ajouterEquipement = function(equipement){
            var copieEquipement;
            if(equipement){
                copieEquipement = new self.Equipement(
                    equipement.nom,
                    equipement.constructeur,
                    equipement.type,
                    equipement.cout
                );   
            }
            else{
                copieEquipement = new self.Equipement(
                    'Nom',
                    'Constructeur',
                    'Type',
                    0
                    );
            }
            this.equipementListe.push( copieEquipement );
        };
        
        this.affinitePolitique = self.constantes.affinitesPolitiquesListe[0];
        this.affiniteGeopolitique = self.constantes.affinitesGeopolitiquesListe[0];
        this.affiniteMystique = self.constantes.affinitesMystiquesListe[0];
        this.affiniteMoeurs = self.constantes.affinitesMoeursListe[0];
        
        /**------------>    CAPITAL         <------------------------**/
                
        this._capitalMin = function(){  
            var salaire = this.salaire.montant;   
            var fortune = (this._axe.nom === 'Crésus')?self.constantes.bonusCresusDrachmes:0;
            return salaire + ((salaire*12-salaire)/5)*(this.age-18)+fortune;
        };
        
        this._capitalEquipement = function(){
            var coutEquipement = 0;
            for(var i=0; i<this.equipementListe.length; i++){
                coutEquipement += parseInt(this.equipementListe[i].cout);
            }
            return coutEquipement;
        };
        
        this.capital = function(){
            return this._capitalMin()-this._capitalEquipement();
        };
        
        /*****************************************************************/
        /*******           Caractéristiques        ***********************/
        /*****************************************************************/
        
        /**------------>    ACUITE         <------------------------**/
        
        //Min ne change pas donc pas besoin de getter
        this.acuiteMin = self.constantes.caracMin;
        this._acuiteBase = 0;
        this.acuiteBase = function(newValue){
            if(arguments.length===0){
                return this._acuiteBase;
            }
                        
            var delta = newValue-this._acuiteBase;
            this.carSofias -= delta;

            if(this.carSofias<0){
                this.carSofias += delta;
                return this._acuiteBase;    
            }

            return (this._acuiteBase = newValue);
        };
        //Toujours calculé
        this.acuite = function(){
            return this.acuiteMin+this._acuiteBase;
        };
        
        /**------------>    ADRESSE         <------------------------**/
        
        //Min ne change pas donc pas besoin de getter
        this.adresseMin = self.constantes.caracMin;
        this._adresseBase = 0;
        this.adresseBase = function(newValue){
            if(arguments.length===0){
                return this._adresseBase;
            }
                        
            var delta = newValue-this._adresseBase;
            this.carSofias -= delta;
                
            if(this.carSofias<0){
                this.carSofias += delta;
                return this._adresseBase;    
            }
                
            return (this._adresseBase = newValue);
        };
        //Toujours calculé
        this.adresse = function(){
            return this.adresseMin+this._adresseBase;
        };
        
        /**------------>    ASTUCE         <------------------------**/
        
        //Min ne change pas donc pas besoin de getter
        this.astuceMin = self.constantes.caracMin;
        this._astuceBase = 0;
        this.astuceBase = function(newValue){
            if(arguments.length===0){
                return this._astuceBase;
            }
                        
            var delta = newValue-this._astuceBase;
            this.carSofias -= delta;
                
            if(this.carSofias<0){
                this.carSofias += delta;
                return this._astuceBase;    
            }
                
            return (this._astuceBase = newValue);
        };
        //Toujours calculé
        this.astuce = function(){
            return this.astuceMin+this._astuceBase;
        };
                
        /**------------>    DETERMINATION         <------------------------**/
        
        //Min ne change pas donc pas besoin de getter
        this.determinationMin = self.constantes.caracMin;
        this._determinationBase = 0;
        this.determinationBase = function(newValue){
            if(arguments.length===0){
                return this._determinationBase;
            }
                        
            var delta = newValue-this._determinationBase;
            this.carSofias -= delta;

            if(this.carSofias<0){
                this.carSofias += delta;
                return this._determinationBase;    
            }

            return (this._determinationBase = newValue);
        };
        //Toujours calculé
        this.determination = function(){
            return this.determinationMin+this._determinationBase;
        };
        
        /**------------>    PRESTANCE         <------------------------**/
        
        //Min ne change pas donc pas besoin de getter
        this.prestanceMin = self.constantes.caracMin;
        this._prestanceBase = 0;
        this.prestanceBase = function(newValue){
            if(arguments.length===0){
                return this._prestanceBase;
            }
            var delta = newValue-this._prestanceBase;
            this.carSofias -= delta;

            if(this.carSofias<0){
                this.carSofias += delta;
                return this._prestanceBase;    
            }

            return (this._prestanceBase = newValue);
        };
        //Toujours calculé
        this.prestance = function(){
            return this.prestanceMin+this._prestanceBase;
        };
        
        /**------------>    ROBUSTESSE         <------------------------**/
        
        //Min ne change pas donc pas besoin de getter
        this.robustesseMin = self.constantes.caracMin;
        this._robustesseBase = 0;
        this.robustesseBase = function(newValue){
            if(arguments.length===0){
                return this._robustesseBase;
            }
            var delta = newValue-this._robustesseBase;
            this.carSofias -= delta;

            if(this.carSofias<0){
                this.carSofias += delta;
                return this._robustesseBase;    
            }

            return (this._robustesseBase = newValue);                       
        };
        
        //Toujours calculé
        this.robustesse = function(){
            return this.robustesseMin+this._robustesseBase;
        }; 
        
        /**------------>    IMPACT          <------------------------**/
                
        this.impact = function(){
            var ro = this.robustesse();
            if(ro <= 5){
                return "-1";
            }
            if(ro <= 10){
                return "0";
            }
            if(ro <= 15){
                return "1D4";
            }
            if(ro <= 18){
                return "2D4";
            }
        };
        
        /**------------>    POLEM         <------------------------**/
        
        //Min ne change pas donc pas besoin de getter
        this.polemMin = 0;
        this._polemBase = 0;
        this.polemBase = function(newValue){
            if(arguments.length===0){
                return this._polemBase;
            }
                var delta = newValue-this._polemBase;
                this.carSofias -= delta;
                
                if(this.carSofias<0){
                    this.carSofias += delta;
                    return this._polemBase;    
                }
                
                return (this._polemBase = newValue);
        };
        //Toujours calculé
        this.polem = function(){
            return this.polemMin+this._polemBase;
        }; 
        
        
        /**------------>    STOA         <------------------------**/
        
        //Min ne change pas donc pas besoin de getter
        this.stoaMin = function(){return 5*(this.determination());};
        this._stoaBase = 0;
        this.stoaBase = function(newValue){
            if(arguments.length===0){
                return this._stoaBase;
            }
            var delta = newValue-this._stoaBase;
            this.carSofias -= delta;

            if(this.carSofias<0){
                this.carSofias += delta;
                return this._stoaBase;    
            }

            return (this._stoaBase = newValue);
        };
        //Toujours calculé
        this.stoa = function(){
            return this.stoaMin()+this._stoaBase;
        };
        /**------------>    TACHYOS         <------------------------**/
        
        //Min ne change pas donc pas besoin de getter
        this.tachyosMin = self.constantes.tachMin;
        this._tachyosBase = 0;
        this.tachyosBase = function(newValue){
            if(arguments.length===0){
                return this._tachyosBase;
            }
                        
            var delta = newValue-this._tachyosBase;
            this.carSofias -= 5*delta;

            if(this.carSofias<0){
                this.carSofias += 5*delta;
                return this._tachyosBase;    
            }

            return (this._tachyosBase = newValue);
        };
        
        //Toujours calculé
        this.tachyos = function(){
            return this.tachyosMin+this._tachyosBase;
        };
        
        /**------------>    ZOIS         <------------------------**/
        
        //Min ne change pas donc pas besoin de getter
        this.zoisMin = function(){return this.robustesse();};
        this._zoisBase = 0;
        this.zoisBase = function(newValue){
            if(arguments.length===0){
                return this._zoisBase;
            }
                        
            var delta = newValue-this._zoisBase;
            this.carSofias -= delta;

            if(this.carSofias<0){
                this.carSofias += delta;
                return this._zoisBase;    
            }

            return (this._zoisBase = newValue);
        };
        //Toujours calculé
        this.zois = function(){
            return this.zoisMin()+this._zoisBase;
        };
               
    }; //END Personnage
    
    this.personnage = new this.Personnage();  
});