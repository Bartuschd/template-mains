import { Input, Link } from '@fluentui/react-components';


const DisplayValue = ({valueKey, value, isEditing, filteredData}) => {

    return (
        <div className="ValueDiv">
            {isEditing ? (
                <Input disabled={valueKey == "id"} type="number" defaultValue={value} className="TableCellInput"></Input>
                ) : (
                <div className="ValueDivValue">{valueKey == "id" ? (<Link>{value}</Link>) : (value)}</div>
            )}
        </div>
    )
}

export default DisplayValue;
