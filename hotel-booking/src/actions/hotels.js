import axios from "axios";

export const allHotels = async () => 
    await axios.get(`${import.meta.env.VITE_APP_API}/hotels`); 


    export const diffDays = (from ,to) => {
        const day = 24 * 60 * 60 * 1000;
        const start = new Date(from);
        const end = new Date(to);
        const difference = Math.round(Math.abs((start - end) / day));
        return difference;
    }

export const getHotelById = async (hotelId) => 
    await axios.get(`${import.meta.env.VITE_APP_API}/hotel/${hotelId}`);