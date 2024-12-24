import { Fragment, useState } from "react";
import { X } from "react-feather";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button, Col, Input, Label, Modal, ModalBody, Row, Spinner } from "reactstrap";

const defaultValues = {
    name: "",
    number: "",
    fields: []
};

const ModalBlock = ({ show, toggle, model, selectedForm, fetchBlockData }) => {
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
            toast.error("Блокын нэр оруулна уу!");
            return;
        }
        if (!data.number) {
            toast.error("Блокын дугаар оруулна уу!");
            return;
        }

        setSubmitting(true)

        setTimeout(() => {
            setSubmitting(false)
        }, 600);
        // let mainData = JSON.parse(localStorage.getItem('testData'))
        // if (data.id) {
        //     mainData = mainData.map(r => {
        //         r.blocks.filter(t => {
        //             if (t.id === data.id) {
        //                 return data
        //             } else {
        //                 return r
        //             }
        //         })
        //     })
        //     localStorage.setItem('testData', JSON.stringify(mainData))
        // } else {
        //     const updateData = mainData.map(r => {
        //         if (r.id === selectedForm.id) {
        //             data.id = new Date().getTime();

        //             return {
        //                 ...r,
        //                 blocks: [...r.blocks, data]
        //             };
        //         }
        //         return r;
        //     });
        //     localStorage.setItem('testData', JSON.stringify(updateData))
        // }
        // toast.success("Амжилттай!");
        // toggle(true);

        let mainData = JSON.parse(localStorage.getItem('testData')) || [];

        if (data.id) {
            mainData = mainData.map(r => {
                if (r.id === selectedForm.id) {
                    return {
                        ...r,
                        blocks: r.blocks.map(t => (t.id === data.id ? data : t)),
                    };
                }
                return r;
            });
        } else {
            mainData = mainData.map(r => {
                if (r.id === selectedForm.id) {
                    data.id = new Date().getTime();
                    return {
                        ...r,
                        blocks: [...r.blocks, data],
                    };
                }
                return r;
            });
        }
        localStorage.setItem('testData', JSON.stringify(mainData));
        toast.success("Амжилттай!");
        fetchBlockData()
        toggle(true);
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
                    <h5 className="modal-title">Блокын бүртгэл {model ? 'засварлах' : 'үүсгэх'}</h5>
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
                                Блокын нэр
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
                                Блокын дугаар
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

export default ModalBlock