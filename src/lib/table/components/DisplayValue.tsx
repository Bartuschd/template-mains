import { Input, Link } from '@fluentui/react-components';
import * as React from 'react';
import PropTypes from 'prop-types';


const DisplayValue = ({valueKey, value, isEditing}) => {

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

DisplayValue.propTypes = {
    valueKey: PropTypes.string,
    value: PropTypes.number,
    isEditing: PropTypes.bool,
}

export default DisplayValue;
