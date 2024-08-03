export const Heros = () => {
    return (
        <div>
            <div className="d-none d-lg-block">
                <div className="row g-0 mt-5">
                    <div className="col-sm-6 col-md-6">
                        <div className="col-image-left"></div>
                    </div>
                    <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                        <div className="ml-2">
                            <h1>What have you been reading?</h1>
                            <p className="lead">
                                The library team would love to know what have you been reading.
                                Whether it is to learn new skill or grow within one ,
                                we will be able to provide the top content for you!
                            </p>
                            <a className="btn main-color btn-lg text-white" href="#">Sign up</a>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-4 col-md-4 container d-flex 
                    justify-content-center align-items-center">
                        <div className="ml-2">
                                <h1>Our collection is always changing!</h1>
                                <p className="lead">
                                    Try to check in daily as out collection is always changing!
                                    We work nonstop to provide the most accurate book selection possible
                                    for our luv 2 Read students! We are deligent about our book selection
                                    and our book selection and out books are always going to be Our
                                    top priority.
                                </p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <div className="col-image-right"></div>
                    </div>
                </div>
            </div>
            {/*Mobile heros*/}
            <div className="d-lg-none">
                <div className="container">

                    

                </div>
            </div>
        </div>

    );
}