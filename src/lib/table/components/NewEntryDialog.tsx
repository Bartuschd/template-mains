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

    const handleSubmit = (ev: React.FormEvent) => {
        ev.preventDefault();
        alert("form submitted!");
    };

    const styles = useStyles();

    return (
        
        <div className="NewEntryDialogDiv">
            <Dialog modalType="modal" open={open} onOpenChange={console.log}>
                <DialogSurface aria-describedby={undefined}>
                    <form onSubmit={handleSubmit}>
                        <DialogBody>
                            <DialogTitle>
                                {(Object.keys(values).length !== 0 ? "Editieren" : "Neuer Eintrag")}
                            </DialogTitle>
                            <DialogContent className={styles.content}>
                                {/* <Label required htmlFor={"id-input"}>
                                    ID
                                </Label>
                                <Input disabled={true} id={"id-input"} defaultValue={values.id}/> */}

                                <Label required htmlFor={"supplier_id-input"}>
                                    Supplier ID
                                </Label>
                                <Input required type="number" id={"supplier_id-input"} defaultValue={values.supplier_id}/>

                                <Label required htmlFor={"main_article_group-input"}>
                                    Main Article Group
                                </Label>
                                <Input required type="number" id={"main_article_group-input"} defaultValue={values.main_article_group}/>

                                <Label required htmlFor={"client_id-input"}>
                                    Client ID
                                </Label>
                                <Input required type="number" id={"client_id-input"} defaultValue={values.client_id}/>

                                <Label required htmlFor={"material_leadtime-input"}>
                                    Material Leadtime
                                </Label>
                                <Input required type="number" id={"material_leadtime-input"} defaultValue={values.material_leadtime}/>

                                <Label required htmlFor={"production_leadtime-input"}>
                                    Production Leadtime
                                </Label>
                                <Input required type="number" id={"production_leadtime-input"} defaultValue={values.production_leadtime}/>

                                <Label required htmlFor={"qc_passing-input"}>
                                    QC Passing
                                </Label>
                                <Input required type="number" id={"qc_passing-input"} defaultValue={values.qc_passing}/>

                                <Label required htmlFor={"transport_time_fh-input"}>
                                    Transport Time FH
                                </Label>
                                <Input required type="number" id={"transport_time_fh-input"} defaultValue={values.transport_time_fh}/>

                                <Label required htmlFor={"transport_time_hh-input"}>
                                Transport Time HH
                                </Label>
                                <Input required type="number" id={"transport_time_hh-input"} defaultValue={values.transport_time_hh}/>

                                <Label required htmlFor={"transport_time_hl-input"}>
                                    Production Leadtime HL
                                </Label>
                                <Input required type="number" id={"transport_time_hl-input"} defaultValue={values.transport_time_hl}/>
                            </DialogContent>

                            <DialogActions>
                                <Button onClick={() => setIsOpen(false)} appearance="secondary">
                                    Schließen
                                </Button>
                                <Button type="submit" appearance="primary">
                                    Speichern
                                </Button>
                            </DialogActions>
                        </DialogBody>
                    </form>
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