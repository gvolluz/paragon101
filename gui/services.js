//SERVICE

function Competence(aName='',aMin='',aBase='',aAxeAuto='',aAxeManuel=''){
    this.nom = aName;
    this.min = aMin;
    this.base = aBase;
    this.axeAuto = aAxeAuto;
    this.axeManuel = aAxeManuel;
    //Pour éviter les appels récursifs des watch...
    //Il semble que depuis 2012 il y a demande pour ajouter
    //au core cette fonctionnalité dans la watch elle-même
    //puisque le cas est fréquent...
    this.selfChanged = false;
    this.rang = function(){
        return this.min
        +this.base
        +this.axeAuto
        +this.axeManuel;
    };
}

Competence.prototype = {
    nom: '',
    min: 0,
    base: 0,
    axeAuto: 0,
    axeManuel: 0,
    selfChanged: false
};

paragonApp.service('personnageService', function(){
    this.prefixes = function(){
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
    }
    
    this.troisConsonnes = function(lettre1,lettre2,lettre3){
        const regex = /[bcdfghjklmnpqrstvwxz]/i;
        
        var patt = new RegExp(regex);
        if(     true === patt.test(lettre1)
           &&   true === patt.test(lettre2)
           &&   true === patt.test(lettre3)){
            return true;
        }
        
        return false;        
    }
    
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
    };
    
    this.suffixes = function(){
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
    }
    
    
    this.nomGenerateur = function(){
        var prenom = this.prefixes();
        prenom += this.milieu(this.de(1,3),prenom);
        
        var nom = this.prefixes();
        nom += this.milieu(this.de(1,2),nom)+this.suffixes();
        
        prenom = prenom.capitalizeFirstLetter();
        nom = nom.capitalizeFirstLetter();
        
        return prenom + ' ' + nom;
    }
    
    
    
    this.de = function(min,max){
        return Math.floor(max*Math.random())+min;
    }
    
    this.guid = function(){
                  function s4() {
                    return Math.floor((1 + Math.random()) * 0x10000)
                      .toString(16)
                      .substring(1);
                  }
                  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                    s4() + '-' + s4() + s4() + s4();
                };
    
    this.constantes = {
        cookieNomListe: 'P101CL',
        axesListe: ['Crésus', 'Aristote', 'Persée', 'Héraklès', 'Panmetron'],
        metatypesListe: [
                    {   
                        nom: 'Hoplite',
                        competences:[
                             'Armes de poing',
                             'Armes d\'épaule',
                             'Premiers soins',
                             'Une compétence "professionnelle"'
                        ]
                    },
                    {
                        nom: 'Faucon',
                        competences:[
                             'Art martial au choix',
                             'Arme de mêlée au choix',
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
                             'Art martial: chemno lu'
                        ]
                    },
                    {   
                        nom: 'Rhéto',
                        competences:[
                             'Baratin',
                             'Séduction',
                             'Une étiquette au choix',
                             'Une compétence académique au choix'
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
        caracMin: 3,
        tachMin: 5,
        carSofiasDepart: 50,
        compSofiasDepart: 25,
    };
    
    this.personnage = {
        //ID pour le cookie/la DB
        uuid: this.guid(),
        //Données génériques
        nom: this.nomGenerateur(),
        age: 20,
        metatype: this.constantes.metatypesListe[2],
        axe: this.constantes.axesListe[2],
        carSofias: this.constantes.carSofiasDepart,
        compSofias: this.constantes.compSofiasDepart,
        //Compétences - de base au moins la langue maternelle
        competencesListe: [
            new Competence('Langue maternelle: XXXXX', 1,0,0,0,false)
        ],
        /*****************************************************************/
        /*******           Caractéristiques        ***********************/
        /*****************************************************************/
                
        /**------------>    ROBUSTESSE         <------------------------**/
        
        //Min ne change pas donc pas besoin de getter
        robustesseMin: this.constantes.caracMin,
        _robustesseBase: 0,
        _robustesseAxeAuto: 0,
        _robustesseAxeManuel: 0,
        robustesseBase: function(newValue){
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
        },
        robustesseAxeAuto: function(newValue){
            return arguments.length ?  (this._robustesseAxeAuto = newValue): this._robustesseAxeAuto;
        },
        robustesseAxeManuel: function(newValue){
            return arguments.length ? (this._robustesseAxeManuel = newValue) : this._robustesseAxeManuel;
        },
        //Toujours calculé
        robustesse: function(){
            return this.robustesseMin
                    +this._robustesseBase
                    +this._robustesseAxeAuto
                    +this._robustesseAxeManuel;
        },
        
        /**------------>    ADRESSE         <------------------------**/
        
        //Min ne change pas donc pas besoin de getter
        adresseMin: this.constantes.caracMin,
        _adresseBase: 0,
        _adresseAxeAuto: 0,
        _adresseAxeManuel: 0,
        adresseBase: function(newValue){
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
        },
        adresseAxeAuto: function(newValue){
            return arguments.length ?  (this._adresseAxeAuto = newValue): this._adresseAxeAuto;
        },
        adresseAxeManuel: function(newValue){
            return arguments.length ? (this._adresseAxeManuel = newValue) : this._adresseAxeManuel;
        },
        //Toujours calculé
        adresse: function(){
            return this.adresseMin
                    +this._adresseBase
                    +this._adresseAxeAuto
                    +this._adresseAxeManuel;
        },
        
        /**------------>    ASTUCE         <------------------------**/
        
        //Min ne change pas donc pas besoin de getter
        astuceMin: this.constantes.caracMin,
        _astuceBase: 0,
        _astuceAxeAuto: 0,
        _astuceAxeManuel: 0,
        astuceBase: function(newValue){
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
        },
        astuceAxeAuto: function(newValue){
            return arguments.length ?  (this._astuceAxeAuto = newValue): this._astuceAxeAuto;
        },
        astuceAxeManuel: function(newValue){
            return arguments.length ? (this._astuceAxeManuel = newValue) : this._astuceAxeManuel;
        },
        //Toujours calculé
        astuce: function(){
            return this.astuceMin
                    +this._astuceBase
                    +this._astuceAxeAuto
                    +this._astuceAxeManuel;
        },
        
        /**------------>    ACUITE         <------------------------**/
        
        //Min ne change pas donc pas besoin de getter
        acuiteMin: this.constantes.caracMin,
        _acuiteBase: 0,
        _acuiteAxeAuto: 0,
        _acuiteAxeManuel: 0,
        acuiteBase: function(newValue){
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
        },
        acuiteAxeAuto: function(newValue){
            return arguments.length ?  (this._acuiteAxeAuto = newValue): this._acuiteAxeAuto;
        },
        acuiteAxeManuel: function(newValue){
            return arguments.length ? (this._acuiteAxeManuel = newValue) : this._acuiteAxeManuel;
        },
        //Toujours calculé
        acuite: function(){
            return this.acuiteMin
                    +this._acuiteBase
                    +this._acuiteAxeAuto
                    +this._acuiteAxeManuel;
        },
        
        /**------------>    DETERMINATION         <------------------------**/
        
        //Min ne change pas donc pas besoin de getter
        determinationMin: this.constantes.caracMin,
        _determinationBase: 0,
        _determinationAxeAuto: 0,
        _determinationAxeManuel: 0,
        determinationBase: function(newValue){
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
        },
        determinationAxeAuto: function(newValue){
            return arguments.length ?  (this._determinationAxeAuto = newValue): this._determinationAxeAuto;
        },
        determinationAxeManuel: function(newValue){
            return arguments.length ? (this._determinationAxeManuel = newValue) : this._determinationAxeManuel;
        },
        //Toujours calculé
        determination: function(){
            return this.determinationMin
                    +this._determinationBase
                    +this._determinationAxeAuto
                    +this._determinationAxeManuel;
        },
        
        /**------------>    PRESTANCE         <------------------------**/
        
        //Min ne change pas donc pas besoin de getter
        prestanceMin: this.constantes.caracMin,
        _prestanceBase: 0,
        _prestanceAxeAuto: 0,
        _prestanceAxeManuel: 0,
        prestanceBase: function(newValue){
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
        },
        prestanceAxeAuto: function(newValue){
            return arguments.length ?  (this._prestanceAxeAuto = newValue): this._prestanceAxeAuto;
        },
        prestanceAxeManuel: function(newValue){
            return arguments.length ? (this._prestanceAxeManuel = newValue) : this._prestanceAxeManuel;
        },
        //Toujours calculé
        prestance: function(){
            return this.prestanceMin
                    +this._prestanceBase
                    +this._prestanceAxeAuto
                    +this._prestanceAxeManuel;
        },
        
        /**------------>    TACHYOS         <------------------------**/
        
        //Min ne change pas donc pas besoin de getter
        tachyosMin: this.constantes.tachMin,
        _tachyosBase: 0,
        _tachyosAxeAuto: 0,
        _tachyosAxeManuel: 0,
        tachyosBase: function(newValue){
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
        },
        tachyosAxeAuto: function(newValue){
            return arguments.length ?  (this._tachyosAxeAuto = newValue): this._tachyosAxeAuto;
        },
        tachyosAxeManuel: function(newValue){
            return arguments.length ? (this._tachyosAxeManuel = newValue) : this._tachyosAxeManuel;
        },
        //Toujours calculé
        tachyos: function(){
            return this.tachyosMin
                    +this._tachyosBase
                    +this._tachyosAxeAuto
                    +this._tachyosAxeManuel;
        },
        
        /**------------>    ZOIS         <------------------------**/
        
        //Min ne change pas donc pas besoin de getter
        zoisMin: function(){return this.robustesse();},
        _zoisBase: 0,
        _zoisAxeAuto: 0,
        _zoisAxeManuel: 0,
        zoisBase: function(newValue){
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
        },
        zoisAxeAuto: function(newValue){
            return arguments.length ?  (this._zoisAxeAuto = newValue): this._zoisAxeAuto;
        },
        zoisAxeManuel: function(newValue){
            return arguments.length ? (this._zoisAxeManuel = newValue) : this._zoisAxeManuel;
        },
        //Toujours calculé
        zois: function(){
            return this.zoisMin()
                    +this._zoisBase
                    +this._zoisAxeAuto
                    +this._zoisAxeManuel;
        },
        
        /**------------>    STOA         <------------------------**/
        
        //Min ne change pas donc pas besoin de getter
        stoaMin: function(){return 5*(this.determination());},
        _stoaBase: 0,
        _stoaAxeAuto: 0,
        _stoaAxeManuel: 0,
        stoaBase: function(newValue){
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
        },
        stoaAxeAuto: function(newValue){
            return arguments.length ?  (this._stoaAxeAuto = newValue): this._stoaAxeAuto;
        },
        stoaAxeManuel: function(newValue){
            return arguments.length ? (this._stoaAxeManuel = newValue) : this._stoaAxeManuel;
        },
        //Toujours calculé
        stoa: function(){
            return this.stoaMin()
                    +this._stoaBase
                    +this._stoaAxeAuto
                    +this._stoaAxeManuel;
        },
        
        /**------------>    POLEM         <------------------------**/
        
        //Min ne change pas donc pas besoin de getter
        polemMin: 0,
        _polemBase: 0,
        _polemAxeAuto: 0,
        _polemAxeManuel: 0,
        polemBase: function(newValue){
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
        },
        polemAxeAuto: function(newValue){
            return arguments.length ?  (this._polemAxeAuto = newValue): this._polemAxeAuto;
        },
        polemAxeManuel: function(newValue){
            return arguments.length ? (this._polemAxeManuel = newValue) : this._polemAxeManuel;
        },
        //Toujours calculé
        polem: function(){
            return this.polemMin
                    +this._polemBase
                    +this._polemAxeAuto
                    +this._polemAxeManuel;
        }, 
        
        //Toujours calculé
        impact: function(){
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
            if(ro <= 20){
                return "2D4";
            }        
        return "Arrête le Straal-G, man...";
        }        
    };
    
    this.personnageRAZ = function(total=false, $log){
        var perso = this.personnage;
        
        //Quand on regénère aléatoirement un perso 
        //on a pas forcément envie de changer son uid
        //son nom et son âge, juste ses stats, par contre
        //pour un nouveau personnage si
        if( true === total ){
            perso.uuid = this.guid();
            perso.nom = this.nomGenerateur();
            perso.age = 20;
        }
        
        perso.metatype = this.constantes.metatypesListe[0];
        perso.axe = this.constantes.axesListe[0];
        perso.carSofias = this.constantes.carSofiasDepart;
        perso.compSofias = this.constantes.compSofiasDepart;
        
        //Compétences - de base au moins la langue maternelle
        perso.competencesListe = [
            new Competence('Langue maternelle: XXXXX', 1,0,0,0,false)
        ];
        perso.robustesseMin = this.constantes.caracMin;
        perso._robustesseBase = 0;
        perso._robustesseAxeAuto = 0;
        perso._robustesseAxeManuel = 0;
        perso.adresseMin = this.constantes.caracMin;
        perso._adresseBase = 0;
        perso._adresseAxeAuto = 0;
        perso._adresseAxeManuel = 0;
        perso.astuceMin = this.constantes.caracMin;
        perso._astuceBase = 0;
        perso._astuceAxeAuto = 0;
        perso._astuceAxeManuel = 0;
        perso.acuiteMin = this.constantes.caracMin;
        perso._acuiteBase = 0;
        perso._acuiteAxeAuto = 0;
        perso._acuiteAxeManuel = 0;
        perso.prestanceMin = this.constantes.caracMin;
        perso._prestanceBase = 0;
        perso._prestanceAxeAuto = 0;
        perso._prestanceAxeManuel = 0;
        perso.determinationMin = this.constantes.caracMin;
        perso._determinationBase = 0;
        perso._determinationAxeAuto = 0;
        perso._determinationAxeManuel = 0;
        perso._zoisBase = 0;
        perso._zoisAxeAuto = 0;
        perso._zoisAxeManuel = 0;
        perso._tachyosBase = 0;
        perso._tachyosAxeAuto = 0;
        perso._tachyosAxeManuel = 0;
        perso._polemBase = 0;
        perso._polemAxeAuto = 0;
        perso._polemAxeManuel = 0;
        perso._stoaBase = 0;
        perso._stoaAxeAuto = 0;
        perso._stoaAxeManuel = 0;
        
        //Contacts
        
        //
        };
    
   
});