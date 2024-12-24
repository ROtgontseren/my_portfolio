import { Fragment, useEffect, useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Alert, Button, Card, CardBody, CardFooter, CardHeader, Col, Input, Label, Row, Spinner } from 'reactstrap'
import ComponentSpinner from '@src/@core/components/spinner/Loading-spinner'
import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select';
import SelectComponentString from '@src/views/components/SelectComponentString';
import { selectThemeColors } from '@src/utility/Utils';
import SelectComponentStringMulti from '@src/views/components/SelectComponentStringMulti';

const defaultValues = {
};


const NewFormViemPage = () => {
    const [submitting, setSubmitting] = useState(false)
    const [fetching, setFetching] = useState(false)
    const [data, setData] = useState([])
    const [selectedData, setSelectedData] = useState([])
    const [selectedForm, setSelectedForm] = useState(null)

    const dataOptions = data.map(r => ({ label: r.name, value: r.id }))
    const {
        handleSubmit,
        register,
        watch,
        control
    } = useForm({ defaultValues });

    const [open, setOpen] = useState([])

    const toggle = (id) => {
        setOpen(prevOpen => (prevOpen === id ? [] : id))
    }

    const filterData = (data) => {
        const selectData = data.find(r => {
            if (r.id === selectedForm?.value) {
                return r
            }
        });
        setSelectedData(selectData)
    };

    const fetchData = () => {
        setFetching(true)

        setTimeout(() => {
            const data = JSON.parse(localStorage.getItem('testData'))
            setData(data || [])
            filterData(data || [])
            setFetching(false)
        }, 600);
    }

    const onSubmit = (submitData) => {
        // setSubmitting(false)
        // if (!data.value) {
        //     toast.error("Нэршил оруулна уу!");
        //     return;
        // }
        console.log(submitData)
    };

    useEffect(() => {
        fetchData()
    }, [selectedForm])

    return (
        <Fragment>
            <Card className='w-50 h-100' tag={'form'} onSubmit={handleSubmit(onSubmit)}>
                <CardHeader>
                    <Row className='w-100'>
                        <Col sm={12}>
                            <Select classNamePrefix='select' options={dataOptions} isClearable value={selectedForm} onChange={setSelectedForm} />
                        </Col>
                    </Row>
                </CardHeader>
                {!selectedForm && <Alert color='warning' className='text-center py-1'>
                    Маягтаа сонгоно уу!
                </Alert>}
                {selectedForm &&
                    <> <CardBody>

                        {fetching && <ComponentSpinner />}

                        {!fetching && <>
                            {!selectedData && <Alert color='warning' className='text-center py-1'>
                                Бүртгэсэн маягт байхгүй байна!
                            </Alert>}

                            {selectedData && <>
                                <div className='w-100 text-center'>
                                    <h5>
                                        {selectedData.name}
                                    </h5>
                                </div>
                                {selectedData.blocks?.map(r => {
                                    return (
                                        <Accordion open={open} toggle={toggle} key={`${r.id}-${r.name}`}>
                                            <AccordionItem>
                                                <AccordionHeader targetId={r.number}>
                                                    {r.name}
                                                </AccordionHeader>
                                                <AccordionBody accordionId={r.number} className='py-0'>
                                                    <Row>
                                                        {r.fields?.map(field => {
                                                            if (field.conditional) {
                                                                if (field.conditional) {
                                                                    const watchField = watch(field.conditionalField);
                                                                    const MatchArray = Array.isArray(watchField) && watchField.includes(field.conditionalValue);

                                                                    if (watchField === field.conditionalValue) {
                                                                        return (
                                                                            <div key={`${field.conditionalField}-${field.conditionalValue}`}>
                                                                                <h6>{field.label} / <span className='m-0 text-warning'>{field.conditionalValue}</span> /</h6>
                                                                                <input
                                                                                    {...register(field.value)}
                                                                                    className="form-control"
                                                                                    placeholder="..."
                                                                                />
                                                                            </div>
                                                                        );
                                                                    }

                                                                    if (MatchArray) {
                                                                        return (
                                                                            <div key={`${field.conditionalField}-${field.conditionalValue}`}>
                                                                                <h6>{field.label} / <span className='m-0 text-warning'>{field.conditionalValue}</span> /</h6>
                                                                                <input
                                                                                    {...register(field.value)}
                                                                                    className="form-control"
                                                                                    type='number'
                                                                                    placeholder="..."
                                                                                />
                                                                            </div>
                                                                        );
                                                                    }
                                                                }

                                                            } else {
                                                                return (
                                                                    <Col sm={12} className='my-50' key={`${r.id}-${r.name}-${field.id}`} >
                                                                        <h6 className="form-label">
                                                                            {field.label}
                                                                            {field.required && <span className='text-danger ms-25req'>
                                                                                *
                                                                            </span>}
                                                                        </h6>

                                                                        {(field.type === "text" || field.type === "textarea" || field.type === "number") &&
                                                                            <input
                                                                                {...register(field.value)}
                                                                                className='form-control'
                                                                                placeholder="..."
                                                                                type={field.type}
                                                                            />
                                                                        }
                                                                        {field.type === "radio" &&
                                                                            <div className='demo-inline-spacing m-0'>
                                                                                {field.options?.map(option => {
                                                                                    return (
                                                                                        <div className='form-check' key={`${field.value}-${option.value}`}>
                                                                                            <Label className='form-check-label m-0'>
                                                                                                <input className="form-check-input" {...register(field.value)} type={'radio'} value={option.value} />
                                                                                                {option.label}
                                                                                            </Label>
                                                                                        </div>)
                                                                                })}
                                                                            </div>
                                                                        }

                                                                        {field.type === "multicheck" &&
                                                                            <div className='demo-inline-spacing m-0'>
                                                                                {field.options?.map(option => {
                                                                                    return (
                                                                                        <div className='form-check' key={`${field.value}-${option.value}`}>
                                                                                            <Label className='form-check-label m-0'>
                                                                                                <input className="form-check-input" {...register(field.value)} type={"checkbox"} value={option.value} />
                                                                                                {option.label}
                                                                                            </Label>
                                                                                        </div>)
                                                                                })}
                                                                            </div>
                                                                        }

                                                                        {field.type === "switch" &&
                                                                            <div className='form-switch'>
                                                                                <input
                                                                                    className='form-check-input'
                                                                                    {...register(field.value)}
                                                                                    type='checkbox'
                                                                                />
                                                                            </div>}

                                                                        {field.type === "singleselect" &&
                                                                            <Controller
                                                                                name={field.value}
                                                                                control={control}
                                                                                render={({ field: item }) =>
                                                                                    <SelectComponentString
                                                                                        options={field.options}
                                                                                        value={item.value}
                                                                                        setValue={item.onChange}
                                                                                        className="form-control"
                                                                                        isClearable
                                                                                    />}
                                                                            />
                                                                        }

                                                                        {field.type === "multiselect" &&
                                                                            <Controller
                                                                                name={field.value}
                                                                                control={control}
                                                                                render={({ field: item }) => {
                                                                                    return <SelectComponentStringMulti
                                                                                        options={field.options}
                                                                                        value={item.value}
                                                                                        setValue={item.onChange}
                                                                                        className="form-control"
                                                                                    />
                                                                                }}
                                                                            />
                                                                        }
                                                                    </Col>
                                                                )
                                                            }
                                                        })}
                                                    </Row>
                                                </AccordionBody>
                                            </AccordionItem>
                                        </Accordion>
                                    )
                                })}
                            </>}
                        </>}
                    </CardBody>
                        <CardFooter className='d-flex justify-content-end'>
                            <Button outline color="success" type="submit" disabled={submitting}>
                                {submitting && <Spinner size={'sm'} className="me-50" />}
                                Хадгалах
                            </Button>
                        </CardFooter>
                    </>}
            </Card>
        </Fragment>
    )
}

export default NewFormViemPage