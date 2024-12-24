import { Fragment, useEffect, useState } from "react";
import { MinusCircle, PlusCircle, X } from "react-feather";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import '@styles/react/libs/react-select/_react-select.scss'
import { Button, Col, Input, Label, ListGroup, ListGroupItem, Modal, ModalBody, Row, Spinner } from "reactstrap";
import SelectComponentString from "@src/views/components/SelectComponentString";

const defaultValues = {
    value: "",
    label: "",
    type: "",
    conditional: false,
    conditionalField: '',
    conditionalValue: '',
    options: []
};

const options = [
    { label: 'text', value: "text" },
    { label: 'textarea', value: "textarea" },
    { label: 'number', value: "number" },
    { label: 'radio', value: "radio" },
    { label: 'checkbox', value: "checkbox" },
    { label: 'switch', value: "switch" },
    { label: 'multicheck', value: "multicheck" },
    { label: 'multiselect', value: "multiselect" },
    { label: 'singleselect', value: "singleselect" },
]

const ModalField = ({ show, toggle, model, selectedBlock, selectedForm, fetchFieldData }) => {

    const [submitting, setSubmitting] = useState(false)
    const { control, handleSubmit, reset, watch } = useForm({ defaultValues });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "options",
    });

    const type = watch("type")
    const conditional = watch('conditional')

    const onOpened = () => {
        if (model) {
            reset({ ...defaultValues, ...model })
        } else {
            reset(defaultValues)
        }
    }

    const onSubmit = (data) => {

        if (!data.value) {
            toast.error("Нэршил оруулна уу!");
            return;
        }
        if (!data.type) {
            toast.error("Төрөлөө сонгоно уу!");
            return;
        }

        setSubmitting(true)

        setTimeout(() => {
            setSubmitting(false)
        }, 600);

        let mainData = JSON.parse(localStorage.getItem('testData')) || [];

        if (data.id) {
            mainData = mainData.map(r => {
                if (r.id === selectedForm?.id) {
                    r.blocks = r.blocks.map(t => {
                        if (t.id === selectedBlock?.id) {
                            t.fields = t.fields.map(field => (field.id === data.id ? data : field));
                        }
                        return t;
                    });
                }
                return r;
            });
        } else {
            mainData = mainData.map(r => {
                if (r.id === selectedForm?.id) {
                    return {
                        ...r,
                        blocks: r.blocks?.map(t => {
                            if (t.id === selectedBlock?.id) {
                                data.id = new Date().getTime();
                                return {
                                    ...t,
                                    fields: [...(t.fields || []), data],
                                };
                            }
                            return t;
                        }),
                    };
                }
                return r;
            });
        }

        localStorage.setItem('testData', JSON.stringify(mainData));
        toast.success("Амжилттай!")
        fetchFieldData()
        toggle(true)

    };


    useEffect(() => {
        append()
    }, [])
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
                    <h5 className="modal-title">Асуулт {model ? 'засварлах' : 'үүсгэх'}</h5>
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

                <ModalBody className="pt-0">
                    <Row className="gy-1 mt-0" tag="form" onSubmit={handleSubmit(onSubmit)}>

                        <Col sm={12}>
                            <Label className="form-label">
                                Гадаад нэршил
                                <span className="ms-25 text-danger">
                                    *
                                </span>
                            </Label>
                            <Controller
                                control={control}
                                name="value"
                                render={({ field }) => (
                                    <Input {...field} placeholder="..." />
                                )}
                            />
                        </Col>
                        <Col sm={12}>
                            <Label className="form-label">
                                Асуулт
                            </Label>
                            <Controller
                                control={control}
                                name="label"
                                render={({ field }) => (
                                    <Input {...field} placeholder="..." />
                                )}
                            />
                        </Col>

                        <Col sm={6}>
                            <Label className="form-label" for="conditional">
                                Нөхцөлт асуумж
                            </Label>
                            <Controller
                                control={control}
                                name='conditional'
                                render={({ field }) => {
                                    return (
                                        <div className='form-switch form-check-primary'>
                                            <Input
                                                {...field}
                                                type='switch'
                                                id='conditional'
                                                checked={field.value}
                                            />
                                        </div>
                                    )
                                }}
                            />
                        </Col>
                        <Col sm={6}>
                            <Label className="form-label" for="conditional">
                                required Field
                            </Label>
                            <Controller
                                control={control}
                                name='required'
                                render={({ field }) => {
                                    return (
                                        <div className='form-switch form-check-primary'>
                                            <Input
                                                {...field}
                                                type='switch'
                                                id='conditional'
                                                checked={field.value}
                                            />
                                        </div>
                                    )
                                }}
                            />
                        </Col>

                        {conditional && <>
                            <Col sm={12}>
                                <Label className="form-label">
                                    Нөхцөлт асуумжийн асуулт
                                </Label>
                                <Controller
                                    control={control}
                                    name="conditionalField"
                                    render={({ field }) => (
                                        <Input {...field} placeholder="..." />
                                    )}
                                />
                            </Col>

                            <Col sm={12}>
                                <Label className="form-label">
                                    Нөхцөлт асуумжийн хариулт
                                </Label>
                                <Controller
                                    control={control}
                                    name="conditionalValue"
                                    render={({ field }) => (
                                        <Input {...field} placeholder="..." />
                                    )}
                                />
                            </Col>
                        </>}

                        <Col sm={12}>
                            <Label className="form-label">
                                Төрөл
                                <span className="ms-25 text-danger">
                                    *
                                </span>
                            </Label>
                            <Controller
                                control={control}
                                name="type"
                                render={({ field }) => (
                                    <SelectComponentString
                                        {...field}
                                        value={field.value}
                                        setValue={field.onChange}
                                        classNamePrefix="select"
                                        options={options}
                                    />
                                )}
                            />
                        </Col>
                        {(type !== "switch" || type !== "number" || type !== "text" || type !== "textarea") ? (<Col sm={12}>
                            <div className="d-flex justify-content-between">
                                <Label className="form-label m-0 d-flex align-items-center">
                                    Хариултууд
                                </Label>
                                <Button
                                    size="sm"
                                    outline
                                    color="success"
                                    className="btn-icon"
                                    type="button"
                                    onClick={() =>
                                        append({
                                            value: "",
                                            label: "",
                                        })
                                    }
                                >
                                    <PlusCircle size={12} />
                                </Button>
                            </div>
                            <ListGroup className="mt-1">
                                <Row className="m-0 p-0 px-2">
                                    <Col sm={5}>
                                        <Label className="m-0">
                                            value
                                        </Label>
                                    </Col>
                                    <Col sm={5}>
                                        <Label className="m-0">
                                            label
                                        </Label>
                                    </Col>
                                </Row>
                                {fields.map((item, index) => {
                                    return <ListGroupItem className="py-50" key={item.id}>
                                        <Row className="m-0 p-0">
                                            <Col sm={5}>
                                                <Controller
                                                    control={control}
                                                    name={`options.${index}.value`}
                                                    render={({ field }) => (
                                                        <Input
                                                            {...field}
                                                            bsSize="sm"
                                                            placeholder="..."
                                                            type="text"
                                                        />
                                                    )}
                                                />
                                            </Col>
                                            <Col sm={5}>
                                                <Controller
                                                    control={control}
                                                    name={`options.${index}.label`}
                                                    render={({ field }) => (
                                                        <Input
                                                            {...field}
                                                            bsSize="sm"
                                                            placeholder="..."
                                                            type="text"
                                                        />
                                                    )}
                                                />
                                            </Col>
                                            <Col
                                                sm={2}
                                                className="d-flex align-items-center justify-content-center"
                                            >
                                                <Button
                                                    size="sm"
                                                    className="btn-icon"
                                                    color="danger"
                                                    outline
                                                    type="button"
                                                    onClick={() => remove(index)}
                                                >
                                                    <MinusCircle size={12} />
                                                </Button>
                                            </Col>
                                        </Row>
                                    </ListGroupItem>
                                })}
                            </ListGroup>
                        </Col>) : null}
                        <Col sm={12} className="d-flex justify-content-end">
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

export default ModalField