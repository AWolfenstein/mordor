export const CHANGE_LANG = 'CHANGE_LANG';

export function changelangFunction(lang,title) {
    return {
        type:'CHANGE_LANG',
        lang,
        title
    }
}