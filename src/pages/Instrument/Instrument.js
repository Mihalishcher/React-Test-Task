import InstrumentMainInfo from './InstrumentMainInfo/InstrumentMainInfo'
import Layout from '../../components/Layout/Layout'

const Instrument = () => {

    const data = [
        { name: "AM-1210", id: 0, price: 240, property: { diameter: 12, height: 120, tooth: 4 } },
        { name: "BM-1010", id: 1, price: 180, property: { diameter: 10, height: 100, tooth: 4 } },
        { name: "CM-0810", id: 2, price: 150, property: { diameter: 8, height: 75, tooth: 4 } },
        { name: "KM-0610", id: 3, price: 120, property: { diameter: 6, height: 60, tooth: 3 } },
        { name: "UM-0410", id: 4, price: 100, property: { diameter: 4, height: 50, tooth: 3 } },
        { name: "HSM-9.0", id: 5, price: 90, property: { diameter: 9, height: 110, tooth: 2 } },
        { name: "HSS-7.0", id: 6, price: 70, property: { diameter: 7, height: 90, tooth: 2 } },
        { name: "H-DRILL-5.0", id: 7, price: 50, property: { diameter: 5, height: 30, tooth: 2 } },
        { name: "BUR-16.0", id: 8, price: 330, property: { diameter: 16, height: 250, tooth: 2 } },
        { name: "KENAMETAL DRILL 3.0", id: 9, price: 220, property: { diameter: 3, height: 50, tooth: 2 } }
    ]

    return (
        <Layout><InstrumentMainInfo {...data} /></Layout>
    )
}
export default Instrument