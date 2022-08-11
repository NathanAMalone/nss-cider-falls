import { getParkAreas, getAreaServices, getAllServices } from "./database.js"

const parkAreas = getParkAreas()
const areaServices = getAreaServices()
const allServices = getAllServices()


export const Areas = () => {
    let  html = "<section id='flexArea'>"

    for (const area of parkAreas) {
        html += `<div id="areas--${area.id}">${area.name}`
        for (const service of areaServices) {
            if (service.areaId === area.id) {
                for (const allServe of allServices)
                    if (allServe.id === service.serviceId)
            html += `<li id="service--${service.id}">${allServe.name}</li>`
            }
        }
        html += '</div>'
    }

    html += "</section>"

    return html
}

