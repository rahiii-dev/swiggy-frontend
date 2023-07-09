export interface RadarInterface {
    addresses: [
        {
            city: string;
            state: string;
            placeLabel: string;
            formattedAddress: string;
            latitude: number;
            longitude: number
        }
    ];
    meta: {
        code: number;
    }
}
