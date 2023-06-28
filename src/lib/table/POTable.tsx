import {memo, useState} from "react";
import {  
    TableBody,
    TableCell,
    TableRow,
    Table,
    TableHeader,
    TableHeaderCell,
} from "@fluentui/react-components";
import './POTable.scss';
import DisplayValue from './components/DisplayValue';
import HeaderMenu from './components/HeaderMenu';


function POTable({columns, items}){

    const [isOpen, setIsOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    


    const handleSaveClick = () => {
        setIsEditing(false);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    }

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const filteredData = items.filter(item => {
        return item.id.toString().includes(searchTerm) ||
            item.supplier_id.toString().includes(searchTerm) ||
            item.main_article_group.toString().includes(searchTerm)
    });
    return (
        <div className="POPlanningApp">
            <HeaderMenu 
                setIsOpen={setIsOpen} 
                isEditing={isEditing} 
                handleSaveClick={handleSaveClick} 
                handleEditClick={handleEditClick} 
                searchTerm={searchTerm} 
                handleInputChange={handleInputChange} 
            />
            <Table arial-label="PO Table" id={"table"}>
                <TableHeader className="TableHeader">
                    <TableRow>
                        {columns.map((column) => (
                            <TableHeaderCell className="Header" key={column.columnKey}>
                                <b>{column.label}</b>
                            </TableHeaderCell>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {(searchTerm ? filteredData : items).map((item) => (
                        <TableRow onDoubleClick={() => setIsOpen(true)} key={item.id}>
                            {columns.map((column) => (
                                <TableCell onClick={() => column.columnKey === "id" && setIsOpen(true)} key={column.columnKey} className={column.columnKey}>
                                    <DisplayValue valueKey={column.columnKey} value={item[column.columnKey]} isEditing={isEditing} filteredData={filteredData} />
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
export default memo(POTable);
