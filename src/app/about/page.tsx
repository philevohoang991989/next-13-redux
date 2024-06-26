'use client'
import { useSelector } from "react-redux";

export default function AboutPage(){
    const cartItems = useSelector((state: any) => state.cart);
    console.log({cartItems});
    
    return(
        <div>About</div>
    )
}