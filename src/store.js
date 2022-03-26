import { reactive } from 'vue'

export const store = reactive({
    users: [
        {
            firstName: 'Vardenis',
            lastName: 'Pavardenis',
            email: 'pavardenisvardenis@outlook.com',
            country: 'Lithuania',
            address: 'Gatvė g., 11, Vilnius'
        },
        {
            firstName: 'Gedvinas',
            lastName: 'Gedvinaitis',
            email: 'gedvinas@gmail.com',
            country: 'Germany',
            address: 'Peter Bauer, Rosenweg 20, 12345 Berlin'
        },
    ]
})