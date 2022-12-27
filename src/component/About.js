import React from 'react';

export default function About(props) {
  return (
    <>
        <div className={`my-5 text-${props.mode === 'light'?'dark':'light'}`}>
            <div className="d-flex justify-content-center">
                <img className="rounded-circle shadow" alt="myImage" src="https://pps.whatsapp.net/v/t61.24694-24/300090768_1282092942579606_6482513264951415847_n.jpg?ccb=11-4&oh=01_AdSrustbx2ZOtXQqcMmrtBuhk23PQATvWhcaxg8oM5jEeg&oe=63B6BA64" width="25%" height="25%" />
                <div className="row">
                    <p className="mx-5 mt-5 mb-0 display-1">I'm Snej Hirpara</p>
                    <p className="mx-5 mb-5 display-6">Front-End Developer</p>
                </div>
            </div>
            <div className="container my-3">
                <p></p>
            </div>
        </div>
    </>
  )
}
