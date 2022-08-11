const database = {
    parkAreas: [{
        id: 1,
        name: "Lodge"
    }, {
        id: 2,
        name: "Lost  Wolf Hiking Trail"
    }, {
        id: 3,
        name: "Chamfort River"
    }, {
        id: 4,
        name: "Gander River"
    }, {
        id: 5,
        name: "Campgrounds"
    }, {
        id:6,
        name: "Pine Bluff Trails"
    },],
    allServices: [{
        id: 1,
        name: "Canoeing",
    }, {
        id: 2,
        name: "Fishing",
    }, {
        id: 3,
        name: "Hiking",
    }, {
        id: 4,
        name: "Information",
    }, {
        id: 5,
        name: "Lodging"
    }, {
        id: 6,
        name: "Parking",
    }, {
        id: 7,
        name: "Picnicking",
    }, {
        id: 8,
        name: "Rafting",
    }, {
        id: 9,
        name: "Rock Climbing",
    }, {
        id: 10,
        name: "Zip Lines",
    }, ],
    areaServices: [{
        id: 1,
        areaId: 1,
        serviceId: 1
    }, {
        id: 2,
        areaId: 1,
        serviceId: 5
    }, {
        id: 3,
        areaId: 1,
        serviceId: 6 
    }, {
        id: 4,
        areaId: 1,
        serviceId: 7
    }, {
        id: 5,
        areaId: 2,
        serviceId: 3
    }, {
        id: 6,
        areaId: 2,
        serviceId: 7
    }, {
        id: 7,
        areaId: 2,
        serviceId: 9
    }, {
        id: 8,
        areaId: 3,
        serviceId: 1
    }, {
        id: 9,
        areaId: 3,
        serviceId: 2
    }, {
        id: 10,
        areaId: 3,
        serviceId: 8
    }, {
        id: 11,
        areaId: 4,
        serviceId: 2
    }, {
        id: 12,
        areaId: 4,
        serviceId: 3
    }, {
        id: 13,
        areaId: 5,
        serviceId: 1 
    }, {
        id: 14,
        areaId: 5,
        serviceId: 5
    }, {
        id: 15,
        areaId: 5,
        serviceId: 6 
    }, {
        id: 16,
        areaId: 6,
        serviceId: 3
    }, {
        id: 17,
        areaId: 6,
        serviceId: 7
    }, {
        id: 18,
        areaId: 6,
        serviceId: 10
    }, ],
    parkGuests: [{
        id: 1,
        name: "Alphonse Meron",
        areaId: 3
    }, {
        id: 2,
        name: "Damara Pentecust",
        areaId: 6
    }, {
        id: 3,
        name: "Anna Bowton",
        areaId: 5
    }, {
        id: 4,
        name: "Hunfredo Drynan",
        areaId: 1
    }, {
        id: 5,
        name: "Elmira Bick",
        areaId: 3
    }, {
        id: 6,
        name: "Bernie Dreger",
        areaId: 2
    }, {
        id: 7,
        name: "Rolando Gault",
        areaId: 4
    }, {
        id: 8,
        name: "Tiffanie Tubby",
        areaId: 5
    }, {
        id: 9,
        name: "Tomlin Cutill",
        areaId: 1
    }, {
        id: 10,
        name: "Arv Biddle",
        areaId: 3
    }]
}

export const getParkAreas = () => {
    return database.parkAreas.map(parkArea => ({...parkArea}))
}

export const getAreaServices = () => {
    return database.areaServices.map(areaService => ({...areaService}))
}

export const getParkGuests = () => {
    return database.parkGuests.map(parkGuest => ({...parkGuest}))
}

export const getAllServices = () => {
    return database.allServices.map(allService => ({...allService}))
}