import { Component } from "react"

import MillComponent from "./MillComponent"
import Toolbar from "./Toolbar"
import AddFormInstrument from "./AddFormInstrument"

import './css/InstrumentMainInfo.css'

class InstrumentMainInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
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
            ],
            visible: false,
            tookedItem: ''
        }
        this.maxIndex = 10
    }

    includes(field) {
        return (field === 'diameter' || field === 'tooth' || field === 'height')
    }

    sortMethod(field) {
        if (this.includes(field)) {
            return (a, b) => a.property[field] < b.property[field] ? -1 : 1
        } else {
            return (a, b) => a[field] < b[field] ? -1 : 1
        }
    }

    selfSortByPrice(arr) {
        const sortedArr = []
        const arrLength = arr.length
        for (let i = 0; i < arrLength; i++) {
            let maxValue = 0
            arr.forEach(item => {
                if (maxValue < item.price) {
                    maxValue = item.price
                }
            })
            arr.forEach(item => {
                if (maxValue === item.price) {
                    sortedArr.push(item)
                }
            })
            arr = arr.filter(obj => !sortedArr.includes(obj))
        }
        return sortedArr.reverse()
    }

    sortData = (field) => {
        this.setState(({ data }) => {
            let oldState = [...data]
            if (field === 'price') {
                oldState = this.selfSortByPrice(oldState)
            } else {
                oldState.sort(this.sortMethod(field))
            }
            if (oldState[0].id === [...data][0].id) {
                oldState.reverse()
            }
            return {
                data: oldState
            }
        })
    }

    deleteItem = (id) => {
        this.setState(state => {
            const newState = state.data.filter(item => item.id !== id)
            return {
                data: newState
            }
        })
    }

    addInstrument = (value) => {
        const newItem = {
            name: value.name !== '' || "Без назви",
            id: this.maxIndex++,
            price: value.price !== '' || 0,
            property: {
                diameter: value.diameter !== '' || 0,
                height: value.height !== '' || 0,
                tooth: value.tooth !== '' || 0
            }
        }
        this.setState(({ data }) => {
            const newState = [...data, newItem]
            return {
                data: newState
            }
        })
    }

    showAddForm = () => {
        this.setState(({ visible }) => ({
            visible: !visible
        }))
    }

    dragStart = (e, item) => {
        this.setState({ tookedItem: item })
    }

    dragEnd = (e) => {

    }


    dragOver = (e) => {
        e.preventDefault()
    }

    drop = (e, item) => {
        e.preventDefault()
        this.setState(({ data }) => {
            return {
                data: data.map(mill => {
                    if (mill.id === item.id) {
                        return { ...this.state.tookedItem }
                    }
                    if (mill.id === this.state.tookedItem.id) {
                        return { ...item }
                    }
                    return mill
                })
            }
        })
    }

    render() {
        const { data, visible } = this.state

        const elements = data.map(item => {
            const { id, name, price, property } = item
            return (
                <div
                    className="millComp"
                    key={id}
                    draggable={true}
                    onDragStart={(e) => this.dragStart(e, item)}
                    onDragLeave={(e) => this.dragEnd(e)}
                    onDragEnd={(e) => this.dragEnd(e)}
                    onDragOver={(e) => this.dragOver(e)}
                    onDrop={(e) => this.drop(e, item)}>
                    <MillComponent
                        // back={false}
                        name={name}
                        price={price}
                        property={property}
                        onDelete={() => this.deleteItem(id)} />
                </div>

            )
        })

        return (
            <div className="instrument-main" >
                <Toolbar
                    onClickAddElem={() => this.showAddForm()}
                    sortData={this.sortData}
                />
                <AddFormInstrument
                    visible={visible}
                    onAdd={this.addInstrument} />
                {elements}
            </div>
        )
    }
}

export default InstrumentMainInfo