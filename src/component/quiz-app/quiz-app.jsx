
import React, { Component } from 'react'
import './practice.css'
export default class Practice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [
        {
          questionText: 'what is the capital of france?',
          answerOptions: [
            { answerText: 'new york', isCorrect: false },
            { answerText: 'london', isCorrect: false },
            { answerText: 'paris', isCorrect: true },
            { answerText: 'Dublin', isCorrect: false }
          ]
        },
        {
          questionText: 'who is ceo of tesla?',
          answerOptions: [
            { answerText: 'tony stark', isCorrect: false },
            { answerText: 'elon mask', isCorrect: true },
            { answerText: 'bill gates', isCorrect: false },
            { answerText: 'jeff bozos', isCorrect: false }
          ]
        },
        {
          questionText: 'the iphone was creacted by which compay?',
          answerOptions: [
            { answerText: 'apple', isCorrect: true },
            { answerText: 'intel', isCorrect: false },
            { answerText: 'amazon', isCorrect: false },
            { answerText: 'microsoft', isCorrect: false }
          ]
        }
      ],
      currentQuesion: 0,
      showScore: false,
      score: 0
    };
  }
  clickHandler(isCorrect) {
    if (isCorrect) {
      this.setState(prev => {
        return {
          score: prev.score + 1
        }
      })
    }
    if (this.state.currentQuesion === 3) {
      this.setState({showScore: true})
    } else {
      this.setState(prev => {
        return {
          currentQuesion: prev.currentQuesion + 1
        }
      })
    }
  }

  render() {
    return (
      <div>
        {
          this.state.showScore ?
            (
              <div className='score-section'>
                you scored {this.state.showScore} out of {this.state.questions.length}
              </div>
            ) : (
              <div>

                <div className='quesion-section'>
                  <div className='quesion-count'>
                    <span>Quesion {this.state.currentQuesion + 1}</span>/{this.state.questions.length}
                  </div>
                  <div className='quesion-text'>
                    {this.state.questions[this.state.currentQuesion].questionText}
                  </div>
                </div> 

                <div className="answer-section">
                  {this.state.questions[this.state.currentQuesion].answerOptions.map((answer) => (
                    <button onClick={this.clickHandler.bind(this, answer.isCorrect)}>{answer.answerText}</button>
                  ))}
                </div>

              </div>
            )
        }

      </div>
    )
  }
}
