import { Category } from './category';
export interface Details {
    title:string,
    description:string,
    category:cateDetails,
    price:number,
    ratingsAverage:number,
    images:string[],
    _id?:string

}
export interface cateDetails{
    name:string
}