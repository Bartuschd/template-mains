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


function POTable({columns, /* requestClient: { oauthGet, oauthPost } */}){




    const [isOpen, setIsOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentData, setCurrentData] = useState({});
    const [changedData, setChangedData] = useState([]);
    const [items, setItems] = React.useState([{"id":651,"supplier_id":1,"material_leadtime":75,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":110310,"client_id":null,"create_datetime":"2023-06-26T11:27:55.305126","modified_time":"2023-06-26T13:27:52.476619","user_id":"Import Csv SCM Service"},{"id":652,"supplier_id":1,"material_leadtime":75,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":110320,"client_id":null,"create_datetime":"2023-06-26T11:27:55.305126","modified_time":"2023-06-26T13:27:52.530997","user_id":"Import Csv SCM Service"},{"id":79,"supplier_id":26,"material_leadtime":40,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":120520,"client_id":3,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:51.545422","user_id":"Import Csv SCM Service"},{"id":80,"supplier_id":26,"material_leadtime":40,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":121310,"client_id":3,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:51.547031","user_id":"Import Csv SCM Service"},{"id":81,"supplier_id":26,"material_leadtime":40,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":121415,"client_id":3,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:51.548344","user_id":"Import Csv SCM Service"},{"id":653,"supplier_id":27,"material_leadtime":75,"production_leadtime":65,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":110515,"client_id":null,"create_datetime":"2023-06-26T11:27:55.305126","modified_time":"2023-06-26T13:27:52.533673","user_id":"Import Csv SCM Service"},{"id":654,"supplier_id":27,"material_leadtime":75,"production_leadtime":65,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":110520,"client_id":null,"create_datetime":"2023-06-26T11:27:55.305126","modified_time":"2023-06-26T13:27:52.535489","user_id":"Import Csv SCM Service"},{"id":655,"supplier_id":27,"material_leadtime":75,"production_leadtime":65,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":110525,"client_id":null,"create_datetime":"2023-06-26T11:27:55.305126","modified_time":"2023-06-26T13:27:52.537856","user_id":"Import Csv SCM Service"},{"id":656,"supplier_id":28,"material_leadtime":75,"production_leadtime":65,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":110515,"client_id":null,"create_datetime":"2023-06-26T11:27:55.305126","modified_time":"2023-06-26T13:27:52.539445","user_id":"Import Csv SCM Service"},{"id":657,"supplier_id":28,"material_leadtime":75,"production_leadtime":65,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":110520,"client_id":null,"create_datetime":"2023-06-26T11:27:55.305126","modified_time":"2023-06-26T13:27:52.540781","user_id":"Import Csv SCM Service"},{"id":82,"supplier_id":29,"material_leadtime":40,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":121310,"client_id":3,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:51.549443","user_id":"Import Csv SCM Service"},{"id":83,"supplier_id":29,"material_leadtime":40,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":121415,"client_id":3,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:51.550492","user_id":"Import Csv SCM Service"},{"id":301,"supplier_id":36,"material_leadtime":75,"production_leadtime":65,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":110520,"client_id":4,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:51.85901","user_id":"Import Csv SCM Service"},{"id":12,"supplier_id":37,"material_leadtime":75,"production_leadtime":65,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":110225,"client_id":null,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:52.386925","user_id":"Import Csv SCM Service"},{"id":13,"supplier_id":41,"material_leadtime":50,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":110110,"client_id":null,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:52.388124","user_id":"Import Csv SCM Service"},{"id":14,"supplier_id":41,"material_leadtime":75,"production_leadtime":65,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":110210,"client_id":null,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:52.389387","user_id":"Import Csv SCM Service"},{"id":15,"supplier_id":41,"material_leadtime":75,"production_leadtime":65,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":110225,"client_id":null,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:52.390613","user_id":"Import Csv SCM Service"},{"id":16,"supplier_id":41,"material_leadtime":50,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":110310,"client_id":null,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:52.394586","user_id":"Import Csv SCM Service"},{"id":17,"supplier_id":41,"material_leadtime":50,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":110320,"client_id":null,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:52.395746","user_id":"Import Csv SCM Service"},{"id":658,"supplier_id":41,"material_leadtime":50,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":110000,"client_id":null,"create_datetime":"2023-06-26T11:27:55.305126","modified_time":"2023-06-26T13:27:52.54238","user_id":"Import Csv SCM Service"},{"id":18,"supplier_id":43,"material_leadtime":75,"production_leadtime":65,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":110515,"client_id":null,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:52.396857","user_id":"Import Csv SCM Service"},{"id":19,"supplier_id":43,"material_leadtime":75,"production_leadtime":65,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":110525,"client_id":null,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:52.397902","user_id":"Import Csv SCM Service"},{"id":20,"supplier_id":44,"material_leadtime":75,"production_leadtime":65,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":110520,"client_id":null,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:52.399034","user_id":"Import Csv SCM Service"},{"id":21,"supplier_id":44,"material_leadtime":75,"production_leadtime":65,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":110525,"client_id":null,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:52.400148","user_id":"Import Csv SCM Service"},{"id":302,"supplier_id":46,"material_leadtime":75,"production_leadtime":65,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":110225,"client_id":4,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:51.859902","user_id":"Import Csv SCM Service"},{"id":303,"supplier_id":46,"material_leadtime":75,"production_leadtime":65,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":110520,"client_id":4,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:51.86082","user_id":"Import Csv SCM Service"},{"id":304,"supplier_id":47,"material_leadtime":75,"production_leadtime":65,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":110210,"client_id":4,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:51.861803","user_id":"Import Csv SCM Service"},{"id":84,"supplier_id":54,"material_leadtime":40,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":124015,"client_id":3,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:51.55146","user_id":"Import Csv SCM Service"},{"id":305,"supplier_id":54,"material_leadtime":40,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":114110,"client_id":4,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:51.862853","user_id":"Import Csv SCM Service"},{"id":85,"supplier_id":55,"material_leadtime":40,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":124015,"client_id":3,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:51.552621","user_id":"Import Csv SCM Service"},{"id":86,"supplier_id":55,"material_leadtime":40,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":124110,"client_id":3,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:51.553612","user_id":"Import Csv SCM Service"},{"id":306,"supplier_id":55,"material_leadtime":40,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":114110,"client_id":4,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:51.864168","user_id":"Import Csv SCM Service"},{"id":659,"supplier_id":120,"material_leadtime":30,"production_leadtime":70,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":121110,"client_id":null,"create_datetime":"2023-06-26T11:27:55.305126","modified_time":"2023-06-26T13:27:52.544277","user_id":"Import Csv SCM Service"},{"id":660,"supplier_id":120,"material_leadtime":30,"production_leadtime":60,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":121130,"client_id":null,"create_datetime":"2023-06-26T11:27:55.305126","modified_time":"2023-06-26T13:27:52.546074","user_id":"Import Csv SCM Service"},{"id":661,"supplier_id":120,"material_leadtime":30,"production_leadtime":60,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":121210,"client_id":null,"create_datetime":"2023-06-26T11:27:55.305126","modified_time":"2023-06-26T13:27:52.552861","user_id":"Import Csv SCM Service"},{"id":22,"supplier_id":150,"material_leadtime":75,"production_leadtime":65,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":110210,"client_id":null,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:52.401228","user_id":"Import Csv SCM Service"},{"id":23,"supplier_id":150,"material_leadtime":50,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":110320,"client_id":null,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:52.403222","user_id":"Import Csv SCM Service"},{"id":662,"supplier_id":150,"material_leadtime":50,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":114025,"client_id":null,"create_datetime":"2023-06-26T11:27:55.305126","modified_time":"2023-06-26T13:27:52.554784","user_id":"Import Csv SCM Service"},{"id":663,"supplier_id":150,"material_leadtime":30,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":114025,"client_id":null,"create_datetime":"2023-06-26T11:27:55.305126","modified_time":"2023-06-26T13:27:52.557148","user_id":"Import Csv SCM Service"},{"id":87,"supplier_id":304,"material_leadtime":40,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":124610,"client_id":null,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T08:15:23.616011","user_id":null},{"id":2,"supplier_id":304,"material_leadtime":40,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":124610,"client_id":3,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:51.555525","user_id":"Import Csv SCM Service"},{"id":88,"supplier_id":305,"material_leadtime":50,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":124610,"client_id":3,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:51.556526","user_id":"Import Csv SCM Service"},{"id":664,"supplier_id":306,"material_leadtime":50,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":114025,"client_id":null,"create_datetime":"2023-06-26T11:27:55.305126","modified_time":"2023-06-26T13:27:52.55887","user_id":"Import Csv SCM Service"},{"id":89,"supplier_id":328,"material_leadtime":40,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":120015,"client_id":3,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:51.557569","user_id":"Import Csv SCM Service"},{"id":90,"supplier_id":328,"material_leadtime":40,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":120410,"client_id":3,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:51.558598","user_id":"Import Csv SCM Service"},{"id":91,"supplier_id":328,"material_leadtime":40,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":120510,"client_id":3,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:51.559643","user_id":"Import Csv SCM Service"},{"id":92,"supplier_id":328,"material_leadtime":40,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":120520,"client_id":3,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:51.560767","user_id":"Import Csv SCM Service"},{"id":93,"supplier_id":329,"material_leadtime":40,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":120310,"client_id":3,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:51.561903","user_id":"Import Csv SCM Service"},{"id":94,"supplier_id":329,"material_leadtime":40,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":120510,"client_id":3,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:51.563024","user_id":"Import Csv SCM Service"},{"id":95,"supplier_id":329,"material_leadtime":40,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":120520,"client_id":3,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:51.564072","user_id":"Import Csv SCM Service"},{"id":307,"supplier_id":329,"material_leadtime":40,"production_leadtime":50,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":110110,"client_id":4,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:51.865208","user_id":"Import Csv SCM Service"},{"id":39,"supplier_id":330,"material_leadtime":30,"production_leadtime":35,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":124110,"client_id":null,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:52.450807","user_id":"Import Csv SCM Service"},{"id":96,"supplier_id":330,"material_leadtime":30,"production_leadtime":35,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":124115,"client_id":3,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:51.565152","user_id":"Import Csv SCM Service"},{"id":308,"supplier_id":330,"material_leadtime":30,"production_leadtime":35,"qc_passing":3,"transport_time_fh":3,"transport_time_hh":45,"transport_time_hl":3,"main_article_group":114110,"client_id":4,"create_datetime":"2023-06-26T08:15:23.616011","modified_time":"2023-06-26T13:27:51.866364","user_id":"Import Csv SCM Service"}]);

    // React.useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //       const response = await oauthGet("https://dev-denodo.bueltel.com/server/po/production_order_main/views/scm_ProductionOrderPlanning")
    //       const result = await response.json();
          
    //       setItems(result.elements);
            
    //       } catch (error) {
    //         console.log("Fehler beim aufrufen" + error);
    //       }
    //     }
    
    
    
    //     //fetchData();
    //   }, []);
    
    const pushToArray = (obj) => {
        const output = changedData;

        if(output.findIndex(element => element.id === obj.id && element.key === obj.key) != -1) {
            output[output.findIndex(element => element.id === obj.id && element.key === obj.key)].value = obj.value
        }
        else{
            output.push(obj);
        }

        setChangedData(output);
        
        console.log(mergeArray(output));
    }

    const handleSelect = (selection) => {
        switch(selection) {
            case "1 - Calamar":
                console.log({id: 1});
            break;
            case "3 - Camel Active Women":
                console.log({id: 3});
            break;
            case "4 - Camel Active Men":
                console.log({id: 4});
            break;
            case "5 - Freestyle":
                console.log({id: 5});
            break;
            case "6 - Hattric":
                console.log({id: 6});
            break;
            case "7 - Outlet Stores":
                console.log({id: 7});
            break;
            case "9 - BSL":
                console.log({id: 1});
            break;
        }
    }

    const mergeArray = (output) => {
        const mergedObjects = {};
        output.forEach(item => {    
          const { id, key, value } = item; 
      
          if (!mergedObjects[id]) {
            mergedObjects[id] = { id };
          }
      
          mergedObjects[id][key] = value;
        });
        return Object.values(mergedObjects);
    }

    const handleSaveClick = () => {
        setIsEditing(false);
    }

    const handleEditClick = () => {
        setIsEditing(true);
    }

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const filteredData = items.filter(item => {
        return item.supplier_id.toString().includes(searchTerm) ||
            item.main_article_group.toString().includes(searchTerm)  ||
            (item.client_id === null ? 0 : item.client_id).toString().includes(searchTerm)
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
                setCurrentData={setCurrentData}
                handleSelect={handleSelect}
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
                        <TableRow onDoubleClick={() => {isEditing === false && setIsOpen(true); setCurrentData(item);} } key={item.id}>
                            {columns.map((column) => (
                                <TableCell onClick={() => {isEditing === false && column.columnKey === "supplier_id" && setIsOpen(true); column.columnKey === "supplier_id" && setCurrentData(item);}} key={column.columnKey} className={column.columnKey}>
                                    <DisplayValue valueKey={column.columnKey} value={item[column.columnKey]} isEditing={isEditing} itemId={item.id} pushToArray={pushToArray}/>
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
    })),

    requestClient: PropTypes.shape({
        oauthGet: PropTypes.func,
        oauthPost: PropTypes.func,
    })
}
export default memo(POTable);
