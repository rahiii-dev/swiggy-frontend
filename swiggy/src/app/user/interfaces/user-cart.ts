export interface UserCart {
    id: number
    cart_items: [
        {
            id: number
            cuisine: {
                cuisine: string
                price: string
                cuisine_type: string
            }
            quantity: number 
        }
    ],
    restaurant: {
        name: string
        slug: string
    }
    userid: string
    // "created_at": "2023-02-27T14:44:58.105390Z",
    // "updated_at": "2023-02-27T14:44:58.147382Z",
    items_count: number
    item_total: number
    delivery_fee: number
    cart_total: number
}
