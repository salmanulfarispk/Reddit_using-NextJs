import {NodeHandler, NodeHandlers, TipTapRender} from "@troop.com/tiptap-react-render"



const doc: NodeHandler = (props) => (<>{props.children}</>)

const paragraph: NodeHandler=(props)=>{
   return <p>props.children</p>
}
const text: NodeHandler = (props) => { 
    return <span>{props.node.text}</span>
  }


const handlers: NodeHandlers={
    doc:doc,
    paragraph: paragraph,

}

export default function Rendertojson({data}:{data: any}) {
  return (
    <div>
     <TipTapRender handlers={handlers} node={data}/>




    </div>
  )
}
