import { KEY } from '../../constants/constants';
import { saveCardData } from './actions';
import { isLoading } from '../loader/actions';

export function fetchNewWords(array: string[]) {
    console.log('array равен: ', array);
    return (dispatch: any) => {
        const results = array.map((el: string) => {
            return fetch(`https://www.dictionaryapi.com/api/v3/references/sd4/json/${el}?key=${KEY}`)
                .then((res: any) => res.json())
                .then((data) => formatCardData(data))
        });
        Promise.all(results)
            .then((data) => dispatch(saveCardData(data)))
            .then(() => dispatch(isLoading(false)))
            .catch((error) => console.log(`error:`, error))
    }
}

function formatCardData(data: any[]) {
    const serverResponse = data[0];
    console.log(`serverResponse`, serverResponse);

   return {title: serverResponse.meta.stems[0], description: serverResponse.shortdef[0]};
 //форматированные данные
}