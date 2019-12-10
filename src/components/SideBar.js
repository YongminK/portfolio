import React from "react";
export default function SideBar() {
    return(
        <div >
            <div>
                Photo
            </div>
            <div>
                Profile
            </div>
            <div className='d-flex flex-column'>
                Contacts
                <a href='https://github.com/YongminK'>GitHub</a>
                <a href='tel:+79502227507'>+79502227507</a>
                <a href='mailto:yongminni97@gmail.com'>yongminni97@gmail.com</a>
            </div>
        </div>
    )
}