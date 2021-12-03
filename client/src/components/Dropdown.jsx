import React from 'react';
import styled from 'styled-components';
//import './dropdown.css';


const DropDownContainer = styled("div")``;
const DropDownHeader = styled("div")``;
const DropDownListContainer = styled("div")``;
const DropDownList = styled("ul")``;
const ListItem = styled("li")``;

function DropDown() {
    return (
        <div className="support-dropdown">
            <h2>Other Ways to Support Us</h2>
            <DropDownContainer>
                <DropDownHeader>Other Ways to Support Us</DropDownHeader>
                <DropDownListContainer>
                    <DropDownList>
                        <ListItem>Chewy Wishlist</ListItem>
                        <ListItem>Amazon Wishlist</ListItem>
                        <ListItem>Shop Merchandise</ListItem>
                        <ListItem>Volunteer</ListItem>
                    </DropDownList>
                </DropDownListContainer>
            </DropDownContainer>
        </div>
    );
}

export default DropDown;