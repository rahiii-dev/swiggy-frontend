export interface DelOrders {
    data: [
        {
            id: number
            order: [
                {
                    id: number
                    quantity: number
                    // "cusine": 9,
                    ordered_item: string
                }
            ]
            order_status: string
            user: string
            order_acccepted: boolean
        }
    ]
}
