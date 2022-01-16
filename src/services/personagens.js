const getPersonagensRemote = async (quantidade = 7) => {
    let personagens = [];   
    let json = [              
                    {
                        "code": 1,
                        "image": require("@/assets/images/Personagens/bonifacio.jpg")
                    }, 
                    {
                        "code": 2,
                        "image": require("@/assets/images/Personagens/frei_rogerio.jpg")
                    },
                    {
                        "code": 3,
                        "image": require("@/assets/images/Personagens/jose_maria.jpg")
                    }, 
                    {
                        "code": 4,
                        "image": require("@/assets/images/Personagens/joao_teixeira.jpg")
                    },
                    {
                        "code": 5,
                        "image": require("@/assets/images/Personagens/joao.png")
                    }, 
                    {
                        "code": 6,
                        "image": require("@/assets/images/Personagens/teodora.png")
                    },
                    {
                        "code": 7,
                        "image": require("@/assets/images/Personagens/percival.jpg")
                    }
                ]

    json.forEach((item) => {
        personagens.push({
            code: item.code,
            contestado: false,
            image: item.image
        })
    })

    personagens.push({
        code: 99,        
        contestado: true,
        image: require("@/assets/images/Personagens/joao_maria.jpg")
    })

    personagens.sort(() => Math.random() - 0.5);

    return personagens;
  };
  
  export default getPersonagensRemote;  