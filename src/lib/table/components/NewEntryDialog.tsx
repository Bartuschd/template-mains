import { Button, Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTitle, Input, Label, makeStyles } from "@fluentui/react-components";
import * as React from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    content: {
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
    },
});

const NewEntryDialog = ({open, setIsOpen, values}) => {

    const styles = useStyles();


    const handlePost = () => {
        const myHeaders = new Headers();

        myHeaders.append("accept", "*/*");
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "id": values.id,
            "supplier_id": document.getElementById("supplier_id").value,
            "main_article_group": document.getElementById("main_article_group").value,
            "material_leadtime": document.getElementById("material_leadtime").value,
            "production_leadtime": document.getElementById("production_leadtime").value,
            "qc_passing": document.getElementById("qc_passing").value,
            "transport_time_fh": document.getElementById("transport_time_fh").value,
            "transport_time_hh": document.getElementById("transport_time_hh").value,
            "transport_time_hl": document.getElementById("transport_time_hl").value,
            "client_id": document.getElementById("client_id").value
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
        };

        fetch("https://po-api-dev.bueltel.com/POPlanning", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    return (
        
        <div className="NewEntryDialogDiv">
            <Dialog modalType="modal" open={open} onOpenChange={console.log}>
                <DialogSurface aria-describedby={undefined}>
                        <DialogBody>
                            <DialogTitle>
                                {(Object.keys(values).length !== 0 ? "Editieren" : "Neuer Eintrag")}
                            </DialogTitle>
                            <DialogContent className={styles.content}>
                                {/* <Label required htmlFor={"id-input"}>
                                    ID
                                </Label>
                                <Input disabled={true} id={"id-input"} defaultValue={values.id}/> */}

                                <Label required htmlFor={"supplier_id"}>
                                    Supplier ID
                                </Label>
                                <Input required type="number" id={"supplier_id"} defaultValue={values.supplier_id}/>

                                <Label required htmlFor={"main_article_groupt"}>
                                    Main Article Group
                                </Label>
                                <Input required type="number" id={"main_article_group"} defaultValue={values.main_article_group}/>

                                <Label required htmlFor={"client_id"}>
                                    Client ID
                                </Label>
                                <Input required type="number" id={"client_id"} defaultValue={values.client_id}/>

                                <Label required htmlFor={"material_leadtime"}>
                                    Material Leadtime
                                </Label>
                                <Input required type="number" id={"material_leadtime"} defaultValue={values.material_leadtime}/>

                                <Label required htmlFor={"production_leadtime"}>
                                    Production Leadtime
                                </Label>
                                <Input required type="number" id={"production_leadtime"} defaultValue={values.production_leadtime}/>

                                <Label required htmlFor={"qc_passing"}>
                                    QC Passing
                                </Label>
                                <Input required type="number" id={"qc_passing"} defaultValue={values.qc_passing}/>

                                <Label required htmlFor={"transport_time_fh"}>
                                    Transport Time FH
                                </Label>
                                <Input required type="number" id={"transport_time_fh"} defaultValue={values.transport_time_fh}/>

                                <Label required htmlFor={"transport_time_hh"}>
                                Transport Time HH
                                </Label>
                                <Input required type="number" id={"transport_time_hh"} defaultValue={values.transport_time_hh}/>

                                <Label required htmlFor={"transport_time_hl"}>
                                    Production Leadtime HL
                                </Label>
                                <Input required type="number" id={"transport_time_hl"} defaultValue={values.transport_time_hl}/>
                            </DialogContent>

                            <DialogActions>
                                <Button onClick={() => setIsOpen(false)} appearance="secondary">
                                    Schließen
                                </Button>
                                <Button type="button" appearance="primary" onClick={() => { setIsOpen(false), handlePost()}}>
                                    Speichern
                                </Button>
                            </DialogActions>
                        </DialogBody>
                </DialogSurface>
            </Dialog>
        </div>
    )
}

NewEntryDialog.propTypes = {
    open: PropTypes.bool,
    setIsOpen: PropTypes.func,
    values: PropTypes.object
}

export default NewEntryDialog;