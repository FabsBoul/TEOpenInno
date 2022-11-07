/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.onEnterLayer('InfoRoom1').subscribe(() => {
        currentPopup = WA.ui.openPopup("InfoRoom1","Bienvenue dans la salle -BOOTCAMP- où 2 indices sont à trouver !  Rapprochez-vous de John et son chat pour plus d’informations !" ,[]);
    })
    WA.room.onLeaveLayer('InfoRoom1').subscribe(closePopup)

    WA.room.onEnterLayer('InfoRoom2').subscribe(() => {
        currentPopup = WA.ui.openPopup("InfoRoom2","Bienvenue dans la salle -CINEMA- où 4 indices sont à trouver ! Rapprochez-vous de Yann pour plus d’informations !" ,[]);
    })
    WA.room.onLeaveLayer('InfoRoom2').subscribe(closePopup)

    WA.room.onEnterLayer('InfoRoom3').subscribe(() => {
        currentPopup = WA.ui.openPopup("InfoRoom3","Bienvenue dans la salle -IT Tech Lab- où 1 indice est à trouver. Rapprochez-vous de Manu pour plus d’informations !" ,[]);
    })
    WA.room.onLeaveLayer('InfoRoom3').subscribe(closePopup)

    WA.room.onEnterLayer('InfoRoom4').subscribe(() => {
        currentPopup = WA.ui.openPopup("InfoRoom4","Bienvenue dans la salle -STATIONT&VOUS- où 4 indices sont à trouver. Rapprochez-vous de Marc et son chien Timon pour plus d’informations !" ,[]);
        
    })
    WA.room.onLeaveLayer('InfoRoom4').subscribe(closePopup)

    WA.room.onEnterLayer('InfoRoom5').subscribe(() => {
        currentPopup = WA.ui.openPopup("InfoRoom5","Ici, pas d’indice à trouver. Testez vos connaissances sur l’environnement (n’hésitez pas à vous entraider en zone jitsi).  Donnez le meilleur de vous-même dans ce jeu et repartez (peut-être) avec un des cadeaux !  Seuls les deux participants avec les meilleurs scores gagnent. A vous de jouer…" ,[]);
    })
    WA.room.onLeaveLayer('InfoRoom5').subscribe(closePopup)

    WA.room.onEnterLayer('InfoRoom6').subscribe(() => {
        currentPopup = WA.ui.openPopup("InfoRoom6","Bienvenue dans la salle -KEEPINTOUCH- où vous avez à trouver 1 indice. Rapprochez-vous de Sonia pour plus d’informations !" ,[]);
    })
    WA.room.onLeaveLayer('InfoRoom6').subscribe(closePopup)

    WA.room.onEnterLayer('InfoQuizz').subscribe(() => {
        currentPopup = WA.ui.openPopup("InfoQuizz","Bienvenue dans la salle -VOTRE AVIS NOUS INTERESSE!-. Vous avez normalement trouvé tous les indices. Félicitations. Nous vous invitons à prendre quelques minutes pour répondre à ce petit formulaire pour nous partager vos retours sur l’atelier et pourquoi pas vos envies pour les prochains. Merci, L’équipe Open Innovation." ,[]);
    })
    WA.room.onLeaveLayer('InfoQuizz').subscribe(closePopup)

    WA.room.onEnterLayer('InfoAcceuil').subscribe(() => {
        currentPopup = WA.ui.openPopup("InfoAcceuil","Bienvenue dans le Clued'Inno!  Votre mission n'est pas de découvrir qui a tué Mlle Rose dans la bibliothèque avec le chandelier mais de découvrir un parcours et des indices sur les apports de l'Open Innovation en interne. Si vous avez besoin d’aide, n’hésitez pas à retourner dans le Teams et nous envoyer un message." ,[]);
    })
    WA.room.onLeaveLayer('InfoAcceuil').subscribe(closePopup)


    WA.room.onEnterLayer('Stationetvous').subscribe(() => {
        WA.nav.openTab('https://stationtetvous.totalenergies.fr/fr');
    })

    

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
