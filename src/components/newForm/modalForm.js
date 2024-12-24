import { Fragment, useState } from "react";
import { X } from "react-feather";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button, Col, Input, Label, Modal, ModalBody, Row, Spinner } from "reactstrap";

const defaultValues = {
    name: "",
    number: "",
    blocks: []
};

const ModalForm = ({ show, toggle, model, fetchFormData }) => {

    const [submitting, setSubmitting] = useState(false)

    const { control, handleSubmit, reset } = useForm({ defaultValues });

    const onOpened = () => {
        if (model) {
            reset({ ...defaultValues, ...model })
        } else {
            reset(defaultValues)
        }
    }

    const onSubmit = (data) => {

        if (!data.name) {
            toast.error("Маягтын нэр оруулна уу!");
            return;
        }
        if (!data.number) {
            toast.error("Маягтын дугаар оруулна уу!");
            return;
        }

        setSubmitting(true)

        setTimeout(() => {
            setSubmitting(false)
        }, 600);

        let mainData = JSON.parse(localStorage.getItem('testData')) || [];

        if (data.id) {
            mainData = mainData.map(r => (r.id === data.id ? data : r));
        } else {
            data.id = new Date().getTime();
            mainData.push(data);
        }

        localStorage.setItem('testData', JSON.stringify(mainData));
        toast.success("Амжилттай!")
        fetchFormData()
        toggle(true)
    };

    return (
        <Fragment>
            <Modal
                className="modal-md"
                isOpen={show}
                centered
                toggle={() => toggle(false)}
                onOpened={onOpened}
            >
                <div className="modal-header">
                    <h5 className="modal-title">Маягтын бүртгэл {model ? 'засварлах' : 'үүсгэх'}</h5>
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
                    <Row className="gy-1 mt-0" tag="form" onSubmit={handleSubmit(onSubmit)}>

                        <Col sm={12}>
                            <Label className="form-label">
                                Маягтын нэр
                                <span className="ms-25 text-danger">
                                    *
                                </span>
                            </Label>
                            <Controller
                                control={control}
                                name="name"
                                render={({ field }) => (
                                    <Input {...field} placeholder="..." />
                                )}
                            />
                        </Col>
                        <Col sm={12}>
                            <Label className="form-label">
                                Маягтын дугаар
                                <span className="ms-25 text-danger">
                                    *
                                </span>
                            </Label>
                            <Controller
                                control={control}
                                name="number"
                                render={({ field }) => (
                                    <Input {...field} placeholder="..." />
                                )}
                            />
                        </Col>
                        <Col sm={12}>
                            <Button color="success" type="submit" disabled={submitting}>
                                {submitting && <Spinner size={'sm'} className="me-50" />}
                                Хадгалах
                            </Button>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </Fragment>
    );
}

export default ModalForm