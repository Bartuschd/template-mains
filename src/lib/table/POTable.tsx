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
import PropTypes from 'prop-types';
import * as React from 'react';
import DisplayValue from './components/DisplayValue';
import HeaderMenu from './components/HeaderMenu';
import NewEntryDialog from './components/NewEntryDialog';


function POTable({columns, items}){

    const [isOpen, setIsOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentData, setCurrentData] = useState({});

    


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
            <NewEntryDialog setIsOpen={setIsOpen} open={isOpen} values={currentData}/>
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
                        <TableRow onDoubleClick={() => {setIsOpen(true); setCurrentData(item);} } key={item.id}>
                            {columns.map((column) => (
                                <TableCell onClick={() => { column.columnKey === "id" && setIsOpen(true); column.columnKey === "id" && setCurrentData(item);}} key={column.columnKey} className={column.columnKey}>
                                    <DisplayValue valueKey={column.columnKey} value={item[column.columnKey]} isEditing={isEditing}/>
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}


POTable.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        columnKey: PropTypes.string
    })),
    
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        supplier_id: PropTypes.number,
        main_article_group: PropTypes.number,
        material_leadtime: PropTypes.number,
        production_leadtime: PropTypes.number,
        qc_passing: PropTypes.number,
        transport_time_fh: PropTypes.number,
        transport_time_hh: PropTypes.number,
        transport_time_hl: PropTypes.number
    }))
}
export default memo(POTable);
