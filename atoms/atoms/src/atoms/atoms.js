import { atom } from "recoil"

export const networkAtom = atom({
    key: "networkAtom",
    default: 99
})

export const jobAtom = atom({
    key: "jobAtom",
    default: 0
})


export const massageAtom = atom({
    key: "massageAtom",
    default: 12
})

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 0
})

export const totalNotificationSelector = atom({
    key: "totalNotificationSelector",
    value: ({get}) => {
        const networkAtom = get(networkAtom)
        const jobAtom = get(jobAtom)
        const massageAtom = get(massageAtom)
        const notificationAtom = get(notificationAtom)  
        return networkAtom + jobAtom + massageAtom + notificationAtom
    }
})

