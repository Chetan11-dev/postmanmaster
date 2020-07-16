export function isEmpty(param: any) {
    if (param == null || !param) {
        return true
    } else return false
}
export function notArraysEqual(a: any[], b: any[]) {
    return !arraysEqual(a, b)
}
export function removeItemOnce(arr: any[], value: any) {
    const index = arr.indexOf(value)
    const newarr = [...arr]
    if (index > -1) {
        newarr.splice(index, 1)
    }
    return newarr
}

export function removeItemAll(arr: any[], value: any) {
    let i = 0

    const newarr = [...arr]
    while (i < newarr.length) {
        if (newarr[i] === value) {
            newarr.splice(i, 1)
        } else {
            ++i
        }
    }
    return newarr
}

export function arraysEqual(a: any[], b: any[]) {
    if (a === b) return true
    if (a == null || b == null) return false
    if (a.length !== b.length) return false

    const ars = [...a].sort()

    const brs = [...b].sort()

    for (let i = 0; i < ars.length; ++i) {
        if (ars[i] !== brs[i]) return false
    }
    return true
}
type Empty = | null | undefined
export function isListEmpty(param: any[] | Empty) {
    if (isEmpty(param) || param!.length === 0) {
        return true
    } else return false
}

export function isListNotEmpty(param: any[] | Empty) {
    return !isListEmpty(param)
}
export function randomInteger(max = 10000000) {
    return Math.floor(Math.random() * (max))
}

export function isEmptyString(p: string | Empty) {
    if (isEmpty(p) || p!.trim().length === 0) {
        return true
    } else return false
}

export function isNotValidString(p: string | Empty) {
    return !isEmptyString(p)
}
export function createObFromList<A>(ls: string[], f: (v: string) => A) {
    const l: any = {}
    Object.assign({},)
    ls.forEach(e => {
        l[e] = f(e)
    })
    return l
}
// import { isEmpty, isListNotEmpty , isListEmpty,isInValidString ,createObFromList,isValidString} from '';import { type } from '../app/store'