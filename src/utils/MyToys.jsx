import {toast } from 'react-toastify';
export const handleDate = (date) => {
   return date.length > 100 ? date.subString(0, 100) + "..." : date
}
export const notifiSuccess = (str) => {
   toast.success("🦄" + str.toUpperCase());
 }

 export const notifiError = (str) => {
   toast.error("🦄" + str.toUpperCase());
 }