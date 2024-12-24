import { Fragment, useState, useEffect } from "react"
import {
    Button,
    Row,
    Col,
    Modal,
    Input,
    Label,
    ModalBody,
    ModalHeader,
    FormFeedback,
    ListGroup,
    ListGroupItem,
    Badge
} from "reactstrap"

// ** Third Party Components
import { Controller, useForm } from 'react-hook-form'
import toast from "react-hot-toast"

import { createHospital, findHospitalUsers, getById } from "../../api/hospital/data"

const defaultValues = {
    name: '',
    hasOnline: false
}

const HospitalForm = ({ show, toggle, id, khorooId, fetchData }) => {

    if (!show) {
        return (<div></div>)
    }

    const [submitting, setSubmitting] = useState(false)
    const [users, setUsers] = useState([])

    const captionText = id ? 'Эмнэлгийн мэдээлэл засварлах' : 'Эмнэлэг шинээр бүртгэх'

    const {
        control,
        handleSubmit,
        setError,
        reset,
        formState: { errors }
    } = useForm({ defaultValues })

    // ** Get data on mount
    useEffect(() => {
        if (id) {
            getById(id).then((res) => {
                if (res.data.success) {
                    reset(res.data.data)
                }
            })

            findHospitalUsers(id).then(res => {
                if (res.data.success) {
                    setUsers(res.data.data)
                } else {
                    setUsers([])
                }
            })
        } else {
            reset(defaultValues)
        }
    }, [])

    const onSubmit = submitData => {
        let valid = true
        setSubmitting(true)

        if (!submitData.name) {
            valid = false
            setError('name', {
                type: 'manual',
                message: 'Эмнэлгийн нэрийг оруулна уу!'
            })
        }

        if (valid) {
            createHospital(submitData, khorooId).then((res) => {
                if (res.data.success) {
                    toggle()
                    fetchData()
                    toast.success("Амжилттай хадгалагдлаа")
                } else {
                    toast.error(`${res.data.message}`)
                }
                setSubmitting(false)
            })
        } else {
            setSubmitting(false)
        }
    }

    return (
        <Fragment>
            <Modal isOpen={show} toggle={() => toggle()} className='modal-dialog-centered modal-lg'>
                <ModalHeader className='bg-transparent' toggle={() => toggle()}></ModalHeader>
                <ModalBody className='px-sm-5 mx-50 pb-5'>
                    <div className='text-center mb-2'>
                        <h4 className='mb-1'>{captionText}</h4>
                    </div>
                    <Row tag='form' className='gy-1 pt-75' onSubmit={handleSubmit(onSubmit)}>
                        <Col md={12}>
                            <Label className='form-label' for='name'>
                                Эмнэлгийн нэр
                            </Label>
                            <Controller
                                control={control}
                                name='name'
                                render={({ field }) => {
                                    return (
                                        <Input
                                            {...field}
                                            id='name'
                                            placeholder='...'
                                            invalid={errors.name && true}
                                        />
                                    )
                                }}
                            />
                            {errors.name && <FormFeedback>{errors.name.message}</FormFeedback>}
                        </Col>

                        <Col md={6} xs={12}>
                            <Label className='form-label' for='hasOnline'>
                                Онлайн цаг захиалга хийгдэх эсэх
                            </Label>
                            <Controller
                                control={control}
                                name='hasOnline'
                                render={({ field }) => {
                                    return (
                                        <div className='form-switch'>
                                            <Input
                                                {...field}
                                                id='hasOnline'
                                                type="switch"
                                                checked={field.value}
                                                onChange={field.onChange}
                                            />
                                        </div>
                                    )
                                }}
                            />
                            {errors.hasOnline && <FormFeedback>{errors.hasOnline.message}</FormFeedback>}
                        </Col>

                        {id && users?.length > 0 && <Col md={12}>
                            <div>
                                Хэрэглэгчид
                            </div>
                            <ListGroup>
                                {users.map(r => {
                                    return (<ListGroupItem key={r.id} className='d-flex justify-content-between align-items-center'>
                                        {r.username}
                                        <Badge color="light-warning">
                                            {r.role}
                                        </Badge>
                                    </ListGroupItem>)
                                })}
                            </ListGroup>
                        </Col>}

                        <Col xs={12} className='text-center mt-2 pt-50'>
                            <Button type='submit' className='me-1' color='primary' disabled={submitting}>
                                Хадгалах
                            </Button>
                            <Button type='reset' color='secondary' outline onClick={() => { toggle() }}>
                                Хаах
                            </Button>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </Fragment>
    )

}

export default HospitalForm