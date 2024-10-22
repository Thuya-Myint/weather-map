import { atom } from "recoil";
export const weatherState = atom({
    key: 'weatherState',
    default: {}
})
export const cityState = atom({
    key: 'cityState',
    default: 'Okinawa',


})
export const dateState = atom({
    key: 'dateState',
    default: new Date().toISOString().split('T')[0]
})

export const latLonState = atom({
    key: 'latLonState',
    default: {
        lat: 26.3358,
        lon: 127.8014,
    }
})
export const unitState = atom({
    key: 'unitState',
    default: true
})
export const searchState = atom({
    key: 'searchState',
    default: false
})
