import { getParkGuests, getParkAreas } from "./database.js"

const parkGuests = getParkGuests()
const parkAreas = getParkAreas()




const totalGuests = (area) => {
    let count = 0

    for (const guest of parkGuests) {
        if (guest.areaId === area.id) {
            count++
        }

    }

    return count
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("areas")) {
            const [,areaID] = itemClicked.id.split("--")

            for (const area of parkAreas) {
                    if (area.id === parseInt(areaID)) {

                        window.alert(`There are ${totalGuests(area)} guests in this area.`)

                    }   
                }            
            }
        }
)




export const Guests = () => {
    let html = "<ul>"

    for (const guest of parkGuests) {
        html += `<li id="guest--${guest.id}">${guest.name}</li>`
    }
    html += "</ul>"

    return html
}