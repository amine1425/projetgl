import React from 'react';
import logo from './logo.svg';
import './App.css';


const iscription=(
    <div>
        <div id="form-outer">
            <form id="survey-form" method="GET" action="https://crossorigin.me/https://freecodecamp.com">
                <div className="rowTab">
                    <div className="labels">
                        <label id="name-label" htmlFor="name">* Name: </label>
                    </div>
                    <div className="rightTab">
                        <input autoFocus type="text" name="name" id="name" className="input-field"
                               placeholder="Enter your name" required/>
                    </div>
                </div>
                <div className="rowTab">
                    <div className="labels">
                        <label id="email-label" htmlFor="email">* Email: </label>
                    </div>
                    <div className="rightTab">
                        <input type="email" name="email" id="email" className="input-field" required
                               placeholder="Enter your Email"/>
                    </div>
                </div>
                <div className="rowTab">
                    <div className="labels">
                        <label id="number-label" htmlFor="age">* Age: </label>
                    </div>
                    <div className="rightTab">
                        <input type="number" name="age" id="number" min={1} max={125} className="input-field"
                               placeholder="Age"/>
                    </div>
                </div>
                <div className="rowTab">
                    <div className="labels">
                        <label htmlFor="currentPos">Which option best describes your current role?</label>
                    </div>
                    <div className="rightTab">
                        <select id="dropdown" name="currentPos" className="dropdown">
                            <option disabled value>Select an option</option>
                            <option value="student">Profitional Account</option>
                            <option value="job">Particular Account</option>

                        </select>
                    </div>
                </div>

                <div className="rowTab">
                    <div className="labels">
                        <label htmlFor="preferences">Things that should be improved in the future<br/>(Check all that
                            apply): </label>
                    </div>
                    <div className="rightTab">
                        <ul id="preferences" style={{listStyle: 'none'}}>
                            <li className="checkbox"><label><input name="prefer" defaultValue={1} type="checkbox"
                                                                   className="userRatings"/>Front-end Projects</label>
                            </li>
                            <li className="checkbox"><input name="prefer" defaultValue={2} type="checkbox"
                                                            className="userRatings"/>Back-end Projects
                            </li>
                            <li className="checkbox"><label><input name="prefer" defaultValue={3} type="checkbox"
                                                                   className="userRatings"/>Data Visualization</label>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="rowTab">
                    <div className="labels">
                        <label htmlFor="comments">Any Comments or Suggestions?</label>
                    </div>
                    <div className="rightTab">
                        <textarea id="comments" className="input-field" style={{height: '50px', resize: 'vertical'}}
                                  name="comment" placeholder="Enter your comment here..." defaultValue={""}/>
                    </div>
                </div>
                <button id="submit" type="submit">Submit</button>
            </form>
        </div>
    </div>
);

const element22 = (


    <div className="bloc1x">
        <div><h1>Banking System</h1></div>
        <div>{iscription}</div>
    </div>


);

const element2 =(

    <div>
        <table className="general" border="0" cellPadding="0" cellSpacing="0" >
            <tr>
                <td className="comp" valign="middle">
                    <table className="table"  border="0" cellPadding="0" cellSpacing="0" >
                        <tr>
                            <td valign="top" className="td1" colSpan="2">
                                <table width="100%">
                                    <tr>
                                        <td width="150"></td>
                                        <td align="center"><span className="span">Login</span> </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td className="comp">
                                <table cellPadding="0" cellSpacing="0">
                                    <tr>
                                        <td className="utilisat"><b>Utilisateur</b></td>
                                        <td className="utilisat"><input className="input40" type="text"
                                                                        name="j_username" label="j_username" mandatory="true"></input></td>
                                    </tr>
                                    <tr>
                                        <td className="passe"><b>Mot de passe</b></td>
                                        <td className="password">
                                            <input className="normal-password" type="password" name="j_password" label="j_password" mandatory="true"></input></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2" className="foc">
                                            <input type="submit" value="login" className="normal-action"></input>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>

                </td>
            </tr>
        </table>

    </div>
);



function App(){  return (
        <div className="App">

            {element22}
           {element2}
        </div>
    );
}

export default App;




