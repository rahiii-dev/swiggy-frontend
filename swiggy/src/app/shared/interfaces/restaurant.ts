export interface RestaurantInterface {
    id: number
    cuisines: [
        {
            id: number
            cuisine: string
            cuisine_type: string
            description: string
            image: string
            price: string
            stocks: number
        }
    ]
    address: string
    specials: string
    closes_at: string
    geofence_id: string
    image: string
    location: {
        latitude: number 
        longitude: number
    }
    name: string 
    opened: boolean
    opens_at: string
    rating: string
    slug: string
    ETA: {
        distance: {
            value: number,
            text: string
        },
        duration: {
            value: number,
            text: string
        }
    }
}
