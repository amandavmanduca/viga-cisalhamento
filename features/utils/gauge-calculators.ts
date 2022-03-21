
export const CalculateGaugeS = (asw: number, gauge: number, type: number): number => {
    const gaugeArea = CalculateGaugeArea(gauge, type)
    const s = CalculateS(asw, gaugeArea)
    return s
}

export const CalculateGaugeArea = (gauge: number, type: number): number => {
    return (((3.14 * Math.pow((gauge/10), 2)) / 4) * type)
}

export const CalculateS = (asw: number, gaugeArea: number): number => {
    const perMeter = asw/gaugeArea
    return Math.floor(100/perMeter)
}

export const ValidateSMax = (twd: number, twu: number, d: number): number => {
    if (twd <= 0.67 * twu) {
        return Math.floor(Math.min((d * 0.6), 30))
    } else {
        return Math.floor(Math.min((d * 0.3), 20))
    }
}

export const setS = (scalc: number, smax: number): number => {
    return Math.min(scalc, smax)
}
