//THE JAVASCRIPT BEHIND THE NAVBAR COLLAPSE

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () =>{
    navLinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("toggle");
    })
});

/* AN APP THAT CALCULATES SIMPLE INTEREST */
function compute() {
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var t = document.getElementById("time").value;
    var answer = (p * r * t) / 100;
    document.getElementById("answer").value = answer;
}

/*AN APP THAT COMPUTES NET INCOME */

function netIncome() {
    var gross = document.getElementById("gross").value;
    var tax = document.getElementById("tax").value;
    var social = document.getElementById("social").value;
    var net = +gross - ((+gross * +tax) + (+gross * +social));
    document.getElementById("net").value = net;

    /* This part clears the whole input, when there are no values for gross */
    if (gross === "") {
        document.getElementById("net").value = "";
        document.getElementById("tax").value = "";
        document.getElementById("social").value = "";
    }
}

/* AN APP THAT COMPUTES PROGRESSIVE TAX */

function pIncome() {
    var gross2 = document.getElementById("gross2").value;
    let rate1 = 0.10;
    let rate2 = 0.20;
    let rate3 = 0.25;
    let rate4 = 0.30;
    var net1 = gross2 - (gross2 * rate1);
    var net2 = gross2 - (gross2 * rate2);
    var net3 = gross2 - (gross2 * rate3);
    var net4 = gross2 - (gross2 * rate4);

    /* In this part, only two events are allowed to occur - "gross and level(x)". No two levels display 
    simultaneously */
    if (gross2 > 450 && gross2 <= 1499) {
        var level1 = gross2 * rate1;
        document.getElementById("level1").value = `$${level1}`;
        document.getElementById("level2").value = "";
        document.getElementById("level3").value = "";
        document.getElementById("level4").value = "";
        document.getElementById("level1").disabled = false;
        document.getElementById("netIncome").value = `$${net1}`;
    } else if (gross2 >= 1500 && gross2 <= 4999) {
        var level2 = gross2 * rate2;
        document.getElementById("level2").value = `$${level2}`;
        document.getElementById("level1").value = "";
        document.getElementById("level3").value = "";
        document.getElementById("level4").value = "";
        document.getElementById("level2").disabled = false;
        document.getElementById("level1").disabled = true;
        document.getElementById("netIncome").value = `$${net2}`;
    } else if (gross2 >= 5000 && gross2 <= 7999) {
        var level3 = gross2 * rate3;
        document.getElementById("level3").value = `$${level3}`;
        document.getElementById("level1").value = "";
        document.getElementById("level2").value = "";
        document.getElementById("level4").value = "";
        document.getElementById("level1").disabled = true;
        document.getElementById("level2").disabled = true;
        document.getElementById("level3").disabled = false;
        document.getElementById("netIncome").value = `$${net3}`;
    } else if (gross2 >= 8000) {
        var level4 = gross2 * rate4;
        document.getElementById("level4").value = `$${level4}`;
        document.getElementById("level1").value = "";
        document.getElementById("level2").value = "";
        document.getElementById("level3").value = "";
        document.getElementById("level1").disabled = true;
        document.getElementById("level2").disabled = true;
        document.getElementById("level3").disabled = true;
        document.getElementById("level4").disabled = false;
        document.getElementById("netIncome").value = `$${net4}`;
    } else if (gross2 === "") {
        document.getElementById("level1").value = "";
        document.getElementById("level2").value = "";
        document.getElementById("level3").value = "";
        document.getElementById("level4").value = "";
        document.getElementById("level1").disabled = true;
        document.getElementById("level2").disabled = true;
        document.getElementById("level3").disabled = true;
        document.getElementById("level4").disabled = true;
        document.getElementById("netIncome").value = "";
    }

}

// AN APP THAT COMPUTES VOLUME DISCOUNT FOR A WHOLESALER.

function discount() {
    let price = document.getElementById('price').value;
    let quantity = document.getElementById('quantity').value;
    var tPrice = price * quantity;

    // THE TIERED DISCOUNT RATES IN PERCENTAGES.
    var tier1 = 0.02;
    var tier2 = 0.04;
    var tier3 = 0.06;
    var tier4 = 0.08;
    var tier5 = 0.10;

    // THE FORMULA FOR DISCOUNTED PRICE.
    var dPrice1 = tPrice - (tPrice * tier1);
    var dPrice2 = tPrice - (tPrice * tier2);
    var dPrice3 = tPrice - (tPrice * tier3);
    var dPrice4 = tPrice - (tPrice * tier4);
    var dPrice5 = tPrice - (tPrice * tier5);

    // THE FORMULA FOR SAVINGS.
    var savings1 = ((tPrice * tier1) / (tPrice) * 100);
    var savings2 = ((tPrice * tier2) / (tPrice) * 100);
    var savings3 = ((tPrice * tier3) / (tPrice) * 100);
    var savings4 = ((tPrice * tier4) / (tPrice) * 100);
    var savings5 = ((tPrice * tier5) / (tPrice) * 100);


    // THE CONDITIONAL STATEMENTS REQUIRED FOR THE FUNCTION

    if (quantity >= 200 && quantity <= 499) {
        document.getElementById('tPrice').value = `$${tPrice}`;
        document.getElementById("dPrice").value = `$${dPrice1}`;
        document.getElementById('savings').value = `${savings1}%`
    } else if (quantity >= 500 && quantity <= 899) {
        document.getElementById('tPrice').value = `$${tPrice}`;
        document.getElementById('dPrice').value = `$${dPrice2}`;
        document.getElementById('savings').value = `${savings2}%`;
    } else if (quantity >= 900 && quantity <= 1299) {
        document.getElementById('tPrice').value = `$${tPrice}`;
        document.getElementById('dPrice').value = `$${dPrice3}`;
        document.getElementById('savings').value = `${savings3}%`;
    } else if (quantity >= 1300 && quantity <= 1699) {
        document.getElementById('tPrice').value = `$${tPrice}`;
        document.getElementById('dPrice').value = `$${dPrice4}`;
        document.getElementById('savings').value = `${savings4}%`;
    } else if (quantity >= 1700) {
        document.getElementById('tPrice').value = `$${tPrice}`;
        document.getElementById('dPrice').value = `$${dPrice5}`;
        document.getElementById('savings').value = `${savings5}%`;
    } else if (quantity === "") {
        price = "";
        document.getElementById('tPrice').value = "";
        document.getElementById('dPrice').value = "";
        document.getElementById('savings').value = "";
    }
}

// AN APP THAT CALCULATES BREAKEVEN 
function bep() {
    var fc = document.getElementById("fixedCost").value;
    var usp = document.getElementById("sellingPrice").value;
    var uvc = document.getElementById("variableCost").value;
    var answer = `${fc / (usp - uvc)} units`;
    var ber = `$${(fc / (usp - uvc)) * usp}`;
    document.getElementById("breakEven").value = answer;
    document.getElementById("bePrice").value = ber;
}

// AN APP THAT CLASSIFIES DEMAND
function demand() {
    var q1 = document.getElementById("q1").value;
    var p1 = document.getElementById("p1").value;
    var q2 = document.getElementById("q2").value;
    var p2 = document.getElementById("p2").value;

    if (p2 > p1 && q2 < q1) {
        document.getElementById("inference").value = "Elastic";
    } else if (p2 > p1 && q2 === q1) {
        document.getElementById("inference").value = "Zero Elastic";
    } else if (p2 >= (p1 + (p1 * 0.01)) && p2 <= (p1 + (p1 * 0.2)) || q2 >= (q1 + (q1 * 0.01)) && q2 <= (q1 + (q1 * 1))) {
        document.getElementById("inference").value = "Inelastic";
    }
}

// AN APP THAT CALCULATES COMPOUND INTEREST 

function compound() {
    var pr = document.getElementById("principal1").value;
    var ra = document.getElementById("rate1").value;
    var ti = document.getElementById("time1").value;
    var fr = document.getElementById("frequency").value;

    //breakdown the formula into four parts
    var rFreq = (+ra / +100) / +fr;
    var cVal = +pr * (+1 + +rFreq);
    var cPound = +fr * +ti;
    var answer = +cVal * (Math.E ** +cPound);

    document.getElementById("cInterest").value = answer;
}

//AN APP THAT CALCULATES MONTHLY MORTGAGE 

function mGage(){
    var loan = document.getElementById("loan").value;
    var iRates = document.getElementById("iRates").value;
    var mLeft = document.getElementById("monthsLeft").value;
    var mortGages = +loan * +iRates / +mLeft;
    document.getElementById("mortGages").value = Math.round(mortGages);
}

//AN APP THAT CALCULATES MONTHLY EQUATED MONTHLY INSTALLMENTS

function emi() {
    var pr3 = document.getElementById("principal3").value;
    var ra3 = document.getElementById("rate3").value;
    var mon3 = document.getElementById("months3").value;

    // breakdown the formula into three parts
    var rate = +1 + +ra3;
    let int1 = Math.pow(+rate, +mon3);
    let int2 = Math.pow(+rate, +mon3) - 1;
    let installMent = +pr3 * +ra3 * +int1 / +int2 - +1;
    let contrib = +installMent / +mon3;
    document.getElementById("ime").value = contrib;
    document.getElementById("installMent").value = installMent;
}

// AN APP THAT CALCULATES CERTIFICATE OF DEPOSIT

function cd() {
    var pr4 = document.getElementById("principal4").value;
    var ra4 = document.getElementById("rate4").value;
    var t4 = document.getElementById("time4").value;
    var fr4 = document.getElementById("frequency4").value;
    var int3 = +1 + (+ra4 / +fr4);
    var int4 = +fr4 * +t4
    var intFreq = Math.pow(+int3, +int4);
    let cod = +pr4 * (+intFreq);
    document.getElementById("result4").value = cod;
}

//AN APP THAT CALULATES ANNUAL PERCENTAGE INTEREST RATE
function apr() {

    var pr5 = document.getElementById("principal5").value;
    var ra5 = document.getElementById("rate5").value;
    var dy5 = document.getElementById("days5").value;
    var fee = document.getElementById("charges").value;
    var fip = (+fee * +ra5) / +pr5;
    var fipd = +fip / +dy5;
    var fipdy = +fipd * +365;
    var aprr = +fipdy * +100;
    document.getElementById("apRate").value = aprr;
}

//AN APP THAT CALCULATES PRESENT VALUE
function pValue() {

    var fValue = document.getElementById("fValue").value;
    var ra6 = document.getElementById("rate6").value;
    var dy7 = document.getElementById("days6").value;
    var iRate = +1 + +ra6;
    var pVal = +fValue / Math.pow(+iRate, +dy7);
    document.getElementById("pVal").value = pVal;
}

//AN APP THAT CALCULATES FUTURE VALUE

function fValue() {
    let pValue = document.getElementById("pValue").value;
    let rateSeven = document.getElementById("rate7").value;
    let nPeriod = document.getElementById("years7").value;
    let raIncrease = +1 + +rateSeven;
    let futureValue = (+pValue) * (Math.pow(+raIncrease, +nPeriod));
    document.getElementById("fVal").value = futureValue;
}

//AN APP THAT CALCULATES NET PRESENT VALUE

function netpV() {
    var i = document.getElementById("iNflows").value;
    var o = document.getElementById("outFlow").value;
    var r = document.getElementById("rAte").value;
    var y = document.getElementById("yEars").value;
    var nI = +i * +y;
    document.getElementById("niNflows").value = nI;
    var j = +1 + +r;
    var jI = Math.pow(j, y);
    var npV = +o - (+nI / +jI);
    document.getElementById("nPv").value = npV;
}


//AN APP THAT CALCULATES NET INCOME

function netIncome() {
    var reVenue = document.getElementById("reVenue").value;
    var oIncome = document.getElementById("opeRating").value;
    var oProfit = reVenue - oIncome;
    document.getElementById("operProfit").value = `$${oProfit}`;
    var itdA = document.getElementById("itDa").value;
    var netInc = oProfit - itdA;
    document.getElementById("netinCome").value = `$${netInc}`;
}

//AN APP THAT CALCULATES CALCULATES AN ACCOUNTING STATEMENT PROCEDURALLY

// NOTE: WE PREPEND THE PLUS SIGN TO EACH VARIABLE BEING EVALUATED, SO THAT JS RECOGNIZES IT AS A NUMBER
function fullStatement() {
    var re = document.getElementById("reveNuee").value;
    var pu = document.getElementById("purChasese").value;
    var gp = +re - +pu;
    document.getElementById("grossProfite").value = gp;

    let admin = document.getElementById("adMine").value;
    let rand = document.getElementById("ranDe").value;
    let main = document.getElementById("mainTaine").value;
    let iT = document.getElementById("infoTeche").value;
    let salary = document.getElementById("salWagese").value;
    let energy = document.getElementById("enErgye").value;
    let miscel = document.getElementById("misCelle").value;
    let totOp = +admin + +rand + +main + +iT + +salary + +energy + +miscel;
    document.getElementById("totOps").value = totOp;
    let incomes = gp - totOp;
    document.getElementById("oIncomee").value = incomes;

    var inT = document.getElementById("inTereste").value;
    var exc = document.getElementById("exchLosse").value;
    var dep = document.getElementById("depreCiation").value;
    var div = document.getElementById("diviDende").value;
    var ebt = incomes - (+inT + +exc + +dep + +div);
    document.getElementById("ebTe").value = ebt;
    var tax = document.getElementById("totalTaxe").value;
    // var totOc = +inT + +exc + +dep + +div + +tax;
    // document.getElementById("totOcs").value = totOc;
    var npr = +ebt - +tax;
    document.getElementById("netProfite").value = npr;
}

//AN APP THAT COMPUTES CONTRIBUTION MARGIN
function cMargin() {
    var sp = document.getElementById("sPrice").value;
    var vc = document.getElementById("vCost").value;
    var cm = +sp - +vc;
    var mrate = (+cm / +sp) * 100;
    document.getElementById("cMar").value = cm;
    document.getElementById("mRate").value = mrate;
}

//AN APP THAT APPRAISES YEARLY FINANCIAL PERFORMANCE
function appRaisal() {

    //Variables for sales
    var sa2 = document.getElementById("salesB").value;
    var sa3 = document.getElementById("salesC").value;

    //Variables for expenses
    var ex2 = document.getElementById("expensesB").value;
    var ex3 = document.getElementById("expensesC").value;


    //Variables for profit
    var pr2 = parseInt(sa2) - parseInt(ex2);
    var pr3 = parseInt(sa3) - parseInt(ex3);
    var sa4 = parseInt(sa2) - parseInt(sa3);
    document.getElementById("salesD").value = sa4;
    var ex4 = parseInt(ex2) - parseInt(ex3);
    document.getElementById("expensesD").value = ex4;
    var pr4 = parseInt(pr2) - parseInt(pr3);

    document.getElementById("profitB").value = pr2;
    document.getElementById("profitC").value = pr3;
    document.getElementById("profitD").value = pr4;
    //Conditionals that fulfill three outcomes: "U", "F, and "0"

    if (sa2 === sa3) {
        var sa5 = parseInt(0);
        document.getElementById("salesE").value = sa5;
    } else if (sa2 < sa3) {
        var sa5 = parseInt(1);
        document.getElementById("salesE").value = sa5;
    } else if (sa2 > sa3) {
        var sa5 = parseInt(-1);
        document.getElementById("salesE").value = sa5;
    }

    if (ex2 === ex3) {
        var ex5 = parseInt(0);
        document.getElementById("expensesE").value = ex5;
    } else if (ex2 < ex3) {
        var ex5 = parseInt(-1);
        document.getElementById("expensesE").value = ex5;
    } else if (ex2 > ex3) {
        var ex5 = parseInt(1);
        document.getElementById("expensesE").value = ex5;
    }

    if (pr2 === pr3) {
        var pr5 = parseInt(0);
        document.getElementById("profitE").value = pr5;
    } else if (pr2 < pr3) {
        var pr5 = parseInt(1);
        document.getElementById("profitE").value = pr5;
    } else if (pr2 > pr3) {
        var pr5 = parseInt(-1);
        document.getElementById("profitE").value = pr5;
    } else {
        console.log("Nothing Else to do!!!");
    }
}

//AN APP THAT COMPUTES TARGET SALES 
function tSales() {
    var tp = document.getElementById("tProfit").value;
    var sp = document.getElementById("sPrice2").value;
    var vc = document.getElementById("vCost2").value;
    var fc = document.getElementById("fCost").value;
    var cm = +sp - +vc;
    document.getElementById("cMargin2").value = cm;
    var svo = (+fc + +tp) / +cm;
    document.getElementById("sVolume").value = Math.round(svo);
    var sva = +sp * +svo;
    document.getElementById("sValue").value = Math.round(sva);
}

// AN APP THAT PERFORMS COST-VOLUME-PROFIT ANALYSIS

function cvp() {
    var vc21 = document.getElementById("vcost21").value;
    var fc21 = document.getElementById("fcost21").value;
    var bu21 = document.getElementById("budget21").value;

    var vs21 = parseInt(bu21) - parseInt(fc21);
    var sa21 = parseInt(vs21) / parseInt(vc21);
    var se21 = parseInt(vs21) / parseInt(vc21);
    document.getElementById("sales21").value = sa21;
    document.getElementById("serv21").value = se21;
}

// AN APP THAT PERFORMS COST FUNCTION

// ENGINEERING ANALYSIS METHOD
function cFunc() {
    var fc22 = document.getElementById("fcost22").value;
    var vc22 = document.getElementById("vcost22").value;
    var ac22 = document.getElementById("act22").value;
    let vcx = parseInt(vc22) * parseInt(ac22);
    var to22 = parseInt(fc22) + vcx;
    document.getElementById("tcost22").value = to22;
}

// HIGH-LOW METHOD

function hlow() {

    //First method - a code that lists all the inputs using their individual IDs
    var m1 = document.getElementById("mc1").value;
    var a1 = document.getElementById("al1").value;
    var m2 = document.getElementById("mc2").value;
    var a2 = document.getElementById("al2").value;
    var m3 = document.getElementById("mc3").value;
    var a3 = document.getElementById("al3").value;
    var m4 = document.getElementById("mc4").value;
    var a4 = document.getElementById("al4").value;
    var m5 = document.getElementById("mc5").value;
    var a5 = document.getElementById("al5").value;
    var m6 = document.getElementById("mc6").value;
    var a6 = document.getElementById("al6").value;
    var m7 = document.getElementById("mc7").value;
    var a7 = document.getElementById("al7").value;
    var m8 = document.getElementById("mc8").value;
    var a8 = document.getElementById("al8").value;
    var m9 = document.getElementById("mc9").value;
    var a9 = document.getElementById("al9").value;
    var m10 = document.getElementById("mc10").value;
    var a10 = document.getElementById("al10").value;
    var m11 = document.getElementById("mc11").value;
    var a11 = document.getElementById("al11").value;
    var m12 = document.getElementById("mc12").value;
    var a12 = document.getElementById("al12").value;


    //The next method -  a code that obtains the highest and lowest values

    var hc = Math.max(+m1, +m2, +m3, +m4, +m5, +m6, +m7, +m8, +m9, +m10, +m11, +m12);
    document.getElementById("hcost").value = hc;
    var hal = Math.max(+a1, +a2, +a3, +a4, +a5, +a6, +a7, +a8, +a9, +a10, +a11, +a12);
    document.getElementById("hact").value = hal;
    var lc = Math.min(+m1, +m2, +m3, +m4, +m5, +m6, +m7, +m8, +m9, +m10, +m11, +m12);
    document.getElementById("lcost").value = lc;
    var lal = Math.min(+a1, +a2, +a3, +a4, +a5, +a6, +a7, +a8, +a9, +a10, +a11, +a12);
    document.getElementById("lact").value = lal;
    var dc = parseInt(hc) - parseInt(lc);
    var dal = parseInt(hal) - parseInt(lal);
    var vc23 = parseInt(dc) / parseInt(dal);
    document.getElementById("vcost23").value = Math.round(vc23);
    var fc23 = +hc - (+vc23 * +hal);
    document.getElementById("fcost23").value = Math.round(fc23);
    var fc24 = +lc - (+vc23 * +lal);
    document.getElementById("fcost24").value = Math.round(fc24);

    // These are the variables for the last part of the calculation
    var fc25 = +fc23;
    document.getElementById("fcost25").value = Math.round(fc25);
    var vc25 = +vc23;
    document.getElementById("vcost25").value = Math.round(vc25);
    var ac25 = document.getElementById("act25").value;
    var tc25 = +fc25 + (+vc25 * +ac25);
    document.getElementById("tcost25").value = Math.round(tc25);
}


//AN APP THAT EVALUATES DIRECT MANUFACTURING COSTS

function manuCost() {
    var dm = document.getElementById("dmat").value;
    var dl = document.getElementById("tdlab").value;
    var emp = document.getElementById("empl").value;
    var dov = document.getElementById("ohead").value;

    var ula = +dl / +emp; // unit labour cost
    document.getElementById("ulab").value = ula;

    var tdm = +dm + +dl + +dov; // total direct manufacturing costs
    document.getElementById("tmanu").value = tdm;

    var shm = +dm / +tdm * +100; // share of direct materials on total cost
    document.getElementById("shmat").value = Math.round(shm);

    var shl = +dl / +tdm * +100; // share of direct labour on total cost
    document.getElementById("shlab").value = Math.round(shl);

    var sho = +dov / +tdm * +100; // share of overhead on total cost
    document.getElementById("shohead").value = Math.round(sho);
}

//AN APP THAT CALCULATES CURRENT RATIO

function currentRatio() {

    //variables  for current assets
    var stCapital = document.getElementById("stCapital").value;
    var debtors = document.getElementById("debtors").value;
    var inVentory = document.getElementById("inVentory").value;
    var cash = document.getElementById("cash").value;
    var otherAssets = document.getElementById("otherAssets").value;
    var assets = parseInt(stCapital) + parseInt(debtors) + parseInt(inVentory) + parseInt(cash) + parseInt(otherAssets);
    document.getElementById("aSsets").value = assets;

    //variables for current liabilities
    var bonds = document.getElementById("bonds").value;
    var creDitors = document.getElementById("creDitors").value;
    var overDraft = document.getElementById("overDraft").value;
    var otherLiab = document.getElementById("otherLiab").value;
    var liab = parseInt(bonds) + parseInt(creDitors) + parseInt(overDraft) + parseInt(otherLiab)
    document.getElementById("liAbilities").value = liab;

    //final calculation for current ratio = Current Assets / Current Liabilities
    var cRatio = parseInt(assets) / parseInt(liab);
    document.getElementById("cRatio").value = cRatio;

    if (cRatio < 1) {
        alert(`Ratio of assets to liabilities is ${Math.round(cRatio * 1000) / 1000}: 1 `);
    } else if (cRatio > 1) {
        alert(`Ratio of assets to liabilities is ${Math.round(cRatio * 1000) / 1000}: 1 `);
    }
}

//AN APP THAT CALCULATES QUICK RATIO

function qRatio() {
    var tAssets = document.getElementById("tAssets").value;
    var tStock = document.getElementById("tStock").value;
    var prePaid = document.getElementById("prePaid").value;
    var tLiab = document.getElementById("tLiab").value;
    var quickA = (+tAssets - +tStock - +prePaid) / tLiab;
    document.getElementById("quickA").value = quickA;
}

//AN APP THAT CALCULATES CASH RATIO

function cashRatio() {
    var cBank = document.getElementById("cBank").value;
    var secuRity = document.getElementById("secuRity").value;
    var liab2 = document.getElementById("liaBilities2").value;
    var cashRatios = (+cBank + +secuRity) / liab2;
    document.getElementById("cashRatios").value = cashRatios;
}

//AN APP THAT CALCULATES GROSS RATIO

function gRatio() {
    var gRevenue = document.getElementById("gRevenue").value;
    var gCost = document.getElementById("gCost").value;
    var gProfit2 = +gRevenue - +gCost;
    document.getElementById("gProfit2").value = gProfit2;
    var gRatios = (+gProfit2 / +gRevenue) * 100;
    document.getElementById("gRatios").value = Math.round(gRatios);
}


//AN APP THAT CALCULATES OPERATING RATIO

function opRatio() {
    var cgsold = document.getElementById("cgSold").value;
    var opex = document.getElementById("opEx").value;
    var sales40 = document.getElementById("sales40").value;
    var sales41 = document.getElementById("sales41").value;
    var net42 = +sales40 - sales41;
    document.getElementById("net42").value = net42;
    var opR = ((+cgsold + +opex) / +net42) * +100;
    document.getElementById("opR").value = Math.round(opR);
}

//AN APP THAT COMPUTES NET PROFIT RATIO

function netRatio() {
    var sales43 = document.getElementById("sales43").value;
    var sales44 = document.getElementById("sales44").value;
    var net45 = +sales43 - +sales44;
    document.getElementById("net45").value = net45;
    var ebit = document.getElementById("ebit").value;
    var tax46 = document.getElementById("tax46").value;
    var eat = +ebit - (+ebit * +tax46);
    document.getElementById("eat").value = eat;
    var nRatio = (+eat / +net45) * +100;
    document.getElementById("nRatio").value = Math.round(nRatio);
}


//AN APP THAT CALCULATES GDP

function gdp() {
    var gdpc = document.getElementById("gdpc").value;
    var gdpg = document.getElementById("gdpg").value;
    var gdpi = document.getElementById("gdpi").value;
    var gdpx = document.getElementById("gdpx").value;
    var gdpm = document.getElementById("gdpm").value;
    var gdpp = +gdpc + +gdpg + +gdpi + (+gdpx - +gdpm);
    document.getElementById("gdpgdp").value = gdpp;
    if (gdpp < 0) {
        document.getElementById("gdpVerdict").value = "Economic Recession";
        gdpVerdict.style.color = "red";
    } else if (gdpp > 0) {
        document.getElementById("gdpVerdict").value = "Stable Economy";
        gdpVerdict.style.color = "green";
    }
}

//AN APP THAT CALCULATES UNEMPLOYMENT RATE  (UPDATE THE VERDICT OUTPUT BEHAVIOUR)

function unEmploy() {
    var unemp = document.getElementById("unemp").value;
    var emp = document.getElementById("emp").value;
    var unRate = +unemp / +emp * +100;
    document.getElementById("unRate").value = unRate;

    if (unRate < 5) {
        document.getElementById("unVerdict").value = "Low Unemployment";
        unVerdict.style.backgroundColor = "green";
    } else if (unRate >= 5 && unRate <= 10) {
        document.getElementById("unVerdict").value = "Medium Unemployment";
        unVerdict.style.backgroundColor = "pink";
    } else if (unRate > 10) {
        document.getElementById("unVerdict").value = "High Unemployment";
        unVerdict.style.backgroundColor = "red";
    } else if (unRate === "" || emp === "" || unemp === "") {
        unVerdict.style.backgroundColor = none;
        document.getElementById("unVerdict").value = "";
        function noColor() {
            var reset = document.getElementById("reset");
            reset.addEventListener('click', () => {
                unVerdict.style.backgroundColor = "white";
            });
        }
        noColor();
    }
}


//AN APP THAT CALCULATES MONEY MULTIPLIER METRIC

function mmm() {
    var rRatio = document.getElementById("rRatio").value;
    var mMetric = +1 / +rRatio;
    document.getElementById("mMetric").value = Math.round(mMetric);
}


//AN APP THAT CALCULATES INVENTORY VELOCITY

function iVelocity() {
    var opStock = document.getElementById("opStock").value;
    var proj = document.getElementById("projSales").value;
    var iVelo = (+opStock / +proj) * +100;
    document.getElementById("iVelo").value = Math.round(iVelo);
}

//AN APP THAT CALCULATES PERFECT ORDER MEASUREMENT

function perfectOrder() {
    var tOrders = document.getElementById("tOrders").value;
    var eOrders = document.getElementById("eOrders").value;
    var pOrders = ((+tOrders - +eOrders) / +tOrders) * +100;
    document.getElementById("pOrders").value = pOrders;
    document.getElementById("pError").value = +100 - +pOrders;
    pError.style.color = "red";
}

//AN APP THAT CALCULATES INVENTORY TURNOVER RATIO

function itr() {
    var itrGoods = document.getElementById("itrGoods").value;
    var itrStock = document.getElementById("itrStock").value;
    var itrClosing = document.getElementById("itrClosing").value;
    var iTurn = +itrGoods / [(+itrStock - +itrClosing) / 2];
    document.getElementById("iturnOver").value = Math.round(iTurn);
}

//AN APP THAT CALCULATES CASH TO CASH CYCLE TIME - this finds the difference between dates basically.
function cashCycle() {

    //3 important methods used: new Date(), Math.abs() and date.getTime()
    var mpDate = document.getElementById("mPayment").value;
    var mpDate = new Date(mpDate);
    var cpDate = document.getElementById("cPayment").value;
    var cpDate = new Date(cpDate);
    var oneDay = +24 * +60 * +60 * +1000; //formula for one calendar day
    var diffDays = Math.abs((mpDate.getTime() - cpDate.getTime()) / (oneDay)); //Math.abs extracts the absolute values of the dates and date.getTime() converts them to integers
    document.getElementById("cashPayment").value = `${diffDays} days`;
}

//AN APP THAT CALCULATES GROSS MARGIN RETURN ON INVESTMENT

function gmri() {
    var roiGross = document.getElementById("roiGross").value;
    var roiOpening = document.getElementById("roiOpening").value;
    var roiClosing = document.getElementById("roiClosing").value;
    var roiReturn = +roiGross / [(+roiOpening - +roiClosing) / 2] * 100;
    document.getElementById("roiReturn").value = roiReturn;
}

//AN APP THAT CALCULATES ON-TIME SHIPPING RATE

function onTime() {
    var timely = document.getElementById('timely').value;
    var tItems = document.getElementById("totalItems").value;
    var shipRate = (+timely / +tItems) * 100;
    document.getElementById("shipRate").value = `${Math.round(shipRate)}%`;
    var lateShip = 100 - Math.round(shipRate);
    document.getElementById("lateShip").value = `${Math.round(lateShip)}%`;
}

//AN APP THAT CALCULATES FILL RATE AND SHOWS CUSTOMER SATISFACTION LEVEL

function fillRate() {
    var fillOrders = document.getElementById("fillOrders").value;
    var fillShip = document.getElementById("fillShip").value;
    var fill = [1 - ((+fillOrders - +fillShip) / +fillOrders)] * 100;
    document.getElementById("fill").value = `${Math.round(fill)}%`;
    var satis = document.getElementById("satis");
    //conditionals to pass verdict on customer satisfaction level
    if (fill >= 0 && fill <= 30) {
        satis.value = 'Extremely Low Satisfaction';
        satis.style.color = 'white';
        satis.style.backgroundColor = 'red';
    } else if (fill >= 31 && fill <= 50) {
        satis.value = 'Low Satisfaction';
        satis.style.color = 'white';
        satis.style.backgroundColor = 'tomato';
    } else if (fill >= 51 && fill <= 80) {
        satis.value = 'Average Satisfaction';
        satis.style.color = 'white';
        satis.style.backgroundColor = 'lightgreen';
    } else if (fill >= 81 && fill <= 100) {
        satis.value = "High Satisfaction";
        satis.style.color = "white";
        satis.style.backgroundColor = 'green';
    }
}

//AN APP THAT COMPUTES AVERAGE PAYMENT PERIOD FOR PRODUCTION MATERIALS

function payPeriod() {
    var mPayable = document.getElementById("mPayable").value;
    var cMaterials = document.getElementById("costMaterials").value;
    var dPeriod = document.getElementById("dPeriod").value;
    var apppm = (+mPayable / +cMaterials) * +dPeriod;
    document.getElementById('apppm').value = `${Math.round(apppm)} days`;
}

//AN APP THAT COMPUTES INVENTORY DAYS OF SUPPLY

function daySupply() {
    const onHand = document.getElementById("onHand").value;
    const useDaily = document.getElementById('usageDaily').value;
    const invDays = parseInt(onHand) / parseInt(useDaily);
    document.getElementById('invDays').value = Math.round(invDays);
}

//AN APP THAT COMPUTES FREIGHT COST PER UNIT
function costFreight() {
    const tFreight = document.querySelector('#freightTotal').value;
    const numItems = document.querySelector("#numItems").value;
    const freightUnit = parseInt(tFreight) / parseInt(numItems);
    document.getElementById('freightUnit').value = `$${freightUnit.toFixed(2)}`;
}

// FREIGHT BILL ACCURACY 
function errorFree() {
    const freightBill = document.getElementById("freightTotal2").value;
    const noError = document.getElementById("noError").value;
    const fba = ([parseInt(freightBill) / parseInt(noError)] * 100);
    document.getElementById("fba").value = `${Math.round(fba)}%`;
}

