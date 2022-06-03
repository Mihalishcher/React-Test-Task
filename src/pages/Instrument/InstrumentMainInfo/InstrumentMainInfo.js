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
                { name: "AM-1210", id: 0, price: 240, property: { diameter: 12, height: 120, tooth: 4 }, active: false },
                { name: "BM-1010", id: 1, price: 180, property: { diameter: 10, height: 100, tooth: 4 }, active: false },
                { name: "CM-0810", id: 2, price: 150, property: { diameter: 8, height: 75, tooth: 4 }, active: false },
                { name: "KM-0610", id: 3, price: 120, property: { diameter: 6, height: 60, tooth: 3 }, active: false },
                { name: "UM-0410", id: 4, price: 100, property: { diameter: 4, height: 50, tooth: 3 }, active: false },
                { name: "HSM-9.0", id: 5, price: 90, property: { diameter: 9, height: 110, tooth: 2 }, active: false },
                { name: "HSS-7.0", id: 6, price: 70, property: { diameter: 7, height: 90, tooth: 2 }, active: false },
                { name: "H-DRILL-5.0", id: 7, price: 50, property: { diameter: 5, height: 30, tooth: 2 }, active: false },
                { name: "BUR-16.0", id: 8, price: 330, property: { diameter: 16, height: 250, tooth: 2 }, active: false },
                { name: "KENAMETAL DRILL 3.0", id: 9, price: 220, property: { diameter: 3, height: 50, tooth: 2 }, active: false }
            ],
            visible: false,
            tookedItem: '',
            activeId: 0
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
            if (oldState[0].id === data[0].id) {
                oldState.reverse()
            }
            return { data: oldState }
        })
        this.activeLine(null)
    }

    deleteItem = (id) => {
        this.setState(state => {
            return { data: state.data.filter(item => item.id !== id) }
        })
    }

    addInstrument = (value) => {
        const newItem = {
            name: value.name || "Без назви",
            id: this.maxIndex++,
            price: value.price || 0,
            property: {
                diameter: value.diameter || 0,
                height: value.height || 0,
                tooth: value.tooth || 0
            },
            active: false
        }
        this.setState(({ data }) => {
            return { data: [...data, newItem] }
        })
    }

    showAddForm = () => {
        this.setState(({ visible }) => ({
            visible: !visible
        }))
    }

    dragStart = (e, item) => {
        this.setState({ tookedItem: item })
        setTimeout(() => {
            e.target.style.visibility = 'hidden'
        }, 0)
        this.activeLine(null)
    }

    dragEnd = (e) => {
        e.target.style.visibility = 'visible'
    }

    dragOver = (e) => {
        e.preventDefault()
    }

    drop = (e, item) => {
        this.setState(({ data }) => {
            return {
                data: data.map(mill => {
                    if (mill.id === item.id) {
                        e.target.style.background = null
                        return { ...this.state.tookedItem }
                    }
                    if (mill.id === this.state.tookedItem.id) {
                        e.target.style.background = null
                        return { ...item }
                    }
                    return mill
                })
            }
        })
    }

    activeLine = (itemID) => {
        const { activeId } = this.state
        this.setState({ activeId: itemID })
        this.setState(({ data }) => {
            const newArr = []
            data.forEach(i => newArr.push(JSON.parse(JSON.stringify(i))))
            newArr.map(i => {
                if (itemID === null) {
                    i.active = false
                } else if (itemID !== activeId && i.id === activeId) {
                    i.active = false
                } else if (i.id === itemID) {
                    i.active = !i.active
                }
                return i
            })
            return { data: newArr }
        })
    }

    checkKeyIndex = (e, index, key) => {
        return (index !== -1 && e.code === key)
    }

    keyboardHandler = (e) => {
        const { activeId, data } = this.state
        const IDs = data.map(i => {
            return i.id
        })
        let index = IDs.indexOf(activeId)

        if (this.checkKeyIndex(e, index, 'ArrowDown') && activeId !== IDs[IDs.length - 1]) {
            e.preventDefault()
            this.activeLine(IDs[index + 1])
            window.scrollBy(0, 184)
        }
        if (this.checkKeyIndex(e, index, 'ArrowUp') && activeId !== IDs[0]) {
            e.preventDefault()
            this.activeLine(IDs[index - 1])
            window.scrollBy(0, -184)
        }
        if (this.checkKeyIndex(e, index, 'Delete')) {
            this.deleteItem(activeId)
        }
    }

    render() {
        const { data, visible } = this.state

        const elements = data.map(item => {
            const { id, name, price, property, active } = item
            const millCompStyle = `millComp ${active ? 'active' : ''}`
            return (
                <li
                    className={millCompStyle}
                    onKeyDown={(e) => this.keyboardHandler(e)}
                    tabIndex={id}
                    key={id}
                    draggable
                    onClick={() => this.activeLine(item.id)}
                    onDragStart={(e) => this.dragStart(e, item)}
                    onDragEnd={(e) => this.dragEnd(e)}
                    onDragOver={(e) => this.dragOver(e)}
                    onDrop={(e) => this.drop(e, item)}>
                    <MillComponent
                        name={name}
                        price={price}
                        property={property}
                        onDelete={() => this.deleteItem(id)} />
                </li>
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