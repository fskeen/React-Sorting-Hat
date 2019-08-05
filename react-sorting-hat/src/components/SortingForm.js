import React from 'react'

class SortingForm extends React.Component {
    constructor() {
        super();
        this.state = {
            visCounter: 1,
            gryff: 0,
            slyth: 0,
            raven: 0,
            huff: 0
        }
    }

    nextQuestion = (e) => {
        e.preventDefault();
        this.setState((prevState => ({[e.target.name]: prevState + e.target.value})))
        this.setState((prevState) => ({visCounter: prevState.visCounter + 1}))
        console.log(this.state.visCounter)
    }

    render() {
        return (
            <form>
            {/* Question 1 */}
            {this.state.visCounter === 1 && <div className="question-wrapper">
                <p className="question-text">Question 1</p>
                <div>
                    <input type="radio" name="q1" value="1" id="id1" onClick={() => (this.setState({gryff: 1}))}/>
                    <label htmlFor="q1-id1">Answer 1</label>
                </div>
                
                <div>
                    <input type="radio" name="q1" value="1" id="q1-id2" onClick={() => (this.setState({slyth: 1}))}/>
                    <label htmlFor="q1-id2">Answer 2</label>
                </div>
                <div>
                    <input type="radio" name="q1" value="1" id="q1-id3" onClick={() => (this.setState({raven: 1}))}/>
                    <label htmlFor="q1-id3">Answer 3</label>
                </div>
                <div>
                    <input type="radio" name="q1" value="1" id="q1-id4" onClick={() => (this.setState({huff: 1}))}/>
                    <label htmlFor="q1-id4">Answer 4</label>
                </div>
                <button onClick={this.nextQuestion}>Continue</button>
            </div>}
                
            {/* Question 2 */}
            {this.state.visCounter === 2 && <div className="question-wrapper">
                <p className="question-text">Question 2</p>
                <div>
                    <input type="radio" name="q2" value="value1" id="id1"/>
                    <label htmlFor="q2-id1">Answer 1</label>
                </div>
                
                <div>
                    <input type="radio" name="q2" value="value2" id="q2-id2"/>
                    <label htmlFor="q2-id2">Answer 2</label>
                </div>
                <div>
                    <input type="radio" name="q3" value="value3" id="q2-id3"/>
                    <label htmlFor="q2-id3">Answer 3</label>
                </div>
                <div>
                    <input type="radio" name="q4" value="value4" id="q2-id4"/>
                    <label htmlFor="q2-id4">Answer 4</label>
                </div>
                <button onClick={this.changeVis}>Continue</button>
            </div>}
                
            {/* Question 3 */}
            {this.state.visCounter === 3 && <div className="question-wrapper">
                <p className="question-text">Question 3</p>
                <div>
                    <input type="radio" name="q3" value="value1" id="id1"/>
                    <label htmlFor="q3-id1">Answer 1</label>
                </div>
                
                <div>
                    <input type="radio" name="q2" value="value2" id="q3-id2"/>
                    <label htmlFor="q3-id2">Answer 2</label>
                </div>
                <div>
                    <input type="radio" name="q3" value="value3" id="q3-id3"/>
                    <label htmlFor="q3-id3">Answer 3</label>
                </div>
                <div>
                    <input type="radio" name="q4" value="value4" id="q3-id4"/>
                    <label htmlFor="q3-id4">Answer 4</label>
                </div>
                <button onClick={this.changeVis}>Continue</button>
            </div>}
                
            {/* Question 4 */}
            {this.state.visCounter === 4 && <div className="question-wrapper">
                <p className="question-text">Question 4</p>
                <div>
                    <input type="radio" name="q4" value="value1" id="id1"/>
                    <label htmlFor="q4-id1">Answer 1</label>
                </div>
                
                <div>
                    <input type="radio" name="q2" value="value2" id="q4-id2"/>
                    <label htmlFor="q4-id2">Answer 2</label>
                </div>
                <div>
                    <input type="radio" name="q3" value="value3" id="q4-id3"/>
                    <label htmlFor="q4-id3">Answer 3</label>
                </div>
                <div>
                    <input type="radio" name="q4" value="value4" id="q4-id4"/>
                    <label htmlFor="q4-id4">Answer 4</label>
                </div>
                <button onClick={this.changeVis}>Continue</button>
            </div>}
                
            {/* Question 5 */}
            {this.state.visCounter === 5 && <div className="question-wrapper">
                <p className="question-text">Question 5</p>
                <div>
                    <input type="radio" name="q5" value="value1" id="id1"/>
                    <label htmlFor="q5-id1">Answer 1</label>
                </div>
                
                <div>
                    <input type="radio" name="q2" value="value2" id="q5-id2"/>
                    <label htmlFor="q5-id2">Answer 2</label>
                </div>
                <div>
                    <input type="radio" name="q3" value="value3" id="q5-id3"/>
                    <label htmlFor="q5-id3">Answer 3</label>
                </div>
                <div>
                    <input type="radio" name="q4" value="value4" id="q5-id4"/>
                    <label htmlFor="q5-id4">Answer 4</label>
                </div>
                <button onClick={this.changeVis}>Continue</button>
            </div>}
                
            {/* Question 6 */}
            {this.state.visCounter === 6 && <div className="question-wrapper">
                <p className="question-text">Question 6</p>
                <div>
                    <input type="radio" name="q6" value="value1" id="id1"/>
                    <label htmlFor="q6-id1">Answer 1</label>
                </div>
                
                <div>
                    <input type="radio" name="q2" value="value2" id="q6-id2"/>
                    <label htmlFor="q6-id2">Answer 2</label>
                </div>
                <div>
                    <input type="radio" name="q3" value="value3" id="q6-id3"/>
                    <label htmlFor="q6-id3">Answer 3</label>
                </div>
                <div>
                    <input type="radio" name="q4" value="value4" id="q6-id4"/>
                    <label htmlFor="q6-id4">Answer 4</label>
                </div>
                <button onClick={this.changeVis}>Continue</button>
            </div>}
                
            {console.log(this.state)}
            </form>
        )
    }
}

export default SortingForm;