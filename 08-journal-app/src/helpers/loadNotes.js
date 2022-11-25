import { Notes } from "@mui/icons-material";
import { collection, getDocs } from "firebase/firestore";
import { FireBaseDB } from "../firebase";

export const loadNotes = async ( uid = '' ) => {
    if ( !uid ) throw new Error('The User UID is not defined.');

    const collectionRef = collection( FireBaseDB, `${ uid }/journal/notes` );
    const docs = await getDocs( collectionRef );
    
    const notes = [];
    docs.forEach( doc => {
        notes.push({ id: doc.id, ...doc.data() });
    });
    return notes;
}