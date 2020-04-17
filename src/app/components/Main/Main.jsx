import React, {useEffect} from 'react';
// import {DndProvider} from 'react-dnd';
// import HTML5Backend from 'react-dnd-html5-backend';
import {BoardHeader, List} from './../';
import {todos} from './../../config/todos.json';
import './Main.component.scss';

const Main = props => {
  let todos

  useEffect(() => {
    fetch('/todos')
      .then(res => res.json())
      .then(data => console.log(JSON.parse(data)))
  })
  const todoLists = todos && todos.lists
  const todoRenders = todoLists && Object.keys(todoLists).map((todo, key) => <List list={todoLists[todo]} index={key + 1} key={key} />)
  return (
    <div className="container c-Main">
      <div className="row">
        <BoardHeader />
      </div>
      <div className="row c-Main__list-row">
        {todoRenders}
      </div>
    </div>
  );
};

Main.propTypes = {

};

export default Main;