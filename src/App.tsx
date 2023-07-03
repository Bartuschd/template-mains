import './App.scss';
import * as React from 'react';
import {Table} from "./lib";

function App() {

  
  const isDarkTheme = true;

  return (
      <div className="TableDiv">
        <Table 
          columns = 
            {[
              { label: "Supplier ID", columnKey: "supplier_id" },
              { label: "Main Article Group", columnKey: "main_article_group" },
              { label: "Brand", columnKey: "client_id"},
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

