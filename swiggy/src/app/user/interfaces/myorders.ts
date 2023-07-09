export interface Myorders {
    data : [
        {
            id: number
            order: [
                {
                    id: number
                    quantity: number
                    cusine: number
                    ordered_item: string
                }
            ]
            order_status: string
            user: string
            restaurant: string
        }
    ]
}
