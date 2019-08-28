import React from "react";
import styled from 'styled-components'

const Requests = styled.div`
    text-align: left;
    h1 {
        font-size: 30px;
        margin-bottom: 20px;
    }
    .btns {
        display: flex;
        margin-bottom: 10px;
        li {
            padding: 10px 20px;
            width: 100px;
            text-align: center;
            font-size: 14px;
            &.active {
                border-bottom: 2px solid black
            }
        }
    }
    .request {
        h2 {
            background: #7a8900;
            color: white;
            padding: 15px;
            margin-bottom: 10px;
        }
        .header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
            p {
                width: 33%;
                padding-right: 50px;
                box-sizing: border-box;
                &:last-child {
                    text-align: right;
                }
            }
        }
        .content {
            li {
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
                p {
                    width: 33%;
                    font-size: 14px;
                    padding-right: 30px;
                    box-sizing: border-box;
                    &:last-child {
                        text-align: right;
                        a {
                            background: red;
                            padding: 10px 20px;
                            display: inline-block;
                            border-radius: 5px;
                            color: white;
                        }
                    }
                }
            }
        }
    }
`

function Request() {
    return (
        <Requests>
            <h1>Request</h1>
            <ul className="btns">
                <li className="active">
                    ALL
                </li>
                <li>
                    PENDING
                </li>
                <li>
                    APPROVED
                </li>
                <li>
                    DENIED
                </li>
            </ul>
            <div className="request">
                <h2>PENDING REQUESTS</h2>
                <div className="header">
                    <p>DATE</p>
                    <p>REASON</p>
                    <p>STATUS</p>
                </div>
                <ul className="content">
                    <li>
                        <p>2017/09/21</p>
                        <p>Data science algorithms</p>
                        <p>
                            <a>Pending</a>
                        </p>
                    </li>
                    <li>
                        <p>2017/09/21</p>
                        <p>Data science algorithms</p>
                        <p>
                            <a>Pending</a>
                        </p>
                    </li>
                    <li>
                        <p>2017/09/21</p>
                        <p>Data science algorithms</p>
                        <p>
                            <a>Pending</a>
                        </p>
                    </li>
                </ul>
            </div>
        </Requests>
    );
}

export default Request