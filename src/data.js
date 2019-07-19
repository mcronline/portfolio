const imgsList = (prefix,n) => {
    let arr = [];
    for(let i = 1; i <= n; i++)
        arr.push(require(`./images/${prefix}_${i}.jpg`))

    return arr;
}

export default {
    "resume" : [
        "Computer Engineering and Information Security degree",
        "More than 25 years of programming experience",
        "Full stack web developer / Internet Entrepreneur",
        "Backend : Node.js; next(), Python; next(), PHP",
        "Frontend => Javascript, React, Jquery",
        "UI : { HTML ; SCSS }",
        "Wordpress Developer Expert"        
    ],
    "portfolio" : [
        {
            "key":1,
            "title" : "Imóveis Expert",
            "skills" : "Javascript, Bootstrap, Jquery, PHP, MySQL, Wordpress",
            "description" : "Personal project focused on real state agencies and realtors needs, delivering real state management and CRM.",
            "thumb" : require("./images/imoveis_expert_portfolio.jpg"),
            "link" : "www.imoveis.expert",
            "imgs" : imgsList('port_imoveis_expert',9)
        },
        
        {
            "key":4,
            "title" : "Qual o CEP?",
            "skills" : "Javascript, Bootstrap, Jquery, PHP, MySQL",
            "description" : "Personal project focused on address search in Brazil. Payment service integration (PagSeguro)",
            "thumb" : require("./images/qualocep_portfolio.jpg"),
            "link" : "www.qualocep.com",
            "imgs" : imgsList('port_qualocep',3)
        },
        {
            "key":2,
            "title" : "Ortoriso",
            "skills" : "Wordpress",
            "description" : "Website for a dentistry clinic in Brazil.",
            "thumb" : require("./images/ortoriso_portfolio.jpg"),
            "link" : "www.ortorisolitoral.com.br",
            "imgs" : imgsList('port_ortoriso',6)
        },
        {
            "key":3,
            "title" : "CR Construção",
            "skills" : "Wordpress",
            "description" : "Website for a construction company in Brazil.",
            "thumb" : require("./images/crconstrucao_portfolio.jpg"),
            "link" : "www.crconstrucao.com",
            "imgs" : imgsList('port_crconstrucao',7)
            
        },
        {
            "key":5,
            "title" : "Codepen Projects",
            "skills" : "Javascript, ReactJs",
            "description" : "Projects for programming skills development and certification",
            "thumb" : require("./images/codepen_portfolio.jpg"),
            "link" : "codepen.io/mcronline/",
            "imgs" : imgsList('port_codepen',5)
        },
        {
            "key":6,
            "title" : "Certifications",
            "skills" : "Computer Engineering, Information Security, Front and Backend Web Development",
            "description" : "My tecnology certifications",
            "thumb" : require("./images/certs_portfolio.jpg"),
            "link" : "",
            "imgs" : imgsList('port_cert',5)
        }
    ]
}