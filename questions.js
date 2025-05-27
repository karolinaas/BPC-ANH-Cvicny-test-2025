const questions = [
    {
        question: "Co rozumíme tím, že jednoduché harmonické kmity se skládají v kmity složené?",
        options: [
            "Že se sinusové signály o různé harmonické frekvenci sčítají do výsledné barvy (tvaru vlny)",
            "Že se signály ve tvaru pulsu sčítají do výsledné barvy",
            "Že se sinusové signály o různé neharmonické frekvenci sčítají do výsledné barvy (tvaru vlny)",
            "Že se sinusové signály o stejné harmonické frekvenci sčítají do výsledné barvy (tvaru vlny)"
        ],
        answer: "Že se sinusové signály o různé harmonické frekvenci sčítají do výsledné barvy (tvaru vlny)"
    },
    {
        question: "Co jsou Early Reflections?",
        options: [
            "Blend počátečních odrazů od stěn",
            "Počáteční odrazy",
            "Řada utichajících ozvěn v efektu Delay"
        ],
        answer: "Počáteční odrazy"
    },
    {
        question: "Ideální koeficient akustické konstanty se pohybuje kolem velikosti",
        options: [
            "21",
            "6",
            "0,2",
            "13"
        ],
        answer: "13"
    },
    {
        question: "Co do prostorového umístění, lokalizujeme ušima lépe delší zvuk mírně přerušovaný než jen časový zlomek zvuku nebo zvuk nepřetržitý? Proč?",
        options: [
            "Zvuk mírně přerušovaný, protože má čitelnější fázi Sustain",
            "Zvuk mírně přerušovaný, pauza nám umožní porovnávat parametry signálu a tím jej lépe identifikovat v prostoru",
            "Delší nepřetržitý zvuk – máme čas jej zaměřit a porovnat"
        ],
        answer: "Zvuk mírně přerušovaný, pauza nám umožní porovnávat parametry signálu a tím jej lépe identifikovat v prostoru"
    },
    {
        question: "Jak u žesťů ovlivní hmotnost (hustota) těla jakost tónu?",
        options: [
            "Při těle s menší hustotou vznikne více harmonických, ale záleží i na tloušťce těla/korpusu",
            "Při těle s větší hustotou vznikne více harmonických",
            "Méně husté tělo podpoří vznik více harmonických, na tloušťce nezáleží"
        ],
        answer: "Při těle s menší hustotou vznikne více harmonických, ale záleží i na tloušťce těla/korpusu"
    },
    {
        question: "V pásmu vyšších harmonických od 9. po 16. jsou stěžejními parametry",
        options: [
            "Kvaziharmonické intervaly – spojitá spektra",
            "Intervaly",
            "Formantové oblasti s centrem, šířkou a strmostí (činitelem Q), zesílením",
            "Bílý, hnědý, růžový, modrý a zelený šum"
        ],
        answer: "Formantové oblasti s centrem, šířkou a strmostí (činitelem Q), zesílením"
    },
    {
        question: "Kde se nacházejí v otevřené a kryté píšťale uzly a kmitny?",
        options: [
            "Uzly vznikají u obou píšťal v místech nejmenšího odporu",
            "V otevřené píšťale vznikají uzly uvnitř píšťaly, kmitny na koncích, u kryté píšťaly vzniká hlavní uzel u zavřené (zašpuntované) části píšťaly",
            "V otevřené píšťale vznikají uzly na otevřených koncích píšťaly"
        ],
        answer: "V otevřené píšťale vznikají uzly uvnitř píšťaly, kmitny na koncích, u kryté píšťaly vzniká hlavní uzel u zavřené (zašpuntované) části píšťaly"
    },
    {
        question: "Jaký je rozdíl mezi pojmem blend a mixture?",
        options: [
            "Blend je smíšenina, mixture splynulina",
            "Žádný",
            "Blend obsahuje ostřejší pásmo 200-450 Hz",
            "U blendu nerozpoznáme lidskými smysly jeho ingredience/složky"
        ],
        answer: "U blendu nerozpoznáme lidskými smysly jeho ingredience/složky"
    },
    {
        question: "Který vzorec platí pro tyč upevněnou na jednom konci?",
        options: [
            "fn = (2n-1)CL/4l, kde CL je rychlost podélných vln a l – délka tyče",
            "fn = (2n-1)CL/4l, kde C je rychlost zvuku",
            "fn = n.CL/2l, kde CL je rychlost podélných vln a l – délka tyče"
        ],
        answer: "fn = (2n-1)CL/4l, kde CL je rychlost podélných vln a l – délka tyče"
    },
    {
        question: "Má šum ohraničený výškový začátek?",
        options: [
            "Nemá",
            "Ano, ale až od úrovně 500 mV",
            "Ano, ale až od úrovně 250 Hz"
        ],
        answer: "Nemá"
    },
    {
        question: "Co jsou hlukové hradby? Jaké nástroje je mohou vytvářet?",
        options: [
            "Nástroje, které mají široké spektrum a hrají nepřetržitě. Tím zastírají ostatní, jsou to zvláště harmonické nástroje s širokou barvou ve spektru",
            "Sopránové nástroje - maskují zvláště basová pásma",
            "Nástroje, které mají široké spektrum a hrají nepřetržitě. Tím zastírají ostatní, jsou to např. pizzicata, flažolety smyčců, spodní rejstříky v nízké dynamice"
        ],
        answer: "Nástroje, které mají široké spektrum a hrají nepřetržitě. Tím zastírají ostatní, jsou to zvláště harmonické nástroje s širokou barvou ve spektru"
    },
    {
        question: "Jak funguje binaurální slyšení?",
        options: [
            "Uchem porovnáváme všechny parametry signálu",
            "Ušima porovnáváme výšku a délku signálu",
            "Ušima vzdálenýma cca 16-20 cm od sebe porovnáváme výšku, délku, sílu a barvu signálu",
            "Ušima vzdálenými cca 50 cm od sebe porovnáváme všechny parametry signálu"
        ],
        answer: "Ušima vzdálenýma cca 16-20 cm od sebe porovnáváme výšku, délku, sílu a barvu signálu"
    },
    {
        question: "Jaký signál jakého nástroje je na obrázku, který zobrazuje vlnu?",
        questionImage: "media/klarinet - harmonické kmity kopie.jpg",
        options: [
            "Šum gongu",
            "Trojúhelníkový signál klarinetu",
            "Pulsový signál okaríny",
            "Sinus smyku sautille"
        ],
        answer: "Trojúhelníkový signál klarinetu"
    },
    {
        question: "Jaké nástroje a rejstříky se budou blížit barvě šumu?",
        options: [
            "Melodické bicí nástroje",
            "Činely hrané měkkými paličkami",
            "Pěvecký sbor zpívající samohlásky"
        ],
        answer: "Činely hrané měkkými paličkami"
    },
    {
        question: "Co jsou Dry a Wet signál?",
        options: [
            "Poměr neefektovaného signálu a signálu s efektem, např. bez a s Reverbem",
            "Wet - signál bez dozvuku",
            "Dry - signál s dozvukem"
        ],
        answer: "Poměr neefektovaného signálu a signálu s efektem, např. bez a s Reverbem"
    },
    {
        question: "Doplň hodnotu místo otazníku: U(t) = sin(?.t)+ 1/2sin(2?.t)+ 1/3sin(3?.t)+ 1/4sin(4?.t)+ 1/5sin(5?.t)… Pro jaký signál vzorec platí?",
        options: [
            "π.f0, pro pilový signál",
            "Δt, pro sinusový signál",
            "cos 2π.f0, pro pulzní signál",
            "ω, pro pilový signál"
        ],
        answer: "ω, pro pilový signál"
    },
    {
        question: "Kde vnímáme signál silněji a čitelněji, na středu nebo na krajích stereo báze? Proč?",
        options: [
            "Na středu – díky binaurálnímu vnímání se tam sčítají signály z obou uší",
            "Na krajích, periferiích – každé ucho se může detailněji soustředit na signál",
            "Je to jedno"
        ],
        answer: "Na středu – díky binaurálnímu vnímání se tam sčítají signály z obou uší"
    },
    {
        question: "Jaké vlastnosti má pilová vlna?",
        options: [
            "Obsahuje jak liché, tak sudé harmonické, co do intenzity lineárně stoupající",
            "Obsahuje jen sudé harmonické, co do intenzity exponenciálně klesající",
            "Obsahuje jak liché, tak sudé harmonické, co do intenzity lineárně klesající"
        ],
        answer: "Obsahuje jak liché, tak sudé harmonické, co do intenzity lineárně klesající"
    },
    {
        question: "Jaký je rozdíl mezi kontaktním a ambientním poslechem?",
        options: [
            "Při kontaktním poslechu vnímáme oproti ambientnímu silněji signál Dry (bez odrazů)",
            "Minimální",
            "Ambientní poslech je z dálky 20 m, kontaktní nad 2 m"
        ],
        answer: "Při kontaktním poslechu vnímáme oproti ambientnímu silněji signál Dry (bez odrazů)"
    },
    {
        question: "Kdy použijete tvrdší a kdy měkčí struny?",
        options: [
            "Tvrdší, když budeme chtít hebčí spektrum",
            "Měkčí, když budeme chtít plnější spektrum",
            "Tvrdší, když budeme chtít širší spektrum"
        ],
        answer: "Tvrdší, když budeme chtít širší spektrum"
    },
    {
        question: "Jaké zóny (v procentech) se nacházející na stereo ose?",
        options: [
            "Blízké středy: 80-100% nalevo i napravo",
            "Centrum: 45% doprava",
            "Centrum: 0%, střední zóna: 0-25%, blízké středy: 26-75%, periférie: 76-100%",
            "Centrum: 0%, střední zóna: 0-35%, blízké středy: 36-75%, periférie: 76-100%"
        ],
        answer: "Centrum: 0%, střední zóna: 0-35%, blízké středy: 36-75%, periférie: 76-100%"
    },
    {
        question: "Radiátor, co má užší rozpětí, podpoří jaké spektrum?",
        options: [
            "Výšky",
            "Basy",
            "Nižší středy",
            "Basy a výšky"
        ],
        answer: "Výšky"
    },
    {
        question: "Jak vyzařují dřevěné dechové nástroje? Jen jedním nebo více směry?",
        options: [
            "Nejsilněji dírkami/klapkami a roztrubem",
            "Převážně úzce směrově",
            "Převážně všesměrově"
        ],
        answer: "Nejsilněji dírkami/klapkami a roztrubem"
    },
    {
        question: "Jaký algoritmus Reverbu byl v nahrávce použitý?",
        audio: "media/typ_reverbu2.mp3",
        options: [
            "Hall s parametrem PreDelay cca 50 s",
            "Plate s parametrem PreDelay cca 50 ms",
            "Church s parametrem Reverb cca 7 s",
            "Plate s parametrem PreDelay cca 550 ms"
        ],
        answer: "Plate s parametrem PreDelay cca 50 ms"
    },
    {
        question: "Jaký typ signálu slyšíte?",
        audio: "media/typ_signalu2.mp3",
        options: [
            "pilu",
            "trojúhelník",
            "puls",
            "šum"
        ],
        answer: "trojúhelník"
    },
    {
        question: "Spojitými spektry rozumíme",
        options: [
            "složky v celočíselných poměrech – tzv. měkká harmonická barva",
            "barvy, generované zcela nepravidelnými chaotickými kmity",
            "složky v jemnějších i ostřejších iracionálních – neceločíselných - poměrech – v barvě připomínajících cinkot, zvonění apod."
        ],
        answer: "složky v jemnějších i ostřejších iracionálních – neceločíselných - poměrech – v barvě připomínajících cinkot, zvonění apod."
    },
    {
        question: "Co je oscilátorem u houslí, co u fagotu a co u lidského hlasu?",
        options: [
            "U lidského hlasu jsou to plíce",
            "U fagotu je to strojek – dvouplátky",
            "U houslí je to kobylka",
            "U lidského hlasu je to jazyk"
        ],
        answer: "U fagotu je to strojek – dvouplátky"
    },
    {
        question: "Jaký rozdíl v barvě je mezi inharmocitami roztaženými a shlukovými?",
        options: [
            "Shlukové vytvářejí cinkot",
            "Shlukové vznikají seskupováním a posilují mohutnost tónu",
            "Shlukové vznikají rozestupováním a rozmazávají harmonickou barvu"
        ],
        answer: "Shlukové vytvářejí cinkot"
    },
    {
        question: "Jak ovlivňuje tvar nátrubku sytost spektra?",
        options: [
            "Měkčí nátrubek generuje měkčí spektrum",
            "Miskovitý nátrubek generuje sytější spektrum",
            "Kónický nátrubek generuje sytější spektrum"
        ],
        answer: "Miskovitý nátrubek generuje sytější spektrum"
    },
    {
        question: "Ve kterých místech vznikají při drknutí na struně kmitny a uzly?",
        options: [
            "Uzly na místě s nulovou energií, kmitny na místě s největší energií, kmitny tvoří celočíselné poměry (např. 1:3) vůči délce struny",
            "Uzly na místě s největší energií, kmitny na místě s nulovou energií, kmitny tvoří celočíselné poměry (např. 1:11) vůči délce struny",
            "Uzly na místě s nulovou energií, kmitny na místě s největší energií, kmitny tvoří iracionální poměry (např. 1:2,645) vůči délce struny"
        ],
        answer: "Uzly na místě s nulovou energií, kmitny na místě s největší energií, kmitny tvoří celočíselné poměry (např. 1:3) vůči délce struny"
    },
    {
        question: "Jak se nazývá část nástroje, která generuje kmity?",
        options: [
            "Radiátor",
            "Oscilátor",
            "Rezonátor",
            "Radiátor"
        ],
        answer: "Oscilátor"
    },
    {
        question: "Signál ve tvaru pulsu má",
        options: [
            "úzké spektrum 6-8 harmonických",
            "široké a vyrovnané spektrum vyšších harmonických, co do intenzity vykreslující tzv. arkády",
            "jen liché harmonické",
            "široké a vyrovnané spektrum vyšších harmonických, co do intenzity lineárně klesající"
        ],
        answer: "široké a vyrovnané spektrum vyšších harmonických, co do intenzity vykreslující tzv. arkády"
    },
    {
        question: "Co rozumíme diskrétností vyšších harmonických?",
        options: [
            "Zkreslení v pásmu 200-400 Hz",
            "Dynamický odstup harmonických složek od spojitých spekter, ruchů a šumů",
            "Posílení pásma nad 4000 Hz"
        ],
        answer: "Dynamický odstup harmonických složek od spojitých spekter, ruchů a šumů"
    },
    {
        question: "Harmonické složky jsou",
        options: [
            "Neceločíselným/iracionálním násobkem fundamentu",
            "Celočíselným násobkem fundamentu",
            "Celočíselným násobkem 5. odmocniny fundamentu"
        ],
        answer: "Celočíselným násobkem fundamentu"
    },
    {
        question: "Čím se liší akustická konstanta a model pružnosti?",
        options: [
            "Akustická konstanta má ve jmenovateli m4.kg",
            "Akustická konstanta vyjadřuje schopnost ohybu příčně",
            "Akustická konstanta popisuje schopnost dřeva zesilovat zvuk bez zkreslení, model pružnosti vyjadřuje schopnost dřeva pružit a přenášet energii"
        ],
        answer: "Akustická konstanta popisuje schopnost dřeva zesilovat zvuk bez zkreslení, model pružnosti vyjadřuje schopnost dřeva pružit a přenášet energii"
    },
    {
        question: "Inharmonicity vznikají",
        options: [
            "v různě hustém nebo nehomogenním oscilátoru, kde se pak některé harmonické vlny zrychlují nebo zpomalují",
            "díky příliš měkkému excitátoru",
            "díky exponenciálně tvarovanému radiátoru"
        ],
        answer: "v různě hustém nebo nehomogenním oscilátoru, kde se pak některé harmonické vlny zrychlují nebo zpomalují"
    },
    {
        question: "Jaké vlastnosti má šum?",
        options: [
            "Obsahuje neperiodický signál",
            "Obsahuje kvaziperiodický signál",
            "Obsahuje velké množství harmonických složek"
        ],
        answer: "Obsahuje neperiodický signál"
    },
    {
        question: "Ortotropní látka se vyznačuje",
        options: [
            "snižujícím se Poissonovým číslem",
            "jinou rychlostí v podélném, příčném a svislém směru",
            "stejnou rychlostí ve všech směrech",
            "akustickou konstantou 300 MPa"
        ],
        answer: "jinou rychlostí v podélném, příčném a svislém směru"
    },
    {
        question: "Jak vypočteme rezonanční frekvenci radiátoru/ozvučnice?",
        options: [
            "Pomocí Besselových funkcí, kde X je proměnná délková souřadnice, Λ je lineární konstanta",
            "Pomocí Besselových funkcí, kde X je proměnná délková souřadnice, Λ je poměr rozšiřování zvukovodu",
            "Pomocí Lissajousových obrazců, kde φ je fázové zpoždění"
        ],
        answer: "Pomocí Besselových funkcí, kde X je proměnná délková souřadnice, Λ je poměr rozšiřování zvukovodu"
    },
    {
        question: "Nosnost tónu podporuje:",
        options: [
            "2. a 3. pásmo v harmonické řadě",
            "intenzita 1. harmonické složky",
            "2. harmonická složka",
            "3. a 5. harmonická složka"
        ],
        answer: "intenzita 1. harmonické složky"
    },
    {
        question: "Akustická konstanta",
        options: [
            "klesá aritmeticky a stoupá geometricky",
            "klesá a stoupá aritmetickou řadou",
            "klesá a stoupá geometrickou řadou"
        ],
        answer: "klesá a stoupá geometrickou řadou"
    },
    {
        question: "Jak vnímáme signál na nulové ose před obličejem co do hlasitosti, zabarvení a fázového zpoždění?",
        options: [
            "Obě uši signál vyhodnotí signál jako totožný co do síly, délky, intenzity i fáze",
            "Obě uši signál vyhodnotí signál jako totožný co do síly, délky, intenzity, ale ne fáze",
            "Obě uši signál vyhodnotí signál jako rozdílný co do síly, délky, intenzity i fáze"
        ],
        answer: "Obě uši signál vyhodnotí signál jako totožný co do síly, délky, intenzity i fáze"
    },
    {
        question: "V jakém akustickém prostředí neexistují odrazy?",
        options: [
            "Ve vodě",
            "V otevřené krajině",
            "V kvalitním sále"
        ],
        answer: "V otevřené krajině"
    },
    {
        question: "Které prvky ve spektru u trianglu či zvonové tyče vytvářejí zvonění – cinkot?",
        options: [
            "Shlukové inharmonicity",
            "Pásmo harmonických složek od 8. – 16.",
            "Roztažené inharmonicity",
            "Modrý šum"
        ],
        answer: "Shlukové inharmonicity"
    },
    {
        question: "Popiš fázi PreDelay",
        options: [
            "Okamžik od počátku Reverbu po jeho konec",
            "Okamžik, kdy není signál ještě zkreslený",
            "Okamžik od nástupu signálu Dry po jeho první odraz (Reflection)"
        ],
        answer: "Okamžik od nástupu signálu Dry po jeho první odraz (Reflection)"
    },
    {
        question: "Jakým vzorcem vyjadřujeme rychlost šíření příčných vln ve struně?",
        options: [
            "c=√(F/d), kde d je délka struny",
            "c=√(F/d), kde F je tahová síla",
            "c=√(F/ʎ), kde ʎ je vlnová délka struny"
        ],
        answer: "c=√(F/d), kde F je tahová síla"
    },
    {
        question: "Jaké shorky generují dvouplátky?",
        options: [
            "Pilu",
            "Puls",
            "Čtverec"
        ],
        answer: "Puls"
    },
    {
        question: "Lokalizujeme lépe ušima prostorově vyšší zvuk (kratší vlny – od tříčárkované oktávy výše) nebo nižší (delší ba hluboké - subkontra, kontra)? Proč?",
        options: [
            "Není v tom rozdíl",
            "Nižší zvuk, protože dlouhou vlnu lidské ucho lépe identifikuje",
            "Vyšší zvuk, protože obsahuje více lichých harmonických složek",
            "Vyšší zvuk, tj. kratší vlny, a to díky akustickému stínu hlavy"
        ],
        answer: "Vyšší zvuk, tj. kratší vlny, a to díky akustickému stínu hlavy"
    },
    {
        question: "Fází Release rozumíme",
        options: [
            "vyrovnaný průběh tónu",
            "závěrečný pokles tónu zpět na původní nulovou hodnotu",
            "držení tónu po fázi Sustain",
            "nástup tónu"
        ],
        answer: "závěrečný pokles tónu zpět na původní nulovou hodnotu"
    },
    {
        question: "Jak kmit strunného nástroje rozkmitá/rozvlní vzduch?",
        options: [
            "Vrtotočivě",
            "Příčně"
        ],
        answer: "Příčně"
    },
    {
        question: "Jaké nástroje a rejstříky se budou blížit barvě trojúhelníkového a obdélníkového signálu?",
        options: [
            "Klarinet a polouzavřené píšťaly",
            "Zvony",
            "Lesní nebo anglický roh"
        ],
        answer: "Klarinet a polouzavřené píšťaly"
    },
    {
        question: "Který radiátor ořeže výrazněji spektrum? Lineární nebo exponenciální?",
        options: [
            "Žádný",
            "Exponenciální, protože je shodný s křivkou tónů rostoucích po oktávách",
            "Lineární, protože je shodný s křivkou tónů rostoucích po oktávách",
            "Lineární, protože není shodný s křivkou tónů rostoucích po oktávách"
        ],
        answer: "Lineární, protože není shodný s křivkou tónů rostoucích po oktávách"
    },
    {
        question: "Které smyčcové tóny patří mezi syté a pronikavé?",
        options: [
            "Házené smyky – détaché nebo legato",
            "Házené smyky jako spiccato nebo sautillé ve vyšší dynamice",
            "Nejsytější je pizzicato, nejměkčí je détaché"
        ],
        answer: "Házené smyky jako spiccato nebo sautillé ve vyšší dynamice"
    },
    {
        question: "Jaký signál jakého nástroje je na obrázku, který zobrazuje vlnu?",
        questionImage: "media/cinel - neharmonické kmity kopie.jpg",
        options: [
            "Pilový signál houslí, smyk detaché",
            "Šumový signál činelu crash",
            "Trojúhelníkový signál pozounu, staccato"
        ],
        answer: "Šumový signál činelu crash"
    },
    {
        question: "Jaký efekt je použit na kytaru?",
        audio: "media/efekt_na_kytare2.mp3",
        options: [
            "modulační efekt Flanger",
            "rozlaďující efekt Kompresor",
            "modulační efekt Delay",
            "modulační efekt Phaser"
        ],
        answer: "modulační efekt Flanger"
    },
    {
        question: "Jak ovlivňuje délka struny, napnutí struny a hustota struny (hmotnost na délku) výšku tónu.",
        options: [
            "Při větší délce nebo větší hustotě a stejném napnutí bude hrát strun a níže",
            "Délka a napnutí struny výšku ovlivňují, hustota ne",
            "Při větší délce nebo větší hustotě a stejném napnutí bude hrát strun a výše"
        ],
        answer: "Při větší délce nebo větší hustotě a stejném napnutí bude hrát strun a níže"
    },
    {
        question: "Který tón bude mít sytější barvu",
        options: [
            "se 16 shorky",
            "sinus s Low Cut filtrem pod 100 Hz",
            "se 4 shorky"
        ],
        answer: "se 16 shorky"
    },
    {
        question: "Jak funguje excitátor, oscilátor, rezonátor a radiátor?",
        options: [
            "Oscilátor uděluje impuls excitátoru, ten kmitá, radiátor jeho energii posiluje a rezonátor nasměrovává",
            "Excitátor uděluje impuls oscilátoru, ten kmitá, radiátor jeho energii posiluje a rezonátor nasměrovává",
            "Radiátor uděluje impuls excitátoru, ten kmitá, oscilátor jeho energii posiluje a rezonátor nasměrovává",
            "Excitátor uděluje impuls oscilátoru, ten kmitá, rezonátor jeho energii posiluje a radiátor nasměrovává"
        ],
        answer: "Excitátor uděluje impuls oscilátoru, ten kmitá, rezonátor jeho energii posiluje a radiátor nasměrovává"
    },
    {
        question: "O kolik se zvýší při binaurálním poslechu proti monoaurálnímu práh hlasitosti?",
        options: [
            "+ 6 sónů",
            "+ 3 dB",
            "+ 6 dB",
            "+ 10 fonů"
        ],
        answer: "+ 10 fonů"
    },
    {
        question: "Jaké nástroje/hlasy/harmonie umisťujeme na střed sterea a jaké na periférie? Proč?",
        options: [
            "Na střed umisťujeme hlasy a nástroje, které mají nahrávce vévodit, na okraje nástroje, které mají působit více barevně",
            "Na střed umisťujeme hlavně harmonické nástroje, abychom na ně tolik neupozorňovali",
            "Na periférie umísťujeme sólové hlasy, aby co nejvíce vynikly"
        ],
        answer: "Na střed umisťujeme hlasy a nástroje, které mají nahrávce vévodit, na okraje nástroje, které mají působit více barevně"
    },
    {
        question: "Neharmonicity jsou",
        options: [
            "v patřičné míře vítány – přidávají do harmonicky vyrovnaného tónu bílý šum, a to v celém spektru",
            "v patřičné míře vítány – přidávají do harmonicky vyrovnaného tónu prvky drsnosti a tzv. rozladěná ložiska",
            "u hudebních nástrojů zcela nepatřičné"
        ],
        answer: "v patřičné míře vítány – přidávají do harmonicky vyrovnaného tónu prvky drsnosti a tzv. rozladěná ložiska"
    },
    {
        question: "Který vzorec správně platí pro výpočet rezonanční frekvence nátrubku?",
        images: ["media/Pasted image 20250512155504.png", "media/Pasted image 20250513110906.png"],
        answer: "media/Pasted image 20250513110906.png"
    },
    {
        question: "Lomené harmonické spektrum vykreslí",
        options: [
            "čitelně všechny druhy akordů",
            "čitelně jen dvojzvuky",
            "čitelně kombinace souzvuků, kde se alikvóty komplementárně doplňují, a opačně nečitelně kombinace souzvuků, kde se alikvóty překrývají"
        ],
        answer: "čitelně kombinace souzvuků, kde se alikvóty komplementárně doplňují, a opačně nečitelně kombinace souzvuků, kde se alikvóty překrývají"
    },
    {
        question: "Trojúhelníkový signál má na rozdíl od obdélníkového",
        options: [
            "méně lichých harmonických",
            "více sudých harmonických",
            "více lichých harmonických",
            "méně sudých harmonických"
        ],
        answer: "méně lichých harmonických"
    },
    {
        question: "Do středu sterea umisťujeme nástroje, které mají působit více barevně než melodicky a rytmicky - např. doprovodné kytary a doprovodné klávesy",
        options: [
            "Pravda",
            "Nepravda"
        ],
        answer: "Nepravda"
    },
    {
        question: "Pásmo vyšších harmonických od 1. po 8. vnímáme jako barvu složenou",
        options: [
            "Z šumů",
            "Z klastrů",
            "Z kvaziharmonických/mikrointervalových složek",
            "Z intervalů"
        ],
        answer: "Z intervalů"
    },
    {
        question: "ADSR obsahuje fáze",
        options: [
            "Attack, Decay, Sustain a Reverb",
            "PreDelay, Decay, Sustain a Release",
            "Attack, Distortion, Sustain a Release",
            "Attack, Decay, Sustain a Release"
        ],
        answer: "Attack, Decay, Sustain a Release"
    },
    {
        question: "Který graf platí pro rezonanční křivku?",
        images: ["media/Obrázek1.png", "media/4.jpg", "media/3.jpg", "media/2.jpg"],
        answer: "media/3.jpg"
    },
    {
        question: "Jak spolu souvisí rezonanční křivky a formanty?",
        options: [
            "Formantu ve spektru odpovídá rezonanční pásmo charakterizované rezonanční křivkou",
            "Formanty se vztahují k ladění, rezonanční pásma popisují výkon a radiaci hudebního nástroje",
            "Nijak"
        ],
        answer: "Formantu ve spektru odpovídá rezonanční pásmo charakterizované rezonanční křivkou"
    },
    {
        question: "Jakým grafem popisujeme směrovost nástroje? Jaké obsahuje parametry?",
        options: [
            "Grafem směrovosti, obsahuje azimuty a útlumová pásma intenzity",
            "Polárním integrálem, obsahuje útlumová jádra",
            "Směrovou derivací, obsahuje stupně od 0 do 180"
        ],
        answer: "Grafem směrovosti, obsahuje azimuty a útlumová pásma intenzity"
    },
    {
        question: "Vyzařují smyčcové nástroje jedním nebo více směry? V jakých pásmech?",
        options: [
            "Zadní deskou vyzařují vyšší frekvence",
            "V hlubších polohách vyzařují všesměrově, u vyšších poloh hraje důležitou roli horní deska a efa",
            "Přední deskou vyzařují všesměrově"
        ],
        answer: "V hlubších polohách vyzařují všesměrově, u vyšších poloh hraje důležitou roli horní deska a efa"
    },
    {
        question: "Co charakterizuje mediální a co horizontální rovina v případě binaurálního poslechu? Která je pro směrové slyšení důležitější a proč?",
        options: [
            "Mediální rovina protíná hlavu odshora dolů a je důležitější",
            "Mediální rovina protíná hlavu odshora dolů, pro směrové slyšení je ale důležitější rovina horizontální",
            "Horizontální rovina protíná hlavu zleva doprava, důležitější je ale rovina mediální",
            "Mediální rovina protíná hlavu zleva doprava, je důležitější"
        ],
        answer: "Mediální rovina protíná hlavu odshora dolů, pro směrové slyšení je ale důležitější rovina horizontální"
    },
    {
        question: "Čím se liší kmit doznívající/tlumený a nucený?",
        options: [
            "Nucený kmit začíná zkreslovat",
            "Doznívající kmit zní alespoň 30 sekund",
            "Doznívající je generován jedním impulsem excitátoru a nucený soustavně excitátorem napájen"
        ],
        answer: "Doznívající je generován jedním impulsem excitátoru a nucený soustavně excitátorem napájen"
    },
    {
        question: "Které hudební nástroje generují signál převážně s lichými alikvóty?",
        options: [
            "Strunné při drknutí v polovině struny",
            "Žestě",
            "Melodické bicí nástroje"
        ],
        answer: "Strunné při drknutí v polovině struny"
    },
    {
        question: "Jakou vlastnost označuje následující vzorec 2π.f0?",
        options: [
            "hustotu",
            "úhlovou frekvenci",
            "úhlovou rychlost",
            "modulační index"
        ],
        answer: "úhlovou rychlost"
    },
    {
        question: "Jak ovlivní dozvuk sílu, délku, výšku a barvu tónu?",
        options: [
            "Zeslabí sílu",
            "Scelí a vyrovná všechny 4 parametry",
            "Zčitelní barvu"
        ],
        answer: "Scelí a vyrovná všechny 4 parametry"
    },
    {
        question: "Jak síla a četnost jednoduchých harmonických kmitů ovlivňuje výsledný tvar vlny (signálu)?",
        options: [
            "Větší počet harmonických kmitů činí barvu plnější a průraznější",
            "Větší počet harmonických kmitů činí barvu prázdnější a tupější",
            "Nijak"
        ],
        answer: "Větší počet harmonických kmitů činí barvu plnější a průraznější"
    },
    {
        question: "Jakou barvu bude generovat u klarinetu líný a jakou hbitý jazýček? Proč?",
        options: [
            "Hbitý jazýček bude generovat plné spektrum",
            "Líný jazýček bude generovat plné spektrum",
            "Líný jazýček bude generovat spektrum sudých harmonických"
        ],
        answer: "Hbitý jazýček bude generovat plné spektrum"
    },
    {
        question: "Pomáhá dozvuk ladění?",
        options: [
            "Silně rozvibruje signál",
            "Ladění ještě zhorší",
            "Nijak",
            "Zpozdí a znásobí signál, tím zastře intonační nepřesnosti"
        ],
        answer: "Zpozdí a znásobí signál, tím zastře intonační nepřesnosti"
    },
    {
        question: "Chladniho obrazce",
        options: [
            "mohou vznikat spolu rezonancí a vykreslí kmitny a uzly",
            "fungují jen ve velké a malé oktávě",
            "vznikají vybuzením bílého šumu a vykreslí uzly",
            "vznikají radiací a vykreslí formantové oblasti"
        ],
        answer: "mohou vznikat spolu rezonancí a vykreslí kmitny a uzly"
    },
    {
        question: "Čím lze ovlivnit u píšťaly výšku tónu?",
        options: [
            "Tlakem vháněného vzduchu a exponenciálním charakterem oscilátoru",
            "Délkou vzduchového sloupce a hustotou materiálu, ze kterého je vyroben rezonátor",
            "Tlakem vháněného vzduchu a vzdáleností hrany od štěrbiny"
        ],
        answer: "Tlakem vháněného vzduchu a vzdáleností hrany od štěrbiny"
    },
    {
        question: "Pátá harmonická složka posiluje",
        options: [
            "Nosnost",
            "Jasnost",
            "Nazálnost",
            "Dutost"
        ],
        answer: "Nazálnost"
    },
    {
        question: "Jak funguje tzv. stín hlavy?",
        options: [
            "Působí jako akustický stín mezi levým a pravým uchem, funguje jako Cut Filter frekvencí, které odpovídají vlnovým délkám, které jsou delší než šířka hlavy",
            "Působí jako akustický stín mezi levým a pravým uchem, funguje jako Cut Filter frekvencí, které odpovídají vlnovým délkám, které jsou kratší než šířka hlavy",
            "Působí jako akustický stín mezi levým a pravým uchem, ubírá zvláště na nižších středech",
            "Zabraňuje posluchačům sedícím vzadu dobře identifikovat signál"
        ],
        answer: "Působí jako akustický stín mezi levým a pravým uchem, funguje jako Cut Filter frekvencí, které odpovídají vlnovým délkám, které jsou kratší než šířka hlavy"
    },
    {
        question: "Jaké nástroje a rejstříky se budou blížit barvě pilovitého signálu?",
        options: [
            "Smyčcové hrající pizzicato v dynamice pp",
            "Jednoplátky",
            "Smyčcové na celokovových strunách a žesťové – obě v dynamikách nad f"
        ],
        answer: "Smyčcové na celokovových strunách a žesťové – obě v dynamikách nad f"
    },
    {
        question: "Jakost prvních osmi harmonických složek popsali již před 200 lety",
        options: [
            "varhaníci skládáním spektra tzv. aditivní syntézou - pomocí píšťal",
            "hráči smyčcových nástrojů pomocí flažoletů",
            "bubeníci laděním tympánů",
            "dirigenti a skladatelé prostřednictvím harmonie"
        ],
        answer: "varhaníci skládáním spektra tzv. aditivní syntézou - pomocí píšťal"
    },
    {
        question: "Pomocích jakých prvků vytváříme v elektrickém obvodu rezonanci? Jak tyto prvky souvisí s akustickou rezonancí?",
        options: [
            "Pomocí tranzistoru, cívky a kondenzátoru, podobně jako el. obvod i akustické prostředí vytváří reaktanci",
            "Pomocí radiátoru, odporu a transformátoru, podobně jako el. obvod i akustické prostředí vytváří induktanci",
            "Pomocí odporu, cívky a kondenzátoru, podobně jako el. obvod i akustické prostředí vytváří impedanci (kmitočtově závislý odpor)"
        ],
        answer: "Pomocí odporu, cívky a kondenzátoru, podobně jako el. obvod i akustické prostředí vytváří impedanci (kmitočtově závislý odpor)"
    },
    {
        question: "Jak vzniká u flétny tón?",
        options: [
            "Vibrací korpusu",
            "Třením vzduchu o hranu",
            "Vibrací jazýčku"
        ],
        answer: "Třením vzduchu o hranu"
    },
    {
        question: "Jak vnímáme - co do hlasitosti, zabarvení a fázového zpoždění - signál před obličejem hrající výrazně napravo?",
        options: [
            "Na pravé ucho dojde signál dříve, ve větší intenzitě a utlumený na basech",
            "Na levé ucho dojde signál s fázovým předstihem",
            "Na levé ucho dojde signál později, slabší a s odlišným zabarvením",
            "Na levé ucho přijde signál s fázovým zpožděním a ořezaný na basech"
        ],
        answer: "Na levé ucho dojde signál později, slabší a s odlišným zabarvením"
    },
    {
        question: "Popiš fázi Reverb",
        options: [
            "Fáze, kdy se odrazy slijí do jednolitého dozvuku",
            "Okamžik, kdy zazní více než 30 odrazů",
            "Fáze, kdy ještě rozeznáváme jednotlivé odrazy"
        ],
        answer: "Fáze, kdy se odrazy slijí do jednolitého dozvuku"
    },
    {
        question: "Jaké struny u smyčců mají měkčí spektrum a které průraznější?",
        options: [
            "Horní mají obvykle průraznější barvu, na smycích tolik nezáleží",
            "Spodní mají obvykle průraznější barvu, na smycích může někdy záležet",
            "Horní mají obvykle průraznější barvu, ale velmi záleží na technice smyků"
        ],
        answer: "Horní mají obvykle průraznější barvu, ale velmi záleží na technice smyků"
    },
    {
        question: "Jaký signál produkuje ve forte trubka a pozoun?",
        options: [
            "Puls",
            "Zkreslený",
            "Pilu"
        ],
        answer: "Pilu"
    },
    {
        question: "Co rozumíme pojmem Treshold? Co pojmem Ratio?",
        options: [
            "Ratio je úroveň intenzity, od které se začíná signál ztišovat",
            "Ratio je poměr, o jaký signál nad prahem zeslabíme",
            "Treshold je poměr zeslabení signálu"
        ],
        answer: "Ratio je poměr, o jaký signál nad prahem zeslabíme"
    },
    {
        question: "Budeme lépe rozeznávat ladění a souhru nástrojů, které budou v jednom bodě u sebe, než když budou mírně od sebe?",
        options: [
            "Co nejdál od sebe, můžeme tak souhru nástrojů binaurálně co nejlépe srovnat",
            "V jednom bodě u sebe",
            "Mírně od sebe – lidský sluch tak díky binaurální stereofonii nástroje co nejkomfortněji porovná"
        ],
        answer: "Mírně od sebe – lidský sluch tak díky binaurální stereofonii nástroje co nejkomfortněji porovná"
    },
    {
        question: "Vyber správnou odpověď - 5 správných parametrů excitátoru.",
        options: [
            "Rozměr, hmotnost, hustota, frekvence, tvrdost povrchu, rychlost",
            "Dotyková plocha, rozměr, hmotnost, hustota, tvrdost povrchu, rychlost",
            "Měkkost povrchu, tlak, rychlost, délka kontaktu, úhlová frekvence"
        ],
        answer: "Dotyková plocha, rozměr, hmotnost, hustota, tvrdost povrchu, rychlost"
    },
    {
        question: "Jak se posadit vůči posluchači, když požadujeme čitelný základní signál?",
        options: [
            "Blízko na délku sálu",
            "Blízko na šířku sálu",
            "Daleko na délku sálu"
        ],
        answer: "Blízko na šířku sálu"
    },
    {
        question: "Co rozumíme pojmem maskování? Jaké procesy se tam dějí?",
        options: [
            "Distortivně-aditivní syntézu – barvy vznikají filtrováním/utlumováním pásem",
            "Zastírání slabší složky ve spektru složkou dominantnější, ta je výraznější v intenzitě, ale i sytější v barvě (zvláště, když obsahuje hustá kvaziharmonická nebo šumová ložiska)",
            "Komplementární doplňování pásem – barvy se exponenciálně sčítají",
            "Zastírání slabší složky ve spektru složkou dominantnější, ta je výraznější v intenzitě, barva u ní nehraje roli"
        ],
        answer: "Zastírání slabší složky ve spektru složkou dominantnější, ta je výraznější v intenzitě, ale i sytější v barvě (zvláště, když obsahuje hustá kvaziharmonická nebo šumová ložiska)"
    },
    {
        question: "Vzorec platí",
        questionImage: "media/tr 1.jpg",
        options: [
            "pro pilový signál",
            "pro trojúhelníkový signál",
            "pro pulzní signál",
            "pro obdélníkový signál"
        ],
        answer: "pro obdélníkový signál"
    },
    {
        question: "Vyzařují trubka a pozoun převážně jedno nebo více směrně?",
        options: [
            "Převážně více směrně",
            "Převážně jednosměrně",
            "Do tvaru osmičky"
        ],
        answer: "Převážně jednosměrně"
    },
    {
        question: "Jaké druhy kmitů probíhají v kamenu marimby?",
        options: [
            "Podélné, příčné a torzní",
            "Podélné, příčné a vyduté",
            "Laterální, příčné a ve smyku"
        ],
        answer: "Podélné, příčné a torzní"
    },
    {
        question: "Je blend při mixu žádoucí nebo ne? Proč?",
        options: [
            "Je, ale jen v 10%ním množství",
            "Je, odlišuje spojené stopy od sebe",
            "Je, protože působí jako pojivo zdánlivě nespojitelných složek",
            "Při mixování není přípustný"
        ],
        answer: "Je, protože působí jako pojivo zdánlivě nespojitelných složek"
    },
    {
        question: "Jaké vlastnosti má sinusová vlna?",
        options: [
            "Jeden shorek a plnou, průraznou barvu",
            "Jeden shorek a měkkou, zastřenou barvu",
            "Jen liché shorky a dutou barvu"
        ],
        answer: "Jeden shorek a měkkou, zastřenou barvu"
    },
    {
        question: "Spektrum, které vidíte, patří drknutí...",
        questionImage: "media/typ_drnknuti.jpg",
        options: [
            "těsně u kobylky (sul ponticello)",
            "v polovině struny",
            "v pětině struny"
        ],
        answer: "těsně u kobylky (sul ponticello)"
    },
    {
        question: "Jak se barevně a ve spektru liší drknutí v polovině, v sedmině struny a sul ponticello?",
        options: [
            "Drknutí v polovině struny generuje sudé harmonické",
            "Drknutí v sedmině struny generuje jen jeden harmonický",
            "Drknutí sul ponticello (těsně u kobylky) generuje plnou, širokou barvu s množstvím spojitých spekter"
        ],
        answer: "Drknutí sul ponticello (těsně u kobylky) generuje plnou, širokou barvu s množstvím spojitých spekter"
    },
    {
        question: "Joseph-Louis Lagrange v oblasti matematiky rozvinul",
        options: [
            "mechaniku kompozitů",
            "diferenciální a integrální rovnice, mechaniku, hydrodynamiku a aerodynamiku",
            "polohu libračních center, matematickou analýzu, teorii čísel, klasickou a nebeskou mechaniku"
        ],
        answer: "polohu libračních center, matematickou analýzu, teorii čísel, klasickou a nebeskou mechaniku"
    },
    {
        question: "Jaký je rozdíl mezi efektem Phaser a Flanger?",
        options: [
            "Flanger používá navíc ještě jeden zpětný okruh, který vytváří zvuk tzv. tryskáče",
            "Phaser je silněji rozladěn",
            "Flanger obsahuje ve své barvě tzv. tryskáč a patří mezi dynamické efekty"
        ],
        answer: "Flanger používá navíc ještě jeden zpětný okruh, který vytváří zvuk tzv. tryskáče"
    },
    {
        question: "Jaký je rozdíl mezi efekty Kompresor a Expander?",
        options: [
            "Expander patří mezi modulační efekty",
            "Expander zeslabuje signál pod prahem",
            "Kompresor zeslabuje signál pod prahem"
        ],
        answer: "Expander zeslabuje signál pod prahem"
    },
    {
        question: "Jaké vrtání má hoboj?",
        options: [
            "Exponenciální",
            "Válcové",
            "Kuželové"
        ],
        answer: "Kuželové"
    },
    {
        question: "Které módy v případě blanozvučných inklinují více k harmonickým poměrům: kruhové nebo dortové?",
        options: [
            "dortové",
            "oba",
            "kruhové"
        ],
        answer: "dortové"
    },
    {
        question: "Signál ve tvaru sinusu",
        options: [
            "nemá žádné harmonické složky",
            "má jedinou harmonickou složku",
            "má 5 harmonických složek",
            "má nekonečné množství harmonických složek"
        ],
        answer: "má jedinou harmonickou složku"
    },
    {
        question: "Jak kmit strunného nástroje rozkmitá/rozvlní vzduch?",
        options: [
            "Podélně",
            "Příčně",
            "Vrtotočivě"
        ],
        answer: "Příčně"
    },
    {
        question: "Kde se nachází subkontra oktáva, kde oktáva malá, jednočárkovaná a čtyřčárkovaná?",
        options: [
            "Jednočárkovaná oktáva se nachází nad 1000 Hz",
            "Čtyřčárkovaná oktáva se nachází nad 18 000 Hz a z poloviny ji již neslyšíme",
            "Malá oktáva se nachází pod 80 Hz",
            "Tón o frekvenci 300 Hz se nachází v jednočárkované oktávě",
            "Subkontra oktáva se nachází v rozmezí 100-150 Hz"
        ],
        answer: "Tón o frekvenci 300 Hz se nachází v jednočárkované oktávě"
    },
    {
        question: "Co je střída?",
        options: [
            "U periodického signálu poměr úrovní nosič a modulační",
            "U neperiodického signálu poměr úrovně „zapnuto“ vůči celkové periodě signálu",
            "U periodického signálu poměr úrovně „zapnuto“ vůči celkové periodě signálu"
        ],
        answer: "U periodického signálu poměr úrovně „zapnuto“ vůči celkové periodě signálu"
    },
    {
        question: "Jaký vzorec platí pro výpočet frekvencí v případě smyku smyčcem? Jaké obsahuje veličiny?",
        options: [
            "fn=n/2l√(F/ρ), kde ρ je amplituda struny",
            "fn=n/2l√(F/d), kde F je tahová síla a l je délka struny",
            "fn=n/2l√(F/d), kde n je rychlost zvuku"
        ],
        answer: "fn=n/2l√(F/d), kde F je tahová síla a l je délka struny"
    },
    {
        question: "Akustická konstanta je vyjádřena v jednotkách",
        options: [
            "m3 * kg-1 * s-1",
            "m2 * kg-1 * s-1",
            "m4 * kg-1 * s-1",
            "m3 * kg * s-1"
        ],
        answer: "m4 * kg-1 * s-1"
    },
    {
        question: "Co tvoří u klavíru – křídla - excitátor, oscilátor, rezonátor a radiátor?",
        options: [
            "Excitátory jsou kladívka",
            "Radiátorem jsou struny",
            "Excitátorem je klaviatura",
            "Rezonátorem je hodní odklopovací víko"
        ],
        answer: "Excitátory jsou kladívka"
    },
    {
        question: "Kde leží těžiště bílého šumu?",
        options: [
            "bílý šum nemá energetické těžiště, nýbrž konstantní výkonovou spektrální hustotu",
            "jeho výkonová frekvenční hustota se zvyšuje o 3 dB za oktávu, tedy je silnější ve vyšších pásmech",
            "při zdvojnásobení frekvence u něj klesne energie o 3 dB, tedy je silnější v nižších pásmech",
            "při zdvojnásobení frekvence u něj klesne energie o 6 dB, tedy je silnější v nižších pásmech"
        ],
        answer: "bílý šum nemá energetické těžiště, nýbrž konstantní výkonovou spektrální hustotu"
    },
    {
        question: "Doplň hodnotu místo otazníku: Δs = ? . Δt. K jaké akustické vlastnosti se doplněná zkratka vztahuje?",
        options: [
            "V, vztahuje se k objemu",
            "ʎ, označuje vlnovou délku",
            "c, vztahuje se ke kapacitě rezonátoru",
            "c, označuje rychlost"
        ],
        answer: "c, označuje rychlost"
    },
    {
        question: "Liché harmonické složky formují",
        options: [
            "Barvu",
            "Zkreslení",
            "Jasnost a mohutnost",
            "Ostrost"
        ],
        answer: "Barvu"
    },
    {
        question: "Barvě sinusu se blíží akustické nástroje jako",
        options: [
            "pizzicato, okarína, písknutí",
            "činel",
            "trubka a pozoun",
            "klarinet"
        ],
        answer: "pizzicato, okarína, písknutí"
    },
    {
        question: "Signál slitý z jednotlivých odrazů je většinou ostřejší, anebo měkčí? Proč?",
        options: [
            "Ostřejší, pomohl diskrétnosti harmonických složek",
            "Měkčí, protože pomohl diskrétnosti harmonických složek",
            "Měkčí, protože Reverb snížil diskrétnost harmonických složek"
        ],
        answer: "Měkčí, protože Reverb snížil diskrétnost harmonických složek"
    },
    {
        question: "Ve které oktávě hraje ukázka?",
        audio: "media/oktava.mp3",
        options: [
            "subkontra",
            "jednočárkované",
            "čtyřčárkované",
            "velké"
        ],
        answer: "velké"
    },
    {
        question: "Červená část nástroje se žlutou šipkou je:",
        questionImage: "media/radiator kopie_bz_popisky (1).jpg",
        options: [
            "rezonátor",
            "radiátor",
            "excitátor",
            "oscilátor"
        ],
        answer: "radiátor"
    },
    {
        question: "Jakou fyzikální vlastnost vyjadřuje následující vzorec: E=σ /ε? Co označuje hodnota ε?",
        options: [
            "Youngův model pružnosti, ε=l0/∆l",
            "Youngův model pružnosti, ε - napětí v tahu",
            "Youngův model deformace, ε - poměrná deformace",
            "Besselovu křivku, ε - argument 1. řádu"
        ],
        answer: "Youngův model pružnosti, ε=l0/∆l"
    },
    {
        question: "Kobylka na strunném nástroji",
        options: [
            "funguje do určité míry jako kapacitor s frekvenčně závislým odporem",
            "funguje jako hlavní rezonátor",
            "funguje jako akustický převodník – důsledkem je změna výšky signálu",
            "funguje do určité míry jako induktor s frekvenčně nezávislou impedancí"
        ],
        answer: "funguje do určité míry jako kapacitor s frekvenčně závislým odporem"
    },
    {
        question: "Neharmonické složky ve spektru vznikají",
        options: [
            "v různě hustém nebo nehomogenním oscilátoru, kde se pak některé harmonické vlny zrychlují nebo zpomalují",
            "díky příliš měkkému excitátoru",
            "díky exponenciálně tvarovanému radiátoru"
        ],
        answer: "v různě hustém nebo nehomogenním oscilátoru, kde se pak některé harmonické vlny zrychlují nebo zpomalují"
    },
    {
        question: "U hnědého šumu roste výkonová hustota spektra o 6 dB na stoupající oktávu.",
        options: [
            "Pravda",
            "Nepravda"
        ],
        answer: "Nepravda"
    },
    {
        question: "Křivky dynamických rozsahů níže platí pro",
        questionImage: "media/dyn_drnkaci.png",
        options: [
            "Smyčce",
            "Dřevěné nástroje",
            "Lidské hlasy",
            "Strunné drnkací nástroje"
        ],
        answer: "Strunné drnkací nástroje"
    },
    {
        question: "Zobcové flétny mají vyšší dynamický rozsah než flétna příčná",
        options: [
            "Pravda",
            "Nepravda"
        ],
        answer: "Nepravda"
    },
    {
        question: "Při čtyřnásobném zvýšení počtu smyčců v sekci z 4-4-3-2-1 na 16-16-12-8-6 naroste dynamika v dB průměrně o",
        options: [
            "9-12 dB",
            "3-5 dB",
            "40 dB",
            "1-2 dB"
        ],
        answer: "3-5 dB"
    }
];
