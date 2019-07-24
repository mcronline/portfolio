import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart,faTerminal, faCode, faChalkboardTeacher, faUserGraduate, faUserShield, faUserTie} from '@fortawesome/free-solid-svg-icons'

const imgsList = (prefix,n) => {
    let arr = [];
    for(let i = 1; i <= n; i++)
        arr.push(require(`./images/${prefix}_${i}.jpg`))

    return arr;
}

export default {
    
    "menu" : [

        {
            'label':'Intro',
            'link':''
        },
        {
            'label':'Portfolio',
            'link':''
        },
        {
            'label':'Curriculum',
            'link':''
        },
        {
            'label':'Contact',
            'link':''
        }
    ],

    "resume" : [
        "Computer Engineering and Information Security degree",
        "More than 25 years of programming experience",
        "Full stack web developer / Internet Entrepreneur",
        "Backend : Nodejs, PHP",
        "Frontend => Javascript, React, Jquery",
        "UI { <HTML /> : SCSS : Bootstrap : Semantic UI }",
        "Wordpress Developer Expert",
        "Languages: Portuguese (Native), English (fluent)"
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
            "spacing":""
        },
        {
            "key":2,
            "icon":<FontAwesomeIcon icon={faHeart} size="2x" className="icon" />,
            "year":"1984",
            "description1":"Won my atari 2600.",
            "description2":"Start the passion for eletronics.",
            "spacing":""
        },        
        {
            "key":3,
            "icon":<FontAwesomeIcon icon={faChalkboardTeacher} size="2x" className="icon" />,
            "year":"1998",
            "description1":"Visual Basic Teacher",
            "description2":"",
            "spacing":""
        },        
        {
            "key":4,
            "icon":<FontAwesomeIcon icon={faUserGraduate} size="2x" className="icon" />,
            "year":"1997",
            "description1":"Data Processing Technician Degree",
            "description2":"Basic, Pascal, Dbase, Visual Basic, etc.",
            "spacing":""
        },        
        {
            "key":5,
            "icon":<FontAwesomeIcon icon={faCode} size="2x" className="icon" />,
            "year":"2005",
            "description1":"First Web Dev Fulltime Job",
            "description2":"Working with HTML, CSS, javascript, ASP and ActionScript. Creating websites and CMS for real estate agencies, car dealers and photographers.",
            "spacing":"400px"
        },        
        {
            "key":6,
            "icon":<FontAwesomeIcon icon={faUserGraduate} size="2x" className="icon" />,
            "year":"2003",
            "description1":"Computer Engineering Degree",
            "description2":"Deep Concepts of UML, OOP, Digital Systems, Networking, etc. Intership in a big sanitation company in Brazil (SABESP).",
            "spacing":""
        },        
        {
            "key":7,
            "icon":<FontAwesomeIcon icon={faUserTie} size="2x" className="icon" />,
            "year":"2007",
            "description1":"First Internet Venture",
            "description2":"Quit last job to create an app for real estate businesses. Couldn't continue due to Lack of finacial resources and bills to pay.",
            "spacing":"400px"
        },        
        {
            "key":8,
            "icon":<FontAwesomeIcon icon={faCode} size="2x" className="icon" />,
            "year":"2006",
            "description1":"Web Dev - Wsoma",
            "description2":"Working with HTML, CSS, Javascript, ASP. Mostly coding for big TV company in Brazil (Rede Globo), and a travel agency (SAKURA TUR).",
            "spacing":""
        },        
        {
            "key":9,
            "icon":<FontAwesomeIcon icon={faUserShield} size="2x" className="icon" />,
            "year":"2009",
            "description1":"Information Security Analyst - Cipher (now Prosegur)",
            "description2":"First job on information security. Worked on the network security of companies like GOL Airlines, Cielo and Tivit.",
            "spacing":"450px"
        },
        {
            "key":10,
            "icon":<FontAwesomeIcon icon={faCode} size="2x" className="icon" />,
            "year":"2007",
            "description1":"Web Dev - Securstar",
            "description2":"Working with HTML, CSS, Javascript, PHP. Worked on the company website, internal management systems and CRM (SugarCRM). Got interested in information security, and started a graduation degree.",
            "spacing":""
        },        
        {
            "key":11,
            "icon":<FontAwesomeIcon icon={faUserShield} size="2x" className="icon" />,
            "year":"2011",
            "description1":"Aplication Security Specialist - Claro",
            "description2":"Latin America biggest telecomunication company. Worked mostly on internal and third party aplication security analysis. Quit after 3 years, mostly because of travel burnout",
            "spacing":"400px"
        },
        {
            "key":12,
            "icon":<FontAwesomeIcon icon={faUserGraduate} size="2x" className="icon" />,
            "year":"2010",
            "description1":"Information Security Specialist Degree",
            "description2":"Deep knowledge on applying and managing network and aplication security projects.",
            "spacing":""
        },        
        {
            "key":13,
            "icon":null
        },
        {
            "key":14,
            "icon":<FontAwesomeIcon icon={faUserTie} size="2x" className="icon" />,
            "year":"2014 - Now",
            "description1":"Created 2 online business. Freelance worker",
            "description2":"Created and maintain a revamped real estate app (imoveis.expert) and an address search website (qualocep.com), and working as a freelance developer.",
            "spacing":""
        }

    ],
    'contact':[
        'Thank you for comming!',
        'Do you need to CREATE, BUILD, FIX something?',
        '(or just make a friend?)',
        'You can find me here'        
    ]
}