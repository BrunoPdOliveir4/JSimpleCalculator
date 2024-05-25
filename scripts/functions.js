export function sum(items){
    let result = 0;
    items.forEach(element => {
        result += element;
    });
    return result;
}
export function sub(items){
    let result = 0;
    items.forEach(element => {
        result -= element;
    });
    return result;
}
