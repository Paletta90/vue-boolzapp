var app = new Vue({
    el: '#root',

    data: {

        // Oggetto profilo
        user: {
            nome: 'Davide',
            avatar: '_io'
        },
        // data: this.dateToday(),
        // Booleano per cambiare colore microfono
        mouseHovered: false,
        // Dato che gestisce quale user è stato cliccato
        whoUser: 0,
        // Stringa per ricerca utenti
        stringSearchUser: '',
        // Nuovo messaggio
        newText: '',
        

        contacts: [{
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ]

    },

    methods: {

        //Ritorno l'indice dello user selezionato
        userClicked: function (index) {
            this.whoUser = index;
            // return this.whoUser;
        },

        // Funzione per ricerca utente
        searchUser: function (string) {
            // Per ogni lettera che viene individuata ritorna ++
            if (string.indexOf(this.stringSearchUser.toUpperCase()) > -1) {
                // stringSearchUser = '';
                return true
            } else {
                return false
            }
        },

        // Funzione risposta message 'Ok'
        printAnswer: function () {
            let objSent = {
                date: this.newDate(),
                message: 'Ok',
                status: 'sent'
            }
            this.contacts[this.whoUser].messages.push(objSent)

        },
        // Funzione per stampare nuovo messaggio inserito
        printNewText: function (text) {

            let objReceived = {
                date: this.newDate(),
                message: text,
                status: 'received'
            }

            this.contacts[this.whoUser].messages.push(objReceived)
            setTimeout(this.printAnswer, 1000)

            this.newText = '';
        },

        // Funzione per creare una nuova data nel momento in cuo viene richiamata Data + Ora
        newDate: function(){
            //  Aggiungo uno zero davanti alle date da una cifra sola
             let day = dayjs().date()
             if(day <= 9){
                 day = '0' + day;
             }
             let month = dayjs().month() + 1
             if(month <= 9){
                 month = "0" + month
             }

             let hour = dayjs().hour()
             if(hour <= 9){
                 hour = "0" + hour
             }
             let minute = dayjs().minute()
             if(minute <= 9){
                 minute = "0" + minute
             }
             let second = dayjs().second()
             if(second <= 9){
                 second = "0" + second
             }
             var date = day + "/" + month + "/" + dayjs().year()
             var time = hour  + ":" + minute + ":" + second

             return String(date + " " + time)
        },

        // Data di oggi
        dateToday: function(){
            //  Aggiungo uno zero davanti alle date da una cifra sola
            let day = dayjs().date()

            if(day <= 9){
                day = '0' + day;
            }
            let month = dayjs().month() + 1
            if(month <= 9){
                month = "0" + month
            }

            return String( day + "/" + month + "/" + dayjs().year() );
        },

        // Funzione che ritorna l'orario dell'ultimo messaggio inviato/ricevuto
        lastTime: function(elem){
            let hour = elem.messages[elem.messages.length - 1].date.split(" ")[1].split(":");
            return String(hour[0] + ":" + hour[1])
        },
        // Funzione che ritorna la data e l'orario dell'ultimo messaggio inviato/ricevuto
        lastDateTime: function(elem){
            let data = elem.messages[elem.messages.length - 1].date.split(" ")[0]
            let hour = elem.messages[elem.messages.length - 1].date.split(" ")[1].split(":");
            return String(data + " " + "alle " + hour[0] + ":" + hour[1])
        },

         // Funzione per cancellare messaggio
         deleteMessage: function(elem){
            elem.status = ''
        },

        compareTwoDate: function(date){
            let lastDate = this.contacts[this.whoUser].messages[this.contacts[this.whoUser].messages.length - 1].date.split(" ")[0];

            if(lastDate == date){
                return true
            }
            return false
        }
        //Funzione per vedere quando è stato inviato 'ultimo messaggio
        // lastMessage: function(elem){
        //     let year = elem.messages[0].date.split("/")[2].split(" ")[0]
        //     let month = elem.messages[0].date.split("/")[1]
        //     let day = elem.messages[0].date.split("/")[0]
        //     let hour = elem.messages[0].date.split(" ")[1].split(":")[0]
        //     let minute = elem.messages[0].date.split(" ")[1].split(":")[1]
        //     let second = elem.messages[0].date.split(" ")[1].split(":")[2]
           
        //     for(let i = 1; i < elem.messages.length - 1; i++){

        //         if( year <= elem.messages[i].date.split("/")[2].split(" ")[0] ){
        //             year = 
        //         }

        //     }
        //     return String()
        // }

    }

})