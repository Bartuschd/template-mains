import { Input, Link } from '@fluentui/react-components';
import * as React from 'react';
import PropTypes from 'prop-types';




const DisplayValue = ({valueKey, value, isEditing, itemId, pushToArray}) => {

    const handleChange = (event) => {
        pushToArray({id: itemId, value: event.target.value, key: valueKey})
    } 

    return (
        <div className="ValueDiv">
            {isEditing ? (
                <Input type="number" onChange={handleChange} defaultValue={(value == null) ? "" : value} className="TableCellInput"></Input>
                ) : (
                <div className="ValueDivValue">{valueKey == "supplier_id" ? (<Link>{value}</Link>) : (value)}</div>
            )}
        </div>
    )
}

DisplayValue.propTypes = {
    valueKey: PropTypes.string,
    value: PropTypes.number,
    isEditing: PropTypes.bool,
    itemId: PropTypes.number,
    pushToArray: PropTypes.func
}

export default DisplayValue;
