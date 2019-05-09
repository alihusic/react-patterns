import React, {Fragment} from 'react';
import logo from "../Sidebar/logo.png";
import css from "./about.module.css";

// Set prop types
type AboutProps = {};

class About extends React.Component<AboutProps> {
    componentDidMount() {
    }

    componentDidUpdate() {
    }

    render() {

        return (
            <Fragment>
                <div className="d-flex mb-4 justify-content-center">
                    <img className={css.logo} src={logo} />
                </div>
                <div>Praesent ut massa vulputate justo pulvinar tempus. Sed ornare orci accumsan fringilla pretium. Cras nec felis at nunc vestibulum vulputate vitae at erat. Aenean fermentum ligula ipsum, at porttitor odio pharetra in. Sed sollicitudin sem hendrerit, sollicitudin enim tempor, scelerisque felis. Cras vitae ipsum eget ante pulvinar porta vel sit amet eros. In volutpat mauris sed ipsum fringilla, feugiat fermentum dolor venenatis. Etiam ultricies lacus ut enim congue tempus. Sed a fringilla quam. Vestibulum orci dui, suscipit sagittis lorem sed, egestas congue orci. Cras varius pulvinar lectus, quis finibus lectus ultricies non. Vivamus semper sapien turpis, et porttitor magna commodo id. Praesent lobortis augue sed nisl commodo facilisis. Praesent ex lorem, porta id accumsan ac, porttitor id nunc. Praesent ac dui sem. Praesent tincidunt arcu a dolor auctor, quis luctus arcu molestie.</div>
            </Fragment>
        );
    };

}

// Set default props
About.defaultProps = {};

export default About;
