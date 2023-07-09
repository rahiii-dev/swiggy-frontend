export interface Geofencezones {
    geofences: [
        {
            tag: string
            description: string
            type: string
            geometry: {
                coordinates: [
                    [number, number]
                ]
                type: string
            }
            geometryCenter: {
                coordinates: {
                    0: number
                    1: number
                }
            }
        }
    ]
}
