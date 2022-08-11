import { getAllServices, getParkAreas, getAreaServices } from "./database.js"

const allService = getAllServices()
const parkAreas = getParkAreas()
const areaServices = getAreaServices()
/* if allService.name === areaService.serviceName
    and areaService.areaID === parkArea.id
     then print parkArea.name 
*/

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("areaServices")) {
            const [,serviceID] = itemClicked.id.split("--")

            for (const service of allService) {
                if (service.id === parseInt(serviceID)) {
                    const assignments = filterAreaServicesbyService(service)
                    const areas = assignedServiceID(assignments)
                    window.alert(`${service.name} is available in ${areas} `)
                }
            }
        }
    }
)

const filterAreaServicesbyService = (service) => {
    const assignments = []

    for (const assignment of areaServices) {
        if (assignment.serviceId === service.id) {
            assignments.push(assignment)
        }
    }
    return assignments
}

const assignedServiceID = (assignments) => {
    let serveNames = ""

        for (const assignment of assignments) {
            for (const area of parkAreas) {
                if (area.id === assignment.areaId ) {
                    serveNames = `${serveNames} and ${area.name}`
                }
            }
        }
    return serveNames
}



export const Services = () => {
    let html = "<section>Park services: "

    for (const service of allService) {
        html += `<span id="areaServices--${service.id}">${service.name}, </span>`
    }
    html +="</section>"

    return html
}