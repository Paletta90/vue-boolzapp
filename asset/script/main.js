var app = new Vue({
    el: '#root',

    data: {

        // Oggetto profilo
        user: {
            nome: 'Davide',
            avatar: '_io'
        },

        emojRange: [
            [128507, 128517]
        ],
        // Booleano per schermata iniziale
        initial: false,
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
                    }
                ],
            }
        ]

    },

    created(){
        console.log(dayjs().get('hour'))
    },
    methods: {

        //Ritorno l'indice dello user selezionato
        userClicked: function (index) {
            this.whoUser = index;
            this.initial = true;
        },

        // Funzione per ricerca utente
        searchUser: function (string) {
            // Per ogni lettera che viene individuata ritorna la posizione
            if (string.indexOf(this.stringSearchUser.toUpperCase()) > -1) {
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
                status: 'received'
            }
            this.contacts[this.whoUser].messages.push(objSent)

        },
        // Funzione per stampare nuovo messaggio inserito
        printNewText: function (text) {

            let objReceived = {
                date: this.newDate(),
                message: text,
                status: 'sent'
            }

            this.contacts[this.whoUser].messages.push(objReceived)

            // Faccio stampare la risposta 'Ok' con un secondo di ritardo
            setTimeout(this.printAnswer, 1000)

            this.newText = '';
        },

        // Data di oggi dd/mm/yyyy
        dateToday: function () {

            //  Aggiungo uno zero davanti alle date da una cifra sola
            let day = dayjs().date()
            if (day <= 9) {
                day = '0' + day;
            }

            let month = dayjs().month() + 1
            if (month <= 9) {
                month = "0" + month
            }

            return String(day + "/" + month + "/" + dayjs().year());
        },

        // Data e ora corrente dd/mm/yyyy hh:mm:ss
        newDate: function () {

            // Aggiunzo zero davanti ai numero minori di 9
            let hour = dayjs().hour()
            if (hour <= 9) {
                hour = "0" + hour
            }
            let minute = dayjs().minute()
            if (minute <= 9) {
                minute = "0" + minute
            }
            let second = dayjs().second()
            if (second <= 9) {
                second = "0" + second
            }
            var time = hour + ":" + minute + ":" + second

            return String(this.dateToday() + " " + time)
        },


        // Funzione che ritorna l'orario dell'ultimo messaggio inviato/ricevuto hh:mm
        lastTime: function (elem) {

            // Ultimo indice dell'array
            let lastIndex = elem.messages.length - 1;

            let hour = elem.messages[lastIndex].date.split(" ")[1].split(":");

            // Ritorno una stringa nel formato hh:mm
            return String(hour[0] + ":" + hour[1])

        },

        // Funzione che ritorna la data e l'orario dell'ultimo messaggio inviato/ricevuto dd/mm/yyyy hh/mm
        lastDateTime: function (elem) {

            // Ultimo indice dell'array
            let lastIndex = elem.messages.length - 1;

            let data = elem.messages[lastIndex].date.split(" ")[0]

            return String(data + " " + "alle " + this.lastTime(elem))

        },

        // Funzione per cancellare messaggio
        deleteMessage: function (elem) {
            elem.status = 'delete'
        },

        // Confronta una data con l'ultima data di invio/ricevuta. Se uguali ritorna true
        compareTwoDate: function (date) {

            // Ultimo indice dell'array
            let lastIndex = this.contacts[this.whoUser].messages.length - 1;

            // Seleziono solo la data dd/mm/yyyy
            let lastDate = this.contacts[this.whoUser].messages[lastIndex].date.split(" ")[0];

            if (lastDate == date) {
                return true
            }
            return false
        }

    }

})