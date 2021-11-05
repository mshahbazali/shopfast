import React, { useState } from 'react'
import { Container, Navbar, Nav, Image, Offcanvas } from 'react-bootstrap'
import Logo from '../../Assets/Images/logo.png'
import { Menu, Dropdown } from 'antd';
import SearchIcon from '../SearchIcon'
import UserIcon from '../UserIcon'
import CategoriesIcon from '../CategoriesIcon'
import CartIcon from '../CartIcon'
import { MenuOutlined, AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

export default function index() {
    const [mobilemenu, setMobileMenu] = useState(false)
    const { SubMenu } = Menu;
    return (
        <>
            <Navbar collapseOnSelect expand="lg" style={{ height: "5rem", backgroundColor: "#fff" }} className="shadow-sm p-3  bg-body rounded">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image src={Logo.src} fluid />
                    </Navbar.Brand>
                    <div class="mobilemenuicon">
                        <SearchIcon />
                        <MenuOutlined onClick={() => {
                            setMobileMenu(!mobilemenu)
                        }} className="menuicon iconhover text-drak fs-3 fw-light me-4" />
                        <Offcanvas show={mobilemenu} onHide={() => {
                            setMobileMenu(!mobilemenu)
                        }}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>{<Image src={Logo.src} fluid />}</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Menu
                                    style={{ width: "100%" }}
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    mode="inline"
                                >
                                    <Menu.Item key="1">HOME</Menu.Item>
                                    <SubMenu key="sub" title="CATEGORIES">
                                        <Menu.Item key="1">Option 3</Menu.Item>
                                        <Menu.Item key="1">Option 4</Menu.Item>
                                    </SubMenu>
                                    <Menu.Item key="1">SHOP</Menu.Item>
                                    <Menu.Item key="1">BLOG</Menu.Item>
                                    <Menu.Item key="1">ABOUT US</Menu.Item>
                                    <Menu.Item key="1">CONTACT US</Menu.Item>

                                </Menu>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                    {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link className="navtext fs-6 mx-2 text-dark" href="#features">Home</Nav.Link>
                            <Dropdown overlay={<Menu>
                                <Menu.Item>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                                        1st menu item
                                    </a>
                                </Menu.Item>
                                <Menu.Item>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                                        2nd menu item
                                    </a>
                                </Menu.Item>
                                <Menu.Item>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                                        3rd menu item
                                    </a>
                                </Menu.Item>
                            </Menu>} placement="bottomCenter" arrow>
                                <Nav.Link className="navtext fs-6 mx-2 text-dark" href="#pricing">Categories</Nav.Link>
                            </Dropdown>
                            <Nav.Link className="navtext fs-6 mx-2 text-dark" href="#pricing">Shop</Nav.Link>
                            <Nav.Link className="navtext fs-6 mx-2 text-dark" href="#pricing">Blog</Nav.Link>
                            <Nav.Link className="navtext fs-6 mx-2 text-dark" href="#pricing">About Us</Nav.Link>
                            <Nav.Link className="navtext fs-6 mx-2 text-dark" href="#pricing">Contact Us</Nav.Link>
                        </Nav>
                        <Nav>
                            <SearchIcon />
                            <UserIcon />
                            <CategoriesIcon />
                            <CartIcon />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
