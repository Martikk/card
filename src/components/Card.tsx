import styled from "styled-components";
import cardimage from "../assets/cardimage.jpeg"
import {myTheme} from "./Styles/Theme.styled";
import {CardButton} from "./Button.styled";


function Card () {
return (
    <BoxCard>
        <CardImage src={cardimage} alt = "sahara"/>
        <CardTitle>Headline</CardTitle>
        <CardDescription>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</CardDescription>
        <ButtonBox>
            <CardButton typeBtn={"more"}>See more</CardButton>
            <CardButton typeBtn={"save"}>Save</CardButton>
        </ButtonBox>
    </BoxCard>
)
}

export default Card;


const BoxCard = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    flex-wrap: wrap;
    border-radius: 15px;
    background: #FFF;
    box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.10);
    width: 300px;
    height: 350px;
`

const CardTitle = styled.h3`
    color: ${myTheme.colors.blacksecondary};
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 10px 20px;`

const CardDescription = styled.p`
    color: ${myTheme.colors.grey};
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 166.667% */
    margin: 10px 20px;
    width: 260px;
    text-align: left; 
    text-indent: 0; 
`;

const CardImage = styled.img`
    width: 280px;
    height: 170px;
    flex-shrink: 0;
    border-radius: 10px;
    background: lightgray 50% / cover no-repeat;
    margin: 10px;
`;

const ButtonBox = styled.div `
    display: flex;
    margin: 10px 12px 20px 20px;
    gap: 12px;
`