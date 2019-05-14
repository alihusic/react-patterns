import React from 'react';
import css from './footer.module.css';
import {Col, Container, Row} from "reactstrap";

// Set prop types
type FooterProps = {};

class Footer extends React.Component<FooterProps> {
    componentDidMount() {
    }

    componentDidUpdate() {
    }

    render() {

        return (
            <footer className={css.footer}>
                <Container>
                    <Row>
                        <Col sm={6} md={3}>
                            <h4>Sitemap</h4>
                            <ul className={css['footer-list']}>
                                <li>
                                    <a className={css['footer-link']}>Home</a>


                                </li>
                                <li>
                                    <a className={css['footer-link']}>About</a>
                                </li>
                                <li>
                                    <a className={css['footer-link']}>Settings</a>
                                </li>
                            </ul>
                        </Col>
                        <Col sm={6} md={3}>
                            <h4>External</h4>
                            <ul className={css['footer-list']}>
                                <li>
                                    <a>Legal</a>

                                </li>
                                <li>
                                    <a>Terms of agreement</a>
                                </li>
                            </ul>
                        </Col>
                        <Col sm={12} md={6}>
                            <h4>About</h4>
                            <p className="mb-0">
                                Lorem ipsum dolor sit amet.  In volutpat mauris sed ipsum fringilla, feugiat fermentum dolor venenatis. Etiam ultricies lacus ut enim congue tempus.
                            </p>
                        </Col>
                    </Row>
                    <p className={css.copyright}>Control Panel © 2019</p>
                </Container>
            </footer>
        );
    };

}

// Set default props
Footer.defaultProps = {};

export default Footer;
