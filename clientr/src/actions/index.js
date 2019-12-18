export const DEFAULT_LANG = 'DEFAULT_LANG';

// default function to display redux action format
export function defaultFunction() {
 

    // action object format being return to a reducer
    return {
        type:'DEFAULT_LANG',
        lang:'en',
        title: 'English'
    }
}