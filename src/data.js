import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart,faTerminal, faChalkboardTeacher, faUserGraduate} from '@fortawesome/free-solid-svg-icons'

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
    ],

    "timeline":[
        {
            "key":1,
            "icon":<FontAwesomeIcon icon={faTerminal} size="2x" className="icon" />,
            "year":"1988",
            "description1":"Met a MSX computer system of a friend.",
            "description2":"First contact with code.",
            "padding":""
        },
        {
            "key":2,
            "icon":<FontAwesomeIcon icon={faHeart} size="2x" className="icon" />,
            "year":"1984",
            "description1":"Won my atari 2600.",
            "description2":"Start the passion for games.",
            "padding":""
        },        
        {
            "key":3,
            "icon":<FontAwesomeIcon icon={faChalkboardTeacher} size="2x" className="icon" />,
            "year":"1998",
            "description1":"Visual Basic Teacher",
            "description2":"",
            "padding":""
        },        
        {
            "key":4,
            "icon":<FontAwesomeIcon icon={faUserGraduate} size="2x" className="icon" />,
            "year":"1997",
            "description1":"Data Processing Technician Degree",
            "description2":"Basic, Pascal, Dbase, Visual Basic, etc",
            "padding":""
        },        
        {
            "key":5,
            "icon":<FontAwesomeIcon icon={faChalkboardTeacher} size="2x" className="icon" />,
            "year":"2005",
            "description1":"Web Designer Fulltime Job",
            "description2":"Mostly working with HTML, javascript, ASP and ActionScript. Creating websites for real estate agencies and photographers",
            "padding":"360px"
        },        
        {
            "key":6,
            "icon":<FontAwesomeIcon icon={faUserGraduate} size="2x" className="icon" />,
            "year":"2003",
            "description1":"Computer Engineering Degree",
            "description2":"Deep Concepts of UML, OOP, Digital Systems, Networking, etc. Intership in a big sanitation company in Brazil (SABESP)",
            "padding":""
        }
    ]
}