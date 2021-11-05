import React, { useState } from 'react'
import { Input, Menu, Dropdown, Card, Meta, Avatar } from 'antd';
import { Offcanvas, InputGroup, FormControl } from 'react-bootstrap'
import { SearchOutlined } from '@ant-design/icons';

export default function index() {
    const [searchShow, setSearchShow] = useState(false);
    const { Search } = Input;
    const onSearch = value => console.log(value);
    return (
        <>
            <SearchOutlined className="iconhover text-drak fs-4 fw-light me-4" onClick={() => {
                setSearchShow(!searchShow)
            }} />
            <Offcanvas placement={"top"} show={searchShow} onHide={() => {
                setSearchShow(!searchShow)
            }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="mt-4">What are you lookking for?</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <InputGroup className="my-3 ">
                        <FormControl aria-label="Text input with checkbox" placeholder="Search Products, Category, Brands...." className="searchInput" />
                        <SearchOutlined className="iconhover text-drak fs-4 fw-light me-4" />
                    </InputGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
