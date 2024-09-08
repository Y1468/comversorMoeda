import axios from 'axios'

//8148|lZOjl7oxhX0W1E2sg1OaFNT3iCUXEgcL
//https://api.invertexto.com/v1/currency/BRL_USD?token=

export const api=axios.create({
    baseURL:'https://api.invertexto.com/v1'
})