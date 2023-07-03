import './App.scss';
import * as React from 'react';
import {Table} from "./lib";
import { useEffect } from 'react';

function App() {

  
  const isDarkTheme = true;

  //const [data, setData] = React.useState([]);
  

 
  
  return (
      <div className="TableDiv">
        <Table 
          columns = 
            {[
              { label: "Supplier ID", columnKey: "supplier_id" },
              { label: "Main Article Group", columnKey: "main_article_group" },
              { label: "Client ID", columnKey: "client_id"},
              { label: "Material Leadtime", columnKey: "material_leadtime" },
              { label: "Production Leadtime", columnKey: "production_leadtime" },
              { label: "QC Passing", columnKey: "qc_passing" },
              { label: "Transport Time FH", columnKey: "transport_time_fh" },
              { label: "Transport Time HH", columnKey: "transport_time_hh" },
              { label: "Transport Time HL", columnKey: "transport_time_hl" },
              
            ]}
        />
      </div>
  )
}

export default App

