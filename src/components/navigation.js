import React from 'react'
import classes from './navigation.css'
import LaImg from '../images/la.jpg'

const navigation = (props) => {

    return(

        <div>

            <div id="myCarousel" className="carousel slide" data-ride="carousel">

                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>

                </ol>


                <div className="carousel-inner">
                    <div className="item active">
                        <img src={LaImg} alt="Los Angeles" className="images"/>
                        <div className="carousel-caption">
                            <h3>Amrit Kaur</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12">
                    <nav className="navbar navbar-inverse">


                        <ul className="nav navbar-nav nv">
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Skills</a></li>
                            <li><a href="#">Resume</a></li>
                            <li><a href="#">Link</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>


                    </nav>

                </div>


            </div>
        </div>

    )

}
export default navigation;