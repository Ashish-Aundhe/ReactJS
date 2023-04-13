import React from 'react'

export default function TextForms(props) {
    return (
        <div>
            <h1>{props.heading}</h1>
            <div class="mb-3">
                {/* <label for="myBox" class="form-label">Example textarea</label> */}
                <textarea class="form-control" id="myBox" rows="8"></textarea>
            </div>
        </div>
    );
}
