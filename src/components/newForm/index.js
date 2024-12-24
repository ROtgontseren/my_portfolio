import React, { Fragment, useEffect, useState } from 'react'
import { Alert, Button, Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, Row } from 'reactstrap'
import '@styles/react/libs/react-select/_react-select.scss'
import ComponentSpinner from '@src/@core/components/spinner/Loading-spinner'
import ModalForm from './modalForm'
import ModalBlock from './modalBlock'
import ModalField from './modalField'
import { Edit, Trash2 } from 'react-feather'

const NewForm = () => {

    const [fetchingForm, setFetchingForm] = useState(false)
    const [fetchingBlock, setFetchingBlock] = useState(false)
    const [fetchingField, setFetchingField] = useState(false)

    const [dataForm, setDataForm] = useState([])
    const [dataBlock, setDataBlock] = useState([])
    const [dataField, setDataField] = useState([])

    const [selectedForm, setSelectedForm] = useState(null)
    const [selectedBlock, setSelectedBlock] = useState(null)
    const [selectedField, setSelectedField] = useState(null)

    const [modalFormShow, setModalFormShow] = useState(false)
    const [modalBlockShow, setModalBlockShow] = useState(false)
    const [modalFieldShow, setModalFieldShow] = useState(false)



    const fetchFormData = () => {
        setFetchingForm(true)

        setTimeout(() => {
            const data = JSON.parse(localStorage.getItem('testData'))
            setDataForm(data || [])
            setFetchingForm(false)
        }, 600);
    }

    const fetchBlockData = () => {
        setFetchingBlock(true)

        setTimeout(() => {
            const data = JSON.parse(localStorage.getItem('testData'));
            const selectedData = data.find(r => r.id === selectedForm?.id)?.blocks;
            setDataBlock(selectedData || []);
            setFetchingBlock(false)
        }, 600);
    }

    const fetchFieldData = () => {
        setFetchingField(true)
        setTimeout(() => {
            const data = JSON.parse(localStorage.getItem('testData'));
            const selectedFields = data
                .find(r => r.id === selectedForm?.id)
                ?.blocks.find(t => t.id === selectedBlock?.id)
                ?.fields;

            setDataField(selectedFields || []);
            setFetchingField(false)
        }, 600);
    }

    const showFormModal = (model) => {
        setSelectedForm(model)
        setModalFormShow(true)
    }

    const hideFormModal = (refresh) => {
        setSelectedForm(null)
        setModalFormShow(false)

        if (refresh) {
            fetchFormData()
        }
    }

    const showBlockModal = (model) => {
        setSelectedBlock(model)
        setModalBlockShow(true)
    }

    const hideBlockModal = (refresh) => {
        setSelectedBlock(null)
        setModalBlockShow(false)

        if (refresh) {
            fetchBlockData()
        }
    }

    const showFieldModal = (model) => {
        setSelectedField(model)
        setModalFieldShow(true)
    }

    const hideFieldModal = (refresh) => {
        setSelectedField(null)
        setModalFieldShow(false)

        if (refresh) {
            fetchFieldData()
        }
    }

    const selectForm = (model) => {
        setSelectedForm(model)
        setSelectedBlock(null)
        setSelectedField(null)
    }

    const selectBlock = (model) => {
        setSelectedBlock(model)
    }

    const selectField = (model) => {
        setSelectedField(model)
    }

    const deleteForm = (id) => {
        let mainData = JSON.parse(localStorage.getItem('testData'));
        if (mainData) {
            mainData = mainData.filter(r => r.id !== id);
            localStorage.setItem('testData', JSON.stringify(mainData));
        }
    };

    const deleteBlock = (id) => {
        let mainData = JSON.parse(localStorage.getItem('testData'));
        if (mainData) {
            mainData.forEach(item => {
                item.blocks = item.blocks.filter(r => r.id !== id);
            });
            localStorage.setItem('testData', JSON.stringify(mainData));
        }
    }

    const deleteField = (id) => {
        let mainData = JSON.parse(localStorage.getItem('testData'))
        if (mainData) {
            mainData.forEach(r => {
                r.blocks.forEach(t => {
                    t.fields = t.fields.filter(field => field.id !== id);
                });
            });
            localStorage.setItem('testData', JSON.stringify(mainData));
        }
    };

    useEffect(() => {
        fetchFormData()
        fetchBlockData()
        fetchFieldData()
    }, [selectedForm, selectedBlock, selectedField])


    return (
        <Fragment>
            <Row className="match-height w-100">
                <Col sm={4} className='h-100'>
                    <Card className="match-height">
                        <CardHeader>
                            <h6>
                                Маягтын бүртгэл
                            </h6>
                            <Button outline size='sm' color='success' onClick={() => showFormModal(null)}>
                                Бүртгэл үүсгэх
                            </Button>
                        </CardHeader>
                        <CardBody>
                            {fetchingForm && <ComponentSpinner />}

                            {!fetchingForm && <>
                                {dataForm.length === 0 && <Alert color='warning' className='text-center py-1'>
                                    Бүртгэл олдсонгүй!
                                </Alert>}

                                {dataForm.length > 0 && <ListGroup >
                                    {dataForm.map((r, index) => {
                                        const selected = r.id === selectedForm?.id

                                        return (
                                            <ListGroupItem key={r.id} tag='li' action className='cursor-pointer' onClick={() => selectForm(r)}
                                                style={{
                                                    transition: '.3s',
                                                    borderLeftColor: selected ? '#6C62EB' : undefined,
                                                    borderLeftWidth: selected ? '0.4rem' : undefined,
                                                    borderRightColor: selected ? '#6C62EB' : undefined,
                                                    borderRightWidth: selected ? '0.4rem' : undefined
                                                }}>
                                                <div className='d-flex justify-content-between'>
                                                    <div className={`${selected && 'text-primary'}`}>
                                                        <span>{index + 1} - </span>
                                                        <span>{r.name}</span>
                                                    </div>
                                                    <div className='d-flex gap-1'>
                                                        <div className={selected ? "text-primary" : ""} onClick={() => { showFormModal(r) }}>
                                                            <Edit size={20} />
                                                        </div>
                                                        <div className='cursor-pointer text-danger' onClick={() => deleteForm(r.id)}>
                                                            <Trash2 size={20} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </ListGroupItem>
                                        )
                                    })}
                                </ListGroup>}
                            </>}
                        </CardBody>
                    </Card>
                </Col>
                {selectedForm && <Col sm={4} className='h-100'>
                    <Card>
                        <CardHeader>
                            <h6 className='m-0'>
                                <small>{selectedForm.name}</small>
                            </h6>
                            <Button outline size='sm' color='success' onClick={() => showBlockModal(null)}>
                                Блок үүсгэх
                            </Button>
                        </CardHeader>
                        <CardBody>
                            {fetchingBlock && <ComponentSpinner />}
                            {!fetchingBlock && <>
                                {dataBlock.length === 0 && <Alert color='warning' className='text-center py-1'>
                                    Блок олдсонгүй!
                                </Alert>}
                                <ListGroup>
                                    {dataBlock?.map((r, index) => {
                                        const selected = r.id === selectedBlock?.id;
                                        return (
                                            <ListGroupItem
                                                key={r.id}
                                                tag="li"
                                                action
                                                className="cursor-pointer"
                                                onClick={() => {
                                                    selectBlock(r)
                                                }}
                                                style={{
                                                    transition: ".3s",
                                                    borderLeftColor: selected ? "#13BDE3" : undefined,
                                                    borderLeftWidth: selected ? "0.4rem" : undefined,
                                                    borderRightColor: selected ? "#13BDE3" : undefined,
                                                    borderRightWidth: selected ? "0.4rem" : undefined,
                                                }}
                                            >
                                                <div className="d-flex justify-content-between">
                                                    <div className={selected ? "text-info" : ""}>
                                                        <span>{index + 1} - </span>
                                                        <span>{r.name}</span>
                                                    </div>
                                                    <div className='d-flex gap-1'>
                                                        <div className={selected ? "text-info" : ""} onClick={() => showBlockModal(r)}>
                                                            <Edit size={20} />
                                                        </div>
                                                        <div className='cursor-pointer text-danger' onClick={() => deleteBlock(r.id)}>
                                                            <Trash2 size={20} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </ListGroupItem>
                                        );

                                    })}
                                </ListGroup>
                            </>}
                        </CardBody>
                    </Card>
                </Col>}

                {selectedBlock && <Col sm={4} className='h-100'>
                    <Card className="match-height">
                        <CardHeader>
                            <h6 className='m-0'>{selectedBlock.name}</h6>
                            <Button outline size='sm' color='success' onClick={() => showFieldModal(null)}>
                                Асуулт үүсгэх
                            </Button>
                        </CardHeader>
                        <CardBody>
                            {fetchingField && <ComponentSpinner />}
                            {!fetchingField && <>
                                {dataField.length === 0 && <Alert color='warning' className='text-center py-1'>
                                    Асуумж олдсонгүй!
                                </Alert>}
                                <ListGroup>
                                    {dataField?.map((r, index) => {
                                        const selected = r.id === selectedField?.id;
                                        return (
                                            <ListGroupItem key={r.id} onClick={() => { selectField(r) }}>
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <span>{index + 1} - </span>
                                                        <span>{r.label}</span>
                                                    </div>
                                                    <div className='d-flex gap-1'>
                                                        <div className={selected ? "text-warning" : ""} onClick={() => { showFieldModal(r) }}>
                                                            <Edit size={20} />
                                                        </div>
                                                        <div className='cursor-pointer text-danger' onClick={() => deleteField(r.id)}>
                                                            <Trash2 size={20} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </ListGroupItem>
                                        );

                                    })}
                                </ListGroup>
                            </>}
                        </CardBody>
                    </Card>
                </Col>}

            </Row>

            {modalFormShow && <ModalForm show={modalFormShow} toggle={hideFormModal} model={selectedForm} fetchFormData={fetchFormData} />}
            {modalBlockShow && <ModalBlock show={modalBlockShow} toggle={hideBlockModal} model={selectedBlock} selectedForm={selectedForm} fetchBlockData={fetchBlockData} />}
            {modalFieldShow && <ModalField show={modalFieldShow} toggle={hideFieldModal} model={selectedField} selectedBlock={selectedBlock} selectedForm={selectedForm} fetchFieldData={fetchFieldData} />}
        </Fragment >
    )
}

export default NewForm