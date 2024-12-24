import Select from "react-select"

// ** Utils
import { selectThemeColors } from '@utils'
import { Fragment } from "react"

const SelectComponentString = ({ options, value, setValue, invalid, clearable }) => {

    const selectedValue = options.find(r => r.value === value)
    const optionValue = selectedValue ? { value: selectedValue.value, label: selectedValue.label } : null

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
                        setValue(e.value)
                    } else {
                        setValue('')
                    }
                }}
                isClearable={clearable || false}
            />
        </Fragment>

    )
}

export default SelectComponentString