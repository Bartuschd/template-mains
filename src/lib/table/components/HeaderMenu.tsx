import {Input, Button, Dropdown, Option} from "@fluentui/react-components";
import {Add16Filled} from '@fluentui/react-icons'
import * as React from 'react';
import PropTypes from 'prop-types';
import { useState } from "react";

const options = ["All",  "1 - Calamar", "3 - Camel Active Women", "4 - Camel Active Men", "5 - Freestyle", "6 - Hattric", "7 - Outlet Stores", "9 - BSL"]

const HeaderMenu = ({setIsOpen, isEditing, handleSaveClick, handleEditClick, searchTerm, handleInputChange, setCurrentData, handleSelect}) => {

    
    const [selectedOption, setSelectedOption] = useState(null);

    console.log(selectedOption)
    return (
        <div className="HeaderMenuDiv">
            <div className="NewEntryDiv">
                <Button onClick={() => {setIsOpen(true), setCurrentData({})}}>{<Add16Filled />}Neu</Button>
            </div>
            <div className="BulkEditDiv">
                <Button onClick={isEditing ? handleSaveClick : handleEditClick}>
                    {isEditing ? "Speichern" : "Editieren"}
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
            <div className="ComboboxDiv">
                <Dropdown placeholder="Kollektion auswählen..." onOptionSelect={(e, {optionValue}) => {
                    handleSelect(optionValue);
                }}
                    selectedOptions={[selectedOption]}
                >
                    {options.map((option) => {
                        return (
                            <Option key={option}>
                                {option}
                            </Option>
                        )
                    })}
                </Dropdown>
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
    setCurrentData: PropTypes.func,
    handleSelect: PropTypes.func,
}
export default HeaderMenu;