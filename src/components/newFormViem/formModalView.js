import { Fragment } from "react";
import { X } from "react-feather";
import Select from "react-select";
import { Modal, ModalBody } from "reactstrap";


const FormModalView = ({ show, toggle }) => {

    const data = JSON.parse(localStorage.getItem('testData'));
    const dataOptions = data.map(r => ({ label: r.name, value: r.id }))

    return (
        <Fragment>
            <Modal
                className="modal-md"
                isOpen={show}
                centered
                toggle={() => toggle(false)}
            >
                <div className="modal-header">
                    <h5 className="modal-title">Маягт сонгох</h5>
                    <div className="modal-actions">
                        <a
                            href="/"
                            className="text-body"
                            onClick={(e) => {
                                e.preventDefault();
                                toggle(false);
                            }}
                        >
                            <X size={14} />
                        </a>
                    </div>
                </div>

                <ModalBody>
                    <Select options={dataOptions} isClearable classNamePrefix="select" />
                </ModalBody>
            </Modal>
        </Fragment>
    );
}

export default FormModalView