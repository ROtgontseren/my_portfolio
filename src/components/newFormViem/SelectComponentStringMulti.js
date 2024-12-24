import Select from "react-select"

// ** Utils
import { selectThemeColors } from '@utils'
import { Fragment } from "react"

const SelectComponentStringMulti = ({ options, value, setValue, invalid, clearable }) => {

    const optionValue = value ? value.map(r => options.find(t => t.value === r)) : []

    return (
        <Fragment>
            <Select
                noOptionsMessage={() => 'Мэдээлэл олдсонгүй'}
                placeholder='...'
                classNamePrefix='select'
                options={options}
                theme={selectThemeColors}
                className={`react-select ${invalid ? 'is-invalid' : ''}`}
                value={optionValue}
                onChange={(e) => {
                    if (e) {
                        setValue(e.map(r => r.value))
                    } else {
                        setValue([])
                    }
                }}
                isClearable={clearable || false}
                isMulti
            />
        </Fragment>

    )
}

export default SelectComponentStringMulti