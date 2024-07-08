export interface itemInterface {
    title: string,
    name: string,
    description: string,
    additionalInfo: {
        color: string
        brand: string
        content: string
        state: string
    },
    category: categoryType,
    location: string,
    reporter: string,
    type: 'lost' | 'found',
    imageUrl: string
}


export type categoryType = 'Phone' | 'Laptop' | 'Other electronics' | 'writing material' | 'Bag' | 'Document' | 'Shoe' | 'Clothing' | 'Jewelry' | 'Money' | 'Other wearables' | 'Others' 


export const defaultItem: itemInterface = {
    title: "",
    name: "",
    description: "",
    additionalInfo: {
        color: "",
        brand: "",
        content: "",
        state: ""
    },
    category: "Phone",
    location: "",
    reporter: "",
    type: "lost",
    imageUrl: ""
}