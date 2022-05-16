
document.addEventListener('DOMContentLoaded', ()=>{
    const stockForm = document.querySelector('#stock-search')
    
    stockForm.addEventListener('submit', (e) => {
e.preventDefault()
console.log(e.target.querySelector('#mySearch').value)
stockLookUp(e.target.querySelector('#mySearch').value)
        

},)

},)

async function stockLookUp(ticker) {
//  for (let i = 0; i < stockAbbrevArr.length; i++) {

    // if (ticker === stockAbbrevArr[i]) {
        debugger
    fetch(`https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers/${ticker}?apiKey=HRJaobcNSX77koktspcX6RhjjQ1aw4W5`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

    // }
//  }
}








const tickerArr = [
    "A   Agilent Technologies	Life Sciences Tools & Services	",
    
    "AA	     Alcoa	Metals & Mining	",
    
    "AAC	Ares Acquisition	Blank Check / SPAC	",
    
    "AACG	ATA Creativity Global	Diversified Consumer Services	",
    
    "AACI	Armada Acquisition I	Blank Check / SPAC	",
    
    "AADI	Aadi Bioscience	Biotechnology	",
    
    "AAIC	Arlington Asset Investment	Mortgage Real Estate Investment Trust	",
    
    "AAL	American Airlines Group	Airlines	",
    
    "AAMC	Altisource Asset Management	Real Estate Management & Development	",
    
    "AAME	Atlantic American	Insurance	",
    
    "AAN	The Aaron's Company	Specialty Retail	",
    
    "AAOI	Applied Optoelectronics	Communications Equipment	",
    
    "AAON	AAON Inc	Building Products	",
    
    "AAP	Advance Auto Parts	Specialty Retail	",
    
    "AAPL	Apple	Technology Hardware Storage & Periph	",
    
    "AAQC	Accelerate Acquisition	Blank Check / SPAC	",
    
    "AAT	American Assets Trust	Equity Real Estate Investment Trusts 	",
    
    "AATC	Autoscope Technologies	Scientific & Technical Instruments	",
    
    "AAU	Almaden Minerals	Metals & Mining	",
    
    "AAWW	Atlas Air Worldwide Holdings	Air Freight & Logistics	",
    
    "AB	    AllianceBernstein Holding	Capital Markets	",
    
    "ABB	ABB Ltd	Electrical Equipment	",
    
    "ABBV	AbbVie	Biotechnology	",
    ,
    "ABC	AmerisourceBergen	Health Care Providers & Services	",
    
    "ABCB	Ameris Bancorp	Banks	",
    ,
    "ABCL	AbCellera Biologics	Biotechnology	",
    
    "ABCM	Abcam	Biotechnology	",
    
    "ABEO	Abeona Therapeutics	Biotechnology	",
    
    "ABEV	Ambev	Beverages	",
    
    "ABG	Asbury Automotive Group	Specialty Retail	",
    
    "ABGI	ABG Acquisition I	Blank Check / SPAC	",
    
    "ABIO	ARCA biopharma	Biotechnology	",
    
    "ABM	ABM Industries	Commercial Services & Supplies	",
    
    "ABMD	Abiomed	Health Care Equipment & Supplies	",
    
    "ABNB	Airbnb	Hotels Restaurants & Leisure	",
    
    "ABOS	Acumen Pharmaceuticals	Biotechnology	",
    
    "ABR	Arbor Realty Trust	Mortgage Real Estate Investment Trust	",
    
    "ABSI	Absci	Biotechnology	",
    
    "ABST	Absolute Software	Software-Application	",
    
    "ABT	Abbott Laboratories	Health Care Equipment & Supplies	",
    
    "ABTX	Allegiance Bancshares	Banks	",
    
    "ABUS	Arbutus Biopharma	Biotechnology	",
    
    "ABVC	ABVC BioPharma	Biotechnology	",
    
    "AC	    Associated Capital Group	Capital Markets	",
    
    "ACA	Arcosa	Construction & Engineering	",
    
    "ACAB	Atlantic Coastal Acquisition II	Blank Check / SPAC	",
    
    "ACAD	ACADIA Pharmaceuticals	Biotechnology	",
    
    "ACAH	Atlantic Coastal Acquisition	Blank Check / SPAC	",
    
    "ACAQ	Athena Consumer Acquisition	Blank Check / SPAC	",
    
    "ACAX	Alset Capital Acquisition	Blank Check / SPAC	",
    
    "ACB	Aurora Cannabis	Pharmaceuticals	",
    
    "ACBA	Ace Global Business Acquisition	Blank Check / SPAC	",
    
    "ACC	American Campus Communities	Equity Real Estate Investment Trusts 	",
    
    "ACCD	Accolade	Health Care Technology	",
    
    "ACCO	ACCO Brands	Commercial Services & Supplies	",
    
    "ACDI	Ascendant Digital Acquisition III	Blank Check / SPAC	",
    
    "ACEL	Accel Entertainment	Hotels Restaurants & Leisure	",
    
    "ACER	Acer Therapeutics	Pharmaceuticals	",
    
    "ACET	Adicet Bio	Health Care Providers & Services	",
    
    "ACEV	ACE Convergence Acquisition	Blank Check / SPAC	",
    
    "ACGL	Arch Capital Group	Insurance	",
    
    "ACH	Aluminum Corporation of China	Metals & Mining	",
    
    "ACHC	Acadia Healthcare Company	Health Care Providers & Services	",
    
    "ACHL	Achilles Therapeutics	Biotechnology	",
    
    "ACHR	Archer Aviation	Aerospace & Defense	",
    
    "ACHV	Achieve Life Sciences	Biotechnology	",
    
    "ACI	Albertsons Companies	Grocery Stores	",
    
    "ACII	Atlas Crest Investment II	Blank Check / SPAC	",
    
    "ACIU	AC Immune	Biotechnology	",
    
    "ACIW	ACI Worldwide	Software	",
    
    "ACKIT	Ackrell SPAC Partners I Co	Blank Check / SPAC	",
    
    "ACLS	Axcelis Technologies	Semiconductors & Semiconductor Equipment	",
    
    "ACLX	Arcellx	Biotechnology	",
    
    "ACM	AECOM	Construction & Engineering	",
    
    "ACMR	ACM Research	Semiconductors & Semiconductor Equipment	",
    
    "ACN	Accenture	IT Services	",
    
    "ACNB	ACNB Corporation	Banks	",
    
    "ACON	Aclarion	Health Information Services	",
    
    "ACOR	Acorda Therapeutics	Biotechnology	",
    
    "ACQR	Independence Holdings	Blank Check / SPAC	",
    
    "ACR	ACRES Commercial Realty	Mortgage Real Estate Investment Trust	",
    
    "ACRE	Ares Commercial Real Estate	Mortgage Real Estate Investment Trust	",
    
    "ACRO	Acropolis Infrastructure Acquisition	Blank Check / SPAC	",
    
    "ACRS	Aclaris Therapeutics	Pharmaceuticals	",
    
    "ACRX	AcelRx Pharmaceuticals	Pharmaceuticals	",
    
    "ACST	Acasti Pharma	Pharmaceuticals	",
    
    "ACT	Enact Holdings	Insurance-Specialty	",
    
    "ACTD	ArcLight Clean Transition II	Blank Check / SPAC	",
    
    "ACTG	Acacia Research	Professional Services	",
    
    "ACU	Acme United	Commercial Services & Supplies	",
    
    "ACVA	ACV Auctions	Software-Application	",
    
    "ACXP	Acurx Pharmaceuticals	Biotechnology	",
    
    "ADAG	Adagene	Biotechnology	",
    
    "ADAL	Anthemis Digital Acquisitions I	Blank Check / SPAC	",
    
    "ADAP	Adaptimmune Therapeutics	Biotechnology	",
    
    "ADBE	Adobe	Software	",
    
    "ADC	Agree Realty	Equity Real Estate Investment Trusts 	",
    
    "ADCT	ADC Therapeutics	Communications Equipment	",
    
    "ADER	 Capital Acquisition	Blank Check / SPAC	",
    
    "ADES	Advanced Emissions Solutions	Chemicals	",
    
    "ADEX	Adit EdTech Acquisition	Blank Check / SPAC	",
    
    "ADGI	Adagio Therapeutics	Biotechnology	",
    
    "ADI	Analog Devices	Semiconductors & Semiconductor Equipment	",
    
    "ADIL	Adial Pharmaceuticals	Pharmaceuticals	",
    
    "ADM	Archer-Daniels-Midland Company	Food Products	",
    
    "ADMA	ADMA Biologics	Biotechnology	",
    
    "ADMP	Adamis Pharmaceuticals	Pharmaceuticals	",
    
    "ADN	Advent Technologies Holdings	Utilities-Renewable	",
    
    "ADNT	Adient	Auto Components	",
    
    "ADOC	Edoc Acquisition	Blank Check / SPAC	",
    
    "ADP	Automatic Data Processing	IT Services	",
    
    "ADPT	Adaptive Biotechnologies	Life Sciences Tools & Services	",
    
    "ADRA	Adara Acquisition	Blank Check / SPAC	",
    
    "ADRT	Ault Disruptive Technologies	Blank Check / SPAC	",
    
    "ADSE	ADS-TEC Energy Public Limited Company	Electrical Equipment & Parts	",
    
    "ADSK	Autodesk	Software	",
    ,
    "ADT	ADT Inc	Commercial Services & Supplies	",
    ,
    "ADTH	AdTheorent Holding Company	Advertising Agencies	",
    
    "ADTN	ADTRAN	Communications Equipment	",
    
    "ADTX	Aditx	Biotechnology	",
    
    "ADUS	Addus HomeCare	Health Care Providers & Services	",
    
    "ADV	Advantage Solutions	Advertising Agencies	",
    ,
    "ADVM	Adverum Biotechnologies	Biotechnology	",
    
    "ADXN	Addex Therapeutics	Biotechnology	",
    
    "ADXS	Advaxis	Biotechnology	",
    
    "AE	    Adams Resources & Energy	Oil Gas & Consumable Fuels	",
    
    "AEAC	Authentic Equity Acquisition	Blank Check / SPAC	",
    
    "AEAE	AltEnergy Acquisition	Blank Check / SPAC	",
    
    "AEE	Ameren	Multi-Utilities	",
    
    "AEG	Aegon	Insurance	",
    ,
    "AEHA	Aesther Healthcare Acquisition	Blank Check / SPAC	",
    
    "AEHL	Antelope Enterprise Holdings	Building Products & Equipment	",
    
    "AEHR	Aehr Test Systems	Semiconductors & Semiconductor Equipment	",
    
    "AEI	Alset EHome International	Real Estate-Development	",
    
    "AEIS	Advanced Energy Industries	Semiconductors & Semiconductor Equipment	",
    ,
    "AEL	American Equity Investment Life Holding Company	Insurance	",
    
    "AEM	Agnico Eagle Mines	Metals & Mining	",
    
    "AEMD	Aethlon Medical	Health Care Equipment & Supplies	",
    
    "AENZ	Aenza	Engineering & Construction	",
    
    "AEO	American Eagle Outfitters	Specialty Retail	",
    
    "AEP	American Electric Power Company	Electric Utilities	",
    
    "AER	AerCap Holdings	Trading Companies & Distributors	",
    
    "AERC	AeroClean Technologies	Pollution & Treatment Controls	",
    
    "AERI	Aerie Pharmaceuticals	Pharmaceuticals	",
    
    "AES	The AES Corporation	Independent Power and Renewable Elect	",
    
    "AESE	Allied Esports Entertainment	Hotels Restaurants & Leisure	",
    
    "AEVA	Aeva Technologies	Auto Parts	",
    
    "AEY	ADDvantage Technologies Group	Electronic Equipment Instruments & C	",
    
    "AEYE	AudioEye	Software	",
    
    "AEZS	AEterna Zentaris	Biotechnology	",
    
    "AFAC	Arena Fortify Acquisition	Blank Check / SPAC	",
    
    "AFAQ	AF Acquisition	Blank Check / SPAC	",
    
    "AFAR	Aura FAT Projects Acquisition	Blank Check / SPAC	",
    
    "AFBI	Affinity Bancshares	Banks	",
    
    "AFCG	AFC Gamma	REIT-Specialty	",
    
    "AFG	American Financial Group	Insurance	",
    
    "AFI	Armstrong Flooring	Building Products	",
    
    "AFIB	Acutus Medical	Medical Devices	",
    
    "AFL	Aflac	Insurance	",
    
    "AFMD	Affimed	Biotechnology	",
    
    "AFRM	Affirm Holdings	IT Services	",
    
    "AFTR	AfterNext HealthTech Acquisition	Blank Check / SPAC	",
    
    "AFYA	Afya Limited	Diversified Consumer Services	",
    
    "AG	    First Majestic Silver	Metals & Mining	",
    
    "AGAC	African Gold Acquisition	Blank Check / SPAC	",
    
    "AGBA	AGBA Acquisition	Blank Check / SPAC	",
    
    "AGCB	Altimeter Growth 	Blank Check / SPAC	",
    
    "AGCO	AGCO Corporation	Machinery	",
    
    "AGE	AgeX Therapeutics	Biotechnology	",
    
    "AGEN	Agenus	Biotechnology	",
    
    "AGFS	AgroFresh Solutions	Chemicals	",
    
    "AGFY	Agrify	Machinery	",
    
    "AGGR	Agile Growth	Blank Check / SPAC	",
    
    "AGI	Alamos Gold	Metals & Mining	",
    
    "AGIL	AgileThought	Software-Application	",
    
    "AGIO	Agios Pharmaceuticals	Biotechnology	",
    
    "AGL	agilon health	Medical Care Facilities	",
    
    "AGLE	Aeglea Biotherapeutics	Biotechnology	",
    
    "AGM	Federal Agricultural Mortgage	Thrifts & Mortgage Finance	",
    
    "AGMA	Federal Agricultural Mortgage	Credit Services	",
    
    "AGMH	AGM Group Holdings	Capital Markets	",
    
    "AGNC	AGNC Investment	Mortgage Real Estate Investment Trust	",
    
    "AGO	Assured Guaranty	Insurance	",
    
    "AGR	Avangrid	Electric Utilities	",
    
    "AGRI	AgriFORCE Growing Systems	Farm Products	",
    
    "AGRO	Adecoagro	Food Products	",
    
    "AGRX	Agile Therapeutics	Pharmaceuticals	",
    
    "AGS	PlayAGS	Hotels Restaurants & Leisure	",
    
    "AGTC	Applied Genetic Technologies	Biotechnology	",
    
    "AGTI	Agiliti	Health Information Services	",
    ,
    "AGX	Argan	Construction & Engineering	",
    
    "AGYS	Agilysys	Software	",
    
    "AHCO	AdaptHealth	Health Care Providers & Services	",
    
    "AHG	Akso Health Group	Credit Services	",
    
    "AHH	Armada Hoffler Properties	Equity Real Estate Investment Trusts 	",
    
    "AHI	Advanced Human Imaging	Software-Application	",
    
    "AHPA	Avista Public Acquisition II	Blank Check / SPAC	",
    
    "AHPI	Allied Healthcare Products	Health Care Equipment & Supplies	",
    
    "AHRN	Ahren Acquisition	Blank Check / SPAC	",
    
    "AHT	Ashford Hospitality Trust	Equity Real Estate Investment Trusts 	",
    
    "AI	    Cai	Software	",
    ,
    "AIB	AIB Acquisition	Blank Check / SPAC	",
    
    "AIG	American International Group	Insurance	",
    
    "AIH	Aesthetic Medical International Holdings Group	Health Care Providers & Services	",
    
    "AIHS	Senmiao Technology	Consumer Finance	",
    
    "AIKI	AIkido Pharma	Biotechnology	",
    
    "AIM	AIM ImmunoTech	Biotechnology	",
    
    "AIMA	Aimfinity Investment I	Blank Check / SPAC	",
    
    "AIMC	Altra Industrial Motion	Machinery	",
    
    "AIN	Albany International	Machinery	",
    
    "AINC	Ashford	Capital Markets	",
    
    "AINV	Apollo Investment	Capital Markets	",
    
    "AIP	Arteris	Semiconductors	",
    
    "AIR	AAR Corp	Aerospace & Defense	",
    
    "AIRC	Apartment Income REIT	Equity Real Estate Investment Trusts 	",
    ,
    "AIRG	Airgain	Electronic Equipment Instruments & C	",
    
    "AIRI	Air Industries Group	Aerospace & Defense	",
    
    "AIRS	AirSculpt Technologies	Medical Care Facilities	",
    
    "AIRT	Air T	Air Freight & Logistics	",
    
    "AIT	Applied Industrial Technologies	Trading Companies & Distributors	",
    
    "AIU	Meta Data	Diversified Consumer Services	",
    ,
    "AIV	Apartment Investment & Management Company	Equity Real Estate Investment Trusts 	",
    
    "AIZ	Assurant	Insurance	",
    
    "AJG	Arthur J Gallagher & Company	Insurance	",
    
    "AJRD	Aerojet Rocketdyne Holdings	Aerospace & Defense	",
    
    "AJX	Great Ajax	Mortgage Real Estate Investment Trust	",
    
    "AKA	aka Brands Holding	Internet Retail	",
    
    "AKAM	Akamai Technologies	IT Services	",
    
    "AKAN	Akanda	Drug Manufacturers-Specialty & Generic	",
    
    "AKBA	Akebia Therapeutics	Biotechnology	",
    
    "AKIC	Sports Ventures Acquisition	Blank Check / SPAC	",
    
    "AKOA	Embotelladora Andina	Beverages-Non-Alcoholic	",
    
    "AKOB	Embotelladora Andina	Beverages-Non-Alcoholic	",
    
    "AKR	Acadia Realty Trust	Equity Real Estate Investment Trusts 	",
    
    "AKRO	Akero Therapeutics	Biotechnology	",
    
    "AKTS	Akoustis Technologies	Electronic Equipment Instruments & C	",
    
    "AKTX	Akari Therapeutics	Pharmaceuticals	",
    
    "AKU	Akumin	Diagnostics & Research	",
    
    "AKUS	Akouos	Biotechnology	",
    
    "AKYA	Akoya Biosciences	Medical Instruments & Supplies	",
    
    "AL	    Air Lease	Trading Companies & Distributors	",
    
    "ALB	Albemarle	Chemicals	",
    
    "ALBO	Albireo Pharma	Biotechnology	",
    
    "ALC	Alcon	Medical Instruments & Supplies	",
    
    "ALCC	AltC Acquisition	Blank Check / SPAC	",
    
    "ALCO	Alico	Food Products	",
    
    "ALDX	Aldeyra Therapeutics	Biotechnology	",
    
    "ALE	ALLETE	Electric Utilities	",
    ,
    "ALEC	Alector	Biotechnology	",
    
    "ALEX	Alexander & Baldwin	Equity Real Estate Investment Trusts 	",
    
    "ALF	ALFI Inc	Software-Infrastructure	",
    
    "ALG	Alamo Group	Machinery	",
    
    "ALGM	Allegro MicroSystems	Semiconductors & Semiconductor Equipment	",
    
    "ALGN	Align Technology	Health Care Equipment & Supplies	",
    ,
    "ALGS	Aligos Therapeutics	Biotechnology	",
    
    "ALGT	Allegiant Travel Company	Airlines	",
    
    "ALHC	Alignment Healthcare	Health Care Providers & Services	",
    ,
    "ALIM	Alimera Sciences	Pharmaceuticals	",
    
    "ALIT	Alight	Software-Application	",
    
    "ALJJ	ALJ Regional Holdings	IT Services	",
    
    "ALK	Alaska Air Group	Airlines	",
    
    "ALKS	Alkermes	Biotechnology	",
    
    "ALKT	Alkami Technology	Software-Application	",
    
    "ALL	The Allstate Corporation	Insurance	",
    
    "ALLE	Allegion	Building Products	",
    
    "ALLG	Allego	Auto Parts	",
    
    "ALLK	Allakos	Biotechnology	",
    
    "ALLO	Allogene Therapeutics	Biotechnology	",
    
    "ALLR	Allarity Therapeutics	Biotechnology	",
    
    "ALLT	Allot	Software	",
    
    "ALLY	Ally Financial	Consumer Finance	",
    
    "ALNA	Allena Pharmaceuticals	Biotechnology	",
    
    "ALNY	Alnylam Pharmaceuticals	Biotechnology	",
    
    "ALOR	ALSP Orchid Acquisition I	Blank Check / SPAC	",
    
    "ALOT	AstroNova	Technology Hardware Storage & Periph	",
    
    "ALPA	Alpha Healthcare Acquisition III	Blank Check / SPAC	",
    
    "ALPN	Alpine Immune Sciences	Biotechnology	",
    
    "ALPP	Alpine  Holdings	Metal Fabrication	",
    
    "ALR	AlerisLife	Medical Care Facilities	",
    
    "ALRM	Alarmcom Holdings	Software	",
    
    "ALRN	Aileron Therapeutics	Biotechnology	",
    
    "ALRS	Alerus Financial	Diversified Financial Services	",
    
    "ALSA	Alpha Star Acquisition	Blank Check / SPAC	",
    
    "ALSN	Allison Transmission Holdings	Machinery	",
    
    "ALT	Altimmune	Biotechnology	",
    
    "ALTG	Alta Equipment Group	Trading Companies & Distributors	",
    
    "ALTO	Alto Ingredients	Oil Gas & Consumable Fuels	",
    
    "ALTR	Altair Engineering	Software	",
    
    "ALTU	Altitude Acquisition	Blank Check / SPAC	",
    
    "ALV	Autoliv	Auto Components	",
    
    "ALVR	AlloVir	Biotechnology	",
    
    "ALX	Alexander's	Equity Real Estate Investment Trusts 	",
    
    "ALXO	ALX Oncology Holdings	Biotechnology	",
    
    "ALYA	Alithya Group	IT Services	",
    
    "ALZN	Alzamend Neuro	Biotechnology	",
    
    "AM	    Antero Midstream	Oil Gas & Consumable Fuels	",
    ,
    "AMAL	Amalgamated Financial	Banks	",
    
    "AMAM	Ambrx Biopharma	Biotechnology	",
    
    "AMAO	American Acquisition Opportunity	Blank Check / SPAC	",
    
    "AMAT	Applied Materials	Semiconductors & Semiconductor Equipment	",
    
    "AMBA	Ambarella	Semiconductors & Semiconductor Equipment	",
    
    "AMBC	Ambac Financial Group	Insurance	",
    
    "AMBO	Ambow Education Holding	Diversified Consumer Services	",
    
    "AMBP	Ardagh Metal Packaging	Packaging & Containers	",
    
    "AMC	AMC Entertainment Holdings	Entertainment	",
    ,
    "AMCI	AMCI Acquisition II	Blank Check / SPAC	",
    
    "AMCR	Amcor	Containers & Packaging	",
    
    "AMCX	AMC Networks	Media	",
    
    "AMD	Advanced Micro Devices	Semiconductors & Semiconductor Equipment	",
    
    "AME	AMETEK	Electrical Equipment	",
    
    "AMED	Amedisys	Health Care Providers & Services	",
    
    "AMEH	Apollo Medical Holdings	Health Care Providers & Services	",
    
    "AMG	Affiliated Managers Group	Capital Markets	",
    
    "AMGN	Amgen	Biotechnology	",
    
    "AMH	American Homes  Rent	Equity Real Estate Investment Trusts 	",
    
    "AMK	AssetMark Financial Holdings	Capital Markets	",
    
    "AMKR	Amkor Technology	Semiconductors & Semiconductor Equipment	",
    ,
    "AMLX	Amylyx Pharmaceuticals	Biotechnology	",
    
    "AMN	AMN Healthcare Services	Health Care Providers & Services	",
    
    "AMNB	American National Bankshares	Banks	",
    
    "AMOT	Allied Motion Technologies	Electrical Equipment	",
    
    "AMOV	America Movil		",
    
    "AMP	Ameriprise Financial	Capital Markets	",
    
    "AMPE	Ampio Pharmaceuticals	Pharmaceuticals	",
    
    "AMPG	AmpliTech Group	Communication Equipment	",
    
    "AMPH	Amphastar Pharmaceuticals	Pharmaceuticals	",
    
    "AMPI	Advanced Merger Partners	Blank Check / SPAC	",
    
    "AMPL	Amplitude	Software-Application	",
    
    "AMPS	Altus Power	Utilities-Renewable	",
    
    "AMPY	Amplify Energy	Oil & Gas E&P	",
    
    "AMR	Alpha Metallurgical Resources	Oil Gas & Consumable Fuels	",
    
    "AMRC	Ameresco	Construction & Engineering	",
    ,
    "AMRK	A-Mark Precious Metals	Diversified Financial Services	",
    
    "AMRN	Amarin	Biotechnology	",
    
    "AMRS	Amyris	Chemicals	",
    
    "AMRX	Amneal Pharmaceuticals	Pharmaceuticals	",
    
    "AMS	American Shared Hospital Services	Health Care Providers & Services	",
    
    "AMSC	American Superconductor	Electrical Equipment	",
    
    "AMSF	AMERISAFE	Insurance	",
    
    "AMST	Amesite	Software-Application	",
    
    "AMSWA	American Software	Software	",
    
    "AMT	American Tower	Equity Real Estate Investment Trusts 	",
    
    "AMTB	Amerant Bancorp	Banks	",
    
    "AMTD	AMTD International	Asset Management	",
    
    "AMTI	Applied Molecular Transport	Biotechnology	",
    
    "AMTX	Aemetis	Oil Gas & Consumable Fuels	",
    
    "AMWD	American Woodmark	Building Products	",
    
    "AMWL	American Well	Health Information Services	",
    
    "AMX	America Movil		",
    
    "AMYT	Amryt Pharma	Drug Manufacturers-Specialty & Generic	",
    
    "AMZN	Amazoncom	Internet & Direct Marketing Retail	",
    ,
    "AN	    AutoNation	Specialty Retail	",
    
    "ANAB	AnaptysBio	Biotechnology	",
    
    "ANAC	Arctos NorthStar Acquisition	Blank Check / SPAC	",
    
    "ANAT	American National Group	Insurance	",
    
    "ANDE	The Andersons	Food & Staples Retailing	",
    
    "ANEB	Anebulo Pharmaceuticals	Biotechnology	",
    
    "ANET	Arista Networks	Communications Equipment	",
    
    "ANF	Abercrombie & Fitch Company	Specialty Retail	",
    
    "ANGH	Anghami	Entertainment	",
    
    "ANGI	Angi Inc	Interactive Media & Services	",
    
    "ANGN	Angion Biomedica	Biotechnology	",
    
    "ANGO	AngioDynamics	Health Care Equipment & Supplies	",
    
    "ANIK	Anika Therapeutics	Biotechnology	",
    
    "ANIP	ANI Pharmaceuticals	Pharmaceuticals	",
    
    "ANIX	Anixa Biosciences	Biotechnology	",
    
    "ANNX	Annexon	Biotechnology	",
    
    "ANPC	AnPac Bio-Medical Science Co	Biotechnology	",
    
    "ANSS	ANSYS	Software	",
    
    "ANTE	AirNet Technology	Media	",
    
    "ANTM	Anthem	Health Care Providers & Services	",
    
    "ANTX	AN Therapeutics	Health Care	",
    
    "ANVS	Annovis Bio	Biotechnology	",
    
    "ANY	Sphere D	Software	",
    
    "ANZU	Anzu Special Acquisition I	Blank Check / SPAC	",
    
    "AOGO	Arogo Capital Acquisition	Blank Check / SPAC	",
    
    "AOMR	Angel Oak Mortgage	REIT-Mortgage	",
    
    "AON	Aon plc	Insurance	",
    
    "AORT	Artivion	Medical Devices	",
    
    "AOS	A O Smith	Building Products	",
    
    "AOSL	Alpha & Omega Semiconductor	Semiconductors & Semiconductor Equipment	",
    
    "AOUT	American Outdoor Brands	Leisure Products	",
    
    "AP	    Ampco-Pittsburgh	Metals & Mining	",
    
    "APA	APA Corporation	Oil Gas & Consumable Fuels	",
    
    "APAC	Stonebridge Acquisition	Blank Check / SPAC	",
    
    "APAM	Artisan Partners Asset Management	Capital Markets	",
    
    "APCA	AP Acquisition	Blank Check / SPAC	",
    
    "APCX	AppTech Payments	Software-Infrastructure	",
    
    "APD	Air Products & Chemicals	Chemicals	",
    
    "APDN	Applied DNA Sciences	Electronic Equipment Instruments & C	",
    
    "APEI	American Public Education	Diversified Consumer Services	",
    
    "APEN	Apollo Endosurgery	Health Care Equipment & Supplies	",
    
    "APG	APi Group	Construction & Engineering	",
    
    "APGB	Apollo Strategic Growth Capital II	Shell Companies	",
    
    "APH	Amphenol	Electronic Equipment Instruments & C	",
    
    "API	Agora	Electronic Equipment Instruments & C	",
    
    "APLE	Apple Hospitality REIT	Equity Real Estate Investment Trusts 	",
    
    "APLS	Apellis Pharmaceuticals	Biotechnology	",
    
    "APLT	Applied Therapeutics	Biotechnology	",
    
    "APM	Aptorum Group	Biotechnology	",
    
    "APMI	AxonPrime Infrastructure Acquisition	Blank Check / SPAC	",
    
    "APN	Apeiron Capital Investment	Blank Check / SPAC	",
    
    "APO	Apollo Global Management	Capital Markets	",
    
    "APOG	Apogee Enterprises	Building Products	",
    
    "APP	AppLovin	Software-Application	",
    
    "APPF	AppFolio	Software	",
    
    "APPH	AppHarvest	Food Products	",
    
    "APPN	Appian	Software	",
    
    "APPS	Digital Turbine	Software	",
    
    "APRE	Aprea Therapeutics	Biotechnology	",
    
    "APRN	Blue Apron Holdings	Internet & Direct Marketing Retail	",
    
    "APSG	Apollo Strategic Growth Capital	Shell Companies	",
    
    "APT	Alpha Pro Tech	Building Products	",
    
    "APTM	Alpha Partners Technology Merger	Blank Check / SPAC	",
    
    "APTO	Aptose Biosciences	Biotechnology	",
    
    "APTS	Preferred Apartment Communities	Equity Real Estate Investment Trusts 	",
    
    "APTV	Aptiv	Auto Components	",
    
    "APTX	Aptinyx	Biotechnology	",
    
    "APVO	Aptevo Therapeutics	Biotechnology	",
    
    "APWC	Asia Pacific Wire & Cable	Electrical Equipment	",
    
    "APXI	APx Acquisition I	Blank Check / SPAC	",
    
    "APYX	Apyx Medical	Health Care Equipment & Supplies	",
    
    "AQB	AquaBounty Technologies	Biotechnology	",
    
    "AQMS	Aqua Metals	Commercial Services & Supplies	",
    
    "AQN	Algonquin Power & Utilities	Multi-Utilities	",
    
    "AQST	Aquestive Therapeutics	Pharmaceuticals	",
    
    "AQUA	Evoqua Water Technologies	Machinery	",
    
    "AR	    Antero Resources	Oil Gas & Consumable Fuels	",
    
    "ARAV	Aravive	Biotechnology	",
    
    "ARAY	Accuray	Health Care Equipment & Supplies	",
    
    "ARBE	Arbe Robotics	Software-Infrastructure	",
    
    "ARBG	Aequi Acquisition	Blank Check / SPAC	",
    
    "ARBK	Argo Blockchain	Capital Markets	",
    
    "ARC	ARC Document Solutions	Commercial Services & Supplies	",
    
    "ARCB	ArcBest	Road & Rail	",
    
    "ARCC	Ares Capital	Capital Markets	",
    
    "ARCE	Arco Platform	Diversified Consumer Services	",
    
    "ARCH	Arch Resources	Oil Gas & Consumable Fuels	",
    
    "ARCK	Arbor Rapha Capital Bioholdings I	Blank Check / SPAC	",
    
    "ARCO	Arcos Dorados Holdings	Hotels Restaurants & Leisure	",
    
    "ARCT	Arcturus Therapeutics Holdings	Biotechnology	",
    
    "ARDS	Aridis Pharmaceuticals	Biotechnology	",
    
    "ARDX	Ardelyx	Biotechnology	",
    
    "ARE	Alexandria Real Estate Equities	Equity Real Estate Investment Trusts 	",
    
    "AREC	American Resources	Oil Gas & Consumable Fuels	",
    
    "AREN	Arena Group Holdings	Internet Content & Information	",
    
    "ARES	Ares Management	Capital Markets	",
    ,
    "ARGO	Argo Group International Holdings	Insurance	",
    
    "ARGU	Argus Capital	Blank Check / SPAC	",
    
    "ARGX	Argenx SE	Biotechnology	",
    
    "ARHS	Arhaus	Home Improvement Retail	",
    
    "ARI	Apollo Commercial Real Estate Finance	Mortgage Real Estate Investment Trust	",
    
    "ARIS	Aris Water Solutions 	",
    
    "ARIZ	Arisz Acquisition	Blank Check / SPAC	",
    
    "ARKO	ARKO Corp	Specialty Retail	",
    
    "ARKR	Ark Restaurants	Hotels Restaurants & Leisure	",
    
    "ARL	American Realty Investors	Real Estate Management & Development	",
    
    "ARLO	Arlo Technologies	Electronic Equipment Instruments & C	",
    
    "ARLP	Alliance Resource Partners	Oil Gas & Consumable Fuels	",
    
    "ARMK	Aramark	Hotels Restaurants & Leisure	",
    
    "ARMP	Armata Pharmaceuticals	Biotechnology	",
    
    "ARNC	Arconic	Aerospace & Defense	",
    ,
    "AROC	Archrock	Energy Equipment & Services	",
    
    "AROW	Arrow Financial	Banks	",
    
    "ARQQ	Arqit Quantum	Software-Infrastructure	",
    
    "ARQT	Arcutis Biotherapeutics	Biotechnology	",
    
    "ARR	ARMOUR Residential REIT	Mortgage Real Estate Investment Trust	",
    
    "ARRW	Arrowroot Acquisition	Blank Check / SPAC	",
    
    "ARRY	Array Technologies	Solar	",
    
    "ARTA	Artisan Acquisition	Blank Check / SPAC	",
    
    "ARTE	Artemis Strategic Investment	Blank Check / SPAC	",
    
    "ARTL	Artelo Biosciences	Pharmaceuticals	",
    
    "ARTNA	Artesian Resources	",
    
    "ARTW	Art's-Way Manufacturing Co	Machinery	",
    
    "ARVL	Arrival	Auto Manufacturers	",
    
    "ARVN	Arvinas	Pharmaceuticals	",
    ,
    "ARW	Arrow Electronics	Electronic Equipment Instruments & C	",
    
    "ARWR	Arrowhead Pharmaceuticals	Biotechnology	",
    
    "ARYD	ARYA Sciences Acquisition IV	Blank Check / SPAC	",
    
    "ARYE	Arya Sciences Acquisition V	Blank Check / SPAC	",
    
    "ASA	ASA Gold and Precious Metals	Capital Markets	",
    
    "ASAI	Sendas Distribuidora	Food & Staples Retailing	",
    ,
    "ASAN	Asana	Software	",
    
    "ASAQ	Atlantic Street Acquisition	Blank Check / SPAC	",
    
    "ASAX	Astrea Acquisition	Blank Check / SPAC	",
    
    "ASB	Associated Banc-Corp	Banks	",
    
    "ASC	Ardmore Shipping	Oil Gas & Consumable Fuels	",
    
    "ASCA	A SPAC I Acquisition	Blank Check / SPAC	",
    
    "ASCB	A SPAC II Acquisition	Blank Check / SPAC	",
    
    "ASGN	ASGN Incorporated	Professional Services	",
    
    "ASH	Ashland Global Holdings	Chemicals	",
    
    "ASIX	AdvanSix	Chemicals	",
    
    "ASLE	AerSale	Airports & Air Services	",
    
    "ASLN	ASLAN Pharmaceuticals	Biotechnology	",
    
    "ASM	Avino Silver & Gold Mines	Metals & Mining	",
    
    "ASMB	Assembly Biosciences	Biotechnology	",
    
    "ASML	ASML Holding	Semiconductors & Semiconductor Equipment	",
    
    "ASND	Ascendis Pharma	Biotechnology	",
    
    "ASO	Academy Sports and Outdoors	Specialty Retail	",
    
    "ASPA	Abri SPAC I	Blank Check / SPAC	",
    
    "ASPC	Alpha Capital Acquisition Company	Blank Check / SPAC	",
    
    "ASPN	Aspen Aerogels	Energy Equipment & Services	",
    
    "ASPS	Altisource Portfolio Solutions	Real Estate Management & Development	",
    
    "ASPU	Aspen Group	Diversified Consumer Services	",
    
    "ASR	Grupo Aeroportuario del Sureste	Transportation Infrastructure	",
    
    "ASRT	Assertio Holdings	Pharmaceuticals	",
    
    "ASRV	AmeriServ Financial	Banks	",
    
    "ASTC	Astrotech	Aerospace & Defense	",
    
    "ASTE	Astec Industries	Machinery	",
    
    "ASTL	Algoma Steel Group	Steel	",
    
    "ASTR	Astra Space	Aerospace & Defense	",
    
    "ASTS	AST SpaceMobile	Telecom Services	",
    
    "ASUR	Asure Software	Software	",
    
    "ASX	ASE Technology Holding Company	Semiconductors & Semiconductor Equipment	",
    ,
    "ASXC	Asensus Surgical	Medical Devices	",
    
    "ASYS	Amtech Systems	Semiconductors & Semiconductor Equipment	",
    
    "ASZ	Austerlitz Acquisition II	Blank Check / SPAC	",
    
    "ATA	Americas Technology Acquisition	Blank Check / SPAC	",
    
    "ATAI	ATAI Life Sciences	Biotechnology	",
    
    "ATAK	Aurora Technology Acquisition	Blank Check / SPAC	",
    
    "ATAQ	Altimar Acquisition III	Blank Check / SPAC	",
    
    "ATAX	America First Multifamily Investors LP	Thrifts & Mortgage Finance	",
    
    "ATC	Atotech	Electronic Components	",
    
    "ATCO	Atlas	Marine	",
    
    "ATCX	Atlas Technical Consultants	Engineering & Construction	",
    
    "ATEC	Alphatec Holdings	Health Care Equipment & Supplies	",
    
    "ATEK	Athena Technology Acquisition II	Blank Check / SPAC	",
    
    "ATEN	A Networks	Software	",
    
    "ATER	Aterian	Furnishings Fixtures & Appliances	",
    
    "ATEX	Anterix		",
    
    "ATGE	Adtalem Global Education	Diversified Consumer Services	",
    
    "ATHA	Athira Pharma	Biotechnology	",
    
    "ATHE	Alterity Therapeutics	Biotechnology	",
    
    "ATHM	Autohome	Interactive Media & Services	",
    
    "ATHX	Athersys	Biotechnology	",
    
    "ATI	Allegheny Technologies	Metals & Mining	",
    
    "ATIF	ATIF Holdings	Professional Services	",
    
    "ATIP	ATI Physical Therapy	Medical Care Facilities	",
    
    "ATKR	Atkore	Electrical Equipment	",
    
    "ATLC	Atlanticus Holdings	Consumer Finance	",
    
    "ATLO	Ames National	Banks	",
    
    "ATNF	 Life Sciences	Biotechnology	",
    
    "ATNI	ATN International	Diversified Telecommunication Services	",
    
    "ATNM	Actinium Pharmaceuticals	Biotechnology	",
    
    "ATNX	Athenex	Biotechnology	",
    
    "ATO	Atmos Energy	Gas Utilities	",
    
    "ATOM	Atomera	Semiconductors & Semiconductor Equipment	",
    
    "ATOS	Atossa Therapeutics	Health Care Equipment & Supplies	",
    
    "ATR	AptarGroup	Containers & Packaging	",
    
    "ATRA	Atara Biotherapeutics	Biotechnology	",
    
    "ATRC	AtriCure	Health Care Equipment & Supplies	",
    
    "ATRI	Atrion	Health Care Equipment & Supplies	",
    
    "ATRO	Astronics	Aerospace & Defense	",
    
    "ATRS	Antares Pharma	Health Care Equipment & Supplies	",
    
    "ATSG	Air Transport Services Group	Air Freight & Logistics	",
    
    "ATTO	Atento	Commercial Services & Supplies	",
    
    "ATUS	Altice USA	Media	",
    ,
    "ATVC	Tribe Capital Growth I	Blank Check / SPAC	",
    
    "ATVI	Activision Blizzard	Entertainment	",
    
    "ATXI	Avenue Therapeutics	Pharmaceuticals	",
    
    "ATXS	Astria Therapeutics	Biotechnology	",
    
    "ATY	AcuityAds Holdings	Interactive Media & Services	",
    
    "AU	    AngloGold Ashanti	Metals & Mining	",
    
    "AUB	Atlantic Union Bankshares	Banks	",
    
    "AUBN	Auburn National Bancorporation	Banks	",
    
    "AUD	Audacy	Media	",
    
    "AUDC	AudioCodes	Communications Equipment	",
    
    "AUGX	Augmedix	Health Information Services	",
    
    "AUID	Ipsidy	Software-Infrastructure	",
    
    "AUMN	Golden Minerals Company	Metals & Mining	",
    
    "AUPH	Aurinia Pharmaceuticals	Biotechnology	",
    
    "AUR	Aurora Innovation	Information Technology Services	",
    
    "AURA	Aura Biosciences	Biotechnology	",
    
    "AURC	Aurora Acquisition	Blank Check / SPAC	",
    
    "AUS	Austerlitz Acquisition I	Blank Check / SPAC	",
    
    "AUST	Austin Gold	Metals & Mining	",
    
    "AUTL	Autolus Therapeutics	Biotechnology	",
    
    "AUTO	AutoWeb	Interactive Media & Services	",
    
    "AUUD	Auddia	Software-Application	",
    
    "AUVI	Applied UV	Building Products	",
    
    "AUY	Yamana Gold	Metals & Mining	",
    
    "AVA	Avista	Multi-Utilities	",
    
    "AVAC	Avalon Acquisition	Blank Check / SPAC	",
    
    "AVAH	Aveanna Healthcare Holdings	Medical Care Facilities	",
    
    "AVAL	Grupo Aval Acciones y Valores	Banks	",
    
    "AVAN	Avanti Acquisition	Blank Check / SPAC	",
    
    "AVAV	AeroVironment	Aerospace & Defense	",
    
    "AVB	AvalonBay Communities	Equity Real Estate Investment Trusts 	",
    
    "AVCO	Avalon GloboCare	Health Care Providers & Services	",
    
    "AVCT	American Virtual Cloud Technologies	IT Services	",
    
    "AVD	American Vanguard	Chemicals	",
    
    "AVDL	Avadel Pharmaceuticals	Pharmaceuticals	",
    
    "AVDX	AvidXchange Holdings	Software-Infrastructure	",
    
    "AVEO	AVEO Pharmaceuticals	Biotechnology	",
    
    "AVGO	Broadcom	Semiconductors & Semiconductor Equipment	",
    
    "AVGR	Avinger	Health Care Equipment & Supplies	",
    
    "AVHI	Achari Ventures Holdings I	Blank Check / SPAC	",
    
    "AVID	Avid Technology	Technology Hardware Storage & Periph	",
    
    "AVIR	Atea Pharmaceuticals	Pharmaceuticals	",
    
    "AVLR	Avalara	Software	",
    
    "AVNS	Avanos Medical	Health Care Equipment & Supplies	",
    
    "AVNT	Avient	Chemicals	",
    
    "AVNW	Aviat Networks	Communications Equipment	",
    
    "AVO	Mission Produce	Farm Products	",
    
    "AVPT	AvePoint	Software-Infrastructure	",
    
    "AVRO	Avrobio	Biotechnology	",
    
    "AVT	Avnet	Electronic Equipment Instruments & C	",
    
    "AVTE	Aerovate Therapeutics	Biotechnology	",
    
    "AVTR	Avantor	Life Sciences Tools & Services	",
    
    "AVTX	Avalo Therapeutics	Biotechnology	",
    
    "AVXL	Anavex Life Sciences	Biotechnology	",
    
    "AVY	Avery Dennison	Containers & Packaging	",
    
    "AVYA	Avaya Holdings	Software	",
    
    "AWH	Aspira Women's Health	Health Care Equipment & Supplies	",
    
    "AWI	Armstrong World Industries	Building Products	",
    
    "AWK	American Water Works Company	",
    
    "AWR	American States Water Company	",
    ,
    "AWRE	Aware	Software	",
    
    "AWX	Avalon Holdings	Commercial Services & Supplies	",
    
    "AX	    Axos Financial	Thrifts & Mortgage Finance	",
    
    "AXAC	AXIOS Sustainable Growth Acquisition	Blank Check / SPAC	",
    
    "AXDX	Accelerate Diagnostics	Life Sciences Tools & Services	",
    
    "AXGN	Axogen	Health Care Equipment & Supplies	",
    
    "AXH	Industrial Human Capital	Blank Check / SPAC	",
    
    "AXL	American Axle & Manufacturing Holdings	Auto Components	",
    
    "AXLA	Axcella Health	Biotechnology	",
    
    "AXNX	Axonics	Health Care Equipment & Supplies	",
    
    "AXON	Axon Enterprise	Aerospace & Defense	",
    
    "AXP	American Express Company	Consumer Finance	",
    
    "AXR	AMREP	Commercial Services & Supplies	",
    
    "AXS	AXIS Capital Holdings	Insurance	",
    
    "AXSM	Axsome Therapeutics	Pharmaceuticals	",
    
    "AXTA	Axalta Coating Systems	Chemicals	",
    ,
    "AXTI	AXT Inc	Semiconductors & Semiconductor Equipment	",
    
    "AXU	Alexco Resource	Commercial Services & Supplies	",
    
    "AY	    Atlantica Sustainable Infrastructure	Independent Power and Renewable Elect	",
    
    "AYI	Acuity Brands	Electrical Equipment	",
    
    "AYLA	Ayala Pharmaceuticals	Biotechnology	",
    
    "AYRO	AYRO Inc	Auto Manufacturers	",
    
    "AYTU	Aytu BioPharma	Pharmaceuticals	",
    
    "AYX	Alteryx	Software	",
    
    "AZ	    AZ Smart Technologies	Aerospace & Defense	",
    
    "AZEK	The AZEK Company	Building Products	",
    
    "AZN	AstraZeneca	Pharmaceuticals	",
    
    "AZO	AutoZone	Specialty Retail	",
    
    "AZPN	Aspen Technology	Software	",
    
    "AZRE	Azure Power Global	Independent Power and Renewable Elect	",
    
    "AZTA	Azenta	Medical Instruments & Supplies	",
    
    "AZUL	Azul SA	Airlines	",
    ,
    "AZYO	Aziyo Biologics	Medical Devices	",
    
    "AZZ	AZZ Inc	Electrical Equipment	",
    
    "B	    Barnes Group	Machinery	",
    
    "BA	    The Boeing Company	Aerospace & Defense	",
    ,
    "BABA	Alibaba Group Holding	Internet & Direct Marketing Retail	",
    ,
    "BAC	Bank of America	Banks	",
    ,
    "BACA	Berenson Acquisition I	Blank Check / SPAC	",
    
    "BAFN	BayFirst Financial	Banks-Regional	",
    
    "BAH	Booz Allen Hamilton Holding	IT Services	",
    
    "BAK	Braskem	Chemicals	",
    
    "BALL	Ball Corporation	Containers & Packaging	",
    
    "BALY	Bally's	Hotels Restaurants & Leisure	",
    
    "BAM	Brookfield Asset Management	Capital Markets	",
    
    "BANC	Banc of California	Banks	",
    
    "BAND	Bandwidth	Diversified Telecommunication Services	",
    
    "BANF	BancFirst	Banks	",
    
    "BANR	Banner	Banks	",
    
    "BANX	StoneCastle Financial	Capital Markets	",
    
    "BAOS	Baosheng Media Group Holdings	Advertising Agencies	",
    
    "BAP	Credicorp	Banks	",
    
    "BARK	The Original BARK Company	Specialty Retail	",
    
    "BASE	Couchbase	Software-Infrastructure	",
    
    "BATL	Battalion Oil	Oil Gas & Consumable Fuels	",
    
    "BAX	Baxter International	Health Care Equipment & Supplies	",
    
    "BB	    BlackBerry	Software	",
    
    "BBAI	BigBearai Holdings	Information Technology Services	",
    
    "BBAR	Banco BBVA Argentina	Banks	",
    
    "BBBY	Bed Bath & Beyond	Specialty Retail	",
    
    "BBCP	Concrete Pumping Holdings	Construction & Engineering	",
    
    "BBD	Banco Bradesco	Banks	",
    
    "BBDC	Barings BDC	Capital Markets	",
    
    "BBGI	Beasley Broadcast Group	Media	",
    
    "BBI	Brickell Biotech	Biotechnology	",
    
    "BBIG	Vinco Ventures	Leisure	",
    
    "BBIO	BridgeBio Pharma	Biotechnology	",
    
    "BBLG	Bone Biologics	Medical Devices	",
    
    "BBLN	Babylon Holdings	Health Information Services	",
    
    "BBQ	BBQ Holdings	Hotels Restaurants & Leisure	",
    
    "BBSI	Barrett Business Services	Professional Services	",
    
    "BBU	Brookfield Business Partners	Construction & Engineering	",
    
    "BBUC	Brookfield Business	Asset Management	",
    
    "BBVA	Banco Bilbao Vizcaya Argentaria	Banks	",
    
    "BBW	Build-A-Bear Workshop	Specialty Retail	",
    
    "BBWI	Bath & Body Works	Specialty Retail	",
    
    "BBY	Best Buy Co	Specialty Retail	",
    ,
    "BC	    Brunswick	Leisure Products	",
    
    "BCAB	BioAtla	Biotechnology	",
    
    "BCAC	Brookline Capital Acquisition	Blank Check / SPAC	",
    
    "BCBP	BCB Bancorp	Banks	",
    
    "BCC	Boise Cascade Company	Paper & Forest Products	",
    
    "BCDA	BioCardia	Biotechnology	",
    
    "BCE	BCE Inc	Diversified Telecommunication Services	",
    
    "BCEL	Atreca	Biotechnology	",
    
    "BCH	Banco de Chile	Banks	",
    
    "BCLI	Brainstorm Cell Therapeutics	Biotechnology	",
    
    "BCML	BayCom	Banks	",
    
    "BCO	The Brink's Company	Commercial Services & Supplies	",
    
    "BCOR	Blucora	Capital Markets	",
    
    "BCOV	Brightcove	IT Services	",
    
    "BCOW	 Bancorp of Wisconsin	Thrifts & Mortgage Finance	",
    
    "BCPC	Balchem	Chemicals	",
    
    "BCRX	BioCryst Pharmaceuticals	Biotechnology	",
    
    "BCS	Barclays	Banks	",
    
    "BCSA	Blockchain Coinvestors Acquisition I	Blank Check / SPAC	",
    
    "BCSF	Bain Capital Specialty Finance	Capital Markets	",
    
    "BCTX	BriaCell Therapeutics	Biotechnology	",
    
    "BCYC	Bicycle Therapeutics	Biotechnology	",
    
    "BDC	Belden	Electronic Equipment Instruments & C	",
    
    "BDL	Flanigan's Enterprises	Hotels Restaurants & Leisure	",
    
    "BDN	Brandywine Realty Trust	Equity Real Estate Investment Trusts 	",
    
    "BDR	Blonder Tongue Laboratories	Communications Equipment	",
    
    "BDSX	Biodesix	Diagnostics & Research	",
    
    "BDTX	Black Diamond Therapeutics	Biotechnology	",
    
    "BDX	Becton Dickinson and Company	Health Care Equipment & Supplies	",
    
    "BE	    Bloom Energy	Electrical Equipment	",
    
    "BEAM	Beam Therapeutics	Beverages	",
    
    "BEAT	HeartBeam	Health Information Services	",
    
    "BECN	Beacon Roofing Supply	Trading Companies & Distributors	",
    ,
    "BEDU	Bright Scholar Education Holdings	Diversified Consumer Services	",
    
    "BEEM	Beam Global	Electrical Equipment	",
    
    "BEKE	KE Holdings	Real Estate Management & Development	",
    
    "BELFA	Bel Fuse	Electronic Components	",
    
    "BELFB	Bel Fuse	Electronic Equipment Instruments & C	",
    
    "BEN	Franklin Resources	Capital Markets	",
    
    "BENE	Benessere Capital Acquisition	Blank Check / SPAC	",
    
    "BEP	Brookfield Renewable Partners	Independent Power and Renewable Elect	",
    
    "BEPC	Brookfield Renewable	Independent Power and Renewable Elect	",
    
    "BERY	Berry Global Group	Containers & Packaging	",
    
    "BEST	BEST Inc	Air Freight & Logistics	",
    
    "BFA	Brown-Forman	Beverages	",
    
    "BFB	Brown-Forman	Beverages	",
    
    "BFAC	Battery Future Acquisition	Blank Check / SPAC	",
    
    "BFAM	Bright Horizons Family Solutions	Diversified Consumer Services	",
    
    "BFC	Bank First	Banks	",
    
    "BFH	Bread Financial Holdings	Credit Services	",
    
    "BFI	BurgerFi International	Restaurants	",
    
    "BFIN	BankFinancial	Banks	",
    
    "BFLY	Butterfly Network	Medical Devices	",
    
    "BFRI	Biofrontera	Drug Manufacturers-Specialty & Generic	",
    
    "BFS	Saul Centers	Equity Real Estate Investment Trusts 	",
    
    "BFST	Business First Bancshares	Banks	",
    
    "BG	    Bunge	Food Products	",
    
    "BGCP	BGC Partners	Capital Markets	",
    
    "BGFV	Big  Sporting Goods	Specialty Retail	",
    
    "BGI	Birks Group	Specialty Retail	",
    
    "BGNE	BeiGene	Biotechnology	",
    
    "BGRY	Berkshire Grey	Specialty Industrial Machinery	",
    
    "BGS	B&G Foods	Food Products	",
    
    "BGSF	BG Staffing	Professional Services	",
    
    "BGSX	Build Acquisition	Blank Check / SPAC	",
    
    "BH	    Biglari Holdings	Hotels Restaurants & Leisure	",
    
    "BHA	Biglari Holdings	Restaurants	",
    
    "BHAC	Crixus BH Acquisition	Blank Check / SPAC	",
    
    "BHAT	Blue Hat Interactive Entertainment Technology	Entertainment	",
    
    "BHB	Bar Harbor Bankshares	Banks	",
    
    "BHC	Bausch Health Companies	Pharmaceuticals	",
    
    "BHE	Benchmark Electronics	Electronic Equipment Instruments & C	",
    
    "BHF	Brighthouse Financial	Insurance	",
    
    "BHG	Bright Health Group	Healthcare Plans	",
    
    "BHIL	Benson Hill	Agricultural Inputs	",
    
    "BHLB	Berkshire Hills Bancorp	Banks	",
    
    "BHP	BHP Group	Metals & Mining	",
    ,
    "BHR	Braemar Hotels & Resorts	Equity Real Estate Investment Trusts 	",
    
    "BHSE	Bull Horn Holdings	Blank Check / SPAC	",
    
    "BHVN	Biohaven Pharmaceutical Holding Co	Biotechnology	",
    
    "BIDU	Baidu	Interactive Media & Services	",
    ,
    "BIG	Big Lots	Multiline Retail	",
    
    "BIGC	BigCommerce Holdings	IT Services	",
    
    "BIIB	Biogen	Biotechnology	",
    
    "BILI	Bilibili	Entertainment	",
    
    "BILL	Billcom Holdings	Software	",
    
    "BIMI	BIMI International Medical	Machinery	",
    
    "BIO	Bio-Rad Laboratories	Life Sciences Tools & Services	",
    
    "BIOC	Biocept	Biotechnology	",
    
    "BIOL	BIOLASE	Health Care Equipment & Supplies	",
    
    "BIOR	Biora Therapeutics	Health Care Providers & Services	",
    
    "BIOS	BioPlus Acquisition	Blank Check / SPAC	",
    
    "BIOT	Biotech Acquisition Company	Blank Check / SPAC	",
    
    "BIOX	Bioceres Crop Solutions	Food Products	",
    
    "BIP	Brookfield Infrastructure Partners LP	Multi-Utilities	",
    
    "BIPC	Brookfield Infrastructure	Gas Utilities	",
    
    "BIRD	Allbirds	Apparel Retail	",
    
    "BITE	Bite Acquisition	Blank Check / SPAC	",
    
    "BITF	Bitfarms	Capital Markets	",
    
    "BIVI	BioVie	Biotechnology	",
    
    "BJ	    BJ's Wholesale Club Holdings	Food & Staples Retailing	",
    
    "BJDX	Bluejay Diagnostics	Medical Devices	",
    
    "BJRI	BJ's Restaurants	Hotels Restaurants & Leisure	",
    
    "BK	    Bank of New York Mellon	Capital Markets	",
    
    "BKCC	BlackRock Capital Investment	Capital Markets	",
    
    "BKD	Brookdale Senior Living	Health Care Providers & Services	",
    
    "BKE	The Buckle	Specialty Retail	",
    
    "BKEP	BlueKnight Energy Partners	Oil Gas & Consumable Fuels	",
    
    "BKH	Black Hills	Multi-Utilities	",
    
    "BKI	Black Knight	IT Services	",
    
    "BKKT	Bakkt Holdings	Software-Infrastructure	",
    
    "BKNG	Booking Holdings	Internet & Direct Marketing Retail	",
    
    "BKR	Baker Hughes Company	Energy Equipment & Services	",
    
    "BKSC	Bank of South Carolina	Banks	",
    
    "BKSY	BlackSky Technology	Scientific & Technical Instruments	",
    
    "BKTI	BK Technologies	Communications Equipment	",
    
    "BKU	BankUnited	Banks	",
    
    "BKYI	BIO-key International	Software	",
    
    "BL	    BlackLine	Software	",
    
    "BLBD	Blue Bird	Machinery	",
    
    "BLBX	Blackboxstocks	Software-Application	",
    
    "BLCM	Bellicum Pharmaceuticals	Biotechnology	",
    
    "BLCO	Bausch + Lomb	Health Care Equipment & Supplies	",
    
    "BLCT	BlueCity Holdings	Internet Content & Information	",
    
    "BLD	TopBuild	Household Durables	",
    
    "BLDE	Blade Air Mobility	Airports & Air Services	",
    
    "BLDP	Ballard Power Systems	Electrical Equipment	",
    
    "BLDR	Builders FirstSource	Building Products	",
    
    "BLEU	bleuacacia ltd	Blank Check / SPAC	",
    
    "BLFS	BioLife Solutions	Health Care Equipment & Supplies	",
    
    "BLFY	Blue Foundry Bancorp	Banks-Regional	",
    
    "BLI	Berkeley Lights	Life Sciences Tools & Services	",
    
    "BLIN	Bridgeline Digital	Software	",
    
    "BLK	BlackRock	Capital Markets	",
    
    "BLKB	Blackbaud	Software	",
    
    "BLMN	Bloomin' Brands	Hotels Restaurants & Leisure	",
    
    "BLND	Blend Labs	Software-Application	",
    
    "BLNG	Belong Acquisition	Blank Check / SPAC	",
    
    "BLNK	Blink Charging Co	Specialty Retail	",
    
    "BLPH	Bellerophon Therapeutics	Health Care Equipment & Supplies	",
    
    "BLRX	BioLineRx	Biotechnology	",
    
    "BLSA	BCLS Acquisition	Blank Check / SPAC	",
    
    "BLTE	Belite Bio	Biotechnology	",
    
    "BLTS	Bright Lights Acquisition	Blank Check / SPAC	",
    
    "BLU	BELLUS Health	Biotechnology	",
    
    "BLUA	BlueRiver Acquisition	Blank Check / SPAC	",
    
    "BLUE	Bluebird Bio	Biotechnology	",
    
    "BLX	Banco Latinoamericano de Comercio Exterior	Diversified Financial Services	",
    
    "BLZE	Backblaze	Software-Infrastructure	",
    
    "BMA	Banco Macro	Banks	",
    
    "BMAC	Black Mountain Acquisition	Blank Check / SPAC	",
    
    "BMAQ	Blockchain Moon Acquisition	Blank Check / SPAC	",
    
    "BMBL	Bumble	Software-Application	",
    
    "BMEA	Biomea Fusion	Biotechnology	",
    
    "BMI	Badger Meter	Electronic Equipment Instruments & C	",
    
    "BMO	Bank of Montreal	Banks	",
    
    "BMRA	Biomerica	Health Care Equipment & Supplies	",
    
    "BMRC	Bank of Marin Bancorp	Banks	",
    
    "BMRN	BioMarin Pharmaceutical	Biotechnology	",
    
    "BMTX	BM Technologies	Software-Application	",
    
    "BMY	Bristol-Myers Squibb Company	Pharmaceuticals	",
    ,
    "BNED	Barnes & Noble Education	Specialty Retail	",
    
    "BNFT	Benefitfocus	Software	",
    
    "BNGO	BioNano Genomics	Life Sciences Tools & Services	",
    
    "BNIX	Bannix Acquisition	Blank Check / SPAC	",
    
    "BNL	Broadstone Net Lease	Equity Real Estate Investment Trusts 	",
    
    "BNNR	Banner Acquisition	Blank Check / SPAC	",
    
    "BNOX	Bionomics	Biotechnology	",
    
    "BNR	Burning Rock Biotech	Diagnostics & Research	",
    
    "BNS	The Bank of Nova Scotia	Banks	",
    
    "BNSO	Bonso Electronics International	Electronic Equipment Instruments & C	",
    
    "BNTC	Benitec Biopharma	Biotechnology	",
    
    "BNTX	BioNTech SE	Biotechnology	",
    
    "BOAC	Bluescape Opportunities Acquisition	Blank Check / SPAC	",
    
    "BOAS	BOA Acquisition	Blank Check / SPAC	",
    
    "BOC	Boston Omaha	Advertising Agencies	",
    
    "BOCN	Blue Ocean Acquisition	Blank Check / SPAC	",
    
    "BODY	The Beachbody Company	Internet Content & Information	",
    
    "BOH	Bank of Hawaii	Banks	",
    
    "BOKF	BOK Financial	Banks	",
    
    "BOLT	Bolt Biotherapeutics	Biotechnology	",
    
    "BON	Bon Natural Life	Packaged Foods	",
    
    "BOOM	DMC Global	Energy Equipment & Services	",
    
    "BOOT	Boot Barn Holdings	Specialty Retail	",
    
    "BORR	Borr Drilling	Oil & Gas Drilling	",
    
    "BOSC	BOS Better Online Solutions	Communications Equipment	",
    
    "BOTJ	Bank of the James Financial Group	Banks	",
    
    "BOWL	Bowlero	Entertainment	",
    
    "BOX	Box Inc	Software	",
    
    "BOXD	Boxed	Internet Retail	",
    
    "BOXL	Boxlight	Technology Hardware Storage & Periph	",
    
    "BP	    BP plc	Oil Gas & Consumable Fuels	",
    
    "BPAC	Bullpen Parlay Acquisition Company	Blank Check / SPAC	",
    
    "BPMC	Blueprint Medicines	Biotechnology	",
    
    "BPOP	Popular	Banks	",
    
    "BPRN	The Bank of Princeton	Banks	",
    
    "BPT	BP Prudhoe Bay Royalty Trust	Oil Gas & Consumable Fuels	",
    
    "BPTH	Bio-Path Holdings	Biotechnology	",
    
    "BPTS	Biophytis	Biotechnology	",
    
    "BQ	    Boqii Holding	Specialty Retail	",
    
    "BR	    Broadridge Financial Solutions	IT Services	",
    
    "BRAC	Broad Capital Acquisition	Blank Check / SPAC	",
    
    "BRAG	Bragg Gaming Group	Electronic Gaming & Multimedia	",
    
    "BRBR	Bellring Brands	Personal Products	",
    
    "BRBS	Blue Ridge Bankshares	Banks	",
    
    "BRC	Brady	Commercial Services & Supplies	",
    
    "BRCC	BRC Inc	Packaged Foods	",
    
    "BRCN	Burcon NutraScience	Packaged Foods	",
    
    "BRD	Beard Energy Transition Acquisition	Blank Check / SPAC	",
    
    "BRDG	Bridge Investment Group Holdings	Asset Management	",
    
    "BRDS	Bird Global	Rental & Leasing Services	",
    
    "BREZ	Breeze Holdings Acquisition	Blank Check / SPAC	",
    
    "BRFH	Barfresh Food Group	Food Products	",
    
    "BRFS	BRF SA	Food Products	",
    
    "BRG	Bluerock Residential Growth REIT	Equity Real Estate Investment Trusts 	",
    
    "BRID	Bridgford Foods	Food Products	",
    
    "BRIV	B Riley Principal  Merger	Blank Check / SPAC	",
    
    "BRKA	Berkshire Hathaway	Diversified Financial Services	",
    
    "BRKB	Berkshire Hathaway	Diversified Financial Services	",
    
    "BRKH	BurTech Acquisition	Blank Check / SPAC	",
    
    "BRKL	Brookline Bancorp	Banks	",
    
    "BRKR	Bruker	Life Sciences Tools & Services	",
    
    "BRLI	Brilliant Acquisition	Blank Check / SPAC	",
    
    "BRLT	Brilliant Earth Group	Luxury Goods	",
    
    "BRMK	Broadmark Realty Capital	Mortgage Real Estate Investment Trust	",
    
    "BRN	Barnwell Industries	Oil Gas & Consumable Fuels	",
    
    "BRO	Brown & Brown	Insurance	",
    
    "BROG	Brooge Energy	Oil Gas & Consumable Fuels	",
    
    "BROS	Dutch Bros	Restaurants	",
    
    "BRP	BRP Group	Insurance	",
    
    "BRPM	B Riley Principal  Merger	Blank Check / SPAC	",
    
    "BRQS	Borqs Technologies	Technology Hardware Storage & Periph	",
    
    "BRSP	BrightSpire Capital	REIT-Diversified	",
    
    "BRT	BRT Apartments	Equity Real Estate Investment Trusts 	",
    
    "BRTX	BioRestorative Therapies	Biotechnology	",
    
    "BRX	Brixmor Property Group	Equity Real Estate Investment Trusts 	",
    
    "BRY	Berry	Oil Gas & Consumable Fuels	",
    
    "BRZE	Braze	Software-Application	",
    ,
    "BSAC	Banco Santander-Chile	Banks	",
    
    "BSAQ	Black Spade Acquisition Co	Blank Check / SPAC	",
    
    "BSBK	Bogota Financial	Thrifts & Mortgage Finance	",
    
    "BSBR	Banco Santander Brasil	Banks	",
    
    "BSET	Bassett Furniture Industries	Household Durables	",
    
    "BSFC	Blue Star Foods	Packaged Foods	",
    
    "BSGA	Blue Safari Group Acquisition	Blank Check / SPAC	",
    
    "BSGM	BioSig Technologies	Health Care Equipment & Supplies	",
    
    "BSIG	BrightSphere Investment Group	Capital Markets	",
    
    "BSKY	Big Sky Growth Partners	Blank Check / SPAC	",
    
    "BSM	Black Stone Minerals	Oil Gas & Consumable Fuels	",
    
    "BSMX	Banco Santander Mexico	Banks	",
    
    "BSQR	Bsquare	Software	",
    
    "BSRR	Sierra Bancorp	Banks	",
    
    "BSVN	Bank	Banks	",
    
    "BSX	Boston Scientific	Health Care Equipment & Supplies	",
    ,
    "BSY	Bentley Systems	Software-Application	",
    
    "BTAI	BioXcel Therapeutics	Biotechnology	",
    
    "BTB	Bit Brother	Restaurants	",
    
    "BTBD	BT Brands	Restaurants	",
    
    "BTBT	Bit Digital	Software	",
    
    "BTCM	BIT Mining	Information Technology Services	",
    
    "BTCS	BTCS Inc	Capital Markets	",
    
    "BTCY	Biotricity	Medical Devices	",
    
    "BTG	BGold	Metals & Mining	",
    
    "BTI	British American Tobacco	Tobacco	",
    
    "BTN	Ballantyne Strong	Entertainment	",
    
    "BTOG	China Xiangtai Food Co	Packaged Foods	",
    
    "BTRS	BTRS Holdings	Software-Application	",
    
    "BTTR	Better Choice Company	Packaged Foods	",
    
    "BTTX	Better Therapeutics	Biotechnology	",
    
    "BTU	Peabody Energy	Oil Gas & Consumable Fuels	",
    
    "BTWN	Bridgetown Holdings	Blank Check / SPAC	",
    
    "BTX	Brooklyn ImmunoTherapeutics	Biotechnology	",
    
    "BUD	Anheuser-Busch InBev	Beverages	",
    
    "BUR	Burford Capital	Asset Management	",
    
    "BURL	Burlington Stores	Specialty Retail	",
    
    "BUSE	First Busey	Banks	",
    
    "BV	    BrightView Holdings	Commercial Services & Supplies	",
    
    "BVH	Bluegreen Vacations Holding	Hotels Restaurants & Leisure	",
    
    "BVN	Compania de Minas Buenaventura SAA	Metals & Mining	",
    
    "BVS	Bioventus	Medical Devices	",
    
    "BVXV	BiondVax Pharmaceuticals	Pharmaceuticals	",
    
    "BW	    Babcock & Wilcox Enterprises	Electrical Equipment	",
    
    "BWA	BorgWarner	Auto Components	",
    
    "BWAC	Better World Acquisition	Blank Check / SPAC	",
    
    "BWAQ	Blue World Acquisition	Blank Check / SPAC	",
    
    "BWAY	Brainsway	Health Care Equipment & Supplies	",
    
    "BWB	Bridgewater Bancshares	Thrifts & Mortgage Finance	",
    
    "BWC	Blue Whale Acquisition I	Blank Check / SPAC	",
    
    "BWEN	Broadwind	Electrical Equipment	",
    
    "BWFG	Bankwell Financial Group	Banks	",
    
    "BWMN	Bowman Consulting Group	Consulting Services	",
    
    "BWMX	Betterware de Mexico	Internet & Direct Marketing Retail	",
    
    "BWV	Blue Water Vaccines	Biotechnology	",
    
    "BWXT	BWX Technologies	Aerospace & Defense	",
    
    "BX	    Blackstone	Capital Markets	",
    ,
    "BXC	BlueLinx Holdings	Trading Companies & Distributors	",
    
    "BXMT	Blackstone Mortgage Trust	Mortgage Real Estate Investment Trust	",
    
    "BXP	Boston Properties	Equity Real Estate Investment Trusts 	",
    
    "BXRX	Baudax Bio	Biotechnology	",
    
    "BY	    Byline Bancorp	Banks	",
    
    "BYD	Boyd Gaming	Hotels Restaurants & Leisure	",
    
    "BYFC	Broadway Financial	Thrifts & Mortgage Finance	",
    
    "BYN	Banyan Acquisition	Blank Check / SPAC	",
    
    "BYND	Beyond Meat	Food Products	",
    ,
    "BYNO	byNordic Acquisition	Blank Check / SPAC	",
    
    "BYRN	Byrna Technologies	Aerospace & Defense	",
    
    "BYSI	BeyondSpring	Biotechnology	",
    
    "BYTS	BYTE Acquisition	Blank Check / SPAC	",
    
    "BZ	    Kanzhun	Staffing & Employment Services	",
    
    "BZFD	BuzzFeed	Entertainment	",
    
    "BZH	Beazer Homes USA	Household Durables	",
    
    "BZUN	Baozun	Internet & Direct Marketing Retail	",
    
    "C	    Citigroup	Banks	",
    
    "CAAP	Corporacion America Airports	Transportation Infrastructure	",
    
    "CAAS	China Automotive Systems	Auto Components	",
    
    "CABA	Cabaletta Bio	Biotechnology	",
    
    "CABO	Cable One	Media	",
    
    "CAC	Camden National	Banks	",
    
    "CACC	Credit Acceptance	Consumer Finance	",
    
    "CACI	CACI International	IT Services	",
    
    "CADE	Cadence Bank	Banks	",
    
    "CADL	Candel Therapeutics	Biotechnology	",
    
    "CAE	CAE Inc	Aerospace & Defense	",
    
    "CAG	Conagra Brands	Food Products	",
    
    "CAH	Cardinal Health	Health Care Providers & Services	",
    
    "CAJ	Canon	Technology Hardware Storage & Periph	",
    
    "CAKE	The Cheesecake Factory	Hotels Restaurants & Leisure	",
    
    "CAL	Caleres	Specialty Retail	",
    
    "CALA	Calithera Biosciences	Biotechnology	",
    
    "CALB	California BanCorp	Banks	",
    
    "CALM	Cal-Maine Foods	Food Products	",
    
    "CALT	Calliditas Therapeutics AB	Biotechnology	",
    
    "CALX	Calix	Communications Equipment	",
    
    "CAMP	CalAmp	Communications Equipment	",
    
    "CAMT	Camtek	Semiconductors & Semiconductor Equipment	",
    
    "CAN	Canaan	Technology Hardware Storage & Periph	",
    
    "CANF	Can-Fite BioPharma	Biotechnology	",
    
    "CANG	Cango	Internet & Direct Marketing Retail	",
    
    "CANO	Cano Health	Diversified Financial Services	",
    
    "CAPL	CrossAmerica Partners LP	Oil Gas & Consumable Fuels	",
    
    "CAPR	Capricor Therapeutics	Biotechnology	",
    
    "CAR	Avis Budget Group	Road & Rail	",
    
    "CARA	Cara Therapeutics	Pharmaceuticals	",
    
    "CARE	Carter Bankshares	Banks	",
    
    "CARG	Cargurus	Interactive Media & Services	",
    
    "CARR	Carrier Global	Building Products	",
    
    "CARS	Carscom	Interactive Media & Services	",
    
    "CARV	Carver Bancorp	Thrifts & Mortgage Finance	",
    
    "CAS	Cascade Acquisition	Blank Check / SPAC	",
    
    "CASA	Casa Systems	Communications Equipment	",
    
    "CASH	Meta Financial Group	Thrifts & Mortgage Finance	",
    
    "CASI	CASI Pharmaceuticals	Biotechnology	",
    
    "CASS	Cass Information Systems	IT Services	",
    
    "CASY	Casey's General Stores	Food & Staples Retailing	",
    
    "CAT	Caterpillar	Machinery	",
    
    "CATC	Cambridge Bancorp	Banks	",
    
    "CATO	The Cato Corporation	Specialty Retail	",
    
    "CATY	Cathay General Bancorp	Banks	",
    ,
    "CB	    Chubb	Insurance	",
    ,
    "CBAN	Colony Bankcorp	Banks	",
    
    "CBAT	CBAK Energy Technology	Electrical Equipment	",
    
    "CBAY	CymaBay Therapeutics	Pharmaceuticals	",
    
    "CBD	Companhia Brasileira de Distribuicao	Food & Staples Retailing	",
    
    "CBFV	CB Financial Services	Banks	",
    
    "CBIO	Catalyst Biosciences	Biotechnology	",
    
    "CBL	CBL Properties	REIT-Retail	",
    
    "CBNK	Capital Bancorp	Banks	",
    
    "CBOE	Cboe Global Markets	Capital Markets	",
    
    "CBRE	CBRE Group	Real Estate Management & Development	",
    
    "CBRG	Chain Bridge I	Blank Check / SPAC	",
    
    "CBRL	Cracker Barrel Old Country Store	Hotels Restaurants & Leisure	",
    
    "CBSH	Commerce Bancshares	Banks	",
    
    "CBT	Cabot	Chemicals	",
    
    "CBTX	CBTX Inc	Banks	",
    
    "CBU	Community Bank System	Banks	",
    
    "CBZ	CBIZ Inc	Professional Services	",
    
    "CC	    The Chemours Company	Chemicals	",
    
    "CCAI	Cascadia Acquisition	Blank Check / SPAC	",
    
    "CCAP	Crescent Capital BDC	Asset Management	",
    
    "CCB	Coastal Financial	Banks	",
    
    "CCBG	Capital City Bank Group	Banks	",
    
    "CCCC	C Therapeutics	Biotechnology	",
    
    "CCCS	CCC Intelligent Solutions Holdings	Software-Infrastructure	",
    
    "CCEL	Cryo-Cell International	Health Care Providers & Services	",
    
    "CCEP	Coca-Cola Europacific Partners	Beverages	",
    
    "CCF	Chase	Chemicals	",
    
    "CCI	Crown Castle International	Equity Real Estate Investment Trusts 	",
    
    "CCJ	Cameco	Oil Gas & Consumable Fuels	",
    
    "CCK	Crown Holdings	Containers & Packaging	",
    
    "CCL	Carnival	Hotels Restaurants & Leisure	",
    
    "CCLP	CSI Compressco LP	Energy Equipment & Services	",
    
    "CCM	Concord Medical Services Holding	Health Care Providers & Services	",
    
    "CCMP	CMC Materials	Semiconductors & Semiconductor Equipment	",
    ,
    "CCNC	Code Chain New Continent	Electronic Gaming & Multimedia	",
    
    "CCNE	CNB Financial	Banks	",
    
    "CCO	Clear Channel Outdoor Holdings	Media	",
    
    "CCOI	Cogent Communications Holdings	Diversified Telecommunication Services	",
    
    "CCRD	CoreCard	Software	",
    
    "CCRN	Cross Country Healthcare	Health Care Providers & Services	",
    
    "CCS	Century Communities	Household Durables	",
    
    "CCSI	Consensus Cloud Solutions	Software-Infrastructure	",
    
    "CCTS	Cactus Acquisition 	Blank Check / SPAC	",
    
    "CCU	Compania Cervecerias Unidas	Beverages	",
    
    "CCV	Churchill Capital Corp V	Blank Check / SPAC	",
    
    "CCVI	Churchill Capital VI	Blank Check / SPAC	",
    
    "CCXI	ChemoCentryx	Biotechnology	",
    
    "CD	    Chindata Group Holdings	Information Technology Services	",
    
    "CDAK	Codiak BioSciences	Biotechnology	",
    
    "CDAQ	Compass Digital Acquisition	Blank Check / SPAC	",
    
    "CDAY	Ceridian HCM Holding	Software	",
    
    "CDE	Coeur Mining	Metals & Mining	",
    
    "CDEV	Centennial Resource Development	Oil Gas & Consumable Fuels	",
    
    "CDK	CDK Global	Software	",
    
    "CDLX	Cardlytics	Media	",
    
    "CDMO	Avid Bioservices	Biotechnology	",
    
    "CDNA	CareDx	Biotechnology	",
    
    "CDNS	Cadence Design Systems	Software	",
    
    "CDR	Cedar Realty Trust	Equity Real Estate Investment Trusts 	",
    
    "CDRE	Cadre Holdings	Aerospace & Defense	",
    
    "CDRO	Codere Online Luxembourg	Gambling	",
    
    "CDTX	Cidara Therapeutics	Biotechnology	",
    
    "CDW	CDW Corporation	Electronic Equipment Instruments & C	",
    
    "CDXC	ChromaDex	Life Sciences Tools & Services	",
    
    "CDXS	Codexis	Life Sciences Tools & Services	",
    
    "CDZI	Cadiz	",
    
    "CE	    Celanese	Chemicals	",
    
    "CEA	China Eastern Airlines	Airlines	",
    ,
    "CECE	CECO Environmental	Commercial Services & Supplies	",
    
    "CEG	Constellation Energy	Electric Utilities	",
    
    "CEI	Camber Energy	Oil Gas & Consumable Fuels	",
    
    "CEIX	CONSOL Energy	Oil Gas & Consumable Fuels	",
    
    "CELC	Celcuity	Biotechnology	",
    
    "CELH	Celsius Holdings	Beverages	",
    
    "CELPQ	Cypress Environmental Partners	Energy Equipment & Services	",
    "K      Kellog's",
    "CELU	Celularity	Biotechnology	",
    
    "CELZ	Creative Medical Technology Holdings	Biotechnology	",
    
    "CEMI	Chembio Diagnostics	Health Care Equipment & Supplies	",
    
    "CENN	Cenntro Electric Group	Auto Manufacturers	",
    
    "CENQ	CENAQ Energy	Blank Check / SPAC	",
    
    "CENT	Central Garden & Pet Company	Household Products	",
    
    "CENTA	Central Garden & Pet Company	Household Products	",
    
    "CENX	Century Aluminum Company	Metals & Mining	",
    
    "CEPU	Central Puerto	Independent Power and Renewable Elect	",
    
    "CEQP	Crestwood Equity Partners LP	Oil Gas & Consumable Fuels	",
    
    "CERE	Cerevel Therapeutics Holdings	Biotechnology	",
    
    "CERN	Cerner	Health Care Technology	",
    
    "CERS	Cerus	Health Care Equipment & Supplies	",
    
    "CERT	Certara	Health Information Services	",
    
    "CET	Central Securities	Asset Management	",
    
    "CETX	Cemtrex	Electronic Equipment Instruments & C	",
    
    "CEVA	CEVA Inc	Semiconductors & Semiconductor Equipment	",
    
    "CF	    CF Industries Holdings	Chemicals	",
    
    "CFB	CrossFirst Bankshares	Banks	",
    
    "CFBK	CF Bankshares	Thrifts & Mortgage Finance	",
    
    "CFFE	CF Acquisition VIII	Blank Check / SPAC	",
    
    "CFFI	C&F Financial	Banks	",
    
    "CFFN	Capitol Federal Financial	Thrifts & Mortgage Finance	",
    
    "CFFS	CF Acquisition VII	Blank Check / SPAC	",
    
    "CFG	Citizens Financial Group	Banks	",
    
    "CFIV	CF Acquisition IV	Blank Check / SPAC	",
    
    "CFLT	Confluent	Software-Infrastructure	",
    
    "CFMS	Conformis	Health Care Equipment & Supplies	",
    
    "CFR	Cullen/Frost Bankers	Banks	",
    
    "CFRX	ContraFect	Biotechnology	",
    
    "CFSB	CFSB Bancorp	Banks-Regional	",
    
    "CFVI	CF Acquisition VI	Blank Check / SPAC	",
    
    "CG	    The Carlyle Group	Capital Markets	",
    
    "CGA	China Green Agriculture	Chemicals	",
    
    "CGAU	Centerra Gold	Gold	",
    
    "CGBD	TCG BDC	Capital Markets	",
    
    "CGC	Canopy Growth	Pharmaceuticals	",
    
    "CGEM	Cullinan Oncology	Biotechnology	",
    
    "CGEN	Compugen	Life Sciences Tools & Services	",
    
    "CGNT	Cognyte Software	Software-Infrastructure	",
    
    "CGNX	Cognex	Electronic Equipment Instruments & C	",
    
    "CGRN	Capstone Green Energy	Specialty Industrial Machinery	",
    
    "CGTX	Cognition Therapeutics	Biotechnology	",
    
    "CHAA	Catcha Investment	Blank Check / SPAC	",
    
    "CHCI	Comstock Holding Companies	Household Durables	",
    
    "CHCO	City Holding Company	Banks	",
    
    "CHCT	Community Healthcare Trust	Equity Real Estate Investment Trusts 	",
    
    "CHD	Church & Dwight Company	Household Products	",
    
    "CHDN	Churchill Downs	Hotels Restaurants & Leisure	",
    
    "CHE	Chemed	Health Care Providers & Services	",
    
    "CHEA	Chenghe Acquisition Co	Blank Check / SPAC	",
    
    "CHEF	The Chefs' Warehouse	Food & Staples Retailing	",
    
    "CHEK	Check-Cap	Health Care Equipment & Supplies	",
    
    "CHGG	Chegg	Diversified Consumer Services	",
    
    "CHH	Choice Hotels International	Hotels Restaurants & Leisure	",
    
    "CHK	Chesapeake Energy	Oil Gas & Consumable Fuels	",
    
    "CHKP	Check Point Software Technologies	Software	",
    
    "CHMG	Chemung Financial	Banks	",
    
    "CHMI	Cherry Hill Mortgage Investment	Mortgage Real Estate Investment Trust	",
    
    "CHNG	Change Healthcare	Health Care Technology	",
    
    "CHNR	China Natural Resources	Metals & Mining	",
    
    "CHPT	ChargePoint Holdings	Specialty Retail	",
    
    "CHRA	Charah Solutions	Commercial Services & Supplies	",
    
    "CHRS	Coherus BioSciences	Biotechnology	",
    
    "CHRW	CH Robinson Worldwide	Air Freight & Logistics	",
    
    "CHS	Chico's FAS	Specialty Retail	",
    
    "CHT	Chunghwa Telecom Co	Diversified Telecommunication Services	",
    
    "CHTR	Charter Communications	Media	",
    
    "CHUY	Chuy's Holdings	Hotels Restaurants & Leisure	",
    
    "CHWA	CHW Acquisition	Blank Check / SPAC	",
    
    "CHWY	Chewy	Internet & Direct Marketing Retail	",
    
    "CHX	ChampionX	Energy Equipment & Services	",
    
    "CI	    Cigna	Health Care Providers & Services	",
    
    "CIA	Citizens	Insurance	",
    
    "CIAN	Cian PLC	Real Estate Services	",
    
    "CIB	Bancolombia	Banks	",
    
    "CIDM	Cinedigm	Entertainment	",
    
    "CIEN	Ciena	Communications Equipment	",
    
    "CIFR	Cipher Mining	Capital Markets	",
    
    "CIG	Companhia Energetica de Minas Gerais	Electric Utilities	",
    
    "CIGI	Colliers International Group	Real Estate Management & Development	",
    
    "CIH	China Index Holdings	Professional Services	",
    
    "CIIG	CIIG Capital Partners II	Blank Check / SPAC	",
    
    "CIM	Chimera Investment	Mortgage Real Estate Investment Trust	",
    
    "CINC	CinCor Pharma	Biotechnology	",
    
    "CINF	Cincinnati Financial	Insurance	",
    
    "CING	Cingulate	Biotechnology	",
    
    "CINT	CI&T Inc	Software-Infrastructure	",
    
    "CIO	City Office REIT	Equity Real Estate Investment Trusts 	",
    
    "CION	CĪON Investment	Asset Management	",
    
    "CIR	CIRCOR International	Machinery	",
    
    "CISO	Cerberus Cyber Sentinel	Software-Infrastructure	",
    
    "CITE	Cartica Acquisition	Blank Check / SPAC	",
    
    "CIVB	Civista Bancshares	Banks	",
    
    "CIVI	Civitas Resources	Oil & Gas E&P	",
    
    "CIX	CompX International	Commercial Services & Supplies	",
    
    "CIXX	CI Financial	Asset Management	",
    
    "CIZN	Citizens Holding Company	Banks	",
    
    "CJJD	China Jo-Jo Drugstores	Food & Staples Retailing	",
    
    "CKPT	Checkpoint Therapeutics	Biotechnology	",
    
    "CKX	CKX Lands	Real Estate Management & Development	",
    
    "CL	    Colgate-Palmolive Company	Household Products	",
    
    "CLAA	Colonnade Acquisition II	Blank Check / SPAC	",
    
    "CLAQ	CleanTech Acquisition	Blank Check / SPAC	",
    
    "CLAR	Clarus	Leisure Products	",
    
    "CLAS	Class Acceleration	Blank Check / SPAC	",
    
    "CLAY	Chavant Capital Acquisition	Blank Check / SPAC	",
    
    "CLB	Core Laboratories	Energy Equipment & Services	",
    
    "CLBK	Columbia Financial	Thrifts & Mortgage Finance	",
    
    "CLBR	Colombier Acquisition	Blank Check / SPAC	",
    
    "CLBS	Caladrius Biosciences	Biotechnology	",
    
    "CLBT	Cellebrite DI	Software-Infrastructure	",
    
    "CLDT	Chatham Lodging Trust	Equity Real Estate Investment Trusts 	",
    
    "CLDX	Celldex Therapeutics	Biotechnology	",
    
    "CLEU	China Liberal Education Holdings	Education & Training Services	",
    
    "CLF	Cleveland-Cliffs	Metals & Mining	",
    
    "CLFD	Clearfield	Communications Equipment	",
    
    "CLGN	CollPlant Biotechnologies	Biotechnology	",
    
    "CLH	Clean Harbors	Commercial Services & Supplies	",
    
    "CLIM	Climate Real Impact Solutions II Acquisition	Blank Check / SPAC	",
    
    "CLIN	Clean Earth Acquisitions	Blank Check / SPAC	",
    
    "CLIR	ClearSign Technologies	Electronic Equipment Instruments & C	",
    
    "CLLS	Cellectis	Biotechnology	",
    
    "CLMT	Calumet Specialty Products Partners	Oil Gas & Consumable Fuels	",
    
    "CLNE	Clean Energy Fuels	Oil Gas & Consumable Fuels	",
    
    "CLNN	Clene	Biotechnology	",
    
    "CLOE	Clover Leaf Capital	Blank Check / SPAC	",
    
    "CLOV	Clover Health Investments	Healthcare Plans	",
    
    "CLPR	Clipper Realty	Equity Real Estate Investment Trusts 	",
    
    "CLPS	CLPS Incorporation	IT Services	",
    
    "CLPT	ClearPoint Neuro	Health Care Equipment & Supplies	",
    
    "CLR	Continental Resources	Oil Gas & Consumable Fuels	",
    
    "CLRB	Cellectar BioSciences	Biotechnology	",
    
    "CLRC	ClimateRock	Blank Check / SPAC	",
    
    "CLRM	Clarim Acquisition	Blank Check / SPAC	",
    
    "CLRO	ClearOne	Communications Equipment	",
    
    "CLS	Celestica	Electronic Equipment Instruments & C	",
    
    "CLSD	Clearside Biomedical	Pharmaceuticals	",
    
    "CLSK	Cleanspark	Software	",
    
    "CLSN	Celsion	Biotechnology	",
    
    "CLST	Catalyst Bancorp	Banks-Regional	",
    
    "CLVR	Clever Leaves Holdings	Drug Manufacturers-Specialty & Generic	",
    
    "CLVS	Clovis Oncology	Biotechnology	",
    
    "CLVT	Clarivate	Professional Services	",
    
    "CLW	Clearwater Paper	Paper & Forest Products	",
    
    "CLWT	Euro Tech Holdings Company	Trading Companies & Distributors	",
    
    "CLX	The Clorox Company	Household Products	",
    
    "CLXT	Calyxt	Biotechnology	",
    
    "CM	    Canadian Imperial Bank of Commerce	Banks	",
    
    "CMA	Comerica	Banks	",
    
    "CMAX	CareMax	Health Information Services	",
    
    "CMBM	Cambium Networks	Communications Equipment	",
    
    "CMC	Commercial Metals Company	Metals & Mining	",
    
    "CMCA	Capitalworks Emerging Markets Acquisition	Blank Check / SPAC	",
    
    "CMCL	Caledonia Mining	Metals & Mining	",
    
    "CMCM	Cheetah Mobile	Software	",
    
    "CMCO	Columbus McKinnon	Machinery	",
    
    "CMCSA	Comcast	Media	",
    
    "CMCT	CIM Commercial Trust	Equity Real Estate Investment Trusts 	",
    
    "CME	CME Group	Capital Markets	",
    
    "CMG	Chipotle Mexican Grill	Hotels Restaurants & Leisure	",
    
    "CMI	Cummins	Machinery	",
    
    "CMLS	Cumulus Media	Media	",
    
    "CMMB	Chemomab Therapeutics	Biotechnology	",
    
    "CMP	Compass Minerals International	Metals & Mining	",
    
    "CMPI	Checkmate Pharmaceuticals	Biotechnology	",
    
    "CMPO	CompoSecure	Shell Companies	",
    
    "CMPR	Cimpress	Commercial Services & Supplies	",
    
    "CMPS	COMPASS Pathways	Health Care Providers & Services	",
    
    "CMPX	Compass Therapeutics	Biotechnology	",
    
    "CMRE	Costamare	Marine	",
    
    "CMRX	Chimerix	Biotechnology	",
    
    "CMS	CMS Energy	Multi-Utilities	",
    
    "CMT	Core Molding Technologies	Chemicals	",
    
    "CMTG	Claros Mortgage Trust	REIT-Mortgage	",
    
    "CMTL	Comtech Telecommunications	Communications Equipment	",
    
    "CNA	CNA Financial	Insurance	",
    
    "CNC	Centene	Health Care Providers & Services	",
    
    "CNCE	Concert Pharmaceuticals	Biotechnology	",
    
    "CND	Concord Acquisition	Blank Check / SPAC	",
    
    "CNDA	Concord Acquisition II	Blank Check / SPAC	",
    
    "CNDB	Concord Acquisition III	Blank Check / SPAC	",
    
    "CNDT	Conduent	IT Services	",
    
    "CNET	ZW Data Action Technologies	Media	",
    
    "CNEY	CN Energy Group	Specialty Chemicals	",
    
    "CNF	CNFinance Holdings	Thrifts & Mortgage Finance	",
    
    "CNFR	Conifer Holdings	Insurance	",
    
    "CNGL	Canna-Global Acquisition	Blank Check / SPAC	",
    
    "CNHI	CNH Industrial	Machinery	",
    
    "CNI	Canadian National Railway Company	Road & Rail	",
    
    "CNK	Cinemark Holdings	Entertainment	",
    
    "CNM	Core & Main	Industrial Distribution	",
    
    "CNMD	CONMED	Health Care Equipment & Supplies	",
    
    "CNNB	Cincinnati Bancorp	Banks-Regional	",
    
    "CNNE	Cannae Holdings	Diversified Financial Services	",
    
    "CNO	CNO Financial Group	Insurance	",
    
    "CNOB	ConnectOne Bancorp	Banks	",
    
    "CNP	CenterPoint Energy	Multi-Utilities	",
    
    "CNQ	Canadian Natural Resources	Oil Gas & Consumable Fuels	",
    
    "CNR	Cornerstone Building Brands	Building Products	",
    
    "CNS	Cohen & Steers	Capital Markets	",
    
    "CNSL	Consolidated Communications Holdings	Diversified Telecommunication Services	",
    
    "CNSP	CNS Pharmaceuticals	Pharmaceuticals	",
    
    "CNTA	Centessa Pharmaceuticals	Biotechnology	",
    
    "CNTB	Connect Biopharma Holdings	Biotechnology	",
    
    "CNTG	Centogene	Biotechnology	",
    
    "CNTQ	Chardan NexTech Acquisition 	Blank Check / SPAC	",
    
    "CNTX	Context Therapeutics	Pharmaceuticals	",
    
    "CNTY	Century Casinos	Hotels Restaurants & Leisure	",
    
    "CNVY	Convey Holding Parent	Health Information Services	",
    
    "CNX	CNX Resources	Oil Gas & Consumable Fuels	",
    
    "CNXC	Concentrix	IT Services	",
    
    "CNXN	PC Connection	Electronic Equipment Instruments & C	",
    
    "CO	    Global Cord Blood	Health Care Providers & Services	",
    
    "COCO	The Vita Coco Company	Beverages-Non-Alcoholic	",
    
    "COCP	Cocrystal Pharma	Pharmaceuticals	",
    
    "CODA	Coda Octopus Group	Electronic Equipment Instruments & C	",
    
    "CODI	Compass Diversified Holdings	Diversified Financial Services	",
    
    "CODX	Co-Diagnostics	Health Care Equipment & Supplies	",
    
    "COE	China Online Education Group	Diversified Consumer Services	",
    
    "COF	Capital One Financial	Consumer Finance	",
    
    "COFS	ChoiceOne Financial Services	Banks	",
    
    "COGT	Cogent Biosciences	Biotechnology	",
    
    "COHN	Cohen & Company	Capital Markets	",
    
    "COHR	Coherent	Electronic Equipment Instruments & C	",
    
    "COHU	Cohu Inc	Semiconductors & Semiconductor Equipment	",
    
    "COIN	Coinbase Global	Software-Application	",
    
    "COKE	Coca-Cola Consolidated	Beverages	",
    
    "COLB	Columbia Banking System	Banks	",
    
    "COLD	Americold Realty Trust	Equity Real Estate Investment Trusts 	",
    
    "COLI	Colicity	Blank Check / SPAC	",
    
    "COLL	Collegium Pharmaceutical	Pharmaceuticals	",
    
    "COLM	Columbia Sportswear Company	Textiles Apparel & Luxury Goods	",
    
    "COMM	CommScope Holding Company	Communications Equipment	",
    
    "COMP	Compass	Software-Application	",
    
    "COMS	ComSovereign Holding	Telecom Services	",
    
    "CONN	Conn's	Specialty Retail	",
    
    "CONX	CONX Corp	Blank Check / SPAC	",
    
    "COO	The Cooper Companies	Health Care Equipment & Supplies	",
    
    "COOK	Traeger	Furnishings Fixtures & Appliances	",
    
    "COOL	Corner Growth Acquisition	Blank Check / SPAC	",
    
    "COOP	Mr Cooper Group	Thrifts & Mortgage Finance	",
    
    "COP	ConocoPhillips	Oil Gas & Consumable Fuels	",
    
    "CORR	CorEnergy Infrastructure Trust	Equity Real Estate Investment Trusts 	",
    
    "CORS	Corsair Partnering	Blank Check / SPAC	",
    
    "CORT	Corcept Therapeutics	Pharmaceuticals	",
    
    "CORZ	Core Scientific	Software-Infrastructure	",
    
    "COSM	Cosmos Holdings	Health Care Providers & Services	",
    
    "COST	Costco Wholesale	Food & Staples Retailing	",
    
    "COTY	Coty Inc	Personal Products	",
    
    "COUP	Coupa Software	Software	",
    
    "COUR	Coursera	Education & Training Services	",
    
    "COVA	COVA Acquisition	Blank Check / SPAC	",
    
    "COWN	Cowen	Capital Markets	",
    
    "CP	    Canadian Pacific Railway	Road & Rail	",
    
    "CPA	Copa Holdings	Airlines	",
    
    "CPAA	Conyers Park III Acquisition	Blank Check / SPAC	",
    
    "CPAC	Cementos Pacasmayo	Construction Materials	",
    
    "CPAQ	Counter Press Acquisition	Blank Check / SPAC	",
    
    "CPAR	Catalyst Partners Acquisition	Blank Check / SPAC	",
    
    "CPB	Campbell Soup Company	Food Products	",
    
    "CPE	Callon Petroleum Company	Oil Gas & Consumable Fuels	",
    
    "CPF	Central Pacific Financial	Banks	",
    
    "CPG	Crescent Point Energy	Oil Gas & Consumable Fuels	",
    
    "CPHC	Canterbury Park Holding	Hotels Restaurants & Leisure	",
    
    "CPHI	China Pharma Holdings	Pharmaceuticals	",
    
    "CPIX	Cumberland Pharmaceuticals	Pharmaceuticals	",
    
    "CPK	Chesapeake Utilities	Gas Utilities	",
    
    "CPLP	Capital Product Partners	Oil Gas & Consumable Fuels	",
    
    "CPNG	Coupang	Internet Retail	",
    
    "CPOP	Pop Culture Group	Entertainment	",
    
    "CPRI	Capri Holdings	Textiles Apparel & Luxury Goods	",
    
    "CPRT	Copart	Commercial Services & Supplies	",
    
    "CPRX	Catalyst Pharmaceuticals	Biotechnology	",
    
    "CPS	Cooper-Standard Holdings	Auto Components	",
    
    "CPSH	CPS Technologies	Electronic Equipment Instruments & C	",
    
    "CPSI	Computer Programs & Systems	Health Care Technology	",
    
    "CPSS	Consumer Portfolio Services	Consumer Finance	",
    
    "CPT	Camden Property Trust	Equity Real Estate Investment Trusts 	",
    
    "CPTK	Crown PropTech Acquisitions	Blank Check / SPAC	",
    
    "CPTN	Cepton	Software-Application	",
    
    "CPUH	Compute Health Acquisition	Blank Check / SPAC	",
    
    "CQP	Cheniere Energy Partners LP	Oil Gas & Consumable Fuels	",
    
    "CR	    Crane Co	Machinery	",
    
    "CRAI	CRA International	Professional Services	",
    
    "CRBP	Corbus Pharmaceuticals Holdings	Biotechnology	",
    
    "CRBU	Caribou Biosciences	Biotechnology	",
    
    "CRC	California Resources	Oil Gas & Consumable Fuels	",
    
    "CRCT	Cricut	Computer Hardware	",
    
    "CRDA	Crawford & Company	Insurance Brokers	",
    
    "CRDB	Crawford & Company	Insurance Brokers	",
    
    "CRDF	Cardiff Oncology	Biotechnology	",
    
    "CRDL	Cardiol Therapeutics	Drug Manufacturers-Specialty & Generic	",
    
    "CRDO	Credo Technology Group Holding	Communication Equipment	",
    
    "CREC	Crescera Capital Acquisition	Blank Check / SPAC	",
    
    "CREG	China Recycling Energy	Commercial Services & Supplies	",
    
    "CRESY	Cresud SACIF y A	Real Estate Management & Development	",
    
    "CREX	Creative Realities	Media	",
    
    "CRGE	Charge Enterprises	Information Technology Services	",
    
    "CRGY	Crescent Energy Company	Oil & Gas E&P	",
    
    "CRH	CRH Plc	Construction Materials	",
    
    "CRHC	Cohn Robbins Holdings	Shell Companies	",
    
    "CRI	Carter's	Textiles Apparel & Luxury Goods	",
    
    "CRIS	Curis	Biotechnology	",
    
    "CRK	Comstock Resources	Oil Gas & Consumable Fuels	",
    
    "CRKN	Crown ElectroKinetics	Specialty Chemicals	",
    
    "CRL	Charles River Laboratories International	Life Sciences Tools & Services	",
    
    "CRM	Salesforcecom	Software	",
    
    "CRMD	CorMedix	Pharmaceuticals	",
    
    "CRMT	America's Car-Mart	Specialty Retail	",
    
    "CRNC	Cerence	Software	",
    
    "CRNT	Ceragon Networks	Communications Equipment	",
    
    "CRNX	Crinetics Pharmaceuticals	Biotechnology	",
    
    "CRON	Cronos Group	Pharmaceuticals	",
    
    "CROX	Crocs	Textiles Apparel & Luxury Goods	",
    
    "CRS	Carpenter Technology	Metals & Mining	",
    
    "CRSP	CRISPR Therapeutics AG	Biotechnology	",
    
    "CRSR	Corsair Gaming	Technology Hardware Storage & Periph	",
    
    "CRT	Cross Timbers Royalty Trust	Oil Gas & Consumable Fuels	",
    
    "CRTD	Creatd	Internet Content & Information	",
    
    "CRTO	Criteo	Media	",
    
    "CRTX	Cortexyme	Biotechnology	",
    
    "CRU	Crucible Acquisition	Blank Check / SPAC	",
    
    "CRUS	Cirrus Logic	Semiconductors & Semiconductor Equipment	",
    
    "CRVL	CorVel	Health Care Providers & Services	",
    
    "CRVS	Corvus Pharmaceuticals	Biotechnology	",
    
    "CRWD	CrowdStrike Holdings	Software	",
    
    "CRWS	Crown Crafts	Textiles Apparel & Luxury Goods	",
    
    "CRXT	Clarus Therapeutics Holdings	Drug Manufacturers-General	",
    
    "CRZN	Corazon Capital V Monoceros	Blank Check / SPAC	",
    
    "CS	    Credit Suisse Group AG	Capital Markets	",
    
    "CSBR	Champions Oncology	Life Sciences Tools & Services	",
    
    "CSCO	Cisco Systems	Communications Equipment	",
    
    "CSCW	Color Star Technology Co	Entertainment	",
    
    "CSGP	CoStar Group	Professional Services	",
    
    "CSGS	CSG Systems International	IT Services	",
    
    "CSII	Cardiovascular Systems	Health Care Equipment & Supplies	",
    
    "CSIQ	Canadian Solar	Semiconductors & Semiconductor Equipment	",
    
    "CSL	Carlisle Companies	Industrial Conglomerates	",
    
    "CSLM	Consilium Acquisition Corp I	Blank Check / SPAC	",
    
    "CSPI	CSP Inc	IT Services	",
    
    "CSR	Centerspace	Electronic Equipment Instruments & C	",
    
    "CSSE	Chicken Soup for the Soul Entertainment	Entertainment	",
    
    "CSTA	Constellation Acquisition I	Blank Check / SPAC	",
    
    "CSTE	Caesarstone	Building Products	",
    
    "CSTL	Castle Biosciences	Biotechnology	",
    
    "CSTM	Constellium SE	Metals & Mining	",
    
    "CSTR	CapStar Financial Holdings	Banks	",
    
    "CSV	Carriage Services	Diversified Consumer Services	",
    
    "CSWC	Capital Southwest	Capital Markets	",
    
    "CSWI	CSW Industrials	Building Products	",
    
    "CSX	CSX Corporation	Road & Rail	",
    ,
    "CTAQ	Carney Technology Acquisition II	Blank Check / SPAC	",
    
    "CTAS	Cintas	Commercial Services & Supplies	",
    
    "CTBI	Community Trust Bancorp	Banks	",
    
    "CTEK	CynergisTek	Health Care Providers & Services	",
    
    "CTG	Computer Task Group	IT Services	",
    
    "CTGO	Contango ORE	Metals & Mining	",
    
    "CTHR	Charles & Colvard	Textiles Apparel & Luxury Goods	",
    
    "CTIB	Yunhong CTI	Household Durables	",
    
    "CTIC	CTI BioPharma	Biotechnology	",
    
    "CTK	CooTek (Cayman)	Software	",
    
    "CTKB	Cytek Biosciences	Medical Devices	",
    
    "CTLP	Cantaloupe	Information Technology Services	",
    
    "CTLT	Catalent	Pharmaceuticals	",
    
    "CTMX	CytomX Therapeutics	Biotechnology	",
    
    "CTO	CTO Realty Growth	Real Estate Management & Development	",
    
    "CTOS	Custom Truck One Source	Trading Companies & Distributors	",
    
    "CTRA	Coterra Energy	Oil Gas & Consumable Fuels	",
    
    "CTRE	CareTrust REIT	Equity Real Estate Investment Trusts 	",
    
    "CTRM	Castor Maritime	Marine	",
    
    "CTRN	Citi Trends	Specialty Retail	",
    
    "CTS	CTS Corporation	Electronic Equipment Instruments & C	",
    
    "CTSH	Cognizant Technology Solutions	IT Services	",
    
    "CTSO	CytoSorbents	Health Care Equipment & Supplies	",
    
    "CTT	CatchMark Timber Trust	Equity Real Estate Investment Trusts 	",
    
    "CTV	Innovid	Advertising Agencies	",
    
    "CTVA	Corteva	Chemicals	",
    
    "CTXR	Citius Pharmaceuticals	Pharmaceuticals	",
    
    "CTXS	Citrix Systems	Software	",
    
    "CUBE	CubeSmart	Equity Real Estate Investment Trusts 	",
    
    "CUBI	Customers Bancorp	Banks	",
    
    "CUE	Cue Biopharma	Biotechnology	",
    
    "CUEN	Cuentas	Diversified Telecommunication Services	",
    
    "CUK	Carnival	Hotels Restaurants & Leisure	",
    
    "CULL	Cullman Bancorp	Banks	",
    
    "CULP	Culp Inc	Textiles Apparel & Luxury Goods	",
    
    "CURI	CuriosityStream	Broadcasting	",
    
    "CURO	CURO Group Holdings	Consumer Finance	",
    
    "CURV	Torrid Holdings	Apparel Retail	",
    
    "CUTR	Cutera	Health Care Equipment & Supplies	",
    
    "CUZ	Cousins Properties	Equity Real Estate Investment Trusts 	",
    
    "CVAC	CureVac	Biotechnology	",
    
    "CVBF	CVB Financial	Banks	",
    
    "CVCO	Cavco Industries	Household Durables	",
    
    "CVCY	Central Valley Community Bancorp	Banks	",
    
    "CVE	Cenovus Energy	Oil Gas & Consumable Fuels	",
    
    "CVEO	Civeo	Commercial Services & Supplies	",
    
    "CVET	Covetrus	Health Care Providers & Services	",
    
    "CVGI	Commercial Vehicle Group	Machinery	",
    
    "CVGW	Calavo Growers	Food Products	",
    
    "CVI	CVR Energy	Oil Gas & Consumable Fuels	",
    
    "CVII	Churchill Capital VII	Blank Check / SPAC	",
    
    "CVLG	Covenant Logistics Group	Road & Rail	",
    
    "CVLT	Commvault Systems	Software	",
    
    "CVLY	Codorus Valley Bancorp	Banks	",
    
    "CVM	Cel-Sci	Biotechnology	",
    
    "CVNA	Carvana Co	Specialty Retail	",
    
    "CVR	Chicago Rivet & Machine Co	Machinery	",
    
    "CVRX	CVRx Inc	Medical Devices	",
    
    "CVS	CVS Health	Health Care Providers & Services	",
    
    "CVT	Cvent Holding	Software-Application	",
    
    "CVU	CPI Aerostructures	Aerospace & Defense	",
    
    "CVV	CVD Equipment	Semiconductors & Semiconductor Equipment	",
    
    "CVX	Chevron	Oil Gas & Consumable Fuels	",
    
    "CW	    Curtiss-Wright	Aerospace & Defense	",
    
    "CWAN	Clearwater Analytics Holdings	Software-Application	",
    
    "CWBC	Community West Bancshares	Banks	",
    
    "CWBR	CohBar	Biotechnology	",
    
    "CWCO	Consolidated Water Co	",
    
    "CWEN	Clearway Energy	Independent Power and Renewable Elect	",
    
    "CWENA	Clearway Energy	Independent Power and Renewable Elect	",
    
    "CWH	Camping World Holdings	Specialty Retail	",
    
    "CWK	Cushman & Wakefield	Real Estate Management & Development	",
    
    "CWST	Casella Waste Systems	Commercial Services & Supplies	",
    
    "CWT	California Water Service Group	",
    
    "CX	    EMEX	Construction Materials	",
    
    "CXAC	C Acquisition	Blank Check / SPAC	",
    
    "CXDO	Crexendo	IT Services	",
    
    "CXM	Sprinklr	Software-Application	",
    
    "CXW	CoreCivic	Equity Real Estate Investment Trusts 	",
    
    "CYAD	Celyad Oncology	Biotechnology	",
    
    "CYAN	Cyanotech	Personal Products	",
    
    "CYBE	CyberOptics	Semiconductors & Semiconductor Equipment	",
    
    "CYBN	Cybin	Biotechnology	",
    
    "CYBR	CyberArk Software	Software	",
    
    "CYCC	Cyclacel Pharmaceuticals	Biotechnology	",
    
    "CYCN	Cyclerion Therapeutics	Biotechnology	",
    
    "CYD	China Yuchai International	Machinery	",
    
    "CYH	Community Health Systems	Health Care Providers & Services	",
    
    "CYN	Cyngn	Software-Application	",
    
    "CYRN	Cyren	Software	",
    
    "CYRX	CryoPort	Health Care Equipment & Supplies	",
    
    "CYT	Cyteir Therapeutics	Biotechnology	",
    
    "CYTH	Cyclo Therapeutics	Drug Manufacturers-Specialty & Generic	",
    
    "CYTK	Cytokinetics	Biotechnology	",
    
    "CYTO	Altamira Therapeutics	Biotechnology	",
    
    "CYXT	Cyxtera Technologies	Information Technology Services	",
    
    "CZNC	Citizens & Northern	Banks	",
    
    "CZOO	Cazoo Group	Software-Application	",
    
    "CZR	Caesars Entertainment	Hotels Restaurants & Leisure	",
    
    "CZWI	Citizens Community Bancorp	Banks	",
    
    "D	    Dominion Energy	Multi-Utilities	",
    
    "DAC	Danaos	Marine	",
    
    "DADA	Dada Nexus	Internet & Direct Marketing Retail	",
    
    "DAIO	Data I/O	Electronic Equipment Instruments & C	",
    
    "DAKT	Daktronics	Electronic Equipment Instruments & C	",
    
    "DAL	Delta Air Lines	Airlines	",
    
    "DALN	DallasNews	Media	",
    
    "DALS	DA Life Science Tech Acquisition	Blank Check / SPAC	",
    
    "DAN	Dana Incorporated	Auto Components	",
    
    "DAO	Youdao	Diversified Consumer Services	",
    
    "DAOO	Crypto  Acquisition	Blank Check / SPAC	",
    
    "DAR	Darling Ingredients	Food Products	",
    
    "DARE	Dare Bioscience	Health Care Equipment & Supplies	",
    
    "DASH	DoorDash	Internet & Direct Marketing Retail	",
    
    "DATS	DatChat	Software-Application	",
    
    "DAVA	Endava	IT Services	",
    
    "DAVE	Dave Inc	Software-Application	",
    
    "DAWN	Day One Biopharmaceuticals	Biotechnology	",
    
    "DB	    Deutsche Bank AG	Capital Markets	",
    
    "DBD	Diebold Nixdorf	Technology Hardware Storage & Periph	",
    
    "DBGI	Digital Brands Group	Apparel Retail	",
    
    "DBI	Designer Brands	Specialty Retail	",
    
    "DBRG	DigitalBridge Group	REIT-Diversified	",
    
    "DBTX	Decibel Therapeutics	Biotechnology	",
    
    "DBVT	DBV Technologies	Biotechnology	",
    
    "DBX	Dropbox	Software	",
    
    "DC	    Dakota Gold	Gold	",
    
    "DCBO	Docebo	Software-Application	",
    
    "DCFC	Tritium DCFC	Electrical Equipment & Parts	",
    
    "DCGO	DocGo	Medical Care Facilities	",
    
    "DCI	Donaldson Company	Machinery	",
    
    "DCO	Ducommun	Aerospace & Defense	",
    
    "DCOM	Dime Community Bancshares	Thrifts & Mortgage Finance	",
    
    "DCP	DCP Midstream LP	Oil Gas & Consumable Fuels	",
    
    "DCPH	Deciphera Pharmaceuticals	Biotechnology	",
    
    "DCRD	Decarbonization Plus Acquisition IV	Blank Check / SPAC	",
    
    "DCT	Duck Creek Technologies	Software	",
    
    "DCTH	Delcath Systems	Medical Devices	",
    
    "DD	    DuPont de Nemours	Chemicals	",
    
    "DDD	D Systems	Technology Hardware Storage & Periph	",
    
    "DDI	DoubleDown Interactive Co	Electronic Gaming & Multimedia	",
    
    "DDL	Dingdong (Cayman)	Grocery Stores	",
    
    "DDOG	Datadog	Software	",
    
    "DDS	Dillard's	Multiline Retail	",
    
    "DE	    Deere & Company	Machinery	",
    
    "DEA	Easterly Government Properties	Equity Real Estate Investment Trusts 	",
    
    "DECA	Denali Capital Acquisition	Blank Check / SPAC	",
    
    "DECK	Deckers Outdoor	Textiles Apparel & Luxury Goods	",
    
    "DEI	Douglas Emmett	Equity Real Estate Investment Trusts 	",
    
    "DELL	Dell Technologies	Technology Hardware Storage & Periph	",
    
    "DEN	Denbury	Oil Gas & Consumable Fuels	",
    
    "DENN	Denny's	Hotels Restaurants & Leisure	",
    
    "DEO	Diageo	Beverages	",
    
    "DERM	Journey Medical	Drug Manufacturers-Specialty & Generic	",
    
    "DESP	Despegarcom	Internet & Direct Marketing Retail	",
    
    "DFFN	Diffusion Pharmaceuticals	Biotechnology	",
    
    "DFH	Dream Finders Homes	Residential Construction	",
    
    "DFIN	Donnelley Financial Solutions	Capital Markets	",
    
    "DFS	Discover Financial Services	Consumer Finance	",
    
    "DG	    Dollar General	Multiline Retail	",
    
    "DGICA	Donegal Group	Insurance	",
    
    "DGICB	Donegal Group	Insurance	",
    
    "DGII	Digi International	Communications Equipment	",
    
    "DGLY	Digital Ally	Electronic Equipment Instruments & C	",
    
    "DGNU	Dragoneer Growth Opportunities III	Blank Check / SPAC	",
    
    "DGX	Quest Diagnostics	Health Care Providers & Services	",
    
    "DH	    Definitive Healthcare	Health Information Services	",
    
    "DHAC	Digital Health Acquisition	Blank Check / SPAC	",
    
    "DHBC	DHB Capital	Blank Check / SPAC	",
    
    "DHC	Diversified Healthcare Trust	Equity Real Estate Investment Trusts 	",
    
    "DHCA	DHC Acquisition	Blank Check / SPAC	",
    
    "DHHC	DiamondHead Holdings	Blank Check / SPAC	",
    
    "DHI	DR Horton	Household Durables	",
    
    "DHIL	Diamond Hill Investment Group	Capital Markets	",
    
    "DHR	Danaher	Health Care Equipment & Supplies	",
    
    "DHT	DHT Holdings	Oil Gas & Consumable Fuels	",
    
    "DHX	DHI Group	Interactive Media & Services	",
    
    "DIBS	stdibscom	Internet Retail	",
    
    "DICE	DICE Therapeutics	Biotechnology	",
    
    "DIDI	DiDi Global	Software-Application	",
    
    "DILA	DILA Capital Acquisition	Blank Check / SPAC	",
    
    "DIN	Dine Brands Global	Hotels Restaurants & Leisure	",
    
    "DINO	HF Sinclair	Oil Gas & Consumable Fuels	",
    
    "DIOD	Diodes	Semiconductors & Semiconductor Equipment	",
    
    "DIS	The Walt Disney Company	Entertainment	",
    
    "DISA	Disruptive Acquisition I	Blank Check / SPAC	",
    
    "DISH	DISH Network	Media	",
    
    "DIT	AMCON Distributing Company	Distributors	",
    
    "DJCO	Daily Journal	Media	",
    
    "DK	    Delek US Holdings	Oil Gas & Consumable Fuels	",
    
    "DKDCA	Data Knights Acquisition	Blank Check / SPAC	",
    
    "DKL	Delek Logistics Partners LP	Oil Gas & Consumable Fuels	",
    
    "DKNG	DraftKings Holdings	Hotels Restaurants & Leisure	",
    
    "DKS	Dick's Sporting Goods	Specialty Retail	",
    
    "DLA	Delta Apparel	Textiles Apparel & Luxury Goods	",
    
    "DLB	Dolby Laboratories	Electronic Equipment Instruments & C	",
    
    "DLCA	Deep Lake Capital Acquisition	Blank Check / SPAC	",
    
    "DLHC	DLH Holdings	Professional Services	",
    
    "DLNG	Dynagas LNG Partners	Oil Gas & Consumable Fuels	",
    
    "DLO	DLocal	Software-Infrastructure	",
    
    "DLPN	Dolphin Entertainment	Entertainment	",
    
    "DLR	Digital Realty Trust	Equity Real Estate Investment Trusts 	",
    
    "DLTH	Duluth Holdings	Internet & Direct Marketing Retail	",
    
    "DLTR	Dollar Tree	Multiline Retail	",
    
    "DLX	Deluxe	Commercial Services & Supplies	",
    
    "DM	    Desktop Metal	Computer Hardware	",
    
    "DMAC	DiaMedica Therapeutics	Biotechnology	",
    
    "DMAQ	Deep Medicine Acquisition	Blank Check / SPAC	",
    
    "DMLP	Dorchester Minerals	Oil Gas & Consumable Fuels	",
    
    "DMRC	Digimarc	Software	",
    
    "DMS	Digital Media Solutions	Advertising Agencies	",
    
    "DMTK	DermTech	Biotechnology	",
    
    "DMYS	dMY Technology Group Inc VI	Blank Check / SPAC	",
    
    "DNA	Ginkgo Bioworks Holdings	Biotechnology	",
    
    "DNAA	Social Capital Suvretta Holdings I	Blank Check / SPAC	",
    
    "DNAB	Social Capital Suvretta Holdings II	Blank Check / SPAC	",
    
    "DNAC	Social Capital Suvretta Holdings III	Blank Check / SPAC	",
    
    "DNAD	Social Capital Suvretta Holdings IV	Blank Check / SPAC	",
    
    "DNAY	Codex DNA	Medical Devices	",
    
    "DNB	Dun & Bradstreet Holdings	Professional Services	",
    
    "DNLI	Denali Therapeutics	Biotechnology	",
    
    "DNMR	Danimer Scientific	Specialty Chemicals	",
    
    "DNN	Denison Mines	Oil Gas & Consumable Fuels	",
    
    "DNOW	NOW Inc	Trading Companies & Distributors	",
    
    "DNUT	Krispy Kreme	Grocery Stores	",
    
    "DNZ	D & Z Media Acquisition	Blank Check / SPAC	",
    
    "DO	        Diamond Offshore Drilling	Energy Equipment & Services	",
    
    "DOC	Physicians Realty Trust	Equity Real Estate Investment Trusts 	",
    
    "DOCN	DigitalOcean Holdings	Software-Infrastructure	",
    
    "DOCS	Doximity	Health Information Services	",
    
    "DOCU	DocuSign	Software	",
    
    "DOGZ	Dogness (International)	Textiles Apparel & Luxury Goods	",
    
    "DOLE	Dole plc	Farm Products	",
    ,
    "DOMA	Doma Holdings	Shell Companies	",
    
    "DOMO	Domo Inc	Software	",
    
    "DOOO	BRP Inc	Leisure Products	",
    
    "DOOR	Masonite International	Building Products	",
    
    "DORM	Dorman Products	Auto Components	",
    
    "DOUG	Douglas Elliman	Real Estate Services	",
    
    "DOV	Dover	Machinery	",
    
    "DOW	Dow Inc	Chemicals	",
    
    "DOX	Amdocs	IT Services	",
    
    "DOYU	DouYu International Holdings	Entertainment	",
    
    "DPCS	DP Cap Acquisition I	Blank Check / SPAC	",
    
    "DPRO	Draganfly	Aerospace & Defense	",
    
    "DPSI	DecisionPoint Systems	IT Services	",
    
    "DPZ	Domino's Pizza	Hotels Restaurants & Leisure	",
    
    "DQ	    Daqo New Energy	Semiconductors & Semiconductor Equipment	",
    
    "DRAY	Macondray Capital Acquisition I	Blank Check / SPAC	",
    
    "DRCT	Direct Digital Holdings	Advertising Agencies	",
    
    "DRD	DRDGOLD	Metals & Mining	",
    
    "DRE	Duke Realty	Equity Real Estate Investment Trusts 	",
    
    "DRH	DiamondRock Hospitality Company	Equity Real Estate Investment Trusts 	",
    
    "DRI	Darden Restaurants	Hotels Restaurants & Leisure	",
    
    "DRIO	DarioHealth	Health Care Equipment & Supplies	",
    
    "DRMA	Dermata Therapeutics	Biotechnology	",
    
    "DRQ	Dril-Quip	Energy Equipment & Services	",
    
    "DRRX	DURECT	Pharmaceuticals	",
    
    "DRTS	Alpha Tau Medical	Biotechnology	",
    
    "DRTT	DIRTT Environmental Solutions	Building Products	",
    
    "DRUG	Bright Minds Biosciences	Biotechnology	",
    
    "DRVN	Driven Brands Holdings	Auto & Truck Dealerships	",
    
    "DS	    Drive Shack	Hotels Restaurants & Leisure	",
    
    "DSAC	Duddell Street Acquisition	Blank Check / SPAC	",
    
    "DSAQ	Direct Selling Acquisition	Blank Check / SPAC	",
    
    "DSEY	Diversey Holdings	Personal Services	",
    
    "DSGN	Design Therapeutics	Biotechnology	",
    
    "DSGR	Distribution Solutions Group	Industrial Machinery and Equipment Me	",
    "-",
    "DSGX	The Descartes Systems Group	Software	",
    
    "DSKE	Daseke	Road & Rail	",
    
    "DSP	Viant Technology	Software-Application	",
    
    "DSS	DSS Inc	Commercial Services & Supplies	",
    
    "DSWL	Deswell Industries	Electronic Equipment Instruments & C	",
    
    "DSX	Diana Shipping	Marine	",
    
    "DT	    Dynatrace	Software	",
    
    "DTC	Solo Brands	Internet Retail	",
    
    "DTE	DTE Energy Company	Multi-Utilities	",
    
    "DTEA	DAVIDsTEA	Specialty Retail	",
    
    "DTIL	Precision BioSciences	Biotechnology	",
    
    "DTM	DT Midstream	Oil & Gas Midstream	",
    
    "DTOC	Digital Transformation Opportunities	Blank Check / SPAC	",
    
    "DTRT	DTRT Health Acquisition	Blank Check / SPAC	",
    
    "DTSS	Datasea	Software	",
    
    "DTST	Data Storage	Information Technology Services	",
    
    "DUET	DUET Acquisition	Blank Check / SPAC	",
    
    "DUK	Duke Energy	Electric Utilities	",
    
    "DUNE	Dune Acquisition	Blank Check / SPAC	",
    
    "DUO	Fangdd Network Group	Interactive Media & Services	",
    
    "DUOL	Duolingo	Software-Application	",
    
    "DUOT	Duos Technologies Group	Software	",
    
    "DV	    DoubleVerify Holdings	Software-Application	",
    
    "DVA	DaVita	Health Care Providers & Services	",
    ,
    "DVAX	Dynavax Technologies	Biotechnology	",
    
    "DVN	Devon Energy	Oil Gas & Consumable Fuels	",
    
    "DWAC	Digital World Acquisition	Blank Check / SPAC	",
    
    "DWIN	Delwinds Insurance Acquisition	Blank Check / SPAC	",
    
    "DWSN	Dawson Geophysical Company	Energy Equipment & Services	",
    
    "DX	    Dynex Capital	Mortgage Real Estate Investment Trust	",
    
    "DXC	DXC Technology Company	IT Services	",
    
    "DXCM	DexCom	Health Care Equipment & Supplies	",
    
    "DXF	Dunxin Financial Holdings	Diversified Financial Services	",
    
    "DXLG	Destination XL Group	Specialty Retail	",
    
    "DXPE	DXP Enterprises	Trading Companies & Distributors	",
    
    "DXR	Daxor	Health Care Equipment & Supplies	",
    
    "DXYN	The Dixie Group	Household Durables	",
    
    "DY	    Dycom Industries	Construction & Engineering	",
    
    "DYAI	Dyadic International	Biotechnology	",
    
    "DYN	Dyne Therapeutics	Independent Power and Renewable Elect	",
    
    "DYNS	Dynamics Special Purpose	Blank Check / SPAC	",
    
    "DYNT	Dynatronics	Health Care Equipment & Supplies	",
    
    "DZSI	DZS Inc	Communications Equipment	",
    
    "E	    Eni SpA	Oil Gas & Consumable Fuels	",
    
    "EA	    Electronic Arts	Entertainment	",
    
    "EAC	Edify Acquisition	Blank Check / SPAC	",
    
    "EAF	GrafTech International	Electrical Equipment	",
    
    "EAR	Eargo	Medical Devices	",
    
    "EARN	Ellington Residential Mortgage REIT	Mortgage Real Estate Investment Trust	",
    
    "EAST	Eastside Distilling	Beverages	",
    
    "EAT	Brinker International	Hotels Restaurants & Leisure	",
    
    "EB	    Eventbrite	Interactive Media & Services	",
    
    "EBAC	European Biotech Acquisition	Blank Check / SPAC	",
    
    "EBAY	eBay Inc	Internet & Direct Marketing Retail	",
    
    "EBC	Eastern Bankshares	Banks	",
    
    "EBET	EBET INC	Gambling	",
    
    "EBF	Ennis	Commercial Services & Supplies	",
    
    "EBIX	Ebix Inc	Software	",
    
    "EBMT	Eagle Bancorp Montana	Banks	",
    
    "EBON	Ebang International Holdings	Computer Hardware	",
    
    "EBR	Centrais Eletricas Brasileiras	Electric Utilities	",
    
    "EBS	Emergent BioSolutions	Biotechnology	",
    
    "EBTC	Enterprise Bancorp	Banks	",
    
    "EC	    Ecopetrol	Oil Gas & Consumable Fuels	",
    
    "ECC	Eagle Point Credit Company	Securities and Commodity Exchanges	",
    
    "ECL	Ecolab	Chemicals	",
    
    "ECOM	ChannelAdvisor	Software	",
    
    "ECOR	electroCore	Health Care Equipment & Supplies	",
    
    "ECPG	Encore Capital Group	Consumer Finance	",
    
    "ECVT	Ecovyst	Specialty Chemicals	",
    
    "ED	    Consolidated Edison	Multi-Utilities	",
    
    "EDAP	EDAP TMS	Health Care Equipment & Supplies	",
    
    "EDBL	Edible Garden AG	Food Products	",
    
    "EDIT	Editas Medicine	Biotechnology	",
    
    "EDN	Empresa Distribuidora y Comercializadora Norte	Electric Utilities	",
    
    "EDNC	Endurance Acquisition	Blank Check / SPAC	",
    
    "EDR	Endeavor Group Holdings	Entertainment	",
    
    "EDRY	EuroDry	Marine	",
    
    "EDSA	Edesa Biotech	Biotechnology	",
    
    "EDTK	Skillful Craftsman Education Technology	Education & Training Services	",
    
    "EDTX	EdtechX Holdings Acquisition II	Blank Check / SPAC	",
    
    "EDU	New Oriental Education & Technology Group	Diversified Consumer Services	",
    
    "EDUC	Educational Development	Distributors	",
    
    "EE 	Excelerate Energy	Energy	",
    
    "EEFT	Euronet Worldwide	IT Services	",
    
    "EEIQ	Elite Education Group International	Diversified Consumer Services	",
    
    "EEX	Emerald Holding	Media	",
    
    "EFC	Ellington Financial	Mortgage Real Estate Investment Trust	",
    
    "EFOI	Energy Focus	Electrical Equipment	",
    
    "EFSC	Enterprise Financial Services	Banks	",
    
    "EFTR	eFFECTOR Therapeutics	Biotechnology	",
    
    "EFX	Equifax	Professional Services	",
    
    "EGAN	eGain	Software	",
    
    "EGBN	Eagle Bancorp	Banks	",
    
    "EGGF	EG Acquisition	Blank Check / SPAC	",
    
    "EGHT	x Inc	Software	",
    
    "EGLE	Eagle Bulk Shipping	Marine	",
    
    "EGLX	Enthusiast Gaming Holdings	Internet Content & Information	",
    
    "EGO	Eldorado Gold	Metals & Mining	",
    
    "EGP	EastGroup Properties	Equity Real Estate Investment Trusts 	",
    
    "EGRX	Eagle Pharmaceuticals	Biotechnology	",
    
    "EGY	VAALCO Energy	Oil Gas & Consumable Fuels	",
    
    "EH	    EHang Holdings	Aerospace & Defense	",
    
    "EHC	Encompass Health	Health Care Providers & Services	",
    
    "EHTH	eHealth	Insurance	",
    
    "EIC	Eagle Point Income Company	Securities and Commodity Exchanges	",
    
    "EIG	Employers Holdings	Insurance	",
    
    "EIGR	Eiger BioPharmaceuticals	Biotechnology	",
    
    "EIX	Edison International	Electric Utilities	",
    
    "EJFA	EJF Acquisition	Blank Check / SPAC	",
    
    "EJH	E-Home Household Service Holdings	Personal Services	",
    
    "EKSO	Ekso Bionics Holdings	Health Care Equipment & Supplies	",
    
    "EL	    The Estee Lauder Companies	Personal Products	",
    ,
    "ELA	Envela	Specialty Retail	",
    
    "ELAN	Elanco Animal Health	Pharmaceuticals	",
    
    "ELBM	Electra Battery Materials	Other Industrial Metals & Mining	",
    
    "ELDN	Eledon Pharmaceuticals	Biotechnology	",
    
    "ELEV	Elevation Oncology	Biotechnology	",
    
    "ELF	elf Beauty	Personal Products	",
    
    "ELLO	Ellomay Capital	Independent Power and Renewable Elect	",
    
    "ELMD	Electromed	Health Care Equipment & Supplies	",
    
    "ELMS	Electric Last Mile Solutions	Auto Manufacturers	",
    
    "ELOX	Eloxx Pharmaceuticals	Pharmaceuticals	",
    
    "ELP	Companhia Paranaense de Energia	Electric Utilities	",
    
    "ELS	Equity LifeStyle Properties	Equity Real Estate Investment Trusts 	",
    
    "ELSE	Electro-Sensors	Electronic Equipment Instruments & C	",
    
    "ELTK	Eltek	Electronic Equipment Instruments & C	",
    
    "ELVT	Elevate Credit	Consumer Finance	",
    
    "ELY	Callaway Golf Company	Leisure Products	",
    ,
    "ELYM	Eliem Therapeutics	Biotechnology	",
    
    "ELYS	Elys Game Technology	Gambling	",
    
    "EM	    Smart Share Global	Personal Services	",
    
    "EMAN	eMagin	Semiconductors & Semiconductor Equipment	",
    
    "EMBC	Embecta	Drug Manufacturers-Specialty & Generic	",
    ,
    "EMBK	Embark Technology	Software-Application	",
    
    "EMCF	Emclaire Financial	Banks	",
    
    "EME	EMCOR Group	Construction & Engineering	",
    
    "EMKR	EMCORE	Communications Equipment	",
    
    "EML	The Eastern Company	Machinery	",
    
    "EMLD	FTAC Emerald Acquisition	Blank Check / SPAC	",
    
    "EMN	Eastman Chemical Company	Chemicals	",
    
    "EMR	Emerson Electric Company	Electrical Equipment	",
    ,
    "EMX	EMX Royalty	Metals & Mining	",
    
    "ENB	Enbridge	Oil Gas & Consumable Fuels	",
    
    "ENCP	Energem	Blank Check / SPAC	",
    
    "ENDP	Endo International	Pharmaceuticals	",
    
    "ENER	Accretion Acquisition	Blank Check / SPAC	",
    
    "ENFN	Enfusion	Software-Application	",
    
    "ENG	ENGlobal	Energy Equipment & Services	",
    
    "ENIA	Enel Americas	Electric Utilities	",
    ,
    "ENIC	Enel Chile	Electric Utilities	",
    
    "ENJY	Enjoy Technology	Specialty Retail	",
    
    "ENLC	EnLink Midstream LLC	Oil Gas & Consumable Fuels	",
    
    "ENLV	Enlivex Therapeutics	Software	",
    
    "ENOB	Enochian Biosciences	Biotechnology	",
    
    "ENOV	Enovis	Specialty Industrial Machinery	",
    
    "ENPC	Executive Network Partnering	Shell Companies	",
    
    "ENPH	Enphase Energy	Semiconductors & Semiconductor Equipment	",
    
    "ENR	Energizer Holdings	Household Products	",
    
    "ENS	EnerSys	Electrical Equipment	",
    
    "ENSC	Ensysce Biosciences	Biotechnology	",
    
    "ENSG	The Ensign Group	Health Care Providers & Services	",
    
    "ENSV	Enservco	Energy Equipment & Services	",
    
    "ENTA	Enanta Pharmaceuticals	Biotechnology	",
    
    "ENTF	Enterprise  Technology Acquisition	Blank Check / SPAC	",
    
    "ENTG	Entegris	Semiconductors & Semiconductor Equipment	",
    
    "ENTX	Entera Bio	Biotechnology	",
    
    "ENV	Envestnet	Software	",
    
    "ENVA	Enova International	Consumer Finance	",
    
    "ENVB	Enveric Biosciences	Biotechnology	",
    
    "ENVX	Enovix	Electrical Equipment & Parts	",
    
    "ENZ	Enzo Biochem	Health Care Providers & Services	",
    
    "EOCW	Elliott Opportunity II	Blank Check / SPAC	",
    
    "EOG	EOG Resources	Oil Gas & Consumable Fuels	",
    
    "EOLS	Evolus	Pharmaceuticals	",
    
    "EOSE	Eos Energy Enterprises	Electrical Equipment & Parts	",
    
    "EP	    Empire Petroleum	Oil & Gas E&P	",
    
    "EPAC	Enerpac Tool Group	Machinery	",
    
    "EPAM	EPAM Systems	IT Services	",
    
    "EPAY	Bottomline Technologies	Software	",
    
    "EPC	Edgewell Personal Care Company	Personal Products	",
    
    "EPD	Enterprise Products Partners	Oil Gas & Consumable Fuels	",
    
    "EPHY	Epiphany Technology Acquisition	Blank Check / SPAC	",
    
    "EPIX	ESSA Pharma	Biotechnology	",
    
    "EPM	Evolution Petroleum	Oil Gas & Consumable Fuels	",
    
    "EPR	EPR Properties	Equity Real Estate Investment Trusts 	",
    
    "EPRT	Essential Properties Realty Trust	Equity Real Estate Investment Trusts 	",
    
    "EPSN	Epsilon Energy	Oil Gas & Consumable Fuels	",
    
    "EPWR	Empowerment & Inclusion Capital I	Blank Check / SPAC	",
    
    "EPZM	Epizyme	Biotechnology	",
    
    "EQ	    Equillium	Biotechnology	",
    
    "EQBK	Equity Bancshares	Banks	",
    
    "EQC	Equity Commonwealth	Equity Real Estate Investment Trusts 	",
    
    "EQD	Equity Distribution Acquisition	Blank Check / SPAC	",
    
    "EQH	Equitable Holdings	Diversified Financial Services	",
    
    "EQHA	EQ Health Acquisition	Blank Check / SPAC	",
    
    "EQIX	Equinix	Equity Real Estate Investment Trusts 	",
    
    "EQNR	Equinor ASA	Oil Gas & Consumable Fuels	",
    
    "EQOS	EQONEX	Capital Markets	",
    
    "EQR	Equity Residential	Equity Real Estate Investment Trusts 	",
    
    "EQRX	EQRx Inc	Biotechnology	",
    
    "EQS	Equus Total Return	Capital Markets	",
    
    "EQT	EQT Corporation	Oil Gas & Consumable Fuels	",
    
    "EQX	Equinox Gold	Metals & Mining	",
    
    "ERAS	Erasca	Biotechnology	",
    
    "ERES	East Resources Acquisition Co	Blank Check / SPAC	",
    
    "ERF	Enerplus	Oil Gas & Consumable Fuels	",
    
    "ERIC	Ericsson	Communications Equipment	",
    
    "ERIE	Erie Indemnity Company	Insurance	",
    
    "ERII	Energy Recovery	Machinery	",
    
    "ERJ	Embraer	Aerospace & Defense	",
    
    "ERO	Ero Copper	Metals & Mining	",
    
    "ERYP	Erytech Pharma	Biotechnology	",
    
    "ES	    Eversource Energy	Electric Utilities	",
    
    "ESAB	ESAB Corporation	Metal Fabrication	",
    
    "ESAC	ESGEN Acquisition	Blank Check / SPAC	",
    
    "ESBA	Empire State Realty OP	Equity Real Estate Investment Trusts 	",
    
    "ESBK	Elmira Savings Bank	Thrifts & Mortgage Finance	",
    
    "ESCA	Escalade	Leisure Products	",
    
    "ESE	ESCO Technologies	Machinery	",
    
    "ESEA	Euroseas	Marine	",
    
    "ESGC	Eros STX Global	Entertainment	",
    
    "ESGR	Enstar Group	Insurance	",
    
    "ESI	Element Solutions	Chemicals	",
    
    "ESLT	Elbit Systems	Aerospace & Defense	",
    
    "ESM	ESM Acquisition	Blank Check / SPAC	",
    
    "ESMT	EngageSmart	Software-Infrastructure	",
    
    "ESNT	Essent Group	Thrifts & Mortgage Finance	",
    
    "ESP	Espey Manufacturing & Electronics	Electrical Equipment	",
    
    "ESPR	Esperion Therapeutics	Biotechnology	",
    
    "ESQ	Esquire Financial Holdings	Banks	",
    
    "ESRT	Empire State Realty Trust	Equity Real Estate Investment Trusts 	",
    
    "ESS	Essex Property Trust	Equity Real Estate Investment Trusts 	",
    
    "ESSA	ESSA Bancorp	Thrifts & Mortgage Finance	",
    
    "ESSC	East Stone Acquisition	Blank Check / SPAC	",
    
    "ESTA	Establishment Labs Holdings	Health Care Equipment & Supplies	",
    
    "ESTC	Elastic	Software	",
    
    "ESTE	Earthstone Energy	Oil Gas & Consumable Fuels	",
    
    "ET	    Energy Transfer LP	Oil Gas & Consumable Fuels	",
    
    "ETAC	Emerge Technology Acquisition	Blank Check / SPAC	",
    
    "ETD	Ethan Allen Interiors	Furnishings Fixtures & Appliances	",
    
    "ETN	Eaton	Electrical Equipment	",
    
    "ETNB	bio	Biotechnology	",
    
    "ETON	Eton Pharmaceuticals	Pharmaceuticals	",
    
    "ETR	Entergy	Electric Utilities	",
    
    "ETRN	Equitrans Midstream	Oil Gas & Consumable Fuels	",
    
    "ETSY	Etsy Inc	Internet & Direct Marketing Retail	",
    
    "ETTX	Entasis Therapeutics Holdings	Biotechnology	",
    
    "ETWO	Eopen Parent Holdings	Software-Infrastructure	",
    
    "EUCR	Eucrates Biomedical Acquisition	Blank Check / SPAC	",
    
    "EURN	Euronav NV	Oil Gas & Consumable Fuels	",
    
    "EVA	Enviva	Oil Gas & Consumable Fuels	",
    
    "EVAX	Evaxion Biotech	Biotechnology	",
    
    "EVBG	Everbridge	Software	",
    
    "EVBN	Evans Bancorp	Banks	",
    
    "EVC	Entravision Communications	Media	",
    
    "EVCM	EverCommerce	Software-Infrastructure	",
    
    "EVE	EVe Mobility Acquisition	Blank Check / SPAC	",
    
    "EVER	EverQuote	Interactive Media & Services	",
    
    "EVEX	Eve Holding	Shell Companies	",
    
    "EVFM	Evofem Biosciences	Pharmaceuticals	",
    
    "EVGN	Evogene	Biotechnology	",
    
    "EVGO	EVgo Inc	Specialty Retail	",
    
    "EVGR	Evergreen	Blank Check / SPAC	",
    
    "EVH	Evolent Health	Health Care Technology	",
    
    "EVI	EVI Industries	Trading Companies & Distributors	",
    
    "EVK	Ever-Glory International Group	Textiles Apparel & Luxury Goods	",
    
    "EVLO	Evelo Biosciences	Biotechnology	",
    
    "EVLV	Evolv Technologies Holdings	Security & Protection Services	",
    
    "EVO	Evotec SE	Drug Manufacturers-Specialty & Generic	",
    ,
    "EVOJ	Evo Acquisition	Blank Check / SPAC	",
    
    "EVOK	Evoke Pharma	Pharmaceuticals	",
    
    "EVOL	Symbolic Logic	Software	",
    
    "EVOP	EVO Payments	IT Services	",
    
    "EVR	Evercore	Capital Markets	",
    
    "EVRG	Evergy	Electric Utilities	",
    
    "EVRI	Everi Holdings	Hotels Restaurants & Leisure	",
    
    "EVTC	Evertec	IT Services	",
    
    "EVTL	Vertical Aerospace	Aerospace & Defense	",
    ,
    "EW	    Edwards Lifesciences	Health Care Equipment & Supplies	",
    
    "EWBC	East West Bancorp	Banks	",
    
    "EWCZ	European Wax Center	Household & Personal Products	",
    
    "EWTX	Edgewise Therapeutics	Biotechnology	",
    
    "EXAI	Exscientia	Biotechnology	",
    
    "EXAS	Exact Sciences	Biotechnology	",
    
    "EXC	Exelon	Electric Utilities	",
    
    "EXEL	Exelixis	Biotechnology	",
    
    "EXFY	Expensify	Software-Application	",
    
    "EXK	Endeavour Silver	Metals & Mining	",
    
    "EXLS	ExlService Holdings	IT Services	",
    
    "EXN	Excellon Resources	Other Industrial Metals & Mining	",
    
    "EXP	Eagle Materials	Construction Materials	",
    ,
    "EXPD	Expeditors International of Washington	Air Freight & Logistics	",
    
    "EXPE	Expedia Group	Internet & Direct Marketing Retail	",
    
    "EXPI	eXp World Holdings	Real Estate Management & Development	",
    
    "EXPO	Exponent	Professional Services	",
    ,
    "EXPR	Express	Specialty Retail	",
    
    "EXR	Extra Space Storage	Equity Real Estate Investment Trusts 	",
    
    "EXTN	Exterran	Energy Equipment & Services	",
    
    "EXTR	Extreme Networks	Communications Equipment	",
    
    "EYE	National Vision Holdings	Specialty Retail	",
    
    "EYEN	Eyenovia	Pharmaceuticals	",
    
    "EYES	Second Sight Medical Products	Health Care Equipment & Supplies	",
    
    "EYPT	EyePoint Pharmaceuticals	Pharmaceuticals	",
    
    "EZFL	EzFill Holdings	Software-Application	",
    
    "EZGO	EZGO Technologies	Recreational Vehicles	",
    
    "EZPW	EZCORP	Consumer Finance	",
    
    "F	    Ford Motor Company	Automobiles	",
    
    "FA	    First Advantage	Specialty Business Services	",
    
    "FACA	Figure Acquisition I	Blank Check / SPAC	",
    
    "FACT	Freedom Acquisition I	Blank Check / SPAC	",
    
    "FAF	First American Financial	Insurance	",
    
    "FAMI	Farmmi	Food Products	",
    
    "FANG	Diamondback Energy	Oil Gas & Consumable Fuels	",
    ,
    "FANH	Fanhua	Insurance	",
    
    "FARM	Farmer Brothers Company	Food Products	",
    
    "FARO	FARO Technologies	Electronic Equipment Instruments & C	",
    
    "FAST	Fastenal Company	Trading Companies & Distributors	",
    
    "FAT	FAT Brands	Hotels Restaurants & Leisure	",
    
    "FATBB	FAT Brands	Hotels Restaurants & Leisure	",
    
    "FATE	Fate Therapeutics	Biotechnology	",
    
    "FATH	Fathom Digital Manufacturing	Shell Companies	",
    
    "FATP	Fat Projects Acquisition	Blank Check / SPAC	",
    
    "FB	    Meta Platforms	Interactive Media & Services	",
    
    "FBC	Flagstar Bancorp	Thrifts & Mortgage Finance	",
    
    "FBHS	Fortune Brands Home & Security	Building Products	",
    
    "FBIO	Fortress Biotech	Biotechnology	",
    
    "FBIZ	First Business Financial Services	Banks	",
    
    "FBK	FB Financial	Banks	",
    
    "FBMS	The First Bancshares	Banks	",
    
    "FBNC	First Bancorp	Banks	",
    
    "FBP	First BanCorp - Puerto Rico	Banks	",
    ,
    "FBRT	Franklin BSP Realty Trust	REIT-Mortgage	",
    
    "FBRX	Forte Biosciences	Biotechnology	",
    
    "FC	    Franklin Covey Company	Professional Services	",
    
    "FCAP	First Capital	Banks	",
    
    "FCAX	Fortress Capital Acquisition	Blank Check / SPAC	",
    
    "FCBC	First Community Bancshares	Banks	",
    
    "FCCO	First Community	Banks	",
    
    "FCEL	FuelCell Energy	Electrical Equipment	",
    
    "FCF	First Commonwealth Financial	Banks	",
    ,
    "FCFS	FirstCash Holdings	Consumer Finance	",
    
    "FCN	FTI Consulting	Professional Services	",
    
    "FCNCA	First Citizens BancShares	Banks	",
    
    "FCPT	Four Corners Property Trust	Equity Real Estate Investment Trusts 	",
    
    "FCRD	First Eagle Alternative Capital BDC	Asset Management	",
    
    "FCUV	Focus Universal	Electronic Equipment Instruments & C	",
    
    "FCX	Freeport-McMoRan	Metals & Mining	",
    
    "FDBC	Fidelity D&D Bancorp	Banks	",
    
    "FDMT	D Molecular Therapeutics	Biotechnology	",
    
    "FDP	Fresh Del Monte Produce	Food Products	",
    
    "FDS	FactSet Research Systems	Capital Markets	",
    
    "FDUS	Fidus Investment	Capital Markets	",
    
    "FDX	FedEx	Air Freight & Logistics	",
    
    "FE	    FirstEnergy	Electric Utilities	",
    
    "FEAM	E Advanced Materials	Specialty Chemicals	",
    
    "FEDU	Four Seasons Education (Cayman)	Diversified Consumer Services	",
    
    "FEIM	Frequency Electronics	Electronic Equipment Instruments & C	",
    
    "FELE	Franklin Electric Co	Machinery	",
    
    "FEMY	Femasys	Medical Instruments & Supplies	",
    
    "FENC	Fennec Pharmaceuticals	Biotechnology	",
    
    "FENG	Phoenix New Media	Interactive Media & Services	",
    
    "FERG	Ferguson	Industrial Distribution	",
    
    "FET	Forum Energy Technologies	Energy Equipment & Services	",
    
    "FEXD	Fintech Ecosystem Development	Blank Check / SPAC	",
    
    "FF	    FutureFuel	Chemicals	",
    
    "FFBC	First Financial Bancorp	Banks	",
    
    "FFBW	FFBW Inc	Thrifts & Mortgage Finance	",
    
    "FFHL	Fuwei Films (Holdings) Co	Chemicals	",
    
    "FFIC	Flushing Financial	Banks	",
    
    "FFIE	Faraday Future Intelligent Electric	Automobiles	",
    
    "FFIN	First Financial Bankshares	Banks	",
    
    "FFIV	F Networks	Communications Equipment	",
    
    "FFNW	First Financial Northwest	Banks	",
    
    "FFWM	First Foundation	Banks	",
    
    "FGBI	First Guaranty Bancshares	Banks	",
    
    "FGEN	FibroGen	Biotechnology	",
    
    "FGF	FG Financial Group	Insurance	",
    
    "FGI	FGI Industries	Furnishings Fixtures & Appliances	",
    
    "FGMC	FG Merger	Blank Check / SPAC	",
    
    "FHB	First Hawaiian	Banks	",
    ,
    "FHI	Federated Hermes	Asset Management	",
    ,
    "FHLT	Future Health ESG	Blank Check / SPAC	",
    
    "FHN	First Horizon	Banks	",
    
    "FHS	First High-School Education Group Co	Education & Training Services	",
    
    "FHTX	Foghorn Therapeutics	Biotechnology	",
    
    "FIAC	Focus Impact Acquisition	Blank Check / SPAC	",
    
    "FIBK	First Interstate BancSystem	Banks	",
    
    "FICO	Fair Isaac	Software	",
    ,
    "FICV	Frontier Investment	Blank Check / SPAC	",
    
    "FIGS	FIGS Inc	Apparel Manufacturing	",
    
    "FINM	Marlin Technology	Blank Check / SPAC	",
    
    "FINV	FinVolution Group	Consumer Finance	",
    
    "FINW	FinWise Bancorp	Banks-Regional	",
    
    "FIS	Fidelity National Information Services	IT Services	",
    
    "FISI	Financial Institutions	Banks	",
    
    "FISV	Fiserv	IT Services	",
    
    "FITB	Fifth Third Bancorp	Banks	",
    ,
    "FIVE	Five Below	Specialty Retail	",
    
    "FIVN	Five	Software	",
    
    "FIX	Comfort Systems USA	Construction & Engineering	",
    
    "FIXX	Homology Medicines	Biotechnology	",
    
    "FIZZ	National Beverage	Beverages	",
    ,
    "FKWL	Franklin Wireless	Communications Equipment	",
    
    "FL	    Foot Locker	Specialty Retail	",
    
    "FLAC	Frazier Lifesciences Acquisition	Blank Check / SPAC	",
    
    "FLAG	First Light Acquisition Group	Blank Check / SPAC	",
    
    "FLEX	Flex Ltd	Electronic Equipment Instruments & C	",
    
    "FLGC	Flora Growth	Drug Manufacturers-Specialty & Generic	",
    
    "FLGT	Fulgent Genetics	Health Care Providers & Services	",
    
    "FLIC	The First of Long Island Corporation	Banks	",
    
    "FLL	Full House Resorts	Hotels Restaurants & Leisure	",
    
    "FLME	Flame Acquisition	Blank Check / SPAC	",
    
    "FLMN	Falcon Minerals	Oil Gas & Consumable Fuels	",
    
    "FLNC	Fluence Energy	Utilities-Renewable	",
    
    "FLNG	Flex LNG	Marine	",
    
    "FLNT	Fluent	Media	",
    
    "FLO	Flowers Foods	Food Products	",
    
    "FLR	Fluor	Construction & Engineering	",
    
    "FLS	Flowserve	Machinery	",
    
    "FLT	FleetCor Technologies	IT Services	",
    
    "FLUX	Flux Power Holdings	Electrical Equipment	",
    
    "FLWS	--Flowerscom	Internet & Direct Marketing Retail	",
    
    "FLXS	Flexsteel Industries	Household Durables	",
    
    "FLYA	Soar Technology Acquisition	Blank Check / SPAC	",
    
    "FLYW	Flywire	Information Technology Services	",
    
    "FMAO	Farmers & Merchants Bancorp	Banks	",
    
    "FMBH	First Mid Bancshares	Banks	",
    
    "FMC	FMC Corporation	Chemicals	",
    
    "FMIV	Forum Merger IV	Blank Check / SPAC	",
    
    "FMNB	Farmers National Banc	Banks	",
    
    "FMS	Fresenius Medical Care AG & Co	Health Care Providers & Services	",
    
    "FMTX	Forma Therapeutics Holdings	Biotechnology	",
    
    "FMX	Fomento Economico Mexicano	Beverages	",
    
    "FN	    Fabrinet	Electronic Equipment Instruments & C	",
    
    "FNA	Paragon 	Medical Devices	",
    
    "FNB	FNB	Banks	",
    
    "FNCB	FNCB Bancorp	Banks	",
    
    "FNCH	Finch Therapeutics Group	Biotechnology	",
    
    "FND	Floor & Decor Holdings	Specialty Retail	",
    
    "FNF	Fidelity National Financial	Insurance	",
    
    "FNGR	FingerMotion	Telecom Services	",
    
    "FNHC	FedNat Holding Company	Insurance	",
    
    "FNKO	Funko	Distributors	",
    
    "FNLC	First Bancorp Inc - Maine	Banks	",
    
    "FNV	Franco-Nevada	Metals & Mining	",
    
    "FNVT	Finnovate Acquisition	Blank Check / SPAC	",
    
    "FNWB	First Northwest Bancorp	Banks	",
    
    "FNWD	Finward Bancorp	Banks-Regional	",
    
    "FOA	Finance of America Companies	Credit Services	",
    
    "FOCS	Focus Financial Partners	Capital Markets	",
    
    "FOLD	Amicus Therapeutics	Biotechnology	",
    
    "FONR	Fonar	Health Care Equipment & Supplies	",
    
    "FOR	Forestar Group	Real Estate Management & Development	",
    
    "FORA	Forian	Health Information Services	",
    
    "FORD	Forward Industries	Textiles Apparel & Luxury Goods	",
    
    "FORG	ForgeRock	Software-Infrastructure	",
    
    "FORM	FormFactor	Semiconductors & Semiconductor Equipment	",
    
    "FORR	Forrester Research	Professional Services	",
    
    "FORTY	Formula Systems ()	IT Services	",
    
    "FOSL	Fossil Group	Textiles Apparel & Luxury Goods	",
    
    "FOUN	Founder SPAC	Blank Check / SPAC	",
    
    "FOUR	Shift Payments	IT Services	",
    
    "FOX	Fox Corporation	Media	",
    
    "FOXA	Fox Corporation	Media	",
    
    "FOXF	Fox Factory Holding	Auto Components	",
    
    "FOXW	FoxWayne Enterprises Acquisition	Blank Check / SPAC	",
    
    "FPAC	Far Peak Acquisition	Blank Check / SPAC	",
    
    "FPAY	FlexShopper	Diversified Financial Services	",
    
    "FPH	Five Point Holdings LLC	Real Estate Management & Development	",
    
    "FPI	Farmland Partners	Equity Real Estate Investment Trusts 	",
    
    "FR	    First Industrial Realty Trust	Equity Real Estate Investment Trusts 	",
    
    "FRAF	Franklin Financial Services	Banks	",
    
    "FRBA	First Bank	Banks	",
    
    "FRBK	Republic First Bancorp	Banks	",
    
    "FRBN	Forbion European Acquisition	Blank Check / SPAC	",
    
    "FRC	First Republic Bank	Banks	",
    
    "FRD	Friedman Industries	Metals & Mining	",
    
    "FREE	Whole Earth Brands	Packaged Foods	",
    
    "FREQ	Frequency Therapeutics	Biotechnology	",
    
    "FREY	FREYR Battery	Electrical Equipment & Parts	",
    
    "FRG	Franchise Group	Diversified Consumer Services	",
    
    "FRGE	Forge Global Holdings	Software-Application	",
    
    "FRGI	Fiesta Restaurant Group	Hotels Restaurants & Leisure	",
    
    "FRHC	Freedom Holding	Capital Markets	",
    
    "FRLA	Fortune Rise Acquisition	Blank Check / SPAC	",
    
    "FRLN	Freeline Therapeutics Holdings	Biotechnology	",
    
    "FRME	First Merchants	Banks	",
    
    "FRO	Frontline	Oil Gas & Consumable Fuels	",
    
    "FROG	JFrog	Software	",
    
    "FRON	Frontier Acquisition	Blank Check / SPAC	",
    
    "FRPH	FRP Holdings	Real Estate Management & Development	",
    
    "FRPT	Freshpet	Food Products	",
    
    "FRSG	First Reserve Sustainable Growth	Shell Companies	",
    
    "FRSH	Freshworks	Software	",
    
    "FRST	Primis Financial	Banks	",
    
    "FRSX	Foresight Autonomous Holdings	Auto Components	",
    
    "FRT	Federal Realty Investment Trust	Equity Real Estate Investment Trusts 	",
    
    "FRW	PWP Forward Acquisition I	Blank Check / SPAC	",
    
    "FRXB	Forest Road Acquisition II	Blank Check / SPAC	",
    
    "FSBC	Five Star Bancorp	Banks-Regional	",
    
    "FSBW	FS Bancorp	Thrifts & Mortgage Finance	",
    
    "FSEA	First Seacoast Bancorp	Thrifts & Mortgage Finance	",
    
    "FSFG	First Savings Financial Group	Banks	",
    
    "FSI	Flexible Solutions International	Chemicals	",
    
    "FSK	FS KKR Capital	Capital Markets	",
    
    "FSLR	First Solar	Semiconductors & Semiconductor Equipment	",
    
    "FSLY	Fastly	IT Services	",
    
    "FSM	Fortuna Silver Mines	Metals & Mining	",
    
    "FSNB	Fusion Acquisition II	Blank Check / SPAC	",
    
    "FSP	Franklin Street Properties	Equity Real Estate Investment Trusts 	",
    
    "FSR	Fisker	Insurance	",
    
    "FSRD	Fast Radius	Software-Infrastructure	",
    
    "FSRX	FinServ Acquisition II	Blank Check / SPAC	",
    
    "FSS	Federal Signal	Machinery	",
    
    "FSSI	Fortistar Sustainable Solutions	Blank Check / SPAC	",
    
    "FST	FAST Acquisition	Blank Check / SPAC	",
    
    "FSTR	LB Foster Company	Machinery	",
    
    "FSTX	F-star Therapeutics	Biotechnology	",
    
    "FSV	FirstService	Real Estate Management & Development	",
    
    "FTAA	FTAC Athena Acquisition	Blank Check / SPAC	",
    
    "FTAI	Fortress Transportation & Infrastructure Investors LLC	Trading Companies & Distributors	",
    
    "FTCH	Farfetch	Internet & Direct Marketing Retail	",
    
    "FTCI	FTC Solar	Solar	",
    
    "FTCV	FinTech Acquisition V	Blank Check / SPAC	",
    
    "FTDR	Frontdoor	Diversified Consumer Services	",
    
    "FTEK	Fuel Tech	Commercial Services & Supplies	",
    
    "FTEV	FinTech Evolution Acquisition Group	Blank Check / SPAC	",
    
    "FTFT	Future FinTech Group	Food Products	",
    
    "FTHM	Fathom Holdings	Real Estate Management & Development	",
    
    "FTI	TechnipFMC	Energy Equipment & Services	",
    
    "FTII	FutureTech II Acquisition	Blank Check / SPAC	",
    
    "FTK	Flotek Industries	Chemicals	",
    
    "FTNT	Fortinet	Software	",
    
    "FTPA	FTAC Parnassus Acquisition	Blank Check / SPAC	",
    
    "FTRP	Field Trip Health	Medical Care Facilities	",
    
    "FTS	Fortis	Electric Utilities	",
    
    "FTV	Fortive	Machinery	",
    
    "FTVI	FinTech Acquisition VI	Blank Check / SPAC	",
    
    "FUBO	FuboTV	Software	",
    
    "FUL	HB Fuller Company	Chemicals	",
    
    "FULC	Fulcrum Therapeutics	Pharmaceuticals	",
    
    "FULT	Fulton Financial	Banks	",
    
    "FUN	Cedar Fair	Hotels Restaurants & Leisure	",
    
    "FUNC	First United	Banks	",
    
    "FURY	Fury Gold Mines	Other Industrial Metals & Mining	",
    
    "FUSB	First US Bancshares	Banks	",
    
    "FUSN	Fusion Pharmaceuticals	Biotechnology	",
    
    "FUTU	Futu Holdings	Capital Markets	",
    
    "FUV	Arcimoto	Automobiles	",
    
    "FVAM	: Acquisition	Blank Check / SPAC	",
    
    "FVCB	FVCBankcorp	Banks	",
    
    "FVIV	Fortress Value Acquisition IV	Blank Check / SPAC	",
    
    "FVRR	Fiverr International	Internet & Direct Marketing Retail	",
    
    "FVT	Fortress Value Acquisition III	Blank Check / SPAC	",
    
    "FWAC	Fifth Wall Acquisition III	Blank Check / SPAC	",
    
    "FWBI	First Wave BioPharma	Biotechnology	",
    
    "FWONA	Liberty Media Formula One Group	Entertainment	",
    
    "FWP	Forward Pharma	Biotechnology	",
    
    "FWRD	Forward Air	Air Freight & Logistics	",
    
    "FWRG	First Watch Restaurant Group	Restaurants	",
    
    "FXCO	Financial Strategies Acquisition	Blank Check / SPAC	",
    
    "FXLV	F Training Holdings	Leisure	",
    
    "FXNC	First National	Banks	",
    
    "FYBR	Frontier Communications Parent	Telecom Services	",
    
    "FZT	FAST Acquisition II	Blank Check / SPAC	",
    
    "G	    Genpact	IT Services	",
    
    "GABC	German American Bancorp	Banks	",
    
    "GACQ	Global Consumer Acquisition	Blank Check / SPAC	",
    
    "GAIA	Gaia Inc	Entertainment	",
    
    "GAIN	Gladstone Investment	Capital Markets	",
    
    "GALT	Galectin Therapeutics	Biotechnology	",
    
    "GAMB	Gamblingcom Group	Gambling	",
    
    "GAMC	Golden Arrow Merger	Blank Check / SPAC	",
    
    "GAME	Engine Gaming & Media	Software	",
    
    "GAN	GAN Limited	Gambling	",
    
    "GANX	Gain Therapeutics	Biotechnology	",
    
    "GAPA	G&P Acquisition	Blank Check / SPAC	",
    
    "GAQ	Generation Asia I Acquisition	Blank Check / SPAC	",
    
    "GASS	StealthGas	Oil Gas & Consumable Fuels	",
    
    "GATE	Marblegate Acquisition	Blank Check / SPAC	",
    
    "GATO	Gatos Silver	Other Precious Metals & Mining	",
    
    "GATX	GATX Corporation	Trading Companies & Distributors	",
    
    "GAU	Galiano Gold	Metals & Mining	",
    
    "GB	    Global Blue Group Holding AG	Information Technology Services	",
    
    "GBBK	Global Blockchain Acquisition	Blank Check / SPAC	",
    
    "GBCI	Glacier Bancorp	Banks	",
    
    "GBDC	Golub Capital BDC	Capital Markets	",
    
    "GBIO	Generation Bio Co	Biotechnology	",
    
    "GBL	GAMCO Investors	Capital Markets	",
    
    "GBLI	Global Indemnity Group LLC	Insurance	",
    
    "GBNH	Greenbrook TMS	Medical Care Facilities	",
    
    "GBNY	Generations Bancorp NY	Banks-Regional	",
    
    "GBOX	GreenBox POS	Software-Infrastructure	",
    
    "GBR	New Concept Energy	Oil Gas & Consumable Fuels	",
    
    "GBRG	Goldenbridge Acquisition	Blank Check / SPAC	",
    
    "GBS	GBS Inc	Medical Devices	",
    
    "GBT	Global Blood Therapeutics	Biotechnology	",
    ,
    "GBX	The Greenbrier Companies	Machinery	",
    
    "GCBC	Greene County Bancorp	Thrifts & Mortgage Finance	",
    
    "GCI	Gannett Co	Publishing	",
    
    "GCMG	GCM Grosvenor	Asset Management	",
    
    "GCO	Genesco	Specialty Retail	",
    
    "GCP	GCP Applied Technologies	Chemicals	",
    
    "GCTK	GlucoTrack	Medical Instruments & Supplies	",
    
    "GD	    General Dynamics	Aerospace & Defense	",
    
    "GDDY	GoDaddy	IT Services	",
    
    "GDEN	Golden Entertainment	Hotels Restaurants & Leisure	",
    ,
    "GDEV	Nexters	Electronic Gaming & Multimedia	",
    ,
    "GDNR	Gardiner Healthcare Acquisitions	Blank Check / SPAC	",
    
    "GDOT	Green Dot	Consumer Finance	",
    
    "GDRX	GoodRx Holdings	Health Care Technology	",
    
    "GDS	GDS Holdings	IT Services	",
    
    "GDST	Goldenstone Acquisition	Blank Check / SPAC	",
    
    "GDYN	Grid Dynamics Holdings	IT Services	",
    
    "GE	    General Electric Company	Industrial Conglomerates	",
    
    "GECC	Great Elm Capital	Capital Markets	",
    
    "GEEX	Games & Esports Experience Acquisition	Blank Check / SPAC	",
    
    "GEF	Greif	Containers & Packaging	",
    
    "GEFB	Greif	Packaging & Containers	",
    
    "GEG	Great Elm Group	Capital Markets	",
    
    "GEL	Genesis Energy	Oil Gas & Consumable Fuels	",
    
    "GENC	Gencor Industries	Machinery	",
    
    "GENE	Genetic Technologies	Life Sciences Tools & Services	",
    
    "GENI	Genius Sports	Interactive Media & Services	",
    
    "GENQ	Genesis Unicorn Capital	Blank Check / SPAC	",
    
    "GEO	The GEO Group	Equity Real Estate Investment Trusts 	",
    
    "GEOS	Geospace Technologies	Energy Equipment & Services	",
    
    "GERN	Geron	Biotechnology	",
    
    "GES	Guess?	Specialty Retail	",
    
    "GET	Getnet Adquirencia E Servicos Para Meios De Pagamento	Data Processing Hosting and Related	",
    ,
    "GEVO	Gevo Inc	Oil Gas & Consumable Fuels	",
    
    "GFAI	Guardforce AI Co	Security & Protection Services	",
    
    "GFF	Griffon	Building Products	",
    ,
    "GFGD	Growth For Good Acquisition	Blank Check / SPAC	",
    
    "GFI	Gold Fields	Metals & Mining	",
    
    "GFL	GFL Environmental	",
    
    "GFOR	Graf Acquisition IV	Blank Check / SPAC	",
    
    "GFS	GlobalFoundries	Semiconductors	",
    
    "GFX	Golden Falcon Acquisition	Blank Check / SPAC	",
    
    "GGAA	Genesis Growth Tech Acquisition	Blank Check / SPAC	",
    
    "GGAL	Grupo Financiero Galicia	Banks	",
    
    "GGB	Gerdau	Metals & Mining	",
    
    "GGE	Green Giant	Real Estate Management & Development	",
    
    "GGG	Graco	Machinery	",
    
    "GGGV	G VRM Acquisition	Blank Check / SPAC	",
    
    "GGMC	Glenfarne Merger	Blank Check / SPAC	",
    
    "GGPI	Gores Guggenheim	Shell Companies	",
    
    "GGR	Gogoro	Auto Parts	",
    
    "GH	    Guardant Health	Health Care Providers & Services	",
    
    "GHAC	Gaming & Hospitality Acquisition	Blank Check / SPAC	",
    
    "GHC	Graham Holdings Company	Diversified Consumer Services	",
    
    "GHG	GreenTree Hospitality Group	Hotels Restaurants & Leisure	",
    
    "GHIX	Gores Holdings IX	Blank Check / SPAC	",
    
    "GHL	Greenhill & Co	Capital Markets	",
    
    "GHLD	Guild Holdings Company	Mortgage Finance	",
    
    "GHM	Graham	Machinery	",
    
    "GHRS	GH Research	Biotechnology	",
    
    "GHSI	Guardion Health Sciences	Personal Products	",
    
    "GIA	GigCapital	Blank Check / SPAC	",
    
    "GIAC	Gesher I Acquisition	Blank Check / SPAC	",
    
    "GIB	CGI Inc	IT Services	",
    
    "GIC	Global Industrial Company	Trading Companies & Distributors	",
    
    "GIFI	Gulf Island Fabrication	Energy Equipment & Services	",
    
    "GIGM	GigaMedia	Entertainment	",
    
    "GIII	G-III Apparel Group	Textiles Apparel & Luxury Goods	",
    ,
    "GIIX	Gores Holdings VIII	Shell Companies	",
    
    "GIL	Gildan Activewear	Textiles Apparel & Luxury Goods	",
    
    "GILD	Gilead Sciences	Biotechnology	",
    
    "GILT	Gilat Satellite Networks	Communications Equipment	",
    
    "GIPR	Generation Income Properties	REIT-Diversified	",
    
    "GIS	General Mills	Food Products	",
    
    "GIW	GigInternational	Blank Check / SPAC	",
    
    "GKOS	Glaukos	Health Care Equipment & Supplies	",
    
    "GL	    Globe Life	Insurance	",
    
    "GLAD	Gladstone Capital	Capital Markets	",
    
    "GLAQ	Globis Acquisition	Blank Check / SPAC	",
    
    "GLBE	Global-E Online	Internet Retail	",
    
    "GLBL	Cartesian Growth	Blank Check / SPAC	",
    
    "GLBS	Globus Maritime	Marine	",
    
    "GLBZ	Glen Burnie Bancorp	Banks	",
    
    "GLDD	Great Lakes Dredge & Dock	Construction & Engineering	",
    
    "GLDG	GoldMining	Gold	",
    
    "GLEE	Gladstone Acquisition	Blank Check / SPAC	",
    
    "GLG	TD Holdings	Road & Rail	",
    
    "GLHA	Glass Houses Acquisition	Blank Check / SPAC	",
    
    "GLLI	Globalink Investment	Blank Check / SPAC	",
    
    "GLMD	Galmed Pharmaceuticals	Biotechnology	",
    
    "GLNG	Golar LNG	Oil Gas & Consumable Fuels	",
    
    "GLOB	Globant	Software	",
    
    "GLOP	GasLog Partners LP	Oil Gas & Consumable Fuels	",
    
    "GLP	Global Partners LP	Oil Gas & Consumable Fuels	",
    
    "GLPG	Galapagos NV	Biotechnology	",
    
    "GLPI	Gaming & Leisure Properties	Equity Real Estate Investment Trusts 	",
    
    "GLRE	Greenlight Capital Re	Insurance	",
    
    "GLS	Gelesis Holdings	Biotechnology	",
    
    "GLSI	Greenwich LifeSciences	Biotechnology	",
    
    "GLSPT	Global SPAC Partners Co	Blank Check / SPAC	",
    
    "GLT	Glatfelter	Paper & Forest Products	",
    
    "GLTA	Galata Acquisition	Blank Check / SPAC	",
    
    "GLTO	Galecto	Biotechnology	",
    
    "GLUE	Monte Rosa Therapeutics	Biotechnology	",
    
    "GLW	Corning	Electronic Equipment Instruments & C	",
    
    "GLYC	GlycoMimetics	Biotechnology	",
    
    "GM	    General Motors Company	Automobiles	",
    
    "GMAB	Genmab	Biotechnology	",
    
    "GMBL	Esports Entertainment Group	Hotels Restaurants & Leisure	",
    
    "GMDA	Gamida Cell	Biotechnology	",
    
    "GME	GameStop	Specialty Retail	",
    
    "GMED	Globus Medical	Health Care Equipment & Supplies	",
    
    "GMFI	Aetherium Acquisition	Blank Check / SPAC	",
    
    "GMGI	Golden Matrix Group	Electronic Gaming & Multimedia	",
    
    "GMRE	Global Medical REIT	Equity Real Estate Investment Trusts 	",
    
    "GMS	GMS Inc	Trading Companies & Distributors	",
    
    "GMTX	Gemini Therapeutics	Biotechnology	",
    
    "GMVD	G Medical Innovations Holdings	Medical Instruments & Supplies	",
    
    "GNAC	Group Nine Acquisition	Blank Check / SPAC	",
    
    "GNCA	Genocea Biosciences	Biotechnology	",
    
    "GNE	Genie Energy	Electric Utilities	",
    
    "GNFT	Genfit	Biotechnology	",
    
    "GNK	Genco Shipping & Trading	Marine	",
    
    "GNL	Global Net Lease	Equity Real Estate Investment Trusts 	",
    
    "GNLN	Greenlane Holdings	Distributors	",
    
    "GNPX	Genprex	Biotechnology	",
    
    "GNRC	Generac Holdings	Electrical Equipment	",
    
    "GNS	Genius Group	Education & Training Services	",
    
    "GNSS	Genasys	Electronic Equipment Instruments & C	",
    
    "GNTA	Genenta Science SpA	Biotechnology	",
    
    "GNTX	Gentex	Auto Components	",
    
    "GNTY	Guaranty Bancshares	Banks	",
    
    "GNUS	Genius Brands International	Leisure Products	",
    
    "GNW	Genworth Financial	Insurance	",
    
    "GO	    Grocery Outlet Holding	Food & Staples Retailing	",
    
    "GOAC	GO Acquisition	Blank Check / SPAC	",
    
    "GOBI	Gobi Acquisition	Blank Check / SPAC	",
    
    "GOCO	GoHealth	Insurance Brokers	",
    
    "GOED	 Goedeker	Internet Retail	",
    
    "GOEV	Canoo	Automobiles	",
    
    "GOGL	Golden Ocean Group	Marine	",
    ,
    "GOGN	GoGreen Investments	Blank Check / SPAC	",
    
    "GOGO	Gogo Inc		",
    
    "GOL	GOL Linhas Aereas Inteligentes	Airlines	",
    
    "GOLD	Barrick Gold	Metals & Mining	",
    
    "GOLF	Acushnet Holdings	Leisure Products	",
    
    "GOOD	Gladstone Commercial	Equity Real Estate Investment Trusts 	",
    
    "GOOG	Alphabet	Interactive Media & Services	",
    
    "GOOGL	Alphabet	Interactive Media & Services	",
    
    "GOOS	Canada Goose Holdings	Textiles Apparel & Luxury Goods	",
    ,
    "GORO	Gold Resource	Metals & Mining	",
    
    "GOSS	Gossamer Bio	Biotechnology	",
    
    "GOTU	Gaotu Techedu	Diversified Consumer Services	",
    
    "GOVX	GeoVax Labs	Biotechnology	",
    
    "GP	    GreenPower Motor Company	Machinery	",
    
    "GPAC	Global Partner Acquisition II	Blank Check / SPAC	",
    
    "GPC	Genuine Parts Company	Distributors	",
    
    "GPCO	Golden Path Acquisition	Blank Check / SPAC	",
    
    "GPI	Group  Automotive	Specialty Retail	",
    
    "GPK	Graphic Packaging Holding Company	Containers & Packaging	",
    
    "GPL	Great Panther Mining	Metals & Mining	",
    
    "GPMT	Granite Point Mortgage Trust	Mortgage Real Estate Investment Trust	",
    
    "GPN	Global Payments	IT Services	",
    
    "GPOR	Gulfport Energy	Oil & Gas E&P	",
    
    "GPP	Green Plains Partners LP	Oil Gas & Consumable Fuels	",
    
    "GPRE	Green Plains	Oil Gas & Consumable Fuels	",
    
    "GPRK	GeoPark	Oil Gas & Consumable Fuels	",
    
    "GPRO	GoPro	Household Durables	",
    ,
    "GPS	The Gap	Specialty Retail	",
    
    "GRAB	Grab Holdings	Asset Management	",
    
    "GRAY	Graybug Vision	Biotechnology	",
    
    "GRBK	Green Brick Partners	Household Durables	",
    ,
    "GRC	The Gorman-Rupp Company	Machinery	",
    
    "GRCL	Gracell Biotechnologies	Biotechnology	",
    
    "GRCY	Greencity Acquisition	Blank Check / SPAC	",
    
    "GREE	Greenidge Generation Holdings	Capital Markets	",
    
    "GRFS	Grifols	Biotechnology	",
    
    "GRIL	Muscle Maker	Restaurants	",
    
    "GRIN	Grindrod Shipping Holdings	Marine	",
    
    "GRMN	Garmin	Household Durables	",
    
    "GRNA	GreenLight Biosciences Holdings PBC	Biotechnology	",
    
    "GRNQ	Greenpro Capital	Capital Markets	",
    
    "GROM	Grom Social Enterprises	Internet Content & Information	",
    
    "GROW	US Global Investors	Capital Markets	",
    
    "GROY	Gold Royalty	Metals & Mining	",
    
    "GRPH	Graphite Bio	Biotechnology	",
    
    "GRPN	Groupon	Internet & Direct Marketing Retail	",
    
    "GRTS	Gritstone bio	Biotechnology	",
    
    "GRTX	Galera Therapeutics	Biotechnology	",
    
    "GRVI	Grove	Drug Manufacturers-Specialty & Generic	",
    
    "GRVY	Gravity Co	Entertainment	",
    
    "GRWG	GrowGeneration	Specialty Retail	",
    
    "GS	    The Goldman Sachs Group	Capital Markets	",
    
    "GSAQ	Global Synergy Acquisition	Blank Check / SPAC	",
    
    "GSAT	Globalstar	Diversified Telecommunication Services	",
    
    "GSBC	Great Southern Bancorp	Banks	",
    
    "GSBD	Goldman Sachs BDC	Capital Markets	",
    
    "GSEV	Gores Holdings VII	Blank Check / SPAC	",
    
    "GSHD	Goosehead Insurance	Insurance	",
    
    "GSIT	GSI Technology	Semiconductors & Semiconductor Equipment	",
    
    "GSK	GlaxoSmithKline	Pharmaceuticals	",
    
    "GSL	Global Ship Lease	Marine	",
    
    "GSM	Ferroglobe	Metals & Mining	",
    
    "GSMG	Glory Star New Media Group Holdings	Advertising Agencies	",
    
    "GSQB	G Squared Ascend II	Blank Check / SPAC	",
    
    "GSQD	G Squared Ascend I	Blank Check / SPAC	",
    
    "GSRM	GSR II Meteora Acquisition	Blank Check / SPAC	",
    
    "GSV	Gold Standard Ventures	Metals & Mining	",
    
    "GT	    The Goodyear Tire & Rubber Company	Auto Components	",
    
    "GTAC	Global Technology Acquisition I	Blank Check / SPAC	",
    
    "GTBP	GT Biopharma	Biotechnology	",
    
    "GTE	Gran Tierra Energy	Oil Gas & Consumable Fuels	",
    
    "GTEC	Greenland Technologies Holding	Machinery	",
    
    "GTES	Gates Industrial	Machinery	",
    
    "GTH	Genetron Holdings	Diagnostics & Research	",
    
    "GTHX	G Therapeutics	Biotechnology	",
    
    "GTIM	Good Times Restaurants	Hotels Restaurants & Leisure	",
    
    "GTLB	GitLab	Software-Application	",
    
    "GTLS	Chart Industries	Machinery	",
    
    "GTN	Gray Television	Media	",
    
    "GTNA	Gray Television	Broadcasting	",
    
    "GTPA	Gores Technology Partners	Blank Check / SPAC	",
    
    "GTPB	Gores Technology Partners II	Blank Check / SPAC	",
    
    "GTX	Garrett Motion	Auto Components	",
    
    "GTY	Getty Realty	Equity Real Estate Investment Trusts 	",
    
    "GTYH	GTY Technology Holdings	Software	",
    
    "GURE	Gulf Resources	Chemicals	",
    
    "GVA	Granite Construction	Construction & Engineering	",
    ,
    "GVCI	Green Visor Financial Technology Acquisition I	Blank Check / SPAC	",
    
    "GVP	GSE Systems	Software	",
    
    "GWGHQ	GWG Holdings	Diversified Financial Services	",
    
    "GWH	ESS Tech	Electrical Equipment & Parts	",
    
    "GWII	Good Works II Acquisition	Blank Check / SPAC	",
    
    "GWRE	Guidewire Software	Software	",
    
    "GWRS	Global Water Resources	",
    
    "GWW	WW Grainger	Trading Companies & Distributors	",
    
    "GXII	GX Acquisition II	Blank Check / SPAC	",
    
    "GXO	GXO Logistics	Specialty Business Services	",
    ,
    "GYRO	Gyrodyne LLC	Real Estate Management & Development	",
    
    "H	    Hyatt Hotels	Hotels Restaurants & Leisure	",
    
    "HA	    Hawaiian Holdings	Airlines	",
    
    "HAAC	Health Assurance Acquisition	Blank Check / SPAC	",
    
    "HAE	Haemonetics	Health Care Equipment & Supplies	",
    
    "HAFC	Hanmi Financial	Banks	",
    
    "HAIA	Healthcare AI Acquisition	Blank Check / SPAC	",
    
    "HAIN	The Hain Celestial Group	Food Products	",
    
    "HAL	Halliburton Company	Energy Equipment & Services	",
    
    "HALL	Hallmark Financial Services	Insurance	",
    
    "HALO	Halozyme Therapeutics	Biotechnology	",
    
    "HAPP	Happiness Biotech Group	Personal Products	",
    
    "HARP	Harpoon Therapeutics	Biotechnology	",
    
    "HAS	Hasbro	Leisure Products	",
    
    "HASI	Hannon Armstrong Sustainable Infrastructure Capital	Equity Real Estate Investment Trusts 	",
    
    "HAYN	Haynes International	Metals & Mining	",
    
    "HAYW	Hayward Holdings	Leisure Products	",
    
    "HBAN	Huntington Bancshares	Banks	",
    
    "HBB	Hamilton Beach Brands Holding Company	Household Durables	",
    
    "HBCP	Home Bancorp	Thrifts & Mortgage Finance	",
    
    "HBI	Hanesbrands	Textiles Apparel & Luxury Goods	",
    
    "HBIO	Harvard Bioscience	Life Sciences Tools & Services	",
    
    "HBM	HudBay Minerals	Metals & Mining	",
    
    "HBNC	Horizon Bancorp	Banks	",
    
    "HBT	HBT Financial	Banks	",
    
    "HCA	HCA Healthcare	Health Care Providers & Services	",
    
    "HCAR	Healthcare Services Acquisition	Blank Check / SPAC	",
    
    "HCAT	Health Catalyst	Health Care Technology	",
    
    "HCC	Warrior Met Coal	Metals & Mining	",
    
    "HCCI	Heritage-Crystal Clean	Commercial Services & Supplies	",
    
    "HCDI	Harbor Custom Development	Real Estate-Development	",
    
    "HCI	HCI Group	Insurance	",
    
    "HCIC	Hennessy Capital Investment V	Shell Companies	",
    
    "HCII	Hudson Executive Investment II	Blank Check / SPAC	",
    
    "HCKT	The Hackett Group	IT Services	",
    
    "HCM	HUTCHMED (China)	Pharmaceuticals	",
    
    "HCMA	HCM Acquisition	Blank Check / SPAC	",
    
    "HCNE	JAWS Hurricane Acquisition	Blank Check / SPAC	",
    
    "HCP	HashiCorp	Software-Infrastructure	",
    
    "HCSG	Healthcare Services Group	Commercial Services & Supplies	",
    
    "HCTI	Healthcare Triangle	Health Information Services	",
    
    "HCVI	Hennessy Capital Investment VI	Blank Check / SPAC	",
    
    "HCWB	HCW Biologics	Biotechnology	",
    
    "HD	The Home Depot	Specialty Retail	",
    
    "HDB	HDFC Bank	Banks	",

    "HDSN	Hudson Technologies	Commercial Services & Supplies	",
    
    "HE	    Hawaiian Electric Industries	Electric Utilities	",
    
    "HEAR	Turtle Beach	Household Durables	",
    
    "HEES	H&E Equipment Services	Trading Companies & Distributors	",
    
    "HEI	HEICO	Aerospace & Defense	",
    
    "HEIA	HEICO	Aerospace & Defense	",
    
    "HELE	Helen of Troy	Household Durables	",
    
    "HEP	Holly Energy Partners	Oil Gas & Consumable Fuels	",
    
    "HEPA	Hepion Pharmaceuticals	Pharmaceuticals	",
    
    "HEPS	D-MARKET Electronic Services & Trading	Internet Retail	",
    
    "HERA	FTAC Hera Acquisition	Blank Check / SPAC	",
    
    "HES	Hess Corporation	Oil Gas & Consumable Fuels	",
    
    "HESM	Hess Midstream LP	Oil Gas & Consumable Fuels	",
    
    "HEXO	HEXO Corp	Pharmaceuticals	",
    
    "HFBL	Home Federal Bancorp	Thrifts & Mortgage Finance	",
    
    "HFFG	HF Foods Group	Food & Staples Retailing	",
    
    "HFWA	Heritage Financial	Banks	",
    
    "HGBL	Heritage Global	Capital Markets	",
    
    "HGEN	Humanigen	Biotechnology	",
    
    "HGTY	Hagerty	Insurance-Property & Casualty	",
    
    "HGV	Hilton Grand Vacations	Hotels Restaurants & Leisure	",
    
    "HHC	The Howard Hughes Corporation	Real Estate Management & Development	",
    ,
    "HHGC	HHG Capital	Blank Check / SPAC	",
    
    "HHLA	HH&L Acquisition Co	Blank Check / SPAC	",
    
    "HHR	Headhunter Group	Professional Services	",
    
    "HHS	Harte Hanks	Media	",
    
    "HI	    Hillenbrand	Machinery	",
    
    "HIBB	Hibbett	Specialty Retail	",
    
    "HIFS	Hingham Institution for Savings	Thrifts & Mortgage Finance	",
    
    "HIG	The Hartford Financial Services Group	Insurance	",
    
    "HIGA	HIG Acquisition	Blank Check / SPAC	",
    
    "HIHO	Highway Holdings	Machinery	",
    
    "HII	Huntington Ingalls Industries	Aerospace & Defense	",
    
    "HIII	Hudson Executive Investment III	Blank Check / SPAC	",
    
    "HIL	Hill International	Professional Services	",
    
    "HILS	Hillstream BioPharma	Biotechnology	",
    
    "HIMS	Hims & Hers Health	Household & Personal Products	",
    
    "HIMX	Himax Technologies	Semiconductors & Semiconductor Equipment	",
    ,
    "HIPO	Hippo Holdings	Insurance-Specialty	",
    
    "HITI	High Tide	Pharmaceutical Retailers	",
    
    "HIVE	HIVE Blockchain Technologies	Capital Markets	",
    
    "HIW	Highwoods Properties	Equity Real Estate Investment Trusts 	",
    
    "HL	    Hecla Mining Company	Metals & Mining	",
    
    "HLAH	Hamilton Lane Alliance Holdings I	Blank Check / SPAC	",
    
    "HLBZ	Helbiz	Recreational Vehicles	",
    
    "HLF	Herbalife Nutrition	Personal Products	",
    
    "HLG	Hailiang Education Group	Diversified Consumer Services	",
    
    "HLGN	Heliogen	Utilities-Renewable	",
    
    "HLI	Houlihan Lokey	Capital Markets	",
    
    "HLIO	Helios Technologies	Machinery	",
    
    "HLIT	Harmonic	Communications Equipment	",
    
    "HLLY	Holley	Auto Parts	",
    
    "HLMN	Hillman Solutions	Tools & Accessories	",
    
    "HLNE	Hamilton Lane	Capital Markets	",
    
    "HLT	Hilton Worldwide Holdings	Hotels Restaurants & Leisure	",
    
    "HLTH	Cue Health	Health Information Services	",
    
    "HLVX	HilleVax	Biotechnology	",
    
    "HLX	Helix Energy Solutions Group	Energy Equipment & Services	",
    
    "HMA	Heartland Media Acquisition	Blank Check / SPAC	",
    
    "HMC	Honda Motor Company	Automobiles	",
    
    "HMCO	HumanCo Acquisition	Blank Check / SPAC	",
    
    "HMLP	Hoegh Lng Partners LP	Oil Gas & Consumable Fuels	",
    
    "HMN	Horace Mann Educators	Insurance	",
    
    "HMNF	HMN Financial	Thrifts & Mortgage Finance	",
    
    "HMPT	Home Point Capital	Mortgage Finance	",
    
    "HMST	HomeStreet	Thrifts & Mortgage Finance	",
    
    "HMTV	Hemisphere Media Group	Media	",
    
    "HMY	Harmony Gold Mining Company	Metals & Mining	",
    
    "HNGR	Hanger	Health Care Providers & Services	",
    
    "HNI	HNI Corporation	Commercial Services & Supplies	",
    
    "HNNA	Hennessy Advisors	Capital Markets	",
    
    "HNP	Huaneng Power International	Independent Power and Renewable Elect	",
    
    "HNRA	HNR Acquisition	Blank Check / SPAC	",
    
    "HNRG	Hallador Energy Company	Oil Gas & Consumable Fuels	",
    
    "HNST	The Honest Company	Specialty Retail	",
    
    "HNVR	Hanover Bancorp	Banks-Regional	",
    
    "HOFT	Hooker Furniture	Household Durables	",
    
    "HOFV	Hall of Fame Resort & Entertainment Company	Entertainment	",
    
    "HOG	Harley-Davidson	Automobiles	",
    
    "HOLI	HollySys Automation Technologies	Electronic Equipment Instruments & C	",
    
    "HOLX	Hologic	Health Care Equipment & Supplies	",
    
    "HOMB	Home Bancshares	Banks	",
    
    "HON	Honeywell International	Industrial Conglomerates	",
    
    "HONE	HarborOne Bancorp	Banks	",
    
    "HOOD	Robinhood Markets	Software-Infrastructure	",
    ,
    "HOOK	HOOKIPA Pharma	Biotechnology	",
    
    "HOPE	Hope Bancorp	Banks	",
    
    "HORI	Emerging Markets Horizon	Blank Check / SPAC	",
    
    "HOTH	Hoth Therapeutics	Pharmaceuticals	",
    
    "HOUR	Hour Loop	Internet Retail	",
    
    "HOV	Hovnanian Enterprises	Household Durables	",
    
    "HOWL	Werewolf Therapeutics	Biotechnology	",
    
    "HP	    Helmerich & Payne	Energy Equipment & Services	",
    ,
    "HPE	Hewlett-Packard Enterprise Company	Technology Hardware Storage & Periph	",
    
    "HPK	HighPeak Energy	Oil & Gas E&P	",
    
    "HPLT	Home Plate Acquisition	Blank Check / SPAC	",
    
    "HPP	Hudson Pacific Properties	Equity Real Estate Investment Trusts 	",
    
    "HPQ	HP Inc	Technology Hardware Storage & Periph	",
    
    "HPX	HPX Corp	Shell Companies	",
    
    "HQI	HireQuest	Professional Services	",
    
    "HQY	HealthEquity	Health Care Providers & Services	",
    ,
    "HR	    Healthcare Realty Trust	Equity Real Estate Investment Trusts 	",
    
    "HRB	H&R Block	Diversified Consumer Services	",
    
    "HRI	Herc Holdings	Trading Companies & Distributors	",
    
    "HRL	Hormel Foods	Food Products	",
    
    "HRMY	Harmony Biosciences Holdings	Biotechnology	",
    
    "HROW	Harrow Health	Pharmaceuticals	",
    
    "HRT	HireRight Holdings	Staffing & Employment Services	",
    
    "HRTG	Heritage Insurance Holdings	Insurance	",
    
    "HRTX	Heron Therapeutics	Biotechnology	",
    
    "HRZN	Horizon Technology Finance	Capital Markets	",
    
    "HSAQ	Health Sciences Acquisitions Corp 	Blank Check / SPAC	",
    
    "HSBC	HSBC Holdings	Banks	",
    
    "HSC	Harsco	Machinery	",
    
    "HSDT	Helius Medical Technologies	Health Care Equipment & Supplies	",
    
    "HSIC	Henry Schein	Health Care Providers & Services	",
    
    "HSII	Heidrick & Struggles International	Professional Services	",
    
    "HSKA	Heska	Health Care Equipment & Supplies	",
    
    "HSON	Hudson Global	Professional Services	",
    
    "HST	Host Hotels & Resorts	Equity Real Estate Investment Trusts 	",
    
    "HSTM	HealthStream	Health Care Technology	",
    
    "HSTO	Histogen	Biotechnology	",
    
    "HSY	The Hershey Company	Food Products	",
    ,
    "HT	    Hersha Hospitality Trust	Equity Real Estate Investment Trusts 	",
    
    "HTA	Healthcare Trust of America	Equity Real Estate Investment Trusts 	",
    
    "HTAQ	Hunt Companies Acquisition I	Blank Check / SPAC	",
    
    "HTBI	HomeTrust Bancshares	Banks	",
    
    "HTBK	Heritage Commerce	Banks	",
    
    "HTCR	HeartCore Enterprises	Software-Application	",
    
    "HTGC	Hercules Capital	Capital Markets	",
    
    "HTGM	HTG Molecular Diagnostics	Health Care Technology	",
    
    "HTH	Hilltop Holdings	Banks	",
    
    "HTHT	Huazhu Group	Hotels Restaurants & Leisure	",
    
    "HTLD	Heartland Express	Road & Rail	",
    
    "HTLF	Heartland Financial USA	Banks	",
    
    "HTOO	Fusion Fuel Green	Utilities-Renewable	",
    
    "HTPA	Highland Transcend Partners I	Blank Check / SPAC	",
    
    "HTZ	Hertz Global Holdings	Rental & Leasing Services	",
    
    "HUBB	Hubbell	Electrical Equipment	",
    
    "HUBG	Hub Group	Air Freight & Logistics	",
    
    "HUBS	HubSpot	Software	",
    
    "HUDI	Huadi International Group Co	Steel	",
    
    "HUGE	FSD Pharma	IT Services	",
    
    "HUGS	USHG Acquisition	Blank Check / SPAC	",
    
    "HUIZ	Huize Holding	Insurance Brokers	",
    
    "HUM	Humana	Health Care Providers & Services	",
    
    "HUMA	Humacyte	Biotechnology	",
    
    "HUN	Huntsman	Chemicals	",
    
    "HURC	Hurco Companies	Machinery	",
    
    "HURN	Huron Consulting Group	Professional Services	",
    
    "HUSA	Houston American Energy	Oil Gas & Consumable Fuels	",
    
    "HUSN	Hudson Capital	Software-Application	",
    
    "HUT	Hut  Mining	Capital Markets	",
    
    "HUYA	HUYA Inc	Entertainment	",
    
    "HVBC	HV Bancorp	Thrifts & Mortgage Finance	",
    
    "HVT	Haverty Furniture Companies	Specialty Retail	",
    
    "HWBK	Hawthorn Bancshares	Banks	",
    
    "HWC	Hancock Whitney	Banks	",
    
    "HWEL	Healthwell Acquisition I	Blank Check / SPAC	",
    
    "HWKN	Hawkins	Chemicals	",
    
    "HWKZ	Hawks Acquisition	Blank Check / SPAC	",
    
    "HWM	Howmet Aerospace	Aerospace & Defense	",
    
    "HXL	Hexcel	Aerospace & Defense	",
    
    "HY	    Hyster-Yale Materials Handling	Machinery	",
    
    "HYAC	Haymaker Acquisition III	Blank Check / SPAC	",
    
    "HYFM	Hydrofarm Holdings Group	Farm & Heavy Construction Machinery	",
    
    "HYLN	Hyliion Holdings	Machinery	",
    
    "HYMC	Hycroft Mining Holding	Gold	",
    
    "HYPR	Hyperfine	Medical Devices	",
    
    "HYRE	HyreCar	Diversified Consumer Services	",
    
    "HYW	Hywin Holdings	Asset Management	",
    
    "HYZN	Hyzon Motors	Auto Manufacturers	",
    
    "HZN	Horizon Global	Auto Components	",
    
    "HZNP	Horizon Therapeutics	Pharmaceuticals	",
    
    "HZO	MarineMax	Specialty Retail	",
    
    "HZON	Horizon Acquisition II	Blank Check / SPAC	",
    
    "IAA	IAA Inc	Commercial Services & Supplies	",
    
    "IAC	IAC/InterActiveCorp	Interactive Media & Services	",
    
    "IACC	ION Acquisition 	Blank Check / SPAC	",
    
    "IAG	Iamgold	Metals & Mining	",
    
    "IART	Integra LifeSciences Holdings	Health Care Equipment & Supplies	",
    
    "IAS	Integral Ad Science Holding	Advertising Agencies	",
    ,
    "IBA	Industrias Bachoco SAB de CV	Food Products	",
    
    "IBCP	Independent Bank	Banks	",
    
    "IBER	Ibere Pharmaceuticals	Blank Check / SPAC	",
    
    "IBEX	IBEX Limited	Software	",
    
    "IBIO	iBio Inc	Biotechnology	",
    
    "IBKR	Interactive Brokers Group	Capital Markets	",
    
    "IBM	International Business Machines	IT Services	",
    
    "IBN	ICICI Bank	Banks	",
    
    "IBOC	International Bancshares	Banks	",
    
    "IBP	Installed Building Products	Household Durables	",
    
    "IBRX	ImmunityBio	Biotechnology	",
    
    "IBTX	Independent Bank Group	Banks	",
    
    "ICAD	iCAD Inc	Health Care Technology	",
    
    "ICCC	ImmuCell	Biotechnology	",
    
    "ICCH	ICC Holdings	Insurance	",
    
    "ICCM	IceCure Medical	Medical Devices	",
    
    "ICD	Independence Contract Drilling	Energy Equipment & Services	",
    
    "ICE	Intercontinental Exchange	Capital Markets	",
    
    "ICFI	ICF International	Professional Services	",
    
    "ICHR	Ichor Holdings	Semiconductors & Semiconductor Equipment	",
    
    "ICL	ICL Group	Chemicals	",
    
    "ICLK	iClick Interactive Asia Group	Media	",
    
    "ICLR	ICON plc	Life Sciences Tools & Services	",
    
    "ICMB	Investcorp Credit Management BDC	Capital Markets	",
    
    "ICNC	Iconic Sports Acquisition	Blank Check / SPAC	",
    
    "ICPT	Intercept Pharmaceuticals	Biotechnology	",
    
    "ICUI	ICU Medical	Health Care Equipment & Supplies	",
    
    "ICVX	Icosavax	Biotechnology	",
    
    "ID	    PARTS iD	Specialty Retail	",
    
    "IDA	IDACORP	Electric Utilities	",
    
    "IDAI	T Stamp	Software-Application	",
    
    "IDBA	IDEX Biometrics ASA	Software-Application	",
    
    "IDCC	InterDigital	Communications Equipment	",
    
    "IDEX	Ideanomics	Software	",
    
    "IDN	Intellicheck	Electronic Equipment Instruments & C	",
    
    "IDR	Idaho Strategic Resources	Metals & Mining	",
    
    "IDRA	Idera Pharmaceuticals	Biotechnology	",
    
    "IDT	IDT Corporation	Diversified Telecommunication Services	",
    
    "IDW	IDW Media Holdings	Publishing	",
    
    "IDXX	IDEXX Laboratories	Health Care Equipment & Supplies	",
    
    "IDYA	IDEAYA Biosciences	Biotechnology	",
    
    "IEA	Infrastructure & Energy Alternatives	Construction & Engineering	",
    
    "IEP	Icahn Enterprises	Industrial Conglomerates	",
    
    "IESC	IES Holdings	Construction & Engineering	",
    
    "IEX	IDEX Corporation	Machinery	",
    
    "IFBD	Infobird	Software-Application	",
    
    "IFF	International Flavors & Fragrances	Chemicals	",
    ,
    "IFIN	InFinT Acquisition	Blank Check / SPAC	",
    
    "IFRX	InflaRx	Biotechnology	",
    
    "IFS	Intercorp Financial Services	Banks-Regional	",
    
    "IGAC	IG Acquisition	Blank Check / SPAC	",
    
    "IGC	India Globalization Capital	Trading Companies & Distributors	",
    
    "IGIC	International General Insurance Holdings	Insurance-Diversified	",
    
    "IGMS	IGM Biosciences	Biotechnology	",
    
    "IGNY	Ignyte Acquisition	Blank Check / SPAC	",
    
    "IGT	International Game Technology	Gambling	",
    
    "IGTA	Inception Growth Acquisition	Blank Check / SPAC	",
    
    "IH	    iHuman	Education & Training Services	",
    
    "IHG	InterContinental Hotels Group	Hotels Restaurants & Leisure	",
    
    "IHRT	iHeartMedia	Media	",
    
    "IHS	IHS Holding	Telecom Services	",
    
    "IHT	InnSuites Hospitality Trust	Equity Real Estate Investment Trusts 	",
    
    "III	Information Services Group	IT Services	",
    
    "IIII	Insu Acquisition III	Blank Check / SPAC	",
    
    "IIIN	Insteel Industries	Building Products	",
    
    "IIIV	i Verticals	IT Services	",
    
    "IIN	IntriCon	Health Care Equipment & Supplies	",
    
    "IINN	Inspira Technologies Oxy BHN	Medical Devices	",
    
    "IIPR	Innovative Industrial Properties	Equity Real Estate Investment Trusts 	",
    ,
    "IIVI	II-VI	Electronic Equipment Instruments & C	",
    
    "IKNA	Ikena Oncology	Biotechnology	",
    
    "IKT	Inhibikase Therapeutics	Biotechnology	",
    
    "ILMN	Illumina	Life Sciences Tools & Services	",
    
    "ILPT	Industrial Logistics Properties Trust	Equity Real Estate Investment Trusts 	",
    
    "IMAB	I-Mab	Biotechnology	",
    
    "IMAC	IMAC Holdings	Health Care Providers & Services	",
    
    "IMAQ	International Media Acquisition	Blank Check / SPAC	",
    
    "IMAX	IMAX Corporation	Entertainment	",
    
    "IMBI	iMedia Brands	Internet & Direct Marketing Retail	",
    
    "IMCC	IM Cannabis	Drug Manufacturers-Specialty & Generic	",
    
    "IMCR	Immunocore Holdings	Biotechnology	",
    
    "IMGN	ImmunoGen	Biotechnology	",
    
    "IMGO	Imago BioSciences	Biotechnology	",
    
    "IMH	Impac Mortgage Holdings	Thrifts & Mortgage Finance	",
    
    "IMKTA	Ingles Markets	Food & Staples Retailing	",
    
    "IMMP	Immutep	Biotechnology	",
    
    "IMMR	Immersion	Technology Hardware Storage & Periph	",
    
    "IMMX	Immix Biopharma	Biotechnology	",
    
    "IMNM	Immunome	Biotechnology	",
    
    "IMO	Imperial Oil	Oil Gas & Consumable Fuels	",
    
    "IMOS	ChipMOS Technologies	Semiconductors & Semiconductor Equipment	",
    
    "IMPL	Impel NeuroPharma	Biotechnology	",
    
    "IMPP	Imperial Petroleum	Oil & Gas E&P	",
    
    "IMPX	AEA-Bridges Impact	Shell Companies	",
    
    "IMRA	IMARA	Biotechnology	",
    
    "IMRN	Immuron	Biotechnology	",
    
    "IMRX	Immuneering	Biotechnology	",
    
    "IMTE	Integrated Media Technology	Electronic Equipment Instruments & C	",
    
    "IMTX	Immatics	Biotechnology	",
    
    "IMUX	Immunic	Biotechnology	",
    
    "IMV	IMV Inc	Biotechnology	",
    
    "IMVT	Immunovant	Biotechnology	",
    
    "IMXI	International Money Express	IT Services	",
    
    "INAB	INbio	Biotechnology	",
    
    "INAQ	Insight Acquisition	Blank Check / SPAC	",
    
    "INBK	First Internet Bancorp	Banks	",
    
    "INBX	Inhibrx	Biotechnology	",
    
    "INCR	Intercure	Drug Manufacturers-Specialty & Generic	",
    
    "INCY	Incyte	Biotechnology	",
    
    "INDB	Independent Bank	Banks	",
    
    "INDI	indie Semiconductor	Semiconductor Equipment & Materials	",
    
    "INDO	Indonesia Energy	Oil Gas & Consumable Fuels	",
    
    "INDP	Indaptus Therapeutics	Biotechnology	",
    
    "INDT	INDUS Realty Trust	Equity Real Estate Investment Trusts 	",
    
    "INFA	Informatica	Software	",
    
    "INFI	Infinity Pharmaceuticals	Biotechnology	",
    
    "INFN	Infinera	Communications Equipment	",
    
    "INFU	InfuSystem Holdings	Health Care Providers & Services	",
    
    "INFY	Infosys	IT Services	",
    
    "ING	ING Group	Banks	",
    
    "INGN	Inogen	Health Care Equipment & Supplies	",
    
    "INGR	Ingredion	Food Products	",
    
    "INKA	KludeIn I Acquisition	Blank Check / SPAC	",
    
    "INKT	MiNK Therapeutics	Biotechnology	",
    
    "INM	InMed Pharmaceuticals	Biotechnology	",
    
    "INMB	Inmune Bio	Biotechnology	",
    
    "INMD	InMode	Health Care Equipment & Supplies	",
    
    "INN	Summit Hotel Properties	Equity Real Estate Investment Trusts 	",
    
    "INNV	Innovage Holding	Medical Care Facilities	",
    
    "INO	Inovio Pharmaceuticals	Biotechnology	",
    
    "INOD	Innodata	IT Services	",
    
    "INPX	Inpixon	IT Services	",
    
    "INSE	Inspired Entertainment	Hotels Restaurants & Leisure	",
    
    "INSG	Inseego	Communications Equipment	",
    
    "INSM	Insmed	Biotechnology	",
    ,
    "INSP	Inspire Medical Systems	Health Care Technology	",
    
    "INST	Instructure Holdings	Software-Application	",
    
    "INSW	International Seaways	Oil Gas & Consumable Fuels	",
    
    "INT	World Fuel Services	Oil Gas & Consumable Fuels	",
    
    "INTA	Intapp	Software-Application	",
    ,
    "INTC	Intel	Semiconductors & Semiconductor Equipment	",
    
    "INTE	Integral Acquisition 	Blank Check / SPAC	",
    
    "INTG	The InterGroup Corporation	Real Estate Management & Development	",
    
    "INTT	inTEST	Semiconductors & Semiconductor Equipment	",
    
    "INTU	Intuit	Software	",
    
    "INTZ	Intrusion	Software	",
    
    "INUV	Inuvo	Software	",
    
    "INVA	Innoviva	Pharmaceuticals	",
    
    "INVE	Identiv	Electronic Equipment Instruments & C	",
    
    "INVH	Invitation Homes	Equity Real Estate Investment Trusts 	",
    
    "INVO	INVO Bioscience	Health Care Equipment & Supplies	",
    
    "INVZ	Innoviz Technologies	Auto Parts	",
    
    "INZY	Inozyme Pharma	Biotechnology	",
    
    "IO	    ION Geophysical	Energy Equipment & Services	",
    
    "IOAC	Innovative International Acquisition	Blank Check / SPAC	",
    
    "IOBT	IO Biotech	Biotechnology	",
    
    "IONM	Assure Holdings	Medical Care Facilities	",
    
    "IONQ	IonQ Inc	Computer Hardware	",
    
    "IONS	Ionis Pharmaceuticals	Biotechnology	",
    
    "IOR	Income Opportunity Realty Investors	Thrifts & Mortgage Finance	",
    
    "IOSP	Innospec	Chemicals	",
    
    "IOT	Samsara	Software-Infrastructure	",
    
    "IOVA	Iovance Biotherapeutics	Biotechnology	",
    
    "IP	    International Paper Company	Containers & Packaging	",
    
    "IPA	ImmunoPrecise Antibodies	Biotechnology	",
    
    "IPAR	Inter Parfums	Personal Products	",
    
    "IPAX	Inflection Point Acquisition	Blank Check / SPAC	",
    
    "IPDN	Professional Diversity Network	Staffing & Employment Services	",
    
    "IPG	The Interpublic Group of Companies	Media	",
    
    "IPGP	IPG Photonics	Electronic Equipment Instruments & C	",
    
    "IPHA	Innate Pharma	Biotechnology	",
    
    "IPI	Intrepid Potash	Chemicals	",
    
    "IPOD	Social Capital Hedosophia Holdings IV	Blank Check / SPAC	",
    
    "IPOF	Social Capital Hedosophia Holdings VI	Blank Check / SPAC	",
    ,
    "IPSC	Century Therapeutics	Biotechnology	",
    
    "IPVA	InterPrivate II Acquisition	Blank Check / SPAC	",
    
    "IPVF	InterPrivate III Financial Partners	Blank Check / SPAC	",
    
    "IPVI	InterPrivate IV InfraTech Partners	Blank Check / SPAC	",
    
    "IPW	iPower	Internet Retail	",
    
    "IPWR	Ideal Power	Electrical Equipment	",
    
    "IQ	    iQIYI	Entertainment	",
    
    "IQMD	Intelligent Medicine Acquisition	Blank Check / SPAC	",
    
    "IQV	IQVIA Holdings	Life Sciences Tools & Services	",
    
    "IR	    Ingersoll Rand	Machinery	",
    
    "IRBT	iRobot	Household Durables	",
    
    "IRCP	IRSA Propiedades Comerciales	Real Estate Management & Development	",
    
    "IRDM	Iridium Communications	Diversified Telecommunication Services	",
    
    "IREN	Iris Energy	Capital Markets	",
    
    "IRIX	IRIDEX	Health Care Equipment & Supplies	",
    
    "IRM	Iron Mountain	Equity Real Estate Investment Trusts 	",
    
    "IRMD	IRadimed	Health Care Equipment & Supplies	",
    
    "IRNT	IronNet	Software-Infrastructure	",
    
    "IROQ	IF Bancorp	Thrifts & Mortgage Finance	",
    
    "IRRX	Integrated Rail & Resources Acquisition	Blank Check / SPAC	",
    
    "IRS	IRSA Inversiones y Representaciones	Real Estate Management & Development	",
    
    "IRT	Independence Realty Trust	Equity Real Estate Investment Trusts 	",
    
    "IRTC	iRhythm Technologies	Health Care Equipment & Supplies	",
    
    "IRWD	Ironwood Pharmaceuticals	Biotechnology	",
    
    "IS	    ironSource	Software-Application	",
    
    "ISAA	Iron Spark I	Blank Check / SPAC	",
    
    "ISDR	Issuer Direct	Software	",
    
    "ISEE	IVERIC bio	Biotechnology	",
    
    "ISIG	Insignia Systems	Media	",
    
    "ISLE	Isleworth Healthcare Acquisition	Blank Check / SPAC	",
    
    "ISO	IsoPlexis	Medical Devices	",
    
    "ISPC	iSpecimen	Diagnostics & Research	",
    
    "ISPO	Inspirato	Leisure	",
    
    "ISR	IsoRay	Biotechnology	",
    
    "ISRG	Intuitive Surgical	Health Care Equipment & Supplies	",
    
    "ISSC	Innovative Solutions & Support	Aerospace & Defense	",
    
    "ISTR	Investar Holding	Banks	",
    
    "ISUN	iSun Inc	Solar	",
    
    "IT	    Gartner	IT Services	",
    
    "ITAQ	Industrial Tech Acquisitions II	Blank Check / SPAC	",
    
    "ITCB	Itau Corpbanca	Banks	",
    
    "ITCI	Intra-Cellular Therapies	Pharmaceuticals	",
    
    "ITGR	Integer Holdings	Health Care Equipment & Supplies	",
    ,
    "ITHX	ITHAX Acquisition	Blank Check / SPAC	",
    
    "ITI	Iteris	Electronic Equipment Instruments & C	",
    
    "ITIC	Investors Title Company	Insurance	",
    
    "ITOS	iTeos Therapeutics	Biotechnology	",
    
    "ITP	IT Tech Packaging	Paper & Forest Products	",
    
    "ITQ	Itiquira Acquisition	Blank Check / SPAC	",
    
    "ITRG	Integra Resources	Other Precious Metals & Mining	",
    
    "ITRI	Itron	Electronic Equipment Instruments & C	",
    
    "ITRM	Iterum Therapeutics	Pharmaceuticals	",
    
    "ITRN	Ituran Location & Control	Communications Equipment	",
    
    "ITT	ITT Inc	Machinery	",
    
    "ITUB	Itau Unibanco Holding	Banks	",
    
    "ITW	Illinois Tool Works	Machinery	",
    ,
    "IVA	Inventiva	Biotechnology	",
    
    "IVAC	Intevac	Technology Hardware Storage & Periph	",
    
    "IVC	Invacare	Health Care Equipment & Supplies	",
    
    "IVCA	Investcorp Acquisition	Blank Check / SPAC	",
    
    "IVCB	Investcorp Europe Acquisition Corp I	Blank Check / SPAC	",
    
    "IVCP	Swiftmerge Acquisition	Blank Check / SPAC	",
    
    "IVR	Invesco Mortgage Capital	Mortgage Real Estate Investment Trust	",
    
    "IVT	InvenTrust Properties	REIT-Retail	",
    
    "IVZ	Invesco	Capital Markets	",
    
    "IX	    O RIX Corporation	Diversified Financial Services	",
    
    "IXAQ	IX Acquisition	Blank Check / SPAC	",
    
    "IXHL	Incannex Healthcare	Drug Manufacturers-Specialty & Generic	",
    
    "IZEA	IZEA Worldwide	Interactive Media & Services	",
    
    "J	    Jacobs Engineering Group	Construction & Engineering	",
    ,
    "JACK	Jack in the Box	Hotels Restaurants & Leisure	",
    
    "JAGX	Jaguar Health	Pharmaceuticals	",
    
    "JAKK	JAKKS Pacific	Leisure Products	",
    
    "JAMF	Jamf Holding	Software	",
    
    "JAN	JanOne	Commercial Services & Supplies	",
    
    "JANX	Janux Therapeutics	Biotechnology	",
    
    "JAQC	Jupiter Acquisition	Blank Check / SPAC	",
    
    "JATT	JATT Acquisition	Blank Check / SPAC	",
    
    "JAZZ	Jazz Pharmaceuticals	Pharmaceuticals	",
    
    "JBGS	JBG SMITH Properties	Equity Real Estate Investment Trusts 	",
    
    "JBHT	JB Hunt Transport Services	Road & Rail	",
    
    "JBI	Janus International Group	Building Products & Equipment	",
    
    "JBL	Jabil	Electronic Equipment Instruments & C	",
    ,
    "JBLU	JetBlue Airways	Airlines	",
    
    "JBSS	John B Sanfilippo & Son	Food Products	",
    
    "JBT	John Bean Technologies	Machinery	",
    
    "JCI	Johnson Controls International	Building Products	",
    
    "JCIC	Jack Creek Investment	Blank Check / SPAC	",
    
    "JCSE	JE Cleantech Holdings	Specialty Industrial Machinery	",
    
    "JCTCF	Jewett-Cameron Trading Company	Building Products	",
    
    "JD	    JDcom	Internet & Direct Marketing Retail	",
    
    "JEF	Jefferies Financial Group	Diversified Financial Services	",
    
    "JELD	JELD-WEN Holding	Building Products	",
    
    "JFIN	Jiayin Group	Consumer Finance	",
    
    "JFU	F Inc	Interactive Media & Services	",
    
    "JG	    Aurora Mobile	Software	",
    
    "JGGC	Jaguar Global Growth Corporation I	Blank Check / SPAC	",
    
    "JHG	Janus Henderson Group	Capital Markets	",
    
    "JHX	James Hardie Industries	Construction Materials	",
    
    "JILL	JJill	Specialty Retail	",
    
    "JJSF	J & J Snack Foods	Food Products	",
    
    "JKHY	Jack Henry & Associates	IT Services	",
    
    "JKS	JinkoSolar Holding Company	Semiconductors & Semiconductor Equipment	",
    
    "JLL	Jones Lang LaSalle	Real Estate Management & Development	",
    ,
    "JMAC	Jade Mountain Acquisition	Blank Check / SPAC	",
    
    "JMIA	Jumia Technologies AG	Internet & Direct Marketing Retail	",
    
    "JMSB	John Marshall Bancorp	Banks	",
    
    "JNCE	Jounce Therapeutics	Biotechnology	",
    
    "JNJ	Johnson & Johnson	Pharmaceuticals	",
    ,
    "JNPR	Juniper Networks	Communications Equipment	",
    
    "JOAN	JOANN	Specialty Retail	",
    
    "JOB	GEE Group	Professional Services	",
    
    "JOBY	Joby Aviation	Airports & Air Services	",
    
    "JOE	The St Joe Company	Real Estate Management & Development	",
    
    "JOFF	JOFF Fintech Acquisition	Blank Check / SPAC	",
    
    "JOUT	Johnson Outdoors	Leisure Products	",
    
    "JP	    Jupai Holdings	Capital Markets	",
    
    "JPM	JPMorgan Chase & Co	Banks	",
    
    "JRSH	Jerash Holdings (US)	Textiles Apparel & Luxury Goods	",
    
    "JRVR	James River Group Holdings	Insurance	",
    
    "JSPR	Jasper Therapeutics	Biotechnology	",
    
    "JT	    Jianpu Technology	Consumer Finance	",
    
    "JUGG	JAWS Juggernaut Acquisition	Blank Check / SPAC	",
    
    "JUN	Juniper II	Blank Check / SPAC	",
    
    "JUPW	Jupiter Wellness	Drug Manufacturers-Specialty & Generic	",
    
    "JVA	Coffee Holding Co	Food Products	",
    
    "JWAC	Jupiter Wellness Acquisition	Blank Check / SPAC	",
    
    "JWEL	Jowell Global	Internet Retail	",
    
    "JWN	Nordstrom	Multiline Retail	",
    
    "JWSM	Jaws Mustang Acquisition	Blank Check / SPAC	",
    
    "JXN	Jackson Financial	Asset Management	",
    
    "JYAC	Jiya Acquisition	Blank Check / SPAC	",
    
    "JYNT	The Joint	Health Care Providers & Services	",
    
    "JZXN	Jiuzi Holdings	Auto & Truck Dealerships	",
    
    "K	    Kellogg Company	Food Products	",
    
    "KACL	Kairous Acquisition	Blank Check / SPAC	",
    
    "KAHC	KKR Acquisition Holdings I	Blank Check / SPAC	",
    
    "KAI	Kadant	Machinery	",
    
    "KAII	Kismet Acquisition Two	Blank Check / SPAC	",
    
    "KAIR	Kairos Acquisition	Blank Check / SPAC	",
    
    "KALA	Kala Pharmaceuticals	Pharmaceuticals	",
    
    "KALU	Kaiser Aluminum	Metals & Mining	",
    
    "KALV	KalVista Pharmaceuticals	Biotechnology	",
    
    "KAMN	Kaman	Trading Companies & Distributors	",
    
    "KAR	KAR Auction Services	Commercial Services & Supplies	",
    
    "KARO	Karooooo	Software-Application	",
    
    "KAVL	Kaival Brands Innovations Group	Tobacco	",
    
    "KB	    KB Financial Group	Banks	",
    
    "KBAL	Kimball International	Commercial Services & Supplies	",
    
    "KBH	KB Home	Household Durables	",
    
    "KBNT	Kubient	Software-Application	",
    
    "KBR	KBR Inc	IT Services	",
    
    "KC	    Kingsoft Cloud Holdings	IT Services	",
    
    "KCAC	Kensington Capital Acquisition IV	Blank Check / SPAC	",
    
    "KCGI	Kensington Capital Acquisition V	Blank Check / SPAC	",
    
    "KD	    Kyndryl Holdings	Information Technology Services	",
    
    "KDNY	Chinook Therapeutics	Biotechnology	",
    
    "KDP	Keurig Dr Pepper	Beverages	",
    
    "KE	    Kimball Electronics	Electronic Equipment Instruments & C	",
    
    "KELYA	Kelly Services	Professional Services	",
    
    "KELYB	Kelly Services	Professional Services	",
    
    "KEN	Kenon Holdings	Independent Power and Renewable Elect	",
    
    "KEP	Korea Electric Power	Electric Utilities	",
    
    "KEQU	Kewaunee Scientific	Health Care Equipment & Supplies	",
    
    "KERN	Akerna	Professional Services	",
    
    "KEX	Kirby	Marine	",
    
    "KEY	KeyCorp	Banks	",
    
    "KEYS	Keysight Technologies	Electronic Equipment Instruments & C	",
    
    "KFFB	Kentucky First Federal Bancorp	Thrifts & Mortgage Finance	",
    
    "KFRC	Kforce	Professional Services	",
    
    "KFS	Kingsway Financial Services	Insurance	",
    
    "KFY	Korn Ferry	Professional Services	",
    
    "KGC	Kinross Gold	Metals & Mining	",
    
    "KHC	The Kraft Heinz Company	Food Products	",
    
    "KIDS	OrthoPediatrics	Health Care Equipment & Supplies	",
    
    "KIII	Kismet Acquisition Three	Blank Check / SPAC	",
    
    "KIM	Kimco Realty	Equity Real Estate Investment Trusts 	",
    
    "KIND	Nextdoor Holdings	Internet Content & Information	",
    
    "KINS	Kingstone Companies	Insurance	",
    
    "KINZ	Kins Technology Group	Blank Check / SPAC	",
    
    "KIQ	Kelso Technologies	Machinery	",
    
    "KIRK	Kirkland's	Specialty Retail	",
    
    "KKR	KKR & Co	Capital Markets	",
    
    "KLAC	KLA Corporation	Semiconductors & Semiconductor Equipment	",
    
    "KLAQ	KL Acquisition	Blank Check / SPAC	",
    
    "KLIC	Kulicke & Soffa Industries	Semiconductors & Semiconductor Equipment	",
    ,
    "KLR	Kaleyra	Software	",
    
    "KLTR	Kaltura	Software-Infrastructure	",
    
    "KLXE	KLX Energy Services Holdings	Energy Equipment & Services	",
    
    "KMB	Kimberly-Clark	Household Products	",
    
    "KMDA	Kamada	Biotechnology	",
    
    "KMI	Kinder Morgan	Oil Gas & Consumable Fuels	",
    
    "KMPH	KemPharm	Pharmaceuticals	",
    
    "KMPR	Kemper	Insurance	",
    
    "KMT	Kennametal	Machinery	",
    
    "KMX	CarMax	Specialty Retail	",
    ,
    "KN	    Knowles	Electronic Equipment Instruments & C	",
    
    "KNBE	KnowBe	Software-Infrastructure	",
    
    "KNDI	Kandi Technologies Group	Auto Components	",
    
    "KNOP	KNOT Offshore Partners	Oil Gas & Consumable Fuels	",
    
    "KNSA	Kiniksa Pharmaceuticals	Biotechnology	",
    
    "KNSL	Kinsale Capital Group	Insurance	",
    
    "KNSW	KnightSwan Acquisition	Blank Check / SPAC	",
    
    "KNTE	Kinnate Biopharma	Biotechnology	",
    
    "KNTK	Kinetik Holdings	Oil Gas & Consumable Fuels	",
    
    "KNX	Knight-Swift Transportation Holdings	Road & Rail	",
    
    "KO	    The Coca-Cola Company	Beverages	",
    ,
    "KOD	Kodiak Sciences	Biotechnology	",
    
    "KODK	Eastman Kodak Company	Technology Hardware Storage & Periph	",
    
    "KOF	Coca-Cola Femsa	Beverages	",
    
    "KOP	Koppers Holdings	Chemicals	",
    
    "KOPN	Kopin	Semiconductors & Semiconductor Equipment	",
    
    "KORE	KORE Group Holdings	Telecom Services	",
    
    "KOS	Kosmos Energy	Oil Gas & Consumable Fuels	",
    
    "KOSS	Koss Corporation	Household Durables	",
    
    "KPLT	Katapult Holdings	Software-Infrastructure	",
    
    "KPRX	Kiora Pharmaceuticals	Biotechnology	",
    
    "KPTI	Karyopharm Therapeutics	Biotechnology	",
    
    "KR	    The Kroger Company	Food & Staples Retailing	",
    
    "KRBP	Kiromic BioPharma	Biotechnology	",
    
    "KRC	Kilroy Realty	Equity Real Estate Investment Trusts 	",
    
    "KREF	KKR Real Estate Finance Trust	Mortgage Real Estate Investment Trust	",
    
    "KRG	Kite Realty Group Trust	Equity Real Estate Investment Trusts 	",
    
    "KRKR	Kr Holdings	Interactive Media & Services	",
    
    "KRMD	Repro Med Systems	Health Care Equipment & Supplies	",
    
    "KRNL	Kernel Group Holdings	Blank Check / SPAC	",
    
    "KRNT	Kornit Digital	Machinery	",
    
    "KRNY	Kearny Financial	Thrifts & Mortgage Finance	",
    
    "KRO	Kronos Worldwide	Chemicals	",
    
    "KRON	Kronos Bio	Biotechnology	",
    
    "KROS	Keros Therapeutics	Biotechnology	",
    
    "KRP	Kimbell Royalty Partners	Oil Gas & Consumable Fuels	",
    
    "KRT	Karat Packaging	Packaging & Containers	",
    
    "KRTX	Karuna Therapeutics	Biotechnology	",
    
    "KRUS	Kura Sushi USA	Hotels Restaurants & Leisure	",
    
    "KRYS	Krystal Biotech	Biotechnology	",
    
    "KSCP	Knightscope	Security & Protection Services	",
    
    "KSI	Kadem Sustainable Impact	Blank Check / SPAC	",
    
    "KSPN	Kaspien Holdings	Specialty Retail	",
    
    "KSS	Kohl's	Multiline Retail	",
    
    "KT	    KT Corporation	Diversified Telecommunication Services	",
    
    "KTB	Kontoor Brands	Textiles Apparel & Luxury Goods	",
    
    "KTCC	Key Tronic	Electronic Equipment Instruments & C	",
    
    "KTOS	Kratos Defense & Security Solutions	Aerospace & Defense	",
    
    "KTRA	Kintara Therapeutics	Biotechnology	",
    
    "KTTA	Pasithea Therapeutics	Biotechnology	",
    
    "KUKE	Kuke Music Holding	Entertainment	",
    
    "KULR	KULR Technology Group	Electronic Components	",
    
    "KURA	Kura Oncology	Biotechnology	",
    
    "KVHI	KVH Industries	Communications Equipment	",
    
    "KVSA	Khosla Ventures Acquisition Co	Blank Check / SPAC	",
    
    "KVSC	Khosla Ventures Acquisition Co III	Blank Check / SPAC	",
    
    "KW	    Kennedy-Wilson Holdings	Real Estate Management & Development	",
    
    "KWAC	Kingswood Acquisition	Blank Check / SPAC	",
    
    "KWR	Quaker Chemical	Chemicals	",
    
    "KXIN	Kaixin Auto Holdings	Specialty Retail	",
    
    "KYCH	Keyarch Acquisition	Blank Check / SPAC	",
    
    "KYMR	Kymera Therapeutics	Biotechnology	",
    
    "KZIA	Kazia Therapeutics	Biotechnology	",
    
    "KZR	Kezar Life Sciences	Biotechnology	",
    
    "L	    Loews	Insurance	",
    
    "LAAA	Lakeshore Acquisition I	Blank Check / SPAC	",
    
    "LAB	Standard BioTools	Life Sciences Tools & Services	",
    
    "LABP	Landos Biopharma	Biotechnology	",
    
    "LAC	Lithium Americas	Metals & Mining	",
    
    "LAD	Lithia Motors	Specialty Retail	",
    
    "LADR	Ladder Capital	Mortgage Real Estate Investment Trust	",
    
    "LAKE	Lakeland Industries	Textiles Apparel & Luxury Goods	",
    
    "LAMR	Lamar Advertising Company	Equity Real Estate Investment Trusts 	",
    ,
    "LANC	Lancaster Colony	Food Products	",
    
    "LAND	Gladstone Land	Equity Real Estate Investment Trusts 	",
    
    "LARK	Landmark Bancorp	Banks	",
    
    "LASR	nLIGHT	Electronic Equipment Instruments & C	",
    
    "LATG	LatAmGrowth SPAC	Blank Check / SPAC	",
    
    "LAUR	Laureate Education	Diversified Consumer Services	",
    
    "LAW	CS Disco	Software-Application	",
    
    "LAX	i Acquisition 	Blank Check / SPAC	",
    
    "LAZ	Lazard	Capital Markets	",
    
    "LAZR	Luminar Technologies	Auto Components	",
    
    "LAZY	Lazydays Holdings	Specialty Retail	",
    
    "LBAI	Lakeland Bancorp	Banks	",
    
    "LBBB	Lakeshore Acquisition II	Blank Check / SPAC	",
    
    "LBC	Luther Burbank	Thrifts & Mortgage Finance	",
    
    "LBPH	Longboard Pharmaceuticals	Biotechnology	",
    
    "LBPS	D pharma	Biotechnology	",
    
    "LBRDA	Liberty Broadband	Media	",
    
    "LBRDK	Liberty Broadband	Media	",
    
    "LBRT	Liberty Oilfield Services	Energy Equipment & Services	",
    
    "LBTYA	Liberty Global	Media	",
    
    "LBTYB	Liberty Global	Diversified Telecommunication Services	",
    ,
    "LBTYK	Liberty Global	Media	",
    
    "LC	    LendingClub	Consumer Finance	",
    
    "LCA	Landcadia Holdings IV	Blank Check / SPAC	",
    
    "LCAA	L Catterton Asia Acquisition	Blank Check / SPAC	",
    
    "LCAP	Lionheart Acquisition II	Blank Check / SPAC	",
    
    "LCFY	Locafy	Internet Content & Information	",
    
    "LCI	Lannett Company	Pharmaceuticals	",
    
    "LCID	Lucid Group	Auto Manufacturers	",
    
    "LCII	LCI Industries	Auto Components	",
    
    "LCNB	LCNB Corporation	Banks	",
    
    "LCTX	Lineage Cell Therapeutics	Biotechnology	",
    
    "LCUT	Lifetime Brands	Household Durables	",
    
    "LCW	Learn CW Investment	Blank Check / SPAC	",
    
    "LDHA	LDH Growth I	Blank Check / SPAC	",
    
    "LDI	loanDepot	Mortgage Finance	",
    
    "LDOS	Leidos Holdings	IT Services	",
    
    "LE	    Lands' End	Internet & Direct Marketing Retail	",
    
    "LEA	Lear Corporation	Auto Components	",
    
    "LEAP	Ribbit LEAP	Shell Companies	",
    
    "LECO	Lincoln Electric Holdings	Machinery	",
    
    "LEDS	SemiLEDs	Semiconductors & Semiconductor Equipment	",
    
    "LEE	Lee Enterprises	Media	",
    
    "LEG	Leggett & Platt	Household Durables	",
    
    "LEGA	Lead Edge Growth Opportunities	Blank Check / SPAC	",
    
    "LEGH	Legacy Housing	Household Durables	",
    
    "LEGN	Legend Biotech	Biotechnology	",
    
    "LEJU	Leju Holdings	Internet & Direct Marketing Retail	",
    
    "LEN	Lennar	Household Durables	",
    ,
    "LENB	Lennar	Construction & Engineering	",
    ,
    "LESL	Leslie's	Home Improvement Retail	",
    
    "LEU	Centrus Energy	Oil Gas & Consumable Fuels	",
    
    "LEV	The Lion Electric Company	Farm & Heavy Construction Machinery	",
    
    "LEVI	Levi Strauss & Co	Textiles Apparel & Luxury Goods	",
    
    "LEXX	Lexaria Bioscience	Biotechnology	",
    
    "LFAC	LF Capital Acquisition II	Blank Check / SPAC	",
    
    "LFC	China Life Insurance Company	Insurance	",
    
    "LFG	Archaea Energy	Utilities-Renewable	",
    
    "LFLY	Leafly Holdings	Pharmaceutical Retailers	",
    
    "LFMD	LifeMD	Pharmaceutical Retailers	",
    
    "LFST	Lifestance Health Group	Medical Care Facilities	",
    
    "LFT	Lument Finance Trust	REIT-Mortgage	",
    
    "LFTR	Lefteris Acquisition	Blank Check / SPAC	",
    
    "LFUS	Littelfuse	Electronic Equipment Instruments & C	",
    
    "LFVN	LifeVantage	Personal Products	",
    
    "LGAC	Lazard Growth Acquisition I	Blank Check / SPAC	",
    
    "LGFA	Lions Gate Entertainment	Entertainment	",
    
    "LGFB	Lions Gate Entertainment	Entertainment	",
    ,
    "LGHL	Lion Group Holding	Capital Markets	",
    
    "LGIH	LGI Homes	Household Durables	",
    
    "LGL	LGL Group	Electronic Equipment Instruments & C	",
    
    "LGMK	LogicMark	Security & Protection Services	",
    
    "LGND	Ligand Pharmaceuticals	Biotechnology	",
    
    "LGO	Largo	Other Industrial Metals & Mining	",
    
    "LGST	Semper Paratus Acquisition	Blank Check / SPAC	",
    
    "LGTO	Legato Merger II	Blank Check / SPAC	",
    
    "LGV	Longview Acquisition II	Blank Check / SPAC	",
    
    "LGVC	LAMF Global Ventures I	Blank Check / SPAC	",
    
    "LGVN	Longeveron	Biotechnology	",
    
    "LH	    Laboratory Corporation of America Holdings	Health Care Providers & Services	",
    
    "LHAA	Lerer Hippeau Acquisition	Blank Check / SPAC	",
    
    "LHC	Leo Holdings II	Blank Check / SPAC	",
    
    "LHCG	LHC Group	Health Care Providers & Services	",
    
    "LHDX	Lucira Health	Medical Devices	",
    
    "LHX	LHarris Technologies	Aerospace & Defense	",
    
    "LI	Li  Auto	Automobiles	",
    
    "LIAN	LianBio	Biotechnology	",
    
    "LIBY	Liberty Resources Acquisition	Blank Check / SPAC	",
    
    "LICY	Li-Cycle Holdings	",
    
    "LIDR	AEye Inc	Auto Parts	",
    
    "LIFE	aTyr Pharma	Biotechnology	",
    
    "LII	Lennox International	Building Products	",
    
    "LILA	Liberty Latin America	Diversified Telecommunication Services	",
    
    "LILAK	Liberty Latin America	Media	",
    
    "LILM	Lilium	Aerospace & Defense	",
    
    "LIN	Linde	Chemicals	",
    
    "LINC	Lincoln Educational Services	Diversified Consumer Services	",
    
    "LIND	Lindblad Expeditions Holdings	Hotels Restaurants & Leisure	",
    
    "LINK	Interlink Electronics	Electronic Equipment Instruments & C	",
    
    "LION	Lionheart III	Blank Check / SPAC	",
    
    "LIQT	LiqTech International	Machinery	",
    
    "LITB	LightInTheBox Holding Co	Internet & Direct Marketing Retail	",
    
    "LITE	Lumentum Holdings	Communications Equipment	",
    
    "LITM	Snow Lake Resources	Other Industrial Metals & Mining	",
    
    "LITT	Logistics Innovation Technologies	Shell Companies	",
    
    "LIVB	LIV Capital Acquisition II	Blank Check / SPAC	",
    
    "LIVE	Live Ventures	Household Durables	",
    
    "LIVN	LivaNova	Health Care Equipment & Supplies	",
    
    "LIXT	Lixte Biotechnology Holdings	Biotechnology	",
    
    "LIZI	Lizhi	Internet Content & Information	",
    
    "LJAQ	LightJump Acquisition	Blank Check / SPAC	",
    
    "LJPC	La Jolla Pharmaceutical Company	Biotechnology	",
    
    "LKCO	Luokung Technology	Interactive Media & Services	",
    
    "LKFN	Lakeland Financial	Banks	",
    
    "LKQ	LKQ Corporation	Distributors	",
    
    "LL	    Lumber Liquidators Holdings	Specialty Retail	",
    
    "LLAP	Terran Orbital	Aerospace & Defense	",
    
    "LLL	JX Luxventure	Apparel Manufacturing	",
    
    "LLNW	Limelight Networks	IT Services	",
    
    "LLY	Eli Lilly and Company	Pharmaceuticals	",
    
    "LMACA	Liberty Media Acquisition	Blank Check / SPAC	",
    
    "LMAO	LMF Acquisition Opportunities	Blank Check / SPAC	",
    
    "LMAT	LeMaitre Vascular	Health Care Equipment & Supplies	",
    
    "LMB	Limbach Holdings	Construction & Engineering	",
    
    "LMDX	LumiraDx	Diagnostics & Research	",
    
    "LMFA	LM Funding America	Diversified Financial Services	",
    
    "LMND	Lemonade	Insurance	",
    ,
    "LMNL	Liminal BioSciences	Biotechnology	",
    
    "LMNR	Limoneira Company	Food Products	",
    
    "LMPX	LMP Automotive Holdings	Specialty Retail	",
    
    "LMST	Limestone Bancorp	Banks	",
    
    "LMT	Lockheed Martin	Aerospace & Defense	",
    ,
    "LNC	Lincoln National	Insurance	",
    
    "LND	BrasilAgro Cia Brasileira de Propriedades Agricolas	Food Products	",
    
    "LNDC	Landec	Food Products	",
    
    "LNFA	L&F Acquisition	Blank Check / SPAC	",
    
    "LNG	Cheniere Energy	Oil Gas & Consumable Fuels	",
    
    "LNN	Lindsay	Machinery	",
    
    "LNSR	LENSAR	Medical Devices	",
    
    "LNT	Alliant Energy	Electric Utilities	",
    ,
    "LNTH	Lantheus Holdings	Health Care Equipment & Supplies	",
    
    "LNW	Light & Wonder	Hotels Restaurants & Leisure	",
    
    "LOAN	Manhattan Bridge Capital	Mortgage Real Estate Investment Trust	",
    
    "LOB	Live Oak Bancshares	Banks	",
    ,
    "LOCC	Live Oak Crestview Climate Acquisition	Blank Check / SPAC	",
    
    "LOCL	Local Bounti	Farm Products	",
    
    "LOCO	El Pollo Loco Holdings	Hotels Restaurants & Leisure	",
    
    "LODE	Comstock Mining	Metals & Mining	",
    
    "LOGC	LogicBio Therapeutics	Biotechnology	",
    
    "LOGI	Logitech International	Technology Hardware Storage & Periph	",
    
    "LOKM	Live Oak Mobility Acquisition	Blank Check / SPAC	",
    
    "LOMA	Loma Negra Compania Industrial Argentina	Construction Materials	",
    
    "LOOP	Loop Industries	Chemicals	",
    
    "LOPE	Grand Canyon Education	Diversified Consumer Services	",
    
    "LOTZ	CarLotz	Auto & Truck Dealerships	",
    
    "LOV	Spark Networks SE	Interactive Media & Services	",
    
    "LOVE	The Lovesac Company	Household Durables	",
    
    "LOW	Lowe's Companies	Specialty Retail	",
    
    "LPCN	Lipocine	Pharmaceuticals	",
    
    "LPG	Dorian LPG	Oil Gas & Consumable Fuels	",
    
    "LPI	Laredo Petroleum	Oil Gas & Consumable Fuels	",
    
    "LPL	LG Display Co	Electronic Equipment Instruments & C	",
    
    "LPLA	LPL Financial Holdings	Capital Markets	",
    
    "LPRO	Open Lending	Capital Markets	",
    
    "LPSN	LivePerson	Software	",
    
    "LPTH	LightPath Technologies	Electronic Equipment Instruments & C	",
    
    "LPTX	Leap Therapeutics	Biotechnology	",
    
    "LPX	Louisiana-Pacific	Paper & Forest Products	",
    
    "LQDA	Liquidia	Pharmaceuticals	",
    
    "LQDT	Liquidity Services	Internet & Direct Marketing Retail	",
    
    "LRCX	Lam Research	Semiconductors & Semiconductor Equipment	",
    
    "LRFC	Logan Ridge Finance	Asset Management	",
    
    "LRMR	Larimar Therapeutics	Biotechnology	",
    
    "LRN	Stride	Diversified Consumer Services	",
    ,
    "LSBK	Lake Shore Bancorp	Thrifts & Mortgage Finance	",
    
    "LSCC	Lattice Semiconductor	Semiconductors & Semiconductor Equipment	",
    
    "LSEA	Landsea Homes	Real Estate-Development	",
    
    "LSF	Laird Superfood	Packaged Foods	",
    
    "LSI	Life Storage	Equity Real Estate Investment Trusts 	",
    
    "LSPD	Lightspeed Commerce	Software	",
    
    "LSPR	Larkspur Health Acquisition	Blank Check / SPAC	",
    
    "LSTR	Landstar System	Road & Rail	",
    
    "LTBR	Lightbridge	Professional Services	",
    
    "LTC	LTC Properties	Equity Real Estate Investment Trusts 	",
    
    "LTCH	Latch	Software-Application	",
    
    "LTH	Life Time Group Holdings	Leisure	",
    ,
    "LTHM	Livent	Chemicals	",
    
    "LTRN	Lantern Pharma	Biotechnology	",
    
    "LTRPA	Liberty TripAdvisor Holdings	Interactive Media & Services	",
    
    "LTRPB	Liberty TripAdvisor Holdings	Interactive Media & Services	",
    
    "LTRX	Lantronix	Communications Equipment	",
    
    "LTRY	Lotterycom	Gambling	",
    
    "LU	    Lufax Holding	Consumer Finance	",
    
    "LUB	Luby's	Hotels Restaurants & Leisure	",
    
    "LUCD	Lucid Diagnostics	Medical Devices	",
    
    "LULU	Lululemon Athletica	Textiles Apparel & Luxury Goods	",
    
    "LUMN	Lumen Technologies	Diversified Telecommunication Services	",
    ,
    "LUMO	Lumos Pharma	Biotechnology	",
    
    "LUNA	Luna Innovations	Electronic Equipment Instruments & C	",
    
    "LUNG	Pulmonx	Health Care Equipment & Supplies	",
    
    "LUV	Southwest Airlines Company	Airlines	",
    
    "LUXA	Lux Health Tech Acquisition	Blank Check / SPAC	",
    
    "LVAC	LAVA Medtech Acquisition	Blank Check / SPAC	",
    
    "LVLU	Lulu's Fashion Lounge Holdings	Apparel Retail	",
    
    "LVO	LiveOne	Entertainment	",
    
    "LVOX	LiveVox Holding	Software-Infrastructure	",
    
    "LVRA	Levere Holdings	Blank Check / SPAC	",
    
    "LVS	Las Vegas Sands	Hotels Restaurants & Leisure	",
    
    "LVTX	LAVA Therapeutics	Biotechnology	",
    
    "LW	    Lamb Weston Holdings	Food Products	",
    
    "LWAY	Lifeway Foods	Food Products	",
    
    "LWLG	Lightwave Logic	Chemicals	",
    
    "LX	    LexinFintech Holdings	Consumer Finance	",
    
    "LXEH	Lixiang Education Holding Co	Education & Training Services	",
    
    "LXFR	Luxfer Holdings	Machinery	",
    
    "LXP	Lexington Realty Trust	Equity Real Estate Investment Trusts 	",
    ,
    "LXRX	Lexicon Pharmaceuticals	Biotechnology	",
    
    "LXU	LSB Industries	Chemicals	",
    
    "LYB	LyondellBasell Industries NV	Chemicals	",
    ,
    "LYEL	Lyell Immunopharma	Biotechnology	",
    
    "LYFT	Lyft Inc	Road & Rail	",
    ,
    "LYG	Lloyds Banking Group	Banks	",
    
    "LYL	Dragon Victory International	Consumer Finance	",
    
    "LYLT	Loyalty Ventures	Software-Infrastructure	",
    
    "LYRA	Lyra Therapeutics	Biotechnology	",
    
    "LYTS	LSI Industries	Electrical Equipment	",
    
    "LYV	Live Nation Entertainment	Entertainment	",
    
    "LZ	    LegalZoomcom	Specialty Business Services	",
    
    "LZB	La-Z-Boy	Household Durables	",
    
    "M	    Macy's	Multiline Retail	",
    
    "MA	    Mastercard	IT Services	",
    
    "MAA	Mid-America Apartment Communities	Equity Real Estate Investment Trusts 	",
    
    "MAAQ	Mana Capital Acquisition	Blank Check / SPAC	",
    
    "MAC	The Macerich Company	Equity Real Estate Investment Trusts 	",
    
    "MACA	Moringa Acquisition	Blank Check / SPAC	",
    
    "MACC	Mission Advancement	Blank Check / SPAC	",
    
    "MACK	Merrimack Pharmaceuticals	Biotechnology	",
    
    "MAG	MAG Silver	Metals & Mining	",
    
    "MAIN	Main Street Capital	Capital Markets	",
    
    "MAN	ManpowerGroup	Professional Services	",
    
    "MANH	Manhattan Associates	Software	",
    
    "MANT	ManTech International	IT Services	",
    ,
    "MANU	Manchester United	Entertainment	",
    
    "MAPS	WM Technology	Software-Application	",
    
    "MAQC	Maquia Capital Acquisition	Blank Check / SPAC	",
    
    "MAR	Marriott International	Hotels Restaurants & Leisure	",
    
    "MARA	Marathon Digital Holdings	IT Services	",
    
    "MARK	Remark Holdings	Internet & Direct Marketing Retail	",
    
    "MARPS	Marine Petroleum Trust	Oil Gas & Consumable Fuels	",
    
    "MAS	Masco	Building Products	",
    
    "MASI	Masimo	Health Care Equipment & Supplies	",
    
    "MASS	 Devices	Medical Devices	",
    
    "MAT	Mattel	Leisure Products	",
    
    "MATW	Matthews International	Commercial Services & Supplies	",
    
    "MATX	Matson	Marine	",
    
    "MAX	MediaAlpha	Internet Content & Information	",
    
    "MAXN	Maxeon Solar Technologies	Semiconductors & Semiconductor Equipment	",
    
    "MAXR	Maxar Technologies	Aerospace & Defense	",
    
    "MAYS	JW Mays	Real Estate Management & Development	",
    
    "MBAC	M-Brigade Acquisition II	Blank Check / SPAC	",
    
    "MBCN	Middlefield Banc	Banks	",
    
    "MBI	MBIA Inc	Insurance	",
    
    "MBII	Marrone Bio Innovations	Chemicals	",
    
    "MBIN	Merchants Bancorp	Thrifts & Mortgage Finance	",
    
    "MBIO	Mustang Bio	Biotechnology	",
    
    "MBOT	Microbot Medical	Health Care Equipment & Supplies	",
    
    "MBRX	Moleculin Biotech	Biotechnology	",
    
    "MBSC	M-Brigade Acquisition III	Blank Check / SPAC	",
    
    "MBT	Mobile TeleSystems PJSC		",
    ,
    "MBTC	Nocturne Acquisition	Blank Check / SPAC	",
    
    "MBUU	Malibu Boats	Leisure Products	",
    
    "MBWM	Mercantile Bank	Banks	",
    
    "MC	    Moelis & Company	Capital Markets	",
    
    "MCAA	Mountain & Co I Acquisition	Blank Check / SPAC	",
    
    "MCAC	Monterey Capital Acquisition	Blank Check / SPAC	",
    
    "MCAE	Mountain Crest Acquisition III	Blank Check / SPAC	",
    
    "MCAF	Mountain Crest Acquisition IV	Blank Check / SPAC	",
    
    "MCAG	Mountain Crest Acquisition V	Blank Check / SPAC	",
    
    "MCB	Metropolitan Bank Holding	Banks	",
    
    "MCBC	Macatawa Bank	Banks	",
    
    "MCBS	MetroCity Bankshares	Banks	",
    
    "MCD	McDonald's	Hotels Restaurants & Leisure	",
    
    "MCFT	MasterCraft Boat Holdings	Leisure Products	",
    
    "MCG	Membership Collective Group	Lodging	",
    
    "MCHP	Microchip Technology	Semiconductors & Semiconductor Equipment	",
    
    "MCHX	Marchex	Media	",
    
    "MCK	McKesson	Health Care Providers & Services	",
    
    "MCLD	mCloud Technologies	Software-Application	",
    
    "MCO	Moody's	Capital Markets	",
    
    "MCRB	Seres Therapeutics	Biotechnology	",
    
    "MCRI	Monarch Casino & Resort	Hotels Restaurants & Leisure	",
    
    "MCS	The Marcus Corporation	Entertainment	",
    
    "MCW	Mister Car Wash	Personal Services	",
    
    "MCY	Mercury General	Insurance	",
    
    "MD	    MEDNAX	Health Care Providers & Services	",
    
    "MDB	MongoDB	IT Services	",
    
    "MDC	MDC Holdings	Household Durables	",
    
    "MDGL	Madrigal Pharmaceuticals	Biotechnology	",
    
    "MDGS	Medigus	Health Care Equipment & Supplies	",
    
    "MDH	MDH Acquisition	Blank Check / SPAC	",
    
    "MDIA	Mediaco Holding	Broadcasting	",
    
    "MDJH	MDJM Ltd	Real Estate Management & Development	",
    
    "MDLZ	Mondelez International	Food Products	",
    
    "MDNA	Medicenna Therapeutics	Biotechnology	",
    
    "MDRR	Medalist Diversified REIT	Equity Real Estate Investment Trusts 	",
    
    "MDRX	Allscripts Healthcare Solutions	Health Care Technology	",
    
    "MDT	Medtronic plc	Health Care Equipment & Supplies	",
    
    "MDU	MDU Resources Group	Multi-Utilities	",
    
    "MDV	Modiv	REIT-Diversified	",
    
    "MDVL	MedAvail Holdings	Pharmaceutical Retailers	",
    
    "MDWD	MediWound	Pharmaceuticals	",
    
    "MDWT	Midwest Holding	Insurance-Life	",
    
    "MDXG	MiMedx Group	Biotechnology	",
    
    "MDXH	MDxHealth	Diagnostics & Research	",
    
    "ME	    andMe Holding Co	Diagnostics & Research	",
    
    "MEAC	Mercury Ecommerce Acquisition	Blank Check / SPAC	",
    
    "MEC	Mayville Engineering Company	Metals & Mining	",
    
    "MED	Medifast	Personal Products	",
    
    "MEDP	Medpace Holdings	Life Sciences Tools & Services	",
    
    "MEDS	TRxADE HEALTH	Pharmaceutical Retailers	",
    
    "MEG	Montrose Environmental Group	Media	",
    
    "MEI	Methode Electronics	Electronic Equipment Instruments & C	",
    
    "MEIP	MEI Pharma	Biotechnology	",
    
    "MEKA	MELI Kaszek Pioneer	Blank Check / SPAC	",
    
    "MELI	MercadoLibre	Internet & Direct Marketing Retail	",
    
    "MEOA	Minority Equality Opportunities Acquisition	Blank Check / SPAC	",
    
    "MEOH	Methanex	Chemicals	",
    
    "MERC	Mercer International	Paper & Forest Products	",
    
    "MESA	Mesa Air Group	Airlines	",
    
    "MESO	Mesoblast	Biotechnology	",
    
    "MET	MetLife	Insurance	",
    
    "METC	Ramaco Resources	Metals & Mining	",
    
    "METX	Meten Edtechx Education Group	Education & Training Services	",
    
    "MF	    Missfresh	Grocery Stores	",
    
    "MFA	MFA Financial	Mortgage Real Estate Investment Trust	",
    
    "MFC	Manulife Financial	Insurance	",
    
    "MFG	Mizuho Financial Group	Banks	",
    
    "MFGP	Micro Focus International	Software	",
    ,
    "MFH	Mercurity Fintech Holding	Software	",
    
    "MFIN	Medallion Financial	Consumer Finance	",
    
    "MG	    MISTRAS Group	Professional Services	",
    
    "MGA	Magna International	Auto Components	",
    
    "MGEE	MGE Energy	Electric Utilities	",
    
    "MGI	MoneyGram International	IT Services	",
    
    "MGIC	Magic Software Enterprises	Software	",
    
    "MGLD	The Marygold Companies	Asset Management	",
    
    "MGM	MGM Resorts International	Hotels Restaurants & Leisure	",
    
    "MGNI	Magnite	Internet & Direct Marketing Retail	",
    
    "MGNX	MacroGenics	Biotechnology	",
    
    "MGPI	MGP Ingredients	Beverages	",
    
    "MGRC	McGrath RentCorp	Commercial Services & Supplies	",
    
    "MGTA	Magenta Therapeutics	Biotechnology	",
    
    "MGTX	MeiraGTx Holdings	Biotechnology	",
    
    "MGY	Magnolia Oil & Gas	Oil Gas & Consumable Fuels	",
    
    "MGYR	Magyar Bancorp	Thrifts & Mortgage Finance	",
    
    "MHH	Mastech Digital	Professional Services	",
    
    "MHK	Mohawk Industries	Household Durables	",
    
    "MHLD	Maiden Holdings	Insurance	",
    
    "MHO	M/I Homes	Household Durables	",
    
    "MHUA	Meihua International Medical Technologies Co	Medical Instruments & Supplies	",
    
    "MIC	Macquarie Infrastructure	Transportation Infrastructure	",
    
    "MICT	MICT Inc	Aerospace & Defense	",
    
    "MIDD	The Middleby Corporation	Machinery	",
    ,
    "MIGI	Mawson Infrastructure Group	Capital Markets	",
    
    "MILE	Metromile	Insurance-Property & Casualty	",
    
    "MIME	Mimecast	Software	",
    
    "MIMO	Airspan Networks Holdings	Telecom Services	",
    
    "MIND	MIND Technology	Energy Equipment & Services	",
    
    "MINM	Minim	Communication Equipment	",
    
    "MIR	Mirion Technologies	Specialty Industrial Machinery	",
    
    "MIRM	Mirum Pharmaceuticals	Biotechnology	",
    
    "MIRO	Miromatrix Medical	Biotechnology	",
    
    "MIST	Milestone Pharmaceuticals	Pharmaceuticals	",
    
    "MIT	Mason Industrial Technology	Blank Check / SPAC	",
    
    "MITA	Coliseum Acquisition	Blank Check / SPAC	",
    
    "MITC	MeaTech D	Packaged Foods	",
    
    "MITK	Mitek Systems	Software	",
    
    "MITO	Stealth BioTherapeutics	Biotechnology	",
    
    "MITQ	Moving iMage Technologies	Photographic and Photocopying Equipme	",
    
    "MITT	AG Mortgage Investment Trust	Mortgage Real Estate Investment Trust	",
    
    "MIXT	MiX Telematics	Software	",
    
    "MKC	McCormick & Company	Food Products	",
    
    "MKD	Molecular Data	Chemicals	",
    
    "MKFG	Markforged Holding	Computer Hardware	",
    
    "MKL	Markel	Insurance	",
    
    "MKSI	MKS Instruments	Semiconductors & Semiconductor Equipment	",
    ,
    "MKTW	MarketWise	Software-Application	",
    
    "MKTX	MarketAxess Holdings	Capital Markets	",
    
    "ML	    MoneyLion	Software-Application	",
    
    "MLAB	Mesa Laboratories	Health Care Equipment & Supplies	",
    
    "MLAC	Malacca Straits Acquisition Company	Blank Check / SPAC	",
    
    "MLAI	McLaren Technology Acquisition	Blank Check / SPAC	",
    
    "MLCO	Melco Resorts & Entertainment	Hotels Restaurants & Leisure	",
    
    "MLI	Mueller Industries	Machinery	",
    
    "MLKN	MillerKnoll	Furnishings Fixtures & Appliances	",
    
    "MLM	Martin Marietta Materials	Construction Materials	",
    
    "MLNK	MeridianLink	Software-Application	",
    
    "MLP	Maui Land & Pineapple Company	Real Estate Management & Development	",
    
    "MLR	Miller Industries	Machinery	",
    
    "MLSS	Milestone Scientific	Health Care Equipment & Supplies	",
    
    "MLTX	MoonLake Immunotherapeutics	Shell Companies	",
    
    "MLVF	Malvern Bancorp	Banks	",
    
    "MMAT	Meta Materials	Electronic Components	",
    
    "MMC	Marsh & McLennan Companies	Insurance	",
    
    "MMI	Marcus & Millichap	Real Estate Management & Development	",
    
    "MMLP	Martin Midstream Partners	Oil Gas & Consumable Fuels	",
    
    "MMM	 Company	Industrial Conglomerates	",
    
    "MMMB	MamaMancini's Holdings	Food Products	",
    
    "MMP	Magellan Midstream Partners	Oil Gas & Consumable Fuels	",
    
    "MMS	Maximus	IT Services	",
    
    "MMSI	Merit Medical Systems	Health Care Equipment & Supplies	",
    
    "MMX	Maverix Metals	Metals & Mining	",
    
    "MMYT	MakeMyTrip	Internet & Direct Marketing Retail	",
    
    "MN	    Manning & Napier	Capital Markets	",
    
    "MNDO	MIND CTI	Software	",
    
    "MNDT	Mandiant	Software	",
    
    "MNDY	mondaycom	Software-Application	",
    
    "MNKD	MannKind	Biotechnology	",
    
    "MNMD	Mind Medicine (MindMed)	Biotechnology	",
    
    "MNOV	MediciNova	Biotechnology	",
    
    "MNPR	Monopar Therapeutics	Biotechnology	",
    
    "MNRL	Brigham Minerals	Oil Gas & Consumable Fuels	",
    
    "MNRO	Monro	Specialty Retail	",
    
    "MNSB	MainStreet Bancshares	Banks	",
    
    "MNSO	Miniso Group Holding	Specialty Retail	",
    
    "MNST	Monster Beverage	Beverages	",
    
    "MNTK	Montauk Renewables	",
    ,
    "MNTN	Everest Consolidator Acquisition	Blank Check / SPAC	",
    
    "MNTS	Momentus	Aerospace & Defense	",
    
    "MNTV	Momentive Global	Software	",
    
    "MNTX	Manitex International	Machinery	",
    
    "MO	    Altria Group	Tobacco	",
    
    "MOBQ	Mobiquity Technologies	Media	",
    
    "MOD	Modine Manufacturing Company	Auto Components	",
    
    "MODN	Model N	Software	",
    
    "MODV	ModivCare	Health Care Providers & Services	",
    
    "MOFG	MidWestOne Financial Group	Banks	",
    
    "MOGA	Moog Inc	Aerospace & Defense	",
    
    "MOGB	Moog Inc	Aerospace & Defense	",
    
    "MOGO	Mogo Inc	Consumer Finance	",
    
    "MOGU	Mogu Inc	Internet & Direct Marketing Retail	",
    
    "MOH	Molina Healthcare	Health Care Providers & Services	",
    
    "MOHO	ECMOHO	Internet & Direct Marketing Retail	",
    
    "MOLN	Molecular Partners AG	Biotechnology	",
    
    "MOMO	Hello Group	Interactive Media & Services	",
    
    "MON	Monument Circle Acquisition	Blank Check / SPAC	",
    
    "MOR	MorphoSys AG	Biotechnology	",
    
    "MORF	Morphic Holding	Biotechnology	",
    
    "MORN	Morningstar	Capital Markets	",
    
    "MOS	The Mosaic Company	Chemicals	",
    
    "MOTS	Motus GI Holdings	Health Care Equipment & Supplies	",
    
    "MOV	Movado Group	Textiles Apparel & Luxury Goods	",
    
    "MOVE	Movano	Internet Software & Services	",
    
    "MOXC	Moxian	Internet & Direct Marketing Retail	",
    
    "MP	    MP Materials	Metals & Mining	",
    ,
    "MPAA	Motorcar Parts of America	Auto Components	",
    
    "MPAC	Model Performance Acquisition	Blank Check / SPAC	",
    
    "MPB	Mid Penn Bancorp	Banks	",
    
    "MPC	Marathon Petroleum	Oil Gas & Consumable Fuels	",
    
    "MPLN	MultiPlan	Health Information Services	",
    
    "MPLX	MPLX LP	Oil Gas & Consumable Fuels	",
    
    "MPRA	Mercato Partners Acquisition	Blank Check / SPAC	",
    
    "MPW	Medical Properties Trust	Equity Real Estate Investment Trusts 	",
    
    "MPWR	Monolithic Power Systems	Semiconductors & Semiconductor Equipment	",
    
    "MPX	Marine Products	Leisure Products	",
    
    "MQ	    Marqeta	Software-Infrastructure	",
    
    "MRAI	Marpai	Healthcare Plans	",
    
    "MRAM	Everspin Technologies	Semiconductors & Semiconductor Equipment	",
    
    "MRBK	Meridian	Banks	",
    
    "MRC	MRC Global	Trading Companies & Distributors	",
    
    "MRCC	Monroe Capital	Capital Markets	",
    
    "MRCY	Mercury Systems	Aerospace & Defense	",
    
    "MREO	Mereo BioPharma Group	Biotechnology	",
    
    "MRIN	Marin Software	Software	",
    
    "MRK	Merck & Co	Pharmaceuticals	",
    
    "MRKR	Marker Therapeutics	Biotechnology	",
    
    "MRM	Medirom Healthcare Technologies	Personal Services	",
    
    "MRNA	Moderna	Biotechnology	",
    
    "MRNS	Marinus Pharmaceuticals	Pharmaceuticals	",
    
    "MRO	Marathon Oil	Oil Gas & Consumable Fuels	",
    
    "MRSN	Mersana Therapeutics	Biotechnology	",
    
    "MRTN	Marten Transport	Road & Rail	",
    
    "MRTX	Mirati Therapeutics	Biotechnology	",
    
    "MRUS	Merus	Biotechnology	",
    
    "MRVI	Maravai LifeSciences Holdings	Biotechnology	",
    
    "MRVL	Marvell Technology	Semiconductors & Semiconductor Equipment	",
    
    "MS	    Morgan Stanley	Capital Markets	",
    
    "MSA	MSA Safety	Commercial Services & Supplies	",
    
    "MSAC	Medicus Sciences Acquisition	Blank Check / SPAC	",
    
    "MSB	Mesabi Trust	Metals & Mining	",
    
    "MSBI	Midland States Bancorp	Banks	",
    
    "MSC	Studio City International Holdings	Hotels Restaurants & Leisure	",
    
    "MSCI	MSCI Inc	Capital Markets	",
    
    "MSDA	MSD Acquisition	Blank Check / SPAC	",
    
    "MSEX	Middlesex Water Company	",
    
    "MSFT	Microsoft	Software	",
    
    "MSGE	Madison Square Garden Entertainment	Entertainment	",
    
    "MSGM	Motorsport Games	Electronic Gaming & Multimedia	",
    
    "MSGS	Madison Square Garden Sports	Entertainment	",
    
    "MSI	Motorola Solutions	Communications Equipment	",
    ,
    "MSM	MSC Industrial Direct Company	Trading Companies & Distributors	",
    
    "MSN	Emerson Radio	Household Durables	",
    
    "MSP	Datto Holding	Software	",
    
    "MSSA	Metal Sky Star Acquisition	Blank Check / SPAC	",
    
    "MSTR	MicroStrategy	Software	",
    
    "MSVB	Mid-Southern Bancorp	Thrifts & Mortgage Finance	",
    
    "MT	    ArcelorMittal	Metals & Mining	",
    
    "MTA	Metalla Royalty & Streaming	Metals & Mining	",
    
    "MTAC	MedTech Acquisition	Blank Check / SPAC	",
    
    "MTAL	Metals Acquisition	Blank Check / SPAC	",
    
    "MTB	M&T Bank	Banks	",
    
    "MTBC	CareCloud	Health Care Technology	",
    
    "MTC	MMTec	Software	",
    
    "MTCH	Match Group	Interactive Media & Services	",
    
    "MTCR	Metacrine	Biotechnology	",
    
    "MTD	Mettler-Toledo International	Life Sciences Tools & Services	",
    
    "MTDR	Matador Resources Company	Oil Gas & Consumable Fuels	",
    
    "MTEK	Maris-Tech	Electronic Components	",
    
    "MTEM	Molecular Templates	Biotechnology	",
    
    "MTEX	Mannatech	Personal Products	",
    
    "MTG	MGIC Investment	Thrifts & Mortgage Finance	",
    
    "MTH	Meritage Homes	Household Durables	",
    ,
    "MTL	Mechel PAO	Metals & Mining	",
    
    "MTLS	Materialise NV	Software	",
    
    "MTMT	Mega Matrix	Rental & Leasing Services	",
    
    "MTN	Vail Resorts	Hotels Restaurants & Leisure	",
    
    "MTNB	Matinas BioPharma Holdings	Biotechnology	",
    
    "MTOR	Meritor	Machinery	",
    
    "MTP	Midatech Pharma	Biotechnology	",
    
    "MTR	Mesa Royalty Trust	Oil Gas & Consumable Fuels	",
    
    "MTRN	Materion	Metals & Mining	",
    
    "MTRX	Matrix Service Company	Energy Equipment & Services	",
    
    "MTRY	Monterey Bio Acquisition	Blank Check / SPAC	",
    
    "MTSI	MACOM Technology Solutions Holdings	Semiconductors & Semiconductor Equipment	",
    
    "MTTR	Matterport	Software-Application	",
    
    "MTVC	Motive Capital Corp II	Blank Check / SPAC	",
    
    "MTW	The Manitowoc Company	Machinery	",
    
    "MTX	Minerals Technologies	Chemicals	",
    ,
    "MTZ	MasTec	Construction & Engineering	",
    
    "MU	    Micron Technology	Semiconductors & Semiconductor Equipment	",
    
    "MUDS	Mudrick Capital Acquisition II	Blank Check / SPAC	",
    
    "MUFG	Mitsubishi UFJ Financial Group	Banks	",
    
    "MULN	Mullen Automotive	Auto Manufacturers	",
    
    "MUR	Murphy Oil	Oil Gas & Consumable Fuels	",
    
    "MURF	Murphy Canyon Acquisition	Blank Check / SPAC	",
    
    "MUSA	Murphy USA	Specialty Retail	",
    
    "MUX	McEwen Mining	Metals & Mining	",
    
    "MVBF	MVB Financial	Banks	",
    
    "MVIS	MicroVision	Electronic Equipment Instruments & C	",
    
    "MVST	Microvast Holdings	Electrical Equipment & Parts	",
    
    "MWA	Mueller Water Products	Machinery	",
    
    "MX	    MagnaChip Semiconductor	Semiconductors & Semiconductor Equipment	",
    
    "MXC	Mexco Energy	Oil Gas & Consumable Fuels	",
    
    "MXCT	MaxCyte	Diagnostics & Research	",
    
    "MXL	MaxLinear	Semiconductors & Semiconductor Equipment	",
    
    "MYE	Myers Industries	Containers & Packaging	",
    
    "MYFW	First Western Financial	Banks	",
    
    "MYGN	Myriad Genetics	Biotechnology	",
    
    "MYMD	MyMD Pharmaceuticals	Biotechnology	",
    
    "MYNA	Mynaric AG	Communication Equipment	",
    
    "MYNZ	Mainz Biomed BV	Diagnostics & Research	",
    
    "MYO	Myomo	Health Care Equipment & Supplies	",
    
    "MYOV	Myovant Sciences	Biotechnology	",
    
    "MYPS	PLAYSTUDIOS	Electronic Gaming & Multimedia	",
    
    "MYRG	MYR Group	Construction & Engineering	",
    
    "MYSZ	My Size	Software	",
    
    "MYTE	MYT Netherlands Parent BV	Luxury Goods	",
    
    "NAAC	North Atlantic Acquisition	Blank Check / SPAC	",
    
    "NABL	N-able	Information Technology Services	",
    
    "NAII	Natural Alternatives International	Personal Products	",
    
    "NAK	Northern Dynasty Minerals	Metals & Mining	",
    
    "NAOV	NanoVibronix	Health Care Equipment & Supplies	",
    
    "NAPA	The Duckhorn Portfolio	Beverages-Wineries & Distilleries	",
    
    "NARI	Inari Medical	Health Care Equipment & Supplies	",
    
    "NAT	Nordic American Tankers	Oil Gas & Consumable Fuels	",
    
    "NATH	Nathan's Famous	Hotels Restaurants & Leisure	",
    
    "NATI	National Instruments	Electronic Equipment Instruments & C	",
    
    "NATR	Nature's Sunshine Products	Personal Products	",
    
    "NAUT	Nautilus Biotechnology	Biotechnology	",
    
    "NAVB	Navidea Biopharmaceuticals	Biotechnology	",
    
    "NAVI	Navient	Consumer Finance	",
    
    "NBEV	NewAge	Beverages	",
    
    "NBHC	National Bank Holdings	Banks	",
    
    "NBIX	Neurocrine Biosciences	Biotechnology	",
    
    "NBN	Northeast Bank	Banks	",
    
    "NBR	Nabors Industries	Energy Equipment & Services	",
    
    "NBRV	Nabriva Therapeutics	Pharmaceuticals	",
    
    "NBSE	NeuBase Therapeutics	Biotechnology	",
    
    "NBST	Newbury Street Acquisition	Blank Check / SPAC	",
    
    "NBTB	NBT Bancorp	Banks	",
    
    "NBTX	Nanobiotix	Biotechnology	",
    
    "NBY	NovaBay Pharmaceuticals	Pharmaceuticals	",
    
    "NC	    NACCO Industries	Oil Gas & Consumable Fuels	",
    
    "NCAC	Newcourt Acquisition	Blank Check / SPAC	",
    
    "NCBS	Nicolet Bankshares	Banks	",
    
    "NCLH	Norwegian Cruise Line Holdings	Hotels Restaurants & Leisure	",
    
    "NCMI	National CineMedia	Media	",
    
    "NCNA	NuCana	Biotechnology	",
    
    "NCNO	nCino	Software	",
    
    "NCR	NCR Corporation	Technology Hardware Storage & Periph	",
    
    "NCSM	NCS Multistage Holdings	Energy Equipment & Services	",
    
    "NCTY	The Limited	Entertainment	",
    
    "NDAC	Nightdragon Acquisition	Blank Check / SPAC	",
    
    "NDAQ	Nasdaq	Capital Markets	",
    
    "NDLS	Noodles & Company	Hotels Restaurants & Leisure	",
    
    "NDRA	ENDRA Life Sciences	Health Care Equipment & Supplies	",
    
    "NDSN	Nordson	Machinery	",
    
    "NE	    Noble	Oil & Gas Drilling	",
    
    "NECB	NorthEast Community Bancorp	Thrifts & Mortgage Finance	",
    
    "NEE	NextEra Energy	Electric Utilities	",
    
    "NEGG	Newegg Commerce	Internet Retail	",
    
    "NEM	Newmont	Metals & Mining	",
    
    "NEN	New England Realty Associates LP	Real Estate Management & Development	",
    
    "NEO	NeoGenomics	Life Sciences Tools & Services	",
    
    "NEOG	Neogen	Health Care Equipment & Supplies	",
    
    "NEON	Neonode	Electronic Equipment Instruments & C	",
    
    "NEP	NextEra Energy Partners LP	Independent Power and Renewable Elect	",
    
    "NEPH	Nephros	Household Durables	",
    
    "NEPT	Neptune Wellness Solutions	Personal Products	",
    
    "NERV	Minerva Neurosciences	Biotechnology	",
    
    "NESR	National Energy Services Reunited	Energy Equipment & Services	",
    
    "NET	Cloudflare	Software	",
    
    "NETC	Nabors Energy Transition	Blank Check / SPAC	",
    
    "NETI	Eneti	Marine	",
    
    "NEU	NewMarket	Chemicals	",
    
    "NEWP	New Pacific Metals	Electronic Equipment Instruments & C	",
    
    "NEWR	New Relic	Software	",
    
    "NEWT	Newtek Business Services	Capital Markets	",
    
    "NEX	NexTier Oilfield Solutions	Energy Equipment & Services	",
    
    "NEXA	Nexa Resources	Metals & Mining	",
    
    "NEXI	NexImmune	Biotechnology	",
    
    "NEXT	NextDecade	Oil Gas & Consumable Fuels	",
    
    "NFBK	Northfield Bancorp	Thrifts & Mortgage Finance	",
    
    "NFE	New Fortress Energy	Oil Gas & Consumable Fuels	",
    
    "NFG	National Fuel Gas Company	Gas Utilities	",
    
    "NFGC	New Found Gold	Gold	",
    
    "NFLX	Netflix	Entertainment	",
    
    "NFNT	Infinite Acquisition	Blank Check / SPAC	",
    
    "NFYS	Enphys Acquisition	Blank Check / SPAC	",
    
    "NG	    NovaGold Resources	Metals & Mining	",
    
    "NGC	Northern Genesis Acquisition III	Blank Check / SPAC	",
    
    "NGD	New Gold	Metals & Mining	",
    
    "NGG	National Grid	Multi-Utilities	",
    
    "NGL	NGL Energy Partners LP	Oil Gas & Consumable Fuels	",
    
    "NGM	NGM Biopharmaceuticals	Pharmaceuticals	",
    
    "NGMS	NeoGames	Hotels Restaurants & Leisure	",
    
    "NGS	Natural Gas Services Group	Energy Equipment & Services	",
    
    "NGVC	Natural Grocers by Vitamin Cottage	Food & Staples Retailing	",
    
    "NGVT	Ingevity	Chemicals	",
    
    "NH	    NantHealth	Health Care Technology	",
    
    "NHC	National HealthCare	Health Care Providers & Services	",
    
    "NHI	National Health Investors	Equity Real Estate Investment Trusts 	",
    
    "NHIC	NewHold Investment II	Blank Check / SPAC	",
    
    "NHTC	Natural Health Trends	Personal Products	",
    
    "NHWK	NightHawk Biosciences	Biotechnology	",
    
    "NI	    NiSource	Multi-Utilities	",
    
    "NICE	NICE Ltd	Software	",
    ,
    "NICK	Nicholas Financial	Consumer Finance	",
    
    "NILE	BitNile Holdings	Capital Markets	",
    
    "NINE	Nine Energy Service	Energy Equipment & Services	",
    
    "NIO	NIO Inc	Automobiles	",
    
    "NISN	Nisun International Enterprise Development Group	Credit Services	",
    
    "NIU	Niu Technologies	Automobiles	",
    
    "NJR	New Jersey Resources	Gas Utilities	",
    
    "NKE	Nike Inc	Textiles Apparel & Luxury Goods	",
    
    "NKLA	Nikola	Machinery	",
    
    "NKSH	National Bankshares	Banks	",
    
    "NKTR	Nektar Therapeutics	Pharmaceuticals	",
    
    "NKTX	Nkarta	Biotechnology	",
    
    "NL	    NL Industries	Commercial Services & Supplies	",
    
    "NLIT	Northern Lights Acquisition	Blank Check / SPAC	",
    
    "NLOK	NortonLifeLock	Software	",
    
    "NLS	Nautilus	Leisure Products	",
    
    "NLSN	Nielsen Holdings	Professional Services	",
    
    "NLSP	NLS Pharmaceutics	Biotechnology	",
    
    "NLTX	Neoleukin Therapeutics	Biotechnology	",
    
    "NLY	Annaly Capital Management	Mortgage Real Estate Investment Trust	",
    
    "NM	    Navios Maritime Holdings	Marine	",
    
    "NMFC	New Mountain Finance	Capital Markets	",
    ,
    "NMG	Nouveau Monde Graphite	Other Industrial Metals & Mining	",
    
    "NMIH	NMI Holdings	Thrifts & Mortgage Finance	",
    
    "NMM	Navios Maritime Partners	Marine	",
    
    "NMMC	North Mountain Merger	Shell Companies	",
    
    "NMR	Nomura Holdings	Capital Markets	",
    
    "NMRD	Nemaura Medical	Health Care Equipment & Supplies	",
    
    "NMRK	Newmark Group	Real Estate Management & Development	",
    
    "NMTC	NeuroOne Medical Technologies	Health Care Equipment & Supplies	",
    
    "NMTR	 Meters Biopharma	Pharmaceuticals	",
    
    "NN	    NextNav	Internet Content & Information	",
    
    "NNBR	NN Inc	Machinery	",
    
    "NNDM	Nano Dimension	Technology Hardware Storage & Periph	",
    
    "NNI	Nelnet	Consumer Finance	",
    
    "NNN	National Retail Properties	Equity Real Estate Investment Trusts 	",
    
    "NNOX	Nano-X Imaging	Health Care Equipment & Supplies	",
    
    "NNVC	NanoViricides	Biotechnology	",
    
    "NOA	North American Construction Group	Energy Equipment & Services	",
    
    "NOAC	Natural Order Acquisition	Blank Check / SPAC	",
    
    "NOAH	Noah Holdings	Capital Markets	",
    
    "NOC	Northrop Grumman	Aerospace & Defense	",
    
    "NODK	NI Holdings	Insurance	",
    
    "NOG	Northern Oil & Gas	Oil Gas & Consumable Fuels	",
    
    "NOK	Nokia	Communications Equipment	",
    
    "NOMD	Nomad Foods	Food Products	",
    ,
    "NOTV	Inotiv	Life Sciences Tools & Services	",
    
    "NOV	NOV Inc	Energy Equipment & Services	",
    
    "NOVA	Sunnova Energy International	Independent Power and Renewable Elect	",
    
    "NOVN	Novan	Pharmaceuticals	",
    
    "NOVT	Novanta	Electronic Equipment Instruments & C	",
    
    "NOVV	Nova Vision Acquisition	Blank Check / SPAC	",
    
    "NOW	ServiceNow	Software	",
    
    "NP	    Neenah	Paper & Forest Products	",
    
    "NPAB	New Providence Acquisition II	Blank Check / SPAC	",
    
    "NPCE	NeuroPace	Medical Devices	",
    
    "NPK	National Presto Industries	Aerospace & Defense	",
    
    "NPO	EnPro Industries	Machinery	",
    
    "NPTN	NeoPhotonics	Semiconductors & Semiconductor Equipment	",
    
    "NR	    Newpark Resources	Energy Equipment & Services	",
    
    "NRAC	Noble Rock Acquisition	Blank Check / SPAC	",
    
    "NRBO	NeuroBo Pharmaceuticals	Biotechnology	",
    
    "NRC	National Research	Health Care Providers & Services	",
    
    "NRDS	NerdWallet	Credit Services	",
    
    "NRDY	Nerdy	Software-Application	",
    
    "NREF	NexPoint Real Estate Finance	REIT-Mortgage	",
    
    "NRG	NRG Energy	Independent Power and Renewable Elect	",
    
    "NRGV	Energy Vault Holdings	Utilities-Renewable	",
    
    "NRIM	Northrim BanCorp	Banks	",
    
    "NRIX	Nurix Therapeutics	Biotechnology	",
    
    "NRP	Natural Resource Partners LP	Oil Gas & Consumable Fuels	",
    
    "NRSN	NeuroSense Therapeutics	Biotechnology	",
    
    "NRT	North European Oil Royalty Trust	Oil Gas & Consumable Fuels	",
    
    "NRXP	NRx Pharmaceuticals	Biotechnology	",
    
    "NRZ	New Residential Investment	Mortgage Real Estate Investment Trust	",
    
    "NS	    NuStar Energy	Oil Gas & Consumable Fuels	",
    
    "NSA	National Storage Affiliates Trust	Equity Real Estate Investment Trusts 	",
    ,
    "NSC	Norfolk Southern	Road & Rail	",
    
    "NSEC	National Security Group	Insurance	",
    
    "NSIT	Insight Enterprises	Electronic Equipment Instruments & C	",
    
    "NSP	Insperity	Professional Services	",
    
    "NSPR	InspireMD	Health Care Equipment & Supplies	",
    
    "NSR	Nomad Royalty Company	Other Precious Metals & Mining	",
    
    "NSSC	Napco Security Technologies	Electronic Equipment Instruments & C	",
    
    "NSTB	Northern Star Investment II	Blank Check / SPAC	",
    
    "NSTC	Northern Star Investment III	Blank Check / SPAC	",
    
    "NSTD	Northern Star Investment IV	Blank Check / SPAC	",
    
    "NSTG	NanoString Technologies	Life Sciences Tools & Services	",
    
    "NSTS	NSTS Bancorp	Banks-Regional	",
    
    "NSYS	Nortech Systems	Electronic Equipment Instruments & C	",
    
    "NTAP	NetApp	Technology Hardware Storage & Periph	",
    
    "NTB	The Bank of NT Butterfield & Son	Banks	",
    
    "NTCO	Natura &Co Holding	Personal Products	",
    
    "NTCT	NetScout Systems	Communications Equipment	",
    
    "NTES	NetEase	Entertainment	",
    
    "NTGR	Netgear	Communications Equipment	",
    
    "NTIC	Northern Technologies International	Chemicals	",
    
    "NTIP	Network- Technologies	Communications Equipment	",
    
    "NTLA	Intellia Therapeutics	Biotechnology	",
    
    "NTNX	Nutanix	Software	",
    ,
    "NTP	Nam Tai Property	Real Estate Management & Development	",
    
    "NTR	Nutrien	Chemicals	",
    
    "NTRA	Natera	Biotechnology	",
    
    "NTRB	Nutriband	Biotechnology	",
    
    "NTRS	Northern Trust	Capital Markets	",
    
    "NTST	NetSTREIT	Equity Real Estate Investment Trusts 	",
    
    "NTUS	Natus Medical	Health Care Equipment & Supplies	",
    
    "NTWK	NetSol Technologies	Software	",
    
    "NTZ	Natuzzi SpA	Household Durables	",
    
    "NU	    Nu Holdings	Banks-Diversified	",
    
    "NUBI	Nubia Brand International	Blank Check / SPAC	",
    
    "NUE	Nucor	Metals & Mining	",
    ,
    "NURO	NeuroMetrix	Health Care Equipment & Supplies	",
    
    "NUS	Nu Skin Enterprises	Personal Products	",
    
    "NUTX	Nutex Health	Health Information Services	",
    
    "NUVA	NuVasive	Health Care Equipment & Supplies	",
    
    "NUVB	Nuvation Bio	Biotechnology	",
    
    "NUVL	Nuvalent	Biotechnology	",
    
    "NUWE	Nuwellis	Medical Devices	",
    
    "NUZE	NuZee	Food Products	",
    
    "NVAC	NorthView Acquisition	Blank Check / SPAC	",
    
    "NVAX	Novavax	Biotechnology	",
    ,
    "NVCN	Neovasc	Health Care Equipment & Supplies	",
    
    "NVCR	Novocure	Health Care Equipment & Supplies	",
    ,
    "NVCT	Nuvectis Pharma	Biotechnology	",
    
    "NVDA	NVIDIA	Semiconductors & Semiconductor Equipment	",
    
    "NVEC	NVE Corporation	Semiconductors & Semiconductor Equipment	",
    
    "NVEE	NV Global	Construction & Engineering	",
    
    "NVEI	Nuvei	Software-Infrastructure	",
    
    "NVFY	Nova Lifestyle	Household Durables	",
    
    "NVGS	Navigator Holdings	Oil Gas & Consumable Fuels	",
    
    "NVIV	Invivo Therapeutics Holdings	Health Care Equipment & Supplies	",
    
    "NVMI	Nova Ltd	Semiconductors & Semiconductor Equipment	",
    
    "NVNO	enVVeno Medical	Medical Devices	",
    
    "NVO	Novo Nordisk	Pharmaceuticals	",
    
    "NVOS	Novo Integrated Sciences	Health Care Providers & Services	",
    
    "NVR	NVR Inc	Household Durables	",
    
    "NVRO	Nevro	Health Care Equipment & Supplies	",
    
    "NVS	Novartis AG	Pharmaceuticals	",
    
    "NVSA	New Vista Acquisition	Blank Check / SPAC	",
    
    "NVST	Envista Holdings	Health Care Equipment & Supplies	",
    
    "NVT	nVent Electric	Electrical Equipment	",
    
    "NVTA	Invitae	Biotechnology	",
    
    "NVTS	Navitas Semiconductor	Semiconductors	",
    
    "NVVE	Nuvve Holding	Specialty Retail	",
    
    "NVX	NOVONIX	Electrical Equipment & Parts	",
    
    "NWBI	Northwest Bancshares	Thrifts & Mortgage Finance	",
    
    "NWE	NorthWestern	Multi-Utilities	",
    
    "NWFL	Norwood Financial	Banks	",
    
    "NWG	NatWest Group	Banks	",
    
    "NWL	Newell Brands	Household Durables	",
    
    "NWLI	National Western Life Group	Insurance	",
    
    "NWN	Northwest Natural Holding Company	Gas Utilities	",
    
    "NWPX	Northwest Pipe Company	Construction & Engineering	",
    
    "NWS	News Corporation	Media	",
    
    "NWSA	News Corporation	Media	",
    
    "NX	    Quanex Building Products	Building Products	",
    
    "NXE	NexGen Energy	Oil Gas & Consumable Fuels	",
    
    "NXGL	NexGel	Medical Instruments & Supplies	",
    
    "NXGN	NextGen Healthcare	Health Care Technology	",
    
    "NXPI	NXP Semiconductors NV	Semiconductors & Semiconductor Equipment	",
    
    "NXPL	NextPlat	Software-Application	",
    
    "NXRT	NexPoint Residential Trust	Equity Real Estate Investment Trusts 	",
    
    "NXST	Nexstar Media Group	Media	",
    
    "NXTC	NextCure	Biotechnology	",
    
    "NXTP	NextPlay Technologies	Information Technology Services	",
    
    "NYC	New York City REIT	REIT-Office	",
    
    "NYCB	New York Community Bancorp	Thrifts & Mortgage Finance	",
    
    "NYMT	New York Mortgage Trust	Mortgage Real Estate Investment Trust	",
    
    "NYMX	Nymox Pharmaceutical	Biotechnology	",
    
    "NYT	The New York Times Company	Media	",
    
    "NYXH	Nyxoah	Medical Instruments & Supplies	",
    
    "O	    Realty Income	Equity Real Estate Investment Trusts 	",
    
    "OACB	Oaktree Acquisition II	Blank Check / SPAC	",
    
    "OAS	Oasis Petroleum	Oil Gas & Consumable Fuels	",
    
    "OB	    Outbrain	Internet Content & Information	",
    
    "OBCI	Ocean Bio-Chem	Household Products	",
    
    "OBE	Obsidian Energy	Oil & Gas E&P	",
    
    "OBLG	Oblong	Software-Application	",
    
    "OBNK	Origin Bancorp	Banks	",
    
    "OBSV	ObsEva	Biotechnology	",
    
    "OBT	Orange County Bancorp	Banks-Regional	",
    
    "OC	    Owens Corning	Building Products	",
    
    "OCA	Omnichannel Acquisition	Blank Check / SPAC	",
    
    "OCAX	OCA Acquisition	Blank Check / SPAC	",
    
    "OCC	Optical Cable	Communications Equipment	",
    
    "OCCI	OFS Credit Company	Asset Management	",
    
    "OCDX	Ortho Clinical Diagnostics Holdings	Health Care Equipment & Supplies	",
    
    "OCFC	OceanFirst Financial	Thrifts & Mortgage Finance	",
    
    "OCFT	OneConnect Financial Technology Co	Software	",
    
    "OCG	Oriental Culture Holding	Internet Retail	",
    
    "OCGN	Ocugen	Biotechnology	",
    
    "OCN	Ocwen Financial	Thrifts & Mortgage Finance	",
    
    "OCSL	Oaktree Specialty Lending	Capital Markets	",
    
    "OCUL	Ocular Therapeutix	Pharmaceuticals	",
    
    "OCUP	Ocuphire Pharma	Biotechnology	",
    
    "OCX	OncoCyte	Biotechnology	",
    
    "ODC	Oil-Dri Corporation of America	Household Products	",
    
    "ODFL	Old Dominion Freight Line	Road & Rail	",
    
    "ODP	The ODP Corporation	Specialty Retail	",
    
    "OEC	Orion Engineered Carbons	Chemicals	",
    
    "OEG	Orbital Energy Group	",
    
    "OEPW	One Equity Partners Open Water I	Blank Check / SPAC	",
    
    "OESX	Orion Energy Systems	Electrical Equipment	",
    
    "OFC	Corporate Office Properties Trust	Equity Real Estate Investment Trusts 	",
    
    "OFED	Oconee Federal Financial	Thrifts & Mortgage Finance	",
    
    "OFG	OFG Bancorp	Banks	",
    
    "OFIX	Orthofix Medical	Health Care Equipment & Supplies	",
    
    "OFLX	Omega Flex	Machinery	",
    
    "OFS	OFS Capital	Capital Markets	",
    
    "OG	    Onion Global	Software-Application	",
    
    "OGE	OGE Energy	Electric Utilities	",
    
    "OGEN	Oragenics	Biotechnology	",
    
    "OGI	OrganiGram Holdings	Pharmaceuticals	",
    
    "OGN	Organon & Co	Pharmaceuticals	",
    
    "OGS	ONE Gas	Gas Utilities	",
    
    "OHAA	OPY Acquisition I	Blank Check / SPAC	",
    
    "OHI	Omega Healthcare Investors	Equity Real Estate Investment Trusts 	",
    ,
    "OHPA	Orion Acquisition	Blank Check / SPAC	",
    
    "OI	    O-I Glass	Containers & Packaging	",
    
    "OII	Oceaneering International	Energy Equipment & Services	",
    
    "OIIM	Oicro International	Semiconductors & Semiconductor Equipment	",
    
    "OIS	Oil States International	Energy Equipment & Services	",
    
    "OKE	ONEOK	Oil Gas & Consumable Fuels	",
    
    "OKTA	Okta Inc	IT Services	",
    
    "OLB	The OLB Group	Software-Application	",
    
    "OLED	Universal Display	Semiconductors & Semiconductor Equipment	",
    
    "OLIT	OmniLit Acquisition	Blank Check / SPAC	",
    
    "OLK	Olink Holding AB (publ)	Diagnostics & Research	",
    
    "OLLI	Ollie's Bargain Outlet Holdings	Multiline Retail	",
    
    "OLMA	Olema Pharmaceuticals	Biotechnology	",
    
    "OLN	Olin Corporation	Chemicals	",
    ,
    "OLO	Olo Inc	Software-Application	",
    
    "OLP	One Liberty Properties	Equity Real Estate Investment Trusts 	",
    
    "OLPX	Olaplex Holdings	Specialty Retail	",
    
    "OM  	Outset Medical	Medical Devices	",
    
    "OMAB	Grupo Aeroportuario del Centro Norte	Transportation Infrastructure	",
    
    "OMC	Omnicom Group	Media	",
    
    "OMCL	Omnicell	Health Care Technology	",
    
    "OMEG	Omega Alpha SPAC	Blank Check / SPAC	",
    
    "OMER	Omeros	Pharmaceuticals	",
    
    "OMEX	Odyssey Marine Exploration	Commercial Services & Supplies	",
    
    "OMF	OneMain Holdings	Consumer Finance	",
    
    "OMGA	Omega Therapeutics	Biotechnology	",
    
    "OMI	Owens & Minor	Health Care Providers & Services	",
    
    "OMIC	Singular Genomics Systems	Medical Instruments & Supplies	",
    
    "OMQS	OMNIQ	Software-Application	",
    
    "ON	     ON Semiconductor	Semiconductors & Semiconductor Equipment	",
    
    "ONB	Old National Bancorp	Banks	",
    
    "ONCR	Oncorus	Biotechnology	",
    
    "ONCS	OncoSec Medical	Biotechnology	",
    
    "ONCT	Oncternal Therapeutics	Biotechnology	",
    
    "ONCY	Oncolytics Biotech	Biotechnology	",
    
    "ONDS	Ondas Holdings	Communication Equipment	",
    
    "ONEM	Life Healthcare	Health Care Equipment & Supplies	",
    ,
    "ONEW	OneWater Marine	Specialty Retail	",
    
    "ONL	Orion Office REIT	REIT-Office	",
    
    "ONON	On Holding AG	Apparel Retail	",
    
    "ONTF	ON Inc	Software-Application	",
    
    "ONTO	Onto Innovation	Semiconductors & Semiconductor Equipment	",
    ,
    "ONTX	Onconova Therapeutics	Pharmaceuticals	",
    
    "ONVO	Organovo Holdings	Biotechnology	",
    
    "ONYX	Onyx Acquisition Co I	Blank Check / SPAC	",
    
    "OOMA	Ooma Inc	Diversified Telecommunication Services	",
    
    "OP	     OceanPal	Marine Shipping	",
    
    "OPA	Magnum Opus Acquisition	Blank Check / SPAC	",
    
    "OPAD	Offerpad Solutions	Real Estate Services	",
    
    "OPBK	OP Bancorp	Thrifts & Mortgage Finance	",
    
    "OPCH	Option Care Health	Medical Care Facilities	",
    
    "OPEN	Opendoor Technologies	Real Estate Management & Development	",
    
    "OPFI	OppFi	Software-Application	",
    
    "OPGN	OpGen	Biotechnology	",
    
    "OPHC	OptimumBank Holdings	Banks	",
    
    "OPI	Office Properties Income Trust	Equity Real Estate Investment Trusts 	",
    
    "OPK	OPKO Health	Biotechnology	",
    
    "OPNT	Opiant Pharmaceuticals	Pharmaceuticals	",
    
    "OPOF	Old Point Financial	Banks	",
    
    "OPRA	Opera	Software	",
    
    "OPRT	Oportun Financial	Consumer Finance	",
    
    "OPRX	OptimizeRx	Health Care Technology	",
    
    "OPT	Opthea	Biotechnology	",
    
    "OPTN	OptiNose	Pharmaceuticals	",
    
    "OPTT	Ocean Power Technologies	Electrical Equipment	",
    
    "OPY	Oppenheimer Holdings	Capital Markets	",
    
    "OR	     Osisko Gold Royalties	Metals & Mining	",
    
    "ORA	Ormat Technologies	Independent Power and Renewable Elect	",
    
    "ORAN	Orange	Diversified Telecommunication Services	",
    
    "ORC	Orchid Island Capital	Mortgage Real Estate Investment Trust	",
    
    "ORCC	Owl Rock Capital	Capital Markets	",
    
    "ORCL	Oracle	Software	",
    
    "ORGN	Origin Materials	Mortgage Real Estate Investment Trust	",
    
    "ORGO	Organogenesis Holdings	Biotechnology	",
    
    "ORGS	Orgenesis	Biotechnology	",
    
    "ORI	Old Republic International	Insurance	",
    
    "ORIA	Orion Biotech Opportunities	Blank Check / SPAC	",
    
    "ORIC	Oric Pharmaceuticals	Biotechnology	",
    
    "ORLA	Orla Mining	Gold	",
    
    "ORLY	O'Reilly Automotive	Specialty Retail	",
    
    "ORMP	Oramed Pharmaceuticals	Pharmaceuticals	",
    
    "ORN	Orion Group Holdings	Construction & Engineering	",
    
    "ORRF	Orrstown Financial Services	Banks	",
    
    "ORTX	Orchard Therapeutics	Biotechnology	",
    
    "OSBC	Old Second Bancorp	Banks	",
    
    "OSCR	Oscar Health	Healthcare Plans	",
    
    "OSG	Overseas Shipholding Group	Oil Gas & Consumable Fuels	",
    
    "OSH	Oak Street Health	Health Care Providers & Services	",
    
    "OSI	Osiris Acquisition	Blank Check / SPAC	",
    
    "OSIS	OSI Systems	Electronic Equipment Instruments & C	",
    
    "OSK	Oshkosh	Machinery	",
    
    "OSPN	OneSpan	Software	",
    
    "OSS	One Stop Systems	Technology Hardware Storage & Periph	",
    
    "OST	Ostin Technology Group Co	Electronic Components Nec	",
    
    "OSTK	Overstockcom	Internet & Direct Marketing Retail	",
    
    "OSTR	Oyster Enterprises Acquisition	Blank Check / SPAC	",
    
    "OSUR	OraSure Technologies	Health Care Equipment & Supplies	",
    
    "OSW	OneSpaWorld Holdings	Diversified Consumer Services	",
    
    "OTEC	OceanTech Acquisitions I	Blank Check / SPAC	",
    
    "OTEX	Open Text	Software	",
    
    "OTIC	Otonomy	Pharmaceuticals	",
    
    "OTIS	Otis Worldwide	Machinery	",
    
    "OTLK	Outlook Therapeutics	Biotechnology	",
    
    "OTLY	Oatly Group AB	Beverages-Non-Alcoholic	",
    
    "OTMO	Otonomo Technologies	Software-Application	",
    
    "OTRA	OTR Acquisition	Blank Check / SPAC	",
    
    "OTRK	Ontrak	Health Care Providers & Services	",
    
    "OTTR	Otter Tail	Electric Utilities	",
    
    "OUST	Ouster	Electronic Components	",
    
    "OUT	OUTFRONT Media	Equity Real Estate Investment Trusts 	",
    
    "OVBC	Ohio Valley Banc	Banks	",
    
    "OVID	Ovid Therapeutics	Biotechnology	",
    
    "OVLY	Oak Valley Bancorp	Banks	",
    
    "OVV	Ovintiv	Oil Gas & Consumable Fuels	",
    
    "OWL	Blue Owl Capital	Asset Management	",
    
    "OWLT	Owlet	Medical Devices	",
    
    "OXAC	Oxbridge Acquisition	Blank Check / SPAC	",
    
    "OXBR	Oxbridge Re Holdings	Insurance	",
    
    "OXM	Oxford Industries	Textiles Apparel & Luxury Goods	",
    
    "OXSQ	Oxford Square Capital	Capital Markets	",
    
    "OXUS	Oxus Acquisition	Blank Check / SPAC	",
    
    "OXY	Occidental Petroleum	Oil Gas & Consumable Fuels	",
    
    "OYST	Oyster Point Pharma	Biotechnology	",
    
    "OZ	    Belpointe PREP LLC	Real Estate-Development	",
    
    "OZK	Bank OZK	Banks	",
    
    "OZON	Ozon Holdings	Internet & Direct Marketing Retail	",
    
    "PAA	Plains All American Pipeline	Oil Gas & Consumable Fuels	",
    
    "PAAS	Pan American Silver	Metals & Mining	",
    
    "PAC	Grupo Aeroportuario del Pacifico	Transportation Infrastructure	",
    
    "PACB	Pacific Biosciences of California	Life Sciences Tools & Services	",
    
    "PACI	PROOF Acquisition I	Blank Check / SPAC	",
    
    "PACK	Ranpak Holdings	Containers & Packaging	",
    
    "PACW	PacWest Bancorp	Banks	",
    
    "PACX	Pioneer Merger	Shell Companies	",
    
    "PAFO	Pacifico Acquisition	Blank Check / SPAC	",
    
    "PAG	Penske Automotive Group	Specialty Retail	",
    
    "PAGP	Plains GP Holdings LP	Oil Gas & Consumable Fuels	",
    
    "PAGS	PagSeguro Digital	IT Services	",
    ,
    "PAHC	Phibro Animal Health	Pharmaceuticals	",
    
    "PALI	Palisade Bio	Biotechnology	",
    
    "PALT	Paltalk	Software-Application	",
    
    "PAM	Pampa Energia	Electric Utilities	",
    ,
    "PANA	Panacea Acquisition II	Blank Check / SPAC	",
    
    "PANL	Pangaea Logistics Solutions	Marine	",
    
    "PANW	Palo Alto Networks	Software	",
    
    "PAQC	Provident Acquisition	Blank Check / SPAC	",
    
    "PAR	PAR Technology	Electronic Equipment Instruments & C	",
    
    "PARA	Paramount Global	Media	",
    
    "PARAA	Paramount Global	Entertainment	",
    
    "PARR	Par Pacific Holdings	Oil Gas & Consumable Fuels	",
    
    "PASG	Passage Bio	Biotechnology	",
    
    "PATH	UiPath	Software-Infrastructure	",
    
    "PATI	Patriot Transportation Holding	Road & Rail	",
    
    "PATK	Patrick Industries	Building Products	",
    
    "PAVM	PAVmed	Health Care Equipment & Supplies	",
    
    "PAX	Patria Investments	Asset Management	",
    
    "PAY	Paymentus Holdings	Electronic Equipment Instruments & C	",
    ,
    "PAYA	Paya Holdings	Software-Infrastructure	",
    
    "PAYC	Paycom Software	Software	",
    
    "PAYO	Payoneer Global	Software-Infrastructure	",
    
    "PAYS	PaySign	IT Services	",
    
    "PAYX	Paychex	IT Services	",
    
    "PB	     Prosperity Bancshares	Banks	",
    
    "PBA	Pembina Pipeline	Oil Gas & Consumable Fuels	",
    
    "PBAX	Phoenix Biotech Acquisition	Blank Check / SPAC	",
    
    "PBBK	PB Bankshares	Banks-Regional	",
    
    "PBF	PBF Energy	Oil Gas & Consumable Fuels	",
    
    "PBFS	Pioneer Bancorp	Thrifts & Mortgage Finance	",
    
    "PBFX	PBF Logistics LP	Oil Gas & Consumable Fuels	",
    
    "PBH	Prestige Consumer Healthcare	Pharmaceuticals	",
    
    "PBHC	Pathfinder Bancorp	Banks	",
    
    "PBI	Pitney Bowes	Commercial Services & Supplies	",
    
    "PBIP	Prudential Bancorp	Thrifts & Mortgage Finance	",
    
    "PBLA	Panbela Therapeutics	Biotechnology	",
    
    "PBPB	Potbelly	Hotels Restaurants & Leisure	",
    
    "PBR	Petroleo Brasileiro	Oil Gas & Consumable Fuels	",
    
    "PBRA	Petroleo Brasileiro	Oil Gas & Consumable Fuels	",
    
    "PBT	Permian Basin Royalty Trust	Oil Gas & Consumable Fuels	",
    
    "PBTS	Powerbridge Technologies Co	Software	",
    
    "PBYI	Puma Biotechnology	Biotechnology	",
    
    "PCAR	PACCAR	Machinery	",
    
    "PCB	PCB Bancorp	Banks	",
    
    "PCCT	Perception Capital II	Blank Check / SPAC	",
    
    "PCG	PG&E Corporation	Electric Utilities	",
    
    "PCH	PotlatchDeltic	Equity Real Estate Investment Trusts 	",
    
    "PCOM	Pointscom	Internet & Direct Marketing Retail	",
    
    "PCOR	Procore Technologies	Software-Application	",
    
    "PCPC	Periphas Capital Partnering	Blank Check / SPAC	",
    
    "PCRX	Pacira Biosciences	Pharmaceuticals	",
    
    "PCSA	Processa Pharmaceuticals	Biotechnology	",
    
    "PCSB	PCSB Financial	Thrifts & Mortgage Finance	",
    
    "PCT	PureCycle Technologies	Pollution & Treatment Controls	",
    
    "PCTI	PCTEL	Communications Equipment	",
    
    "PCTY	Paylocity Holding	Software	",
    
    "PCVX	Vaxcyte	Biotechnology	",
    
    "PCX	Parsec Capital Acquisitions	Blank Check / SPAC	",
    
    "PCYG	Park City Group	Software	",
    
    "PCYO	Pure Cycle	",
    
    "PD	     PagerDuty	Software	",
    
    "PDCE	PDC Energy	Oil Gas & Consumable Fuels	",
    
    "PDCO	Patterson Companies	Health Care Providers & Services	",
    
    "PDD	Pinduoduo	Internet & Direct Marketing Retail	",
    
    "PDEX	Pro-Dex	Health Care Equipment & Supplies	",
    
    "PDFS	PDF Solutions	Semiconductors & Semiconductor Equipment	",
    
    "PDLB	Ponce Financial Group	Thrifts & Mortgage Finance	",
    
    "PDM	Piedmont Office Realty Trust	Equity Real Estate Investment Trusts 	",
    
    "PDOT	Peridot Acquisition II	Blank Check / SPAC	",
    
    "PDS	Precision Drilling	Energy Equipment & Services	",
    
    "PDSB	PDS Biotechnology	Biotechnology	",
    
    "PEAK	Healthpeak Properties	Equity Real Estate Investment Trusts 	",
    
    "PEAR	Pear Therapeutics	Health Information Services	",
    
    "PEB	Pebblebrook Hotel Trust	Equity Real Estate Investment Trusts 	",
    
    "PEBK	Peoples Bancorp of North Carolina	Banks	",
    
    "PEBO	Peoples Bancorp	Banks	",
    
    "PECO	Phillips Edison & Company	REIT-Retail	",
    
    "PED	Pedevco	Oil Gas & Consumable Fuels	",
    
    "PEG	Public Service Enterprise Group	Multi-Utilities	",
    
    "PEGA	Pegasystems	Software	",
    
    "PEGR	Project Energy Reimagined Acquisition	Blank Check / SPAC	",
    
    "PEGY	Pineapple Holdings	Solar	",
    
    "PEI	Pennsylvania Real Estate Investment Trust	Equity Real Estate Investment Trusts 	",
    
    "PEN	Penumbra	Health Care Equipment & Supplies	",
    
    "PENN	Penn National Gaming	Hotels Restaurants & Leisure	",
    ,
    "PEP	PepsiCo	Beverages	",
    
    "PEPG	PepGen	Biotechnology	",
    
    "PEPL	PepperLime Health Acquisition	Blank Check / SPAC	",
    
    "PERI	Perion Network	Media	",
    
    "PESI	Perma-Fix Environmental Services	Commercial Services & Supplies	",
    
    "PETQ	PetIQ	Health Care Providers & Services	",
    
    "PETS	PetMed Express	Internet & Direct Marketing Retail	",
    
    "PETV	PetVivo Holdings	Health Care Equipment & Supplies	",
    
    "PETZ	TDH Holdings	Food Products	",
    
    "PFBC	Preferred Bank	Banks	",
    
    "PFC	Premier Financial	Thrifts & Mortgage Finance	",
    
    "PFDR	Pathfinder Acquisition	Blank Check / SPAC	",
    
    "PFE	Pfizer	Pharmaceuticals	",
    
    "PFG	Principal Financial Group	Insurance	",
    
    "PFGC	Performance Food Group Company	Food & Staples Retailing	",
    
    "PFHD	Professional Holding	Banks	",
    
    "PFIE	Profire Energy	Energy Equipment & Services	",
    
    "PFIN	P&F Industries	Household Durables	",
    
    "PFIS	Peoples Financial Services	Banks	",
    
    "PFLT	PennantPark Floating Rate Capital	Capital Markets	",
    
    "PFMT	Performant Financial	Commercial Services & Supplies	",
    
    "PFS	Provident Financial Services	Thrifts & Mortgage Finance	",
    ,
    "PFSI	PennyMac Financial Services	Thrifts & Mortgage Finance	",
    ,
    "PFSW	PFSweb	IT Services	",
    
    "PFTA	Portage Fintech Acquisition	Blank Check / SPAC	",
    
    "PFX	PhenixFIN	Capital Markets	",
    
    "PG	    The Procter & Gamble Company	Household Products	",
    
    "PGC	Peapack-Gladstone Financial	Banks	",
    
    "PGEN	Precigen	Biotechnology	",
    
    "PGNY	Progyny	Health Care Providers & Services	",
    
    "PGR	The Progressive Corporation	Insurance	",
    
    "PGRE	Paramount Group	Equity Real Estate Investment Trusts 	",
    
    "PGRU	PropertyGuru Group	Real Estate Services	",
    
    "PGRW	Progress Acquisition	Blank Check / SPAC	",
    
    "PGSS	Pegasus Digital Mobility Acquisition	Blank Check / SPAC	",
    
    "PGTI	PGT Innovations	Building Products	",
    
    "PH	    Parker-Hannifin	Machinery	",
    
    "PHAR	Pharming Group	Biotechnology	",
    
    "PHAS	PhaseBio Pharmaceuticals	Biotechnology	",
    
    "PHAT	Phathom Pharmaceuticals	Pharmaceuticals	",
    
    "PHCF	Puhui Wealth Investment Management Co	Capital Markets	",
    
    "PHG	Koninklijke Philips	Health Care Equipment & Supplies	",
    ,
    "PHGE	BiomX	Biotechnology	",
    
    "PHI	PLDT Inc		",
    
    "PHIC	Population Health Investment Co	Blank Check / SPAC	",
    
    "PHIO	Phio Pharmaceuticals	Biotechnology	",
    
    "PHM	PulteGroup	Household Durables	",
    
    "PHR	Phreesia	Health Care Technology	",
    
    "PHUN	Phunware	Software-Application	",
    
    "PHVS	Pharvaris NV	Biotechnology	",
    
    "PHX	PHX Minerals	Oil Gas & Consumable Fuels	",
    
    "PHYT	Pyrophyte Acquisition	Blank Check / SPAC	",
    
    "PI	    Impinj	Semiconductors & Semiconductor Equipment	",
    
    "PIAI	Prime Impact Acquisition I	Blank Check / SPAC	",
    
    "PICC	Pivotal Investment Corporation III	Blank Check / SPAC	",
    
    "PII	Polaris	Leisure Products	",
    
    "PIII	P Health Partners	Medical Care Facilities	",
    
    "PIK	Kidpik	Internet Retail	",
    
    "PINC	Premier	Health Care Providers & Services	",
    
    "PINE	Alpine Income Property Trust	Equity Real Estate Investment Trusts 	",
    
    "PING	Ping Identity Holding	Software	",
    
    "PINS	Pinterest	Interactive Media & Services	",
    
    "PIPP	Pine Island Acquisition	Blank Check / SPAC	",
    
    "PIPR	Piper Sandler Companies	Capital Markets	",
    
    "PIRS	Pieris Pharmaceuticals	Biotechnology	",
    
    "PIXY	ShiftPixy	Professional Services	",
    
    "PJT	PJT Partners	Capital Markets	",
    
    "PK	    Park Hotels & Resorts	Equity Real Estate Investment Trusts 	",
    
    "PKBK	Parke Bancorp	Banks	",
    
    "PKE	Park Aerospace	Aerospace & Defense	",
    
    "PKG	Packaging Corporation of America	Containers & Packaging	",
    
    "PKI	PerkinElmer	Life Sciences Tools & Services	",
    
    "PKOH	Park-Ohio Holdings	Machinery	",
    
    "PKX	POSCO	Metals & Mining	",
    
    "PL	     Planet Labs PBC	Aerospace & Defense	",
    
    "PLAB	Photronics	Semiconductors & Semiconductor Equipment	",
    
    "PLAG	Planet Green Holdings	Food Products	",
    
    "PLAN	Anaplan	Software	",
    ,
    "PLAO	Patria Latin American Opportunity Acquisition	Blank Check / SPAC	",
    
    "PLAY	Dave & Buster's Entertainment	Hotels Restaurants & Leisure	",
    
    "PLBC	Plumas Bancorp	Banks	",
    
    "PLBY	PLBY Group	Textiles Apparel & Luxury Goods	",
    
    "PLCE	The Children's Place	Specialty Retail	",
    
    "PLD	Prologis	Equity Real Estate Investment Trusts 	",
    
    "PLG	Platinum Group Metals	Metals & Mining	",
    
    "PLL	Piedmont Lithium	Metals & Mining	",
    
    "PLM	PolyMet Mining	Metals & Mining	",
    
    "PLMI	Plum Acquisition I	Blank Check / SPAC	",
    
    "PLMR	Palomar Holdings	Insurance	",
    
    "PLNT	Planet Fitness	Hotels Restaurants & Leisure	",
    
    "PLOW	Douglas Dynamics	Machinery	",
    
    "PLPC	Preformed Line Products Company	Electrical Equipment	",
    
    "PLRX	Pliant Therapeutics	Biotechnology	",
    
    "PLSE	Pulse Biosciences	Health Care Equipment & Supplies	",
    
    "PLTK	Playtika Holding	Electronic Gaming & Multimedia	",
    
    "PLTR	Palantir Technologies	Software	",
    
    "PLUG	Plug Power	Electrical Equipment	",
    ,
    "PLUS	ePlus	Electronic Equipment Instruments & C	",
    
    "PLX	Protalix BioTherapeutics	Biotechnology	",
    
    "PLXP	PLx Pharma	Pharmaceuticals	",
    
    "PLXS	Plexus	Electronic Equipment Instruments & C	",
    ,
    "PLYA	Playa Hotels & Resorts	Hotels Restaurants & Leisure	",
    
    "PLYM	Plymouth Industrial REIT	Equity Real Estate Investment Trusts 	",
    
    "PM	     Philip Morris International	Tobacco	",
    
    "PMCB	PharmaCyte Biotech	Biotechnology	",
    
    "PMD	Psychemedics	Health Care Providers & Services	",
    
    "PME	Pingtan Marine Enterprise	Food Products	",
    
    "PMGM	Priveterra Acquisition	Blank Check / SPAC	",
    
    "PMT	PennyMac Mortgage Investment Trust	Mortgage Real Estate Investment Trust	",
    
    "PMTS	CPI Card Group	Technology Hardware Storage & Periph	",
    
    "PMVC	PMV Consumer Acquisition	Blank Check / SPAC	",
    
    "PMVP	PMV Pharmaceuticals	Biotechnology	",
    
    "PNBK	Patriot National Bancorp	Banks	",
    
    "PNC	The PNC Financial Services Group	Banks	",
    
    "PNFP	Pinnacle Financial Partners	Banks	",
    
    "PNM	PNM Resources	Electric Utilities	",
    
    "PNNT	PennantPark Investment	Capital Markets	",
    
    "PNR	Pentair	Machinery	",
    
    "PNRG	PrimeEnergy Resources	Oil Gas & Consumable Fuels	",
    
    "PNT	POINT Biopharma Global	Biotechnology	",
    
    "PNTG	The Pennant Group	Health Care Providers & Services	",
    
    "PNTM	Pontem	Blank Check / SPAC	",
    
    "PNW	Pinnacle West Capital	Electric Utilities	",
    
    "POAI	Predictive Oncology	Health Care Equipment & Supplies	",
    
    "PODD	Insulet	Health Care Equipment & Supplies	",
    
    "POET	POET Technologies	Semiconductors	",
    
    "POLA	Polar Power	Electrical Equipment	",
    
    "POLY	Plantronics	Communications Equipment	",
    
    "POND	Angel Pond Holdings	Blank Check / SPAC	",
    
    "PONO	Pono Capital	Blank Check / SPAC	",
    
    "POOL	Pool Corporation	Distributors	",
    
    "POR	Portland General Electric Company	Electric Utilities	",
    
    "PORT	Southport Acquisition	Blank Check / SPAC	",
    
    "POSH	Poshmark	Internet & Direct Marketing Retail	",
    
    "POST	Post Holdings	Food Products	",
    
    "POW	Powered Brands	Blank Check / SPAC	",
    
    "POWI	Power Integrations	Semiconductors & Semiconductor Equipment	",
    
    "POWL	Powell Industries	Electrical Equipment	",
    
    "POWW	AMMO Inc	Leisure Products	",
    
    "PPBI	Pacific Premier Bancorp	Banks	",
    ,
    "PPBT	Purple Biotech	Biotechnology	",
    
    "PPC	Pilgrim's Pride	Food Products	",
    
    "PPG	PPG Industries	Chemicals	",
    
    "PPHP	PHP Ventures Acquisition	Blank Check / SPAC	",
    
    "PPIH	Perma-Pipe International Holdings	Machinery	",
    
    "PPL	PPL Corporation	Electric Utilities	",
    
    "PPSI	Pioneer Power Solutions	Electrical Equipment	",
    
    "PPTA	Perpetua Resources	Other Precious Metals & Mining	",
    
    "PPYA	Papaya Growth Opportunity I	Blank Check / SPAC	",
    
    "PRA	ProAssurance	Insurance	",
    
    "PRAA	PRA Group	Consumer Finance	",
    
    "PRAX	Praxis Precision Medicines	Biotechnology	",
    
    "PRBM	Parabellum Acquisition	Blank Check / SPAC	",
    
    "PRCH	Porch Group	Software-Application	",
    
    "PRCT	PROCEPT BioRobotics	Medical Devices	",
    
    "PRDO	Perdoceo Education	Diversified Consumer Services	",
    
    "PRDS	Pardes Biosciences	Shell Companies	",
    
    "PRFT	Perficient	IT Services	",
    
    "PRFX	PainReform	Drug Manufacturers-Specialty & Generic	",
    
    "PRG	PROG Holdings	Rental & Leasing Services	",
    ,
    "PRGO	Perrigo Company	Pharmaceuticals	",
    
    "PRGS	Progress Software	Software	",
    
    "PRI	Primerica	Insurance	",
    
    "PRIM	Primoris Services	Construction & Engineering	",
    
    "PRK	Park National	Banks	",
    
    "PRLB	Proto Labs	Machinery	",
    
    "PRLD	Prelude Therapeutics	Biotechnology	",
    
    "PRLH	Pearl Holdings Acquisition	Blank Check / SPAC	",
    
    "PRM	Perimeter Solutions	Specialty Chemicals	",
    
    "PRO	PROS Holdings	Software	",
    
    "PROC	Procaps Group	Drug Manufacturers-Specialty & Generic	",
    
    "PROF	Profound Medical	Health Care Equipment & Supplies	",
    
    "PROV	Provident Financial Holdings	Thrifts & Mortgage Finance	",
    
    "PRPB	CC Neuberger Principal Holdings II	Shell Companies	",
    
    "PRPC	CC Neuberger Principal Holdings III	Blank Check / SPAC	",
    
    "PRPH	ProPhase Labs	Pharmaceuticals	",
    
    "PRPL	Purple Innovation	Household Durables	",
    
    "PRPO	Precipio	Health Care Providers & Services	",
    
    "PRQR	ProQR Therapeutics	Biotechnology	",
    
    "PRSO	Peraso	Semiconductors & Semiconductor Equipment	",
    
    "PRSR	Prospector Capital	Blank Check / SPAC	",
    
    "PRT	PermRock Royalty Trust	Oil Gas & Consumable Fuels	",
    
    "PRTA	Prothena	Biotechnology	",
    ,
    "PRTC	PureTech Health	Biotechnology	",
    
    "PRTG	Portage Biotech	Biotechnology	",
    
    "PRTH	Priority Technology Holdings	IT Services	",
    
    "PRTK	Paratek Pharmaceuticals	Pharmaceuticals	",
    
    "PRTS	CarPartscom	Internet & Direct Marketing Retail	",
    
    "PRTY	Party City Holdco	Specialty Retail	",
    
    "PRU	Prudential Financial	Insurance	",
    
    "PRVA	Privia Health Group	Health Information Services	",
    
    "PRVB	Provention Bio	Pharmaceuticals	",
    
    "PSA	Public Storage	Equity Real Estate Investment Trusts 	",
    
    "PSAG	Property Solutions Acquisition II	Blank Check / SPAC	",
    
    "PSB	PS Business Parks	Equity Real Estate Investment Trusts 	",
    
    "PSEC	Prospect Capital	Capital Markets	",
    
    "PSFE	Paysafe	Information Technology Services	",
    ,
    "PSHG	Performance Shipping	Marine Shipping	",
    
    "PSMT	PriceSmart	Food & Staples Retailing	",
    
    "PSN	Parsons	Aerospace & Defense	",
    
    "PSNL	Personalis	Life Sciences Tools & Services	",
    
    "PSO	Pearson	Media	",
    
    "PSPC	Post Holdings Partnering	Blank Check / SPAC	",
    
    "PSTG	Pure Storage	Technology Hardware Storage & Periph	",
    
    "PSTH	Pershing Square Tontine Holdings	Diversified Financial Services	",
    
    "PSTI	Pluristem Therapeutics	Biotechnology	",
    
    "PSTL	Postal Realty Trust	Equity Real Estate Investment Trusts 	",
    
    "PSTV	Plus Therapeutics	Biotechnology	",
    
    "PSTX	Poseida Therapeutics	Biotechnology	",
    
    "PSX	Phillips 	Oil Gas & Consumable Fuels	",
    
    "PT	     Pintec Technology Holdings	Consumer Finance	",
    
    "PTC	PTC Inc	Software	",
    
    "PTCT	PTC Therapeutics	Biotechnology	",
    
    "PTE	PolarityTE	Biotechnology	",
    
    "PTEN	Patterson-UTI Energy	Energy Equipment & Services	",
    
    "PTGX	Protagonist Therapeutics	Biotechnology	",
    
    "PTIC	Proptech Investment Corporation II	Blank Check / SPAC	",
    
    "PTIX	Protagenic Therapeutics	Biotechnology	",
    
    "PTLO	Portillo's	Restaurants	",
    
    "PTMN	Portman Ridge Finance	Capital Markets	",
    
    "PTN	Palatin Technologies	Biotechnology	",
    
    "PTNR	Partner Communications Company		",
    
    "PTOC	Pine Technology Acquisition	Blank Check / SPAC	",
    
    "PTON	Peloton Interactive	Leisure Products	",
    
    "PTPI	Petros Pharmaceuticals	Drug Manufacturers-Specialty & Generic	",
    
    "PTR	PetroChina Company	Oil Gas & Consumable Fuels	",
    
    "PTRA	Proterra	Auto Manufacturers	",
    
    "PTRS	Partners Bancorp	Banks	",
    
    "PTSI	PAM Transportation Services	Road & Rail	",
    
    "PTVE	Pactiv Evergreen	Containers & Packaging	",
    
    "PUBM	PubMatic	Internet & Direct Marketing Retail	",
    
    "PUCK	Goal Acquisitions	Blank Check / SPAC	",
    
    "PUK	Prudential	Insurance	",
    
    "PULM	Pulmatrix	Pharmaceuticals	",
    
    "PUMP	ProPetro Holding	Energy Equipment & Services	",
    
    "PUYI	Puyi Inc	Capital Markets	",
    
    "PV	   Primavera Capital Acquisition	Blank Check / SPAC	",
    
    "PVBC	Provident Bancorp	Thrifts & Mortgage Finance	",
    
    "PVH	PVH Corp	Textiles Apparel & Luxury Goods	",
    
    "PVL	Permianville Royalty Trust	Oil Gas & Consumable Fuels	",
    
    "PW	   Power REIT	Equity Real Estate Investment Trusts 	",
    
    "PWFL	PowerFleet	Electronic Equipment Instruments & C	",
    
    "PWOD	Penns Woods Bancorp	Banks	",
    
    "PWP	Perella Weinberg Partners	Capital Markets	",
    
    "PWR	Quanta Services	Construction & Engineering	",
    ,
    "PWSC	PowerSchool Holdings	Software-Application	",
    
    "PWUP	PowerUp Acquisition	Blank Check / SPAC	",
    
    "PX	    P Inc	Capital Markets	",
    
    "PXD	Pioneer Natural Resources Company	Oil Gas & Consumable Fuels	",
    
    "PXLW	Pixelworks	Semiconductors & Semiconductor Equipment	",
    
    "PXS	Pyxis Tankers	Marine	",
    
    "PYCR	Paycor HCM	Software-Application	",
    
    "PYPD	PolyPid	Biotechnology	",
    
    "PYPL	PayPal Holdings	IT Services	",
    
    "PYR	Pyrogenesis Canada	Specialty Industrial Machinery	",
    
    "PYXS	Pyxis Oncology	Biotechnology	",
    
    "PZG	Paramount Gold Nevada	Metals & Mining	",
    
    "PZN	Pzena Investment Management	Capital Markets	",
    
    "PZZA	Papa John's International	Hotels Restaurants & Leisure	",
    
    "QCOM	Qualcomm	Semiconductors & Semiconductor Equipment	",
    
    "QCRH	QCR Holdings	Banks	",
    
    "QD	   Qudian	Consumer Finance	",
    
    "QDEL	Quidel	Health Care Equipment & Supplies	",
    
    "QFIN	 DigiTech	Consumer Finance	",
    
    "QFTA	Quantum FinTech Acquisition	Blank Check / SPAC	",
    
    "QGEN	Qiagen	Life Sciences Tools & Services	",
    
    "QH	    Quhuo	Software-Application	",
    
    "QIPT	Quipt Home Medical	Medical Devices	",
    
    "QIWI	Qiwi PLC	IT Services	",
    
    "QK	     Q&K International Group	Real Estate Management & Development	",
    
    "QLGN	Qualigen Therapeutics	Biotechnology	",
    
    "QLI	Qilian International Holding Group	Drug Manufacturers-Specialty & Generic	",
    
    "QLYS	Qualys	Software	",
    ,
    "QMCO	Quantum	Technology Hardware Storage & Periph	",
    
    "QNGY	Quanergy Systems	Scientific & Technical Instruments	",
    
    "QNRX	Quoin Pharmaceuticals	Biotechnology	",
    
    "QNST	QuinStreet	Interactive Media & Services	",
    
    "QRHC	Quest Resource Holding	Commercial Services & Supplies	",
    
    "QRTEA	Qurate Retail	Internet & Direct Marketing Retail	",
    
    "QRTEB	Qurate Retail	Internet & Direct Marketing Retail	",
    
    "QRVO	Qorvo	Semiconductors & Semiconductor Equipment	",
    
    "QS	      QuantumScape	Auto Components	",
    
    "QSI	Quantum-Si	Biotechnology	",
    
    "QSR	Restaurant Brands International	Hotels Restaurants & Leisure	",
    ,
    "QTEK	QualTek Services	Telecom Services	",
    
    "QTNT	Quotient	Health Care Equipment & Supplies	",
    
    "QTRX	Quanterix	Life Sciences Tools & Services	",
    
    "QTT	Qutoutiao	Interactive Media & Services	",
    
    "QTWO	Q Holdings	Software	",
    
    "QUAD	Quad/Graphics	Commercial Services & Supplies	",
    
    "QUBT	Quantum Computing	Computer Hardware	",
    
    "QUIK	QuickLogic	Semiconductors & Semiconductor Equipment	",
    
    "QUMU	Qumu Corporation	Software	",
    
    "QUOT	Quotient Technology	Internet & Direct Marketing Retail	",
    
    "QURE	uniQure	Biotechnology	",
    
    "R	     Ryder System	Road & Rail	",
    
    "RAAS	Cloopen Group Holding	Software-Application	",
    
    "RACB	Research Alliance II	Blank Check / SPAC	",
    
    "RACE	Ferrari	Automobiles	",
    
    "RACY	Relativity Acquisition	Blank Check / SPAC	",
    
    "RAD	Rite Aid	Food & Staples Retailing	",
    
    "RADA	RADA Electronic Industries	Aerospace & Defense	",
    
    "RADI	Radius Global Infrastructure	Telecom Services	",
    
    "RAIL	FreightCar America	Machinery	",
    
    "RAIN	Rain Therapeutics	Biotechnology	",
    
    "RAM	Aries I Acquisition	Blank Check / SPAC	",
    
    "RAMP	LiveRamp Holdings	IT Services	",
    ,
    "RAND	Rand Capital	Capital Markets	",
    
    "RANI	Rani Therapeutics Holdings	Biotechnology	",
    
    "RAPT	Rapt Therapeutics	Biotechnology	",
    
    "RARE	Ultragenyx Pharmaceutical	Biotechnology	",
    
    "RAVE	Rave Restaurant Group	Hotels Restaurants & Leisure	",
    
    "RBA	Ritchie Bros Auctioneers	Commercial Services & Supplies	",
    
    "RBAC	RedBall Acquisition	Blank Check / SPAC	",
    
    "RBB	RBB Bancorp	Banks	",
    
    "RBBN	Ribbon Communications	Communications Equipment	",
    
    "RBCAA	Republic Bancorp	Banks	",
    
    "RBCN	Rubicon Technology	Semiconductors & Semiconductor Equipment	",
    
    "RBKB	Rhinebeck Bancorp	Thrifts & Mortgage Finance	",
    
    "RBLX	Roblox	Electronic Gaming & Multimedia	",
    
    "RBOT	Vicarious Surgical	Medical Devices	",
    
    "RC	     Ready Capital	Mortgage Real Estate Investment Trust	",
    
    "RCAC	Revelstone Capital Acquisition	Blank Check / SPAC	",
    
    "RCAT	Red Cat Holdings	Computer Hardware	",
    
    "RCEL	AVITA Medical	Biotechnology	",
    
    "RCFA	RCF Acquisition	Blank Check / SPAC	",
    
    "RCHG	Recharge Acquisition	Blank Check / SPAC	",
    
    "RCI	Rogers Communications		",
    
    "RCII	Rent-A-Center	Specialty Retail	",
    
    "RCKT	Rocket Pharmaceuticals	Biotechnology	",
    
    "RCKY	Rocky Brands	Textiles Apparel & Luxury Goods	",
    
    "RCL	Royal Caribbean Cruises	Hotels Restaurants & Leisure	",
    
    "RCLF	Rosecliff Acquisition I	Blank Check / SPAC	",
    
    "RCM	R RCM	Health Care Providers & Services	",
    
    "RCMT	RCM Technologies	Professional Services	",
    
    "RCON	Recon Technology	Energy Equipment & Services	",
    
    "RCOR	Renovacor	Biotechnology	",
    
    "RCRT	Recruitercom Group	Staffing & Employment Services	",
    
    "RCUS	Arcus Biosciences	Biotechnology	",
    
    "RDBX	Redbox Entertainment	Shell Companies	",
    
    "RDCM	RADCOM	Communications Equipment	",
    
    "RDFN	Redfin	Real Estate Management & Development	",
    ,
    "RDHL	RedHill Biopharma	Pharmaceuticals	",
    
    "RDI	Reading International	Entertainment	",
    
    "RDIB	Reading International	Entertainment	",
    
    "RDN	Radian Group	Thrifts & Mortgage Finance	",
    
    "RDNT	RadNet	Health Care Providers & Services	",
    
    "RDUS	Radius Health	Biotechnology	",
    
    "RDVT	Red Violet	Professional Services	",
    
    "RDW	Redwire	Aerospace & Defense	",
    
    "RDWR	Radware	Communications Equipment	",
    
    "RDY	Dr Reddy's Laboratories	Pharmaceuticals	",
    
    "RE	     Everest Re Group	Insurance	",
    
    "REAL	The RealReal	Internet & Direct Marketing Retail	",
    
    "REAX	The Real Brokerage	Real Estate Services	",
    
    "REDU	RISE Education Cayman	Diversified Consumer Services	",
    
    "REE	REE Automotive	Recreational Vehicles	",
    
    "REED	Reed's	Beverages	",
    
    "REFI	Chicago Atlantic Real Estate Finance	REIT-Mortgage	",
    
    "REFR	Research Frontiers	Electronic Equipment Instruments & C	",
    
    "REG	Regency Centers	Equity Real Estate Investment Trusts 	",
    ,
    "REGI	Renewable Energy Group	Oil Gas & Consumable Fuels	",
    
    "REGN	Regeneron Pharmaceuticals	Biotechnology	",
    
    "REI	Ring Energy	Oil Gas & Consumable Fuels	",
    
    "REKR	Rekor Systems	Professional Services	",
    
    "RELI	Reliance Global Group	Insurance Brokers	",
    
    "RELL	Richardson Electronics	Electronic Equipment Instruments & C	",
    
    "RELX	Relx PLC	Professional Services	",
    
    "RELY	Remitly Global	Software-Infrastructure	",
    
    "RENE	Cartesian Growth Corporation II	Blank Check / SPAC	",
    
    "RENN	Renren	Specialty Retail	",
    
    "RENO	Renovare Environmental	Pollution & Treatment Controls	",
    
    "RENT	Rent The Runway	Apparel Retail	",
    
    "REPL	Replimune Group	Biotechnology	",
    
    "REPX	Riley Exploration Permian	Oil Gas & Consumable Fuels	",
    
    "RERE	AiHuiShou International Co	Internet Retail	",
    
    "RES	RPC Inc	Energy Equipment & Services	",
    
    "RETA	Reata Pharmaceuticals	Pharmaceuticals	",
    
    "RETO	ReTo Eco-Solutions	Construction Materials	",
    
    "REV	Revlon	Personal Products	",
    
    "REVB	Revelation Biosciences	Biotechnology	",
    
    "REVE	Alpine Acquisition	Blank Check / SPAC	",
    
    "REVG	REV Group	Machinery	",
    
    "REVH	Revolution Healthcare Acquisition	Blank Check / SPAC	",
    
    "REX	REX American Resources	Oil Gas & Consumable Fuels	",
    
    "REXR	Rexford Industrial Realty	Equity Real Estate Investment Trusts 	",
    
    "REYN	Reynolds Consumer Products	Packaging & Containers	",
    
    "REZI	Resideo Technologies	Building Products	",
    
    "RF	       Regions Financial	Banks	",
    
    "RFAC	RF Acquisition	Blank Check / SPAC	",
    
    "RFIL	RF Industries	Electronic Equipment Instruments & C	",
    
    "RFL	Rafael Holdings	Real Estate Management & Development	",
    
    "RFP	Resolute Forest Products	Paper & Forest Products	",
    
    "RGA	Reinsurance Group of America	Insurance	",
    
    "RGC	Regencell Bioscience Holdings	Drug Manufacturers-Specialty & Generic	",
    
    "RGCO	RGC Resources	Gas Utilities	",
    
    "RGEN	Repligen	Life Sciences Tools & Services	",
    
    "RGF	Real Good Food Company	Packaged Foods	",
    
    "RGLD	Royal Gold	Metals & Mining	",
    
    "RGLS	Regulus Therapeutics	Biotechnology	",
    
    "RGNX	REGENXBIO	Biotechnology	",
    
    "RGP	Resources Connection	Oil Gas & Consumable Fuels	",
    
    "RGR	Sturm Ruger & Company	Leisure Products	",
    
    "RGS	Regis	Diversified Consumer Services	",
    
    "RGTI	Rigetti Computing	Computer Hardware	",
    
    "RH	   RH	Specialty Retail	",
    
    "RHE	Regional Health Properties	Health Care Providers & Services	",
    
    "RHI	Robert Half International	Professional Services	",
    
    "RHP	Ryman Hospitality Properties	Equity Real Estate Investment Trusts 	",
    
    "RIBT	RiceBran Technologies	Food Products	",
    
    "RICK	RCI Hospitality Holdings	Hotels Restaurants & Leisure	",
    
    "RICO	Agrico Acquisition	Blank Check / SPAC	",
    
    "RIDE	Lordstown Motors	Automobiles	",
    
    "RIG	Transocean	Energy Equipment & Services	",
    
    "RIGL	Rigel Pharmaceuticals	Biotechnology	",
    
    "RILY	B Riley Financial	Capital Markets	",
    
    "RIO	Rio Tinto	Metals & Mining	",
    
    "RIOT	Riot Blockchain	Software	",
    
    "RIVN	Rivian Automotive	Auto Manufacturers	",
    
    "RJAC	Jackson Acquisition Company	Blank Check / SPAC	",
    
    "RJF	Raymond James Financial	Capital Markets	",
    
    "RKDA	Arcadia Biosciences	Food Products	",
    
    "RKLB	Rocket Lab USA	Aerospace & Defense	",
    
    "RKLY	Rockley Photonics Holdings	Semiconductors	",
    
    "RKT	Rocket Companies	Thrifts & Mortgage Finance	",
    
    "RKTA	Rocket Internet Growth Opportunities	Blank Check / SPAC	",
    
    "RL	       Ralph Lauren	Textiles Apparel & Luxury Goods	",
    
    "RLAY	Relay Therapeutics	Biotechnology	",
    
    "RLGT	Radiant Logistics	Air Freight & Logistics	",
    
    "RLGY	Realogy Holdings	Real Estate Management & Development	",
    
    "RLI	RLI Corp	Insurance	",
    
    "RLJ	RLJ Lodging Trust	Equity Real Estate Investment Trusts 	",
    
    "RLMD	Relmada Therapeutics	Pharmaceuticals	",
    
    "RLX	RLX Technology	Tobacco	",
    
    "RLYB	Rallybio	Biotechnology	",
    
    "RM	     Regional Management	Consumer Finance	",
    
    "RMAX	RE/MAX Holdings	Real Estate Management & Development	",
    
    "RMBI	Richmond Mutual Bancorporation	Banks	",
    
    "RMBL	RumbleOn	Internet & Direct Marketing Retail	",
    
    "RMBS	Rambus	Semiconductors & Semiconductor Equipment	",
    
    "RMCF	Rocky Mountain Chocolate Factory	Food Products	",
    
    "RMD	ResMed	Health Care Equipment & Supplies	",
    
    "RMED	Ra Medical Systems	Health Care Equipment & Supplies	",
    
    "RMGC	RMG Acquisition III	Blank Check / SPAC	",
    
    "RMNI	Rimini Street	Software	",
    
    "RMO	Romeo Power	Electrical Equipment	",
    
    "RMR	The RMR Group	Real Estate Management & Development	",
    
    "RMTI	Rockwell Medical	Health Care Equipment & Supplies	",
    
    "RNA	Avidity Biosciences	Biotechnology	",
    
    "RNAZ	TransCode Therapeutics	Biotechnology	",
    
    "RNDB	Randolph Bancorp	Thrifts & Mortgage Finance	",
    
    "RNER	Mount Rainier Acquisition	Blank Check / SPAC	",
    
    "RNG	RingCentral	Software	",
    
    "RNGR	Ranger Energy Services	Energy Equipment & Services	",
    
    "RNLX	Renalytix	Health Care Technology	",
    
    "RNR	RenaissanceRe Holdings	Insurance	",
    
    "RNST	Renasant	Banks	",
    
    "RNW	ReNew Energy Global	Utilities-Renewable	",
    
    "RNWK	RealNetworks	Software	",
    
    "RNXT	RenovoRx	Biotechnology	",
    
    "ROAD	Construction Partners	Construction & Engineering	",
    
    "ROC	ROC Energy Acquisition	Blank Check / SPAC	",
    
    "ROCC	Ranger Oil	Oil & Gas E&P	",
    
    "ROCG	Roth CH Acquisition IV Co	Blank Check / SPAC	",
    
    "ROCK	Gibraltar Industries	Building Products	",
    
    "ROCL	Roth CH Acquisition V Co	Blank Check / SPAC	",
    
    "ROG	Rogers	Electronic Equipment Instruments & C	",
    
    "ROIC	Retail Opportunity Investments	Equity Real Estate Investment Trusts 	",
    ,
    "ROIV	Roivant Sciences	Biotechnology	",
    
    "ROK	Rockwell Automation	Electrical Equipment	",
    
    "ROKU	Roku Inc	Entertainment	",
    
    "ROL	Rollins	Commercial Services & Supplies	",
    
    "ROLL	RBC Bearings	Machinery	",
    
    "RONI	Rice Acquisition II	Blank Check / SPAC	",
    
    "ROOT	Root Inc	Insurance-Property & Casualty	",
    
    "ROP	Roper Technologies	Industrial Conglomerates	",
    
    "ROSE	Rose Hill Acquisition	Blank Check / SPAC	",
    
    "ROSS	Ross Acquisition II	Blank Check / SPAC	",
    
    "ROST	Ross Stores	Specialty Retail	",
    
    "ROVR	Rover Group	Personal Services	",
    
    "RPAY	Repay Holdings	IT Services	",
    
    "RPD	Rapid	Software	",
    
    "RPHM	Reneo Pharmaceuticals	Biotechnology	",
    
    "RPID	Rapid Micro Biosystems		",
    
    "RPM	RPM International	Chemicals	",
    
    "RPRX	Royalty Pharma	Pharmaceuticals	",
    
    "RPT	RPT Realty	Equity Real Estate Investment Trusts 	",
    
    "RPTX	Repare Therapeutics	Biotechnology	",
    
    "RRAC	Rigel Resource Acquisition	Blank Check / SPAC	",
    
    "RRBI	Red River Bancshares	Banks	",
    
    "RRC	Range Resources	Oil Gas & Consumable Fuels	",
    
    "RRGB	Red Robin Gourmet Burgers	Hotels Restaurants & Leisure	",
    
    "RRR	Red Rock Resorts	Hotels Restaurants & Leisure	",
    
    "RRX	Regal Rexnord	Specialty Industrial Machinery	",
    
    "RS	       Reliance Steel & Aluminum Co	Metals & Mining	",
    
    "RSG	Republic Services	Commercial Services & Supplies	",
    ,
    "RSI	Rush Street Interactive	Gambling	",
    
    "RSKD	Riskified	Software-Application	",
    
    "RSLS	ReShape Lifesciences	Health Care Equipment & Supplies	",
    
    "RSSS	Research Solutions	IT Services	",
    
    "RSVR	Reservoir Media	Entertainment	",
    
    "RTL	Necessity Retail REIT	REIT-Diversified	",
    
    "RTLR	Rattler Midstream LP	Oil Gas & Consumable Fuels	",
    
    "RTX	Raytheon Technologies	Aerospace & Defense	",
    ,
    "RUBY	Rubius Therapeutics	Biotechnology	",
    
    "RUN	SunRun	Electrical Equipment	",
    
    "RUSHA	Rush Enterprises	Trading Companies & Distributors	",
    
    "RUSHB	Rush Enterprises	Auto & Truck Dealerships	",
    
    "RUTH	Ruth's Hospitality Group	Hotels Restaurants & Leisure	",
    
    "RVAC	Riverview Acquisition	Blank Check / SPAC	",
    
    "RVLP	RVL Pharmaceuticals	Biotechnology	",
    
    "RVLV	Revolve Group	Internet & Direct Marketing Retail	",
    
    "RVMD	Revolution Medicines	Biotechnology	",
    
    "RVNC	Revance Therapeutics	Pharmaceuticals	",
    
    "RVP	Retractable Technologies	Health Care Equipment & Supplies	",
    
    "RVPH	Reviva Pharmaceuticals Holdings	Biotechnology	",
    
    "RVSB	Riverview Bancorp	Thrifts & Mortgage Finance	",
    
    "RVSN	Rail Vision	Industrials	",
    
    "RWAY	Runway Growth Finance	Credit Services	",
    
    "RWLK	ReWalk Robotics	Health Care Equipment & Supplies	",
    
    "RWOD	Redwoods Acquisition	Blank Check / SPAC	",
    
    "RWT	Redwood Trust	Mortgage Real Estate Investment Trust	",
    
    "RXDX	Prometheus Biosciences	Biotechnology	",
    
    "RXRA	RXR Acquisition	Blank Check / SPAC	",
    
    "RXRX	Recursion Pharmaceuticals	Biotechnology	",
    
    "RXST	RxSight	Medical Devices	",
    
    "RXT	Rackspace Technology	Software-Infrastructure	",
    
    "RY	    Royal Bank of Canada	Banks	",
    
    "RYAAY	Ryanair Holdings	Airlines	",
    
    "RYAM	Rayonier Advanced Materials	Chemicals	",
    
    "RYAN	Ryan Specialty Group Holdings	Insurance-Specialty	",
    
    "RYB	RYB Education	Diversified Consumer Services	",
    
    "RYI	Ryerson Holding	Metals & Mining	",
    
    "RYN	Rayonier	Equity Real Estate Investment Trusts 	",
    
    "RYTM	Rhythm Pharmaceuticals	Biotechnology	",
    
    "RZLT	Rezolute	Biotechnology	",
    
    "S	   SentinelOne	Software-Infrastructure	",
    
    "SA	     Seabridge Gold	Metals & Mining	",
    
    "SABR	Sabre	IT Services	",
    
    "SABS	SAB Biotherapeutics	Biotechnology	",
    
    "SACH	Sachem Capital	Thrifts & Mortgage Finance	",
    
    "SAFE	Safehold	Equity Real Estate Investment Trusts 	",
    
    "SAFM	Sanderson Farms	Food Products	",
    
    "SAFT	Safety Insurance Group	Insurance	",
    
    "SAGA	Sagaliam Acquisition	Blank Check / SPAC	",
    
    "SAGE	Sage Therapeutics	Biotechnology	",
    
    "SAH	Sonic Automotive	Specialty Retail	",
    
    "SAI	SAITECH Global	Software Publishers	",
    
    "SAIA	Saia Inc	Road & Rail	",
    
    "SAIC	Science Applications International	IT Services	",
    
    "SAIL	SailPoint Technologies Holdings	Software	",
    
    "SAL	Salisbury Bancorp	Banks	",
    
    "SALM	Salem Media Group	Media	",
    
    "SAM	The Boston Beer Company	Beverages	",
    
    "SAMA	Schultze Special Purpose Acquisition II	Blank Check / SPAC	",
    
    "SAMG	Silvercrest Asset Management Group	Capital Markets	",
    
    "SAN	Banco Santander	Banks	",
    
    "SANA	Sana Biotechnology	Biotechnology	",
    
    "SANB	Sanaby Health Acquisition I	Blank Check / SPAC	",
    
    "SAND	Sandstorm Gold	Metals & Mining	",
    
    "SANG	Sangoma Technologies	Software-Infrastructure	",
    
    "SANM	Sanmina	Electronic Equipment Instruments & C	",
    
    "SANW	S&W Seed Company	Food Products	",
    
    "SAP	SAP SE	Software	",
    
    "SAR	Saratoga Investment	Capital Markets	",
    
    "SASR	Sandy Spring Bancorp	Banks	",
    
    "SATL	Satellogic	Scientific & Technical Instruments	",
    
    "SATS	EchoStar	Communications Equipment	",
    
    "SAVA	Cassava Sciences	Pharmaceuticals	",
    
    "SAVE	Spirit Airlines	Airlines	",
    
    "SB	    Safe Bulkers	Marine	",
    
    "SBAC	SBA Communications	Equity Real Estate Investment Trusts 	",
    
    "SBCF	Seacoast Banking Corporation of Florida	Banks	",
    
    "SBET	SharpLink Gaming	Gambling	",
    
    "SBEV	Splash Beverage Group	Beverages-Brewers	",
    
    "SBFG	SB Financial Group	Banks	",
    
    "SBGI	Sinclair Broadcast Group	Media	",
    
    "SBH	Sally Beauty Holdings	Specialty Retail	",
    
    "SBII	Sandbridge X	Blank Check / SPAC	",
    
    "SBLK	Star Bulk Carriers	Marine	",
    
    "SBNY	Signature Bank	Banks	",
    
    "SBOW	SilverBow Resources	Oil Gas & Consumable Fuels	",
    
    "SBR	Sabine Royalty Trust	Oil Gas & Consumable Fuels	",
    
    "SBRA	Sabra Health Care REIT	Equity Real Estate Investment Trusts 	",
    
    "SBS	Companhia de Saneamento Basico do Estado de Sao Paulo SABESP	",
    
    "SBSI	Southside Bancshares	Banks	",
    
    "SBSW	Sibanye Stillwater	Metals & Mining	",
    
    "SBT	Sterling Bancorp	Thrifts & Mortgage Finance	",
    
    "SBTX	Silverback Therapeutics	Biotechnology	",
    
    "SBUX	Starbucks	Hotels Restaurants & Leisure	",
    
    "SCAQ	Stratim Cloud Acquisition	Blank Check / SPAC	",
    
    "SCCO	Southern Copper	Metals & Mining	",
    
    "SCHL	Scholastic	Media	",
    
    "SCHN	Schnitzer Steel Industries	Metals & Mining	",
    
    "SCHW	The Charles Schwab Corporation	Capital Markets	",
    
    "SCI	Service Corporation International	Diversified Consumer Services	",
    ,
    "SCKT	Socket Mobile	Technology Hardware Storage & Periph	",
    
    "SCL	Stepan Company	Chemicals	",
    ,
    "SCLE	Broadscale Acquisition	Blank Check / SPAC	",
    
    "SCM	Stellus Capital Investment	Capital Markets	",
    
    "SCMA	Seaport Calibre Materials Acquisition	Blank Check / SPAC	",
    
    "SCOA	ScION Tech Growth I	Blank Check / SPAC	",
    
    "SCOB	ScION Tech Growth II	Blank Check / SPAC	",
    
    "SCOR	Comscore	Media	",
    
    "SCPH	scPharmaceuticals	Pharmaceuticals	",
    
    "SCPL	SciPlay	Entertainment	",
    
    "SCPS	Scopus Biopharma	Biotechnology	",
    
    "SCRM	Screaming Eagle Acquisition	Blank Check / SPAC	",
    
    "SCS	Steelcase	Commercial Services & Supplies	",
    
    "SCSC	ScanSource	Electronic Equipment Instruments & C	",
    
    "SCTL	Societal CDMO	Drug Manufacturers-Specialty & Generic	",
    
    "SCU	Sculptor Capital Management	Capital Markets	",
    
    "SCUA	Sculptor Acquisition I	Blank Check / SPAC	",
    
    "SCVL	Shoe Carnival	Specialty Retail	",
    
    "SCVX	SCVX Corp	Shell Companies	",
    
    "SCWX	SecureWorks	Software	",
    
    "SCX	The LS Starrett Company	Machinery	",
    
    "SCYX	SCYNEXIS	Pharmaceuticals	",
    
    "SD	      SandRidge Energy	Oil Gas & Consumable Fuels	",
    
    "SDAC	Sustainable Development Acquisition I	Blank Check / SPAC	",
    
    "SDC	SmileDirectClub	Health Care Equipment & Supplies	",
    
    "SDGR	Schrodinger	Health Care Technology	",
    
    "SDH	Global Internet of People	Consulting Services	",
    
    "SDIG	Stronghold Digital Mining	Internet Software & Services	",
    
    "SDPI	Superior Drilling Products	Energy Equipment & Services	",
    
    "SE	      Sea Limited	Entertainment	",
    
    "SEAC	SeaChange International	Software	",
    
    "SEAS	SeaWorld Entertainment	Hotels Restaurants & Leisure	",
    
    "SEAT	Vivid Seats	Internet Content & Information	",
    
    "SEB	Seaboard	Food Products	",
    
    "SECO	Secoo Holding	Internet & Direct Marketing Retail	",
    
    "SEDA	SDCL EDGE Acquisition	Blank Check / SPAC	",
    
    "SEDG	SolarEdge Technologies	Semiconductors & Semiconductor Equipment	",
    
    "SEE	Sealed Air	Containers & Packaging	",
    
    "SEED	Origin Agritech	Food Products	",
    
    "SEEL	Seelos Therapeutics	Pharmaceuticals	",
    
    "SEER	Seer Inc	Life Sciences Tools & Services	",
    
    "SEIC	SEI Investments Company	Capital Markets	",
    
    "SELB	Selecta Biosciences	Biotechnology	",
    
    "SELF	Global Self Storage	Equity Real Estate Investment Trusts 	",
    
    "SEM	Select Medical Holdings	Health Care Providers & Services	",
    ,
    "SEMR	SEMrush Holdings	Software	",
    
    "SENEA	Seneca Foods	Food Products	",
    
    "SENEB	Seneca Foods	Food Products	",
    
    "SENS	Senseonics Holdings	Health Care Equipment & Supplies	",
    
    "SERA	Sera Prognostics	Diagnostics & Research	",
    
    "SES	SES AI	Auto Parts	",
    
    "SESN	Sesen Bio	Biotechnology	",
    
    "SEV	Sono Group	Auto Manufacturers	",
    
    "SEVN	Seven Hills Realty Trust	REIT-Mortgage	",
    
    "SF	    Stifel Financial	Capital Markets	",
    
    "SFBC	Sound Financial Bancorp	Banks	",
    
    "SFBS	ServisFirst Bancshares	Banks	",
    
    "SFE	Safeguard Scientifics	Capital Markets	",
    
    "SFET	Safe-T Group	Software	",
    
    "SFIX	Stitch Fix	Internet & Direct Marketing Retail	",
    
    "SFL	SFL Corporation Ltd	Oil Gas & Consumable Fuels	",
    
    "SFM	Sprouts Farmers Market	Food & Staples Retailing	",
    
    "SFNC	Simmons First National	Banks	",
    
    "SFST	Southern First Bancshares	Banks	",
    
    "SFT	Shift Technologies	Internet Retail	",
    
    "SFUN	Fang Holdings	Interactive Media & Services	",
    
    "SG	     Sweetgreen	Insurance	",
    
    "SGA	Saga Communications	Media	",
    
    "SGBX	SG Blocks	Machinery	",
    
    "SGC	Superior Group of Companies	Textiles Apparel & Luxury Goods	",
    
    "SGEN	Seagen	Biotechnology	",
    
    "SGFY	Signify Health	Health Information Services	",
    
    "SGH	SMART Global Holdings	Semiconductors & Semiconductor Equipment	",
    
    "SGHC	Super Group (SGHC)	Gambling	",
    
    "SGHL	Signal Hill Acquisition	Blank Check / SPAC	",
    
    "SGHT	Sight Sciences	Medical Devices	",
    
    "SGII	Seaport Global Acquisition II	Blank Check / SPAC	",
    
    "SGLB	Sigma Labs	Aerospace & Defense	",
    
    "SGLY	Singularity Future Technology	Integrated Freight & Logistics	",
    
    "SGMA	SigmaTron International	Electronic Equipment Instruments & C	",
    
    "SGML	Sigma Lithium	Other Industrial Metals & Mining	",
    
    "SGMO	Sangamo Therapeutics	Biotechnology	",
    
    "SGRP	SPAR Group	Media	",
    
    "SGRY	Surgery Partners	Health Care Providers & Services	",
    
    "SGTX	Sigilon Therapeutics	Biotechnology	",
    
    "SGU	Star Group	Gas Utilities	",
    
    "SHAC	SCP & CO Healthcare Acquisition Company	Blank Check / SPAC	",
    
    "SHAK	Shake Shack	Hotels Restaurants & Leisure	",
    
    "SHAP	Spree Acquisition 	Blank Check / SPAC	",
    
    "SHBI	Shore Bancshares	Banks	",
    
    "SHC	Sotera Health Company	Diagnostics & Research	",
    
    "SHCA	Spindletop Health Acquisition	Blank Check / SPAC	",
    
    "SHCR	Sharecare	Health Information Services	",
    
    "SHEL	Shell	Oil Gas & Consumable Fuels	",
    
    "SHEN	Shenandoah Telecommunications Company		",
    
    "SHG	Shinhan Financial Group Co	Banks	",
    
    "SHI	Sinopec Shanghai Petrochemical Company	Chemicals	",
    
    "SHIP	Seanergy Maritime Holdings	Marine	",
    
    "SHLS	Shoals Technologies Group	Solar	",
    
    "SHLX	Shell Midstream Partners	Oil Gas & Consumable Fuels	",
    
    "SHO	Sunstone Hotel Investors	Equity Real Estate Investment Trusts 	",
    
    "SHOO	Steven Madden	Textiles Apparel & Luxury Goods	",
    
    "SHOP	Shopify	IT Services	",
    
    "SHPW	Shapeways Holdings	Specialty Industrial Machinery	",
    
    "SHQA	Shelter Acquisition I	Blank Check / SPAC	",
    
    "SHUA	SHUAA Partners Acquisition Corp I	Blank Check / SPAC	",
    
    "SHW	The Sherwin-Williams Company	Chemicals	",
    
    "SHYF	The Shyft Group	Machinery	",
    
    "SI	      Silvergate Capital	Banks	",
    
    "SIBN	SI-BONE	Health Care Equipment & Supplies	",
    
    "SID	Companhia Siderurgica Nacional	Metals & Mining	",
    
    "SIDU	Sidus Space	Aerospace & Defense	",
    
    "SIEB	Siebert Financial	Capital Markets	",
    
    "SIEN	Sientra	Health Care Equipment & Supplies	",
    
    "SIER	Sierra Lake Acquisition	Blank Check / SPAC	",
    
    "SIF	SIFCO Industries	Aerospace & Defense	",
    
    "SIFY	Sify Technologies	Diversified Telecommunication Services	",
    
    "SIG	Signet Jewelers	Specialty Retail	",
    
    "SIGA	SIGA Technologies	Pharmaceuticals	",
    
    "SIGI	Selective Insurance Group	Insurance	",
    
    "SII	Sprott	Capital Markets	",
    
    "SILC	Silicom	Communications Equipment	",
    
    "SILK	Silk Road Medical	Health Care Equipment & Supplies	",
    
    "SILV	SilverCrest Metals	Metals & Mining	",
    
    "SIM	Grupo Simec	Metals & Mining	",
    
    "SIMO	Silicon Motion Technology	Semiconductors & Semiconductor Equipment	",
    
    "SINT	SINTX Technologies	Health Care Equipment & Supplies	",
    
    "SIOX	Sio Gene Therapies	Biotechnology	",
    
    "SIRE	Sisecam Resources LP	Chemicals	",
    
    "SIRI	Sirius XM Holdings	Media	",
    
    "SISI	Shineco	Personal Products	",
    
    "SITC	SITE Centers	Equity Real Estate Investment Trusts 	",
    
    "SITE	SiteOne Landscape Supply	Trading Companies & Distributors	",
    ,
    "SITM	SiTime	Semiconductors & Semiconductor Equipment	",
    
    "SIVB	SVB Financial Group	Banks	",
    
    "SIX	Six Flags Entertainment	Hotels Restaurants & Leisure	",
    
    "SJ	      Scienjoy Holding	Broadcasting	",
    
    "SJI	South Jersey Industries	Gas Utilities	",
    
    "SJM	The J M Smucker Company	Food Products	",
    
    "SJR	Shaw Communications	Media	",
    
    "SJT	San Juan Basin Royalty Trust	Oil Gas & Consumable Fuels	",
    
    "SJW	SJW Group	",
    
    "SKE	Skeena Resources	Other Industrial Metals & Mining	",
    
    "SKIL	Skillsoft	Education & Training Services	",
    
    "SKIN	The Beauty Health Company	Household & Personal Products	",
    
    "SKLZ	Skillz	Entertainment	",
    
    "SKM	SK Telecom Co		",
    ,
    "SKT	Tanger Factory Outlet Centers	Equity Real Estate Investment Trusts 	",
    
    "SKX	Skechers USA	Textiles Apparel & Luxury Goods	",
    
    "SKY	Skyline Champion	Household Durables	",
    ,
    "SKYA	Skydeck Acquisition	Blank Check / SPAC	",
    
    "SKYH	Sky Harbour Group	Independent Power and Renewable Elect	",
    
    "SKYT	SkyWater Technology	Semiconductors	",
    
    "SKYW	SkyWest	Airlines	",
    
    "SKYX	SQL Technologies	Consumer Electronics	",
    
    "SLAB	Silicon Laboratories	Semiconductors & Semiconductor Equipment	",
    
    "SLAC	Social Leverage Acquisition I	Blank Check / SPAC	",
    
    "SLAM	Slam Corp	Blank Check / SPAC	",
    
    "SLB	Schlumberger	Energy Equipment & Services	",
    
    "SLCA	US Silica Holdings	Energy Equipment & Services	",
    
    "SLCR	Silver Crest Acquisition	Blank Check / SPAC	",
    
    "SLDB	Solid Biosciences	Biotechnology	",
    
    "SLDP	Solid Power	Electrical Equipment & Parts	",
    
    "SLF	Sun Life Financial	Insurance	",
    
    "SLG	SL Green Realty	Equity Real Estate Investment Trusts 	",
    ,
    "SLGC	SomaLogic	Health Information Services	",
    
    "SLGG	Super League Gaming	Interactive Media & Services	",
    
    "SLGL	Sol-Gel Technologies	Pharmaceuticals	",
    
    "SLGN	Silgan Holdings	Containers & Packaging	",
    
    "SLHG	Skylight Health Group	Medical Care Facilities	",
    
    "SLI	Standard Lithium	Other Industrial Metals & Mining	",
    
    "SLM	SLM Corporation	Consumer Finance	",
    
    "SLN	Silence Therapeutics	Biotechnology	",
    
    "SLNG	Stabilis Solutions	Oil Gas & Consumable Fuels	",
    
    "SLNH	Soluna Holdings	Scientific & Technical Instruments	",
    
    "SLNO	Soleno Therapeutics	Biotechnology	",
    
    "SLP	Simulations Plus	Health Care Technology	",
    
    "SLQT	SelectQuote	Insurance Brokers	",
    
    "SLRC	SLR Investment	Capital Markets	",
    
    "SLRX	Salarius Pharmaceuticals	Biotechnology	",
    
    "SLS	SELLAS Life Sciences Group	Biotechnology	",
    
    "SLVM	Sylvamo	Paper & Paper Products	",
    
    "SLVR	SilverSPAC	Blank Check / SPAC	",
    
    "SM	   SM Energy Company	Oil Gas & Consumable Fuels	",
    
    "SMAP	SportsMap Tech Acquisition	Blank Check / SPAC	",
    
    "SMAR	Smartsheet	Software	",
    
    "SMBC	Southern Missouri Bancorp	Thrifts & Mortgage Finance	",
    
    "SMBK	SmartFinancial	Banks	",
    
    "SMCI	Super Micro Computer	Technology Hardware Storage & Periph	",
    ,
    "SMED	Sharps Compliance	Health Care Providers & Services	",
    
    "SMFG	Sumitomo Mitsui Financial Group	Banks	",
    ,
    "SMFL	Smart for Life	Packaged Foods	",
    
    "SMFR	Sema Holdings	Health Information Services	",
    
    "SMG	The Scotts Miracle-Gro Company	Chemicals	",
    
    "SMHI	Seacor Marine Holdings	Energy Equipment & Services	",
    
    "SMID	Smith-Midland	Construction Materials	",
    
    "SMIH	Summit Healthcare Acquisition	Blank Check / SPAC	",
    
    "SMIT	Schmitt Industries	Electronic Equipment Instruments & C	",
    
    "SMLP	Summit Midstream Partners LP	Oil Gas & Consumable Fuels	",
    
    "SMLR	Semler Scientific	Health Care Equipment & Supplies	",
    
    "SMMF	Summit Financial Group	Banks	",
    
    "SMMT	Summit Therapeutics	Biotechnology	",
    
    "SMP	Standard Motor Products	Auto Components	",
    
    "SMPL	The Simply Good Foods Company	Food Products	",
    
    "SMR	NuScale Power	n/a	",
    
    "SMRT	SmartRent	Software-Application	",
    
    "SMSI	Smith Micro Software	Software	",
    
    "SMTC	Semtech	Semiconductors & Semiconductor Equipment	",
    
    "SMTI	Sanara MedTech	Medical Instruments & Supplies	",
    
    "SMTS	Sierra Metals	Metals & Mining	",
    
    "SMWB	Similarweb	Internet Content & Information	",
    
    "SNA	Snap-on	Machinery	",
    
    "SNAP	Snap Inc	Interactive Media & Services	",
    
    "SNAX	Stryve Foods	Packaged Foods	",
    
    "SNBR	Sleep Number	Specialty Retail	",
    
    "SNCE	Science 	Health Information Services	",
    
    "SNCR	Synchronoss Technologies	Software	",
    
    "SNCY	Sun Country Airlines Holdings	Airlines	",
    
    "SND	Smart Sand	Energy Equipment & Services	",
    
    "SNDA	Sonida Senior Living	Medical Care Facilities	",
    
    "SNDL	Sundial Growers	Pharmaceuticals	",
    
    "SNDR	Schneider National	Road & Rail	",
    
    "SNDX	Syndax Pharmaceuticals	Biotechnology	",
    
    "SNES	SenesTech	Pharmaceuticals	",
    
    "SNEX	StoneX Group	Capital Markets	",
    
    "SNFCA	Security National Financial	Thrifts & Mortgage Finance	",
    
    "SNGX	Soligenix	Biotechnology	",
    
    "SNMP	Evolve Transition Infrastructure LP	Oil Gas & Consumable Fuels	",
    
    "SNN	Smith & Nephew	Health Care Equipment & Supplies	",
    
    "SNOA	Sonoma Pharmaceuticals	Pharmaceuticals	",
    
    "SNOW	Snowflake	IT Services	",
    
    "SNP	China Petroleum & Chemical	Oil Gas & Consumable Fuels	",
    
    "SNPO	Snap One Holdings	Electronics & Computer Distribution	",
    
    "SNPS	Synopsys	Software	",
    
    "SNPX	Synaptogenix	Biotechnology	",
    
    "SNRH	Senior Connect Acquisition I	Blank Check / SPAC	",
    
    "SNSE	Sensei Biotherapeutics	Biotechnology	",
    
    "SNT	Senstar Technologies	Electronic Equipment Instruments & C	",
    
    "SNTG	Sentage Holdings	Credit Services	",
    
    "SNV	Synovus Financial	Banks	",
    
    "SNX	Synnex	Electronic Equipment Instruments & C	",
    
    "SNY	Sanofi	Pharmaceuticals	",
    
    "SO	    The Southern Company	Electric Utilities	",
    
    "SOFI	SoFi Technologies	Credit Services	",
    
    "SOHO	Sotherly Hotels	Equity Real Estate Investment Trusts 	",
    
    "SOHU	Sohucom	Interactive Media & Services	",
    
    "SOI	Solaris Oilfield Infrastructure	Energy Equipment & Services	",
    
    "SOL	ReneSola	Construction & Engineering	",
    
    "SOLO	Electrameccanica Vehicles	Automobiles	",
    
    "SON	Sonoco Products Company	Containers & Packaging	",
    
    "SOND	Sonder Holdings	Lodging	",
    
    "SONM	Sonim Technologies	Technology Hardware Storage & Periph	",
    
    "SONN	Sonnet BioTherapeutics Holdings	Biotechnology	",
    
    "SONO	Sonos	Household Durables	",
    
    "SONX	Sonendo	Medical Devices	",
    
    "SONY	Sony Group	Household Durables	",
    
    "SOPA	Society Pass	Software-Application	",
    
    "SOPH	SOPHiA GENETICS	Health Information Services	",
    
    "SOS	SOS Limited	Professional Services	",
    
    "SOTK	Sono-Tek	Electronic Equipment Instruments & C	",
    
    "SOUN	SoundHound AI	Shell Companies	",
    
    "SOVO	Sovos Brands	Packaged Foods	",
    
    "SP	     SP Plus	Commercial Services & Supplies	",
    
    "SPB	Spectrum Brands Holdings	Household Products	",
    
    "SPCB	SuperCom	Electronic Equipment Instruments & C	",
    
    "SPCE	Virgin Galactic Holdings	Aerospace & Defense	",
    
    "SPCM	Sound Point Acquisition Corp I	Blank Check / SPAC	",
    
    "SPFI	South Plains Financial	Banks	",
    
    "SPG	Simon Property Group	Equity Real Estate Investment Trusts 	",
    
    "SPGI	S&P Global	Capital Markets	",
    ,
    "SPGS	Simon Property Group Acquisition Holdings	Blank Check / SPAC	",
    
    "SPH	Suburban Propane Partners	Gas Utilities	",
    
    "SPI	SPI Energy Co	Semiconductors & Semiconductor Equipment	",
    
    "SPIR	Spire Global	Specialty Business Services	",
    
    "SPK	SPK Acquisition	Blank Check / SPAC	",
    
    "SPKB	Silver Spike Acquisition II	Blank Check / SPAC	",
    
    "SPLK	Splunk	Software	",
    
    "SPLP	Steel Partners Holdings LP	Industrial Conglomerates	",
    
    "SPNE	SeaSpine Holdings	Health Care Equipment & Supplies	",
    
    "SPNS	Sapiens International	Software	",
    
    "SPNT	SiriusPoint	Insurance-Reinsurance	",
    
    "SPOK	Spok Holdings		",
    
    "SPOT	Spotify Technology	Entertainment	",
    
    "SPPI	Spectrum Pharmaceuticals	Biotechnology	",
    
    "SPR	Spirit AeroSystems Holdings	Aerospace & Defense	",
    ,
    "SPRB	Spruce Biosciences	Biotechnology	",
    
    "SPRC	SciSparc	Biotechnology	",
    
    "SPRO	Spero Therapeutics	Biotechnology	",
    
    "SPSC	SPS Commerce	Software	",
    
    "SPT	Sprout Social	Software	",
    
    "SPTK	SportsTek Acquisition	Blank Check / SPAC	",
    
    "SPTN	SpartanNash Company	Food & Staples Retailing	",
    
    "SPWH	Sportsman's Warehouse Holdings	Specialty Retail	",
    
    "SPWR	SunPower	Semiconductors & Semiconductor Equipment	",
    
    "SPXC	SPX Corporation	Machinery	",
    
    "SQ	    Block	IT Services	",
    
    "SQFT	Presidio Property Trust	REIT-Diversified	",
    
    "SQL	SeqLL	Diagnostics & Research	",
    
    "SQM	Sociedad Quimica y Minera de Chile	Chemicals	",
    
    "SQNS	Sequans Communications	Semiconductors & Semiconductor Equipment	",
    
    "SQSP	Squarespace	Software-Infrastructure	",
    
    "SQZ	SQZ Biotechnologies Company	Biotechnology	",
    
    "SR	    Spire	Gas Utilities	",
    
    "SRAD	Sportradar Group AG	Software-Application	",
    
    "SRAX	SRAX Inc	Media	",
    
    "SRC	Spirit Realty Capital	Equity Real Estate Investment Trusts 	",
    ,
    "SRCE	st Source	Banks	",
    
    "SRCL	Stericycle	Commercial Services & Supplies	",
    
    "SRDX	SurModics	Health Care Equipment & Supplies	",
    
    "SRE	Sempra Energy	Multi-Utilities	",
    ,
    "SREV	ServiceSource International	IT Services	",
    
    "SRG	Seritage Growth Properties	Equity Real Estate Investment Trusts 	",
    
    "SRGA	Surgalign Holdings	Medical Devices	",
    
    "SRI	Stoneridge	Auto Components	",
    
    "SRL	Scully Royalty	Capital Markets	",
    
    "SRLP	Sprague Resources LP	Oil Gas & Consumable Fuels	",
    
    "SRNE	Sorrento Therapeutics	Biotechnology	",
    
    "SRPT	Sarepta Therapeutics	Biotechnology	",
    
    "SRRA	Sierra Oncology	Biotechnology	",
    
    "SRRK	Scholar Rock Holding	Biotechnology	",
    
    "SRSA	Sarissa Capital Acquisition	Blank Check / SPAC	",
    
    "SRT	Startek	IT Services	",
    
    "SRTS	Sensus Healthcare	Health Care Equipment & Supplies	",
    
    "SRZN	Surrozen	Biotechnology	",
    
    "SSAA	Science Strategic Acquisition Alpha	Blank Check / SPAC	",
    
    "SSB	South State	Banks	",
    
    "SSBI	Summit State Bank	Banks	",
    
    "SSBK	Southern States Bancshares	Banks-Regional	",
    
    "SSD	Simpson Manufacturing Company	Building Products	",
    
    "SSIC	Silver Spike Investment	Drug Manufacturers-Specialty & Generic	",
    
    "SSKN	STRATA Skin Sciences	Health Care Equipment & Supplies	",
    
    "SSL	Sasol	Chemicals	",
    
    "SSNC	SS&C Technologies Holdings	Software	",
    
    "SSNT	SilverSun Technologies	Software	",
    
    "SSP	The EW Scripps Company	Media	",
    
    "SSRM	SSR Mining	Metals & Mining	",
    
    "SSSS	SuRo Capital	Capital Markets	",
    
    "SST	System	Specialty Business Services	",
    
    "SSTI	ShotSpotter	Software	",
    
    "SSTK	Shutterstock	Internet & Direct Marketing Retail	",
    
    "SSU	SIGNA Sports United	Specialty Retail	",
    
    "SSY	SunLink Health Systems	Health Care Providers & Services	",
    
    "SSYS	Stratasys	Technology Hardware Storage & Periph	",
    
    "ST	    Sensata Technologies Holding	Electrical Equipment	",
    
    "STAA	STAAR Surgical Company	Health Care Equipment & Supplies	",
    
    "STAB	Statera Biopharma	Biotechnology	",
    
    "STAF	Staffing  Solutions	Professional Services	",
    
    "STAG	Stag Industrial	Equity Real Estate Investment Trusts 	",
    
    "STAR	iStar	Equity Real Estate Investment Trusts 	",
    ,
    "STBA	S&T Bancorp	Banks	",
    
    "STC	Stewart Information Services	Insurance	",
    
    "STCN	Steel Connect	IT Services	",
    
    "STE	Steris	Health Care Equipment & Supplies	",
    
    "STEM	Stem Inc	Electrical Equipment	",
    
    "STEP	StepStone Group	Asset Management	",
    
    "STER	Sterling Check	Software-Infrastructure	",
    ,
    "STET	ST Energy Transition I	Blank Check / SPAC	",
    
    "STG	Sunlands Technology Group	Diversified Consumer Services	",
    
    "STGW	Stagwell	Advertising Agencies	",
    
    "STIM	Neuronetics	Health Care Equipment & Supplies	",
    
    "STKL	SunOpta	Food Products	",
    
    "STKS	The ONE Group Hospitality	Hotels Restaurants & Leisure	",
    
    "STLA	Stellantis	Automobiles	",
    
    "STLD	Steel Dynamics	Metals & Mining	",
    
    "STM	STMicroelectronics	Semiconductors & Semiconductor Equipment	",
    
    "STN	Stantec	Professional Services	",
    
    "STNE	StoneCo	IT Services	",
    
    "STNG	Scorpio Tankers	Oil Gas & Consumable Fuels	",
    
    "STOK	Stoke Therapeutics	Biotechnology	",
    
    "STON	StoneMor	Diversified Consumer Services	",
    
    "STOR	STORE Capital	Equity Real Estate Investment Trusts 	",
    
    "STRA	Strategic Education	Diversified Consumer Services	",
    
    "STRC	Sarcos Technology & Robotics	Computer Hardware	",
    
    "STRE	Supernova Partners Acquisition Company III	Blank Check / SPAC	",
    
    "STRL	Sterling Construction Company	Construction & Engineering	",
    
    "STRM	Streamline Health Solutions	Health Care Technology	",
    
    "STRN	Stran & Company	Advertising Agencies	",
    
    "STRO	Sutro Biopharma	Biotechnology	",
    
    "STRR	Star Equity Holdings	Diagnostics & Research	",
    
    "STRS	Stratus Properties	Real Estate Management & Development	",
    
    "STRT	STRATTEC Security	Auto Components	",
    
    "STRY	Starry Group Holdings	Telecom Services	",
    
    "STSA	Satsuma Pharmaceuticals	Pharmaceuticals	",
    
    "STSS	Sharps Technology	Medical Instruments & Supplies	",
    
    "STT	State Street	Capital Markets	",
    
    "STTK	Shattuck Labs	Biotechnology	",
    
    "STVN	Stevanato Group SpA	Medical Instruments & Supplies	",
    
    "STWD	Starwood Property Trust	Mortgage Real Estate Investment Trust	",
    
    "STX	Seagate Technology Holdings	Technology Hardware Storage & Periph	",
    
    "STXS	Stereotaxis	Health Care Equipment & Supplies	",
    
    "STZ	Constellation Brands	Beverages	",
    
    "SU	    Suncor Energy	Oil Gas & Consumable Fuels	",
    
    "SUAC	ShoulderUp Technology Acquisition	Blank Check / SPAC	",
    
    "SUI	Sun Communities	Equity Real Estate Investment Trusts 	",
    ,
    "SUM	Summit Materials	Construction Materials	",
    
    "SUMO	Sumo Logic	Software	",
    
    "SUMR	Summer Infant	Leisure Products	",
    
    "SUN	Sunoco LP	Oil Gas & Consumable Fuels	",
    
    "SUNL	Sunlight Financial Holdings	Credit Services	",
    
    "SUNW	Sunworks	Electrical Equipment	",
    
    "SUP	Superior Industries International	Auto Components	",
    
    "SUPN	Supernus Pharmaceuticals	Pharmaceuticals	",
    
    "SUPV	Grupo Supervielle	Banks	",
    
    "SURF	Surface Oncology	Biotechnology	",
    
    "SURG	SurgePays		",
    
    "SUZ	Suzano	Paper & Forest Products	",
    
    "SVC	Service Properties Trust	Equity Real Estate Investment Trusts 	",
    
    "SVFA	SVF Investment	Shell Companies	",
    
    "SVFB	SVF Investment 	Blank Check / SPAC	",
    
    "SVFC	SVF Investment 	Shell Companies	",
    
    "SVFD	Save Foods	Agricultural Inputs	",
    
    "SVM	Silvercorp Metals	Metals & Mining	",
    
    "SVNA	 Acquisition	Blank Check / SPAC	",
    
    "SVRA	Savara	Biotechnology	",
    
    "SVT	Servotronics	Electrical Equipment	",
    
    "SVVC	Firsthand Technology Value Fund	Securities and Commodity Exchanges	",
    
    "SWAG	Software Acquisition Group Inc III	Blank Check / SPAC	",
    
    "SWAV	ShockWave Medical	Health Care Equipment & Supplies	",
    
    "SWBI	Smith & Wesson Brands	Leisure Products	",
    
    "SWCH	Switch	IT Services	",
    
    "SWET	Athlon Acquisition	Blank Check / SPAC	",
    
    "SWI	SolarWinds	Software	",
    
    "SWIM	Latham Group	Building Products & Equipment	",
    
    "SWIR	Sierra Wireless	Communications Equipment	",
    
    "SWK	Stanley Black & Decker	Machinery	",
    
    "SWKH	SWK Holdings	Diversified Financial Services	",
    
    "SWKS	Skyworks Solutions	Semiconductors & Semiconductor Equipment	",
    
    "SWM	Schweitzer-Mauduit International	Paper & Forest Products	",
    
    "SWN	Southwestern Energy Company	Oil Gas & Consumable Fuels	",
    ,
    "SWSS	Springwater Special Situations	Blank Check / SPAC	",
    
    "SWTX	Springworks Therapeutics	Biotechnology	",
    ,
    "SWVL	Swvl Holdings	Software-Application	",
    
    "SWX	Southwest Gas Holdings	Gas Utilities	",
    
    "SXC	SunCoke Energy	Metals & Mining	",
    
    "SXI	Standex International	Machinery	",
    
    "SXT	Sensient Technologies	Chemicals	",
    ,
    "SXTC	China SXT Pharmaceuticals	Personal Products	",
    
    "SY	    So-Young International	Interactive Media & Services	",
    
    "SYBT	Stock Yards Bancorp	Banks	",
    
    "SYBX	Synlogic	Biotechnology	",
    
    "SYF	Synchrony Financial	Consumer Finance	",
    
    "SYK	Stryker	Health Care Equipment & Supplies	",
    
    "SYN	Synthetic Biologics	Biotechnology	",
    
    "SYNA	Synaptics	Semiconductors & Semiconductor Equipment	",
    
    "SYNH	Syneos Health	Life Sciences Tools & Services	",
    
    "SYNL	Synalloy	Metals & Mining	",
    
    "SYPR	Sypris Solutions	Auto Components	",
    
    "SYRS	Syros Pharmaceuticals	Biotechnology	",
    
    "SYTA	Siyata Mobile	Communications Equipment	",
    
    "SYY	Sysco	Food & Staples Retailing	",
    
    "SZZL	Sizzle Acquisition	Blank Check / SPAC	",
    
    "T	     AT&T Inc	Diversified Telecommunication Services	",
    
    "TA	     TravelCenters of America	Specialty Retail	",
    
    "TAC	TransAlta	Independent Power and Renewable Elect	",
    
    "TACA	Trepont Acquisition I	Blank Check / SPAC	",
    
    "TACT	TransAct Technologies	Technology Hardware Storage & Periph	",
    
    "TAIT	Taitron Components	Electronic Equipment Instruments & C	",
    
    "TAK	Takeda Pharmaceutical Company	Pharmaceuticals	",
    
    "TAL	TAL Education Group	Diversified Consumer Services	",
    
    "TALK	Talkspace	Medical Care Facilities	",
    
    "TALO	Talos Energy	Oil Gas & Consumable Fuels	",
    ,
    "TALS	Talaris Therapeutics	Biotechnology	",
    
    "TANH	Tantech Holdings	Chemicals	",
    
    "TAOP	Taoping	IT Services	",
    
    "TAP	Molson Coors Beverage Company	Beverages	",
    
    "TARA	Protara Therapeutics	Biotechnology	",
    
    "TARO	Taro Pharmaceutical Industries	Pharmaceuticals	",
    
    "TARS	Tarsus Pharmaceuticals	Biotechnology	",
    
    "TASK	TaskUs	Information Technology Services	",
    
    "TAST	Carrols Restaurant Group	Hotels Restaurants & Leisure	",
    
    "TATT	TAT Technologies	Aerospace & Defense	",
    
    "TAYD	Taylor Devices	Machinery	",
    
    "TBBK	The Bancorp	Banks	",
    
    "TBCP	Thunder Bridge Capital Partners III	Blank Check / SPAC	",
    
    "TBI	TrueBlue	Professional Services	",
    
    "TBK	Triumph Bancorp	Banks	",
    
    "TBLA	Taboolacom	Internet Content & Information	",
    
    "TBLD	Thornburg Income Builder Opportunities Trust	n/a	",
    
    "TBLT	Toughbuilt Industries	Textiles Apparel & Luxury Goods	",
    
    "TBNK	Territorial Bancorp	Thrifts & Mortgage Finance	",
    
    "TBPH	Theravance Biopharma	Pharmaceuticals	",
    
    "TBSA	TB SA Acquisition	Blank Check / SPAC	",
    
    "TC	    TuanChe	Internet Content & Information	",
    
    "TCAC	Tuatara Capital Acquisition	Blank Check / SPAC	",
    
    "TCBC	TC Bancshares	Banks-Regional	",
    
    "TCBI	Texas Capital Bancshares	Banks	",
    
    "TCBK	TriCo Bancshares	Banks	",
    
    "TCBP	TC BioPharm (Holdings)	Biotechnology	",
    
    "TCBS	Texas Community Bancshares	Banks-Regional	",
    
    "TCBX	Third Coast Bancshares	Banks-Regional	",
    
    "TCDA	Tricida	Pharmaceuticals	",
    
    "TCFC	The Community Financial Corporation	Banks	",
    
    "TCI	Transcontinental Realty Investors	Real Estate Management & Development	",
    
    "TCMD	Tactile Systems Technology	Health Care Equipment & Supplies	",
    
    "TCN	Tricon Residential	Real Estate Services	",
    
    "TCOA	Trajectory Alpha Acquisition	Blank Check / SPAC	",
    
    "TCOM	Tripcom Group	Internet & Direct Marketing Retail	",
    
    "TCON	TRACON Pharmaceuticals	Biotechnology	",
    
    "TCPC	Blackrock TCP Capital	Capital Markets	",
    
    "TCRR	TCR Therapeutics	Biotechnology	",
    
    "TCRT	Alaunos Therapeutics	Biotechnology	",
    
    "TCRX	TScan Therapeutics	Biotechnology	",
    
    "TCS	The Container Store Group	Specialty Retail	",
    
    "TCVA	TCV Acquisition	Blank Check / SPAC	",
    
    "TCX	Tucows	IT Services	",
    
    "TD	    The Toronto-Dominion Bank	Banks	",
    
    "TDC	Teradata	Software	",
    
    "TDCX	TDCX Inc	Specialty Business Services	",
    
    "TDG	TransDigm Group	Aerospace & Defense	",
    
    "TDOC	Teladoc Health	Health Care Technology	",
    ,
    "TDS	Telephone & Data Systems		",
    
    "TDUP	ThredUp	Internet Retail	",
    
    "TDW	Tidewater	Energy Equipment & Services	",
    
    "TDY	Teledyne Technologies	Aerospace & Defense	",
    
    "TEAM	Atlassian	Software	",
    ,
    "TECH	Bio-Techne	Life Sciences Tools & Services	",
    
    "TECK	Teck Resources	Metals & Mining	",
    
    "TEDU	Tarena International	Diversified Consumer Services	",
    
    "TEF	Telefonica	Diversified Telecommunication Services	",
    
    "TEKK	Tekkorp Digital Acquisition	Blank Check / SPAC	",
    
    "TEL	TE Connectivity	Electronic Equipment Instruments & C	",
    
    "TELA	TELA Bio	Health Care Equipment & Supplies	",
    
    "TELL	Tellurian	Oil Gas & Consumable Fuels	",
    
    "TEN	Tenneco	Auto Components	",
    
    "TENB	Tenable Holdings	Software	",
    
    "TENX	Tenax Therapeutics	Biotechnology	",
    
    "TEO	Telecom Argentina	Diversified Telecommunication Services	",
    
    "TER	Teradyne	Semiconductors & Semiconductor Equipment	",
    
    "TERN	Terns Pharmaceuticals	Biotechnology	",
    
    "TESS	TESSCO Technologies	Communications Equipment	",
    
    "TETC	Tech & Energy Transition	Blank Check / SPAC	",
    
    "TETE	Technology & Telecommunication Acquisition	Blank Check / SPAC	",
    
    "TEVA	Teva Pharmaceutical Industries	Pharmaceuticals	",
    
    "TEX	Terex	Machinery	",
    
    "TFC	Truist Financial	Banks	",
    
    "TFFP	TFF Pharmaceuticals	Pharmaceuticals	",
    
    "TFII	TFI International	Road & Rail	",
    
    "TFSL	TFS Financial	Thrifts & Mortgage Finance	",
    
    "TFX	Teleflex	Health Care Equipment & Supplies	",
    
    "TG	    Tredegar	Chemicals	",
    
    "TGA	TransGlobe Energy	Oil Gas & Consumable Fuels	",
    
    "TGAA	Target Global Acquisition I	Blank Check / SPAC	",
    
    "TGB	Taseko Mines	Metals & Mining	",
    
    "TGH	Textainer Group Holdings	Trading Companies & Distributors	",
    
    "TGI	Triumph Group	Aerospace & Defense	",
    
    "TGLS	Tecnoglass	Construction Materials	",
    
    "TGNA	Tegna	Media	",
    
    "TGR	Kimbell Tiger Acquisition	Blank Check / SPAC	",
    
    "TGS	Transportadora de Gas del Sur	Oil Gas & Consumable Fuels	",
    
    "TGT	Target	Multiline Retail	",
    
    "TGTX	TG Therapeutics	Biotechnology	",
    
    "TGVC	TG Venture Acquisition	Blank Check / SPAC	",
    
    "TH	    Target Hospitality	Hotels Restaurants & Leisure	",
    
    "THAC	Thrive Acquisition	Blank Check / SPAC	",
    
    "THC	Tenet Healthcare	Health Care Providers & Services	",
    
    "THCA	Tuscan Holdings II	Shell Companies	",
    
    "THCP	Thunder Bridge Capital Partners IV	Blank Check / SPAC	",
    
    "THFF	First Financial	Banks	",
    
    "THG	The Hanover Insurance Group	Insurance	",
    ,
    "THM	International Tower Hill Mines	Metals & Mining	",
    
    "THMO	ThermoGenesis Holdings	Health Care Equipment & Supplies	",
    
    "THO	Thor Industries	Automobiles	",
    
    "THR	Thermon Group Holdings	Electrical Equipment	",
    
    "THRM	Gentherm	Auto Components	",
    
    "THRN	Thorne HealthTech	Packaged Foods	",
    
    "THRX	Theseus Pharmaceuticals	Biotechnology	",
    
    "THRY	Thryv Holdings	Media	",
    
    "THS	TreeHouse Foods	Food Products	",
    
    "THTX	Theratechnologies	Biotechnology	",
    
    "TIG	Trean Insurance Group	Biotechnology	",
    
    "TIGO	Millicom International Cellular		",
    
    "TIGR	UP Fintech Holding	Capital Markets	",
    
    "TIL	Instil Bio	Biotechnology	",
    
    "TILE	Interface	Commercial Services & Supplies	",
    
    "TIMB	TIM SA	Telecom Services	",
    
    "TINV	Tiga Acquisition	Blank Check / SPAC	",
    
    "TIOA	Tio Tech A	Blank Check / SPAC	",
    
    "TIPT	Tiptree	Insurance	",
    
    "TIRX	Tian Ruixiang Holdings	Insurance Brokers	",
    
    "TISI	Team Inc	Commercial Services & Supplies	",
    
    "TITN	Titan Machinery	Trading Companies & Distributors	",
    
    "TIVC	Tivic Health Systems	Medical Devices	",
    
    "TIXT	TELUS International	Software-Infrastructure	",
    
    "TJX	The TJX Companies	Specialty Retail	",
    
    "TK	    Teekay	Oil Gas & Consumable Fuels	",
    
    "TKAT	Takung Art Co	Interactive Media & Services	",
    
    "TKC	Turkcell Iletisim Hizmetleri AS		",
    
    "TKLF	Yoshitsu	Household & Personal Products	",
    
    "TKNO	Alpha Teknova	Drug Manufacturers-Specialty & Generic	",
    
    "TKR	The Timken Company	Machinery	",
    
    "TLGA	TLG Acquisition One	Blank Check / SPAC	",
    
    "TLGY	TLGY Acquisition	Blank Check / SPAC	",
    
    "TLIS	Talis Biomedical	Medical Devices	",
    
    "TLK	Telkom Indonesia	Diversified Telecommunication Services	",
    
    "TLRY	Tilray	Pharmaceuticals	",
    
    "TLS	Telos	Software	",
    
    "TLSA	Tiziana Life Sciences	Biotechnology	",
    
    "TLYS	Tilly's	Specialty Retail	",
    
    "TM	     Toyota Motor	Automobiles	",
    
    "TMAC	The Music Acquisition	Blank Check / SPAC	",
    
    "TMBR	Timber Pharmaceuticals	Biotechnology	",
    
    "TMC	TMC the metals company	Other Industrial Metals & Mining	",
    
    "TMCI	Treace Medical Concepts	Medical Devices	",
    
    "TMDI	Titan Medical	Health Care Equipment & Supplies	",
    
    "TMDX	TransMedics Group	Health Care Equipment & Supplies	",
    
    "TME	Tencent Music Entertainment Group	Entertainment	",
    
    "TMHC	Taylor Morrison Home	Household Durables	",
    
    "TMKR	Tastemaker Acquisition	Blank Check / SPAC	",
    
    "TMO	Thermo Fisher Scientific	Life Sciences Tools & Services	",
    
    "TMP	Tompkins Financial	Banks	",
    
    "TMPM	Turmeric Acquisition	Blank Check / SPAC	",
    
    "TMQ	Trilogy Metals	Metals & Mining	",
    
    "TMST	TimkenSteel	Metals & Mining	",
    
    "TMUS	T-Mobile US		",
    
    "TMX	Terminix Global Holdings	Personal Services	",
    ,
    "TNC	Tennant Company	Machinery	",
    
    "TNDM	Tandem Diabetes Care	Health Care Equipment & Supplies	",
    
    "TNET	TriNet Group	Professional Services	",
    
    "TNGX	Tango Therapeutics	Biotechnology	",
    
    "TNK	Teekay Tankers	Oil Gas & Consumable Fuels	",
    
    "TNL	Travel + Leisure Co	Hotels Restaurants & Leisure	",
    
    "TNON	Tenon Medical	Medical Devices	",
    
    "TNP	Tsakos Energy Navigation	Oil Gas & Consumable Fuels	",
    
    "TNXP	Tonix Pharmaceuticals Holding	Biotechnology	",
    
    "TNYA	Tenaya Therapeutics	Biotechnology	",
    
    "TOAC	Talon  Acquisition	Blank Check / SPAC	",
    
    "TOI	The Oncology Institute	Medical Care Facilities	",
    
    "TOL	Toll Brothers	Household Durables	",
    
    "TOMZ	TOMI Environmental Solutions	Commercial Services & Supplies	",
    
    "TOPS	Top Ships	Oil Gas & Consumable Fuels	",
    
    "TOST	Toast	Software-Infrastructure	",
    
    "TOUR	Tuniu	Hotels Restaurants & Leisure	",
    
    "TOWN	TowneBank	Banks	",
    
    "TPB	Turning Point Brands	Tobacco	",
    
    "TPBA	TPB Acquisition I	Blank Check / SPAC	",
    
    "TPC	Tutor Perini	Construction & Engineering	",
    
    "TPG	TPG Inc	Asset Management	",
    
    "TPGY	TPG Pace Beneficial Finance	Shell Companies	",
    
    "TPH	TRI Pointe Homes	Household Durables	",
    
    "TPHS	Trinity Place Holdings	Real Estate Management & Development	",
    
    "TPIC	TPI Composites	Electrical Equipment	",
    
    "TPL	Texas Pacific Land	Oil Gas & Consumable Fuels	",
    
    "TPR	Tapestry	Textiles Apparel & Luxury Goods	",
    
    "TPST	Tempest Therapeutics	Biotechnology	",
    
    "TPTX	Turning Point Therapeutics	Biotechnology	",
    
    "TPVG	TriplePoint Venture Growth BDC	Capital Markets	",
    
    "TPX	Tempur Sealy International	Household Durables	",
    ,
    "TR	    Tootsie Roll Industries	Food Products	",
    
    "TRAQ	Trine II Acquisition	Blank Check / SPAC	",
    
    "TRC	Tejon Ranch Company	Real Estate Management & Development	",
    
    "TRCA	Twin Ridge Capital Acquisition	Blank Check / SPAC	",
    
    "TRDA	Entrada Therapeutics	Biotechnology	",
    
    "TREC	Trecora Resources	Chemicals	",
    
    "TREE	LendingTree	Thrifts & Mortgage Finance	",
    
    "TREX	Trex Company	Building Products	",
    
    "TRGP	Targa Resources	Oil Gas & Consumable Fuels	",
    
    "TRHC	Tabula Rasa HealthCare	Health Care Technology	",
    
    "TRI	Thomson Reuters	Professional Services	",
    
    "TRIB	Trinity Biotech	Health Care Equipment & Supplies	",
    
    "TRIN	Trinity Capital	Asset Management	",
    
    "TRIP	TripAdvisor	Interactive Media & Services	",
    
    "TRIS	Tristar Acquisition I	Blank Check / SPAC	",
    
    "TRKA	Troika Media Group	Advertising Agencies	",
    
    "TRMB	Trimble	Electronic Equipment Instruments & C	",
    
    "TRMD	Torm PLC	Oil & Gas Midstream	",
    ,
    "TRMK	Trustmark	Banks	",
    
    "TRMR	Tremor International	Advertising Agencies	",
    
    "TRN	Trinity Industries	Machinery	",
    
    "TRNO	Terreno Realty	Equity Real Estate Investment Trusts 	",
    
    "TRNS	Transcat	Trading Companies & Distributors	",
    
    "TRON	Corner Growth Acquisition 	Blank Check / SPAC	",
    
    "TROO	TROOPS	Software-Application	",
    
    "TROW	T Rowe Price Group	Capital Markets	",
    
    "TROX	Tronox Holdings	Chemicals	",
    
    "TRP	TC Energy	Oil Gas & Consumable Fuels	",
    
    "TRQ	Turquoise Hill Resources	Metals & Mining	",
    
    "TRS	TriMas	Machinery	",
    
    "TRST	TrustCo Bank Corp NY	Thrifts & Mortgage Finance	",
    
    "TRT	Trio-Tech International	Semiconductors & Semiconductor Equipment	",
    
    "TRTL	TortoiseEcofin Acquisition III	Blank Check / SPAC	",
    
    "TRTN	Triton International	Trading Companies & Distributors	",
    
    "TRTX	TPG RE Finance Trust	Mortgage Real Estate Investment Trust	",
    
    "TRU	TransUnion	Professional Services	",
    
    "TRUE	TrueCar	Interactive Media & Services	",
    
    "TRUP	Trupanion	Insurance	",
    
    "TRV	The Travelers Companies	Insurance	",
    
    "TRVG	Trivago	Interactive Media & Services	",
    
    "TRVI	Trevi Therapeutics	Pharmaceuticals	",
    
    "TRVN	Trevena	Biotechnology	",
    
    "TRX	Tanzanian Gold	Metals & Mining	",
    
    "TS	     Tenaris	Energy Equipment & Services	",
    
    "TSAT	Telesat	Communication Equipment	",
    
    "TSBK	Timberland Bancorp	Thrifts & Mortgage Finance	",
    
    "TSC	TriState Capital Holdings	Banks	",
    
    "TSCO	Tractor Supply Company	Specialty Retail	",
    
    "TSE	Trinseo	Chemicals	",
    
    "TSEM	Tower Semiconductor	Semiconductors & Semiconductor Equipment	",
    
    "TSHA	Taysha Gene Therapies	Biotechnology	",
    
    "TSIB	Tishman Speyer Innovation II	Blank Check / SPAC	",
    
    "TSLA	Tesla	Automobiles	",
    
    "TSLX	Sixth Street Specialty Lending	Capital Markets	",
    
    "TSM	Taiwan Semiconductor Manufacturing Company	Semiconductors & Semiconductor Equipment	",
    
    "TSN	Tyson Foods	Food Products	",
    
    "TSP	TuSimple Holdings	Trucking	",
    
    "TSPQ	TCW Special Purpose Acquisition	Blank Check / SPAC	",
    
    "TSQ	Townsquare Media	Media	",
    
    "TSRI	TSR Inc	IT Services	",
    
    "TSVT	seventy bio	Biotechnology	",
    
    "TT	    Trane Technologies	Building Products	",
    
    "TTC	The Toro Company	Machinery	",
    ,
    "TTCF	Tattooed Chef	Packaged Foods	",
    
    "TTD	The Trade Desk	Software	",
    
    "TTE	TotalEnergies SE	Oil Gas & Consumable Fuels	",
    
    "TTEC	TTEC Holdings	IT Services	",
    
    "TTEK	Tetra Tech	Commercial Services & Supplies	",
    
    "TTGT	TechTarget	Media	",
    
    "TTI	TETRA Technologies	Energy Equipment & Services	",
    
    "TTM	Tata Motors	Automobiles	",
    
    "TTMI	TTM Technologies	Electronic Equipment Instruments & C	",
    
    "TTNP	Titan Pharmaceuticals	Pharmaceuticals	",
    
    "TTOO	T Biosystems	Biotechnology	",
    
    "TTSH	Tile Shop Holdings	Specialty Retail	",
    
    "TTWO	Take-Two Interactive Software	Entertainment	",
    
    "TU	     TELUS	Diversified Telecommunication Services	",
    
    "TUEM	Tuesday Morning	Discount Stores	",
    
    "TUFN	Tufin Software Technologies	Software	",
    
    "TUP	Tupperware Brands	Household Durables	",
    
    "TURN	 Degree Capital	Capital Markets	",
    
    "TUSK	Mammoth Energy Services	Energy Equipment & Services	",
    
    "TUYA	Tuya Inc	Software-Infrastructure	",
    
    "TV	    Grupo Televisa SAB	Media	",
    
    "TVTX	Travere Therapeutics	Biotechnology	",
    
    "TVTY	Tivity Health	Health Care Providers & Services	",
    
    "TW	    Tradeweb Markets	Capital Markets	",
    
    "TWCB	Bilander Acquisition	Blank Check / SPAC	",
    
    "TWI	Titan International	Machinery	",
    
    "TWIN	Twin Disc	Machinery	",
    
    "TWKS	Thoughtworks Holding	Information Technology Services	",
    ,
    "TWLO	Twilio	IT Services	",
    
    "TWLV	Twelve Seas Investment Company II	Blank Check / SPAC	",
    
    "TWND	Tailwind Acquisition	Blank Check / SPAC	",
    
    "TWNI	Tailwind International Acquisition	Blank Check / SPAC	",
    
    "TWNK	Hostess Brands	Food Products	",
    
    "TWO	Two Harbors Investment	Mortgage Real Estate Investment Trust	",
    
    "TWOA	two	Blank Check / SPAC	",
    
    "TWOU	U Inc	Software	",
    
    "TWST	Twist Bioscience	Biotechnology	",
    
    "TWTR	Twitter	Interactive Media & Services	",
    
    "TX	    Ternium	Metals & Mining	",
    
    "TXG	X Genomics	Life Sciences Tools & Services	",
    
    "TXMD	TherapeuticsMD	Pharmaceuticals	",
    
    "TXN	Texas Instruments	Semiconductors & Semiconductor Equipment	",
    
    "TXRH	Texas Roadhouse	Hotels Restaurants & Leisure	",
    
    "TXT	Textron	Aerospace & Defense	",
    
    "TYG	Tortoise Energy Infrastructure	Asset Management	",
    
    "TYL	Tyler Technologies	Software	",
    
    "TYME	Tyme Technologies	Biotechnology	",
    
    "TYRA	Tyra Biosciences	Biotechnology	",
    
    "TZOO	Travelzoo	Interactive Media & Services	",
    
    "TZPS	TZP Strategies Acquisition	Blank Check / SPAC	",
    
    "U	    Unity Software	Software	",
    
    "UA	    Under Armour	Textiles Apparel & Luxury Goods	",
    
    "UAA	Under Armour	Textiles Apparel & Luxury Goods	",
    
    "UAL	United Airlines Holdings	Airlines	",
    
    "UAMY	United States Antimony	Metals & Mining	",
    
    "UAN	CVR Partners LP	Chemicals	",
    
    "UAVS	AgEagle Aerial Systems	Machinery	",
    
    "UBA	Urstadt Biddle Properties	Equity Real Estate Investment Trusts 	",
    
    "UBCP	United Bancorp	Banks	",
    
    "UBER	Uber Technologies	Road & Rail	",
    
    "UBFO	United Security Bancshares	Banks	",
    
    "UBOH	United Bancshares	Banks	",
    
    "UBP	Urstadt Biddle Properties	Equity Real Estate Investment Trusts 	",
    
    "UBS	UBS Group AG	Capital Markets	",
    
    "UBSI	United Bankshares	Banks	",
    
    "UBX	Unity Biotechnology	Biotechnology	",
    
    "UCBI	United Community Banks	Banks	",
    
    "UCL	uCloudlink Group	Telecom Services	",
    
    "UCTT	Ultra Clean Holdings	Semiconductors & Semiconductor Equipment	",
    
    "UDMY	Udemy	Education & Training Services	",
    
    "UDR	UDR Inc	Equity Real Estate Investment Trusts 	",
    
    "UE	    Urban Edge Properties	Equity Real Estate Investment Trusts 	",
    
    "UEC	Uranium Energy	Oil Gas & Consumable Fuels	",
    
    "UEIC	Universal Electronics	Household Durables	",
    
    "UEPS	Net  UEPS Technologies	IT Services	",
    
    "UFAB	Unique Fabricating	Auto Components	",
    
    "UFCS	United Fire Group	Insurance	",
    
    "UFI	Unifi	Textiles Apparel & Luxury Goods	",
    
    "UFPI	UFP Industries	Building Products	",
    
    "UFPT	UFP Technologies	Containers & Packaging	",
    
    "UG	    United-Guardian	Personal Products	",
    
    "UGI	UGI Corporation	Gas Utilities	",
    
    "UGP	Ultrapar Participacoes	Oil Gas & Consumable Fuels	",
    
    "UGRO	Urban-gro	Farm & Heavy Construction Machinery	",
    
    "UHAL	Amerco	Road & Rail	",
    
    "UHS	Universal Health Services	Health Care Providers & Services	",
    
    "UHT	Universal Health Realty Income Trust	Equity Real Estate Investment Trusts 	",
    
    "UI	    Ubiquiti	Communications Equipment	",
    
    "UIHC	United Insurance Holdings	Insurance	",
    
    "UIS	Unisys	IT Services	",
    
    "UK	    Ucommune International	Real Estate Services	",
    
    "UL	    Unilever	Personal Products	",
    ,
    "ULBI	Ultralife	Electrical Equipment	",
    
    "ULCC	Frontier Group Holdings	Airlines	",
    
    "ULH	Universal Logistics Holdings	Road & Rail	",
    
    "ULTA	Ulta Beauty	Specialty Retail	",
    
    "UMBF	UMB Financial	Banks	",
    ,
    "UMC	United Microelectronics	Semiconductors & Semiconductor Equipment	",
    
    "UMH	UMH Properties	Equity Real Estate Investment Trusts 	",
    ,
    "UMPQ	Umpqua Holdings	Banks	",
    
    "UNAM	Unico American	Insurance	",
    
    "UNB	Union Bankshares	Banks	",
    
    "UNCY	Unicycive Therapeutics	Biotechnology	",
    
    "UNF	UniFirst	Commercial Services & Supplies	",
    
    "UNFI	United Natural Foods	Food & Staples Retailing	",
    
    "UNH	UnitedHealth Group	Health Care Providers & Services	",
    
    "UNIT	Uniti Group	Equity Real Estate Investment Trusts 	",
    
    "UNM	Unum Group	Insurance	",
    
    "UNP	Union Pacific	Road & Rail	",
    
    "UNTY	Unity Bancorp	Banks	",
    
    "UNVR	Univar Solutions	Trading Companies & Distributors	",
    
    "UONE	Urban One	Media	",
    
    "UONEK	Urban One	Media	",
    
    "UP	    Wheels Up Experience	Airports & Air Services	",
    
    "UPC	Universe Pharmaceuticals	Drug Manufacturers-Specialty & Generic	",
    
    "UPH	UpHealth	Health Information Services	",
    
    "UPLD	Upland Software	Software	",
    
    "UPS	United Parcel Service	Air Freight & Logistics	",
    
    "UPST	Upstart Holdings	Consumer Finance	",
    
    "UPTD	TradeUP Acquisition	Blank Check / SPAC	",
    
    "UPWK	Upwork	Professional Services	",
    ,
    "URBN	Urban Outfitters	Specialty Retail	",
    
    "URG	Ur-Energy	Oil Gas & Consumable Fuels	",
    
    "URGN	UroGen Pharma	Biotechnology	",
    
    "URI	United Rentals	Trading Companies & Distributors	",
    
    "UROY	Uranium Royalty	Uranium	",
    
    "USAC	USA Compression Partners LP	Energy Equipment & Services	",
    
    "USAK	USA Truck	Road & Rail	",
    
    "USAP	Universal Stainless & Alloy Products	Metals & Mining	",
    
    "USAS	Americas Gold & Silver	Metals & Mining	",
    
    "USAU	US Gold	Metals & Mining	",
    
    "USB	US Bancorp	Banks	",
    
    "USCB	USCB Financial Holdings	Banks-Regional	",
    
    "USCT	TKB Critical Technologies 	Blank Check / SPAC	",
    
    "USDP	USD Partners LP	Oil Gas & Consumable Fuels	",
    
    "USEG	US Energy	Oil Gas & Consumable Fuels	",
    
    "USER	UserTesting	Software-Application	",
    
    "USFD	US Foods Holding	Food & Staples Retailing	",
    
    "USIO	Usio Inc	IT Services	",
    
    "USLM	United States Lime & Minerals	Construction Materials	",
    
    "USM	United States Cellular		",
    
    "USNA	USANA Health Sciences	Personal Products	",
    
    "USPH	US Physical Therapy	Health Care Providers & Services	",
    
    "USWS	US Well Services	Oil & Gas Equipment & Services	",
    
    "USX	US Xpress Enterprises	Road & Rail	",
    
    "UTAA	UTA Acquisition	Blank Check / SPAC	",
    
    "UTHR	United Therapeutics	Biotechnology	",
    
    "UTI	Universal Technical Institute	Diversified Consumer Services	",
    
    "UTL	Unitil	Multi-Utilities	",
    
    "UTMD	Utah Medical Products	Health Care Equipment & Supplies	",
    
    "UTME	UTime	Consumer Electronics	",
    
    "UTRS	Minerva Surgical	Health Information Services	",
    
    "UTSI	UTStarcom Holdings	Communications Equipment	",
    
    "UTZ	Utz Brands	Food Products	",
    
    "UUU	Universal Security Instruments	Electronic Equipment Instruments & C	",
    
    "UUUU	Energy Fuels	Oil Gas & Consumable Fuels	",
    
    "UVE	Universal Insurance Holdings	Insurance	",
    
    "UVSP	Univest Financial	Banks	",
    
    "UVV	Universal	Tobacco	",
    ,
    "UWMC	UWM Holdings	Mortgage Finance	",
    
    "UXIN	Uxin Limited	Internet & Direct Marketing Retail	",
    
    "V	    Visa Inc	IT Services	",
    
    "VABK	Virginia National Bankshares	Banks	",
    
    "VAC	Marriott Vacations Worldwide	Hotels Restaurants & Leisure	",
    ,
    "VACC	Vaccitech	Biotechnology	",
    
    "VAL	Valaris	Oil & Gas Equipment & Services	",
    
    "VALE	Vale SA	Metals & Mining	",
    
    "VALN	Valneva SE	Biotechnology	",
    
    "VALU	Value Line	Capital Markets	",
    
    "VAPO	Vapotherm	Health Care Equipment & Supplies	",
    
    "VAQC	Vector Acquisition II	Blank Check / SPAC	",
    
    "VATE	INNOVATE	Engineering & Construction	",
    
    "VAXX	Vaxxinity	Biotechnology	",
    
    "VBFC	Village Bank & Trust Financial	Banks	",
    
    "VBIV	VBI Vaccines	Biotechnology	",
    
    "VBLT	Vascular Biogenics	Biotechnology	",
    
    "VBNK	VersaBank	Banks-Regional	",
    
    "VBOC	Viscogliosi Brothers Acquisition	Blank Check / SPAC	",
    
    "VBTX	Veritex Holdings	Banks	",
    
    "VC	    Visteon	Auto Components	",
    
    "VCEL	Vericel	Biotechnology	",
    
    "VCKA	Vickers Vantage I	Blank Check / SPAC	",
    
    "VCNX	Vaccinex	Biotechnology	",
    
    "VCSA	Vacasa	Software-Application	",
    
    "VCTR	Victory Capital Holdings	Capital Markets	",
    
    "VCXA	x Capital Venture Acquisition II	Blank Check / SPAC	",
    
    "VCXB	x Capital Venture Acquisition III	Blank Check / SPAC	",
    
    "VCYT	Veracyte	Biotechnology	",
    
    "VEC	Vectrus	Aerospace & Defense	",
    
    "VECO	Veeco Instruments	Semiconductors & Semiconductor Equipment	",
    
    "VECT	VectivBio Holding AG	Biotechnology	",
    
    "VEEE	Twin Vee PowerCats Co	Recreational Vehicles	",
    
    "VEEV	Veeva Systems	Health Care Technology	",
    
    "VEL	Velocity Financial	Thrifts & Mortgage Finance	",
    
    "VELO	Velocity Acquisition	Blank Check / SPAC	",
    
    "VENA	Venus Acquisition	Blank Check / SPAC	",
    
    "VEON	VEON Ltd		",
    
    "VERA	Vera Therapeutics	Biotechnology	",
    
    "VERB	Verb Technology Company	Software	",
    
    "VERI	Veritone	Software	",
    
    "VERO	Venus Concept	Medical Devices	",
    
    "VERU	Veru Inc	Personal Products	",
    
    "VERV	Verve Therapeutics	Biotechnology	",
    
    "VERX	Vertex	Software-Application	",
    
    "VERY	Vericity	Insurance	",
    
    "VET	Vermilion Energy	Oil Gas & Consumable Fuels	",
    
    "VEV	Vicinity Motor	Auto Manufacturers	",
    
    "VFC	VF Corporation	Textiles Apparel & Luxury Goods	",
    
    "VFF	Village Farms International	Food Products	",
    
    "VG	    Vonage Holdings	Diversified Telecommunication Services	",
    
    "VGFC	The Very Good Food Company	Packaged Foods	",
    
    "VGII	Virgin Group Acquisition II	Blank Check / SPAC	",
    
    "VGR	Vector Group	Tobacco	",
    
    "VGZ	Vista Gold	Metals & Mining	",
    
    "VHAQ	Viveon Health Acquisition	Blank Check / SPAC	",
    
    "VHC	VirnetX Holding	Software	",
    
    "VHI	Valhi	Chemicals	",
    
    "VHNA	Vahanna Tech Edge Acquisition I	Blank Check / SPAC	",
    
    "VIA	Via RenewablesUtilities-Regulated Water	",
    
    "VIAO	VIA optronics AG	Electronic Components	",
    
    "VIAV	Viavi Solutions	Communications Equipment	",
    
    "VICI	VICI Properties	Equity Real Estate Investment Trusts 	",
    
    "VICR	Vicor	Electrical Equipment	",
    
    "VIEW	View Inc	Building Products & Equipment	",
    
    "VIGL	Vigil Neuroscience	Biotechnology	",
    
    "VII	GC & Co Holdings	Blank Check / SPAC	",
    
    "VINC	Vincerx Pharma	Biotechnology	",
    
    "VINE	Fresh Vine Wine	Beverages-Wineries & Distilleries	",
    
    "VINO	Gaucho Group Holdings	Real Estate-Diversified	",
    
    "VINP	Vinci Partners Investments	Asset Management	",
    
    "VIOT	Viomi Technology Co	Household Durables	",
    
    "VIPS	Vipshop Holdings	Internet & Direct Marketing Retail	",
    
    "VIR	Vir Biotechnology	Biotechnology	",
    
    "VIRC	Virco Manufacturing	Commercial Services & Supplies	",
    
    "VIRI	Virios Therapeutics	Biotechnology	",
    
    "VIRT	Virtu Financial	Capital Markets	",
    
    "VIRX	Viracta Therapeutics	Biotechnology	",
    
    "VISL	Vislink Technologies	Communications Equipment	",
    
    "VIST	Vista Oil & Gas	Oil Gas & Consumable Fuels	",
    
    "VITL	Vital Farms	Farm Products	",
    
    "VIV	Telefonica Brasil	Telecom Services	",
    
    "VIVE	Viveve Medical	Health Care Equipment & Supplies	",
    
    "VIVO	Meridian Bioscience	Health Care Equipment & Supplies	",
    ,
    "VJET	Voxeljet AG	Machinery	",
    
    "VKTX	Viking Therapeutics	Biotechnology	",
    
    "VLAT	Valor Latitude Acquisition	Blank Check / SPAC	",
    
    "VLCN	Volcon	Auto Manufacturers	",
    
    "VLD	VeloD	Computer Hardware	",
    
    "VLDR	Velodyne Lidar	Scientific & Technical Instruments	",
    
    "VLGEA	Village Super Market	Food & Staples Retailing	",
    
    "VLN	Valens Semiconductor	Semiconductors	",
    
    "VLNS	Valens Company	Drug Manufacturers-Specialty & Generic	",
    
    "VLO	Valero Energy	Oil Gas & Consumable Fuels	",
    
    "VLON	Vallon Pharmaceuticals	Biotechnology	",
    
    "VLRS	Controladora Vuela Compania de Aviacion	Airlines	",
    
    "VLTA	Volta	Specialty Retail	",
    
    "VLY	Valley National Bancorp	Banks	",
    
    "VMAR	Vision Marine Technologies	Leisure Products	",
    
    "VMC	Vulcan Materials Company	Construction Materials	",
    
    "VMCA	Valuence Merger I	Blank Check / SPAC	",
    
    "VMD	Viemed Healthcare	Health Care Providers & Services	",
    
    "VMEO	Vimeo	Software-Application	",
    
    "VMGA	VMG Consumer Acquisition	Blank Check / SPAC	",
    
    "VMI	Valmont Industries	Construction & Engineering	",
    
    "VMW	VMware	Software	",
    
    "VNCE	Vince Holding	Textiles Apparel & Luxury Goods	",
    
    "VNDA	Vanda Pharmaceuticals	Biotechnology	",
    
    "VNET	Vianet Group	IT Services	",
    
    "VNO	Vornado Realty Trust	Equity Real Estate Investment Trusts 	",
    
    "VNOM	Viper Energy Partners LP	Oil Gas & Consumable Fuels	",
    
    "VNRX	VolitionRX	Health Care Equipment & Supplies	",
    
    "VNT	Vontier	Electronic Equipment Instruments & C	",
    
    "VNTR	Venator Materials	Chemicals	",
    
    "VOC	VOC Energy Trust	Oil Gas & Consumable Fuels	",
    
    "VOD	Vodafone Group		",
    
    "VOR	Vor Biopharma	Biotechnology	",
    
    "VORB	Virgin Orbit Holdings	Aerospace & Defense	",
    
    "VOXX	VOXX International	Household Durables	",
    
    "VOYA	Voya Financial	Diversified Financial Services	",
    
    "VPCB	VPC Impact Acquisition Holdings II	Blank Check / SPAC	",
    
    "VPG	Vishay Precision Group	Electronic Equipment Instruments & C	",
    
    "VQS	VIQ Solutions	Software-Application	",
    
    "VRA	Vera Bradley	Textiles Apparel & Luxury Goods	",
    
    "VRAR	The Glimpse Group	Software-Infrastructure	",
    
    "VRAY	ViewRay	Health Care Equipment & Supplies	",
    
    "VRCA	Verrica Pharmaceuticals	Pharmaceuticals	",
    
    "VRDN	Viridian Therapeutics	Biotechnology	",
    
    "VRE	Veris Residential	REIT-Residential	",
    
    "VREX	Varex Imaging	Health Care Equipment & Supplies	",
    
    "VRM	Vroom	Specialty Retail	",
    
    "VRME	VerifyMe	Electronic Equipment Instruments & C	",
    
    "VRNA	Verona Pharma	Pharmaceuticals	",
    
    "VRNS	Varonis Systems	Software	",
    
    "VRNT	Verint Systems	Software	",
    
    "VRPX	Virpax Pharmaceuticals	Biotechnology	",
    
    "VRRM	Verra Mobility	IT Services	",
    
    "VRSK	Verisk Analytics	Professional Services	",
    
    "VRSN	VeriSign	IT Services	",
    
    "VRT	Vertiv Holdings Co	Electrical Equipment & Parts	",
    
    "VRTS	Virtus Investment Partners	Capital Markets	",
    
    "VRTV	Veritiv	Trading Companies & Distributors	",
    
    "VRTX	Vertex Pharmaceuticals	Biotechnology	",
    
    "VS	    Versus Systems	Electronic Gaming & Multimedia	",
    
    "VSAC	Vision Sensing Acquisition	Blank Check / SPAC	",
    
    "VSAT	ViaSat	Communications Equipment	",
    
    "VSCO	Victoria's Secret & Co	Apparel Retail	",
    
    "VSEC	VSE Corporation	Commercial Services & Supplies	",
    
    "VSH	Vishay Intertechnology	Electronic Equipment Instruments & C	",
    
    "VST	Vistra	Independent Power and Renewable Elect	",
    
    "VSTA	Vasta Platform	Education & Training Services	",
    
    "VSTM	Verastem	Biotechnology	",
    
    "VSTO	Vista Outdoor	Leisure Products	",
    
    "VTAQ	Ventoux CCM Acquisition	Blank Check / SPAC	",
    
    "VTEX	VTEX	Software-Application	",
    
    "VTGN	VistaGen Therapeutics	Biotechnology	",
    
    "VTIQ	VectoIQ Acquisition II	Blank Check / SPAC	",
    
    "VTNR	Vertex Energy	Oil Gas & Consumable Fuels	",
    
    "VTOL	Bristow Group	Oil & Gas Equipment & Services	",
    
    "VTR	Ventas	Equity Real Estate Investment Trusts 	",
    
    "VTRS	Viatris	Pharmaceuticals	",
    ,
    "VTRU	Vitru	Education & Training Services	",
    
    "VTSI	VirTra	Aerospace & Defense	",
    
    "VTVT	vTv Therapeutics	Biotechnology	",
    
    "VTYX	Ventyx Biosciences	Biotechnology	",
    
    "VUZI	Vuzix	Household Durables	",
    
    "VVI	Viad Corp	Commercial Services & Supplies	",
    
    "VVNT	Vivint Smart Home	Security & Protection Services	",
    ,
    "VVOS	Vivos Therapeutics	Medical Devices	",
    
    "VVPR	VivoPower International	Independent Power and Renewable Elect	",
    
    "VVV	Valvoline	Chemicals	",
    
    "VWE	Vintage Wine Estates	Beverages-Wineries & Distilleries	",
    
    "VWTR	Vidler Water Resources	Commercial Services & Supplies	",
    
    "VXRT	Vaxart	Biotechnology	",
    
    "VYGG	Vy Global Growth	Blank Check / SPAC	",
    
    "VYGR	Voyager Therapeutics	Biotechnology	",
    
    "VYNE	VYNE Therapeutics	Biotechnology	",
    
    "VYNT	Vyant Bio	Biotechnology	",
    
    "VZ	    Verizon Communications	Diversified Telecommunication Services	",
    
    "VZIO	VIZIO Holding	Household Durables	",
    
    "VZLA	Vizsla Silver	Other Industrial Metals & Mining	",
    
    "W	    Wayfair	Internet & Direct Marketing Retail	",
    
    "WAB	Westinghouse Air Brake Technologies	Machinery	",
    
    "WABC	Westamerica Bancorporation	Banks	",
    ,
    "WAFD	Washington Federal	Thrifts & Mortgage Finance	",
    
    "WAFU	Wah Fu Education Group	Diversified Consumer Services	",
    
    "WAL	Western Alliance Bancorporation	Banks	",
    
    "WALD	Waldencast Acquisition	Blank Check / SPAC	",
    
    "WARR	Warrior Technologies Acquisition Company	Blank Check / SPAC	",
    
    "WASH	Washington Trust Bancorp	Banks	",
    
    "WAT	Waters	Life Sciences Tools & Services	",
    
    "WATT	Energous	Electrical Equipment	",
    
    "WAVC	Waverley Capital Acquisition 	Blank Check / SPAC	",
    
    "WAVD	WaveDancer	Information Technology Services	",
    
    "WAVE	Eco Wave Power Global AB (publ)	Software	",
    
    "WAVS	Western Acquisition Ventures	Blank Check / SPAC	",
    
    "WB	    Weibo	Interactive Media & Services	",
    
    "WBA	Walgreens Boots Alliance	Food & Staples Retailing	",
    
    "WBD	Warner Bros Discovery	Entertainment	",
    
    "WBEV	Winc Inc	Beverages-Wineries & Distilleries	",
    
    "WBS	Webster Financial	Banks	",
    
    "WBT	Welbilt	Machinery	",
    
    "WBX	Wallbox	Electronic Components	",
    
    "WCC	WESCO International	Trading Companies & Distributors	",
    
    "WCN	Waste Connections	Commercial Services & Supplies	",
    
    "WD	    Walker & Dunlop	Thrifts & Mortgage Finance	",
    
    "WDAY	Workday	Software	",
    
    "WDC	Western Digital	Technology Hardware Storage & Periph	",
    
    "WDFC	WD- Company	Household Products	",
    
    "WDH	Waterdrop	Insurance-Diversified	",
    
    "WE	    WeWork	Real Estate Services	",
    
    "WEAV	Weave Communications	Software-Application	",
    
    "WEBR	Weber	Furnishings Fixtures & Appliances	",
    
    "WEC	WEC Energy Group	Multi-Utilities	",
    
    "WEI	Weidai	Consumer Finance	",
    
    "WEJO	Wejo Group	Software-Infrastructure	",
    
    "WEL	Integrated Wellness Acquisition	Blank Check / SPAC	",
    
    "WELL	Welltower	Equity Real Estate Investment Trusts 	",
    
    "WEN	The Wendy's Company	Hotels Restaurants & Leisure	",
    
    "WERN	Werner Enterprises	Road & Rail	",
    
    "WES	Western Midstream Partners LP	Oil Gas & Consumable Fuels	",
    
    "WETF	WisdomTree Investments	Capital Markets	",
    
    "WEX	WEX Inc	IT Services	",
    
    "WEYS	Weyco Group	Distributors	",
    
    "WF	    Woori Financial Group	Banks	",
    
    "WFC	Wells Fargo & Company	Banks	",
    
    "WFCF	Where Food Comes From	Software	",
    
    "WFG	West Fraser Timber Company	Paper & Forest Products	",
    
    "WFRD	Weatherford International	Oil & Gas Equipment & Services	",
    
    "WGO	Winnebago Industries	Automobiles	",
    ,
    "WH	    Wyndham Hotels & Resorts	Hotels Restaurants & Leisure	",
    
    "WHD	Cactus	Energy Equipment & Services	",
    
    "WHF	WhiteHorse Finance	Capital Markets	",
    
    "WHG	Westwood Holdings Group	Capital Markets	",
    
    "WHLM	Wilhelmina International	Commercial Services & Supplies	",
    
    "WHLR	Wheeler Real Estate Investment Trust	Equity Real Estate Investment Trusts 	",
    
    "WHR	Whirlpool	Household Durables	",
    ,
    "WILC	G Willi-Food International	Food & Staples Retailing	",
    
    "WIMI	WiMi Hologram Cloud	Advertising Agencies	",
    
    "WINA	Winmark	Specialty Retail	",
    
    "WING	Wingstop	Hotels Restaurants & Leisure	",
    
    "WINT	Windtree Therapeutics	Biotechnology	",
    
    "WINV	WinVest Acquisition	Blank Check / SPAC	",
    
    "WIRE	Encore Wire	Electrical Equipment	",
    
    "WISA	Summit Wireless Technologies	Semiconductors & Semiconductor Equipment	",
    
    "WISH	ContextLogic	Internet & Direct Marketing Retail	",
    
    "WIT	Wipro	IT Services	",
    
    "WIX	Wixcom	IT Services	",
    
    "WK	    Workiva	Software	",
    ,
    "WKEY	WISeKey International Holding AG	Software	",
    
    "WKHS	Workhorse Group	Auto Components	",
    
    "WKME	WalkMe	Software-Application	",
    
    "WKSP	Worksport	Auto Parts	",
    
    "WLDN	Willdan Group	Professional Services	",
    
    "WLFC	Willis Lease Finance	Trading Companies & Distributors	",
    
    "WLK	Westlake Chemical	Chemicals	",
    
    "WLKP	Westlake Chemical Partners LP	Chemicals	",
    
    "WLL	Whiting Petroleum	Oil Gas & Consumable Fuels	",
    
    "WLMS	Williams Industrial Services Group	Construction & Engineering	",
    
    "WLY	John Wiley & Sons	Publishing	",
    
    "WLYB	John Wiley & Sons	Publishing	",
    
    "WM	    Commercial Services & Supplies	",
    
    "WMB	The Williams Companies	Oil Gas & Consumable Fuels	",
    
    "WMC	Western Asset Mortgage Capital	Mortgage Real Estate Investment Trust	",
    
    "WMG	Warner Music Group	Entertainment	",
    
    "WMK	Weis Markets	Food & Staples Retailing	",
    
    "WMPN	William Penn Bancorporation	Thrifts & Mortgage Finance	",
    
    "WMS	Advanced Drainage Systems	Building Products	",
    
    "WMT	Walmart	Food & Staples Retailing	",
    
    "WNC	Wabash National	Machinery	",
    
    "WNEB	Western New England Bancorp	Thrifts & Mortgage Finance	",
    
    "WNNR	Andretti Acquisition	Blank Check / SPAC	",
    
    "WNS	WNS (Holdings)	IT Services	",
    
    "WNW	Wunong Net Technology Company	Internet Retail	",
    
    "WOLF	Wolfspeed	Semiconductors	",
    
    "WOOF	Petco Health And Wellness Company	Specialty Retail	",
    
    "WOR	Worthington Industries	Metals & Mining	",
    
    "WORX	SCWorx	Health Care Technology	",
    
    "WOW	WideOpenWest	Media	",
    
    "WPC	WP Carey	Equity Real Estate Investment Trusts 	",
    
    "WPCA	Warburg Pincus Capital Corporation I-A	Blank Check / SPAC	",
    
    "WPCB	Warburg Pincus Capital Corporation I-B	Blank Check / SPAC	",
    
    "WPM	Wheaton Precious Metals	Metals & Mining	",
    
    "WPP	WPP plc	Media	",
    
    "WPRT	Westport Fuel Systems	Machinery	",
    
    "WQGA	World Quantum Growth Acquisition	Blank Check / SPAC	",
    
    "WRAC	Williams Rowland Acquisition	Blank Check / SPAC	",
    
    "WRAP	Wrap Technologies	Electronic Equipment Instruments & C	",
    
    "WRB	WR Berkley	Insurance	",
    
    "WRBY	Warby Parker	Medical Instruments & Supplies	",
    
    "WRE	Washington Real Estate Investment Trust	Equity Real Estate Investment Trusts 	",
    
    "WRK	WestRock Company	Containers & Packaging	",
    
    "WRLD	World Acceptance	Consumer Finance	",
    
    "WRN	Western Copper & Gold	Metals & Mining	",
    
    "WSBC	WesBanco	Banks	",
    
    "WSBF	Waterstone Financial	Thrifts & Mortgage Finance	",
    
    "WSC	WillScot Mobile Mini Holdings	Construction & Engineering	",
    
    "WSFS	WSFS Financial	Thrifts & Mortgage Finance	",
    
    "WSM	Williams-Sonoma	Specialty Retail	",
    
    "WSO	Watsco	Trading Companies & Distributors	",
    
    "WSR	Whitestone REIT	Equity Real Estate Investment Trusts 	",
    
    "WST	West Pharmaceutical Services	Health Care Equipment & Supplies	",
    
    "WSTG	Wayside Technology Group	Electronic Equipment Instruments & C	",
    
    "WTBA	West Bancorporation	Banks	",
    
    "WTER	The Alkaline Water Company	Beverages	",
    
    "WTFC	Wintrust Financial	Banks	",
    
    "WTI	W&T Offshore	Oil Gas & Consumable Fuels	",
    
    "WTM	White Mountains Insurance Group	Insurance	",
    
    "WTMA	Welsbach Technology Metals Acquisition	Blank Check / SPAC	",
    
    "WTRG	Essential Utilities	",
    
    "WTRH	Waitr Holdings	Internet & Direct Marketing Retail	",
    
    "WTS	Watts Water Technologies	Machinery	",
    
    "WTT	Wireless Telecom Group	Electronic Equipment Instruments & C	",
    
    "WTTR	Select Energy Services	Energy Equipment & Services	",
    
    "WTW	Willis Towers Watson	Insurance	",
    ,
    "WU	    The Western Union Company	IT Services	",
    
    "WULF	TeraWulf	Capital Markets	",
    
    "WVE	Wave Life Sciences	Pharmaceuticals	",
    
    "WVFC	WVS Financial	Thrifts & Mortgage Finance	",
    
    "WVVI	Willamette Valley Vineyards	Beverages	",
    
    "WW	    WW International	Diversified Consumer Services	",
    
    "WWAC	Worldwide Webb Acquisition	Blank Check / SPAC	",
    
    "WWD	Woodward	Machinery	",
    
    "WWE	World Wrestling Entertainment	Entertainment	",
    
    "WWR	Westwater Resources	Oil Gas & Consumable Fuels	",
    
    "WWW	Wolverine World Wide	Textiles Apparel & Luxury Goods	",
    
    "WY	     Weyerhaeuser Company	Equity Real Estate Investment Trusts 	",
    ,
    "WYNN	Wynn Resorts	Hotels Restaurants & Leisure	",
    
    "WYY	WidePoint	IT Services	",
    
    "X	    United States Steel	Metals & Mining	",
    
    "XAIR	Beyond Air	Health Care Equipment & Supplies	",
    
    "XBIO	Xenetic Biosciences	Biotechnology	",
    
    "XBIT	XBiotech	Biotechnology	",
    
    "XCUR	Exicure	Biotechnology	",
    
    "XEL	Xcel Energy	Electric Utilities	",
    
    "XELA	Exela Technologies	IT Services	",
    
    "XELB	XCel Brands	Specialty Retail	",
    
    "XENE	Xenon Pharmaceuticals	Biotechnology	",
    
    "XENT	Intersect ENT	Pharmaceuticals	",
    
    "XERS	Xeris Pharmaceuticals	Pharmaceuticals	",
    
    "XFIN	ExcelFin Acquisition	Blank Check / SPAC	",
    
    "XFOR	X Pharmaceuticals	Biotechnology	",
    
    "XGN	Exagen	Health Care Providers & Services	",
    
    "XHR	Xenia Hotels & Resorts	Equity Real Estate Investment Trusts 	",
    ,
    "XIN	Xinyuan Real Estate Co	Real Estate Management & Development	",
    
    "XL	    XL Fleet	Auto Parts	",
    
    "XLO	Xilio Therapeutics	Biotechnology	",
    
    "XM	    Qualtrics International	Software-Application	",
    
    "XMTR	Xometry	Specialty Industrial Machinery	",
    
    "XNCR	Xencor	Biotechnology	",
    
    "XNET	Xunlei	Software	",
    
    "XOM	Exxon Mobil	Oil Gas & Consumable Fuels	",
    
    "XOMA	XOMA Corporation	Biotechnology	",
    
    "XOS	Xos Inc	Farm & Heavy Construction Machinery	",
    
    "XP	     XP Inc	Capital Markets	",
    
    "XPAX	XPAC Acquisition	Blank Check / SPAC	",
    
    "XPDB	Power & Digital Infrastructure Acquisition II	Blank Check / SPAC	",
    
    "XPEL	XPEL Inc	Auto Components	",
    
    "XPER	Xperi Holding	Semiconductors & Semiconductor Equipment	",
    
    "XPEV	XPeng	Automobiles	",
    
    "XPL	Solitario Zinc	Metals & Mining	",
    
    "XPO	XPO Logistics	Air Freight & Logistics	",
    
    "XPOA	DPCM Capital	Blank Check / SPAC	",
    
    "XPOF	Xponential Fitness	Leisure	",
    
    "XPON	Expion	Electrical Equipment & Parts	",
    
    "XPRO	Expro Group Holdings	Oil & Gas Equipment & Services	",
    
    "XRAY	Dentsply Sirona	Health Care Equipment & Supplies	",
    ,
    "XRTX	XORTX Therapeutics	Biotechnology	",
    
    "XRX	Xerox Holdings	Technology Hardware Storage & Periph	",
    
    "XSPA	XpresSpa Group	Diversified Consumer Services	",
    
    "XTLB	XTL Biopharmaceuticals	Biotechnology	",
    
    "XTNT	Xtant Medical Holdings	Health Care Equipment & Supplies	",
    
    "XXII	nd Century Group	Tobacco	",
    
    "XYF	X Financial	Consumer Finance	",
    
    "XYL	Xylem	Machinery	",
    
    "Y	    Alleghany	Insurance	",
    
    "YALA	Yalla Group	Interactive Media & Services	",
    
    "YCBD	cbdMD	Pharmaceuticals	",
    
    "YELL	Yellow	Road & Rail	",
    
    "YELP	Yelp Inc	Interactive Media & Services	",
    
    "YETI	YETI Holdings	Leisure Products	",
    
    "YEXT	Yext Inc	Software	",
    
    "YGMZ	MingZhu Logistics Holdings	Trucking	",
    
    "YI	    Inc	Food & Staples Retailing	",
    
    "YJ	    Yunji	Internet & Direct Marketing Retail	",
    
    "YMAB	Y-mAbs Therapeutics	Biotechnology	",
    
    "YMM	Full Truck Alliance Co	Software-Application	",
    ,
    "YMTX	Yumanity Therapeutics	Biotechnology	",
    
    "YNDX	Yandex	Interactive Media & Services	",
    
    "YORW	The York Water Company	",
    
    "YOTA	Yotta Acquisition	Blank Check / SPAC	",
    
    "YOU	Clear Secure	Software-Application	",
    
    "YPF	YPF Sociedad Anonima	Oil Gas & Consumable Fuels	",
    
    "YQ	    Education & Technology Group	Interactive Media & Services	",
    
    "YRD	Yiren Digital	Consumer Finance	",
    
    "YSG	Yatsen Holding	Personal Products	",
    
    "YTEN	Yield Bioscience	Biotechnology	",
    
    "YTPG	TPG Pace Beneficial II	Blank Check / SPAC	",
    
    "YTRA	Yatra Online	Internet & Direct Marketing Retail	",
    
    "YUM	Yum! Brands	Hotels Restaurants & Leisure	",
    
    "YUMC	Yum China Holdings	Hotels Restaurants & Leisure	",
    
    "YVR	Liquid Media Group	Entertainment	",
    
    "YY	   JOYY Inc	Interactive Media & Services	",
    
    "Z	   Zillow Group	Interactive Media & Services	",
    
    "ZBH	Zimmer Biomet Holdings	Health Care Equipment & Supplies	",
    
    "ZBRA	Zebra Technologies	Electronic Equipment Instruments & C	",
    
    "ZCMD	Zhongchao	Health Information Services	",
    
    "ZD	    Ziff Davis	Software	",
    
    "ZDGE	Zedge	Interactive Media & Services	",
    
    "ZEAL	Zealand Pharma	Biotechnology	",
    
    "ZEN	Zendesk	Software	",
    
    "ZENV	Zenvia	Software-Infrastructure	",
    
    "ZEPP	Zepp Health	Electronic Equipment Instruments & C	",
    
    "ZEST	Ecoark Holdings	Software	",
    
    "ZETA	Zeta Global Holdings	Software-Application	",
    
    "ZEUS	Olympic Steel	Metals & Mining	",
    
    "ZEV	Lightning eMotors	Farm & Heavy Construction Machinery	",
    
    "ZG	      Zillow Group	Interactive Media & Services	",
    ,
    "ZGN	Ermenegildo Zegna	Apparel Manufacturing	",
    ,
    "ZH	    Zhihu	Internet Content & Information	",
    
    "ZI	     ZoomInfo Technologies	Interactive Media & Services	",
    
    "ZIM	ZIM Integrated Shipping Services	Marine	",
    
    "ZIMV	ZimVie	Medical Devices	",
    
    "ZING	FTAC Zeus Acquisition	Blank Check / SPAC	",
    
    "ZION	Zions Bancorporation NA	Banks	",
    
    "ZIP	ZipRecruiter	Staffing & Employment Services	",
    
    "ZIVO	Zivo Bioscience	Personal Products	",
    
    "ZKIN	ZK International Group Co	Metals & Mining	",
    
    "ZLAB	Zai Lab	Biotechnology	",
    
    "ZM	     Zoom Video Communications	Software	",
    
    "ZME	Zhangmen Education	Education & Training Services	",
    
    "ZNGA	Zynga	Entertainment	",
    
    "ZNH	China Southern Airlines Company	Airlines	",
    
    "ZNTL	Zentalis Pharmaceuticals	Biotechnology	",
    
    "ZOM	Zomedica	Pharmaceuticals	",
    
    "ZS	     Zscaler	Software	",
    
    "ZSAN	Zosano Pharma	Health Care Equipment & Supplies	",
    
    "ZT	   Zimmer Energy Transition Acquisition	Blank Check / SPAC	",
    
    "ZTEK	Zentek	Medical Instruments & Supplies	",
    
    "ZTO	ZTO Express (Cayman)	Air Freight & Logistics	",
    
    "ZTS	Zoetis	Pharmaceuticals	",
    ,
    "ZUMZ	Zumiez	Specialty Retail	",
    
    "ZUO	Zuora	Software	",
    
    "ZVIA	Zevia PBC	Beverages-Non-Alcoholic	",
    
    "ZVO	Zovio	Diversified Consumer Services	",
    
    "ZWRK	Z-Work Acquisition	Blank Check / SPAC	",
    
    "ZWS	Zurn Water Solutions	Pollution & Treatment Controls	",
    
    "ZY	   Zymergen	Specialty Chemicals	",
    
    "ZYME	Zymeworks	Biotechnology	",
    
    "ZYNE	Zynerba Pharmaceuticals	Pharmaceuticals	",
    
    "ZYXI	Zynex	Health Care Equipment & Supplies	",
    ]
    
    const stockAbbrevArr = tickerArr.map(newArr => newArr.slice(0,5).replace('\t',"").trim())
    
    // console.log(stockAbbrevArr)
    
    const betterStockAbbrevArr = stockAbbrevArr.filter(arr => {return (arr !== undefined && arr !== null)})
    
    // console.log(betterStockAbbrevArr)

const tickerNameArr = [
"Agilent Technologies",
"Alcoa",
"Ares Acquisition",
"ATA Creativity Global",
"Armada Acquisition I",
"Aadi Bioscience",
"Arlington Asset Investment",
"American Airlines Group",
"Altisource Asset Management",
"Atlantic American",
"The Aaron's Company",
"Applied Optoelectronics",
"AAON, Inc.",
"Advance Auto Parts",
"Apple",
"Accelerate Acquisition",
"American Assets Trust",
"Autoscope Technologies",
"Almaden Minerals",
"Atlas Air Worldwide Holdings",
"AllianceBernstein Holding",
"ABB Ltd",
"AbbVie",
"AmerisourceBergen",
"Ameris Bancorp",
"AbCellera Biologics",
"Abcam",
"Abeona Therapeutics",
"Ambev",
"Asbury Automotive Group",
"ABG Acquisition I",
"ARCA biopharma",
"ABM Industries",
"Abiomed",
"Airbnb",
"Acumen Pharmaceuticals",
"Arbor Realty Trust",
"Absci",
"Absolute Software",
"Abbott Laboratories",
"Allegiance Bancshares",
"Arbutus Biopharma",
"ABVC BioPharma",
"Associated Capital Group",
"Arcosa",
"Atlantic Coastal Acquisition II",
"ACADIA Pharmaceuticals",
"Atlantic Coastal Acquisition",
"Athena Consumer Acquisition",
"Alset Capital Acquisition",
"Aurora Cannabis",
"Ace Global Business Acquisition",
"American Campus Communities",
"Accolade",
"ACCO Brands",
"Ascendant Digital Acquisition III",
"Accel Entertainment",
"Acer Therapeutics",
"Adicet Bio",
"ACE Convergence Acquisition",
"Arch Capital Group",
"Aluminum Corporation of China",
"Acadia Healthcare Company",
"Achilles Therapeutics",
"Archer Aviation",
"Achieve Life Sciences",
"Albertsons Companies",
"Atlas Crest Investment II",
"AC Immune",
"ACI Worldwide",
"Ackrell SPAC Partners I Co.",
"Axcelis Technologies",
"Arcellx",
"AECOM",
"ACM Research",
"Accenture",
"ACNB Corporation",
"Aclarion",
"Acorda Therapeutics",
"Independence Holdings",
"ACRES Commercial Realty",
"Ares Commercial Real Estate",
"Acropolis Infrastructure Acquisition",
"Aclaris Therapeutics",
"AcelRx Pharmaceuticals",
"Acasti Pharma",
"Enact Holdings",
"ArcLight Clean Transition II",
"Acacia Research",
"Acme United",
"ACV Auctions",
"Acurx Pharmaceuticals",
"Adagene",
"Anthemis Digital Acquisitions I",
"Adaptimmune Therapeutics",
"Adobe",
"Agree Realty",
"ADC Therapeutics",
"26 Capital Acquisition",
"Advanced Emissions Solutions",
"Adit EdTech Acquisition",
"Adagio Therapeutics",
"Analog Devices",
"Adial Pharmaceuticals",
"Archer-Daniels-Midland Company",
"ADMA Biologics",
"Adamis Pharmaceuticals",
"Advent Technologies Holdings",
"Adient",
"Edoc Acquisition",
"Automatic Data Processing",
"Adaptive Biotechnologies",
"Adara Acquisition",
"Ault Disruptive Technologies",
"ADS-TEC Energy Public Limited Company",
"Autodesk",
"ADT Inc.",
"AdTheorent Holding Company",
"ADTRAN",
"Aditx",
"Addus HomeCare",
"Advantage Solutions",
"Adverum Biotechnologies",
"Addex Therapeutics",
"Advaxis",
"Adams Resources & Energy",
"Authentic Equity Acquisition",
"AltEnergy Acquisition",
"Ameren",
"Aegon",
"Aesther Healthcare Acquisition",
"Antelope Enterprise Holdings",
"Aehr Test Systems",
"Alset EHome International",
"Advanced Energy Industries",
"American Equity Investment Life Holding Company",
"Agnico Eagle Mines",
"Aethlon Medical",
"Aenza",
"American Eagle Outfitters",
"American Electric Power Company",
"AerCap Holdings",
"AeroClean Technologies",
"Aerie Pharmaceuticals",
"The AES Corporation",
"Allied Esports Entertainment",
"Aeva Technologies",
"ADDvantage Technologies Group",
"AudioEye",
"AEterna Zentaris",
"Arena Fortify Acquisition",
"AF Acquisition",
"Aura FAT Projects Acquisition",
"Affinity Bancshares",
"AFC Gamma",
"American Financial Group",
"Armstrong Flooring",
"Acutus Medical",
"Aflac",
"Affimed",
"Affirm Holdings",
"AfterNext HealthTech Acquisition",
"Afya Limited",
"First Majestic Silver",
"African Gold Acquisition",
"AGBA Acquisition",
"Altimeter Growth 2",
"AGCO Corporation",
"AgeX Therapeutics",
"Agenus",
"AgroFresh Solutions",
"Agrify",
"Agile Growth",
"Alamos Gold",
"AgileThought",
"Agios Pharmaceuticals",
"agilon health",
"Aeglea Biotherapeutics",
"Federal Agricultural Mortgage",
"Federal Agricultural Mortgage",
"AGM Group Holdings",
"AGNC Investment",
"Assured Guaranty",
"Avangrid",
"AgriFORCE Growing Systems",
"Adecoagro",
"Agile Therapeutics",
"PlayAGS",
"Applied Genetic Technologies",
"Agiliti",
"Argan",
"Agilysys",
"AdaptHealth",
"Akso Health Group",
"Armada Hoffler Properties",
"Advanced Human Imaging",
"Avista Public Acquisition II",
"Allied Healthcare Products",
"Ahren Acquisition",
"Ashford Hospitality Trust",
"C3.ai",
"AIB Acquisition",
"American International Group",
"Aesthetic Medical International Holdings Group",
"Senmiao Technology",
"AIkido Pharma",
"AIM ImmunoTech",
"Aimfinity Investment I",
"Altra Industrial Motion",
"Albany International",
"Ashford",
"Apollo Investment",
"Arteris",
"AAR Corp.",
"Apartment Income REIT",
"Airgain",
"Air Industries Group",
"AirSculpt Technologies",
"Air T",
"Applied Industrial Technologies",
"Meta Data",
"Apartment Investment & Management Company",
"Assurant",
"Arthur J. Gallagher & Company",
"Aerojet Rocketdyne Holdings",
"Great Ajax",
"a.k.a. Brands Holding",
"Akamai Technologies",
"Akanda",
"Akebia Therapeutics",
"Sports Ventures Acquisition",
"Embotelladora Andina",
"Embotelladora Andina",
"Acadia Realty Trust",
"Akero Therapeutics",
"Akoustis Technologies",
"Akari Therapeutics",
"Akumin",
"Akouos",
"Akoya Biosciences",
"Air Lease",
"Albemarle",
"Albireo Pharma",
"Alcon",
"AltC Acquisition",
"Alico",
"Aldeyra Therapeutics",
"ALLETE",
"Alector",
"Alexander & Baldwin",
"ALFI, Inc.",
"Alamo Group",
"Allegro MicroSystems",
"Align Technology",
"Aligos Therapeutics",
"Allegiant Travel Company",
"Alignment Healthcare",
"Alimera Sciences",
"Alight",
"ALJ Regional Holdings",
"Alaska Air Group",
"Alkermes",
"Alkami Technology",
"The Allstate Corporation",
"Allegion",
"Allego",
"Allakos",
"Allogene Therapeutics",
"Allarity Therapeutics",
"Allot",
"Ally Financial",
"Allena Pharmaceuticals",
"Alnylam Pharmaceuticals",
"ALSP Orchid Acquisition I",
"AstroNova",
"Alpha Healthcare Acquisition III",
"Alpine Immune Sciences",
"Alpine 4 Holdings",
"AlerisLife",
"Alarm.com Holdings",
"Aileron Therapeutics",
"Alerus Financial",
"Alpha Star Acquisition",
"Allison Transmission Holdings",
"Altimmune",
"Alta Equipment Group",
"Alto Ingredients",
"Altair Engineering",
"Altitude Acquisition",
"Autoliv",
"AlloVir",
"Alexander's",
"ALX Oncology Holdings",
"Alithya Group",
"Alzamend Neuro",
"Antero Midstream",
"Amalgamated Financial",
"Ambrx Biopharma",
"American Acquisition Opportunity",
"Applied Materials",
"Ambarella",
"Ambac Financial Group",
"Ambow Education Holding",
"Ardagh Metal Packaging",
"AMC Entertainment Holdings",
"AMCI Acquisition II",
"Amcor",
"AMC Networks",
"Advanced Micro Devices",
"AMETEK",
"Amedisys",
"Apollo Medical Holdings",
"Affiliated Managers Group",
"Amgen",
"American Homes 4 Rent",
"AssetMark Financial Holdings",
"Amkor Technology",
"Amylyx Pharmaceuticals",
"AMN Healthcare Services",
"American National Bankshares",
"Allied Motion Technologies",
"America Movil",
"Ameriprise Financial",
"Ampio Pharmaceuticals",
"AmpliTech Group",
"Amphastar Pharmaceuticals",
"Advanced Merger Partners",
"Amplitude",
"Altus Power",
"Amplify Energy",
"Alpha Metallurgical Resources",
"Ameresco",
"A-Mark Precious Metals",
"Amarin",
"Amyris",
"Amneal Pharmaceuticals",
"American Shared Hospital Services",
"American Superconductor",
"AMERISAFE",
"Amesite",
"American Software",
"American Tower",
"Amerant Bancorp",
"AMTD International",
"Applied Molecular Transport",
"Aemetis",
"American Woodmark",
"American Well",
"America Movil",
"Amryt Pharma",
"Amazon.com",
"AutoNation",
"AnaptysBio",
"Arctos NorthStar Acquisition",
"American National Group",
"The Andersons",
"Anebulo Pharmaceuticals",
"Arista Networks",
"Abercrombie & Fitch Company",
"Anghami",
"Angi Inc.",
"Angion Biomedica",
"AngioDynamics",
"Anika Therapeutics",
"ANI Pharmaceuticals",
"Anixa Biosciences",
"Annexon",
"AnPac Bio-Medical Science Co.",
"ANSYS",
"AirNet Technology",
"Anthem",
"AN2 Therapeutics",
"Annovis Bio",
"Sphere 3D",
"Anzu Special Acquisition I",
"Arogo Capital Acquisition",
"Angel Oak Mortgage",
"Aon plc",
"Artivion",
"A. O. Smith",
"Alpha & Omega Semiconductor",
"American Outdoor Brands",
"Ampco-Pittsburgh",
"APA Corporation",
"Stonebridge Acquisition",
"Artisan Partners Asset Management",
"AP Acquisition",
"AppTech Payments",
"Air Products & Chemicals",
"Applied DNA Sciences",
"American Public Education",
"Apollo Endosurgery",
"APi Group",
"Apollo Strategic Growth Capital II",
"Amphenol",
"Agora",
"Apple Hospitality REIT",
"Apellis Pharmaceuticals",
"Applied Therapeutics",
"Aptorum Group",
"AxonPrime Infrastructure Acquisition",
"Apeiron Capital Investment",
"Apollo Global Management",
"Apogee Enterprises",
"AppLovin",
"AppFolio",
"AppHarvest",
"Appian",
"Digital Turbine",
"Aprea Therapeutics",
"Blue Apron Holdings",
"Apollo Strategic Growth Capital",
"Alpha Pro Tech",
"Alpha Partners Technology Merger",
"Aptose Biosciences",
"Preferred Apartment Communities",
"Aptiv",
"Aptinyx",
"Aptevo Therapeutics",
"Asia Pacific Wire & Cable",
"APx Acquisition I",
"Apyx Medical",
"AquaBounty Technologies",
"Aqua Metals",
"Algonquin Power & Utilities",
"Aquestive Therapeutics",
"Evoqua Water Technologies",
"Antero Resources",
"Aravive",
"Accuray",
"Arbe Robotics",
"Aequi Acquisition",
"Argo Blockchain",
"ARC Document Solutions",
"ArcBest",
"Ares Capital",
"Arco Platform",
"Arch Resources",
"Arbor Rapha Capital Bioholdings I",
"Arcos Dorados Holdings",
"Arcturus Therapeutics Holdings",
"Aridis Pharmaceuticals",
"Ardelyx",
"Alexandria Real Estate Equities",
"American Resources",
"Arena Group Holdings",
"Ares Management",
"Argo Group International Holdings",
"Argus Capital",
"Argenx SE",
"Arhaus",
"Apollo Commercial Real Estate Finance",
"Aris Water Solutions",
"Arisz Acquisition",
"ARKO Corp.",
"Ark Restaurants",
"American Realty Investors",
"Arlo Technologies",
"Alliance Resource Partners",
"Aramark",
"Armata Pharmaceuticals",
"Arconic",
"Archrock",
"Arrow Financial",
"Arqit Quantum",
"Arcutis Biotherapeutics",
"ARMOUR Residential REIT",
"Arrowroot Acquisition",
"Array Technologies",
"Artisan Acquisition",
"Artemis Strategic Investment",
"Artelo Biosciences",
"Artesian Resources",
"Art's-Way Manufacturing Co.",
"Arrival",
"Arvinas",
"Arrow Electronics",
"Arrowhead Pharmaceuticals",
"ARYA Sciences Acquisition IV",
"Arya Sciences Acquisition V",
"ASA Gold and Precious Metals",
"Sendas Distribuidora",
"Asana",
"Atlantic Street Acquisition",
"Astrea Acquisition",
"Associated Banc-Corp",
"Ardmore Shipping",
"A SPAC I Acquisition",
"A SPAC II Acquisition",
"ASGN Incorporated",
"Ashland Global Holdings",
"AdvanSix",
"AerSale",
"ASLAN Pharmaceuticals",
"Avino Silver & Gold Mines",
"Assembly Biosciences",
"ASML Holding",
"Ascendis Pharma",
"Actelis Networks",
"Academy Sports and Outdoors",
"Abri SPAC I",
"Alpha Capital Acquisition Company",
"Aspen Aerogels",
"Altisource Portfolio Solutions",
"Aspen Group",
"Grupo Aeroportuario del Sureste",
"Assertio Holdings",
"AmeriServ Financial",
"Astrotech",
"Astec Industries",
"Algoma Steel Group",
"Astra Space",
"AST SpaceMobile",
"Asure Software",
"ASE Technology Holding Company",
"Asensus Surgical",
"Amtech Systems",
"Austerlitz Acquisition II",
"Americas Technology Acquisition",
"ATAI Life Sciences",
"Aurora Technology Acquisition",
"Altimar Acquisition III",
"America First Multifamily Investors LP",
"Atotech",
"Atlas",
"Atlas Technical Consultants",
"Alphatec Holdings",
"Athena Technology Acquisition II",
"A10 Networks",
"Aterian",
"Anterix",
"Adtalem Global Education",
"Athira Pharma",
"Alterity Therapeutics",
"Autohome",
"Athersys",
"Allegheny Technologies",
"ATIF Holdings",
"ATI Physical Therapy",
"Atkore",
"Atlanticus Holdings",
"Ames National",
"180 Life Sciences",
"ATN International",
"Actinium Pharmaceuticals",
"Athenex",
"Atmos Energy",
"Atomera",
"Atossa Therapeutics",
"AptarGroup",
"Atara Biotherapeutics",
"AtriCure",
"Atrion",
"Astronics",
"Antares Pharma",
"Air Transport Services Group",
"Atento",
"Altice USA",
"Tribe Capital Growth I",
"Activision Blizzard",
"Avenue Therapeutics",
"Astria Therapeutics",
"AcuityAds Holdings",
"AngloGold Ashanti",
"Atlantic Union Bankshares",
"Auburn National Bancorporation",
"Audacy",
"AudioCodes",
"Augmedix",
"Ipsidy",
"Golden Minerals Company",
"Aurinia Pharmaceuticals",
"Aurora Innovation",
"Aura Biosciences",
"Aurora Acquisition",
"Austerlitz Acquisition I",
"Austin Gold",
"Autolus Therapeutics",
"AutoWeb",
"Auddia",
"Applied UV",
"Yamana Gold",
"Avista",
"Avalon Acquisition",
"Aveanna Healthcare Holdings",
"Grupo Aval Acciones y Valores",
"Avanti Acquisition",
"AeroVironment",
"AvalonBay Communities",
"Avalon GloboCare",
"American Virtual Cloud Technologies",
"American Vanguard",
"Avadel Pharmaceuticals",
"AvidXchange Holdings",
"AVEO Pharmaceuticals",
"Broadcom",
"Avinger",
"Achari Ventures Holdings I",
"Avid Technology",
"Atea Pharmaceuticals",
"Avalara",
"Avanos Medical",
"Avient",
"Aviat Networks",
"Mission Produce",
"AvePoint",
"Avrobio",
"Avnet",
"Aerovate Therapeutics",
"Avantor",
"Avalo Therapeutics",
"Anavex Life Sciences",
"Avery Dennison",
"Avaya Holdings",
"Aspira Women's Health",
"Armstrong World Industries",
"American Water Works Company",
"American States Water Company",
"Aware",
"Avalon Holdings",
"Axos Financial",
"AXIOS Sustainable Growth Acquisition",
"Accelerate Diagnostics",
"Axogen",
"Industrial Human Capital",
"American Axle & Manufacturing Holdings",
"Axcella Health",
"Axonics",
"Axon Enterprise",
"American Express Company",
"AMREP",
"AXIS Capital Holdings",
"Axsome Therapeutics",
"Axalta Coating Systems",
"AXT Inc.",
"Alexco Resource",
"Atlantica Sustainable Infrastructure",
"Acuity Brands",
"Ayala Pharmaceuticals",
"AYRO, Inc.",
"Aytu BioPharma",
"Alteryx",
"A2Z Smart Technologies",
"The AZEK Company",
"AstraZeneca",
"AutoZone",
"Aspen Technology",
"Azure Power Global",
"Azenta",
"Azul S.A.",
"Aziyo Biologics",
"AZZ Inc.",
"Barnes Group",
"The Boeing Company",
"Alibaba Group Holding",
"Bank of America",
"Berenson Acquisition I",
"BayFirst Financial",
"Booz Allen Hamilton Holding",
"Braskem",
"Ball Corporation",
"Bally's",
"Brookfield Asset Management",
"Banc of California",
"Bandwidth",
"BancFirst",
"Banner",
"StoneCastle Financial",
"Baosheng Media Group Holdings",
"Credicorp",
"The Original BARK Company",
"Couchbase",
"Battalion Oil",
"Baxter International",
"BlackBerry",
"BigBear.ai Holdings",
"Banco BBVA Argentina",
"Bed Bath & Beyond",
"Concrete Pumping Holdings",
"Banco Bradesco",
"Barings BDC",
"Beasley Broadcast Group",
"Brickell Biotech",
"Vinco Ventures",
"BridgeBio Pharma",
"Bone Biologics",
"Babylon Holdings",
"BBQ Holdings",
"Barrett Business Services",
"Brookfield Business Partners",
"Brookfield Business",
"Banco Bilbao Vizcaya Argentaria",
"Build-A-Bear Workshop",
"Bath & Body Works",
"Best Buy Co.",
"Brunswick",
"BioAtla",
"Brookline Capital Acquisition",
"BCB Bancorp",
"Boise Cascade Company",
"BioCardia",
"BCE, Inc.",
"Atreca",
"Banco de Chile",
"Brainstorm Cell Therapeutics",
"BayCom",
"The Brink's Company",
"Blucora",
"Brightcove",
"1895 Bancorp of Wisconsin",
"Balchem",
"BioCryst Pharmaceuticals",
"Barclays",
"Blockchain Coinvestors Acquisition I",
"Bain Capital Specialty Finance",
"BriaCell Therapeutics",
"Bicycle Therapeutics",
"Belden",
"Flanigan's Enterprises",
"Brandywine Realty Trust",
"Blonder Tongue Laboratories",
"Biodesix",
"Black Diamond Therapeutics",
"Becton, Dickinson and Company",
"Bloom Energy",
"Beam Therapeutics",
"HeartBeam",
"Beacon Roofing Supply",
"Bright Scholar Education Holdings",
"Beam Global",
"KE Holdings",
"Bel Fuse",
"Bel Fuse",
"Franklin Resources",
"Benessere Capital Acquisition",
"Brookfield Renewable Partners",
"Brookfield Renewable",
"Berry Global Group",
"BEST Inc.",
"Brown-Forman",
"Brown-Forman",
"Battery Future Acquisition",
"Bright Horizons Family Solutions",
"Bank First",
"Bread Financial Holdings",
"BurgerFi International",
"BankFinancial",
"Butterfly Network",
"Biofrontera",
"Saul Centers",
"Business First Bancshares",
"Bunge",
"BGC Partners",
"Big 5 Sporting Goods",
"Birks Group",
"BeiGene",
"Berkshire Grey",
"B&G Foods",
"BG Staffing",
"Build Acquisition",
"Biglari Holdings",
"Biglari Holdings",
"Crixus BH3 Acquisition",
"Blue Hat Interactive Entertainment Technology",
"Bar Harbor Bankshares",
"Bausch Health Companies",
"Benchmark Electronics",
"Brighthouse Financial",
"Bright Health Group",
"Benson Hill",
"Berkshire Hills Bancorp",
"BHP Group",
"Braemar Hotels & Resorts",
"Bull Horn Holdings",
"Biohaven Pharmaceutical Holding Co.",
"Baidu",
"Big Lots",
"BigCommerce Holdings",
"Biogen",
"Bilibili",
"Bill.com Holdings",
"BIMI International Medical",
"Bio-Rad Laboratories",
"Biocept",
"BIOLASE",
"Biora Therapeutics",
"BioPlus Acquisition",
"Biotech Acquisition Company",
"Bioceres Crop Solutions",
"Brookfield Infrastructure Partners LP",
"Brookfield Infrastructure",
"Allbirds",
"Bite Acquisition",
"Bitfarms",
"BioVie",
"BJ's Wholesale Club Holdings",
"Bluejay Diagnostics",
"BJ's Restaurants",
"Bank of New York Mellon",
"BlackRock Capital Investment",
"Brookdale Senior Living",
"The Buckle",
"BlueKnight Energy Partners",
"Black Hills",
"Black Knight",
"Bakkt Holdings",
"Booking Holdings",
"Baker Hughes Company",
"Bank of South Carolina",
"BlackSky Technology",
"BK Technologies",
"BankUnited",
"BIO-key International",
"BlackLine",
"Blue Bird",
"Blackboxstocks",
"Bellicum Pharmaceuticals",
"Bausch + Lomb",
"BlueCity Holdings",
"TopBuild",
"Blade Air Mobility",
"Ballard Power Systems",
"Builders FirstSource",
"bleuacacia ltd.",
"BioLife Solutions",
"Blue Foundry Bancorp",
"Berkeley Lights",
"Bridgeline Digital",
"BlackRock",
"Blackbaud",
"Bloomin' Brands",
"Blend Labs",
"Belong Acquisition",
"Blink Charging Co.",
"Bellerophon Therapeutics",
"BioLineRx",
"BCLS Acquisition",
"Belite Bio",
"Bright Lights Acquisition",
"BELLUS Health",
"BlueRiver Acquisition",
"Bluebird Bio",
"Banco Latinoamericano de Comercio Exterior",
"Backblaze",
"Banco Macro",
"Black Mountain Acquisition",
"Blockchain Moon Acquisition",
"Bumble",
"Biomea Fusion",
"Badger Meter",
"Bank of Montreal",
"Biomerica",
"Bank of Marin Bancorp",
"BioMarin Pharmaceutical",
"BM Technologies",
"Bristol-Myers Squibb Company",
"Barnes & Noble Education",
"Benefitfocus",
"BioNano Genomics",
"Bannix Acquisition",
"Broadstone Net Lease",
"Banner Acquisition",
"Bionomics",
"Burning Rock Biotech",
"The Bank of Nova Scotia",
"Bonso Electronics International",
"Benitec Biopharma",
"BioNTech SE",
"Bluescape Opportunities Acquisition",
"BOA Acquisition",
"Boston Omaha",
"Blue Ocean Acquisition",
"The Beachbody Company",
"Bank of Hawaii",
"BOK Financial",
"Bolt Biotherapeutics",
"Bon Natural Life",
"DMC Global",
"Boot Barn Holdings",
"Borr Drilling",
"BOS Better Online Solutions",
"Bank of the James Financial Group",
"Bowlero",
"Box, Inc.",
"Boxed",
"Boxlight",
"BP plc",
"Bullpen Parlay Acquisition Company",
"Blueprint Medicines",
"Popular",
"The Bank of Princeton",
"BP Prudhoe Bay Royalty Trust",
"Bio-Path Holdings",
"Biophytis",
"Boqii Holding",
"Broadridge Financial Solutions",
"Broad Capital Acquisition",
"Bragg Gaming Group",
"Bellring Brands",
"Blue Ridge Bankshares",
"Brady",
"BRC Inc.",
"Burcon NutraScience",
"Beard Energy Transition Acquisition",
"Bridge Investment Group Holdings",
"Bird Global",
"Breeze Holdings Acquisition",
"Barfresh Food Group",
"BRF S.A.",
"Bluerock Residential Growth REIT",
"Bridgford Foods",
"B. Riley Principal 250 Merger",
"Berkshire Hathaway",
"Berkshire Hathaway",
"BurTech Acquisition",
"Brookline Bancorp",
"Bruker",
"Brilliant Acquisition",
"Brilliant Earth Group",
"Broadmark Realty Capital",
"Barnwell Industries",
"Brown & Brown",
"Brooge Energy",
"Dutch Bros",
"BRP Group",
"B. Riley Principal 150 Merger",
"Borqs Technologies",
"BrightSpire Capital",
"BRT Apartments",
"BioRestorative Therapies",
"Brixmor Property Group",
"Berry",
"Braze",
"Banco Santander-Chile",
"Black Spade Acquisition Co.",
"Bogota Financial",
"Banco Santander Brasil",
"Bassett Furniture Industries",
"Blue Star Foods",
"Blue Safari Group Acquisition",
"BioSig Technologies",
"BrightSphere Investment Group",
"Big Sky Growth Partners",
"Black Stone Minerals",
"Banco Santander Mexico",
"Bsquare",
"Sierra Bancorp",
"Bank7",
"Boston Scientific",
"Bentley Systems",
"BioXcel Therapeutics",
"Bit Brother",
"BT Brands",
"Bit Digital",
"BIT Mining",
"BTCS Inc.",
"Biotricity",
"B2Gold",
"British American Tobacco",
"Ballantyne Strong",
"China Xiangtai Food Co.",
"BTRS Holdings",
"Better Choice Company",
"Better Therapeutics",
"Peabody Energy",
"Bridgetown Holdings",
"Brooklyn ImmunoTherapeutics",
"Anheuser-Busch InBev",
"Burford Capital",
"Burlington Stores",
"First Busey",
"BrightView Holdings",
"Bluegreen Vacations Holding",
"Compania de Minas Buenaventura SAA",
"Bioventus",
"BiondVax Pharmaceuticals",
"Babcock & Wilcox Enterprises",
"BorgWarner",
"Better World Acquisition",
"Blue World Acquisition",
"Brainsway",
"Bridgewater Bancshares",
"Blue Whale Acquisition I",
"Broadwind",
"Bankwell Financial Group",
"Bowman Consulting Group",
"Betterware de Mexico",
"Blue Water Vaccines",
"BWX Technologies",
"Blackstone",
"BlueLinx Holdings",
"Blackstone Mortgage Trust",
"Boston Properties",
"Baudax Bio",
"Byline Bancorp",
"Boyd Gaming",
"Broadway Financial",
"Banyan Acquisition",
"Beyond Meat",
"byNordic Acquisition",
"Byrna Technologies",
"BeyondSpring",
"BYTE Acquisition",
"Kanzhun",
"BuzzFeed",
"Beazer Homes USA",
"Baozun",
"Citigroup",
"Corporacion America Airports",
"China Automotive Systems",
"Cabaletta Bio",
"Cable One",
"Camden National",
"Credit Acceptance",
"CACI International",
"Cadence Bank",
"Candel Therapeutics",
"CAE Inc.",
"Conagra Brands",
"Cardinal Health",
"Canon",
"The Cheesecake Factory",
"Caleres",
"Calithera Biosciences",
"California BanCorp",
"Cal-Maine Foods",
"Calliditas Therapeutics AB",
"Calix",
"CalAmp",
"Camtek",
"Canaan",
"Can-Fite BioPharma",
"Cango",
"Cano Health",
"CrossAmerica Partners LP",
"Capricor Therapeutics",
"Avis Budget Group",
"Cara Therapeutics",
"Carter Bankshares",
"Cargurus",
"Carrier Global",
"Cars.com",
"Carver Bancorp",
"Cascade Acquisition",
"Casa Systems",
"Meta Financial Group",
"CASI Pharmaceuticals",
"Cass Information Systems",
"Casey's General Stores",
"Caterpillar",
"Cambridge Bancorp",
"The Cato Corporation",
"Cathay General Bancorp",
"Chubb",
"Colony Bankcorp",
"CBAK Energy Technology",
"CymaBay Therapeutics",
"Companhia Brasileira de Distribuicao",
"CB Financial Services",
"Catalyst Biosciences",
"CBL Properties",
"Capital Bancorp",
"Cboe Global Markets",
"CBRE Group",
"Chain Bridge I",
"Cracker Barrel Old Country Store",
"Commerce Bancshares",
"Cabot",
"CBTX, Inc.",
"Community Bank System",
"CBIZ, Inc.",
"The Chemours Company",
"Cascadia Acquisition",
"Crescent Capital BDC",
"Coastal Financial",
"Capital City Bank Group",
"C4 Therapeutics",
"CCC Intelligent Solutions Holdings",
"Cryo-Cell International",
"Coca-Cola Europacific Partners",
"Chase",
"Crown Castle International",
"Cameco",
"Crown Holdings",
"Carnival",
"CSI Compressco LP",
"Concord Medical Services Holding",
"CMC Materials",
"Code Chain New Continent",
"CNB Financial",
"Clear Channel Outdoor Holdings",
"Cogent Communications Holdings",
"CoreCard",
"Cross Country Healthcare",
"Century Communities",
"Consensus Cloud Solutions",
"Cactus Acquisition 1",
"Compania Cervecerias Unidas,",
"Churchill Capital Corp V",
"Churchill Capital VI",
"ChemoCentryx",
"Chindata Group Holdings",
"Codiak BioSciences",
"Compass Digital Acquisition",
"Ceridian HCM Holding",
"Coeur Mining",
"Centennial Resource Development",
"CDK Global",
"Cardlytics",
"Avid Bioservices",
"CareDx",
"Cadence Design Systems",
"Cedar Realty Trust",
"Cadre Holdings",
"Codere Online Luxembourg",
"Cidara Therapeutics",
"CDW Corporation",
"ChromaDex",
"Codexis",
"Cadiz",
"Celanese",
"China Eastern Airlines",
"CECO Environmental",
"Constellation Energy",
"Camber Energy",
"CONSOL Energy",
"Celcuity",
"Celsius Holdings",
"Cypress Environmental Partners",
"Celularity",
"Creative Medical Technology Holdings",
"Chembio Diagnostics",
"Cenntro Electric Group",
"CENAQ Energy",
"Central Garden & Pet Company",
"Central Garden & Pet Company",
"Century Aluminum Company",
"Central Puerto",
"Crestwood Equity Partners LP",
"Cerevel Therapeutics Holdings",
"Cerner",
"Cerus",
"Certara",
"Central Securities",
"Cemtrex",
"CEVA, Inc.",
"CF Industries Holdings",
"CrossFirst Bankshares",
"CF Bankshares",
"CF Acquisition VIII",
"C&F Financial",
"Capitol Federal Financial",
"CF Acquisition VII",
"Citizens Financial Group",
"CF Acquisition IV",
"Confluent",
"Conformis",
"Cullen/Frost Bankers",
"ContraFect",
"CFSB Bancorp",
"CF Acquisition VI",
"The Carlyle Group",
"China Green Agriculture",
"Centerra Gold",
"TCG BDC",
"Canopy Growth",
"Cullinan Oncology",
"Compugen",
"Cognyte Software",
"Cognex",
"Capstone Green Energy",
"Cognition Therapeutics",
"Catcha Investment",
"Comstock Holding Companies",
"City Holding Company",
"Community Healthcare Trust",
"Church & Dwight Company",
"Churchill Downs",
"Chemed",
"Chenghe Acquisition Co.",
"The Chefs' Warehouse",
"Check-Cap",
"Chegg",
"Choice Hotels International",
"Chesapeake Energy",
"Check Point Software Technologies",
"Chemung Financial",
"Cherry Hill Mortgage Investment",
"Change Healthcare",
"China Natural Resources",
"ChargePoint Holdings",
"Charah Solutions",
"Coherus BioSciences",
"C.H. Robinson Worldwide",
"Chico's FAS",
"Chunghwa Telecom Co.",
"Charter Communications",
"Chuy's Holdings",
"CHW Acquisition",
"Chewy",
"ChampionX",
"Cigna",
"Citizens",
"Cian PLC",
"Bancolombia",
"Cinedigm",
"Ciena",
"Cipher Mining",
"Companhia Energetica de Minas Gerais",
"Colliers International Group",
"China Index Holdings",
"CIIG Capital Partners II",
"Chimera Investment",
"CinCor Pharma",
"Cincinnati Financial",
"Cingulate",
"CI&T Inc.",
"City Office REIT",
"CĪON Investment",
"CIRCOR International",
"Cerberus Cyber Sentinel",
"Cartica Acquisition",
"Civista Bancshares",
"Civitas Resources",
"CompX International",
"CI Financial",
"Citizens Holding Company",
"China Jo-Jo Drugstores",
"Checkpoint Therapeutics",
"CKX Lands",
"Colgate-Palmolive Company",
"Colonnade Acquisition II",
"CleanTech Acquisition",
"Clarus",
"Class Acceleration",
"Chavant Capital Acquisition",
"Core Laboratories",
"Columbia Financial",
"Colombier Acquisition",
"Caladrius Biosciences",
"Cellebrite DI",
"Chatham Lodging Trust",
"Celldex Therapeutics",
"China Liberal Education Holdings",
"Cleveland-Cliffs",
"Clearfield",
"CollPlant Biotechnologies",
"Clean Harbors",
"Climate Real Impact Solutions II Acquisition",
"Clean Earth Acquisitions",
"ClearSign Technologies",
"Cellectis",
"Calumet Specialty Products Partners",
"Clean Energy Fuels",
"Clene",
"Clover Leaf Capital",
"Clover Health Investments,",
"Clipper Realty",
"CLPS Incorporation",
"ClearPoint Neuro",
"Continental Resources",
"Cellectar BioSciences",
"ClimateRock",
"Clarim Acquisition",
"ClearOne",
"Celestica",
"Clearside Biomedical",
"Cleanspark",
"Celsion",
"Catalyst Bancorp",
"Clever Leaves Holdings",
"Clovis Oncology",
"Clarivate",
"Clearwater Paper",
"Euro Tech Holdings Company",
"The Clorox Company",
"Calyxt",
"Canadian Imperial Bank of Commerce",
"Comerica",
"CareMax",
"Cambium Networks",
"Commercial Metals Company",
"Capitalworks Emerging Markets Acquisition",
"Caledonia Mining",
"Cheetah Mobile",
"Columbus McKinnon",
"Comcast",
"CIM Commercial Trust",
"CME Group",
"Chipotle Mexican Grill",
"Cummins",
"Cumulus Media",
"Chemomab Therapeutics",
"Compass Minerals International",
"Checkmate Pharmaceuticals",
"CompoSecure",
"Cimpress",
"COMPASS Pathways",
"Compass Therapeutics",
"Costamare",
"Chimerix",
"CMS Energy",
"Core Molding Technologies",
"Claros Mortgage Trust",
"Comtech Telecommunications",
"CNA Financial",
"Centene",
"Concert Pharmaceuticals",
"Concord Acquisition",
"Concord Acquisition II",
"Concord Acquisition III",
"Conduent",
"ZW Data Action Technologies",
"CN Energy Group",
"CNFinance Holdings",
"Conifer Holdings",
"Canna-Global Acquisition",
"CNH Industrial",
"Canadian National Railway Company",
"Cinemark Holdings",
"Core & Main",
"CONMED",
"Cincinnati Bancorp",
"Cannae Holdings",
"CNO Financial Group",
"ConnectOne Bancorp",
"CenterPoint Energy",
"Canadian Natural Resources",
"Cornerstone Building Brands",
"Cohen & Steers",
"Consolidated Communications Holdings",
"CNS Pharmaceuticals",
"Centessa Pharmaceuticals",
"Connect Biopharma Holdings",
"Centogene",
"Chardan NexTech Acquisition 2",
"Context Therapeutics",
"Century Casinos",
"Convey Holding Parent",
"CNX Resources",
"Concentrix",
"PC Connection",
"Global Cord Blood",
"The Vita Coco Company",
"Cocrystal Pharma",
"Coda Octopus Group",
"Compass Diversified Holdings",
"Co-Diagnostics",
"China Online Education Group",
"Capital One Financial",
"ChoiceOne Financial Services",
"Cogent Biosciences",
"Cohen & Company",
"Coherent",
"Cohu, Inc.",
"Coinbase Global",
"Coca-Cola Consolidated",
"Columbia Banking System",
"Americold Realty Trust",
"Colicity",
"Collegium Pharmaceutical",
"Columbia Sportswear Company",
"CommScope Holding Company",
"Compass",
"ComSovereign Holding",
"Conn's",
"CONX Corp.",
"The Cooper Companies",
"Traeger",
"Corner Growth Acquisition",
"Mr. Cooper Group",
"ConocoPhillips",
"CorEnergy Infrastructure Trust",
"Corsair Partnering",
"Corcept Therapeutics",
"Core Scientific",
"Cosmos Holdings",
"Costco Wholesale",
"Coty Inc.",
"Coupa Software",
"Coursera",
"COVA Acquisition",
"Cowen",
"Canadian Pacific Railway",
"Copa Holdings",
"Conyers Park III Acquisition",
"Cementos Pacasmayo",
"Counter Press Acquisition",
"Catalyst Partners Acquisition",
"Campbell Soup Company",
"Callon Petroleum Company",
"Central Pacific Financial",
"Crescent Point Energy",
"Canterbury Park Holding",
"China Pharma Holdings",
"Cumberland Pharmaceuticals",
"Chesapeake Utilities",
"Capital Product Partners",
"Coupang",
"Pop Culture Group ",
"Capri Holdings",
"Copart",
"Catalyst Pharmaceuticals",
"Cooper-Standard Holdings",
"CPS Technologies",
"Computer Programs & Systems",
"Consumer Portfolio Services",
"Camden Property Trust",
"Crown PropTech Acquisitions",
"Cepton",
"Compute Health Acquisition",
"Cheniere Energy Partners LP",
"Crane Co.",
"CRA International",
"Corbus Pharmaceuticals Holdings",
"Caribou Biosciences",
"California Resources",
"Cricut",
"Crawford & Company",
"Crawford & Company",
"Cardiff Oncology",
"Cardiol Therapeutics",
"Credo Technology Group Holding",
"Crescera Capital Acquisition",
"China Recycling Energy",
"Cresud SACIF y A.",
"Creative Realities",
"Charge Enterprises",
"Crescent Energy Company",
"CRH Plc",
"Cohn Robbins Holdings",
"Carter's",
"Curis",
"Comstock Resources",
"Crown ElectroKinetics",
"Charles River Laboratories International",
"Salesforce.com",
"CorMedix",
"America's Car-Mart",
"Cerence",
"Ceragon Networks",
"Crinetics Pharmaceuticals",
"Cronos Group",
"Crocs",
"Carpenter Technology",
"CRISPR Therapeutics AG",
"Corsair Gaming",
"Cross Timbers Royalty Trust",
"Creatd",
"Criteo",
"Cortexyme",
"Crucible Acquisition",
"Cirrus Logic",
"CorVel",
"Corvus Pharmaceuticals",
"CrowdStrike Holdings",
"Crown Crafts",
"Clarus Therapeutics Holdings",
"Corazon Capital V838 Monoceros",
"Credit Suisse Group AG",
"Champions Oncology",
"Cisco Systems",
"Color Star Technology Co.",
"CoStar Group",
"CSG Systems International",
"Cardiovascular Systems",
"Canadian Solar",
"Carlisle Companies",
"Consilium Acquisition Corp I",
"CSP Inc.",
"Centerspace",
"Chicken Soup for the Soul Entertainment",
"Constellation Acquisition I",
"Caesarstone",
"Castle Biosciences",
"Constellium SE",
"CapStar Financial Holdings",
"Carriage Services",
"Capital Southwest",
"CSW Industrials",
"CSX Corporation",
"Carney Technology Acquisition II",
"Cintas",
"Community Trust Bancorp",
"CynergisTek",
"Computer Task Group",
"Contango ORE",
"Charles & Colvard",
"Yunhong CTI",
"CTI BioPharma",
"CooTek (Cayman)",
"Cytek Biosciences",
"Cantaloupe",
"Catalent",
"CytomX Therapeutics",
"CTO Realty Growth",
"Custom Truck One Source",
"Coterra Energy",
"CareTrust REIT",
"Castor Maritime",
"Citi Trends",
"CTS Corporation",
"Cognizant Technology Solutions",
"CytoSorbents",
"CatchMark Timber Trust",
"Innovid",
"Corteva",
"Citius Pharmaceuticals",
"Citrix Systems",
"CubeSmart",
"Customers Bancorp",
"Cue Biopharma",
"Cuentas",
"Carnival",
"Cullman Bancorp",
"Culp, Inc.",
"CuriosityStream",
"CURO Group Holdings",
"Torrid Holdings",
"Cutera",
"Cousins Properties",
"CureVac",
"CVB Financial",
"Cavco Industries",
"Central Valley Community Bancorp",
"Cenovus Energy",
"Civeo",
"Covetrus",
"Commercial Vehicle Group",
"Calavo Growers",
"CVR Energy",
"Churchill Capital VII",
"Covenant Logistics Group",
"Commvault Systems",
"Codorus Valley Bancorp",
"Cel-Sci",
"Carvana Co.",
"Chicago Rivet & Machine Co.",
"CVRx, Inc.",
"CVS Health",
"Cvent Holding",
"CPI Aerostructures",
"CVD Equipment",
"Chevron",
"Curtiss-Wright",
"Clearwater Analytics Holdings",
"Community West Bancshares",
"CohBar",
"Consolidated Water Co.",
"Clearway Energy",
"Clearway Energy",
"Camping World Holdings",
"Cushman & Wakefield",
"Casella Waste Systems",
"California Water Service Group",
"CEMEX",
"C5 Acquisition",
"Crexendo",
"Sprinklr",
"CoreCivic",
"Celyad Oncology",
"Cyanotech",
"CyberOptics",
"Cybin",
"CyberArk Software",
"Cyclacel Pharmaceuticals",
"Cyclerion Therapeutics",
"China Yuchai International",
"Community Health Systems",
"Cyngn",
"Cyren",
"CryoPort",
"Cyteir Therapeutics",
"Cyclo Therapeutics",
"Cytokinetics",
"Altamira Therapeutics",
"Cyxtera Technologies",
"Citizens & Northern",
"Cazoo Group",
"Caesars Entertainment",
"Citizens Community Bancorp",
"Dominion Energy",
"Danaos",
"Dada Nexus",
"Data I/O",
"Daktronics",
"Delta Air Lines",
"DallasNews",
"DA32 Life Science Tech Acquisition",
"Dana Incorporated",
"Youdao",
"Crypto 1 Acquisition",
"Darling Ingredients",
"Dare Bioscience",
"DoorDash",
"DatChat",
"Endava",
"Dave Inc.",
"Day One Biopharmaceuticals",
"Deutsche Bank AG",
"Diebold Nixdorf",
"Digital Brands Group",
"Designer Brands",
"DigitalBridge Group",
"Decibel Therapeutics",
"DBV Technologies",
"Dropbox",
"Dakota Gold",
"Docebo",
"Tritium DCFC",
"DocGo",
"Donaldson Company",
"Ducommun",
"Dime Community Bancshares",
"DCP Midstream LP",
"Deciphera Pharmaceuticals",
"Decarbonization Plus Acquisition IV",
"Duck Creek Technologies",
"Delcath Systems",
"DuPont de Nemours",
"3D Systems",
"DoubleDown Interactive Co.",
"Dingdong (Cayman)",
"Datadog",
"Dillard's",
"Deere & Company",
"Easterly Government Properties",
"Denali Capital Acquisition",
"Deckers Outdoor",
"Douglas Emmett",
"Dell Technologies",
"Denbury",
"Denny's",
"Diageo",
"Journey Medical",
"Despegar.com",
"Diffusion Pharmaceuticals",
"Dream Finders Homes",
"Donnelley Financial Solutions",
"Discover Financial Services",
"Dollar General",
"Donegal Group",
"Donegal Group",
"Digi International",
"Digital Ally",
"Dragoneer Growth Opportunities III",
"Quest Diagnostics",
"Definitive Healthcare",
"Digital Health Acquisition",
"DHB Capital",
"Diversified Healthcare Trust",
"DHC Acquisition",
"DiamondHead Holdings",
"D.R. Horton",
"Diamond Hill Investment Group",
"Danaher",
"DHT Holdings",
"DHI Group",
"1stdibs.com",
"DICE Therapeutics",
"DiDi Global",
"DILA Capital Acquisition",
"Dine Brands Global",
"HF Sinclair",
"Diodes",
"The Walt Disney Company",
"Disruptive Acquisition I",
"DISH Network",
"AMCON Distributing Company",
"Daily Journal",
"Delek US Holdings",
"Data Knights Acquisition",
"Delek Logistics Partners LP",
"DraftKings Holdings",
"Dick's Sporting Goods",
"Delta Apparel",
"Dolby Laboratories",
"Deep Lake Capital Acquisition",
"DLH Holdings",
"Dynagas LNG Partners",
"DLocal",
"Dolphin Entertainment",
"Digital Realty Trust",
"Duluth Holdings",
"Dollar Tree",
"Deluxe",
"Desktop Metal",
"DiaMedica Therapeutics",
"Deep Medicine Acquisition",
"Dorchester Minerals",
"Digimarc",
"Digital Media Solutions",
"DermTech",
"dMY Technology Group, Inc. VI",
"Ginkgo Bioworks Holdings",
"Social Capital Suvretta Holdings I",
"Social Capital Suvretta Holdings II",
"Social Capital Suvretta Holdings III",
"Social Capital Suvretta Holdings IV",
"Codex DNA",
"Dun & Bradstreet Holdings",
"Denali Therapeutics",
"Danimer Scientific",
"Denison Mines",
"NOW Inc.",
"Krispy Kreme",
"D & Z Media Acquisition",
"Diamond Offshore Drilling",
"Physicians Realty Trust",
"DigitalOcean Holdings",
"Doximity",
"DocuSign",
"Dogness (International)",
"Dole plc",
"Doma Holdings",
"Domo, Inc.",
"BRP Inc.",
"Masonite International",
"Dorman Products",
"Douglas Elliman",
"Dover",
"Dow Inc.",
"Amdocs",
"DouYu International Holdings",
"DP Cap Acquisition I",
"Draganfly",
"DecisionPoint Systems",
"Domino's Pizza",
"Daqo New Energy",
"Macondray Capital Acquisition I",
"Direct Digital Holdings",
"DRDGOLD",
"Duke Realty",
"DiamondRock Hospitality Company",
"Darden Restaurants",
"DarioHealth",
"Dermata Therapeutics",
"Dril-Quip",
"DURECT",
"Alpha Tau Medical",
"DIRTT Environmental Solutions",
"Bright Minds Biosciences",
"Driven Brands Holdings",
"Drive Shack",
"Duddell Street Acquisition",
"Direct Selling Acquisition",
"Diversey Holdings",
"Design Therapeutics",
"Distribution Solutions Group",
"The Descartes Systems Group",
"Daseke",
"Viant Technology",
"DSS, Inc.",
"Deswell Industries",
"Diana Shipping",
"Dynatrace",
"Solo Brands",
"DTE Energy Company",
"DAVIDsTEA",
"Precision BioSciences",
"DT Midstream",
"Digital Transformation Opportunities",
"DTRT Health Acquisition",
"Datasea",
"Data Storage",
"DUET Acquisition",
"Duke Energy",
"Dune Acquisition",
"Fangdd Network Group",
"Duolingo",
"Duos Technologies Group",
"DoubleVerify Holdings",
"DaVita",
"Dynavax Technologies",
"Devon Energy",
"Digital World Acquisition",
"Delwinds Insurance Acquisition",
"Dawson Geophysical Company",
"Dynex Capital",
"DXC Technology Company",
"DexCom",
"Dunxin Financial Holdings",
"Destination XL Group",
"DXP Enterprises",
"Daxor",
"The Dixie Group",
"Dycom Industries",
"Dyadic International",
"Dyne Therapeutics",
"Dynamics Special Purpose",
"Dynatronics",
"DZS, Inc.",
"Eni SpA",
"Electronic Arts",
"Edify Acquisition",
"GrafTech International",
"Eargo",
"Ellington Residential Mortgage REIT",
"Eastside Distilling",
"Brinker International",
"Eventbrite",
"European Biotech Acquisition",
"eBay Inc.",
"Eastern Bankshares",
"EBET, INC.",
"Ennis",
"Ebix, Inc.",
"Eagle Bancorp Montana",
"Ebang International Holdings",
"Centrais Eletricas Brasileiras",
"Emergent BioSolutions",
"Enterprise Bancorp",
"Ecopetrol",
"Eagle Point Credit Company",
"Ecolab",
"ChannelAdvisor",
"electroCore",
"Encore Capital Group",
"Ecovyst",
"Consolidated Edison",
"EDAP TMS",
"Edible Garden AG",
"Editas Medicine",
"Empresa Distribuidora y Comercializadora Norte",
"Endurance Acquisition",
"Endeavor Group Holdings",
"EuroDry",
"Edesa Biotech",
"Skillful Craftsman Education Technology",
"EdtechX Holdings Acquisition II",
"New Oriental Education & Technology Group",
"Educational Development",
"Excelerate Energy",
"Euronet Worldwide",
"Elite Education Group International",
"Emerald Holding",
"Ellington Financial",
"Energy Focus",
"Enterprise Financial Services",
"eFFECTOR Therapeutics",
"Equifax",
"eGain",
"Eagle Bancorp",
"EG Acquisition",
"8x8, Inc.",
"Eagle Bulk Shipping",
"Enthusiast Gaming Holdings",
"Eldorado Gold",
"EastGroup Properties",
"Eagle Pharmaceuticals",
"VAALCO Energy",
"EHang Holdings",
"Encompass Health",
"eHealth",
"Eagle Point Income Company",
"Employers Holdings",
"Eiger BioPharmaceuticals",
"Edison International",
"EJF Acquisition",
"E-Home Household Service Holdings",
"Ekso Bionics Holdings",
"The Estee Lauder Companies",
"Envela",
"Elanco Animal Health",
"Electra Battery Materials",
"Eledon Pharmaceuticals",
"Elevation Oncology",
"e.l.f. Beauty",
"Ellomay Capital",
"Electromed",
"Electric Last Mile Solutions",
"Eloxx Pharmaceuticals",
"Companhia Paranaense de Energia",
"Equity LifeStyle Properties",
"Electro-Sensors",
"Eltek",
"Elevate Credit",
"Callaway Golf Company",
"Eliem Therapeutics",
"Elys Game Technology",
"Smart Share Global",
"eMagin",
"Embecta",
"Embark Technology",
"Emclaire Financial",
"EMCOR Group",
"EMCORE",
"The Eastern Company",
"FTAC Emerald Acquisition",
"Eastman Chemical Company",
"Emerson Electric Company",
"EMX Royalty",
"Enbridge",
"Energem",
"Endo International",
"Accretion Acquisition",
"Enfusion",
"ENGlobal",
"Enel Americas",
"Enel Chile",
"Enjoy Technology",
"EnLink Midstream LLC",
"Enlivex Therapeutics",
"Enochian Biosciences",
"Enovis",
"Executive Network Partnering",
"Enphase Energy",
"Energizer Holdings",
"EnerSys",
"Ensysce Biosciences",
"The Ensign Group",
"Enservco",
"Enanta Pharmaceuticals",
"Enterprise 4.0 Technology Acquisition",
"Entegris",
"Entera Bio",
"Envestnet",
"Enova International",
"Enveric Biosciences",
"Enovix",
"Enzo Biochem",
"Elliott Opportunity II",
"EOG Resources",
"Evolus",
"Eos Energy Enterprises",
"Empire Petroleum",
"Enerpac Tool Group",
"EPAM Systems",
"Edgewell Personal Care Company",
"Enterprise Products Partners",
"Epiphany Technology Acquisition",
"ESSA Pharma",
"Evolution Petroleum",
"EPR Properties",
"Essential Properties Realty Trust",
"Epsilon Energy",
"Empowerment & Inclusion Capital I",
"Epizyme",
"Equillium",
"Equity Bancshares",
"Equity Commonwealth",
"Equity Distribution Acquisition",
"Equitable Holdings",
"EQ Health Acquisition",
"Equinix",
"Equinor ASA",
"EQONEX",
"Equity Residential",
"EQRx, Inc.",
"Equus Total Return",
"EQT Corporation",
"Equinox Gold",
"Erasca",
"East Resources Acquisition Co.",
"Enerplus",
"Ericsson",
"Erie Indemnity Company",
"Energy Recovery",
"Embraer",
"Ero Copper",
"Erytech Pharma",
"Eversource Energy",
"ESAB Corporation",
"ESGEN Acquisition",
"Empire State Realty OP,",
"Elmira Savings Bank",
"Escalade",
"ESCO Technologies",
"Euroseas",
"Eros STX Global",
"Enstar Group",
"Element Solutions",
"Elbit Systems",
"ESM Acquisition",
"EngageSmart",
"Essent Group",
"Espey Manufacturing & Electronics",
"Esperion Therapeutics",
"Esquire Financial Holdings",
"Empire State Realty Trust",
"Essex Property Trust",
"ESSA Bancorp",
"East Stone Acquisition",
"Establishment Labs Holdings",
"Elastic",
"Earthstone Energy",
"Energy Transfer LP",
"E.merge Technology Acquisition",
"Ethan Allen Interiors",
"Eaton",
"89bio",
"Eton Pharmaceuticals",
"Entergy",
"Equitrans Midstream",
"Etsy, Inc.",
"Entasis Therapeutics Holdings",
"E2open Parent Holdings",
"Eucrates Biomedical Acquisition",
"Euronav NV",
"Enviva",
"Evaxion Biotech",
"Everbridge",
"Evans Bancorp",
"Entravision Communications",
"EverCommerce",
"EVe Mobility Acquisition",
"EverQuote",
"Eve Holding",
"Evofem Biosciences",
"Evogene",
"EVgo, Inc.",
"Evergreen",
"Evolent Health",
"EVI Industries",
"Ever-Glory International Group",
"Evelo Biosciences",
"Evolv Technologies Holdings",
"Evotec SE",
"Evo Acquisition",
"Evoke Pharma",
"Symbolic Logic",
"EVO Payments",
"Evercore",
"Evergy",
"Everi Holdings",
"Evertec",
"Vertical Aerospace",
"Edwards Lifesciences",
"East West Bancorp",
"European Wax Center",
"Edgewise Therapeutics",
"Exscientia",
"Exact Sciences",
"Exelon",
"Exelixis",
"Expensify",
"Endeavour Silver",
"ExlService Holdings",
"Excellon Resources",
"Eagle Materials",
"Expeditors International of Washington",
"Expedia Group",
"eXp World Holdings",
"Exponent",
"Express",
"Extra Space Storage",
"Exterran",
"Extreme Networks",
"National Vision Holdings",
"Eyenovia",
"Second Sight Medical Products",
"EyePoint Pharmaceuticals",
"EzFill Holdings",
"EZGO Technologies",
"EZCORP",
"Ford Motor Company",
"First Advantage",
"Figure Acquisition I",
"Freedom Acquisition I",
"First American Financial",
"Farmmi",
"Diamondback Energy",
"Fanhua",
"Farmer Brothers Company",
"FARO Technologies",
"Fastenal Company",
"FAT Brands",
"FAT Brands",
"Fate Therapeutics",
"Fathom Digital Manufacturing",
"Fat Projects Acquisition",
"Meta Platforms",
"Flagstar Bancorp",
"Fortune Brands Home & Security",
"Fortress Biotech",
"First Business Financial Services",
"FB Financial",
"The First Bancshares",
"First Bancorp",
"First BanCorp - Puerto Rico",
"Franklin BSP Realty Trust",
"Forte Biosciences",
"Franklin Covey Company",
"First Capital",
"Fortress Capital Acquisition",
"First Community Bancshares",
"First Community",
"FuelCell Energy",
"First Commonwealth Financial",
"FirstCash Holdings",
"FTI Consulting",
"First Citizens BancShares",
"Four Corners Property Trust",
"First Eagle Alternative Capital BDC",
"Focus Universal",
"Freeport-McMoRan",
"Fidelity D&D Bancorp",
"4D Molecular Therapeutics",
"Fresh Del Monte Produce",
"FactSet Research Systems",
"Fidus Investment",
"FedEx",
"FirstEnergy",
"5E Advanced Materials",
"Four Seasons Education (Cayman)",
"Frequency Electronics",
"Franklin Electric Co.",
"Femasys",
"Fennec Pharmaceuticals",
"Phoenix New Media",
"Ferguson",
"Forum Energy Technologies",
"Fintech Ecosystem Development",
"FutureFuel",
"First Financial Bancorp",
"FFBW, Inc.",
"Fuwei Films (Holdings) Co.",
"Flushing Financial",
"Faraday Future Intelligent Electric",
"First Financial Bankshares",
"F5 Networks",
"First Financial Northwest",
"First Foundation",
"First Guaranty Bancshares",
"FibroGen",
"FG Financial Group",
"FGI Industries",
"FG Merger",
"First Hawaiian",
"Federated Hermes",
"Future Health ESG",
"First Horizon",
"First High-School Education Group Co.",
"Foghorn Therapeutics",
"Focus Impact Acquisition",
"First Interstate BancSystem",
"Fair Isaac",
"Frontier Investment",
"FIGS, Inc.",
"Marlin Technology",
"FinVolution Group",
"FinWise Bancorp",
"Fidelity National Information Services",
"Financial Institutions",
"Fiserv",
"Fifth Third Bancorp",
"Five Below",
"Five9",
"Comfort Systems USA",
"Homology Medicines",
"National Beverage",
"Franklin Wireless",
"Foot Locker",
"Frazier Lifesciences Acquisition",
"First Light Acquisition Group",
"Flex Ltd.",
"Flora Growth",
"Fulgent Genetics",
"The First of Long Island Corporation",
"Full House Resorts",
"Flame Acquisition",
"Falcon Minerals",
"Fluence Energy",
"Flex LNG",
"Fluent",
"Flowers Foods",
"Fluor",
"Flowserve",
"FleetCor Technologies",
"Flux Power Holdings",
"1-800-Flowers.com",
"Flexsteel Industries",
"Soar Technology Acquisition",
"Flywire",
"Farmers & Merchants Bancorp",
"First Mid Bancshares",
"FMC Corporation",
"Forum Merger IV",
"Farmers National Banc",
"Fresenius Medical Care AG & Co.",
"Forma Therapeutics Holdings",
"Fomento Economico Mexicano",
"Fabrinet",
"Paragon 28",
"F.N.B.",
"FNCB Bancorp",
"Finch Therapeutics Group",
"Floor & Decor Holdings",
"Fidelity National Financial",
"FingerMotion",
"FedNat Holding Company",
"Funko",
"First Bancorp, Inc. - Maine",
"Franco-Nevada",
"Finnovate Acquisition",
"First Northwest Bancorp",
"Finward Bancorp",
"Finance of America Companies",
"Focus Financial Partners",
"Amicus Therapeutics",
"Fonar",
"Forestar Group",
"Forian",
"Forward Industries",
"ForgeRock",
"FormFactor",
"Forrester Research",
"Formula Systems (1985)",
"Fossil Group",
"Founder SPAC",
"Shift4 Payments",
"Fox Corporation",
"Fox Corporation",
"Fox Factory Holding",
"FoxWayne Enterprises Acquisition",
"Far Peak Acquisition",
"FlexShopper",
"Five Point Holdings LLC",
"Farmland Partners",
"First Industrial Realty Trust",
"Franklin Financial Services",
"First Bank",
"Republic First Bancorp",
"Forbion European Acquisition",
"First Republic Bank",
"Friedman Industries",
"Whole Earth Brands",
"Frequency Therapeutics",
"FREYR Battery",
"Franchise Group",
"Forge Global Holdings",
"Fiesta Restaurant Group",
"Freedom Holding",
"Fortune Rise Acquisition",
"Freeline Therapeutics Holdings",
"First Merchants",
"Frontline",
"JFrog",
"Frontier Acquisition",
"FRP Holdings",
"Freshpet",
"First Reserve Sustainable Growth",
"Freshworks",
"Primis Financial",
"Foresight Autonomous Holdings",
"Federal Realty Investment Trust",
"PWP Forward Acquisition I",
"Forest Road Acquisition II",
"Five Star Bancorp",
"FS Bancorp",
"First Seacoast Bancorp",
"First Savings Financial Group",
"Flexible Solutions International",
"FS KKR Capital",
"First Solar",
"Fastly",
"Fortuna Silver Mines",
"Fusion Acquisition II",
"Franklin Street Properties",
"Fisker",
"Fast Radius",
"FinServ Acquisition II",
"Federal Signal",
"Fortistar Sustainable Solutions",
"FAST Acquisition",
"L.B. Foster Company",
"F-star Therapeutics",
"FirstService",
"FTAC Athena Acquisition",
"Fortress Transportation & Infrastructure Investors LLC",
"Farfetch",
"FTC Solar",
"FinTech Acquisition V",
"Frontdoor",
"Fuel Tech",
"FinTech Evolution Acquisition Group",
"Future FinTech Group",
"Fathom Holdings",
"TechnipFMC",
"FutureTech II Acquisition",
"Flotek Industries",
"Fortinet",
"FTAC Parnassus Acquisition",
"Field Trip Health",
"Fortis",
"Fortive",
"FinTech Acquisition VI",
"FuboTV",
"H.B. Fuller Company",
"Fulcrum Therapeutics",
"Fulton Financial",
"Cedar Fair,",
"First United",
"Fury Gold Mines",
"First US Bancshares",
"Fusion Pharmaceuticals",
"Futu Holdings",
"Arcimoto",
"5:01 Acquisition",
"FVCBankcorp",
"Fortress Value Acquisition IV",
"Fiverr International",
"Fortress Value Acquisition III",
"Fifth Wall Acquisition III",
"First Wave BioPharma",
"Liberty Media Formula One Group",
"Forward Pharma",
"Forward Air",
"First Watch Restaurant Group",
"Financial Strategies Acquisition",
"F45 Training Holdings",
"First National",
"Frontier Communications Parent",
"FAST Acquisition II",
"Genpact",
"German American Bancorp",
"Global Consumer Acquisition",
"Gaia, Inc.",
"Gladstone Investment",
"Galectin Therapeutics",
"Gambling.com Group",
"Golden Arrow Merger",
"Engine Gaming & Media",
"GAN Limited",
"Gain Therapeutics",
"G&P Acquisition",
"Generation Asia I Acquisition",
"StealthGas",
"Marblegate Acquisition",
"Gatos Silver",
"GATX Corporation",
"Galiano Gold",
"Global Blue Group Holding AG",
"Global Blockchain Acquisition",
"Glacier Bancorp",
"Golub Capital BDC",
"Generation Bio Co.",
"GAMCO Investors",
"Global Indemnity Group, LLC",
"Greenbrook TMS",
"Generations Bancorp NY",
"GreenBox POS",
"New Concept Energy",
"Goldenbridge Acquisition",
"GBS, Inc.",
"Global Blood Therapeutics",
"The Greenbrier Companies",
"Greene County Bancorp",
"Gannett Co.",
"GCM Grosvenor",
"Genesco",
"GCP Applied Technologies",
"GlucoTrack",
"General Dynamics",
"GoDaddy",
"Golden Entertainment",
"Nexters",
"Gardiner Healthcare Acquisitions",
"Green Dot",
"GoodRx Holdings",
"GDS Holdings",
"Goldenstone Acquisition",
"Grid Dynamics Holdings",
"General Electric Company",
"Great Elm Capital",
"Games & Esports Experience Acquisition",
"Greif",
"Greif",
"Great Elm Group",
"Genesis Energy",
"Gencor Industries",
"Genetic Technologies",
"Genius Sports",
"Genesis Unicorn Capital",
"The GEO Group",
"Geospace Technologies",
"Geron",
"Guess?",
"Getnet Adquirencia E Servicos Para Meios De Pagamento",
"Gevo, Inc.",
"Guardforce AI Co.,",
"Griffon",
"Growth For Good Acquisition",
"Gold Fields",
"GFL Environmental",
"Graf Acquisition IV",
"GlobalFoundries",
"Golden Falcon Acquisition",
"Genesis Growth Tech Acquisition",
"Grupo Financiero Galicia",
"Gerdau",
"Green Giant",
"Graco",
"G3 VRM Acquisition",
"Glenfarne Merger",
"Gores Guggenheim",
"Gogoro",
"Guardant Health",
"Gaming & Hospitality Acquisition",
"Graham Holdings Company",
"GreenTree Hospitality Group",
"Gores Holdings IX",
"Greenhill & Co.",
"Guild Holdings Company",
"Graham",
"GH Research",
"Guardion Health Sciences",
"GigCapital5",
"Gesher I Acquisition",
"CGI, Inc.",
"Global Industrial Company",
"Gulf Island Fabrication",
"GigaMedia",
"G-III Apparel Group",
"Gores Holdings VIII",
"Gildan Activewear",
"Gilead Sciences",
"Gilat Satellite Networks",
"Generation Income Properties",
"General Mills",
"GigInternational1",
"Glaukos",
"Globe Life",
"Gladstone Capital",
"Globis Acquisition",
"Global-E Online",
"Cartesian Growth",
"Globus Maritime",
"Glen Burnie Bancorp",
"Great Lakes Dredge & Dock",
"GoldMining",
"Gladstone Acquisition",
"TD Holdings",
"Glass Houses Acquisition",
"Globalink Investment",
"Galmed Pharmaceuticals",
"Golar LNG",
"Globant",
"GasLog Partners LP",
"Global Partners LP",
"Galapagos NV",
"Gaming & Leisure Properties",
"Greenlight Capital Re",
"Gelesis Holdings",
"Greenwich LifeSciences",
"Global SPAC Partners Co.",
"Glatfelter",
"Galata Acquisition",
"Galecto",
"Monte Rosa Therapeutics",
"Corning",
"GlycoMimetics",
"General Motors Company",
"Genmab",
"Esports Entertainment Group",
"Gamida Cell",
"GameStop",
"Globus Medical",
"Aetherium Acquisition",
"Golden Matrix Group",
"Global Medical REIT",
"GMS Inc.",
"Gemini Therapeutics",
"G Medical Innovations Holdings",
"Group Nine Acquisition",
"Genocea Biosciences",
"Genie Energy",
"Genfit",
"Genco Shipping & Trading",
"Global Net Lease",
"Greenlane Holdings",
"Genprex",
"Generac Holdings",
"Genius Group",
"Genasys",
"Genenta Science S.p.A.",
"Gentex",
"Guaranty Bancshares",
"Genius Brands International",
"Genworth Financial",
"Grocery Outlet Holding",
"GO Acquisition",
"Gobi Acquisition",
"GoHealth",
"1847 Goedeker",
"Canoo",
"Golden Ocean Group",
"GoGreen Investments",
"Gogo Inc.",
"GOL Linhas Aereas Inteligentes",
"Barrick Gold",
"Acushnet Holdings",
"Gladstone Commercial",
"Alphabet",
"Alphabet",
"Canada Goose Holdings",
"Gold Resource",
"Gossamer Bio",
"Gaotu Techedu",
"GeoVax Labs",
"GreenPower Motor Company",
"Global Partner Acquisition II",
"Genuine Parts Company",
"Golden Path Acquisition",
"Group 1 Automotive",
"Graphic Packaging Holding Company",
"Great Panther Mining",
"Granite Point Mortgage Trust",
"Global Payments",
"Gulfport Energy",
"Green Plains Partners LP",
"Green Plains",
"GeoPark",
"GoPro",
"The Gap",
"Grab Holdings",
"Graybug Vision",
"Green Brick Partners",
"The Gorman-Rupp Company",
"Gracell Biotechnologies",
"Greencity Acquisition",
"Greenidge Generation Holdings",
"Grifols",
"Muscle Maker",
"Grindrod Shipping Holdings",
"Garmin",
"GreenLight Biosciences Holdings, PBC",
"Greenpro Capital",
"Grom Social Enterprises",
"U.S. Global Investors",
"Gold Royalty",
"Graphite Bio",
"Groupon",
"Gritstone bio",
"Galera Therapeutics",
"Grove",
"Gravity Co.",
"GrowGeneration",
"The Goldman Sachs Group",
"Global Synergy Acquisition",
"Globalstar",
"Great Southern Bancorp",
"Goldman Sachs BDC",
"Gores Holdings VII",
"Goosehead Insurance",
"GSI Technology",
"GlaxoSmithKline",
"Global Ship Lease",
"Ferroglobe",
"Glory Star New Media Group Holdings",
"G Squared Ascend II",
"G Squared Ascend I",
"GSR II Meteora Acquisition",
"Gold Standard Ventures",
"The Goodyear Tire & Rubber Company",
"Global Technology Acquisition I",
"GT Biopharma",
"Gran Tierra Energy",
"Greenland Technologies Holding",
"Gates Industrial",
"Genetron Holdings",
"G1 Therapeutics",
"Good Times Restaurants",
"GitLab",
"Chart Industries",
"Gray Television",
"Gray Television",
"Gores Technology Partners",
"Gores Technology Partners II",
"Garrett Motion",
"Getty Realty",
"GTY Technology Holdings",
"Gulf Resources",
"Granite Construction",
"Green Visor Financial Technology Acquisition I",
"GSE Systems",
"GWG Holdings",
"ESS Tech",
"Good Works II Acquisition",
"Guidewire Software",
"Global Water Resources",
"W.W. Grainger",
"GX Acquisition II",
"GXO Logistics",
"Gyrodyne, LLC",
"Hyatt Hotels",
"Hawaiian Holdings",
"Health Assurance Acquisition",
"Haemonetics",
"Hanmi Financial",
"Healthcare AI Acquisition",
"The Hain Celestial Group",
"Halliburton Company",
"Hallmark Financial Services",
"Halozyme Therapeutics",
"Happiness Biotech Group",
"Harpoon Therapeutics",
"Hasbro",
"Hannon Armstrong Sustainable Infrastructure Capital",
"Haynes International",
"Hayward Holdings",
"Huntington Bancshares",
"Hamilton Beach Brands Holding Company",
"Home Bancorp",
"Hanesbrands",
"Harvard Bioscience",
"HudBay Minerals",
"Horizon Bancorp",
"HBT Financial",
"HCA Healthcare",
"Healthcare Services Acquisition",
"Health Catalyst",
"Warrior Met Coal",
"Heritage-Crystal Clean",
"Harbor Custom Development",
"HCI Group",
"Hennessy Capital Investment V",
"Hudson Executive Investment II",
"The Hackett Group",
"HUTCHMED (China)",
"HCM Acquisition",
"JAWS Hurricane Acquisition",
"HashiCorp",
"Healthcare Services Group",
"Healthcare Triangle",
"Hennessy Capital Investment VI",
"HCW Biologics",
"The Home Depot",
"HDFC Bank",
"Hudson Technologies",
"Hawaiian Electric Industries",
"Turtle Beach",
"H&E Equipment Services",
"HEICO",
"HEICO",
"Helen of Troy",
"Holly Energy Partners",
"Hepion Pharmaceuticals",
"D-MARKET Electronic Services & Trading",
"FTAC Hera Acquisition",
"Hess Corporation",
"Hess Midstream LP",
"HEXO Corp.",
"Home Federal Bancorp",
"HF Foods Group",
"Heritage Financial",
"Heritage Global",
"Humanigen",
"Hagerty",
"Hilton Grand Vacations",
"The Howard Hughes Corporation",
"HHG Capital",
"HH&L Acquisition Co.",
"Headhunter Group",
"Harte Hanks",
"Hillenbrand",
"Hibbett",
"Hingham Institution for Savings",
"The Hartford Financial Services Group",
"H.I.G. Acquisition",
"Highway Holdings",
"Huntington Ingalls Industries",
"Hudson Executive Investment III",
"Hill International",
"Hillstream BioPharma",
"Hims & Hers Health",
"Himax Technologies",
"Hippo Holdings",
"High Tide",
"HIVE Blockchain Technologies",
"Highwoods Properties",
"Hecla Mining Company",
"Hamilton Lane Alliance Holdings I",
"Helbiz",
"Herbalife Nutrition",
"Hailiang Education Group",
"Heliogen",
"Houlihan Lokey",
"Helios Technologies",
"Harmonic",
"Holley",
"Hillman Solutions",
"Hamilton Lane",
"Hilton Worldwide Holdings",
"Cue Health",
"HilleVax",
"Helix Energy Solutions Group",
"Heartland Media Acquisition",
"Honda Motor Company",
"HumanCo Acquisition",
"Hoegh Lng Partners, LP",
"Horace Mann Educators",
"HMN Financial",
"Home Point Capital",
"HomeStreet",
"Hemisphere Media Group",
"Harmony Gold Mining Company",
"Hanger",
"HNI Corporation",
"Hennessy Advisors",
"Huaneng Power International",
"HNR Acquisition",
"Hallador Energy Company",
"The Honest Company",
"Hanover Bancorp",
"Hooker Furniture",
"Hall of Fame Resort & Entertainment Company",
"Harley-Davidson",
"HollySys Automation Technologies",
"Hologic",
"Home Bancshares",
"Honeywell International",
"HarborOne Bancorp",
"Robinhood Markets",
"HOOKIPA Pharma",
"Hope Bancorp",
"Emerging Markets Horizon",
"Hoth Therapeutics",
"Hour Loop",
"Hovnanian Enterprises",
"Werewolf Therapeutics",
"Helmerich & Payne",
"Hewlett-Packard Enterprise Company",
"HighPeak Energy",
"Home Plate Acquisition",
"Hudson Pacific Properties",
"HP Inc.",
"HPX Corp.",
"HireQuest",
"HealthEquity",
"Healthcare Realty Trust",
"H&R Block",
"Herc Holdings",
"Hormel Foods",
"Harmony Biosciences Holdings",
"Harrow Health",
"HireRight Holdings",
"Heritage Insurance Holdings",
"Heron Therapeutics",
"Horizon Technology Finance",
"Health Sciences Acquisitions Corp. 2",
"HSBC Holdings",
"Harsco",
"Helius Medical Technologies",
"Henry Schein",
"Heidrick & Struggles International",
"Heska",
"Hudson Global",
"Host Hotels & Resorts",
"HealthStream",
"Histogen",
"The Hershey Company",
"Hersha Hospitality Trust",
"Healthcare Trust of America",
"Hunt Companies Acquisition I",
"HomeTrust Bancshares",
"Heritage Commerce",
"HeartCore Enterprises",
"Hercules Capital",
"HTG Molecular Diagnostics",
"Hilltop Holdings",
"Huazhu Group",
"Heartland Express",
"Heartland Financial USA",
"Fusion Fuel Green",
"Highland Transcend Partners I",
"Hertz Global Holdings",
"Hubbell",
"Hub Group",
"HubSpot",
"Huadi International Group Co.",
"FSD Pharma",
"USHG Acquisition",
"Huize Holding",
"Humana",
"Humacyte",
"Huntsman",
"Hurco Companies",
"Huron Consulting Group",
"Houston American Energy",
"Hudson Capital",
"Hut 8 Mining",
"HUYA Inc.",
"HV Bancorp",
"Haverty Furniture Companies",
"Hawthorn Bancshares",
"Hancock Whitney",
"Healthwell Acquisition I",
"Hawkins",
"Hawks Acquisition",
"Howmet Aerospace",
"Hexcel",
"Hyster-Yale Materials Handling",
"Haymaker Acquisition III",
"Hydrofarm Holdings Group",
"Hyliion Holdings",
"Hycroft Mining Holding",
"Hyperfine",
"HyreCar",
"Hywin Holdings",
"Hyzon Motors",
"Horizon Global",
"Horizon Therapeutics",
"MarineMax",
"Horizon Acquisition II",
"IAA, Inc.",
"IAC/InterActiveCorp",
"ION Acquisition 3",
"Iamgold",
"Integra LifeSciences Holdings",
"Integral Ad Science Holding",
"Industrias Bachoco, S.A.B. de C.V.",
"Independent Bank",
"Ibere Pharmaceuticals",
"IBEX Limited",
"iBio, Inc.",
"Interactive Brokers Group",
"International Business Machines",
"ICICI Bank",
"International Bancshares",
"Installed Building Products",
"ImmunityBio",
"Independent Bank Group",
"iCAD, Inc.",
"ImmuCell",
"ICC Holdings",
"IceCure Medical",
"Independence Contract Drilling",
"Intercontinental Exchange",
"ICF International",
"Ichor Holdings",
"ICL Group",
"iClick Interactive Asia Group",
"ICON plc",
"Investcorp Credit Management BDC",
"Iconic Sports Acquisition",
"Intercept Pharmaceuticals",
"ICU Medical",
"Icosavax",
"PARTS iD",
"IDACORP",
"T Stamp",
"IDEX Biometrics ASA",
"InterDigital",
"Ideanomics",
"Intellicheck",
"Idaho Strategic Resources",
"Idera Pharmaceuticals",
"IDT Corporation",
"IDW Media Holdings",
"IDEXX Laboratories",
"IDEAYA Biosciences",
"Infrastructure & Energy Alternatives",
"Icahn Enterprises",
"IES Holdings",
"IDEX Corporation",
"Infobird ",
"International Flavors & Fragrances",
"InFinT Acquisition",
"InflaRx",
"Intercorp Financial Services",
"IG Acquisition",
"India Globalization Capital",
"International General Insurance Holdings",
"IGM Biosciences",
"Ignyte Acquisition",
"International Game Technology",
"Inception Growth Acquisition",
"iHuman",
"InterContinental Hotels Group",
"iHeartMedia",
"IHS Holding",
"InnSuites Hospitality Trust",
"Information Services Group",
"Insu Acquisition III",
"Insteel Industries",
"i3 Verticals",
"IntriCon",
"Inspira Technologies Oxy B.H.N.",
"Innovative Industrial Properties",
"II-VI",
"Ikena Oncology",
"Inhibikase Therapeutics",
"Illumina",
"Industrial Logistics Properties Trust",
"I-Mab",
"IMAC Holdings",
"International Media Acquisition",
"IMAX Corporation",
"iMedia Brands",
"IM Cannabis",
"Immunocore Holdings",
"ImmunoGen",
"Imago BioSciences",
"Impac Mortgage Holdings",
"Ingles Markets,",
"Immutep",
"Immersion",
"Immix Biopharma",
"Immunome",
"Imperial Oil",
"ChipMOS Technologies",
"Impel NeuroPharma",
"Imperial Petroleum",
"AEA-Bridges Impact",
"IMARA",
"Immuron",
"Immuneering",
"Integrated Media Technology",
"Immatics",
"Immunic",
"IMV Inc.",
"Immunovant",
"International Money Express",
"IN8bio",
"Insight Acquisition",
"First Internet Bancorp",
"Inhibrx",
"Intercure",
"Incyte",
"Independent Bank",
"indie Semiconductor",
"Indonesia Energy",
"Indaptus Therapeutics",
"INDUS Realty Trust",
"Informatica",
"Infinity Pharmaceuticals",
"Infinera",
"InfuSystem Holdings",
"Infosys",
"ING Group",
"Inogen",
"Ingredion",
"KludeIn I Acquisition",
"MiNK Therapeutics",
"InMed Pharmaceuticals",
"Inmune Bio",
"InMode",
"Summit Hotel Properties",
"Innovage Holding",
"Inovio Pharmaceuticals",
"Innodata",
"Inpixon",
"Inspired Entertainment",
"Inseego",
"Insmed",
"Inspire Medical Systems",
"Instructure Holdings",
"International Seaways",
"World Fuel Services",
"Intapp",
"Intel",
"Integral Acquisition 1",
"The InterGroup Corporation",
"inTEST",
"Intuit",
"Intrusion",
"Inuvo",
"Innoviva",
"Identiv",
"Invitation Homes",
"INVO Bioscience",
"Innoviz Technologies",
"Inozyme Pharma",
"ION Geophysical",
"Innovative International Acquisition",
"IO Biotech",
"Assure Holdings",
"IonQ, Inc.",
"Ionis Pharmaceuticals",
"Income Opportunity Realty Investors",
"Innospec",
"Samsara",
"Iovance Biotherapeutics",
"International Paper Company",
"ImmunoPrecise Antibodies",
"Inter Parfums",
"Inflection Point Acquisition",
"Professional Diversity Network",
"The Interpublic Group of Companies",
"IPG Photonics",
"Innate Pharma",
"Intrepid Potash",
"Social Capital Hedosophia Holdings IV",
"Social Capital Hedosophia Holdings VI",
"Century Therapeutics",
"InterPrivate II Acquisition",
"InterPrivate III Financial Partners",
"InterPrivate IV InfraTech Partners",
"iPower",
"Ideal Power",
"iQIYI",
"Intelligent Medicine Acquisition",
"IQVIA Holdings",
"Ingersoll Rand",
"iRobot",
"IRSA Propiedades Comerciales",
"Iridium Communications",
"Iris Energy",
"IRIDEX",
"Iron Mountain",
"IRadimed",
"IronNet",
"IF Bancorp",
"Integrated Rail & Resources Acquisition",
"IRSA Inversiones y Representaciones",
"Independence Realty Trust",
"iRhythm Technologies",
"Ironwood Pharmaceuticals",
"ironSource",
"Iron Spark I",
"Issuer Direct",
"IVERIC bio",
"Insignia Systems",
"Isleworth Healthcare Acquisition",
"IsoPlexis",
"iSpecimen",
"Inspirato",
"IsoRay",
"Intuitive Surgical",
"Innovative Solutions & Support",
"Investar Holding",
"iSun, Inc.",
"Gartner",
"Industrial Tech Acquisitions II",
"Itau Corpbanca",
"Intra-Cellular Therapies",
"Integer Holdings",
"ITHAX Acquisition",
"Iteris",
"Investors Title Company",
"iTeos Therapeutics",
"IT Tech Packaging",
"Itiquira Acquisition",
"Integra Resources",
"Itron",
"Iterum Therapeutics",
"Ituran Location & Control",
"ITT Inc.",
"Itau Unibanco Holding",
"Illinois Tool Works",
"Inventiva",
"Intevac",
"Invacare",
"Investcorp Acquisition",
"Investcorp Europe Acquisition Corp I",
"Swiftmerge Acquisition",
"Invesco Mortgage Capital",
"InvenTrust Properties",
"Invesco",
"ORIX Corporation",
"IX Acquisition",
"Incannex Healthcare",
"IZEA Worldwide",
"Jacobs Engineering Group",
"Jack in the Box",
"Jaguar Health",
"JAKKS Pacific",
"Jamf Holding",
"JanOne",
"Janux Therapeutics",
"Jupiter Acquisition",
"JATT Acquisition",
"Jazz Pharmaceuticals",
"JBG SMITH Properties",
"J.B. Hunt Transport Services",
"Janus International Group",
"Jabil",
"JetBlue Airways",
"John B. Sanfilippo & Son",
"John Bean Technologies",
"Johnson Controls International",
"Jack Creek Investment",
"JE Cleantech Holdings",
"Jewett-Cameron Trading Company",
"JD.com",
"Jefferies Financial Group",
"JELD-WEN Holding",
"Jiayin Group",
"9F Inc.",
"Aurora Mobile",
"Jaguar Global Growth Corporation I",
"Janus Henderson Group",
"James Hardie Industries",
"J.Jill",
"J & J Snack Foods",
"Jack Henry & Associates",
"JinkoSolar Holding Company",
"Jones Lang LaSalle",
"Jade Mountain Acquisition",
"Jumia Technologies AG",
"John Marshall Bancorp",
"Jounce Therapeutics",
"Johnson & Johnson",
"Juniper Networks",
"JOANN",
"GEE Group",
"Joby Aviation",
"The St. Joe Company",
"JOFF Fintech Acquisition",
"Johnson Outdoors",
"Jupai Holdings",
"JPMorgan Chase & Co.",
"Jerash Holdings (US)",
"James River Group Holdings",
"Jasper Therapeutics",
"Jianpu Technology",
"JAWS Juggernaut Acquisition",
"Juniper II",
"Jupiter Wellness",
"Coffee Holding Co.",
"Jupiter Wellness Acquisition",
"Jowell Global",
"Nordstrom",
"Jaws Mustang Acquisition",
"Jackson Financial",
"Jiya Acquisition",
"The Joint",
"Jiuzi Holdings",
"Kellogg Company",
"Kairous Acquisition",
"KKR Acquisition Holdings I",
"Kadant",
"Kismet Acquisition Two",
"Kairos Acquisition",
"Kala Pharmaceuticals",
"Kaiser Aluminum",
"KalVista Pharmaceuticals",
"Kaman",
"KAR Auction Services",
"Karooooo",
"Kaival Brands Innovations Group",
"KB Financial Group",
"Kimball International",
"KB Home",
"Kubient",
"KBR, Inc.",
"Kingsoft Cloud Holdings",
"Kensington Capital Acquisition IV",
"Kensington Capital Acquisition V",
"Kyndryl Holdings",
"Chinook Therapeutics",
"Keurig Dr Pepper",
"Kimball Electronics",
"Kelly Services",
"Kelly Services",
"Kenon Holdings",
"Korea Electric Power",
"Kewaunee Scientific",
"Akerna",
"Kirby",
"KeyCorp",
"Keysight Technologies",
"Kentucky First Federal Bancorp",
"Kforce",
"Kingsway Financial Services",
"Korn Ferry",
"Kinross Gold",
"The Kraft Heinz Company",
"OrthoPediatrics",
"Kismet Acquisition Three",
"Kimco Realty",
"Nextdoor Holdings",
"Kingstone Companies",
"Kins Technology Group",
"Kelso Technologies",
"Kirkland's",
"KKR & Co.",
"KLA Corporation",
"KL Acquisition",
"Kulicke & Soffa Industries",
"Kaleyra",
"Kaltura",
"KLX Energy Services Holdings",
"Kimberly-Clark",
"Kamada",
"Kinder Morgan",
"KemPharm",
"Kemper",
"Kennametal",
"CarMax",
"Knowles",
"KnowBe4",
"Kandi Technologies Group",
"KNOT Offshore Partners",
"Kiniksa Pharmaceuticals",
"Kinsale Capital Group",
"KnightSwan Acquisition",
"Kinnate Biopharma",
"Kinetik Holdings",
"Knight-Swift Transportation Holdings",
"The Coca-Cola Company",
"Kodiak Sciences",
"Eastman Kodak Company",
"Coca-Cola Femsa",
"Koppers Holdings",
"Kopin",
"KORE Group Holdings",
"Kosmos Energy",
"Koss Corporation",
"Katapult Holdings",
"Kiora Pharmaceuticals",
"Karyopharm Therapeutics",
"The Kroger Company",
"Kiromic BioPharma",
"Kilroy Realty",
"KKR Real Estate Finance Trust",
"Kite Realty Group Trust",
"36Kr Holdings",
"Repro Med Systems",
"Kernel Group Holdings",
"Kornit Digital",
"Kearny Financial",
"Kronos Worldwide",
"Kronos Bio",
"Keros Therapeutics",
"Kimbell Royalty Partners",
"Karat Packaging",
"Karuna Therapeutics",
"Kura Sushi USA",
"Krystal Biotech",
"Knightscope",
"Kadem Sustainable Impact",
"Kaspien Holdings",
"Kohl's",
"KT Corporation",
"Kontoor Brands",
"Key Tronic",
"Kratos Defense & Security Solutions",
"Kintara Therapeutics",
"Pasithea Therapeutics",
"Kuke Music Holding",
"KULR Technology Group",
"Kura Oncology",
"KVH Industries",
"Khosla Ventures Acquisition Co.",
"Khosla Ventures Acquisition Co. III",
"Kennedy-Wilson Holdings",
"Kingswood Acquisition",
"Quaker Chemical",
"Kaixin Auto Holdings",
"Keyarch Acquisition",
"Kymera Therapeutics",
"Kazia Therapeutics",
"Kezar Life Sciences",
"Loews",
"Lakeshore Acquisition I",
"Standard BioTools",
"Landos Biopharma",
"Lithium Americas",
"Lithia Motors",
"Ladder Capital",
"Lakeland Industries",
"Lamar Advertising Company",
"Lancaster Colony",
"Gladstone Land",
"Landmark Bancorp",
"nLIGHT",
"LatAmGrowth SPAC",
"Laureate Education",
"CS Disco",
"8i Acquisition 2",
"Lazard",
"Luminar Technologies",
"Lazydays Holdings",
"Lakeland Bancorp",
"Lakeshore Acquisition II",
"Luther Burbank",
"Longboard Pharmaceuticals",
"4D pharma",
"Liberty Broadband",
"Liberty Broadband",
"Liberty Oilfield Services",
"Liberty Global",
"Liberty Global",
"Liberty Global",
"LendingClub",
"Landcadia Holdings IV",
"L Catterton Asia Acquisition",
"Lionheart Acquisition II",
"Locafy",
"Lannett Company",
"Lucid Group",
"LCI Industries",
"LCNB Corporation",
"Lineage Cell Therapeutics",
"Lifetime Brands",
"Learn CW Investment",
"LDH Growth I",
"loanDepot",
"Leidos Holdings",
"Lands' End",
"Lear Corporation",
"Ribbit LEAP",
"Lincoln Electric Holdings",
"SemiLEDs",
"Lee Enterprises,",
"Leggett & Platt",
"Lead Edge Growth Opportunities,",
"Legacy Housing",
"Legend Biotech",
"Leju Holdings",
"Lennar",
"Lennar",
"Leslie's",
"Centrus Energy",
"The Lion Electric Company",
"Levi Strauss & Co.",
"Lexaria Bioscience",
"LF Capital Acquisition II",
"China Life Insurance Company",
"Archaea Energy",
"Leafly Holdings",
"LifeMD",
"Lifestance Health Group",
"Lument Finance Trust",
"Lefteris Acquisition",
"Littelfuse",
"LifeVantage",
"Lazard Growth Acquisition I",
"Lions Gate Entertainment",
"Lions Gate Entertainment",
"Lion Group Holding",
"LGI Homes",
"LGL Group",
"LogicMark",
"Ligand Pharmaceuticals",
"Largo",
"Semper Paratus Acquisition",
"Legato Merger II",
"Longview Acquisition II",
"LAMF Global Ventures I",
"Longeveron",
"Laboratory Corporation of America Holdings",
"Lerer Hippeau Acquisition",
"Leo Holdings II",
"LHC Group",
"Lucira Health",
"L3Harris Technologies",
"Li Auto",
"LianBio",
"Liberty Resources Acquisition",
"Li-Cycle Holdings",
"AEye, Inc.",
"aTyr Pharma",
"Lennox International",
"Liberty Latin America",
"Liberty Latin America",
"Lilium",
"Linde",
"Lincoln Educational Services",
"Lindblad Expeditions Holdings",
"Interlink Electronics",
"Lionheart III",
"LiqTech International",
"LightInTheBox Holding Co.",
"Lumentum Holdings",
"Snow Lake Resources",
"Logistics Innovation Technologies",
"LIV Capital Acquisition II",
"Live Ventures",
"LivaNova",
"Lixte Biotechnology Holdings",
"Lizhi",
"LightJump Acquisition",
"La Jolla Pharmaceutical Company",
"Luokung Technology",
"Lakeland Financial",
"LKQ Corporation",
"Lumber Liquidators Holdings",
"Terran Orbital",
"JX Luxventure",
"Limelight Networks",
"Eli Lilly and Company",
"Liberty Media Acquisition",
"LMF Acquisition Opportunities",
"LeMaitre Vascular",
"Limbach Holdings",
"LumiraDx",
"LM Funding America",
"Lemonade",
"Liminal BioSciences",
"Limoneira Company",
"LMP Automotive Holdings",
"Limestone Bancorp",
"Lockheed Martin",
"Lincoln National",
"BrasilAgro Cia Brasileira de Propriedades Agricolas",
"Landec",
"L&F Acquisition",
"Cheniere Energy",
"Lindsay",
"LENSAR",
"Alliant Energy",
"Lantheus Holdings",
"Light & Wonder",
"Manhattan Bridge Capital",
"Live Oak Bancshares",
"Live Oak Crestview Climate Acquisition",
"Local Bounti",
"El Pollo Loco Holdings",
"Comstock Mining",
"LogicBio Therapeutics",
"Logitech International",
"Live Oak Mobility Acquisition",
"Loma Negra Compania Industrial Argentina",
"Loop Industries",
"Grand Canyon Education",
"CarLotz",
"Spark Networks SE",
"The Lovesac Company",
"Lowe's Companies",
"Lipocine",
"Dorian LPG",
"Laredo Petroleum",
"LG Display Co.",
"LPL Financial Holdings",
"Open Lending",
"LivePerson",
"LightPath Technologies",
"Leap Therapeutics",
"Louisiana-Pacific",
"Liquidia",
"Liquidity Services",
"Lam Research",
"Logan Ridge Finance",
"Larimar Therapeutics",
"Stride",
"Lake Shore Bancorp",
"Lattice Semiconductor",
"Landsea Homes",
"Laird Superfood",
"Life Storage",
"Lightspeed Commerce",
"Larkspur Health Acquisition",
"Landstar System",
"Lightbridge",
"LTC Properties",
"Latch",
"Life Time Group Holdings",
"Livent",
"Lantern Pharma",
"Liberty TripAdvisor Holdings",
"Liberty TripAdvisor Holdings",
"Lantronix",
"Lottery.com",
"Lufax Holding",
"Luby's",
"Lucid Diagnostics",
"Lululemon Athletica",
"Lumen Technologies",
"Lumos Pharma",
"Luna Innovations",
"Pulmonx",
"Southwest Airlines Company",
"Lux Health Tech Acquisition",
"LAVA Medtech Acquisition",
"Lulu's Fashion Lounge Holdings",
"LiveOne",
"LiveVox Holding",
"Levere Holdings",
"Las Vegas Sands",
"LAVA Therapeutics",
"Lamb Weston Holdings",
"Lifeway Foods",
"Lightwave Logic",
"LexinFintech Holdings",
"Lixiang Education Holding Co.",
"Luxfer Holdings",
"Lexington Realty Trust",
"Lexicon Pharmaceuticals",
"LSB Industries",
"LyondellBasell Industries NV",
"Lyell Immunopharma",
"Lyft, Inc.",
"Lloyds Banking Group",
"Dragon Victory International",
"Loyalty Ventures",
"Lyra Therapeutics",
"LSI Industries",
"Live Nation Entertainment",
"LegalZoom.com",
"La-Z-Boy",
"Macy's",
"Mastercard",
"Mid-America Apartment Communities",
"Mana Capital Acquisition",
"The Macerich Company",
"Moringa Acquisition",
"Mission Advancement",
"Merrimack Pharmaceuticals",
"MAG Silver",
"Main Street Capital",
"ManpowerGroup",
"Manhattan Associates",
"ManTech International",
"Manchester United",
"WM Technology",
"Maquia Capital Acquisition",
"Marriott International",
"Marathon Digital Holdings",
"Remark Holdings",
"Marine Petroleum Trust",
"Masco",
"Masimo",
"908 Devices",
"Mattel",
"Matthews International",
"Matson",
"MediaAlpha",
"Maxeon Solar Technologies",
"Maxar Technologies",
"J.W. Mays",
"M3-Brigade Acquisition II",
"Middlefield Banc",
"MBIA Inc.",
"Marrone Bio Innovations",
"Merchants Bancorp",
"Mustang Bio",
"Microbot Medical",
"Moleculin Biotech",
"M3-Brigade Acquisition III",
"Mobile TeleSystems PJSC",
"Nocturne Acquisition",
"Malibu Boats",
"Mercantile Bank",
"Moelis & Company",
"Mountain & Co. I Acquisition",
"Monterey Capital Acquisition",
"Mountain Crest Acquisition III",
"Mountain Crest Acquisition IV",
"Mountain Crest Acquisition V",
"Metropolitan Bank Holding",
"Macatawa Bank",
"MetroCity Bankshares",
"McDonald's",
"MasterCraft Boat Holdings",
"Membership Collective Group",
"Microchip Technology",
"Marchex",
"McKesson",
"mCloud Technologies",
"Moody's",
"Seres Therapeutics",
"Monarch Casino & Resort",
"The Marcus Corporation",
"Mister Car Wash",
"Mercury General",
"MEDNAX",
"MongoDB",
"M.D.C. Holdings",
"Madrigal Pharmaceuticals",
"Medigus",
"MDH Acquisition",
"Mediaco Holding",
"MDJM Ltd.",
"Mondelez International",
"Medicenna Therapeutics",
"Medalist Diversified REIT",
"Allscripts Healthcare Solutions",
"Medtronic plc.",
"MDU Resources Group",
"Modiv",
"MedAvail Holdings",
"MediWound",
"Midwest Holding",
"MiMedx Group",
"MDxHealth",
"23andMe Holding Co.",
"Mercury Ecommerce Acquisition",
"Mayville Engineering Company",
"Medifast",
"Medpace Holdings",
"TRxADE HEALTH",
"Montrose Environmental Group",
"Methode Electronics",
"MEI Pharma",
"MELI Kaszek Pioneer",
"MercadoLibre",
"Minority Equality Opportunities Acquisition",
"Methanex",
"Mercer International",
"Mesa Air Group",
"Mesoblast",
"MetLife",
"Ramaco Resources",
"Meten Edtechx Education Group",
"Missfresh",
"MFA Financial",
"Manulife Financial",
"Mizuho Financial Group",
"Micro Focus International",
"Mercurity Fintech Holding",
"Medallion Financial",
"MISTRAS Group",
"Magna International",
"MGE Energy",
"MoneyGram International",
"Magic Software Enterprises",
"The Marygold Companies",
"MGM Resorts International",
"Magnite",
"MacroGenics",
"MGP Ingredients",
"McGrath RentCorp",
"Magenta Therapeutics",
"MeiraGTx Holdings",
"Magnolia Oil & Gas",
"Magyar Bancorp",
"Mastech Digital",
"Mohawk Industries",
"Maiden Holdings",
"M/I Homes",
"Meihua International Medical Technologies Co.",
"Macquarie Infrastructure",
"MICT, Inc.",
"The Middleby Corporation",
"Mawson Infrastructure Group",
"Metromile",
"Mimecast",
"Airspan Networks Holdings",
"MIND Technology",
"Minim",
"Mirion Technologies",
"Mirum Pharmaceuticals",
"Miromatrix Medical",
"Milestone Pharmaceuticals",
"Mason Industrial Technology",
"Coliseum Acquisition",
"MeaTech 3D",
"Mitek Systems",
"Stealth BioTherapeutics",
"Moving iMage Technologies",
"AG Mortgage Investment Trust",
"MiX Telematics",
"McCormick & Company",
"Molecular Data",
"Markforged Holding",
"Markel",
"MKS Instruments",
"MarketWise",
"MarketAxess Holdings",
"MoneyLion",
"Mesa Laboratories",
"Malacca Straits Acquisition Company",
"McLaren Technology Acquisition",
"Melco Resorts & Entertainment",
"Mueller Industries",
"MillerKnoll",
"Martin Marietta Materials",
"MeridianLink",
"Maui Land & Pineapple Company",
"Miller Industries",
"Milestone Scientific",
"MoonLake Immunotherapeutics",
"Malvern Bancorp",
"Meta Materials",
"Marsh & McLennan Companies",
"Marcus & Millichap",
"Martin Midstream Partners",
"3M Company",
"MamaMancini's Holdings",
"Magellan Midstream Partners,",
"Maximus",
"Merit Medical Systems",
"Maverix Metals",
"MakeMyTrip",
"Manning & Napier",
"MIND CTI",
"Mandiant",
"monday.com",
"MannKind",
"Mind Medicine (MindMed)",
"MediciNova",
"Monopar Therapeutics",
"Brigham Minerals",
"Monro",
"MainStreet Bancshares",
"Miniso Group Holding",
"Monster Beverage",
"Montauk Renewables",
"Everest Consolidator Acquisition",
"Momentus",
"Momentive Global",
"Manitex International",
"Altria Group",
"Mobiquity Technologies",
"Modine Manufacturing Company",
"Model N",
"ModivCare",
"MidWestOne Financial Group",
"Moog Inc.",
"Moog Inc.",
"Mogo Inc.",
"Mogu, Inc.",
"Molina Healthcare",
"ECMOHO",
"Molecular Partners AG",
"Hello Group",
"Monument Circle Acquisition",
"MorphoSys AG",
"Morphic Holding",
"Morningstar",
"The Mosaic Company",
"Motus GI Holdings",
"Movado Group",
"Movano",
"Moxian",
"MP Materials",
"Motorcar Parts of America",
"Model Performance Acquisition",
"Mid Penn Bancorp",
"Marathon Petroleum",
"MultiPlan",
"MPLX LP",
"Mercato Partners Acquisition",
"Medical Properties Trust",
"Monolithic Power Systems",
"Marine Products",
"Marqeta",
"Marpai",
"Everspin Technologies",
"Meridian",
"MRC Global",
"Monroe Capital",
"Mercury Systems",
"Mereo BioPharma Group",
"Marin Software",
"Merck & Co.",
"Marker Therapeutics",
"Medirom Healthcare Technologies",
"Moderna",
"Marinus Pharmaceuticals",
"Marathon Oil",
"Mersana Therapeutics",
"Marten Transport",
"Mirati Therapeutics",
"Merus",
"Maravai LifeSciences Holdings",
"Marvell Technology",
"Morgan Stanley",
"MSA Safety",
"Medicus Sciences Acquisition",
"Mesabi Trust",
"Midland States Bancorp",
"Studio City International Holdings",
"MSCI Inc.",
"MSD Acquisition",
"Middlesex Water Company",
"Microsoft",
"Madison Square Garden Entertainment",
"Motorsport Games",
"Madison Square Garden Sports",
"Motorola Solutions",
"MSC Industrial Direct Company",
"Emerson Radio",
"Datto Holding",
"Metal Sky Star Acquisition",
"MicroStrategy",
"Mid-Southern Bancorp",
"ArcelorMittal",
"Metalla Royalty & Streaming",
"MedTech Acquisition",
"Metals Acquisition",
"M&T Bank",
"CareCloud",
"MMTec",
"Match Group",
"Metacrine",
"Mettler-Toledo International",
"Matador Resources Company",
"Maris-Tech",
"Molecular Templates",
"Mannatech,",
"MGIC Investment",
"Meritage Homes",
"Mechel PAO",
"Materialise NV",
"Mega Matrix",
"Vail Resorts",
"Matinas BioPharma Holdings",
"Meritor",
"Midatech Pharma",
"Mesa Royalty Trust",
"Materion",
"Matrix Service Company",
"Monterey Bio Acquisition",
"MACOM Technology Solutions Holdings",
"Matterport",
"Motive Capital Corp II",
"The Manitowoc Company",
"Minerals Technologies",
"MasTec",
"Micron Technology",
"Mudrick Capital Acquisition II",
"Mitsubishi UFJ Financial Group",
"Mullen Automotive",
"Murphy Oil",
"Murphy Canyon Acquisition",
"Murphy USA",
"McEwen Mining",
"MVB Financial",
"MicroVision",
"Microvast Holdings",
"Mueller Water Products",
"MagnaChip Semiconductor",
"Mexco Energy",
"MaxCyte",
"MaxLinear",
"Myers Industries",
"First Western Financial",
"Myriad Genetics",
"MyMD Pharmaceuticals",
"Mynaric AG",
"Mainz Biomed B.V.",
"Myomo",
"Myovant Sciences",
"PLAYSTUDIOS",
"MYR Group",
"My Size",
"MYT Netherlands Parent B.V.",
"North Atlantic Acquisition",
"N-able",
"Natural Alternatives International",
"Northern Dynasty Minerals",
"NanoVibronix",
"The Duckhorn Portfolio",
"Inari Medical",
"Nordic American Tankers",
"Nathan's Famous",
"National Instruments",
"Nature's Sunshine Products",
"Nautilus Biotechnology",
"Navidea Biopharmaceuticals",
"Navient",
"NewAge",
"National Bank Holdings",
"Neurocrine Biosciences",
"Northeast Bank",
"Nabors Industries",
"Nabriva Therapeutics",
"NeuBase Therapeutics",
"Newbury Street Acquisition",
"NBT Bancorp",
"Nanobiotix",
"NovaBay Pharmaceuticals",
"NACCO Industries",
"Newcourt Acquisition",
"Nicolet Bankshares",
"Norwegian Cruise Line Holdings",
"National CineMedia",
"NuCana",
"nCino",
"NCR Corporation",
"NCS Multistage Holdings",
"The9 Limited",
"Nightdragon Acquisition",
"Nasdaq",
"Noodles & Company",
"ENDRA Life Sciences",
"Nordson",
"Noble",
"NorthEast Community Bancorp",
"NextEra Energy",
"Newegg Commerce",
"Newmont",
"New England Realty Associates LP",
"NeoGenomics",
"Neogen",
"Neonode",
"NextEra Energy Partners LP",
"Nephros",
"Neptune Wellness Solutions",
"Minerva Neurosciences",
"National Energy Services Reunited",
"Cloudflare",
"Nabors Energy Transition",
"Eneti",
"NewMarket",
"New Pacific Metals",
"New Relic",
"Newtek Business Services",
"NexTier Oilfield Solutions",
"Nexa Resources",
"NexImmune",
"NextDecade",
"Northfield Bancorp",
"New Fortress Energy",
"National Fuel Gas Company",
"New Found Gold",
"Netflix",
"Infinite Acquisition",
"Enphys Acquisition",
"NovaGold Resources",
"Northern Genesis Acquisition III",
"New Gold",
"National Grid",
"NGL Energy Partners LP",
"NGM Biopharmaceuticals",
"NeoGames",
"Natural Gas Services Group",
"Natural Grocers by Vitamin Cottage",
"Ingevity",
"NantHealth",
"National HealthCare",
"National Health Investors",
"NewHold Investment II",
"Natural Health Trends",
"NightHawk Biosciences",
"NiSource",
"NICE Ltd.",
"Nicholas Financial",
"BitNile Holdings",
"Nine Energy Service",
"NIO Inc.",
"Nisun International Enterprise Development Group",
"Niu Technologies",
"New Jersey Resources",
"Nike, Inc.",
"Nikola",
"National Bankshares",
"Nektar Therapeutics",
"Nkarta",
"NL Industries",
"Northern Lights Acquisition",
"NortonLifeLock",
"Nautilus",
"Nielsen Holdings",
"NLS Pharmaceutics",
"Neoleukin Therapeutics",
"Annaly Capital Management",
"Navios Maritime Holdings",
"New Mountain Finance",
"Nouveau Monde Graphite",
"NMI Holdings",
"Navios Maritime Partners",
"North Mountain Merger",
"Nomura Holdings",
"Nemaura Medical",
"Newmark Group",
"NeuroOne Medical Technologies",
"9 Meters Biopharma",
"NextNav",
"NN, Inc.",
"Nano Dimension",
"Nelnet",
"National Retail Properties",
"Nano-X Imaging",
"NanoViricides",
"North American Construction Group",
"Natural Order Acquisition",
"Noah Holdings",
"Northrop Grumman",
"NI Holdings",
"Northern Oil & Gas",
"Nokia",
"Nomad Foods",
"Inotiv",
"NOV Inc.",
"Sunnova Energy International",
"Novan",
"Novanta",
"Nova Vision Acquisition",
"ServiceNow",
"Neenah",
"New Providence Acquisition II",
"NeuroPace",
"National Presto Industries",
"EnPro Industries",
"NeoPhotonics",
"Newpark Resources",
"Noble Rock Acquisition",
"NeuroBo Pharmaceuticals",
"National Research",
"NerdWallet",
"Nerdy",
"NexPoint Real Estate Finance",
"NRG Energy",
"Energy Vault Holdings",
"Northrim BanCorp",
"Nurix Therapeutics",
"Natural Resource Partners LP",
"NeuroSense Therapeutics",
"North European Oil Royalty Trust",
"NRx Pharmaceuticals",
"New Residential Investment",
"NuStar Energy",
"National Storage Affiliates Trust",
"Norfolk Southern",
"National Security Group",
"Insight Enterprises",
"Insperity",
"InspireMD",
"Nomad Royalty Company",
"Napco Security Technologies",
"Northern Star Investment II",
"Northern Star Investment III",
"Northern Star Investment IV",
"NanoString Technologies",
"NSTS Bancorp",
"Nortech Systems",
"NetApp",
"The Bank of N.T. Butterfield & Son",
"Natura &Co Holding",
"NetScout Systems",
"NetEase",
"Netgear",
"Northern Technologies International",
"Network-1 Technologies",
"Intellia Therapeutics",
"Nutanix",
"Nam Tai Property",
"Nutrien",
"Natera",
"Nutriband",
"Northern Trust",
"NetSTREIT",
"Natus Medical",
"NetSol Technologies",
"Natuzzi S.p.A",
"Nu Holdings",
"Nubia Brand International",
"Nucor",
"NeuroMetrix",
"Nu Skin Enterprises",
" Nutex Health",
"NuVasive",
"Nuvation Bio",
"Nuvalent",
"Nuwellis",
"NuZee",
"NorthView Acquisition",
"Novavax",
"Neovasc",
"Novocure",
"Nuvectis Pharma",
"NVIDIA",
"NVE Corporation",
"NV5 Global",
"Nuvei",
"Nova Lifestyle",
"Navigator Holdings",
"Invivo Therapeutics Holdings",
"Nova Ltd.",
"enVVeno Medical",
"Novo Nordisk",
"Novo Integrated Sciences",
"NVR, Inc.",
"Nevro",
"Novartis AG",
"New Vista Acquisition",
"Envista Holdings",
"nVent Electric",
"Invitae",
"Navitas Semiconductor",
"Nuvve Holding",
"NOVONIX",
"Northwest Bancshares",
"NorthWestern",
"Norwood Financial",
"NatWest Group",
"Newell Brands",
"National Western Life Group",
"Northwest Natural Holding Company",
"Northwest Pipe Company",
"News Corporation",
"News Corporation",
"Quanex Building Products",
"NexGen Energy",
"NexGel",
"NextGen Healthcare",
"NXP Semiconductors NV",
"NextPlat",
"NexPoint Residential Trust",
"Nexstar Media Group",
"NextCure",
"NextPlay Technologies",
"New York City REIT",
"New York Community Bancorp",
"New York Mortgage Trust",
"Nymox Pharmaceutical",
"The New York Times Company",
"Nyxoah",
"Realty Income",
"Oaktree Acquisition II",
"Oasis Petroleum",
"Outbrain",
"Ocean Bio-Chem",
"Obsidian Energy",
"Oblong",
"Origin Bancorp",
"ObsEva",
"Orange County Bancorp",
"Owens Corning",
"Omnichannel Acquisition",
"OCA Acquisition",
"Optical Cable",
"OFS Credit Company",
"Ortho Clinical Diagnostics Holdings",
"OceanFirst Financial",
"OneConnect Financial Technology Co.",
"Oriental Culture Holding",
"Ocugen",
"Ocwen Financial",
"Oaktree Specialty Lending",
"Ocular Therapeutix",
"Ocuphire Pharma",
"OncoCyte",
"Oil-Dri Corporation of America",
"Old Dominion Freight Line",
"The ODP Corporation",
"Orion Engineered Carbons",
"Orbital Energy Group",
"One Equity Partners Open Water I",
"Orion Energy Systems",
"Corporate Office Properties Trust",
"Oconee Federal Financial",
"OFG Bancorp",
"Orthofix Medical",
"Omega Flex",
"OFS Capital",
"Onion Global",
"OGE Energy",
"Oragenics",
"OrganiGram Holdings",
"Organon & Co.",
"ONE Gas",
"OPY Acquisition I",
"Omega Healthcare Investors",
"Orion Acquisition",
"O-I Glass",
"Oceaneering International",
"O2Micro International",
"Oil States International",
"ONEOK",
"Okta, Inc.",
"The OLB Group",
"Universal Display",
"OmniLit Acquisition",
"Olink Holding AB (publ)",
"Ollie's Bargain Outlet Holdings",
"Olema Pharmaceuticals",
"Olin Corporation",
"Olo, Inc.",
"One Liberty Properties",
"Olaplex Holdings",
"Outset Medical",
"Grupo Aeroportuario del Centro Norte",
"Omnicom Group",
"Omnicell",
"Omega Alpha SPAC",
"Omeros",
"Odyssey Marine Exploration",
"OneMain Holdings",
"Omega Therapeutics",
"Owens & Minor",
"Singular Genomics Systems",
"OMNIQ",
"ON Semiconductor",
"Old National Bancorp",
"Oncorus",
"OncoSec Medical",
"Oncternal Therapeutics",
"Oncolytics Biotech",
"Ondas Holdings",
"1Life Healthcare",
"OneWater Marine",
"Orion Office REIT",
"On Holding AG",
"ON24, Inc.",
"Onto Innovation",
"Onconova Therapeutics",
"Organovo Holdings",
"Onyx Acquisition Co. I",
"Ooma, Inc.",
"OceanPal",
"Magnum Opus Acquisition",
"Offerpad Solutions",
"OP Bancorp",
"Option Care Health",
"Opendoor Technologies",
"OppFi",
"OpGen",
"OptimumBank Holdings",
"Office Properties Income Trust",
"OPKO Health",
"Opiant Pharmaceuticals",
"Old Point Financial",
"Opera",
"Oportun Financial",
"OptimizeRx",
"Opthea",
"OptiNose",
"Ocean Power Technologies",
"Oppenheimer Holdings",
"Osisko Gold Royalties",
"Ormat Technologies",
"Orange",
"Orchid Island Capital",
"Owl Rock Capital",
"Oracle",
"Origin Materials",
"Organogenesis Holdings",
"Orgenesis",
"Old Republic International",
"Orion Biotech Opportunities",
"Oric Pharmaceuticals",
"Orla Mining",
"O'Reilly Automotive",
"Oramed Pharmaceuticals",
"Orion Group Holdings",
"Orrstown Financial Services",
"Orchard Therapeutics",
"Old Second Bancorp",
"Oscar Health",
"Overseas Shipholding Group",
"Oak Street Health",
"Osiris Acquisition",
"OSI Systems",
"Oshkosh",
"OneSpan",
"One Stop Systems",
"Ostin Technology Group Co.",
"Overstock.com",
"Oyster Enterprises Acquisition",
"OraSure Technologies",
"OneSpaWorld Holdings",
"OceanTech Acquisitions I",
"Open Text",
"Otonomy",
"Otis Worldwide",
"Outlook Therapeutics",
"Oatly Group AB",
"Otonomo Technologies",
"OTR Acquisition",
"Ontrak",
"Otter Tail",
"Ouster",
"OUTFRONT Media",
"Ohio Valley Banc",
"Ovid Therapeutics",
"Oak Valley Bancorp",
"Ovintiv",
"Blue Owl Capital",
"Owlet",
"Oxbridge Acquisition",
"Oxbridge Re Holdings",
"Oxford Industries",
"Oxford Square Capital",
"Oxus Acquisition",
"Occidental Petroleum",
"Oyster Point Pharma",
"Belpointe PREP, LLC",
"Bank OZK",
"Ozon Holdings",
"Plains All American Pipeline,",
"Pan American Silver",
"Grupo Aeroportuario del Pacifico",
"Pacific Biosciences of California",
"PROOF Acquisition I",
"Ranpak Holdings",
"PacWest Bancorp",
"Pioneer Merger",
"Pacifico Acquisition",
"Penske Automotive Group",
"Plains GP Holdings LP",
"PagSeguro Digital",
"Phibro Animal Health",
"Palisade Bio",
"Paltalk",
"Pampa Energia",
"Panacea Acquisition II",
"Pangaea Logistics Solutions",
"Palo Alto Networks",
"Provident Acquisition",
"PAR Technology",
"Paramount Global",
"Paramount Global",
"Par Pacific Holdings",
"Passage Bio",
"UiPath",
"Patriot Transportation Holding",
"Patrick Industries",
"PAVmed",
"Patria Investments",
"Paymentus Holdings",
"Paya Holdings",
"Paycom Software",
"Payoneer Global",
"PaySign",
"Paychex",
"Prosperity Bancshares",
"Pembina Pipeline",
"Phoenix Biotech Acquisition",
"PB Bankshares",
"PBF Energy",
"Pioneer Bancorp",
"PBF Logistics LP",
"Prestige Consumer Healthcare",
"Pathfinder Bancorp",
"Pitney Bowes",
"Prudential Bancorp",
"Panbela Therapeutics",
"Potbelly",
"Petroleo Brasileiro",
"Petroleo Brasileiro",
"Permian Basin Royalty Trust",
"Powerbridge Technologies Co.",
"Puma Biotechnology",
"PACCAR",
"PCB Bancorp",
"Perception Capital II",
"PG&E Corporation",
"PotlatchDeltic",
"Points.com",
"Procore Technologies",
"Periphas Capital Partnering",
"Pacira Biosciences",
"Processa Pharmaceuticals",
"PCSB Financial",
"PureCycle Technologies",
"PCTEL",
"Paylocity Holding",
"Vaxcyte",
"Parsec Capital Acquisitions",
"Park City Group",
"Pure Cycle",
"PagerDuty",
"PDC Energy",
"Patterson Companies",
"Pinduoduo",
"Pro-Dex",
"PDF Solutions",
"Ponce Financial Group",
"Piedmont Office Realty Trust",
"Peridot Acquisition II",
"Precision Drilling",
"PDS Biotechnology",
"Healthpeak Properties",
"Pear Therapeutics",
"Pebblebrook Hotel Trust",
"Peoples Bancorp of North Carolina",
"Peoples Bancorp",
"Phillips Edison & Company",
"Pedevco",
"Public Service Enterprise Group",
"Pegasystems",
"Project Energy Reimagined Acquisition",
"Pineapple Holdings",
"Pennsylvania Real Estate Investment Trust",
"Penumbra",
"Penn National Gaming",
"PepsiCo",
"PepGen",
"PepperLime Health Acquisition",
"Perion Network",
"Perma-Fix Environmental Services",
"PetIQ",
"PetMed Express",
"PetVivo Holdings",
"TDH Holdings",
"Preferred Bank",
"Premier Financial",
"Pathfinder Acquisition",
"Pfizer",
"Principal Financial Group",
"Performance Food Group Company",
"ProFrac Holding",
"Professional Holding",
"Profire Energy",
"P&F Industries",
"Peoples Financial Services",
"PennantPark Floating Rate Capital",
"Performant Financial",
"Provident Financial Services",
"PennyMac Financial Services",
"PFSweb",
"Portage Fintech Acquisition",
"PhenixFIN",
"The Procter & Gamble Company",
"Peapack-Gladstone Financial",
"Precigen",
"Progyny",
"The Progressive Corporation",
"Paramount Group",
"PropertyGuru Group",
"Progress Acquisition",
"Pegasus Digital Mobility Acquisition",
"PGT Innovations",
"Parker-Hannifin",
"Pharming Group",
"PhaseBio Pharmaceuticals",
"Phathom Pharmaceuticals",
"Puhui Wealth Investment Management Co.",
"Koninklijke Philips",
"BiomX",
"PLDT Inc.",
"Population Health Investment Co.",
"Phio Pharmaceuticals",
"PulteGroup",
"Phreesia",
"Phunware",
"Pharvaris, N.V",
"PHX Minerals",
"Pyrophyte Acquisition",
"Impinj",
"Prime Impact Acquisition I",
"Pivotal Investment Corporation III",
"Polaris",
"P3 Health Partners",
"Kidpik",
"Premier",
"Alpine Income Property Trust",
"Ping Identity Holding",
"Pinterest",
"Pine Island Acquisition",
"Piper Sandler Companies",
"Pieris Pharmaceuticals",
"ShiftPixy",
"PJT Partners",
"Park Hotels & Resorts",
"Parke Bancorp",
"Park Aerospace",
"Packaging Corporation of America",
"PerkinElmer",
"Park-Ohio Holdings",
"POSCO",
"Planet Labs PBC",
"Photronics",
"Planet Green Holdings",
"Anaplan",
"Patria Latin American Opportunity Acquisition",
"Dave & Buster's Entertainment",
"Plumas Bancorp",
"PLBY Group",
"The Children's Place",
"Prologis",
"Platinum Group Metals",
"Piedmont Lithium",
"PolyMet Mining",
"Plum Acquisition I",
"Palomar Holdings",
"Planet Fitness",
"Douglas Dynamics",
"Preformed Line Products Company",
"Pliant Therapeutics",
"Pulse Biosciences",
"Playtika Holding",
"Palantir Technologies",
"Plug Power",
"ePlus",
"Protalix BioTherapeutics",
"PLx Pharma",
"Plexus",
"Playa Hotels & Resorts",
"Plymouth Industrial REIT",
"Philip Morris International",
"PharmaCyte Biotech",
"Psychemedics",
"Pingtan Marine Enterprise",
"Priveterra Acquisition",
"PennyMac Mortgage Investment Trust",
"CPI Card Group",
"PMV Consumer Acquisition",
"PMV Pharmaceuticals",
"Prime Number Acquisition I",
"Patriot National Bancorp",
"The PNC Financial Services Group",
"Pinnacle Financial Partners",
"PNM Resources",
"PennantPark Investment",
"Pentair",
"PrimeEnergy Resources",
"POINT Biopharma Global",
"The Pennant Group",
"Pontem",
"Pinnacle West Capital",
"Predictive Oncology",
"Insulet",
"POET Technologies",
"Polar Power",
"Plantronics",
"Angel Pond Holdings",
"Pono Capital",
"Pool Corporation",
"Portland General Electric Company",
"Southport Acquisition",
"Poshmark",
"Post Holdings",
"Powered Brands",
"Power Integrations",
"Powell Industries",
"AMMO Inc.",
"Pacific Premier Bancorp",
"Purple Biotech",
"Pilgrim's Pride",
"PPG Industries",
"PHP Ventures Acquisition",
"Perma-Pipe International Holdings",
"PPL Corporation",
"Pioneer Power Solutions",
"Perpetua Resources",
"Papaya Growth Opportunity I",
"ProAssurance",
"PRA Group",
"Praxis Precision Medicines",
"Parabellum Acquisition",
"Porch Group",
"PROCEPT BioRobotics",
"Perdoceo Education",
"Pardes Biosciences",
"Perficient",
"PainReform",
"PROG Holdings",
"Perrigo Company",
"Progress Software",
"Primerica",
"Primoris Services",
"Park National",
"Proto Labs",
"Prelude Therapeutics",
"Pearl Holdings Acquisition",
"Perimeter Solutions",
"PROS Holdings",
"Procaps Group",
"Profound Medical",
"Provident Financial Holdings",
"CC Neuberger Principal Holdings II",
"CC Neuberger Principal Holdings III",
"ProPhase Labs",
"Purple Innovation",
"Precipio",
"ProQR Therapeutics",
"Peraso",
"Prospector Capital",
"PermRock Royalty Trust",
"Prothena",
"PureTech Health",
"Portage Biotech",
"Priority Technology Holdings",
"Paratek Pharmaceuticals",
"CarParts.com",
"Party City Holdco",
"Prudential Financial",
"Privia Health Group",
"Provention Bio",
"Public Storage",
"Property Solutions Acquisition II",
"PS Business Parks",
"Prospect Capital",
"Paysafe",
"Performance Shipping",
"PriceSmart",
"Parsons",
"Personalis",
"Pearson",
"Post Holdings Partnering",
"Pure Storage",
"Pershing Square Tontine Holdings",
"Pluristem Therapeutics",
"Postal Realty Trust",
"Plus Therapeutics",
"Poseida Therapeutics",
"Phillips 66",
"Pintec Technology Holdings",
"PTC Inc.",
"PTC Therapeutics",
"PolarityTE",
"Patterson-UTI Energy",
"Protagonist Therapeutics",
"Proptech Investment Corporation II",
"Protagenic Therapeutics",
"Portillo's",
"Portman Ridge Finance",
"Palatin Technologies",
"Partner Communications Company",
"Pine Technology Acquisition",
"Peloton Interactive",
"Petros Pharmaceuticals",
"PetroChina Company",
"Proterra",
"Partners Bancorp",
"P.A.M. Transportation Services",
"Pactiv Evergreen",
"PubMatic",
"Goal Acquisitions",
"Prudential",
"Pulmatrix",
"ProPetro Holding",
"Puyi Inc.",
"Primavera Capital Acquisition",
"Provident Bancorp",
"PVH Corp.",
"Permianville Royalty Trust",
"Power REIT",
"PowerFleet",
"Penns Woods Bancorp",
"Perella Weinberg Partners",
"Quanta Services",
"PowerSchool Holdings",
"PowerUp Acquisition",
"P10, Inc.",
"Pioneer Natural Resources Company",
"Pixelworks",
"Pyxis Tankers",
"Paycor HCM",
"PolyPid",
"PayPal Holdings",
"Pyrogenesis Canada",
"Pyxis Oncology",
"Paramount Gold Nevada",
"Pzena Investment Management",
"Papa John's International",
"Qualcomm",
"QCR Holdings",
"Qudian",
"Quidel",
"360 DigiTech",
"Quantum FinTech Acquisition",
"Qiagen",
"Quhuo",
"Quipt Home Medical",
"Qiwi PLC",
"Q&K International Group",
"Qualigen Therapeutics",
"Qilian International Holding Group",
"Qualys",
"Quantum",
"Quanergy Systems",
"Quoin Pharmaceuticals",
"QuinStreet",
"Quest Resource Holding",
"Qurate Retail",
"Qurate Retail",
"Qorvo",
"QuantumScape",
"Quantum-Si",
"Restaurant Brands International",
"QualTek Services",
"Quotient",
"Quanterix",
"Qutoutiao",
"Q2 Holdings",
"Quad/Graphics",
"Quantum Computing",
"QuickLogic",
"Qumu Corporation",
"Quotient Technology",
"uniQure",
"Ryder System",
"Cloopen Group Holding",
"Research Alliance II",
"Ferrari",
"Relativity Acquisition",
"Rite Aid",
"RADA Electronic Industries",
"Radius Global Infrastructure",
"FreightCar America",
"Rain Therapeutics",
"Aries I Acquisition",
"LiveRamp Holdings",
"Rand Capital",
"Rani Therapeutics Holdings",
"Rapt Therapeutics",
"Ultragenyx Pharmaceutical",
"Rave Restaurant Group",
"Ritchie Bros. Auctioneers",
"RedBall Acquisition",
"RBB Bancorp",
"Ribbon Communications",
"Republic Bancorp",
"Rubicon Technology",
"Rhinebeck Bancorp",
"Roblox",
"Vicarious Surgical",
"Ready Capital",
"Revelstone Capital Acquisition",
"Red Cat Holdings",
"AVITA Medical",
"RCF Acquisition",
"Recharge Acquisition",
"Rogers Communications",
"Rent-A-Center",
"Rocket Pharmaceuticals",
"Rocky Brands",
"Royal Caribbean Cruises",
"Rosecliff Acquisition I",
"R1 RCM",
"RCM Technologies",
"Recon Technology",
"Renovacor",
"Recruiter.com Group",
"Arcus Biosciences",
"Redbox Entertainment",
"RADCOM",
"Redfin",
"RedHill Biopharma",
"Reading International",
"Reading International",
"Radian Group",
"RadNet",
"Radius Health",
"Red Violet",
"Redwire",
"Radware",
"Dr. Reddy's Laboratories",
"Everest Re Group",
"The RealReal",
"The Real Brokerage",
"RISE Education Cayman",
"REE Automotive",
"Reed's",
"Chicago Atlantic Real Estate Finance",
"Research Frontiers",
"Regency Centers",
"Renewable Energy Group",
"Regeneron Pharmaceuticals",
"Ring Energy",
"Rekor Systems",
"Reliance Global Group",
"Richardson Electronics",
"Relx PLC",
"Remitly Global",
"Cartesian Growth Corporation II",
"Renren",
"Renovare Environmental",
"Rent The Runway",
"Replimune Group",
"Riley Exploration Permian",
"AiHuiShou International Co.",
"RPC, Inc.",
"Reata Pharmaceuticals",
"ReTo Eco-Solutions",
"Revlon",
"Revelation Biosciences",
"Alpine Acquisition",
"REV Group",
"Revolution Healthcare Acquisition",
"REX American Resources",
"Rexford Industrial Realty",
"Reynolds Consumer Products",
"Resideo Technologies",
"Regions Financial",
"RF Acquisition",
"RF Industries",
"Rafael Holdings",
"Resolute Forest Products",
"Reinsurance Group of America",
"Regencell Bioscience Holdings",
"RGC Resources",
"Repligen",
"Real Good Food Company",
"Royal Gold",
"Regulus Therapeutics",
"REGENXBIO",
"Resources Connection",
"Sturm, Ruger & Company",
"Regis",
"Rigetti Computing",
"RH",
"Regional Health Properties",
"Robert Half International",
"Ryman Hospitality Properties",
"RiceBran Technologies",
"RCI Hospitality Holdings",
"Agrico Acquisition",
"Lordstown Motors",
"Transocean",
"Rigel Pharmaceuticals",
"B. Riley Financial",
"Rio Tinto",
"Riot Blockchain",
"Rivian Automotive",
"Jackson Acquisition Company",
"Raymond James Financial",
"Arcadia Biosciences",
"Rocket Lab USA",
"Rockley Photonics Holdings",
"Rocket Companies",
"Rocket Internet Growth Opportunities",
"Ralph Lauren",
"Relay Therapeutics",
"Radiant Logistics",
"Realogy Holdings",
"RLI Corp.",
"RLJ Lodging Trust",
"Relmada Therapeutics",
"RLX Technology",
"Rallybio",
"Regional Management",
"RE/MAX Holdings",
"Richmond Mutual Bancorporation",
"RumbleOn",
"Rambus",
"Rocky Mountain Chocolate Factory",
"ResMed",
"Ra Medical Systems",
"RMG Acquisition III",
"Rimini Street",
"Romeo Power",
"The RMR Group",
"Rockwell Medical",
"Avidity Biosciences",
"TransCode Therapeutics",
"Randolph Bancorp",
"Mount Rainier Acquisition",
"RingCentral",
"Ranger Energy Services",
"Renalytix",
"RenaissanceRe Holdings",
"Renasant",
"ReNew Energy Global",
"RealNetworks",
"RenovoRx",
"Construction Partners",
"ROC Energy Acquisition",
"Ranger Oil",
"Roth CH Acquisition IV Co.",
"Gibraltar Industries",
"Roth CH Acquisition V Co.",
"Rogers",
"Retail Opportunity Investments",
"Roivant Sciences",
"Rockwell Automation",
"Roku, Inc.",
"Rollins",
"RBC Bearings",
"Rice Acquisition II",
"Root, Inc.",
"Roper Technologies",
"Rose Hill Acquisition",
"Ross Acquisition II",
"Ross Stores",
"Rover Group",
"Repay Holdings",
"Rapid7",
"Reneo Pharmaceuticals",
"Rapid Micro Biosystems",
"RPM International",
"Royalty Pharma",
"RPT Realty",
"Repare Therapeutics",
"Rigel Resource Acquisition",
"Red River Bancshares",
"Range Resources",
"Red Robin Gourmet Burgers",
"Red Rock Resorts",
"Regal Rexnord",
"Reliance Steel & Aluminum Co.",
"Republic Services",
"Rush Street Interactive",
"Riskified",
"ReShape Lifesciences",
"Research Solutions",
"Reservoir Media",
"Necessity Retail REIT",
"Rattler Midstream LP",
"Raytheon Technologies",
"Rubius Therapeutics",
"SunRun",
"Rush Enterprises",
"Rush Enterprises",
"Ruth's Hospitality Group",
"Riverview Acquisition",
"RVL Pharmaceuticals",
"Revolve Group",
"Revolution Medicines",
"Revance Therapeutics",
"Retractable Technologies",
"Reviva Pharmaceuticals Holdings",
"Riverview Bancorp",
"Rail Vision",
"Runway Growth Finance",
"ReWalk Robotics",
"Redwoods Acquisition",
"Redwood Trust",
"Prometheus Biosciences",
"RXR Acquisition",
"Recursion Pharmaceuticals",
"RxSight",
"Rackspace Technology",
"Royal Bank of Canada",
"Ryanair Holdings",
"Rayonier Advanced Materials",
"Ryan Specialty Group Holdings",
"RYB Education",
"Ryerson Holding",
"Rayonier",
"Rhythm Pharmaceuticals",
"Rezolute",
"SentinelOne",
"Seabridge Gold",
"Sabre",
"SAB Biotherapeutics",
"Sachem Capital",
"Safehold",
"Sanderson Farms",
"Safety Insurance Group",
"Sagaliam Acquisition",
"Sage Therapeutics",
"Sonic Automotive",
"SAI.TECH Global",
"Saia, Inc.",
"Science Applications International",
"SailPoint Technologies Holdings",
"Salisbury Bancorp",
"Salem Media Group",
"The Boston Beer Company",
"Schultze Special Purpose Acquisition II",
"Silvercrest Asset Management Group",
"Banco Santander",
"Sana Biotechnology",
"Sanaby Health Acquisition I",
"Sandstorm Gold",
"Sangoma Technologies",
"Sanmina",
"S&W Seed Company",
"SAP SE",
"Saratoga Investment",
"Sandy Spring Bancorp",
"Satellogic",
"EchoStar",
"Cassava Sciences",
"Spirit Airlines",
"Safe Bulkers",
"SBA Communications",
"Seacoast Banking Corporation of Florida",
"SharpLink Gaming",
"Splash Beverage Group",
"SB Financial Group",
"Sinclair Broadcast Group",
"Sally Beauty Holdings",
"Sandbridge X2",
"Star Bulk Carriers",
"Signature Bank",
"SilverBow Resources",
"Sabine Royalty Trust",
"Sabra Health Care REIT",
"Companhia de Saneamento Basico do Estado de Sao Paulo SABESP",
"Southside Bancshares",
"Sibanye Stillwater",
"Sterling Bancorp",
"Silverback Therapeutics",
"Starbucks",
"Stratim Cloud Acquisition",
"Southern Copper",
"Scholastic",
"Schnitzer Steel Industries",
"The Charles Schwab Corporation",
"Service Corporation International",
"Socket Mobile",
"Stepan Company",
"Broadscale Acquisition",
"Stellus Capital Investment",
"Seaport Calibre Materials Acquisition",
"ScION Tech Growth I",
"ScION Tech Growth II",
"Comscore",
"scPharmaceuticals",
"SciPlay",
"Scopus Biopharma",
"Screaming Eagle Acquisition",
"Steelcase",
"ScanSource",
"Societal CDMO",
"Sculptor Capital Management",
"Sculptor Acquisition I",
"Shoe Carnival",
"SCVX Corp.",
"SecureWorks",
"The L.S. Starrett Company",
"SCYNEXIS",
"SandRidge Energy",
"Sustainable Development Acquisition I",
"SmileDirectClub",
"Schrodinger",
"Global Internet of People",
"Stronghold Digital Mining",
"Superior Drilling Products",
"Sea Limited",
"SeaChange International",
"SeaWorld Entertainment",
"Vivid Seats",
"Seaboard",
"Secoo Holding",
"SDCL EDGE Acquisition",
"SolarEdge Technologies",
"Sealed Air",
"Origin Agritech",
"Seelos Therapeutics",
"Seer, Inc.",
"SEI Investments Company",
"Selecta Biosciences",
"Global Self Storage",
"Select Medical Holdings",
"SEMrush Holdings",
"Seneca Foods",
"Seneca Foods",
"Senseonics Holdings",
"Sera Prognostics",
"SES AI",
"Sesen Bio",
"Sono Group",
"Seven Hills Realty Trust",
"Stifel Financial",
"Sound Financial Bancorp",
"ServisFirst Bancshares",
"Safeguard Scientifics",
"Safe-T Group",
"Stitch Fix",
"SFL Corporation Ltd.",
"Sprouts Farmers Market",
"Simmons First National",
"Southern First Bancshares",
"Shift Technologies",
"Fang Holdings",
"Sweetgreen",
"Saga Communications",
"SG Blocks",
"Superior Group of Companies",
"Seagen",
"Signify Health",
"SMART Global Holdings",
"Super Group (SGHC)",
"Signal Hill Acquisition",
"Sight Sciences",
"Seaport Global Acquisition II",
"Sigma Labs",
"Singularity Future Technology",
"SigmaTron International",
"Sigma Lithium",
"Sangamo Therapeutics",
"SPAR Group",
"Surgery Partners",
"Sigilon Therapeutics",
"Star Group",
"SCP & CO Healthcare Acquisition Company",
"Shake Shack",
"Spree Acquisition 1",
"Shore Bancshares",
"Sotera Health Company",
"Spindletop Health Acquisition",
"Sharecare",
"Shell",
"Shenandoah Telecommunications Company",
"Shinhan Financial Group Co.",
"Sinopec Shanghai Petrochemical Company",
"Seanergy Maritime Holdings",
"Shoals Technologies Group",
"Shell Midstream Partners",
"Sunstone Hotel Investors",
"Steven Madden",
"Shopify",
"Shapeways Holdings",
"Shelter Acquisition I",
"SHUAA Partners Acquisition Corp I",
"The Sherwin-Williams Company",
"The Shyft Group",
"Silvergate Capital",
"SI-BONE",
"Companhia Siderurgica Nacional",
"Sidus Space",
"Siebert Financial",
"Sientra",
"Sierra Lake Acquisition",
"SIFCO Industries",
"Sify Technologies",
"Signet Jewelers",
"SIGA Technologies",
"Selective Insurance Group",
"Sprott",
"Silicom",
"Silk Road Medical",
"SilverCrest Metals",
"Grupo Simec",
"Silicon Motion Technology",
"SINTX Technologies",
"Sio Gene Therapies",
"Sisecam Resources LP",
"Sirius XM Holdings",
"Shineco",
"SITE Centers",
"SiteOne Landscape Supply",
"SiTime",
"SVB Financial Group",
"Six Flags Entertainment",
"Scienjoy Holding",
"South Jersey Industries",
"The J. M. Smucker Company",
"Shaw Communications",
"San Juan Basin Royalty Trust",
"SJW Group",
"Skeena Resources",
"Skillsoft",
"The Beauty Health Company",
"Skillz",
"SK Telecom Co.",
"Tanger Factory Outlet Centers",
"Skechers USA",
"Skyline Champion",
"Skydeck Acquisition",
"Sky Harbour Group",
"SkyWater Technology",
"SkyWest",
"SQL Technologies",
"Silicon Laboratories",
"Social Leverage Acquisition I",
"Slam Corp.",
"Schlumberger",
"U.S. Silica Holdings",
"Silver Crest Acquisition",
"Solid Biosciences",
"Solid Power",
"Sun Life Financial",
"SL Green Realty",
"SomaLogic",
"Super League Gaming",
"Sol-Gel Technologies",
"Silgan Holdings",
"Skylight Health Group",
"Standard Lithium",
"SLM Corporation",
"Silence Therapeutics",
"Stabilis Solutions",
"Soluna Holdings",
"Soleno Therapeutics",
"Simulations Plus",
"SelectQuote",
"SLR Investment",
"Salarius Pharmaceuticals",
"SELLAS Life Sciences Group",
"Sylvamo",
"SilverSPAC",
"SM Energy Company",
"SportsMap Tech Acquisition",
"Smartsheet",
"Southern Missouri Bancorp",
"SmartFinancial",
"Super Micro Computer",
"Sharps Compliance",
"Sumitomo Mitsui Financial Group",
"Smart for Life",
"Sema4 Holdings",
"The Scotts Miracle-Gro Company",
"Seacor Marine Holdings",
"Smith-Midland",
"Summit Healthcare Acquisition",
"Schmitt Industries",
"Summit Midstream Partners LP",
"Semler Scientific",
"Summit Financial Group",
"Summit Therapeutics",
"Standard Motor Products",
"The Simply Good Foods Company",
"NuScale Power",
"SmartRent",
"Smith Micro Software",
"Semtech",
"Sanara MedTech",
"Sierra Metals",
"Similarweb",
"Snap-on",
"Snap, Inc.",
"Stryve Foods",
"Sleep Number",
"Science 37",
"Synchronoss Technologies",
"Sun Country Airlines Holdings",
"Smart Sand",
"Sonida Senior Living",
"Sundial Growers",
"Schneider National",
"Syndax Pharmaceuticals",
"SenesTech",
"StoneX Group",
"Security National Financial",
"Soligenix",
"Evolve Transition Infrastructure LP",
"Smith & Nephew",
"Sonoma Pharmaceuticals",
"Snowflake",
"China Petroleum & Chemical",
"Snap One Holdings",
"Synopsys",
"Synaptogenix",
"Senior Connect Acquisition I",
"Sensei Biotherapeutics",
"Senstar Technologies",
"Sentage Holdings",
"Synovus Financial",
"Synnex",
"Sanofi",
"The Southern Company",
"SoFi Technologies",
"Sotherly Hotels",
"Sohu.com",
"Solaris Oilfield Infrastructure",
"ReneSola",
"Electrameccanica Vehicles",
"Sonoco Products Company",
"Sonder Holdings",
"Sonim Technologies",
"Sonnet BioTherapeutics Holdings",
"Sonos",
"Sonendo",
"Sony Group",
"Society Pass",
"SOPHiA GENETICS",
"SOS Limited",
"Sono-Tek",
"SoundHound AI",
"Sovos Brands",
"SP Plus",
"Spectrum Brands Holdings",
"SuperCom",
"Virgin Galactic Holdings",
"Sound Point Acquisition Corp I,",
"South Plains Financial",
"Simon Property Group",
"S&P Global",
"Simon Property Group Acquisition Holdings",
"Suburban Propane Partners",
"SPI Energy Co.",
"Spire Global",
"SPK Acquisition",
"Silver Spike Acquisition II",
"Splunk",
"Steel Partners Holdings LP",
"SeaSpine Holdings",
"Sapiens International",
"SiriusPoint",
"Spok Holdings",
"Spotify Technology",
"Spectrum Pharmaceuticals",
"Spirit AeroSystems Holdings",
"Spruce Biosciences",
"SciSparc",
"Spero Therapeutics",
"SPS Commerce",
"Sprout Social",
"SportsTek Acquisition",
"SpartanNash Company",
"Sportsman's Warehouse Holdings",
"SunPower",
"SPX Corporation",
"Block",
"Presidio Property Trust",
"SeqLL",
"Sociedad Quimica y Minera de Chile",
"Sequans Communications",
"Squarespace",
"SQZ Biotechnologies Company",
"Spire",
"Sportradar Group AG",
"SRAX, Inc.",
"Spirit Realty Capital",
"1st Source",
"Stericycle",
"SurModics",
"Sempra Energy",
"ServiceSource International",
"Seritage Growth Properties",
"Surgalign Holdings",
"Stoneridge",
"Scully Royalty",
"Sprague Resources LP",
"Sorrento Therapeutics",
"Sarepta Therapeutics",
"Sierra Oncology",
"Scholar Rock Holding",
"Sarissa Capital Acquisition",
"Startek",
"Sensus Healthcare",
"Surrozen",
"Science Strategic Acquisition Alpha",
"South State",
"Summit State Bank",
"Southern States Bancshares",
"Simpson Manufacturing Company",
"Silver Spike Investment",
"STRATA Skin Sciences",
"Sasol",
"SS&C Technologies Holdings",
"SilverSun Technologies",
"The E.W. Scripps Company",
"SSR Mining",
"SuRo Capital",
"System1",
"ShotSpotter",
"Shutterstock",
"SIGNA Sports United",
"SunLink Health Systems",
"Stratasys",
"Sensata Technologies Holding",
"STAAR Surgical Company",
"Statera Biopharma",
"Staffing 360 Solutions",
"Stag Industrial",
"iStar",
"S&T Bancorp",
"Stewart Information Services",
"Steel Connect",
"Steris",
"Stem, Inc.",
"StepStone Group",
"Sterling Check",
"ST Energy Transition I",
"Sunlands Technology Group",
"Stagwell",
"Neuronetics",
"SunOpta",
"The ONE Group Hospitality",
"Stellantis",
"Steel Dynamics",
"STMicroelectronics",
"Stantec",
"StoneCo",
"Scorpio Tankers",
"Stoke Therapeutics",
"StoneMor",
"STORE Capital",
"Strategic Education",
"Sarcos Technology & Robotics",
"Supernova Partners Acquisition Company III",
"Sterling Construction Company",
"Streamline Health Solutions",
"Stran & Company",
"Sutro Biopharma",
"Star Equity Holdings",
"Stratus Properties",
"STRATTEC Security",
"Starry Group Holdings",
"Satsuma Pharmaceuticals",
"Sharps Technology",
"State Street",
"Shattuck Labs",
"Stevanato Group S.p.A.",
"Starwood Property Trust",
"Seagate Technology Holdings",
"Stereotaxis",
"Constellation Brands",
"Suncor Energy",
"ShoulderUp Technology Acquisition",
"Sun Communities",
"Summit Materials",
"Sumo Logic",
"Summer Infant",
"Sunoco LP",
"Sunlight Financial Holdings",
"Sunworks",
"Superior Industries International",
"Supernus Pharmaceuticals",
"Grupo Supervielle",
"Surface Oncology",
"SurgePays",
"Suzano",
"Service Properties Trust",
"SVF Investment",
"SVF Investment 2",
"SVF Investment 3",
"Save Foods",
"Silvercorp Metals",
"7 Acquisition",
"Savara",
"Servotronics",
"Firsthand Technology Value Fund",
"Software Acquisition Group, Inc. III",
"ShockWave Medical",
"Smith & Wesson Brands",
"Switch",
"Athlon Acquisition",
"SolarWinds",
"Latham Group",
"Sierra Wireless",
"Stanley Black & Decker",
"SWK Holdings",
"Skyworks Solutions",
"Schweitzer-Mauduit International",
"Southwestern Energy Company",
"Springwater Special Situations",
"Springworks Therapeutics",
"Swvl Holdings",
"Southwest Gas Holdings",
"SunCoke Energy",
"Standex International",
"Sensient Technologies",
"China SXT Pharmaceuticals",
"So-Young International",
"Stock Yards Bancorp",
"Synlogic",
"Synchrony Financial",
"Stryker",
"Synthetic Biologics",
"Synaptics",
"Syneos Health",
"Synalloy",
"Sypris Solutions",
"Syros Pharmaceuticals",
"Siyata Mobile",
"Sysco",
"Sizzle Acquisition",
"AT&T, Inc.",
"TravelCenters of America",
"TransAlta",
"Trepont Acquisition I",
"TransAct Technologies",
"Taitron Components",
"Takeda Pharmaceutical Company",
"TAL Education Group",
"Talkspace",
"Talos Energy",
"Talaris Therapeutics",
"Tantech Holdings",
"Taoping",
"Molson Coors Beverage Company",
"Protara Therapeutics",
"Taro Pharmaceutical Industries",
"Tarsus Pharmaceuticals",
"TaskUs",
"Carrols Restaurant Group",
"TAT Technologies",
"Taylor Devices",
"The Bancorp",
"Thunder Bridge Capital Partners III",
"TrueBlue",
"Triumph Bancorp",
"Taboola.com",
"Thornburg Income Builder Opportunities Trust",
"Toughbuilt Industries",
"Territorial Bancorp",
"Theravance Biopharma",
"TB SA Acquisition",
"TuanChe",
"Tuatara Capital Acquisition",
"TC Bancshares",
"Texas Capital Bancshares",
"TriCo Bancshares",
"TC BioPharm (Holdings)",
"Texas Community Bancshares",
"Third Coast Bancshares",
"Tricida",
"The Community Financial Corporation",
"Transcontinental Realty Investors",
"Tactile Systems Technology",
"Tricon Residential",
"Trajectory Alpha Acquisition",
"Trip.com Group",
"TRACON Pharmaceuticals",
"Blackrock TCP Capital",
"TCR2 Therapeutics",
"Alaunos Therapeutics",
"TScan Therapeutics",
"The Container Store Group",
"TCV Acquisition",
"Tucows",
"The Toronto-Dominion Bank",
"Teradata",
"TDCX, Inc.",
"TransDigm Group",
"Teladoc Health",
"Telephone & Data Systems",
"ThredUp",
"Tidewater",
"Teledyne Technologies",
"Atlassian",
"Bio-Techne",
"Teck Resources",
"Tarena International",
"Telefonica",
"Tekkorp Digital Acquisition",
"TE Connectivity",
"TELA Bio",
"Tellurian",
"Tenneco",
"Tenable Holdings",
"Tenax Therapeutics",
"Telecom Argentina",
"Teradyne",
"Terns Pharmaceuticals",
"TESSCO Technologies",
"Tech & Energy Transition",
"Technology & Telecommunication Acquisition",
"Teva Pharmaceutical Industries",
"Terex",
"Truist Financial",
"TFF Pharmaceuticals",
"TFI International",
"TFS Financial",
"Teleflex",
"Tredegar",
"TransGlobe Energy",
"Target Global Acquisition I",
"Taseko Mines",
"Textainer Group Holdings",
"Triumph Group",
"Tecnoglass",
"Tegna",
"Kimbell Tiger Acquisition",
"Transportadora de Gas del Sur",
"Target",
"TG Therapeutics",
"TG Venture Acquisition",
"Target Hospitality",
"Thrive Acquisition",
"Tenet Healthcare",
"Tuscan Holdings II",
"Thunder Bridge Capital Partners IV",
"First Financial",
"The Hanover Insurance Group",
"International Tower Hill Mines",
"ThermoGenesis Holdings",
"Thor Industries",
"Thermon Group Holdings",
"Gentherm",
"Thorne HealthTech",
"Theseus Pharmaceuticals",
"Thryv Holdings",
"TreeHouse Foods",
"Theratechnologies",
"Trean Insurance Group",
"Millicom International Cellular",
"UP Fintech Holding",
"Instil Bio",
"Interface",
"TIM S.A.",
"Tiga Acquisition",
"Tio Tech A",
"Tiptree",
"Tian Ruixiang Holdings",
"Team, Inc.",
"Titan Machinery",
"Tivic Health Systems",
"TELUS International",
"The TJX Companies",
"Teekay",
"Takung Art Co.",
"Turkcell Iletisim Hizmetleri A.S.",
"Yoshitsu ",
"Alpha Teknova",
"The Timken Company",
"TLG Acquisition One",
"TLGY Acquisition",
"Talis Biomedical",
"Telkom Indonesia",
"Tilray",
"Telos",
"Tiziana Life Sciences",
"Tilly's",
"Toyota Motor",
"The Music Acquisition",
"Timber Pharmaceuticals",
"TMC the metals company",
"Treace Medical Concepts",
"Titan Medical",
"TransMedics Group",
"Tencent Music Entertainment Group",
"Taylor Morrison Home",
"Tastemaker Acquisition",
"Thermo Fisher Scientific",
"Tompkins Financial",
"Turmeric Acquisition",
"Trilogy Metals",
"TimkenSteel",
"T-Mobile US",
"Terminix Global Holdings",
"Tennant Company",
"Tandem Diabetes Care",
"TriNet Group",
"Tango Therapeutics",
"Teekay Tankers",
"Travel + Leisure Co.",
"Tenon Medical",
"Tsakos Energy Navigation",
"Tonix Pharmaceuticals Holding",
"Tenaya Therapeutics",
"Talon 1 Acquisition",
"The Oncology Institute",
"Toll Brothers",
"TOMI Environmental Solutions",
"Top Ships",
"Toast",
"Tuniu",
"TowneBank",
"Turning Point Brands",
"TPB Acquisition I",
"Tutor Perini",
"TPG Inc.",
"TPG Pace Beneficial Finance",
"TRI Pointe Homes",
"Trinity Place Holdings",
"TPI Composites",
"Texas Pacific Land",
"Tapestry",
"Tempest Therapeutics",
"Turning Point Therapeutics",
"TriplePoint Venture Growth BDC",
"Tempur Sealy International",
"Tootsie Roll Industries",
"Trine II Acquisition",
"Tejon Ranch Company",
"Twin Ridge Capital Acquisition",
"Entrada Therapeutics",
"Trecora Resources",
"LendingTree",
"Trex Company",
"Targa Resources",
"Tabula Rasa HealthCare",
"Thomson Reuters",
"Trinity Biotech",
"Trinity Capital",
"TripAdvisor",
"Tristar Acquisition I",
"Troika Media Group",
"Trimble",
"Torm PLC",
"Trustmark",
"Tremor International",
"Trinity Industries",
"Terreno Realty",
"Transcat",
"Corner Growth Acquisition 2",
"TROOPS",
"T. Rowe Price Group",
"Tronox Holdings",
"TC Energy",
"Turquoise Hill Resources",
"TriMas",
"TrustCo Bank Corp NY",
"Trio-Tech International",
"TortoiseEcofin Acquisition III",
"Triton International",
"TPG RE Finance Trust",
"TransUnion",
"TrueCar",
"Trupanion",
"The Travelers Companies",
"Trivago",
"Trevi Therapeutics",
"Trevena",
"Tanzanian Gold",
"Tenaris",
"Telesat",
"Timberland Bancorp",
"TriState Capital Holdings",
"Tractor Supply Company",
"Trinseo",
"Tower Semiconductor",
"Taysha Gene Therapies",
"Tishman Speyer Innovation II",
"Tesla",
"Sixth Street Specialty Lending",
"Taiwan Semiconductor Manufacturing Company",
"Tyson Foods",
"TuSimple Holdings",
"TCW Special Purpose Acquisition",
"Townsquare Media",
"TSR, Inc.",
"2seventy bio",
"Trane Technologies",
"The Toro Company",
"Tattooed Chef",
"The Trade Desk",
"TotalEnergies SE",
"TTEC Holdings",
"Tetra Tech",
"TechTarget",
"TETRA Technologies",
"Tata Motors",
"TTM Technologies",
"Titan Pharmaceuticals",
"T2 Biosystems",
"Tile Shop Holdings",
"Take-Two Interactive Software",
"TELUS",
"Tuesday Morning",
"Tufin Software Technologies",
"Tupperware Brands",
"180 Degree Capital",
"Mammoth Energy Services",
"Tuya, Inc.",
"Grupo Televisa SAB",
"Travere Therapeutics",
"Tivity Health",
"Tradeweb Markets",
"Bilander Acquisition",
"Titan International",
"Twin Disc,",
"Thoughtworks Holding",
"Twilio",
"Twelve Seas Investment Company II",
"Tailwind Acquisition",
"Tailwind International Acquisition",
"Hostess Brands",
"Two Harbors Investment",
"two",
"2U, Inc.",
"Twist Bioscience",
"Twitter",
"Ternium",
"10X Genomics",
"TherapeuticsMD",
"Texas Instruments",
"Texas Roadhouse",
"Textron",
"Tortoise Energy Infrastructure",
"Tyler Technologies",
"Tyme Technologies",
"Tyra Biosciences",
"Travelzoo",
"TZP Strategies Acquisition",
"Unity Software",
"Under Armour",
"Under Armour",
"United Airlines Holdings",
"United States Antimony",
"CVR Partners LP",
"AgEagle Aerial Systems",
"Urstadt Biddle Properties",
"United Bancorp",
"Uber Technologies",
"United Security Bancshares",
"United Bancshares",
"Urstadt Biddle Properties",
"UBS Group AG",
"United Bankshares",
"Unity Biotechnology",
"United Community Banks",
"uCloudlink Group",
"Ultra Clean Holdings",
"Udemy",
"UDR, Inc.",
"Urban Edge Properties",
"Uranium Energy",
"Universal Electronics",
"Net 1 UEPS Technologies",
"Unique Fabricating",
"United Fire Group",
"Unifi",
"UFP Industries",
"UFP Technologies",
"United-Guardian",
"UGI Corporation",
"Ultrapar Participacoes",
"Urban-gro",
"Amerco",
"Universal Health Services",
"Universal Health Realty Income Trust",
"Ubiquiti",
"United Insurance Holdings",
"Unisys",
"Ucommune International",
"Unilever",
"Ultralife",
"Frontier Group Holdings",
"Universal Logistics Holdings",
"Ulta Beauty",
"UMB Financial",
"United Microelectronics",
"UMH Properties",
"Umpqua Holdings",
"Unico American",
"Union Bankshares",
"Unicycive Therapeutics",
"UniFirst",
"United Natural Foods",
"UnitedHealth Group",
"Uniti Group",
"Unum Group",
"Union Pacific",
"Unity Bancorp",
"Univar Solutions",
"Urban One",
"Urban One",
"Wheels Up Experience",
"Universe Pharmaceuticals",
"UpHealth",
"Upland Software",
"United Parcel Service",
"Upstart Holdings",
"TradeUP Acquisition",
"Upwork",
"Urban Outfitters",
"Ur-Energy",
"UroGen Pharma",
"United Rentals",
"Uranium Royalty",
"USA Compression Partners LP",
"USA Truck",
"Universal Stainless & Alloy Products",
"Americas Gold & Silver",
"U.S. Gold",
"U.S. Bancorp",
"USCB Financial Holdings",
"TKB Critical Technologies 1",
"USD Partners LP",
"U.S. Energy",
"UserTesting",
"US Foods Holding",
"Usio, Inc.",
"United States Lime & Minerals",
"United States Cellular",
"USANA Health Sciences",
"U.S. Physical Therapy",
"U.S. Well Services",
"U.S. Xpress Enterprises",
"UTA Acquisition",
"United Therapeutics",
"Universal Technical Institute",
"Unitil",
"Utah Medical Products",
"UTime",
"Minerva Surgical",
"UTStarcom Holdings",
"Utz Brands",
"Universal Security Instruments",
"Energy Fuels",
"Universal Insurance Holdings",
"Univest Financial",
"Universal",
"UWM Holdings",
"Uxin Limited",
"Visa Inc.",
"Virginia National Bankshares",
"Marriott Vacations Worldwide",
"Vaccitech",
"Valaris",
"Vale S.A.",
"Valneva SE",
"Value Line",
"Vapotherm",
"Vector Acquisition II",
"INNOVATE",
"Vaxxinity",
"Village Bank & Trust Financial",
"VBI Vaccines",
"Vascular Biogenics",
"VersaBank",
"Viscogliosi Brothers Acquisition",
"Veritex Holdings",
"Visteon",
"Vericel",
"Vickers Vantage I",
"Vaccinex",
"Vacasa",
"Victory Capital Holdings",
"10x Capital Venture Acquisition II",
"10x Capital Venture Acquisition III",
"Veracyte",
"Vectrus",
"Veeco Instruments",
"VectivBio Holding AG",
"Twin Vee PowerCats, Co.",
"Veeva Systems",
"Velocity Financial",
"Velocity Acquisition",
"Venus Acquisition",
"VEON Ltd.",
"Vera Therapeutics",
"Verb Technology Company",
"Veritone",
"Venus Concept",
"Veru Inc.",
"Verve Therapeutics",
"Vertex",
"Vericity",
"Vermilion Energy",
"Vicinity Motor",
"VF Corporation",
"Village Farms International",
"Vonage Holdings",
"The Very Good Food Company",
"Virgin Group Acquisition II",
"Vector Group",
"Vista Gold",
"Viveon Health Acquisition",
"VirnetX Holding",
"Valhi",
"Vahanna Tech Edge Acquisition I",
"Via Renewables",
"VIA optronics AG",
"Viavi Solutions",
"VICI Properties",
"Vicor",
"View, Inc.",
"Vigil Neuroscience",
"7GC & Co. Holdings",
"Vincerx Pharma",
"Fresh Vine Wine",
"Gaucho Group Holdings",
"Vinci Partners Investments",
"Viomi Technology Co.",
"Vipshop Holdings",
"Vir Biotechnology",
"Virco Manufacturing",
"Virios Therapeutics",
"Virtu Financial",
"Viracta Therapeutics",
"Vislink Technologies",
"Vista Oil & Gas",
"Vital Farms",
"Telefonica Brasil",
"Viveve Medical",
"Meridian Bioscience",
"Voxeljet AG",
"Viking Therapeutics",
"Valor Latitude Acquisition",
"Volcon",
"Velo3D",
"Velodyne Lidar",
"Village Super Market",
"Valens Semiconductor",
"Valens Company",
"Valero Energy",
"Vallon Pharmaceuticals",
"Controladora Vuela Compania de Aviacion",
"Volta",
"Valley National Bancorp",
"Vision Marine Technologies",
"Vulcan Materials Company",
"Valuence Merger I",
"Viemed Healthcare",
"Vimeo",
"VMG Consumer Acquisition",
"Valmont Industries",
"VMware",
"Vince Holding",
"Vanda Pharmaceuticals",
"21Vianet Group",
"Vornado Realty Trust",
"Viper Energy Partners LP",
"VolitionRX",
"Vontier",
"Venator Materials",
"VOC Energy Trust",
"Vodafone Group",
"Vor Biopharma",
"Virgin Orbit Holdings",
"VOXX International",
"Voya Financial",
"VPC Impact Acquisition Holdings II",
"Vishay Precision Group",
"VIQ Solutions",
"Vera Bradley",
"The Glimpse Group",
"ViewRay",
"Verrica Pharmaceuticals",
"Viridian Therapeutics",
"Veris Residential",
"Varex Imaging",
"Vroom",
"VerifyMe",
"Verona Pharma",
"Varonis Systems",
"Verint Systems",
"Virpax Pharmaceuticals",
"Verra Mobility",
"Verisk Analytics",
"VeriSign",
"Vertiv Holdings Co.",
"Virtus Investment Partners",
"Veritiv",
"Vertex Pharmaceuticals",
"Versus Systems",
"Vision Sensing Acquisition",
"ViaSat",
"Victoria's Secret & Co.",
"VSE Corporation",
"Vishay Intertechnology",
"Vistra",
"Vasta Platform",
"Verastem",
"Vista Outdoor",
"Ventoux CCM Acquisition",
"VTEX",
"VistaGen Therapeutics",
"VectoIQ Acquisition II",
"Vertex Energy",
"Bristow Group",
"Ventas",
"Viatris",
"Vitru",
"VirTra",
"vTv Therapeutics",
"Ventyx Biosciences",
"Vuzix",
"Viad Corp",
"Vivint Smart Home",
"Vivos Therapeutics",
"VivoPower International",
"Valvoline",
"Vintage Wine Estates",
"Vidler Water Resources",
"Vaxart",
"Vy Global Growth",
"Voyager Therapeutics",
"VYNE Therapeutics",
"Vyant Bio",
"Verizon Communications",
"VIZIO Holding",
"Vizsla Silver",
"Wayfair",
"Westinghouse Air Brake Technologies",
"Westamerica Bancorporation",
"Washington Federal",
"Wah Fu Education Group",
"Western Alliance Bancorporation",
"Waldencast Acquisition",
"Warrior Technologies Acquisition Company",
"Washington Trust Bancorp",
"Waters",
"Energous",
"Waverley Capital Acquisition 1",
"WaveDancer",
"Eco Wave Power Global AB (publ)",
"Western Acquisition Ventures",
"Weibo",
"Walgreens Boots Alliance",
"Warner Bros. Discovery",
"Winc, Inc.",
"Webster Financial",
"Welbilt",
"Wallbox",
"WESCO International",
"Waste Connections",
"Walker & Dunlop",
"Workday",
"Western Digital",
"WD-40 Company",
"Waterdrop",
"WeWork",
"Weave Communications",
"Weber",
"WEC Energy Group",
"Weidai",
"Wejo Group",
"Integrated Wellness Acquisition",
"Welltower",
"The Wendy's Company",
"Werner Enterprises",
"Western Midstream Partners LP",
"WisdomTree Investments",
"WEX Inc.",
"Weyco Group",
"Woori Financial Group",
"Wells Fargo & Company",
"Where Food Comes From",
"West Fraser Timber Company",
"Weatherford International",
"Winnebago Industries",
"Wyndham Hotels & Resorts",
"Cactus",
"WhiteHorse Finance",
"Westwood Holdings Group",
"Wilhelmina International",
"Wheeler Real Estate Investment Trust",
"Whirlpool",
"G. Willi-Food International",
"WiMi Hologram Cloud",
"Winmark",
"Wingstop",
"Windtree Therapeutics",
"WinVest Acquisition",
"Encore Wire",
"Summit Wireless Technologies",
"ContextLogic",
"Wipro",
"Wix.com",
"Workiva",
"WISeKey International Holding AG",
"Workhorse Group",
"WalkMe",
"Worksport",
"Willdan Group",
"Willis Lease Finance",
"Westlake Chemical",
"Westlake Chemical Partners LP",
"Whiting Petroleum",
"Williams Industrial Services Group",
"John Wiley & Sons",
"John Wiley & Sons",
"Waste Management",
"The Williams Companies",
"Western Asset Mortgage Capital",
"Warner Music Group",
"Weis Markets",
"William Penn Bancorporation",
"Advanced Drainage Systems",
"Walmart",
"Wabash National",
"Western New England Bancorp",
"Andretti Acquisition",
"WNS (Holdings)",
"Wunong Net Technology Company",
"Wolfspeed",
"Petco Health And Wellness Company",
"Worthington Industries",
"SCWorx",
"WideOpenWest",
"WP Carey",
"Warburg Pincus Capital Corporation I-A",
"Warburg Pincus Capital Corporation I-B",
"Wheaton Precious Metals",
"WPP plc",
"Westport Fuel Systems",
"World Quantum Growth Acquisition",
"Williams Rowland Acquisition",
"Wrap Technologies",
"W.R. Berkley",
"Warby Parker",
"Washington Real Estate Investment Trust",
"WestRock Company",
"World Acceptance",
"Western Copper & Gold",
"WesBanco",
"Waterstone Financial",
"WillScot Mobile Mini Holdings",
"WSFS Financial",
"Williams-Sonoma",
"Watsco",
"Whitestone REIT",
"West Pharmaceutical Services",
"Wayside Technology Group",
"West Bancorporation",
"The Alkaline Water Company",
"Wintrust Financial",
"W&T Offshore",
"White Mountains Insurance Group",
"Welsbach Technology Metals Acquisition",
"Essential Utilities",
"Waitr Holdings",
"Watts Water Technologies",
"Wireless Telecom Group",
"Select Energy Services",
"Willis Towers Watson",
"The Western Union Company",
"TeraWulf",
"Wave Life Sciences",
"WVS Financial",
"Willamette Valley Vineyards",
"WW International",
"Worldwide Webb Acquisition",
"Woodward",
"World Wrestling Entertainment",
"Westwater Resources",
"Wolverine World Wide",
"Weyerhaeuser Company",
"Wynn Resorts",
"WidePoint",
"United States Steel",
"Beyond Air",
"Xenetic Biosciences",
"XBiotech",
"Exicure",
"Xcel Energy",
"Exela Technologies",
"XCel Brands",
"Xenon Pharmaceuticals",
"Intersect ENT",
"Xeris Pharmaceuticals",
"ExcelFin Acquisition",
"X4 Pharmaceuticals",
"Exagen",
"Xenia Hotels & Resorts",
"Xinyuan Real Estate Co.",
"XL Fleet",
"Xilio Therapeutics",
"Qualtrics International",
"Xometry",
"Xencor",
"Xunlei",
"Exxon Mobil",
"XOMA Corporation",
"Xos, Inc.",
"XP Inc.",
"XPAC Acquisition",
"Power & Digital Infrastructure Acquisition II",
"XPEL, Inc.",
"Xperi Holding",
"XPeng",
"Solitario Zinc",
"XPO Logistics",
"DPCM Capital",
"Xponential Fitness",
"Expion360",
"Expro Group Holdings",
"Dentsply Sirona",
"XORTX Therapeutics",
"Xerox Holdings",
"XpresSpa Group",
"XTL Biopharmaceuticals",
"Xtant Medical Holdings",
"22nd Century Group",
"X Financial",
"Xylem",
"Alleghany",
"Yalla Group",
"cbdMD",
"Yellow",
"Yelp Inc.",
"YETI Holdings",
"Yext, Inc.",
"MingZhu Logistics Holdings",
"111, Inc.",
"Yunji",
"Y-mAbs Therapeutics",
"Full Truck Alliance Co.",
"Yumanity Therapeutics",
"Yandex",
"The York Water Company",
"Yotta Acquisition",
"Clear Secure",
"YPF Sociedad Anonima",
"17 Education & Technology Group",
"Yiren Digital",
"Yatsen Holding",
"Yield10 Bioscience",
"TPG Pace Beneficial II",
"Yatra Online",
"Yum! Brands",
"Yum China Holdings",
"Liquid Media Group",
"JOYY Inc.",
"Zillow Group",
"Zimmer Biomet Holdings",
"Zebra Technologies",
"Zhongchao",
"Ziff Davis",
"Zedge",
"Zealand Pharma",
"Zendesk",
"Zenvia",
"Zepp Health",
"Ecoark Holdings",
"Zeta Global Holdings",
"Olympic Steel",
"Lightning eMotors",
"Zillow Group",
"Ermenegildo Zegna",
"Zhihu",
"ZoomInfo Technologies",
"ZIM Integrated Shipping Services",
"ZimVie",
"FTAC Zeus Acquisition",
"Zions Bancorporation NA",
"ZipRecruiter",
"Zivo Bioscience",
"ZK International Group Co.",
"Zai Lab",
"Zoom Video Communications",
"Zhangmen Education",
"Zynga",
"China Southern Airlines Company",
"Zentalis Pharmaceuticals",
"Zomedica",
"Zscaler",
"Zosano Pharma",
"Zimmer Energy Transition Acquisition",
"Zentek",
"ZTO Express (Cayman)",
"Zoetis",
"Zumiez",
"Zuora",
"Zevia PBC",
"Zovio",
"Z-Work Acquisition",
"Zurn Water Solutions",
"Zymergen",
"Zymeworks",
"Zynerba Pharmaceuticals",
"Zynex",
]

console.log(tickerNameArr)