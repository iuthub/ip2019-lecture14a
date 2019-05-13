import React from 'react';

export default class ToDoList extends React.Component {
    render(){
        const onDelete = this.props.onDelete;

        return (
            <ul>
                {
                    this.props.items.map(item=>{
                        console.log(item);

                        return (
                            <li key={item.id}>
                                {item.task}
                                <button className='close'
                                        aria-label="Close"
                                        onClick={()=>onDelete(item)}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </li>)
                    })
                }
            </ul>
        )
    }
}