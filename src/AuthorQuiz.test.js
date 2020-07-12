import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const state = {
  turnData: {
    books: ['The Adventures of Huckleberry Finn', 'Life on the Mississippi', 'Roughing It'],
    author: {
      name: 'Charles Dickens',
      imageUrl: 'images/authors/marktwain.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['David Copperfield', 'A Tale of Two Cities']
    }
  },
  highlight: 'none'
}

describe("Author Quiz", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={() => {}} />, div);
  });

  describe("When no answer has been selected", () => {
    let wrapper;

    beforeAll(() => {
      wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={() => {}} />);
    });

    it("should have no background colour", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('');
    });
  });

  describe("When the wrong answer has been selected", () => {
    let wrapper;

    beforeAll(() => {
      wrapper = mount(
        <AuthorQuiz {...(Object.assign({}, state, {highlight: 'wrong'}))} onAnswerSelected={() => {}} />);
    });

    it("should have a red background colour", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('red');
    });
  });

  describe("When the correct answer has been selected", () => {
    let wrapper;

    beforeAll(() => {
      wrapper = mount(
        <AuthorQuiz {...(Object.assign({}, state, {highlight: 'correct'}))} onAnswerSelected={() => {}} />);
    });

    it("should have a red background colour", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('green');
    });
  });

  describe("When the first answer is selected", () => {
    let wrapper;
    const handleAnswerSelected = jest.fn();
  
    beforeAll(() => {
      wrapper = mount(
        <AuthorQuiz {...state} onAnswerSelected={handleAnswerSelected} />);
      wrapper.find('.answer').first().simulate('click');
    });

    it("onAnswerSelected should be called", () => {
      expect(handleAnswerSelected).toHaveBeenCalled();
    });

    it("should receive The Adventures of Huckleberry Finn", () => {
      expect(handleAnswerSelected).toHaveBeenCalledWith("The Adventures of Huckleberry Finn");
    })
  });
});
