import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {Button, ButtonContainer, TextArea} from './style'
import './index.css'

class TextStyle extends Component {
  state = {textBold: false, textItalic: false, textLine: false}

  onBold = () => {
    this.setState(prevState => ({textBold: !prevState.textBold}))
  }

  onItalic = () => {
    this.setState(prevState => ({textItalic: !prevState.textItalic}))
  }

  onLine = () => {
    this.setState(prevState => ({textLine: !prevState.textLine}))
  }

  render() {
    const {textBold, textItalic, textLine} = this.state
    const color = textBold === false ? '#f1f5f9' : '#faff00'
    const italic = textItalic === false ? '#f1f5f9' : '#faff00'
    const line = textLine === false ? '#f1f5f9' : '#faff00'

    const fontWeight = textBold === false ? 'normal' : 'bold'
    const fontStyle = textItalic === false ? 'normal' : 'italic'
    const textDecoration = textLine === false ? 'normal' : 'underline'

    return (
      <div className="app-container">
        <div className="inside-container">
          <div className="text-img-container">
            <div className="img-container">
              <h1 className="heading">Text Editor</h1>
              <img
                src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png "
                alt="text editor"
                className="img-edit"
              />
            </div>
            <div className="button-contain">
              <ButtonContainer>
                <li>
                  <Button
                    type="button"
                    onClick={this.onBold}
                    color={color}
                    data-testid="bold"
                  >
                    <VscBold size={25} />
                  </Button>
                </li>
                <li>
                  <Button
                    type="button"
                    onClick={this.onItalic}
                    color={italic}
                    data-testId="italic"
                  >
                    <GoItalic size={25} />
                  </Button>
                </li>
                <li>
                  <Button
                    type="button"
                    onClick={this.onLine}
                    color={line}
                    data-testid="underline"
                  >
                    <AiOutlineUnderline size={25} />
                  </Button>
                </li>
              </ButtonContainer>
              <hr className="horizontal-line" />
              <TextArea
                type="text"
                fontWeight={fontWeight}
                fontStyle={fontStyle}
                textDecoration={textDecoration}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TextStyle
