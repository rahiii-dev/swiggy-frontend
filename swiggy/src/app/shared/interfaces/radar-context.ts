import { Polygon } from "leaflet"

export interface RadarContext {
    context: {
        geofences: [
            {
                description: string
                externalId: string
                metadata: {
                    state: string
                    district: string
                }
                tag: string
                type: string
            }
        ]
    }
}
