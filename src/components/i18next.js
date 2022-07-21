import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                home: "Home",
                whoareWe : "Teaches you how to make a damn good cup of coffee, The right way!",
                espresso : "If you want something done right you've got to do it yourself. For many of us, a cup of coffee is one of our most enjoyed rituals of the day. Having your own espresso machine gives you the chance to turn those everyday coffee grinds into an aromatic delight from the comfort of your own kitchen. These machines specialize in concentrated coffee that’s far more flavourful and full-bodied than the product of a standard drip coffee maker.",
                brewedd : "Traditional filter coffee makers have stood the test of time for their convenience and ability to brew large quantities of classic American-style coffee. Drip coffee makers are different from pour over and other types of coffee machines in that they're manual — the user gets to choose the heat of the water and brew the coffee. Plus, with today's rising coffee prices, nothing beats a homemade filter coffee.",
                mokapot : "The moka pot is a stove-top or electric coffee maker that brews coffee by passing boiling water pressurised by steam through ground coffee. Spreading from Italy, the moka pot is today most commonly used in Europe and in Latin America.",
                mission : "Our Mission"
                
            },
        },
        fr: {
            translation:{
                home: "Accueil",
                whoareWe : "On vous apprend à faire une bonne tasse de café, de la bonne manière!",
                espresso : "Si vous voulez que quelque chose soit bien fait, vous devez le faire vous-même. Pour beaucoup d'entre nous, une tasse de café est l'un des rituels les plus appréciés de la journée. Avoir sa propre machine à espresso permet de transformer le café moulu de tous les jours en un délice aromatique dans le confort de sa propre cuisine. Ces machines sont spécialisées dans la production d'un café concentré, beaucoup plus savoureux et corsé que le produit d'une machine à café goutte à goutte standard.",
                brewedd : "Les cafetières à filtre traditionnelles ont résisté à l'épreuve du temps pour leur commodité et leur capacité à préparer de grandes quantités de café classique à l'américaine. Les cafetières goutte à goutte se distinguent des machines à verser et des autres types de machines à café par le fait qu'elles sont manuelles - l'utilisateur choisit la température de l'eau et prépare le café. De plus, avec la hausse actuelle du prix du café, rien ne vaut un café filtre fait maison.",
                mokapot: "Le pot à moka est une cafetière électrique ou sur la cuisinière qui prépare du café en faisant passer de l'eau bouillante pressurisée par la vapeur à travers le café moulu. Venu d'Italie, le pot à moka est aujourd'hui plus couramment utilisé en Europe et en Amérique latine.",
                mission : "Notre mission"
            },
        },
    },
    lng: localStorage.getItem("lng") || "en",
});


export default i18next;
