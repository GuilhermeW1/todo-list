import * as React from 'react'

// interface Todo{
//   id: number;
//   title: string;
//   subject?: string;
//   text: string;
//   favorite?: boolean;
// }

// interface AddTodo {
//   title: string;
//   subject?: string;
//   text: string;
//   favorite?: boolean;
// }

// type ActionType = | {type: "ADDTODO", payload: AddTodo} | {type: "REMOVETODO", payload: {id: number}}

// function reducer(state: Todo[],action: ActionType){
//   switch(action.type){
//     case 'ADDTODO':

//       return [...state,
//         {
//           id: state.length,
//           title: action.payload.title,
//           subject: action.payload?.subject,
//           text: action.payload.text,
//           favorite: action.payload?.favorite

//         }
//     ]
//     case 'REMOVETODO':
//       return state.filter(item => item.id !== action.payload.id)

//     default:
//       return state

//   }

// }

// const initialState = {
//   title: "",
//   text: "",
//   favorite: false,
//   subject: "",
// }

// const [todos, dispatch] = React.useReducer(reducer, [] as Todo[])

//   const [inputs, setInputs] = React.useState(initialState)

//   const handleAddTodo =(event: React.FormEvent)=>{
//     event.preventDefault()
//     setInputs(initialState)
//     dispatch({type: 'ADDTODO', payload: inputs })

//   }

//   const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
//     setInputs({...inputs, title: event.target.value })
//   }

//   const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
//     setInputs({...inputs, text: event.target.value })
//   }

//   return (
//     <>
//     <div>
//       {todos.map((todo)=>(
//           <div key={todo.id} >
//             <span>{todo.title}</span>
//             <span>{todo.text}</span>
//             <button value={todo.id} onClick={()=> dispatch({type: 'REMOVETODO', payload: {id: todo.id}})} >delete</button>
//           </div>
//       ))}
//     </div>
//     <form onSubmit={handleAddTodo}>
//       <label htmlFor="title">Title</label>
//       <input
//         id="title"
//         type="text"
//         value={inputs.title}
//         onChange={handleTitleChange}
//       />
//       <label htmlFor="subject">Subject</label>
//       <input
//       type="text"
//         id="text"
//         value={inputs.text}
//         onChange={handleTextChange}
//         />
//         <button type="submit">Manda</button>
//     </form>
//     </>
//   )
