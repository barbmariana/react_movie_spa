import styled from "styled-components";

const MoviesContainer = styled.section`
        ul{
                padding: 15px;
                display: flex;
                justify-content: center;
                align-items: flex-start;
                flex-wrap: wrap;
                gap: 20px;
                flex-direction: row;
        }
        a{
                color:#A52A2A;
                text-decoration:none;
        }
        a:visited{
                        color:#A52A2A
        }
        li {
                
                width: 300px; 
                height: 430px; 
                list-style-type:
                overflow: hidden;
                margin: 15px;
                padding: 20px;
                background-color: #f9f9f9;
                border: 1px solid #ddd;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                display: flex;
                flex-direction: column;
                align-items: center;
                max-width: 200px;
                text-align: center;
                overflow: hidden;
                text-overflow: ellipsis;
        }

        li p {
                margin: 10px 0 0 0;
                font-size: 0.9em;
                color: #555;
                margin-bottom:10px;
        }

        li a {
                font-weight: bold;
                color: #A52A2A;
                text-decoration: none;
                margin-bottom: 5px;
                font-size: 1.2em;
                font-weight: bold;
        }
        li img{
                width: 100%;
                height: auto;
                object-fit: cover;
        }
        li span {
                margin:10px 0
                color: #A52A2A;
                text-decoration: none;
                cursor: pointer;
        }
`
export default MoviesContainer;