import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                language : "language",
                whoareWe : "Teaches you how to make a damn good cup of coffee, The right way!",
                intro : "WHO WE ARE",
                header : "About Us",
                missionText : "Our Mission is to bring gaming to everyone",
                mission : "Our Mission"
                
            },
        },
        fr: {
            translation:{
                language : "Langue",
                whoareWe : "On vous apprend à faire une bonne tasse de café, de la bonne manière!",
                hello : "konichiwa",
                intro : "QUI NOUS SOMMES",
                header : "A propos de nous",
                mission : "Notre mission"
            },
        },
    },
    lng: localStorage.getItem("lng") || "en",
});


export default i18next;
