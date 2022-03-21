import { CalculateGaugeS, setS, ValidateSMax } from "./gauge-calculators"
import {
    CalculateAsw,
    CalculateAswMin,
    CalculateTc,
    CalculateTd,
    CalculateTwd,
    CalculateTwu,
    CalculateVd,
    setAsw,
    ValidateCompression
} from "./steps-calculators"

type Props = {
    vk: number,
    bw: number,
    d: number,
    fck: number,
    fyk: number,
    gauge: number,
}

export const beamCalculator = ({
    vk,
    bw,
    d,
    fck,
    fyk,
    gauge,
}: Props): string => {
    if (vk && bw && d && fck && fyk && gauge) {
        const vd = CalculateVd(vk)
        const twd = CalculateTwd(vd, bw, d)
        const twu = CalculateTwu(fck)
        const validateCompression = ValidateCompression(twd, twu)
        if (validateCompression) {
            const tc = CalculateTc(fck)
            const td = CalculateTd(twd, tc)
            const aswcalc = CalculateAsw(td, fyk, bw)
            const aswmin = CalculateAswMin(fck, bw)
            const asw = setAsw(aswcalc, aswmin)
            const scalc = CalculateGaugeS(asw, gauge, 2)
            const smax = ValidateSMax(twd, twu, d)
            const s = setS(scalc, smax)
            return `
Relatório:

Vd: ${vd.toFixed(2)} kN,
Twd: ${twd.toFixed(2)} MPa,
Twu: ${twu.toFixed(2)} MPa,
Tc: ${tc.toFixed(2)} MPa,
Td: ${td.toFixed(2)} MPa,
Asw,calc: ${aswcalc.toFixed(2)} cm²/m,
Asw,min: ${aswmin.toFixed(2)} cm²/m,
Asw,nec: ${asw.toFixed(2)} cm²/m,
Scalc: ${scalc} cm.
Smax: ${smax} cm.
S: ${s} cm.`
        } else {
            return "Rompimento da biela de compressão"
        }        
    } else {
        return 'Preencher dados corretamente'
    }
}