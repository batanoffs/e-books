export interface IStationerySchema {
    title: string;
    price: number;
    description: string;
    coverImage: Buffer; //TODO update logic for multiple images
    coverImageType: String;
    stock: number;
    category: string;
    createdAt: Date;
}
