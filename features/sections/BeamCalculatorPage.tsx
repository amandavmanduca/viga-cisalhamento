import { FormEventHandler, useState } from "react"
import { beamCalculator } from "../utils/calculator"
import styles from '../../styles/Home.module.css'

export const BeamCalculatorPage = () => {
    const [info, setInfo] = useState<string | null>(null)

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event: any) => {
        event.preventDefault()
        if (event) {
            const results = beamCalculator({
                vk: Number(event.target.vk.value),
                bw: Number(event.target.bw.value),
                d: Number(event.target.d.value),
                fck: Number(event.target.fck.value),
                fyk: Number(event.target.fyk.value),
                gauge: Number(event.target.gauge.value),
            })
            setInfo(results)
        }
    }
    
    return (
        <div className={styles.calculatorDiv}>
            <h4 className={styles.title}>Dimensionamento ao esforço cortante</h4>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formDiv}>
                    <label htmlFor="vk">Vk (kN)</label>
                    <input className={styles.input} type="number" name="vk" step=".01" />
                </div>
                <div className={styles.formDiv}>
                    <label htmlFor="bw">Bw (cm)</label>
                    <input className={styles.input} type="number" name="bw" />
                </div>
                <div className={styles.formDiv}>
                    <label htmlFor="d">d (cm)</label>
                    <input className={styles.input} type="number" name="d" />
                </div>
                <div className={styles.formDiv}>
                    <label htmlFor="fck">Fck (MPa)</label>
                    <select className={styles.input} name="fck" id="fck">
                        <option value={20}>20</option>
                        <option value={25}>25</option>
                        <option value={30}>30</option>
                        <option value={35}>35</option>
                    </select>
                </div>
                <div className={styles.formDiv}>
                    <label htmlFor="fyk">Aço</label>
                    <select className={styles.input} name="fyk" id="fyk">
                        <option value={500}>CA-50</option>
                        <option value={600}>CA-60</option>
                    </select>
                </div>
                <div className={styles.formDiv}>
                    <label htmlFor="gauge">Bitola (mm)</label>
                    <select className={styles.input} name="gauge" id="gauge">
                        <option value={5}>&#1060; 5.0</option>
                        <option value={6.3}>&#1060; 6.3</option>
                        <option value={8}>&#1060; 8.0</option>
                        <option value={10}>&#1060; 10.0</option>
                    </select>
                </div>
                <button className={styles.button} type="submit">Calcular</button>
                <button className={styles.button} type="reset" onClick={() => setInfo(null)}>Limpar</button>
            </form>
            {info && (
                <pre className={styles.pre}>
                    {info}
                </pre>
            )}
        </div>
    )
}