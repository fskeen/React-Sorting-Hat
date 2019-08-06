import React from 'react'

class SortingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visCounter: 1,
            q1: null,
            q2: null,
            q3: null,
            q4: null,
            q5: null,
            q6: null,
            completed: false,
            result: ""
        }
    }

    handleChange = (event) => {
        event.persist();
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState((oldValues) => ({
            ...oldValues,
            [event.target.name]: event.target.value
        }))
    }

    nextQuestion = (e) => {
        e.preventDefault();
        
        if (this.state.visCounter >= 6) {
            this.setState((prevState) => ({visCounter: prevState.visCounter + 1}))
            console.log("complete 1!")
        } else {
        this.setState((prevState) => ({visCounter: prevState.visCounter + 1}))
        console.log(this.props)
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        console.log("completed!")
        this.setState((a) => ({completed: !a.completed}))

        const scores = [this.state.q1, this.state.q2, this.state.q3, this.state.q4, this.state.q5, this.state.q6]
        const result = {}

        for (let i = 0; i < scores.length; i++) {
            let num = scores[i];
            result[num] = result[num] ? result[num] + 1 : 1
        }

        // Object.entries(result).sort(function(a,b){
        //     return a.
        // })

        console.log(Object.entries(result))
    }

    render() {
        return (
            <>
            {!this.state.completed && <form>
            {/* Question 1 */}
            {this.state.visCounter === 1 && <div className="question-wrapper">
                <p className="question-text">Question 1</p>
                <div>
                    <input
                        type="radio"
                        name="q1"
                        value="gryff"
                        id="q1-id1"
                        onClick={this.handleChange}
                        required/>
                    <label htmlFor="q1-id1">Answer 1</label>
                </div>
                
                <div>
                    <input
                        type="radio"
                        name="q1"
                        value="slyth"
                        id="q1-id2" onClick={this.handleChange}/>
                    <label htmlFor="q1-id2">Answer 2</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="q1"
                        value="raven"
                        id="q1-id3" onClick={this.handleChange}/>
                    <label htmlFor="q1-id3">Answer 3</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="q1"
                        value="huff"
                        id="q1-id4" onClick={this.handleChange}/>
                    <label htmlFor="q1-id4">Answer 4</label>
                </div>
                <button
                    disabled={!this.state.q1}
                    onClick={this.nextQuestion}>Continue</button>
            </div>}
                
            {/* Question 2 */}
            {this.state.visCounter === 2 && <div className="question-wrapper">
                <p className="question-text">Question 2</p>
                <div>
                    <input
                        type="radio"
                        name="q2"
                        value="slyth"
                        id="q2-id1"
                        onClick={this.handleChange}
                        required/>
                    <label htmlFor="q2-id1">Answer 1</label>
                </div>
                
                <div>
                    <input
                        type="radio"
                        name="q2"
                        value="gryff"
                        id="q2-id2"
                        onClick={this.handleChange}/>
                    <label htmlFor="q2-id2">Answer 2</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="q2"
                        value="huff"
                        id="q2-id3"
                        onClick={this.handleChange}/>
                    <label htmlFor="q2-id3">Answer 3</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="q2"
                        value="raven"
                        id="q2-id4"
                        onClick={this.handleChange}/>
                    <label htmlFor="q2-id4">Answer 4</label>
                </div>
                <button
                    disabled={!this.state.q2}
                    onClick={this.nextQuestion}>Continue</button>
            </div>}
                
            {/* Question 3 */}
            {this.state.visCounter === 3 && <div className="question-wrapper">
                <p className="question-text">Question 3</p>
                <div>
                    <input
                        type="radio"
                        name="q3"
                        value="slyth"
                        id="q3-id1"
                        onClick={this.handleChange}
                        required/>
                    <label htmlFor="q3-id1">Answer 1</label>
                </div>
                
                <div>
                    <input
                        type="radio"
                        name="q3"
                        value="huff"
                        id="q3-id2"
                        onClick={this.handleChange}/>
                    <label htmlFor="q3-id2">Answer 2</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="q3"
                        value="raven"
                        id="q3-id3"
                        onClick={this.handleChange}/>
                    <label htmlFor="q3-id3">Answer 3</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="q3"
                        value="gryff"
                        id="q3-id4"
                        onClick={this.handleChange}/>
                    <label htmlFor="q3-id4">Answer 4</label>
                </div>
                <button
                disabled={!this.state.q3}
                    onClick={this.nextQuestion}>Continue</button>
            </div>}
                
            {/* Question 4 */}
            {this.state.visCounter === 4 && <div className="question-wrapper">
                <p className="question-text">Question 4</p>
                <div>
                    <input
                        type="radio"
                        name="q4"
                        value="huff"
                        id="q4-id1"
                        onClick={this.handleChange}
                        required/>
                    <label htmlFor="q4-id1">Answer 1</label>
                </div>
                
                <div>
                    <input
                        type="radio"
                        name="q4"
                        value="slyth"
                        id="q4-id2"
                        onClick={this.handleChange}/>
                    <label htmlFor="q4-id2">Answer 2</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="q4"
                        value="raven"
                        id="q4-id3"
                        onClick={this.handleChange}/>
                    <label htmlFor="q4-id3">Answer 3</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="q4"
                        value="gryff"
                        id="q4-id4"
                        onClick={this.handleChange}/>
                    <label htmlFor="q4-id4">Answer 4</label>
                </div>
                <button
                disabled={!this.state.q4}
                    onClick={this.nextQuestion}>Continue</button>
            </div>}
                
            {/* Question 5 */}
            {this.state.visCounter === 5 && <div className="question-wrapper">
                <p className="question-text">Question 5</p>
                <div>
                    <input
                        type="radio"
                        name="q5"
                        value="raven"
                        id="q5-id1"
                        onClick={this.handleChange}
                        required/>
                    <label htmlFor="q5-id1">Answer 1</label>
                </div>
                
                <div>
                    <input
                        type="radio"
                        name="q5"
                        value="huff"
                        id="q5-id2"
                        onClick={this.handleChange}/>
                    <label htmlFor="q5-id2">Answer 2</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="q5"
                        value="gryff"
                        id="q5-id3"
                        onClick={this.handleChange}/>
                    <label htmlFor="q5-id3">Answer 3</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="q5"
                        value="slyth"
                        id="q5-id4"
                        onClick={this.handleChange}/>
                    <label htmlFor="q5-id4">Answer 4</label>
                </div>
                <button
                    disabled={!this.state.q5}
                    onClick={this.nextQuestion}>Continue</button>
            </div>}
                
            {/* Question 6 */}
            {this.state.visCounter === 6 && <div className="question-wrapper">
                <p className="question-text">Question 6</p>
                <div>
                    <input
                        type="radio"
                        name="q6"
                        value="raven"
                        id="q6-id1"
                        onClick={this.handleChange}
                        required/>
                    <label htmlFor="q6-id1">Answer 1</label>
                </div>
                
                <div>
                    <input
                        type="radio"
                        name="q6"
                        value="huff"
                        id="q6-id2"
                        onClick={this.handleChange}/>
                    <label htmlFor="q6-id2">Answer 2</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="q6"
                        value="gryff"
                        id="q6-id3"
                        onClick={this.handleChange}/>
                    <label htmlFor="q6-id3">Answer 3</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="q6"
                        value="slyth"
                        id="q6-id4"
                        onClick={this.handleChange}/>
                    <label htmlFor="q6-id4">Answer 4</label>
                </div>
                <button
                    disabled={!this.state.q6}
                    onClick={this.nextQuestion}>Results</button>
            </div>}

            {this.state.visCounter === 7 && <button onClick = {this.submitForm}>Click to see results!</button>}
                
            {console.log(this.state)}
            </form>}
            {/*this.state.completed && <Result result={this.state.result} />*/}
            </>
        )
    }
}

export default SortingForm;