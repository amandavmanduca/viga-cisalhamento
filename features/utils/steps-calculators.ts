
export const CalculateVd = (vk: number): number => {
    return vk * 1.4
}

export const CalculateTwd = (vd: number, bw: number, d: number): number => {
    return ((vd * 10)/(bw * d))
}

export const CalculateTwu = (fck: number): number => {
    const alfa = (1 - (fck / 250))
    const fcd = fck / 1.4
    return (0.27 * alfa * fcd)
}

export const ValidateCompression = (twd: number, twu: number): boolean => {
    if (twd <= twu) {
        return true
    } else {
        return false
    }
}

export const CalculateTc = (fck: number): number => {
    return 0.09 * Math.pow(fck, (2/3))
}

export const CalculateTd = (twd: number, tc: number): number => {
    if (twd > tc) {
        return 1.1 * (twd - tc)
    } else {
        return 0
    }
}

export const CalculateAsw = (td: number, fyk: number, bw: number): number => {
    const fyd = Math.min((fyk/1.15), (500/1.15))
    if (td > 0) {
        return (100 * bw * td) / fyd
    } else {
        return 0
    }
}

export const CalculateAswMin = (fck: number, bw: number): number => {
    let romin
    switch (fck) {
        case 20:
            romin = 0.09/100
          break;
        case 25:
            romin = 0.10/100
          break;
        case 30:
            romin = 0.12/100
          break;
        case 35:
            romin = 0.13/100
          break;
        default:
          romin = 0
    }
    return (romin * 100 * bw)
}

export const setAsw = (asw: number, aswmin: number): number => {
    return Math.max(asw, aswmin)
}