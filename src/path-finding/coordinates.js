export function getCoordinatesFromClassList(lst) {
        let [row, column]= [lst[0].substring(1), lst[1].substring(1)]
        return [parseInt(row, 10), parseInt(column, 10)]
}
