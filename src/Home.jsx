import React from "react";

function Home(){
    return (
        <div className="text-left m-5">
            <h1 className="mb-3">Let Understand How this website works</h1>
            <p>Firstly we have a navigation bar, using this we can navigate to Home page which is this page </p>
            <p>In Home page, there is explanation on how this webpage works.</p>
            <p>On clicking Employees on navlink,you will go to employees details page. </p>
            <p>In employees details page, for each employee we have employee name,id,username and phone number</p>
            <p>There is a search bar on employee details page, where you can search for your employee with employee's id.</p>
            <p>Each employee details are enclosed in a card which has a delete button.</p>
            <p>With the delete button you can delete that employee record from that webpage.</p>
            <p>To get complete details of that respective employee you can click on that employee card.</p>
            <p>On clicking on that employee card,you will be redirected to a page which have complete details of that employee.</p>
            <p><b>Note: </b> After entering an id in searchbar if you received all employees details then it means that employee with given id doesnot exist.</p>
            <p><b>Note: </b> After searching if you need to get all employee details refresh thye page. or goto home route and come again.</p>
        </div>
    )
}

export default Home;