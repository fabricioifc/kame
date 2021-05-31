const getBandeirasRemote = async (quantidade = 20) => {
  let bandeiras = [];

  const response = await fetch("https://flagcdn.com/en/codes.json");
  const json = await response.json();
  let codes = Object.keys(json);
  codes.sort(() => Math.random() - 0.5);
  codes = codes.slice(0, quantidade - 1);

  codes.forEach((item) => {
    bandeiras.push({
      code: item,
      contestado: false,
      image: `https://flagcdn.com/108x81/${item}.webp`,
    });
  });

  bandeiras.push({
    code: "contestado",
    contestado: true,
    image: require("@/assets/bandeiras/band_contestado.png"),
  });

  bandeiras.sort(() => Math.random() - 0.5);
  // console.log(bandeiras);
  return bandeiras;
};

export default getBandeirasRemote;
