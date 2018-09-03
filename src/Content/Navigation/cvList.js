import {englishCV, germanCV} from '../CV/CV';
import {NotFound} from '../../Components/core/NotFound/Page404';

export const cvList = [
    {
        title: "English CV",
        url: "english-cv",
        component: englishCV
    },
    {
        title: "German CV",
        url: "german-cv",
        component: germanCV
    },
    {
        title: "Not Found",
        url: ":NotFound",
        component: NotFound
    }
]