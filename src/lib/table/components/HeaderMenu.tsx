import {Input, Button} from "@fluentui/react-components";
import {Add16Filled} from '@fluentui/react-icons'

const HeaderMenu = ({setIsOpen, isEditing, handleSaveClick, handleEditClick, searchTerm, handleInputChange}) => {
    return (
        <div className="HeaderMenuDiv">
            <div className="NewEntryDiv">
                <Button onClick={() => {setIsOpen(true)}}>{<Add16Filled />}Neu</Button>
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

export default HeaderMenu;