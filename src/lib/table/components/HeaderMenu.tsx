import {Input, Button} from "@fluentui/react-components";
import {Add16Filled} from '@fluentui/react-icons'
import * as React from 'react';
import PropTypes from 'prop-types';

const HeaderMenu = ({setIsOpen, isEditing, handleSaveClick, handleEditClick, searchTerm, handleInputChange, setCurrentData}) => {
    return (
        <div className="HeaderMenuDiv">
            <div className="NewEntryDiv">
                <Button onClick={() => {setIsOpen(true), setCurrentData({})}}>{<Add16Filled />}Neu</Button>
            </div>
            <div className="BulkEditDiv">
                <Button onClick={isEditing ? handleSaveClick : handleEditClick}>
                {isEditing ? "Save" : "Bulk Edit"}
                </Button>
            </div>
            <div className="SearchbarDiv">
            <Input
                type="text"
                placeholder="Suche..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            </div>
        </div>
    )
}

HeaderMenu.propTypes = {
    setIsOpen: PropTypes.func,
    isEditing: PropTypes.bool,
    handleSaveClick: PropTypes.func,
    handleEditClick: PropTypes.func,
    searchTerm: PropTypes.string,
    handleInputChange: PropTypes.func,
    setCurrentData: PropTypes.func
}
export default HeaderMenu;