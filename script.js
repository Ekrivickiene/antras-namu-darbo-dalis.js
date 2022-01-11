var Ispanija = {
  salis: "Ispanija",
  plotas: 505990,
  gyventojai: 47450795
};

var Italija = {
  salis: "Italija",
  plotas: 301338,
  gyventojai: 60317116
};

var Cekija = {
  salis: "Cekija",
  plotas: 78871,
  gyventojai: 10701777
};

var Rumunija = {
  salis: "Rumunija",
  plotas: 238397,
  gyventojai: 19317984
};

var Slovakija = {
  salis: "Slovakija",
  plotas: 48845,
  gyventojai: 5433157
};

function suskaiciuotiPlotaGyventojui( plotas, gyventojai, salis ) {
  console.log("Salis: ", salis, " joje gyvena ", gyventojai, " mln. gyventoju.");
  console.log("Valstybes plotas: ", plotas, " km2, plotas tenkantis vienam gyventojui: ",
              (plotas * 1000000 / gyventojai).toFixed(2), " m2");
}

suskaiciuotiPlotaGyventojui(Ispanija.plotas, Ispanija.gyventojai, Ispanija.salis);
suskaiciuotiPlotaGyventojui(Italija.plotas, Italija.gyventojai, Italija.salis);
suskaiciuotiPlotaGyventojui(Cekija.plotas, Cekija.gyventojai, Cekija.salis);
suskaiciuotiPlotaGyventojui(Rumunija.plotas, Rumunija.gyventojai, Rumunija.salis);
suskaiciuotiPlotaGyventojui(Slovakija.plotas, Slovakija.gyventojai, Slovakija.salis);
