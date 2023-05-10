interface Star {
    id: number
    name: string
    desc?: string
    designer: string
    pictrue: string
    remainder: number
    startTime: string
    stopTime: string
    total: number
}

interface collection {
    KindId:string
    Desc: string
    Designer: string
    Name: string
    Picture: string
    Remainder: number
    StartTime: string
    StopTime: string
    Total: number
}
interface ownedCollection{
    Contarct: string
    Desc: string
    Designer: string
    Id: number
    Name: string
    Owner:string
    Picture:string
    StartTime: string
    StopTime: string
}
